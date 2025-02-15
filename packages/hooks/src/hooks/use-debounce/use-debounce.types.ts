export type UseDebounceOptions<T> = {
	value: T;
	delay: number;
};

export type UseDebounceReturn<T> = {
	debouncedValue: T;
};
