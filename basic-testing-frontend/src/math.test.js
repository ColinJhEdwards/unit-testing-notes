// import test/it from vitest to start writing tests
// expect is a keyword used for defining our expected results
import { it, expect } from "vitest";
import { add } from "./math.js";

// first argument is a string where you describe what your test should be, keep it short
// the second argument is the actual test. Use an anonymous function to begin
it("should summarize all number values in an array", () => {
  // Here we store our results in a variable called result which we then pass
  // into our expect keyword. From there we can use the "to" method and select the
  // appropriate option, in this case "toBe", and define the expected result.
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
