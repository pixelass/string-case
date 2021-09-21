export const pascalPattern = /^[A-Z]+[a-z0-9]+([A-Z]([a-z0-9]+))+$/;
export const isPascal = (value: string) => Boolean(pascalPattern.exec(value));
