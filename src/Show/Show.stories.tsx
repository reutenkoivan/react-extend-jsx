import { Stack } from '@stories-components/Stack'
import { Toggle } from '@stories-components/Toggle'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Show } from './Show'

const meta = {
	title: 'Show',
	component: Show,
	tags: ['autodocs'],
	parameters: {
		docs: {
			toc: true,
		},
	},
} satisfies Meta<typeof Show>

export default meta

export const Simple = () => {
	const [show, setShow] = useState(false)

	const toggleShow = () => {
		setShow((prev) => !prev)
	}

	return (
		<Stack gap={10}>
			<Toggle checked={show} onChange={toggleShow}>
				Toggle show
			</Toggle>

			<Show when={show}>
				<span>This is some content</span>
			</Show>
		</Stack>
	)
}

export const SimpleWithFallback = () => {
	const [show, setShow] = useState(false)

	const toggleShow = () => {
		setShow((prev) => !prev)
	}

	return (
		<Stack gap={10}>
			<Toggle checked={show} onChange={toggleShow}>
				Toggle show
			</Toggle>

			<Show when={show} fallback='This is a fallback'>
				<span>This is some content</span>
			</Show>
		</Stack>
	)
}

export const ServerResponse = () => {
	type User = { name: string; age: number }

	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState<User | null>(null)

	const fetchUser = async () => {
		setIsLoading(true)

		// Simulate a server response
		setTimeout(() => {
			setIsLoading(false)
			setUser({ name: 'John Doe', age: 30 })
		}, 1000)
	}

	const resetUser = () => setUser(null)

	return (
		<Stack gap={10}>
			<button onClick={fetchUser} type='button'>
				Fetch user
			</button>
			<button onClick={resetUser} type='button'>
				Reset user
			</button>

			<Show when={user} fallback={isLoading && 'Loading...'}>
				{({ name, age }) => (
					<Stack>
						<span>Name: {name}</span>
						<span>Age: {age}</span>
					</Stack>
				)}
			</Show>
		</Stack>
	)
}
