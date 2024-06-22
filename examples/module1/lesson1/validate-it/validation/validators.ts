const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

export const checkIfIsInteger = (value: string) => Number.isInteger(Number(value));
export const checkIfIsGreaterThanMinNumber = (value: string) => Number(value) > MIN_NUMBER;
export const checkIfIsLowerThanMaxNumber = (value: string) => Number(value) < MAX_NUMBER;
export const checkIfIsEven = (value: string) => Number(value) % 2 === 0;
