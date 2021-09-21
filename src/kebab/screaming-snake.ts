export const kebabToScreamingSnake = (value: string) =>
	value.replace(/-([a-z])/g, (match, $1) => `_${$1}`).toUpperCase();
