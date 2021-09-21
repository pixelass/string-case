export const screamingKebabPattern = /^[A-Z]([A-Z0-9]+)?(-[A-Z0-9]+)+$/;
export const isScreamingKebab = (value: string) => Boolean(screamingKebabPattern.exec(value));
