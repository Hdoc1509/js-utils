/**
 * @jest-environment jsdom
 */

const { gid } = require('../../utils/browser/dom');

describe('--- DOM gid ---', () => {
  document.body.innerHTML = `
    <main>
      <p id="text1">Text 1</p>
      <p id="text2">Text 2</p>
    </main>
  `;

  test('No argument returns null', () => {
    const $element = gid();

    expect($element).toBeNull();
  });

  test('Getting the element by id correctly', () => {
    const $element1 = gid('text1');
    const $element2 = gid('text2');

    expect($element1).toBeDefined();
    expect($element1.textContent).toBe('Text 1');

    expect($element2).toBeDefined();
    expect($element2.textContent).toBe('Text 2');
  });
});
