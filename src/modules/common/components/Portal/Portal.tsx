import React, {ReactNode, cloneElement, forwardRef, isValidElement, memo, useState} from 'react'

import {createPortal} from 'react-dom'
import {setRef} from 'modules/common/helpers'

import {useEnhancedEffect, useForkRef} from 'modules/common/hooks'

export type PortalElement = HTMLElement

export interface PortalProps {
  children?: ReactNode
  isDisabled?: boolean
}

export const Portal = forwardRef<PortalElement, PortalProps>((props: PortalProps, ref) => {
  const {children, isDisabled = false} = props

  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)
  const forkRef = useForkRef(ref, (children as any)?.ref)

  useEnhancedEffect(() => {
    if (!isDisabled) {
      setMountNode(document.body)
    }
  }, [isDisabled])

  useEnhancedEffect(() => {
    if (!isDisabled && mountNode) {
      setRef(ref, mountNode)

      return () => {
        setRef(ref, null)
      }
    }
  }, [isDisabled, mountNode, ref])

  if (isDisabled) {
    return (
      <>
        {isValidElement(children)
          ? cloneElement(children as any, {
              ref: forkRef,
            })
          : children}
      </>
    )
  }

  return <>{mountNode ? createPortal(children, mountNode) : mountNode}</>
})

export default memo(Portal)
