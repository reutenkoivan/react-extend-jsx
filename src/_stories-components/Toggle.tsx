import type { FC } from 'react'

export type ToggleProps = {
	checked: boolean
	children: string
	onChange: VoidFunction
}

export const Toggle: FC<ToggleProps> = ({ children, onChange, checked }) => {
	return (
		<label>
			<input type='checkbox' checked={checked} onChange={onChange} />
			<span>{children}</span>
		</label>
	)
}
