import React, {memo} from 'react'

import {
  StyledBrandContainer,
  StyledContentContainer,
  StyledLayoutBlock,
  StyledMainContentContainer,
  StyledRoot,
} from './Footer.styled'

export interface FooterProps {
  className?: string
}

export function Footer({className}: FooterProps) {
  return (
    <StyledRoot className={className}>
      <StyledLayoutBlock>
        <StyledContentContainer>
          <StyledBrandContainer>Branding Goes Here</StyledBrandContainer>

          <StyledMainContentContainer>Footer</StyledMainContentContainer>
        </StyledContentContainer>
      </StyledLayoutBlock>
    </StyledRoot>
  )
}

export default memo(Footer)
