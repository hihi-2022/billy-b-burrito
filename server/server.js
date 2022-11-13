const path = require('path')
const express = require('express')

const server = express()

const orders = require('./routes/orders')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/order', orders)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
