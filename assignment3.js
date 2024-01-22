console.log("Assignment 3");

const input = { a: 1, b: 2, c: 3 };
console.log("Input is : ", input);

var output = [];
for (const obj in input) {
  let key = obj;
  let value = input[obj];
  output.push({ [key]: value });
}

console.log("Output is : ", output);
