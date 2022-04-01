const app = require("./app");

test("cal age", () => {
  expect(app.calcAge(1993)).toEqual(29);
});
