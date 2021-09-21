export const pascalToScreamingSnake = (value: string) =>
	value
		.replace(/([A-Z])/g, (match, $1) => `_${$1}`)
		.toUpperCase()
		.substr(1);
