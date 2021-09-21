export const kebabToPascal = (value: string) =>
	value
		.replace(/-([a-z])/g, (match, $1) => $1.toUpperCase())
		.replace(/^([a-z])/, (match, $1) => $1.toUpperCase());
