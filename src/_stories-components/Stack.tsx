import type { CSSProperties, FC, PropsWithChildren } from 'react'

export type StackProps = PropsWithChildren<{
	direction?: 'row' | 'column'
	align?: 'center' | 'flex-start' | 'flex-end'
	justify?: 'center' | 'flex-start' | 'flex-end'
	gap?: number
	p?: number
}>

const getStyles = ({ direction, gap, p, align, justify }: Omit<StackProps, 'children'>): CSSProperties => {
	return {
		display: 'flex',
		flexDirection: direction || 'column',
		justifyContent: justify || 'flex-start',
		gap: gap || 0,
		padding: p || 0,
		alignItems: align || 'flex-start',
	}
}

export const Stack: FC<StackProps> = ({ children, ...options }) => {
	return <div style={getStyles(options)}>{children}</div>
}
