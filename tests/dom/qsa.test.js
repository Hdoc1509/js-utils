/**
 * @jest-environment jsdom
 */

import { qsa } from '../../src/dom.js';

describe('--- DOM qsa ---', () => {
  document.body.innerHTML = `
    <main>
      <p id="text1">Text 1</p>
      <p id="text2">Text 2</p>
    </main>
  `;

  test('No argument returns an empty array', () => {
    const nodesArray = qsa();

    expect(nodesArray.length).toBe(0);
  });

  test('Getting array of elements by query selector all correctly', () => {
    const nodesArray = qsa('p');

    expect(nodesArray).toBeDefined();
    expect(nodesArray.length).toBe(2);
  });
});
