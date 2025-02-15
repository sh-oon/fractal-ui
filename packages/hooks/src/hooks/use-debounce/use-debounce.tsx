import { useState, useEffect } from "react";
import { UseDebounceOptions, UseDebounceReturn } from "./use-debounce.types";

export function useDebounce<T>(options: UseDebounceOptions<T>): UseDebounceReturn<T> {
	const { value, delay } = options;

	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return { debouncedValue };
}
