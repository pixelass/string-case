export const screamingSnakePattern = /^[A-Z]([A-Z0-9]+)?(_[A-Z0-9]+)+$/;
export const isScreamingSnake = (value: string) => Boolean(screamingSnakePattern.exec(value));
