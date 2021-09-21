export const pascalToKebab = (value: string) =>
	value
		.replace(/([A-Z])/g, (match, $1) => `-${$1}`)
		.toLowerCase()
		.substr(1);
