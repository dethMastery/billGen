const { app, root } = require('../app')
const pageGET = require('./pages/get')
const pagePOST = require('./pages/post')

pageGET(app, root)
pagePOST(app)