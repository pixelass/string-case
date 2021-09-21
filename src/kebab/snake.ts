export const kebabToSnake = (value: string) => value.replace(/-([a-z])/g, (match, $1) => `_${$1}`);
