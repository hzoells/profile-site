export interface AnyFunction<Type = any> {
  (...args: any[]): Type
}

export interface AnyObject<Type = any> {
  [key: string]: Type
}

/**
 * Makes all keys in T partial, including nested keys.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

/**
 * Makes passed keys (K) in T partial, while leaving the rest of T's keys unaffected.
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Makes passed keys (K) in T required, while leaving the rest of T's keys unaffected.
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

/**
 * Allows fully overriding properties of an interface (https://github.com/microsoft/TypeScript/issues/50989)
 */
export type Override<T, K extends Partial<{[P in keyof T]: any}>> = Omit<T, keyof K> & K

/**
 * Promisifies the return type of a function
 */
export type AsyncFunctionFrom<F extends (...args: any) => any> = (
  ...params: Parameters<F>
) => Promise<ReturnType<F>>

// Filter an interface based on a condition
// from https://medium.com/dailyjs/typescript-create-a-condition-based-subset-types-9d902cea5b8c
type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base]

export type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>

// Set some fields of a interface to partial
export type RequiredFields<T, F extends keyof T> = Partial<Exclude<T, F>> & Pick<T, F>

export type ApiCallError = AnyObject<string> | string | null

// Distribute an omit across a union type (https://stackoverflow.com/a/57103940)
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never

// Convert a union type to an intersection type (https://stackoverflow.com/a/50375286)
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never
