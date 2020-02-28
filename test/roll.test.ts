import { assert } from 'chai'

interface DicePair {
  formula: string,
  expect: string
}

function genPair (formula: string, expect: string): DicePair {
  return {
    formula: formula,
    expect: expect
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function roll (dice: string) {
  const values = [30]
  const sum = values.reduce((prev, current) => prev + current)

  const message = ''

  return `${dice} => ${sum}[${values}] => ${message}`
}

describe('ダイスロール', () => {
  const dice: DicePair[] = [
    genPair(
      '1d100',
      '1d100 => 30[30] => OK'
    ),

    // Operator: <=
    genPair(
      '1d100<=30',
      '1d100<=30 => 20[20] => OK'
    ),
    genPair(
      '1d100<=30',
      '1d100<=30 => 30[30] => OK'
    ),
    genPair(
      '1d100<=30',
      '1d100<=30 => 40[40] => NG'
    ),

    // Operator: <
    genPair(
      '1d100<30',
      '1d100<30 => 20[20] => OK'
    ),
    genPair(
      '1d100<30',
      '1d100<30 => 30[30] => NG'
    ),
    genPair(
      '1d100<30',
      '1d100<30 => 40[40] => NG'
    ),

    // Operator: >=
    genPair(
      '1d100>=30',
      '1d100>=30 => 20[20] => NG'
    ),
    genPair(
      '1d100>=30',
      '1d100>=30 => 30[30] => OK'
    ),
    genPair(
      '1d100>=30',
      '1d100>=30 => 40[40] => OK'
    ),

    // Operator: >
    genPair(
      '1d100>30',
      '1d100>30 => 20[20] => NG'
    ),
    genPair(
      '1d100>30',
      '1d100>30 => 30[30] => NG'
    ),
    genPair(
      '1d100>30',
      '1d100>30 => 40[40] => OK'
    ),

    // Operator: =
    genPair(
      '1d100=30',
      '1d100=30 => 20[20] => NG'
    ),
    genPair(
      '1d100=30',
      '1d100=30 => 30[30] => OK'
    ),
    genPair(
      '1d100=30',
      '1d100=30 => 40[40] => NG'
    )
  ]

  for (const die of dice) {
    const { formula, expect } = die
    const message = roll(formula)

    it(`${formula}`, () => {
      assert.equal(message, expect)
    })
  }
})
