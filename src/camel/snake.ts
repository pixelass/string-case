export const camelToSnake = (value: string) =>
	value.replace(/([A-Z])/g, (match, $1) => `_${$1.toLowerCase()}`);
