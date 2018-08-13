# github-personal-stars

[![NPM version](https://img.shields.io/npm/v/github-personal-stars.svg?style=flat)](https://npmjs.org/package/github-personal-stars)
[![Travis CI](https://travis-ci.org/ZYSzys/github-personal-stars.svg?branch=master)](https://travis-ci.org/ZYSzys/github-personal-stars)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/ZYSzys/github-personal-stars.svg)](https://github.com/ZYSzys/github-personal-stars/blob/master/LICENSE)

> Count your personal repos' total stars.

![](/screenshot.png)

## Installation

### Global
```sh
# Using npm
npm install -g github-personal-stars

# Using yarn
yarn global add github-personal-stars
```

### Local
```sh
# Using npm
npm install --save github-personal-stars

# Using yarn
yarn add github-personal-stars
```


## Usage

```js
const countPersonalStars = require('.')

// use your username, 'ZYSzys' is mine
countPersonalStars('ZYSzys', (err, total) => {
  console.log(err || total)
});
// =>
// Just a number.
```

## License

MIT.
