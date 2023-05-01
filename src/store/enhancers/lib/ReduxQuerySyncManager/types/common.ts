import type {AnyFunction} from 'lib/types'

export interface ReduxQuerySyncParam<Value = any> {
  action: AnyFunction
  defaultValue: Value
  selector: AnyFunction<Value>
  shouldReplace?: boolean
  stringToValue?: (string: string) => Value
  valueToString?: (value: Value) => string
}

export interface ReduxQuerySyncParams {
  [key: string]: ReduxQuerySyncParam
}
