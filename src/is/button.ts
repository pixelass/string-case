export const buttonPattern = /^[A-Z]([a-z0-9]+)?(\s([A-Z]([a-z0-9]+)?)+)+$/;
export const isButton = (value: string) => Boolean(buttonPattern.exec(value));
