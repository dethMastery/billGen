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
        <div class="form-container">
          <label for="order">Order Name: </label>
          <input type="text" name="order" id="order">
        </div>
        <br>
        <div class="form-container">
          <label for="amount">Amount: </label>
          <input type="number" name="amount" id="amount">
        </div>

        <div class="form-container">
          <button type="submit">
            Create Order
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`

module.exports = {
  title: title,
  head: head,
  body: template(body)
}