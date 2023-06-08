const template = require('../static/_template.js')

const title = 'katzuBill'
const head = ``
const body = `<div id="container">
  <div class="card">
    <div class="cardHeader">
      <h1>
        katzuBill
      </h1>
    </div>
    <div class="cardBody">
      <form action="/addBills" method="post">
        <label for="order">Order ID: </label>
        <input type="text" name="order" id="order" placeholder="order ID" required>

        <label for="amount">Amount: </label>
        <input type="number" name="amount" id="amount" placeholder="Amount" required>
        
        <button type="submit">
          Create Order
        </button>
      </form>
    </div>
  </div>
</div>`

module.exports = {
  title: title,
  head: head,
  body: template(body)
}