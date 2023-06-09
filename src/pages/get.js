const pageListing = require('./listing')
const pageLayout = require('../static/__Layout')
const qrGenerator = require('../api/qr')

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

  app.get('/api/bills', async (req, res) => {
    const slugData = {
      order: req.query.order,
      amount: req.query.amount
    }

    qrGenerator(res, slugData)
  })
}

module.exports = pageGET