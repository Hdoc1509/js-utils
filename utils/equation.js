const cuadratic = ({ coeA = 0, coeB = 0, coeC = 0 }) => {
  const discriminant = coeB ** 2 - 4 * coeB * coeC;

  if (discriminant < 0) return;

  const root1 = (-coeB + Math.sqrt(discriminant)) / (2 * coeA);
  const root2 = (-coeB - Math.sqrt(discriminant)) / (2 * coeA);

  return { root1, root2 };
};

export default { cuadratic };
