export const snakeToPascal = (value: string) =>
	value
		.replace(/_([a-z])/g, (match, $1) => $1.toUpperCase())
		.replace(/^([a-z])/, (match, $1) => $1.toUpperCase());
