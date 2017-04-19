import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import App from './App'

const AppInstance = <App
  value={0}
  onIncrement={() => null}
  onDecrement={() => null}
/>

const result = shallow(AppInstance)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(AppInstance, div)
})

it('renders welcome message', () => {
  const welcome = <h1>Preact widget boilerplate</h1>
  expect(result.contains(welcome)).toEqual(true)
})