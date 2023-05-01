import type {AnyFunction} from 'lib/types'

interface DebounceOptions {
  isImmediate?: boolean
  isGuaranteed?: boolean
}

// Adapted from (https://www.npmjs.com/package/just-debounce)
export const debounce = (
  func: AnyFunction,
  delay: number,
  options: DebounceOptions = {}
): AnyFunction => {
  const {isImmediate = false, isGuaranteed = false} = options

  let that: typeof globalThis | null
  let args: Parameters<AnyFunction>
  let timeout: ReturnType<typeof setTimeout> | null

  const clear = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  const run = () => {
    clear()
    func.apply(that, args)
  }

  return function debounced(this: typeof globalThis) {
    that = this
    // eslint-disable-next-line prefer-rest-params
    args = Array.prototype.slice.call(arguments)

    if (timeout && (isImmediate || isGuaranteed)) {
      return
    }
    if (!isImmediate) {
      clear()
      timeout = setTimeout(run, delay)

      return timeout
    }

    timeout = setTimeout(clear, delay)
    func.apply(that, args)
  }
}
