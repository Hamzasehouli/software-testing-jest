const objectAssing = require("./object");

test("check if an object equals an other object", () => {
  expect(objectAssing()).toEqual({ one: 1, two: 2 });
});
