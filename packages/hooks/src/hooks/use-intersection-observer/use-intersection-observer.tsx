import { useEffect, useRef } from "react";
import { Nullable } from "@repo/utils";

import { IntersectionObserverOptions } from "./use-intersection-observer.types";
export const useIntersectionObserver = <T extends HTMLElement>({
	callback,
	options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1,
	},
}: IntersectionObserverOptions) => {
	const targetRef = useRef<Nullable<T>>(null);

	const { root, rootMargin, threshold } = options;
	useEffect(() => {
		const element = targetRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) return;
				callback(entry.isIntersecting, entry);
			},
			{ root, rootMargin, threshold }
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
			observer.disconnect();
		};
	}, [callback, root, rootMargin, threshold]);

	return targetRef;
};
