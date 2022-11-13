const express = require('express')
const router = express.Router()

const dbFuncs = require('../db/db')

// GET /api/orders

router.post('/', (req, res) => {
  dbFuncs
    .addOrder()
    .then((order) => {
      res.json(order)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
