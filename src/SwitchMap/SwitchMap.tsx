import type { ReactNode } from 'react'
import { genericMemo } from '../utils/genericMemo'

export type SwitchMapProps<T extends string> = {
	case: T
	default?: ReactNode | ReactNode[]
	children: Partial<Record<T, ReactNode | ReactNode[]>>
}

const SwitchMapComponent = <T extends string>({
	case: caseProp,
	default: defaultProp,
	children,
}: SwitchMapProps<T>): ReactNode | ReactNode[] => {
	if (!caseProp) {
		return defaultProp || null
	}

	const child = children[caseProp]

	if (child) {
		return child
	}

	if (defaultProp) {
		return defaultProp
	}

	return null
}

export const SwitchMap = genericMemo(SwitchMapComponent)
