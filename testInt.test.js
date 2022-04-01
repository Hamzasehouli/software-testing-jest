const testInt = require("./testInt");

test("check if value is integer", () => {
  expect(testInt(100)).toBeTruthy();
});
