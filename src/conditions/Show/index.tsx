import { ShowProps } from './types'

const Show = <T,>({ children, fallback = null, when }: ShowProps<T>): JSX.Element | null => {
  if (when) {
    if (typeof children === 'function') {
      return children(when)
    }

    return children
  }

  return fallback
}

export default Show
