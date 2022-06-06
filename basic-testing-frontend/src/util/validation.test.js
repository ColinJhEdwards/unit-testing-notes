import { it, expect } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

it("Should throw an error if the given value is a string amnd is empty", () => {
  const input = "";
  const result = validateStringNotEmpty(input);

  expect(result).toThrow("Invalid input - must not be empty.");
});
