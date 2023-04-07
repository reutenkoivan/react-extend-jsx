export type SwitchProps<T extends string> = {
    case: T
    children: Partial<Record<T, JSX.Element>>
    default?: JSX.Element
}
