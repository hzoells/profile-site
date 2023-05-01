// Window type check cannot be made with `isUndefined` type helper
export const getIsServer = () => typeof window === 'undefined'
