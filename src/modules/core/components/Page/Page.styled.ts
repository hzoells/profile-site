import {HEADER_HEIGHT, SIDEBAR_WIDTH} from 'modules/core/constants'

import styled from 'styled-components'
import {mixins} from 'lib/ui/styles'

interface StyledRootProps {
  isHeaderEnabled: boolean
  isSidebarEnabled: boolean
}

const getRootPaddingTop = (props: StyledRootProps) => {
  const {isHeaderEnabled} = props

  return isHeaderEnabled ? HEADER_HEIGHT : 0
}

const getRootPaddingLeft = (props: StyledRootProps) => {
  const {isSidebarEnabled} = props

  return isSidebarEnabled ? SIDEBAR_WIDTH : 0
}

export const StyledRoot = styled.main<StyledRootProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding-top: ${getRootPaddingTop};

  ${mixins.media('desktop')} {
    padding-left: ${getRootPaddingLeft};
  }
`

export const StyledMainContent = styled.div`
  flex: 1;
`
