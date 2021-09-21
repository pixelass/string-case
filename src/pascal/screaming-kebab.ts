export const pascalToScreamingKebab = (value: string) =>
	value
		.replace(/([A-Z])/g, (match, $1) => `-${$1}`)
		.toUpperCase()
		.substr(1);
