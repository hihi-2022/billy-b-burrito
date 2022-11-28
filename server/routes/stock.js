const express = require('express')
const router = express.Router()

const dbFuncs = require('../db/db')

// GET /api/stock

router.get('/', (req, res) => {
  dbFuncs
    .getStock()
    .then((stock) => {
      res.json(stock)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

// PATCH /api/stock

router.patch('/', (req, res) => {
  const { newQuantity, id } = req.body
  dbFuncs
    .updateStock(id, newQuantity)
    .then((stockItem) => {
      res.json(stockItem)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
