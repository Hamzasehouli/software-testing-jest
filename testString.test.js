const testString = require("./testString");

test("test if string includes Hamza", () => {
  expect(testString("hamza sehouli")).toBeFalsy();
});
