export const snakePattern = /^[a-z]([a-z0-9]+)?(_[a-z0-9]+)+$/;
export const isSnake = (value: string) => Boolean(snakePattern.exec(value));
