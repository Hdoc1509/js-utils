/**
 * Solver for cuadratic equation using general formula
 * @param  {Object} options
 * @param  {Number} options.coeA Coefficient A
 * @param  {Number} [options.coeB] Coefficient B
 * @param  {Number} [options.coeC] Coefficient C
 * @return {{root1: Number, root2: Number}} Object with roots for solve the cuadratic equation
 */
const cuadratic = ({ coeA = 0, coeB = 0, coeC = 0 } = {}) => {
  if (
    typeof coeA !== 'number' ||
    typeof coeB !== 'number' ||
    typeof coeC !== 'number'
  )
    return;

  if (coeA <= 0) return;

  const discriminant = coeB ** 2 - 4 * coeA * coeC;

  if (discriminant < 0) return;

  const root = Number(
    ((-coeB + Math.sqrt(discriminant)) / (2 * coeA)).toFixed(2)
  );

  const root1 = root;
  const root2 =
    discriminant === 0
      ? root
      : Number(((-coeB - Math.sqrt(discriminant)) / (2 * coeA)).toFixed(2));

  return { root1, root2 };
};

export const eqn = { cuadratic };
