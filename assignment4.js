console.log("Assignment 4");

const input = [{ a: 1 }, { b: 2 }, { c: 3 }];
console.log("Input is : ", input);

var output = {};
input.forEach((obj) => {
  const [key] = Object.keys(obj);
  const value = obj[key];
  output[key] = value;
});

console.log("Output is : ", output);
