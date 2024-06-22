import { checkIfIsEven, checkIfIsGreaterThanMinNumber, checkIfIsInteger, checkIfIsLowerThanMaxNumber } from "./validators";

const validators = [checkIfIsInteger, checkIfIsGreaterThanMinNumber, checkIfIsLowerThanMaxNumber, checkIfIsEven];

export const validate = (value: string) => validators.every((validator) => validator(value));
