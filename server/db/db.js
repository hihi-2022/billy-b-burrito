const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

function addOrder(order, db = conn) {
  return db('orders').insert(order)
}

function getAllOrders(db = conn) {
  return db('orders').select()
}

module.exports = {
  addOrder,
  getAllOrders,
}
