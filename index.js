const GitHub = require('gh.js')

function countPersonalStars(username, token, callback) {
  if (typeof token === 'function') {
    callback = token
    token = undefined
  }

  const gh = new GitHub({ token: token })
  gh.get(`users/${username}/repos`, { all: true }, (err, repos) => {
    if (err) {
      return callback(err)
    }

    let total = 0
    for (const repo of repos) {
      total += repo.stargazers_count
    }

    callback(null, total)
  })

  return gh
}

module.exports = countPersonalStars