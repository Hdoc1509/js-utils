const cuadratic = ({ coeA = 1, coeB = 0, coeC = 0 } = {}) => {
  const discriminant = coeB ** 2 - 4 * coeA * coeC;

  if (discriminant < 0) return;

  const root = (-coeB + Math.sqrt(discriminant)) / (2 * coeA);

  const root1 = root;
  const root2 =
    discriminant === 0 ? root : (-coeB - Math.sqrt(discriminant)) / (2 * coeA);

  return { root1, root2 };
};

export default { cuadratic };
