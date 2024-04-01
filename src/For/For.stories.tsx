import { Stack } from '@stories-components/Stack.tsx'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { For, type ForProps } from './For'

const meta = {
	title: 'For',
	component: For,
	tags: ['autodocs'],
	parameters: {
		docs: {
			toc: true,
		},
	},
} satisfies Meta<typeof For>

export default meta

export const Simple = () => {
	const props = {
		items: ['one', 'two', 'three'],
	}

	return (
		<Stack>
			<For of={props.items}>{(item: string) => <span>{item}</span>}</For>
		</Stack>
	)
}

export const ServerResponse = () => {
	// Outside the component
	type User = { id: number; name: string; age: number }
	const keyMapper = (user: User) => user.id
	const slots: ForProps<User>['slots'] = { empty: 'No results', loading: 'Loading...' }

	// Inside the component
	const [isLoading, setIsLoading] = useState(false)
	const [users, setUsers] = useState<User[] | null>(null)

	const fetchUsers = () => {
		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)
			setUsers([
				{ id: 1, name: 'John', age: 25 },
				{ id: 2, name: 'Jane', age: 32 },
			])
		}, 1000)
	}

	const fetchEmptyUsers = () => {
		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)
			setUsers([])
		}, 1000)
	}

	const resetUsers = () => setUsers(null)

	return (
		<Stack gap={10}>
			<button onClick={fetchUsers} type='button'>
				Fetch users
			</button>
			<button onClick={fetchEmptyUsers} type='button'>
				Fetch empty users
			</button>
			<button onClick={resetUsers} type='button'>
				Reset users
			</button>

			<For of={users} loading={isLoading} keyMapper={keyMapper} slots={slots}>
				{(user) => (
					<div>
						<span>{user.name}</span>
						<span>{user.age}</span>
					</div>
				)}
			</For>
		</Stack>
	)
}
