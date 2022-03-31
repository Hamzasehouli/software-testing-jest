const objectAssing = function () {
  const data = { one: 1 };
  data["two"] = 2;
  console.log(data);
  return data;
};

module.exports = objectAssing;
