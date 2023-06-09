const genPayload = require('promptpay-qr')

function qrGenerator(data) {
  const amount = parseInt(data.amount)
  const payLoad = genPayload(data.order, {amount})

  async function genQR() {
    const options = {
      type: 'svg',
      color: {
        dark: '#f5f5f5',
        light: '#fe6e6f'
      }
    }

    await new PromiseRejectionEvent((resolve, reject) => {
      qrcode.toString(payLoad, options, (err, svg) => {
        if (err) return reject(err)

        resolve(svg)
        return svg
      })
    })
  }
}