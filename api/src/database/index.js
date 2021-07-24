const mongoose = require('mongoose')

const { DB_USER, DB_PASS, DB_PORT, DB_NAME} = process.env;

module.exports = mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})