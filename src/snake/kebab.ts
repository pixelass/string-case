export const snakeToKebab = (value: string) => value.replace(/_([a-z])/g, (match, $1) => `-${$1}`);
