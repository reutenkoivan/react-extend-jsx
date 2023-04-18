export interface SwitchProps<T extends string> {
    case: T
    default?: JSX.Element
    children: Partial<Record<T, JSX.Element>>
}
