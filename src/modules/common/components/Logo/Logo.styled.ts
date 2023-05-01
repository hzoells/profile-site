import styled from 'styled-components'
import {text} from 'lib/ui/styles'

import Image from 'modules/common/components/Image'
import Text from 'modules/common/components/Text'

export type LogoSize = 'xs' | 'sm' | 'md'

export const StyledRoot = styled.div`
  display: flex;
  align-items: center;
`

interface StyledImageProps {
  size: LogoSize
}

const getImageMaxWidth = ({size}: StyledImageProps) =>
  ({
    xs: '24px',
    sm: '32px',
    md: '40px',
  }[size])

const getImageMaxHeight = ({size}: StyledImageProps) =>
  ({
    xs: '24px',
    sm: '32px',
    md: '40px',
  }[size])

export const StyledImage = styled(Image)<StyledImageProps>`
  // Sometimes the component's styles override these instead of vice versa, so increase specificity
  &&& {
    width: auto;
    max-width: ${getImageMaxWidth};
    height: auto;
    max-height: ${getImageMaxHeight};
    object-fit: cover;
  }
`

interface StyledTextProps {
  size: LogoSize
}

const getTextFontSize = ({size}: StyledTextProps) =>
  ({
    xs: '20px',
    sm: '20px',
    md: '24px',
  }[size])

export const StyledText = styled(Text)<StyledTextProps>`
  margin-left: 12px;
  font-family: ${text.fontFamily.primary};
  font-size: ${getTextFontSize};
`
