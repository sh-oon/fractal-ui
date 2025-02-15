export const isEmpty = (value: unknown) =>
	value === null ||
	value === undefined ||
	value === "" ||
	(Array.isArray(value) && value.length === 0) ||
	(typeof value === "object" && Object.keys(value).length === 0 && value.constructor === Object) ||
	Number.isNaN(value);

export const isNotEmpty = (value: unknown) => !isEmpty(value);
