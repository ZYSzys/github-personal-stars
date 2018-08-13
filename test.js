const ora = require('ora')
const countPersonalStars = require('.')

const spinner = ora('Testing...')
spinner.start()

const username = 'ZYSzys'
countPersonalStars(username, (err, total) => {
  spinner.stop()
  console.log(err || (username + ' has ' + total + ' stars totally!'))
})