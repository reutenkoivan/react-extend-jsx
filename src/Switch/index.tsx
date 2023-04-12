import { useMemo } from 'react'
import { SwitchProps } from './types'

const Switch = <T extends string>({
  case: caseProp,
  default: defaultProp,
  children
}: SwitchProps<T>): JSX.Element | null => {
    return useMemo(() => {
        const child = children[caseProp]

        if (child) {
            return child as JSX.Element
        }

        if (defaultProp) {
            return defaultProp
        }

        return null
    }, [caseProp, children, defaultProp])
}

export default Switch
