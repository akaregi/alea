import { Operator } from './Operator'

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
