export const getOwnerDocument = (element?: Element | null) =>
  (element && element.ownerDocument) ?? document
