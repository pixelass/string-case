export const kebabToCamel = (value: string) =>
	value.replace(/-([a-z])/g, (match, $1) => $1.toUpperCase());
