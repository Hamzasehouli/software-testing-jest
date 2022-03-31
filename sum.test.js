const sum = require("./sum");
test("properly add numbers", () => {
  expect(sum(10, 10)).toBe(20);
});
