const path = require('path')
const bodyParser = require('body-parser')

const { exp, app, root } = require("../app");

app.use(exp.static(path.join(root, 'static')))
app.use(bodyParser.json())