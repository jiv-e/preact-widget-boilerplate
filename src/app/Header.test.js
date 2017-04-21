import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import Header from './Header'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})

const result = shallow(<Header/>)
it('renders welcome message', () => {
 const welcome = <h1>Preact widget boilerplate</h1>
 expect(result.contains(welcome)).toEqual(true)
})