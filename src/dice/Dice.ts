/**
 * ダイス式(e.g. `xDn<=C`)のインタフェース
 */
export interface DiceFormula {
  definition: DiceDefinition,
  condition?: DiceCondition
}

/**
 * ダイス式のうちダイス定義(`xDn<=C` の `xDn`)のインタフェース
 */
export interface DiceDefinition {
  /**
   * ダイスの量(`xDn` の `x`)
   */
  amount: Number

  /**
   * ダイスの面の数(`xDn` の `n`)
   */
  faces: Number
}

/**
 * ダイス式のうち条件部分(`xDn<=C` の `<=C`)のインタフェース
 */
export interface DiceCondition {
  /**
   * ダイスの条件オペレータ(`xDn<=C` の `<=`)
   */
  operator: Operator,

  /**
   * ダイスの条件オペランド(`xDn<=C` の `C`)
   */
  operand: Number
}

/**
 * ダイス条件式のオペレータ
 */
export enum Operator {
  /**
   * X > Y
   */
  BIGGER,

  /**
   * X < Y
   */
  SMALLER,

  /**
   * X >= Y
   */
  BIGGER_OR_EQUAL,

  /**
   * X <= Y
   */
  SMALLER_OR_EQUAL,

  /**
   * X = Y
   */
  EQUAL
}
