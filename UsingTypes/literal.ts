function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combineAges = combine(30, 40, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "40", "as-number");
console.log(combineStringAges);

const combinedNames = combine("Test1", "Test2", "as-text");
console.log(combinedNames);
