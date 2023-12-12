
class Calculator {
  // ? 생각해보니 private와 public이 뭐였지..??
  private _a : number;
  private _b : number;

  constructor (a:number, b:number) {
    this._a = a;
    this._b = b;
  }

  //getter 와 setter
  get a() :number {
    return this._a;
  }
  set a(value:number) {
    this._a = value;
  }
  get b():number {
    return this._b;
  }
  set b(value:number){
    this._b = value;
  }


  // method settings
  public add():number {
    return this._a + this._b;
  }
  public subtract():number {
    return this._a - this._b;
  }
  public multiply():number {
    return this._a * this._b;
  }
  public divide():number {
    if(this._b === 0){
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return this._a / this._b;
  }

  //static method
  // ? static 은 무슨 뜻일까? 밖에서도 부를 수 있나 없나의 차이일까?
  static addStatic(a:number, b:number) :number {
    return a+b;
  }
  
  static subtractStatic(a:number, b:number) :number {
    return a-b;
  }
  
  static multiplyStatic(a:number, b:number) :number {
    return a*b;
  }
  
  static divideStatic(a:number, b:number) :number {
    if ( b === 0) {
      throw new Error ("0은 나눌 수 없습니다.");
    }
    return a/b;
  }
}

// 사용 예
const calc = new Calculator(10,5);
console.dir(Calculator);

