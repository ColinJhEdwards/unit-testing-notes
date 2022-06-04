import { transformToNumber } from "./numbers.js";
import { it, expect } from "vitest";

it("should transform a string number to a number of type numner", () => {
  const input = "2";
  const result = transformToNumber(input);
  const expectedResult = +input;
  expect(result).toBe(expectedResult);
});

// it("should throw an error if no value is given", () => {
//   const resultFn = () => {
//     transformToNumber();
//   };

//   expect(resultFn).toThrow();
// });

it("should yield Nan if a value is given that cannot be converted to a numebr", () => {
  const input = "invalid";
  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
