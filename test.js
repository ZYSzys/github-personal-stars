/*const ora = require('ora')
const countPersonalStars = require('.')

const spinner = ora('Testing...')
spinner.start()

const username = 'ZYSzys'
countPersonalStars(username, (err, total) => {
  spinner.stop()
  console.log(err || (username + ' has ' + total + ' stars totally!'))
})
*/

import test from 'ava'
import countPersonalStars from '.'

test.cb('sort torvalds starred repos', t => {
  countPersonalStars('torvalds', t.end)
})

test.cb('sort ZYSzys starred repos', t => {
  countPersonalStars('ZYSzys', t.end)
})