const pageListing = require('./listing')
const pageLayout = require('../static/__Layout')

function pageGET(app, root) {
  app.get('/', (req, res) => {
    res.send(pageLayout(pageListing.index))
  })

  app.get('/bills', (req, res) => {
    const slugData = {
      order: req.query.order,
      amount: req.query.amount
    }

    res.send(pageLayout(pageListing.bills(slugData)))
  })
}

module.exports = pageGET