// Window type check cannot be made with `isUndefined` type helper
export const getIsBrowser = () => typeof window !== 'undefined'
