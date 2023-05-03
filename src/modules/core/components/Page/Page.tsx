import React, {ReactNode, memo} from 'react'

import {GlobalStyles} from 'lib/ui/globals'
import {Footer, Head, Header, NProgress} from './components'
import {StyledMainContent, StyledRoot} from './Page.styled'

import {HeadProps} from './components/Head'

export interface PageProps {
  children: ReactNode
  className?: string
  headProps?: Partial<HeadProps>
  isFooterEnabled?: boolean
  isHeaderEnabled?: boolean
  isSidebarEnabled?: boolean
}

export const Page = (props: PageProps) => {
  const {
    children,
    className,
    headProps,
    isHeaderEnabled = true,
    isFooterEnabled = false,
    isSidebarEnabled = false,
  } = props

  return (
    <>
      <Head {...headProps} />

      <GlobalStyles />
      <NProgress />

      {isHeaderEnabled && <Header />}

      <StyledRoot
        className={className}
        isHeaderEnabled={isHeaderEnabled}
        isSidebarEnabled={isSidebarEnabled}
      >
        <StyledMainContent>{children}</StyledMainContent>

        {isFooterEnabled && <Footer />}
      </StyledRoot>
    </>
  )
}

export default memo(Page)
