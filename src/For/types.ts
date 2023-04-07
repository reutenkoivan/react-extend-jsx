import type { ReactNode } from 'react'

export interface ForProps<T> {
    of: Array<T>
    children: (item: T, index: number) => ReactNode
}
