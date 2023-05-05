import NextDocument, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class _Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
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
