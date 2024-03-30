import { type ReactNode, memo } from 'react'

export type SwitchProps<T extends string> = {
	case: T
	default?: ReactNode | ReactNode[]
	children: Partial<Record<T, ReactNode>>
}

export const Switch = memo(
	<T extends string>({ case: caseProp, default: defaultProp, children }: SwitchProps<T>): ReactNode | ReactNode[] => {
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
	},
)
