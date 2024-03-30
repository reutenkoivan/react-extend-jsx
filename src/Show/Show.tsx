import type {FC, ReactNode} from "react";
import type {TruthyValue} from "../types.ts";

export type ShowProps<T> = {
    when: T
    fallback?: ReactNode | ReactNode[]
    children: FC<TruthyValue<T>> | ReactNode | ReactNode[]
}

export const Show = <T, >({children, fallback = null, when}: ShowProps<T>): ReactNode | ReactNode[] => {
    if (!when) {
        return fallback
    }

    if (typeof children === 'function') {
        return children(when as TruthyValue<T>)
    }

    return fallback
}
