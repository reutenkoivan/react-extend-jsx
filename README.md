# react-extend-jsx [![Made in Ukraine](https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7)](https://stand-with-ukraine.pp.ua)

## Installation

```bash
npm add react-extend-jsx
```

```bash
yarn add react-extend-jsx
```

## Package structure

### tree shakable imports
Import only what you need

```tsx
// TODO: import Show from 'react-extend-jsx/Show'
```

### Universal imports
Import from the root of the package

```tsx
// TODO: import { Show } from 'react-extend-jsx'
```

## Provided components

### Show

Conditional rendering component that renders `children` only when the `when` prop is truthy.
Also, you can use `fallback` prop to render something while `when` is falsy.

```jsx
import { useState } from 'react'
// TODO: import { Show } from 'react-extend-jsx'

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
// TODO: import { Show } from 'react-extend-jsx'

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

```tsx
import { useState } from 'react'
// TODO: import { For } from 'react-extend-jsx'

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

```tsx
// TODO: import { Switch } from 'react-extend-jsx'

const A = () => <span>A</span>
const B = () => <span>B</span>
const C = () => <span>C</span>
const D = () => <span>D</span>

const Components = {
    A,
    B,
    C,
    D
}

const SimpleUsage = ({ status = '' }: { status: keyof typeof Components }) => {
    const [componentID, _] = useState(status)

    return (
        <Switch case={componentID} default={<Components.D />}>
            {{
                A: <Components.A />,
                B: <Components.B />,
                C: <Components.C />
            }}
        </Switch>
    )
}
```
