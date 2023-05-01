import Router from 'next/router'

import {PageRes} from 'modules/common/types'
import {AnyObject} from 'lib/types'
import {noop} from './noop'

// TODO: Type this better, and clean this up
export interface RedirectOptions {
  as?: any
  href?: any
  res?: PageRes
  scroll?: boolean
  shallow?: boolean
  isNewTab?: boolean
  isReload?: boolean
  isReplaced?: boolean
  hash?: string
  query?: AnyObject<string | string[]>
}

// When we're redirecting in `getInitialProps`, we can `await` the redirect to ensure that it
// happens before the page loads and flashes in the user's browser
export const redirect = async (options: RedirectOptions) => {
  const {res = undefined, scroll, shallow, isNewTab, isReload, isReplaced, hash, query} = options

  let {href, as = href} = options

  const queryString =
    query && Object.keys(query).length ? `?${new URLSearchParams(query as any).toString()}` : ''

  const hashString = hash ? `#${hash}` : ''

  href = `${href}${queryString}${hashString}`
  as = `${as}${queryString}${hashString}`

  if (typeof res !== 'undefined') {
    // Server side
    res.writeHead(302, {Location: as})
    res.end()
  } else if (isNewTab) {
    window.open(as, '_blank')
  } else if (isReload) {
    window.location = as
  } else if (isReplaced) {
    Router.replace(href, as, {scroll, shallow})
  } else {
    Router.push(href, as, {scroll, shallow})
    // Make getInitialProps work with history (https://github.com/zeit/next.js/issues/3065#issuecomment-416395992)
    Router.beforePopState(({url, as}) => {
      Router.replace(url, as, {})
      return false
    })
  }

  await new Promise(noop)
}
