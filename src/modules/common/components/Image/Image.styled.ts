import styled from 'styled-components'
import {colors, transitions} from 'lib/ui/styles'

interface StyledRootProps {
  hasImage: boolean
}

export const StyledRoot = styled.div<StyledRootProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;

  ${({hasImage}) => {
    if (!hasImage) {
      return `
        background-color: ${colors.mirage1};
        color: ${colors.black};
      `
    }
  }}
`

interface StyledLowQualityImageContainerProps {
  showLowQualityImage: boolean
}

export const StyledLowQualityImageContainer = styled.div<StyledLowQualityImageContainerProps>`
  // Ensure the low quality image is below the high quality one
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // The low quality image sometimes overflows when there's border-radius
  border-radius: inherit;
  overflow: hidden;
  // Pass inherited object-fit to image
  object-fit: inherit;
  visibility: ${({showLowQualityImage}) => (showLowQualityImage ? 'visible' : 'hidden')};
  transition: visibility 0ms ${transitions.timing.default} ${transitions.duration.medium};
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: inherit;
`

export const StyledLowQualityImage = styled(StyledImage)`
  filter: blur(20px);
  // Fixes a bug in Safari where edges won't be sharp
  transform: scale(1.1);
`

interface StyledHighQualityImageProps {
  isLoaded: boolean
}

export const StyledHighQualityImage = styled(StyledImage)<StyledHighQualityImageProps>`
  opacity: ${({isLoaded}) => (isLoaded ? 1 : 0)};
  transition: opacity ${transitions.duration.medium} ${transitions.timing.default};
`

interface StyledIconProps {
  size: string
}

export const StyledIcon = styled.span<StyledIconProps>`
  font-size: ${({size}) => size};
`
