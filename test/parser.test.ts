import { parse } from '../src/parser/Parser'

const dice = [
  '1d100',
  '1d100<=30',
  '1d100<30',
  '1d100>=30',
  '1d100>30',
  '1d100=30',
  '1d',
  '1d100<=',
  '1d100<=d'
]

for (const die of dice) {
  console.log(parse(die))
}
