const d = document;

export const gid = (id, parent = d) => parent.getElementById(id);

export const qs = (selector, parent = d) => parent.querySelector(selector);

export const qsa = (selector, parent = d) => [
  ...parent.querySelectorAll(selector),
];

export default { gid, qs, qsa };
