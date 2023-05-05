import styled, {css} from 'styled-components'

import {colors} from 'lib/ui/styles'

import {Link, Text} from 'modules/common/components'

export const StyledRoot = styled.div`
  height: 100%;
  width: 100%;
  padding: 100px;

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

export const StyledTitle = styled.div<StyledIntersectionProps>`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 50px 0 50px 75px;

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

export const StyledInfo = styled.div<StyledIntersectionProps>`
  width: 50%;
  align-self: end;

  ${getIntersectionRightStyles}

  transition: opacity 3s ease-in-out;

  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`

export const StyledIconContainer = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledTextItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

export const StyledText = styled(Text)``

export const StyledLink = styled(Link)``
