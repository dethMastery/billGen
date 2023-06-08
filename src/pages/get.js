const pageListing = require('./listing')
const pageLayout = require('../static/__Layout')

function pageGET(app, root) {
  app.get('/', (req, res) => {
    res.send(pageLayout(pageListing.index))
  })
}

module.exports = pageGET