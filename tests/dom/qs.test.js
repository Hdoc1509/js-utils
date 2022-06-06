/**
 * @jest-environment jsdom
 */

const { qs } = require('../../utils/dom');

describe('--- DOM qs ---', () => {
  document.body.innerHTML = `
    <main>
      <p id="text1">Text 1</p>
      <p id="text2">Text 2</p>
    </main>
  `;

  test('No argument returns null', () => {
    const $element = qs();

    expect($element).toBeNull();
  });

  test('Getting the element by query selector correctly', () => {
    const $main = qs('main');
    const $paragraph1 = qs('p', $main);

    expect($main).toBeDefined();
    expect($main.children.length).toBe(2);

    expect($paragraph1).toBeDefined();
    expect($paragraph1.textContent).toBe('Text 1');
  });
});
