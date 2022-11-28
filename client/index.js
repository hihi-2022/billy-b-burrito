import React from 'react'
import { render } from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain="hihi-2022-kelsey.au.auth0.com"
      clientId="cXKYFU8x1NBBnqkWBwxbQI4jFVXFbiic"
      redirectUri={window.location.origin}
      audience="https://ordering/api"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
