import React, {Component} from 'react'

import {IS_SERVER, WINDOW_STORE} from 'modules/core/constants'

import {createStore} from './createStore'

import type {NextComponentType} from 'next'
import type {AnyObject} from 'lib/types'
import type {AppContext} from 'modules/common/types'
import type {State, Store} from './types'

const getOrCreateStore = (initialState?: Partial<State>): Store => {
  if (IS_SERVER) {
    // Always make a new store
    return createStore(initialState)
  }

  if (!(window as any)[WINDOW_STORE]) {
    // Memoize store
    (window as any)[WINDOW_STORE] = createStore(initialState)
  }

  return (window as any)[WINDOW_STORE]
}

interface AppWithStoreProps {
  initialProps: AnyObject
  initialState: Partial<State>
}

export const withStore = (App: NextComponentType<AppContext, AnyObject, AnyObject>) =>
  class AppWithStore extends Component<AppWithStoreProps> {
    public static async getInitialProps(appContext: AppContext) {
      const store = getOrCreateStore()

      // Provide data to context of getInitialProps for pages
      appContext.ctx.store = store
      appContext.ctx.isServer = IS_SERVER

      const initialProps = App.getInitialProps ? await App.getInitialProps(appContext) : {}

      return {
        initialProps,
        initialState: store.getState(),
        isServer: IS_SERVER,
      }
    }

    public constructor(props: AppWithStoreProps) {
      super(props)
      this.store = getOrCreateStore(props.initialState)
    }

    protected store: Store

    render() {
      const {
        initialProps,
        initialState, // Ignore
        ...props
      } = this.props

      return <App {...props} {...initialProps} store={this.store} />
    }
  }
