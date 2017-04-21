import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers'

const store = createStore(reducers)

const AppInstance = <Provider store={store}>
    <App onReset={() => null} />
  </Provider>

const result = shallow(AppInstance)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(AppInstance, div)
})