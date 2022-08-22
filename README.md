[![Node.js build and publish package](https://github.com/hebertcisco/palindromic/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/palindromic/actions/workflows/npm-publish.yml)

[![Running Code Coverage](https://github.com/hebertcisco/palindromic/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/palindromic/actions/workflows/coverage.yml)

[![codecov](https://codecov.io/gh/hebertcisco/palindromic/branch/main/graph/badge.svg?token=PQV2NE71P6)](https://codecov.io/gh/hebertcisco/palindromic)

> By extension, a palindrome is any series of elements with linear symmetry, that is, that have the same sequence of units in both directions.

## Installation

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add palindromic
```

```bash
# npm
npm i palindromic --save
```

### Import the lib with es6 or cjs

```mjs
// es6
import palindromic from 'palindromic';
```

```cjs
// cjs
const palindromic = require('palindromic');
```

### Usage examples

#### Helpers

##### findPalindromic

```cjs
#!/usr/bin/env node
const { findPalindromic } = require("palindromic");

const is_palindromic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99];
const not_palindromic = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28];

const palindromic_list = findPalindromic([...is_palindromic, ...not_palindromic]);
console.log(palindromic_list); // [666, 777, 888, 999, 1111, 2222]
```

##### isPalindromic

```cjs
#!/usr/bin/env node
const { isPalindromic } = require("palindromic");

const is_palindromic = 77;
const not_palindromic = 13;

console.log(is_palindromic); // true
console.log(not_palindromic); // false
```

#### Utils

##### findPrimesNumbers

```ts
#!/usr/bin/env node
import {findPrimesNumbers} from 'palindromic';
let primal_numbers: number[] = [];

for (let i = 1; i < 100; i++) {
    if (isPrimeNumber(i)) {
       primal_numbers.push(i);
    }
}
const result = findPrimesNumbers(primal_numbers);
console.log(result); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
```

##### isPrimeNumber

```ts
#!/usr/bin/env node
import {isPrimeNumber} from 'palindromic';

const is_prime_number = isPrimeNumber(7);
const not_prime_number = isPrimeNumber(8);

console.log(is_prime_number); // true
console.log(not_prime_number); // false
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
