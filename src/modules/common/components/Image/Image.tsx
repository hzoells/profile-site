import React, {
  ComponentType,
  SyntheticEvent,
  memo,
  useRef,
} from 'react'


import {Image as ImageIcon} from 'modules/common/icons'
import {
  StyledHighQualityImage,
  StyledIcon,
  StyledRoot,
} from './Image.styled'

export interface ImageProps {
  alt: string
  className?: string
  hasPlaceholderIcon?: boolean
  onError?: (event: SyntheticEvent<HTMLImageElement>) => void
  onLoad?: (event: SyntheticEvent<HTMLImageElement>) => void
  placeholderIcon?: ComponentType<any>
  placeholderIconSize?: string
  // Src can be http string, ipfs string, or FileSrcMap
  src?: string
}

export function Image(props: ImageProps) {
  const {
    alt,
    className,
    hasPlaceholderIcon = false,
    onError,
    placeholderIcon,
    placeholderIconSize = '40px',
    src = '',
  } = props

  const imageRef = useRef<HTMLImageElement | null>(null)

  let contentEl
  if (src) {
      contentEl = (
        // No image src map, just render high quality image
        <StyledHighQualityImage
          alt={alt}
          isLoaded
          onError={onError}
          ref={imageRef}
          src={src}
        />
      )
  } else if (hasPlaceholderIcon || placeholderIcon) {
    contentEl = <StyledIcon as={placeholderIcon || ImageIcon} size={placeholderIconSize} />
  }

  return (
    <StyledRoot className={className} hasImage={!!src}>
      {contentEl}
    </StyledRoot>
  )
}

export default memo(Image)
