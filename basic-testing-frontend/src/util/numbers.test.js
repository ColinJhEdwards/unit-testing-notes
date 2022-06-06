import { transformToNumber } from "./numbers.js";
import { it, expect } from "vitest";

it("should transform a string number to a number of type numner", () => {
  const input = "2";
  const result = transformToNumber(input);
  const expectedResult = +input;
  expect(result).toBe(expectedResult);
});

it("should yield Nan if a value is given that cannot be converted to a numebr", () => {
  const input1 = "invalid";
  const input2 = {};
  const result1 = transformToNumber(input1);
  const result2 = transformToNumber(input2);

  //   You can do multiple expectations for tests where it would make sense to do so
  expect(result1).toBeNaN();
  expect(result2).toBeNaN();
});
