import React from 'react'

import {Nunito} from 'next/font/google'

import {DEBOUNCE_DELAY_MS} from 'lib/constants'
import {IS_BROWSER} from 'modules/core/constants'

import {coreActions} from 'modules/core/redux'

import {debounce} from 'lib/helpers'
import {withStore} from 'store/withStore'

import NextApp from 'next/app'
import {Provider} from 'react-redux'

import {AnyObject} from 'lib/types'

const nunito = Nunito({subsets: ['latin']})

class App extends NextApp {
  constructor(props: AnyObject) {
    super(props)
  }

  componentDidMount() {
    const {
      store: {dispatch},
    } = this.props

    if (IS_BROWSER) {
      // Setup responsiveness listener on client
      const handleResize = debounce(() => {
        dispatch(coreActions.updateResponsive(undefined, false))
      }, DEBOUNCE_DELAY_MS)

      handleResize()
      window.addEventListener('resize', handleResize)
    }
  }

  render() {
    const {Component, pageProps, store} = this.props

    // Handle statusCode prop returned from any page's getInitialProps
    const {statusCode} = pageProps

    return (
      <Provider store={store}>
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    )
  }
}

export default withStore(App)
