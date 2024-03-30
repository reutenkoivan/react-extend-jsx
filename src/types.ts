export type TruthyValue<T> = NonNullable<Exclude<T, false | 0>>
