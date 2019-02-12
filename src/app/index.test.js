import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'
import App from './index'

const store = createStore(reducers)

const AppContainer =
  <Provider store={store}>
    <App />
  </Provider>

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(AppContainer, div)
})