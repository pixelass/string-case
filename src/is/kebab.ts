export const kebabPattern = /^[a-z]+([a-z0-9]+)?(-[a-z0-9]+)+$/;
export const isKebab = (value: string) => Boolean(kebabPattern.exec(value));
