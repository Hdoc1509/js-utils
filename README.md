# js-utils

Different utils for javascript

## Installation

```sh
npm install --save-dev @hdoc15/js-utils
```

## Arithmetic functions

Provides sum and average functions for array of numbers

```js
const { sum, avg } = require('@hdoc15/js-utils');

const numbers = [1, 2, 3];

// logs 6
console.log(sum(numbers));

// logs 3
console.log(avg(numbers));
```

## Array functions

Provides functions and validations for arrays

```js
const {
  arrayOfNumbers,
  arrayOfStrings,
  randomElement,
  sort,
} = require('@hdoc15/js-utils');

const numbers = [1, 2, 3];
const strings = ['string', 'word', 'random'];

// logs true
console.log(arrayOfNumbers(numbers));
console.log(arrayOfStrings(strings));

// logs false
console.log(arrayOfNumbers('string', { name: 'object' }, [null]));
console.log(arrayOfStrings(1, [], null));

// logs a random element of array numbers
console.log(randomElement(numbers));

// logs numbers and strings in ascendent order
console.log(sort(numbers));
console.log(sort(strings));

console.log(sort(numbers, 1));
console.log(sort(strings, 1));

// logs numbers and strings in descendent order
console.log(sort(numbers, -1));
console.log(sort(strings, -1));

// logs numbers and strings in random order
console.log(sort(numbers, 'r'));
console.log(sort(strings, 'r'));
```

_Note: randomElement() and sort() returns a new array._

## DOM accesing

Provides simplified names for dom accesing

Having the next html file ...

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example</title>
    <script src="js/main.js" type="module" defer></script>
  </head>
  <body>
    <main>
      <p id="text1" class="text">Texto 1</p>
      <p id="text2" class="text">Texto 2</p>
      <p id="text3" class="text">Texto 3</p>
      <p id="text4" class="text">Texto 4</p>
      <p id="text5" class="text">Texto 5</p>
    </main>
  </body>
</html>
```

```js
const { qs, qsa, gid } = require('@hdoc15/js-utils');

// logs main tag
console.log(qs('main'));

// logs NodeList of elements with class 'text' as an array
console.log(qsa('.text'));

// logs element with id text1
console.log(gid('text1'));
```

## Equation functions

Provides a solver for cuadratic equations of the form: ax<sup>2</sup> + bx + c = 0. Where a, b and c are the coefficients of the equation.

```js
const { equation } = require('@hdoc15/js-utils');

const coefficients = {
  coeA: 2,
  coeB: 1,
  coeC: 0,
};

// logs { root1: 0, root2: -0.5 }
console.log(equation.cuadratic(coefficients));
```

## Form functions

Provides functions to handle forms.

Having the next html file ...

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example</title>
    <script src="js/main.js" type="module" defer></script>
  </head>
  <body>
    <form id="my-form">
      <input type="text" name="usr_name" required />
      <input type="email" name="usr_email" required />
      <input type="submit" value="Send" />
    </form>
  </body>
</html>
```

```js
const { gid, formInputs } = require('@hdoc15/js-utils');

gid('my-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const data = formInputs(e.target);

  // logs { usr_name: usr_name_value, usr_email: usr_email_value}
  console.log(data);
});
```

_Note: formInputs() returns an object with data of each input that have name attribute._
