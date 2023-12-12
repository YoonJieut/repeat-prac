
// 사칙연산 함수 정의
function add(a:number, b:number):number {
  return a+b;
}
function subtract(a:number, b:number):number {
  return a-b;
}
function multiply(a:number, b:number):number {
  return a*b;
}
function divide(a:number, b:number):number {
  if (b === 0){
    console.log("0으로 나눌 수 없습니다.");
    return 0;
  }
  return a/b;
}

function printOperatrions( a:number, b:number):void {
  const result = [
    {operation : "덧셈", result : add(a,b)},
    {operation : "뺄셈", result : subtract(a,b)},
    {operation : "곱셈", result : multiply(a,b)},
    {operation : "나눗셈", result : divide(a,b)},
  ];

  console.table(result);
};

// 함수사용 예시
printOperatrions(10, 5);


