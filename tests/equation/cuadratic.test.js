import EQN from '../../src/equation.js';

describe('--- Cuadratic Equation ---', () => {
  test('No argument returns {root1: 0, root2: 0}', () => {
    expect(EQN.cuadratic()).toEqual({ root1: 0, root2: 0 });
  });

  test.todo('Parameter is not an object of coefficients returns undefined');

  test('{coeA: 2, coeB: 1, coeC: 0} as parameter returns {root1: 0, root2: -0.5}', () => {
    const coefficients = { coeA: 2, coeB: 1, coeC: 0 };

    expect(EQN.cuadratic(coefficients)).toEqual({ root1: 0, root2: -0.5 });
  });
});
