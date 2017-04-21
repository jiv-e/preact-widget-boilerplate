import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import Intro from './Intro'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Intro />, div)
})

const result = shallow(<Intro/>)
it('renders intro message', () => {
 const welcome = <p className="app-intro">To get started, edit <code>src/app/App.js</code> and save to reload.</p>
 expect(result.contains(welcome)).toEqual(true)
})