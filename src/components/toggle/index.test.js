import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import Toggle from './index'

const store = createStore(reducers)

const ToggleContainer =
  <Provider store={store}>
    <Toggle />
  </Provider>

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(ToggleContainer, div)
})