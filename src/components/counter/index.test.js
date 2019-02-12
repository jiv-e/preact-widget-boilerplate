import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'

const store = createStore(reducers)

const CounterContainer =
  <Provider store={store}>
    <Counter />
  </Provider>

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(CounterContainer, div)
})