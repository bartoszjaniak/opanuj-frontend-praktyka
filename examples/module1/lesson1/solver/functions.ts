export function sum(a: number, b: number) {
  return a + b;
}
export function subtraction(a: number, b: number) {
  return a - b;
}
export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
    if (b === 0) {
        throw Error('Division by zero is not allowed!')
    }

    return a / b;
}
