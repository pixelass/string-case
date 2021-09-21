export const pascalToCamel = (value: string) =>
	value.replace(/^([A-Z])/, (match, $1) => $1.toLowerCase());
