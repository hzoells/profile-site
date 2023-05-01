import styled from 'styled-components'
import {mixins} from 'lib/ui/styles'

export const StyledRoot = styled.div`
  display: grid;
  width: 100%;
  padding: 32px 16px;

  ${mixins.media('tablet')} {
    padding: 32px 24px;
  }

  ${mixins.media('desktop')} {
    padding: 64px 72px;
  }
`

export const StyledInnerContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
