const pageListing = require('./listing')
const pageLayout = require('../static/__Layout')

function pageGET(app, root) {
  app.get('/', (req, res) => {
    res.send(pageLayout(pageListing.index))
  })

  app.get('/bills', (req, res) => {
    res.send(pageLayout(pageListing.bills))
  })
}

module.exports = pageGET