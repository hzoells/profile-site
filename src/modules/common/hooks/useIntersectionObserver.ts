import {useEffect} from 'react'

export const useIntersectionObserver = (
  element: HTMLElement | null,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const {root = null, rootMargin, threshold} = options

  useEffect(() => {
    if (element) {
      const ioOptions = {root, rootMargin, threshold}
      const io = new IntersectionObserver(callback, ioOptions)

      io.observe(element)

      return () => {
        io.disconnect()
      }
    }
  }, [callback, element, root, rootMargin, threshold])
}
