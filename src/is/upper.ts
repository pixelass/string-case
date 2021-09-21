export const upperPattern = /^[A-Z]([A-Z0-9]+)?$/;
export const isUpper = (value: string) => Boolean(upperPattern.exec(value));
