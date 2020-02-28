export interface DiceFormula {
  definition: DiceDefinition,
  condition: DiceCondition
}

export interface DiceDefinition {
  // ダイスの量
  // AdB の A
  amount: Number

  // ダイスの面の数
  // AdB の B
  faces: Number
}

export interface DiceCondition {
  // ダイスの条件オペレータ e.g.  1d100<=30 の <=
  operator: Operator,

  // ダイスの条件オペランド e.g. 1d100<=30 の 30
  operand: Number
}

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
