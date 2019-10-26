import { sum } from "./basic";

describe("sum", () => {
  test("no args", () => {
    expect(sum()).toBe(0);
  });
  test("1 arg", () => {
    expect(sum(5)).toBe(5);
  });
  test("multiple args", () => {
    expect(sum(...[4, 6, 7, 9])).toBe(26);
  });
});
