export const isBigInt = (value: any): value is bigint => typeof value === 'bigint'

export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'

export const isDate = (value: any): value is Date => value instanceof Date

export const isDefined = <T>(value: T | undefined): value is T => typeof value !== 'undefined'

export const isFunction = (value: any): value is Function => typeof value === 'function'

export const isNull = (value: any): value is null => value === null

export const isNumber = (value: any): value is number => typeof value === 'number'

export const isObject = (value: any): value is object => !isNull(value) && typeof value === 'object'

export const isPlainObject = (value: any): value is object => {
  if (!isObject(value)) {
    return false
  }

  const prototype = Object.getPrototypeOf(value)

  if (isNull(prototype)) {
    return true
  }

  const constructor =
    Object.prototype.hasOwnProperty.call(prototype, 'constructor') && prototype.constructor

  return (
    isFunction(constructor) &&
    constructor instanceof constructor &&
    Function.prototype.toString.call(constructor) === Function.prototype.toString.call(Object)
  )
}

export const isString = (value: any): value is string => typeof value === 'string'

export const isSymbol = (value: any): value is symbol => typeof value === 'symbol'

export const isUndefined = (value: any): value is undefined => typeof value === 'undefined'
