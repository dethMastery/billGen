let mongoose = require('mongoose')

require('dotenv').config()

const env = process.env

// mongodb://root:katsuLiminal@localhost:27017/?authMechanism=DEFAULT&authSource=admin

let URI = 'mongodb://' + env.MONGO_USER + ':' + env.MONGO_PASS + '@' + env.MONGO_URL + '/' + env.MONGO_DB + '?authsource=admin'

mongoose.connect(URI)

let db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('connected', () => {
  console.log('Database Connected');
})