/**
 * @jest-environment jsdom
 */

import { formInputs } from '../../src/form.js';

describe('--- Form Inputs ---', () => {
  document.body.innerHTML = `
  <form id="test-form">
    <input type="text" name="usr_name" value="Manfred">
    <input type="email" name="usr_email" value="manfredman@gmail.com">
  </form>
  `;

  test('No argument returns and empty object', () => {
    const data = formInputs();

    expect(data).toEqual({});
  });

  test('Retrieving data from a HTMLFormElement correctly', () => {
    const $form = document.getElementById('test-form');

    const data = formInputs($form);

    expect(data).toEqual({
      usr_name: 'Manfred',
      usr_email: 'manfredman@gmail.com',
    });
  });
});
