import formulas from './Formulas'
import { assert } from 'chai'
import { ParseState } from './../../src/parser/ParseState'
import { parse } from '../../src/parser/Parser'

/**
 * 検証
 *
 * @param formulas 検査対象の配列
 * @param expect 出力結果
 */
function test (formulas: string[], expect: ParseState) {
  for (const formula of formulas) {
    assert.equal(parse(formula).state, expect, `Failed formula: ${formula}`)
  }
}

describe('Parser', () => {
  it('OK', () => {
    test(formulas.OK, ParseState.OK)
  })

  it('Invalid formula', () => {
    test(formulas.INVALID_FORMULA, ParseState.INVALID_FORMULA)
  })

  it('Invalid operator', () => {
    test(formulas.ILLEGAL_OPERATOR, ParseState.INVALID_OPERATOR)
  })

  it('Invalid operand', () => {
    test(formulas.ILLEGAL_OPERAND, ParseState.INVALID_OPERAND)
  })

  it('Negative amount', () => {
    test(formulas.NEGATIVE_AMOUNT, ParseState.NEGATIVE_AMOUNT)
  })

  it('Negative faces', () => {
    test(formulas.NEGATIVE_FACES, ParseState.NEGATIVE_FACES)
  })
})
