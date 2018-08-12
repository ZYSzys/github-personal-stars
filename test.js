const countPersonalStars = require('.')

countPersonalStars('ZYSzys', (err, total) => {
  console.log(err || total)
})