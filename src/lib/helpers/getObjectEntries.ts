import type {AnyObject} from 'lib/types'

export const getObjectEntries = <T extends AnyObject>(o: T): [keyof T, T[keyof T]][] =>
  Object.entries(o)
