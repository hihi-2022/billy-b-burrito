import request from 'superagent'

export function submitOrder(order) {
  return request
    .post('/api/orders')
    .send(order)
    .then((res) => res.body)
}

export function getAllOrders() {
  return request.get('/api/orders').then((res) => res.body)
}

export function updateOrder(updatedOrder) {
  return request
    .patch('/api/orders')
    .send(updatedOrder)
    .then((res) => res.body)
}
