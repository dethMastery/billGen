const path = require('path')
const bodyParser = require('body-parser')

const { exp, app, root } = require('../app')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(exp.static(path.join(root, 'static')))
