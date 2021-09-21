export const camelPattern = /^[a-z]([0-9a-z]+)?[A-Z]([a-zA-Z0-9]+)?$/;
export const isCamel = (value: string) => Boolean(camelPattern.exec(value));
