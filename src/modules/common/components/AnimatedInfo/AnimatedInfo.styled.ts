import styled, {css} from 'styled-components'

import {colors} from 'lib/ui/styles'

import Text from 'modules/common/components/Text'

export interface MobileProps {
  isMobile: boolean
}

export interface StyledRootProps extends MobileProps {}

const getRootMobileProps = ({isMobile}: MobileProps) =>
  isMobile
    ? css`
        padding: 20px 20px 20px 25px;
      `
    : css`
        padding: 100px;
      `

export const StyledRoot = styled.div<StyledRootProps>`
  height: 100%;
  width: 100%;
  ${getRootMobileProps}

  display: flex;
  flex-direction: column;
`

export interface StyledIntersectionProps {
  isIntersecting: boolean
}

const getIntersectionLeftStyles = ({isIntersecting}: StyledIntersectionProps) => {
  return isIntersecting
    ? css`
        opacity: 1;
        transform: translateX(0);
      `
    : css`
        opacity: 0;
        transform: translateX(-50%);
      `
}

const getIntersectionLeftAfterStyles = ({isIntersecting}: StyledIntersectionProps) =>
  isIntersecting
    ? css`
        width: 100%;
        transform: rotate(-5deg);
      `
    : css`
        width: 30%;
        transform: rotate(-90deg);
      `

const getTitleMobileProps = ({isMobile}: MobileProps) =>
  isMobile
    ? css`
        width: 100%;
        padding: 50px 0 50px 0;
      `
    : css`
        width: 50%;
        padding: 50px 0 50px 75px;
      `

export interface StyledTitleProps extends StyledIntersectionProps, MobileProps {}

export const StyledTitle = styled.div<StyledTitleProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${getTitleMobileProps}

  margin-bottom: 50px;

  ${getIntersectionLeftStyles}

  transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    background-color: ${colors.white};
    border-radius: 5px;

    ${getIntersectionLeftAfterStyles}

    transition: width 1.5s ease-in-out, transform 1.5s ease-in-out;
  }
`

export const StyledTitleText = styled(Text)``

const getIntersectionRightStyles = ({isIntersecting}: StyledIntersectionProps) => {
  return isIntersecting
    ? css`
        opacity: 1;
      `
    : css`
        opacity: 0;
      `
}

const getInfoMobileProps = ({isMobile}: MobileProps) =>
  isMobile
    ? css`
        width: 100%;
        align-self: start;
      `
    : css`
        width: 50%;
        align-self: end;
      `

export interface StyledInfoProps extends StyledIntersectionProps, MobileProps {}

export const StyledInfo = styled.div<StyledInfoProps>`
  ${getInfoMobileProps}

  ${getIntersectionRightStyles}

  transition: opacity 3s ease-in-out;

  padding-bottom: 40px;
`
