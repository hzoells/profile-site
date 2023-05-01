import React, {memo} from 'react'

import {SHOW_LOADING_DELAY_MS} from 'modules/core/constants'

import NProgressBase from 'nprogress'
import Router from 'next/router'

import {NProgressStyles} from './NProgress.styled'

NProgressBase.configure({
  showSpinner: false,
})

let timeout: ReturnType<typeof setTimeout> | null

const handleRouteChangeStart = (asPath: string) => {
  if (!timeout && Router.asPath !== asPath) {
    timeout = setTimeout(NProgressBase.start, SHOW_LOADING_DELAY_MS)
  }
}

const handleRouteChangeFinish = () => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
    NProgressBase.done()
  }
}

Router.events.on('routeChangeStart', handleRouteChangeStart)
Router.events.on('routeChangeComplete', handleRouteChangeFinish)
Router.events.on('routeChangeError', handleRouteChangeFinish)

export const NProgress = () => <NProgressStyles />

export default memo(NProgress)
