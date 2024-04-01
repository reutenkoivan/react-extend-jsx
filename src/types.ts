export type TruthyValue<T> = NonNullable<Exclude<T, false | 0>>
export type OrNull<T> = T | null
