import React, { Fragment, Children } from 'react'
import { ForProps } from './types'

const For = <T,>({ children, of }: ForProps<T>): JSX.Element => {
  return (
    <Fragment>
      {Children.toArray(
        of.map((item, index) => (
          <Fragment key={index}>{children(item, index)}</Fragment>
        ))
      )}
    </Fragment>
  )
}

export default For
