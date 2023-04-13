export interface ShowProps<T> {
    when: T | undefined | null | false
    fallback?: JSX.Element | null
    children: T extends boolean ? JSX.Element : ((item: T) => JSX.Element) | JSX.Element
}
