import EQN from '../../src/equation.js';

describe('--- Cuadratic Equation ---', () => {
  test('No argument returns undefined', () => {
    expect(EQN.cuadratic()).toBeUndefined();
  });

  test('Parameter is not an object of coefficients returns undefined', () => {
    const coefficients = {
      prop: 'not allowed',
      example: null,
      notAllowed: [1],
    };

    expect(EQN.cuadratic(coefficients)).toBeUndefined();
  });

  test('{coeA: 2, coeB: 1, coeC: 0} as parameter returns {root1: 0, root2: -0.5}', () => {
    const coefficients = { coeA: 2, coeB: 1, coeC: 0 };

    expect(EQN.cuadratic(coefficients)).toEqual({ root1: 0, root2: -0.5 });
  });
});
