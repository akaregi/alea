export enum Operator {
  // 1d100>10, X > Y
  BIGGER,

  // 1d100<10; X < Y
  SMALLER,

  // X >= Y
  BIGGER_OR_EQUAL,

  // 1d100<=10; X <= Y
  SMALLER_OR_EQUAL,

  // 1d100=10; X = Y
  EQUAL
}
