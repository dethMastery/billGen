const exp = require('express')
const app = exp()

const root = `${__dirname}`

module.exports = {
  exp,
  app,
  root
}

require('./src/middleware')
require('./src/pages')
require('./src/port')