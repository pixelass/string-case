export const camelToKebab = (value: string) =>
	value.replace(/([A-Z])/g, (match, $1) => `-${$1.toLowerCase()}`);
