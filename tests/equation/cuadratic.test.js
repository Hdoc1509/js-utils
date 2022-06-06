const EQN = require('../../utils/equation');

describe('--- Cuadratic Equation ---', () => {
  test('No argument returns undefined', () => {
    expect(EQN.cuadratic()).toBeUndefined();
  });

  test('Empty object as argument returns undefined', () => {
    expect(EQN.cuadratic({})).toBeUndefined();
  });

  test('Argument is not an object of coefficients will take default values for coefficients and returns undefined', () => {
    const coefficients = {
      prop: 'not allowed',
      example: null,
      notAllowed: [1],
    };

    expect(EQN.cuadratic(coefficients)).toBeUndefined();
  });

  test('If any coefficient is not a string returns undefined', () => {
    const coefficients1 = { coeA: 'not number', coeB: 1, coeC: 0 };
    const coefficients2 = { coeA: 2, coeB: ['js'], coeC: 1 };
    const coefficients3 = { coeA: 3, coeB: 2, coeC: {} };

    expect(EQN.cuadratic(coefficients1)).toBeUndefined();
    expect(EQN.cuadratic(coefficients2)).toBeUndefined();
    expect(EQN.cuadratic(coefficients3)).toBeUndefined();
  });

  test('Coefficient A equals to 0 returns undefined', () => {
    const coefficients = { coeA: 0, coeB: 10, coec: 1 };

    expect(EQN.cuadratic(coefficients)).toBeUndefined();
  });

  test('Taking default values for coefficientes B and C correctly', () => {
    const coefficients1 = { coeA: 2 };
    const coefficients2 = { coeA: 3, coeB: 1 };
    const coefficients3 = { coeA: 2, coeC: 2 };

    expect(EQN.cuadratic(coefficients1)).toEqual({ root1: 0, root2: 0 });
    expect(EQN.cuadratic(coefficients2)).toEqual({
      root1: 0,
      root2: -0.33,
    });
    expect(EQN.cuadratic(coefficients3)).toBeUndefined();
  });

  test('{coeA: 2, coeB: 1, coeC: 0} as parameter returns {root1: 0, root2: -0.5}', () => {
    const coefficients = { coeA: 2, coeB: 1, coeC: 0 };

    expect(EQN.cuadratic(coefficients)).toEqual({ root1: 0, root2: -0.5 });
  });
});
