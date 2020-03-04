export default {
  OK: [
    '1D100',
    '1D100<=30',
    '1D100<30',
    '1D100>=30',
    '1D100>30',
    '1D100=30'
  ],

  INVALID_FORMULA: [
    '',

    '1',
    '1D',
    'D100',

    'x',
    'xD',
    'Dn',

    'xD100',
    'xDn',

    '1D100DD',

    // NOTE: Aritmetic expression is not supported
    '1D100*3',
    '1D100/3'
  ],

  ILLEGAL_OPERATOR: [
    // TODO: Add some test
  ],

  ILLEGAL_OPERAND: [
    '1D100<=',
    '1D100<=C'
  ],

  NEGATIVE_AMOUNT: [
    '-1D100',
    '-1D-100'
  ],

  NEGATIVE_FACES: [
    '1D-100'
  ]
}
