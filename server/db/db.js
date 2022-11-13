const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

function addOrder(order, db = conn) {
  return db('orders').insert(order)
}

module.exports = {
  addOrder,
}
