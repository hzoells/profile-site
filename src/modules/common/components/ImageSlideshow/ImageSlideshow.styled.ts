import styled, {css} from 'styled-components'

import {colors} from 'lib/ui/styles'

import Image from 'modules/common/components/Image'
import {ChevronLeft, ChevronRight} from 'modules/common/icons'
import {SlideIndicator} from './components'

export const StyledRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 8px;
`

export const StyledSlidesContainer = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;

  margin-bottom: 10px;
`

export interface StyledSlideProps {
  isCurrentSlide: boolean
}

const getSlideDisplay = ({isCurrentSlide}: StyledSlideProps) =>
  isCurrentSlide
    ? css`
        display: flex;
      `
    : css`
        display: none;
      `

export const StyledSlide = styled.div<StyledSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  ${getSlideDisplay}

  justify-content: center;

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: fade;
  animation-duration: 1.5s;
`

export const StyledImageHolder = styled.div`
  height: 100%;
`

export const StyledImage = styled(Image)`
  height: 100%;
`

export interface SlideNavButtonProps {
  isDisabled?: boolean
}

const getDisabledProps = ({isDisabled}: SlideNavButtonProps) =>
  isDisabled
    ? css`
        display: none;
      `
    : css`
        display: flex;
      `

export const StyledBackButton = styled.div<SlideNavButtonProps>`
  position: absolute;
  left: 0;
  height: 100%;
  width: 50%;

  ${getDisabledProps}

  align-items: center;
  justify-content: flex-start;

  opacity: 0;
  transition: opacity 1s;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`

export const StyledForwardButton = styled.div<SlideNavButtonProps>`
  position: absolute;
  right: 0;
  height: 100%;
  width: 50%;
  padding: 10px;

  ${getDisabledProps}

  align-items: center;
  justify-content: flex-end;

  opacity: 0;
  transition: opacity 1s;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`

export const StyledChevronLeft = styled(ChevronLeft)``

export const StyledChevronRight = styled(ChevronRight)``

export const StyledSlideIndicator = styled(SlideIndicator)`
  align-self: center;
`
