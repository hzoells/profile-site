import React from 'react'

import {PAGE_FONTS_PATH} from 'modules/core/constants'

import NextDocument, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {DocumentContext} from 'modules/core/types'
import {GlobalFonts} from './components'

class _Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <GlobalFonts path={PAGE_FONTS_PATH} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

_Document.getInitialProps = async (context: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = context.renderPage

  try {
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await NextDocument.getInitialProps(context)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default _Document
