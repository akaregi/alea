import { DiceFormula, DiceDefinition, DiceCondition } from '../dice/Dice'
import { getOperator } from '../dice/Operator'
import { ParseResponse, newResult } from './ParseResponse'
import { ParseState } from './ParseState'

const PARSE_REGEXP = /(\d+)(.)(\d+)(<=|<|>=|>|=)?(\d+)?/

/**
* ダイス式のパースを行う
*
* @param dice ダイス式(`xDn<=C`)
*/
export function parse (dice: string): ParseResponse {
  const args = dice.match(PARSE_REGEXP)?.slice(1, 6)

  if (args === undefined) {
    return newResult(ParseState.INVALID_FORMULA)
  }

  // args[0] must be integer
  const amount = parseInt(args[0])
  // args[2] must be integer
  const faces = parseInt(args[2])

  // args[3] must be a valid operator OR undefined
  const operator = getOperator(args[3])
  // args[4] may be undefined if only operator is given
  const operand = parseInt(args[4])

  // e.g. -1D100
  if (amount <= 0) {
    return newResult(ParseState.NEGATIVE_AMOUNT)
  }

  // e.g. 1D-100
  if (faces <= 0) {
    return newResult(ParseState.NEGATIVE_FACES)
  }

  // e.g. 'xDn<='
  if (operator && isNaN(operand)) {
    return newResult(ParseState.INVALID_OPERAND)
  }

  const def: DiceDefinition = {
    amount: amount,
    faces: faces
  }

  const cond: DiceCondition | undefined = operator ? {
    operator: operator,
    operand: operand
  } : undefined

  const formula: DiceFormula = {
    definition: def,
    condition: cond
  }

  return newResult(ParseState.OK, formula)
}
