import { ShowProps } from './types'

const Show = <T,>({ children, fallback = null, when }: ShowProps<T>) => {
  if (when) {
    if (typeof children === 'function') {
      return children(when)
    }

    return children
  }

  return fallback
}

export default Show
