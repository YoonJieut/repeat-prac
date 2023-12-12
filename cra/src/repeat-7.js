"use strict";
exports.__esModule = true;
// 사칙연산 함수 정의
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    console.log("0으로 나눌 수 없습니다.");
    return 0;
  }
  return a / b;
}
function printOperatrions(a, b) {
  var result = [
    { operation: "덧셈", result: add(a, b) },
    { operation: "뺄셈", result: subtract(a, b) },
    { operation: "곱셈", result: multiply(a, b) },
    { operation: "나눗셈", result: divide(a, b) },
  ];
  console.table(result);
}
// 함수사용 예시
printOperatrions(10, 5);
