import type { ReactNode } from 'react'

export interface ForProps<T> {
    of: T[] | readonly T[]
    children: (item: T, index: number) => ReactNode
}
