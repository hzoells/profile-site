import {getOwnerDocument} from './getOwnerDocument'

export const getOwnerWindow = (element?: Element | null) => {
  const ownerDocument = getOwnerDocument(element)
  return ownerDocument.defaultView ?? window
}
