import { DiceFormula } from './Dice'

const PARSE_REGEXP = /(\d+)(.)(\d+)/

/**
*
* @param dice ダイス式(`xDn<=C`)
*
* @return ダイス式が不正であれば `null`, 正当であれば `DiceFormula`
*/
export function parse (dice: string): DiceFormula | null {
  const args = dice.match(PARSE_REGEXP)

  console.log(args)

  return null
}

parse('1d100')
parse('2d300')
parse('d100')
parse('1d')
parse('')
