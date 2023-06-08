const path = require('path')
const { exp, app, root } = require("../app");

app.use(exp.static(path.join(root, 'statics')))