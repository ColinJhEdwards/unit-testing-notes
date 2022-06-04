// import test/it from vitest to start writing tests
// expect is a keyword used for defining our expected results
import { it, expect } from "vitest";
import { add } from "./math.js";

// first argument is a string where you describe what your test should be, keep it short
// the second argument is the actual test. Use an anonymous function to begin
it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResults = numbers.reduce((a, b) => a + b, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(expectedResults);
});

// While this is a simple test the way we organized our code makes this test more effecient
// If someone were to change the numbers variable and we hardcoded the sum of those into
// our expected line of code we would recieve in error

// Because of how we have written our test we avoid this problem by calculating the total
// ahead of time and passing that variable into our expected line of code instaed

// Keep in mind different scenarios you can test
it("should yield Nan if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];
  const results = add(inputs);

  expect(results).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2"];
  const expectedResults = inputs.reduce((a, b) => +a + +b, 0);
  const results = add(inputs);

  expect(results).toBe(expectedResults);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const results = add(numbers);

  expect(results).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
