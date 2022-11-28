import { getStock, updateStock } from '../apiClient'

export const GET_STOCK = 'GET_STOCK'
export const UPDATE_STOCK = 'UPDATE_STOCK'

// ACTIONS
export function getStockAction(stock) {
  return {
    type: GET_STOCK,
    payload: stock,
  }
}

export function updateStockAction(newStock) {
  return {
    type: UPDATE_STOCK,
    payload: newStock,
  }
}

// THUNKS
// Get orders
export function getStockThunk() {
  return (dispatch) => {
    getStock()
      .then((stock) => {
        dispatch(getStockAction(stock))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

//update stock
export function updateStockThunk(newStock) {
  return (dispatch) => {
    updateStock(newStock)
      .then(() => {
        dispatch(updateStockAction(newStock))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
