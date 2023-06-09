const template = require('../static/_template.js')

function bills(billsData) {
  const title = 'Bills | katzuBill'
  const head = ``
  const body = `<div id="container">
  <div class="card">
    <div class="cardHeader">
      <h1>
        Bills
      </h1>
    </div>
    <div class="cardBody">
      <h4>
        Bills info:
      </h4>
      <table>
        <tr>
          <td>
            <u>PromptPay</u>:
          </td>
          <td id="pp-id">
            <p>
              ${billsData.order}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <u>Amount</u>:
          </td>
          <td>
            ${billsData.amount}
          </td>
        </tr>
      </table>
      <img src="/api/bills/?order=${billsData.order}&amount=${billsData.amount}" alt="qrCode">
      <p>
        Don't forget to mention me if you finished the transaction!
      </p>
    </div>
  </div>
</div>`

  return {
    title: title,
    head: head,
    body: template(body),
  }
}

module.exports = bills
