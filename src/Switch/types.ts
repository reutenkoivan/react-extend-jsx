export type SwitchProps<T extends string> = {
    case: T | undefined | null
    children: Partial<Record<T, JSX.Element>>
    default?: JSX.Element
}
