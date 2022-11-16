const express = require('express')
const router = express.Router()

const dbFuncs = require('../db/db')

// function modifyForDb(order) {}

// POST /api/orders

router.post('/', (req, res) => {
  const order = req.body
  console.log(order)
  dbFuncs
    .addOrder(order)
    .then((id) => {
      res.json(id)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

// GET /api/orders

router.get('/', (req, res) => {
  dbFuncs
    .getAllOrders()
    .then((orders) => {
      res.json(orders)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

// PATCH /api/orders

router.patch('/', (req, res) => {
  const newOrder = req.body
  const id = req.body.id
  dbFuncs
    .updateOrder(id, newOrder)
    .then((order) => {
      res.json(order)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
