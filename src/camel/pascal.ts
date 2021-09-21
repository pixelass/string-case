export const camelToPascal = (value: string) =>
	value.replace(/^([a-z])/, (match, $1) => $1.toUpperCase());
