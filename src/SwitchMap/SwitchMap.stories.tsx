import { Stack } from '@stories-components/Stack'
import type { Meta } from '@storybook/react'
import { type ChangeEventHandler, useState } from 'react'
import { SwitchMap } from './SwitchMap.tsx'

const meta = {
	title: 'SwitchMap',
	component: SwitchMap,
	tags: ['autodocs'],
	parameters: {
		docs: {
			toc: true,
		},
	},
} satisfies Meta<typeof SwitchMap>

export default meta

export const Simple = () => {
	const options = [
		{
			value: 'one',
			label: 'One',
		},
		{
			value: 'two',
			label: 'Two',
		},
		{
			value: 'three',
			label: 'Three',
		},
		{
			value: 'unknown',
			label: 'Unknown',
		},
	]

	const [selectedValue, setSelectedValue] = useState(options[0].value)

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setSelectedValue(event.target.value)
	}

	return (
		<Stack gap={20}>
			<Stack direction='row' gap={5}>
				{options.map((option) => (
					<label key={option.value}>
						<input type='radio' value={option.value} checked={selectedValue === option.value} onChange={handleChange} />
						<span>{option.label}</span>
					</label>
				))}
			</Stack>

			<SwitchMap case={selectedValue} default={<span>Some Default Component</span>}>
				{{
					one: <span>One</span>,
					two: <span>Two</span>,
					three: 'Three',
				}}
			</SwitchMap>
		</Stack>
	)
}
