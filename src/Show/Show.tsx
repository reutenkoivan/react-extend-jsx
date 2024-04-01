import type { FC, ReactNode } from 'react'
import type { TruthyValue } from '../types'
import { genericMemo } from '../utils/genericMemo'

export type ShowProps<T> = {
	when: T
	fallback?: ReactNode | ReactNode[]
	children: FC<TruthyValue<T>> | ReactNode | ReactNode[]
}

const ShowComponent = <T,>({ children, fallback = null, when }: ShowProps<T>): ReactNode | ReactNode[] => {
	if (!when) {
		return fallback
	}

	if (typeof children === 'function') {
		return children(when as TruthyValue<T>)
	}

	return children
}

export const Show = genericMemo(ShowComponent)
