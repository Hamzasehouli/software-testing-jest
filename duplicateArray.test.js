const duplicateArray = require("./duplicateArray");

test("test array cloner function", () => {
  expect(duplicateArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(duplicateArray([1, 2, 3, 4])).not.toBe([1, 2, 3, 4]);
});
