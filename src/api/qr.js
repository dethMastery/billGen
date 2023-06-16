const genPayload = require('promptpay-qr')
const qrcode = require('qrcode')

function qrGenerator(res, data) {
  const amount = parseInt(data.amount)
  const payLoad = genPayload(data.order, { amount })

  async function genQR() {
    const options = {
      type: 'svg',
      color: {
        dark: '#2e2f2f',
        light: '#f5f5f5',
      },
    }

    await new Promise((resolve, reject) => {
      qrcode.toString(payLoad, options, (err, svg) => {
        if (err) return reject(err)

        resolve(svg)
        res.set('Content-Type', 'image/svg+xml')
        res.send(svg)
      })
    })
  }

  genQR()
}

module.exports = qrGenerator
