# react-extend-jsx [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

- [Installation](#installation)
- [Provided components](#provided-components)
  - [Show](#show)
  - [For](#for)
  - [Switch](#switch)

## Installation:

```bash
npm add react-extend-jsx
```

```bash
yarn add react-extend-jsx
```

## Provided components:

### Show

Conditional rendering component that renders `children` only when the `when` prop is truthy.
Also, you can use `fallback` prop to render something while `when` is falsy.

#### Import:

```tsx
import { Show } from 'react-extend-jsx'
```

#### Props:

```tsx
interface ShowProps<T> {
    when: T
    fallback?: JSX.Element
    children?: T extends boolean ? JSX.Element : ((item: T) => JSX.Element) | JSX.Element
}
```

#### Examples:

```jsx
import { useState } from 'react'
import { Show } from 'react-extend-jsx'

const SimpleUsage = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <Show when={isShow}>
            <span>show</span>
        </Show>
    )
}
```

```tsx
import { useState, useEffect } from 'react'
import { Show } from 'react-extend-jsx'

type ItemType = {
    id: number
    name: string
}

const GenericUsage = () => {
    const [serverResponse, setServerResponse] = useState<ItemType | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setServerResponse({
                id: 1,
                name: 'name'
            })
        }, 1000)
    }, []
    )

    return (
        <Show when={serverResponse} fallback={<span>Loading...</span>}>
            {(item: ItemType) => (
                <div>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                </div>
            )}
        </Show>
    )
}
```

### For

Component that renders `children` for each item in the `of` prop.
This component is similar to `Array.prototype.map` method.

#### Import:

```tsx
import { For } from 'react-extend-jsx'
```

#### Props:

```tsx
interface ForProps<T> {
    of: T[] | readonly T[]
    children: (item: T, index: number) => JSX.Element
}
```

#### Examples:

```tsx
import { useState } from 'react'
import { For } from 'react-extend-jsx'

type ItemType = {
    id: number
    name: string
}

const SimpleUsage = () => {
    const [items, setItems] = useState<ItemType[]>([
        {
            id: 1,
            name: 'name1'
        },
        {
            id: 2,
            name: 'name2'
        }
    ])

    return (
        <For of={items}>
            {(item: ItemType) => (
                <div>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                </div>
            )}
        </For>
    )
}
```

### Switch

Conditional rendering component that renders some of the `children` depending on the `case` prop.
Also, you can use `default` prop to render something while `case` is not equal to any `key` of the `children` object.

#### Import:
```tsx
import { Switch } from 'react-extend-jsx'
```

#### Props:

```tsx
interface SwitchProps<T extends string> {
  case: T
  default?: JSX.Element
  children: Partial<Record<T, JSX.Element>>
}
```

#### Examples:

```tsx
import { Switch } from 'react-extend-jsx'

const A = () => <span>A</span>
const B = () => <span>B</span>
const C = () => <span>C</span>
const D = () => <span>D</span>

type StatusType = 'first' | 'second' | 'third'

const SimpleUsage = ({ status }: { status?: StatusType }) => {
    const [componentID, _] = useState(status)

    return (
        <Switch case={componentID} default={<D />}>
            {{
                first: <A />,
                second: <B />,
                third: <C />
            }}
        </Switch>
    )
}
```
