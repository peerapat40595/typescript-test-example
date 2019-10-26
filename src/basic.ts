export const sum = (...numbers: number[]): number =>
  numbers.reduce((acc: number, val: number) => acc + val, 0);
