export const camelToScreamingSnake = (value: string) =>
	value.replace(/([A-Z])/g, (match, $1) => `_${$1}`).toUpperCase();
