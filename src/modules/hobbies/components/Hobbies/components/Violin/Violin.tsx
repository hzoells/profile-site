import React, {memo} from 'react'

import {useSelector} from 'modules/common/hooks'
import {coreSelectors} from '@/modules/core/redux'

import {
  StyledIframe,
  StyledInfo,
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Violin.styled'

export interface ViolinProps {
  className?: string
}

export const Violin = (props: ViolinProps) => {
  const {className} = props

  const isMobile = useSelector(coreSelectors.getIsMobile)

  return (
    <StyledRoot className={className} title='VIOLIN'>
      <StyledInfo>
        <StyledItemContentContainer>
          <StyledText>
            My favorite hobby is playing the violin. I play in several amateur orchestras in the
            Chicago area and regularly play chamber music.
          </StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText>Mendelssohn Octet (2022)</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledIframe
          isMobile={isMobile}
          src='https://youtube.com/embed/a63j-8meDKk?start=208;modestbranding=1;showinfo=0'
        />

        <StyledItemTitleContainer>
          <StyledTitleText>Ysaye Sonata No. 2 (2022)</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledIframe
          isMobile={isMobile}
          src='https://youtube.com/embed/n4V0LqfaDWk?modestbranding=1;showinfo=0'
        />
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Violin)
