const { palindrome } = require("../palindrome/palindrome");

describe("palindrome tests", () => {
  test("returns true for single word palindrome", () => {
    expect(palindrome("Hannah")).toBe(true);
  });
  test("returns false for single word non-palindrome", () => {
    expect(palindrome("Diana")).toBe(false);
  });
  test("returns true for multiple word palindrome", () => {
    expect(palindrome("Acrobats stab orca")).toBe(true);
    expect(palindrome("Are we not drawn onward to new era")).toBe(true);
  });
  test("returns false for multiple word non-palindrome", () => {
    expect(palindrome("God, I hate mornings")).toBe(false);
  });
});
