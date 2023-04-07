export interface ShowProps<T> {
    when: T | undefined | null | false
    fallback?: JSX.Element | null
    children: JSX.Element | ((item: T) => JSX.Element)
}
