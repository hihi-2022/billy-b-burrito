import request from 'superagent'

export function submitOrder() {
  return request.get('/api/order').then((res) => res.body)
}

// export function getOrders() {
//   return request.get('/api/order').then((res) => res.body)
// }
