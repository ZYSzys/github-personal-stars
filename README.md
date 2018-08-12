# github-personal-stars

> Count your personal repos' total stars.


## :cloud: Installation

```sh
# Using npm
npm install --save github-personal-stars

# Using yarn
yarn add github-personal-stars
```


## :clipboard: Example

```js
const countPersonalStars = require('.')

// use your username, 'ZYSzys' is mine
countPersonalStars('ZYSzys', (err, total) => {
  console.log(err || total)
})
// =>
// Just a number.
```

