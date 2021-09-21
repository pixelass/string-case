export const lowerPattern = /^[a-z]([a-z0-9]+)?$/;
export const isLower = (value: string) => Boolean(lowerPattern.exec(value));
