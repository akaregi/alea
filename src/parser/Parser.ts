import { DiceFormula, DiceDefinition } from '../dice/Dice'
import { getOperator, Operator } from '../dice/Operator'
import { ParseResult, newResult } from './ParseResult'

const PARSE_REGEXP = /(\d+)(.)(\d+)(<=|<|>=|>|=)?(\d+)?/

/**
* ダイス式のパースを行う
*
* @param dice ダイス式(`xDn<=C`)
*/
export function parse (dice: string): ParseResult {
  const args = dice.match(PARSE_REGEXP)?.slice(1, 6)

  if (args === undefined) {
    return newResult(true, `Invalid dice formula: ${dice}`)
  }

  const amount = parseInt(args[0]) // Must be integer by regex
  // const method = args[1]
  const faces = parseInt(args[2]) // Must be integer by regex

  const def: DiceDefinition = {
    amount: amount,
    faces: faces
  }

  const operator = getOperator(args[3])
  const operand = parseInt(args[4])

  if (operator === Operator.UNKNOWN) {
    return newResult(true, `Invalid operator is given: ${args[3]}`)
  }

  if (isNaN(operand)) {
    return newResult(true, `Invalid operand is given: ${args[4]}`)
  }

  const formula: DiceFormula = {
    definition: def,
    condition: {
      operator: operator,
      operand: operand
    }
  }

  return newResult(false, 'OK', formula)
}
