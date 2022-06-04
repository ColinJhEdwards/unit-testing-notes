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
