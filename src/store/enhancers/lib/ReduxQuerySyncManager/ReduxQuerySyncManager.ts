import {IS_BROWSER} from 'modules/core/constants'

import queryString from 'query-string'
import {getObjectEntries} from 'lib/helpers'
import {redirect} from 'modules/common/helpers'

import Router from 'next/router'

import type {Store} from 'redux'
import type {AnyObject} from 'lib/types'
import type {ReduxQuerySyncParams} from './types'

const {parse, stringify} = queryString

// Adapted from (https://github.com/Treora/redux-query-sync)
export class ReduxQuerySyncManager {
  private params

  private store

  // Used to ignore state changes while location change is in progress
  private isRouteChangeInProgress = false

  // Used to ignore events when we induced the update ourselves
  private shouldUpdateLocation = true

  // Used to ignore events when we induced the update ourselves
  private shouldUpdateState = true

  private prevTrueQueryValues: AnyObject = {}

  public constructor(params: ReduxQuerySyncParams, store: Store) {
    this.params = params
    this.store = store

    if (!IS_BROWSER) {
      return
    }

    Router.events.on('routeChangeStart', () => {
      this.isRouteChangeInProgress = true
    })

    Router.events.on('routeChangeComplete', () => {
      this.handleLocationUpdate()
      this.isRouteChangeInProgress = false
    })

    store.subscribe(this.handleStateUpdate)

    this.handleLocationUpdate()
  }

  private getTrueQueryValues = () =>
    getObjectEntries(this.params).reduce((acc, [paramName, paramOptions]) => {
      const {defaultValue, stringToValue = s => s} = paramOptions

      const valueString = Router.query[paramName] as string
      const value = typeof valueString === 'undefined' ? defaultValue : stringToValue(valueString)

      return {
        ...acc,
        [paramName]: value,
      }
    }, {} as AnyObject)

  private handleLocationUpdate = () => {
    if (!this.shouldUpdateLocation) {
      return
    }

    const trueQueryValues = this.getTrueQueryValues()

    this.shouldUpdateState = false

    getObjectEntries(trueQueryValues).forEach(([trueQueryName, trueQueryValue]) => {
      const prevQueryValue = this.prevTrueQueryValues[trueQueryName]

      if (trueQueryValue !== prevQueryValue) {
        const {action, selector} = this.params[trueQueryName]

        if (selector(this.store.getState()) !== trueQueryValue) {
          this.store.dispatch(action(trueQueryValue))
        }
      }
    })

    this.shouldUpdateState = true

    this.prevTrueQueryValues = trueQueryValues
  }

  private handleStateUpdate = () => {
    if (!this.shouldUpdateState || this.isRouteChangeInProgress) {
      return
    }

    let shouldReplace = false

    const [as, prevQueryParamsString = ''] = Router.asPath.split('?')
    const queryParams = parse(prevQueryParamsString)

    getObjectEntries(this.params).forEach(([paramName, paramOptions]) => {
      const {
        defaultValue,
        selector,
        shouldReplace: shouldReplaceOption = false,
        valueToString = v => `${v}`,
      } = paramOptions

      const value = selector(this.store.getState())

      if (value === defaultValue) {
        delete queryParams[paramName]
      } else {
        queryParams[paramName] = valueToString(value)
      }

      this.prevTrueQueryValues[paramName] = value
      shouldReplace = shouldReplace || shouldReplaceOption
    })

    const queryParamsString = stringify(queryParams)

    if (queryParamsString !== prevQueryParamsString) {
      this.shouldUpdateLocation = false

      redirect({
        as,
        href: Router.pathname,
        query: queryParams as AnyObject,
        isReplaced: shouldReplace,
        shallow: true,
      })

      this.shouldUpdateLocation = true
    }
  }
}
