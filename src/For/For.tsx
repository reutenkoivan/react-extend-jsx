import { Children, Fragment, type ReactNode, memo } from 'react'

export type ForProps<T> = {
	of: T[] | readonly T[]
	children: (item: T, index?: number) => ReactNode | ReactNode[]
	keyMapper?: (item: T, index?: number) => string | number
}

export const For = memo(<T,>({ children, of, keyMapper }: ForProps<T>): ReactNode => {
	return (
		<Fragment>
			{Children.toArray(
				of.map((item, index) => {
					const key = keyMapper?.(item, index) ?? index

					return <Fragment key={key}>{children(item, index)}</Fragment>
				}),
			)}
		</Fragment>
	)
})
