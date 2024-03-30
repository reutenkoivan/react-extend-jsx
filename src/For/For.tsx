import { Children, Fragment, type ReactNode } from "react";

export type ForProps<T> = {
	of: T[] | readonly T[];
	children: (item: T, index?: number) => ReactNode | ReactNode[];
	keyMapper?: (item: T, index?: number) => string | number;
};

export const For = <T,>({ children, of, keyMapper }: ForProps<T>): ReactNode => {
	return (
		<Fragment>
			{Children.toArray(
				of.map((item, index) => {
					const key = keyMapper?.(item, index) ?? index;

					return <Fragment key={key}>{children(item, index)}</Fragment>;
				}),
			)}
		</Fragment>
	);
};
