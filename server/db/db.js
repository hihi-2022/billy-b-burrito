const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const conn = require('knex')(config)

function addOrder(order, db = conn) {
  return db('orders').insert(order)
}

function getAllOrders(db = conn) {
  return db('orders').select()
}

function getQueuedOrders(db = conn) {
  return db('orders').select().where('order_status', 'in queue')
}

function updateOrder(id, newOrder, db = conn) {
  return db('orders').update(newOrder).where('id', id)
}

function getStock(db = conn) {
  return db('stock').select()
}

function updateStock(id, newQuantity, db = conn) {
  return db('stock').update(newQuantity).where('id', id)
}

module.exports = {
  addOrder,
  getAllOrders,
  updateOrder,
  getQueuedOrders,
  getStock,
  updateStock,
}
