export const pascalToSnake = (value: string) =>
	value
		.replace(/([A-Z])/g, (match, $1) => `_${$1}`)
		.toLowerCase()
		.substr(1);
