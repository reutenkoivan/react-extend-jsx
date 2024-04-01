# react-extend-jsx [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

- [Installation](#installation)
- [Provided components](#provided-components)
  - [Show](#show)
  - [For](#for)
  - [SwitchMap](#SwitchMap)

## Installation:

```bash
npm add react-extend-jsx
```

```bash
yarn add react-extend-jsx
```

```bash
bun add react-extend-jsx
```

## Provided components:

### Show

```tsx
import { ReactNode, FC } from 'react'

type TruthyValue<T> = NonNullable<Exclude<T, false | 0>>

export type ShowProps<T> = {
  when: T
  fallback?: ReactNode | ReactNode[]
  children: FC<TruthyValue<T>> | ReactNode | ReactNode[]
}
```

### For

Component that renders `children` for each item in the `of` prop.
This component is similar to `Array.prototype.map` method.

```tsx
import { ReactNode } from 'react'

type OrNull<T> = T | null

export type ForProps<T> = {
  of: OrNull<T[] | readonly T[]>
  children: (item: T, index?: number) => ReactNode | ReactNode[]
  keyMapper?: (item: T, index?: number) => string | number
  loading?: boolean
  slots?: {
    loading?: ReactNode | ReactNode[]
    empty?: ReactNode | ReactNode[]
  }
}
```

### SwitchMap

Conditional rendering component that renders some of the `children` depending on the `case` prop.
Also, you can use `default` prop to render something while `case` is not equal to any `key` of the `children` object.

```tsx
import { ReactNode } from 'react'

type SwitchMapProps<T extends string> = {
  case: T
  default?: ReactNode | ReactNode[]
  children: Partial<Record<T, ReactNode | ReactNode[]>>
}
```
