import React from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Header from './Header'
import Intro from './Intro'
import Button from '../components/_common/Button'
import Counter from '../components/counter'
import Toggle from '../components/toggle'

const App = ({ onReset }) => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Counter />
      <Toggle />
      <Button text="Reset state" onClick={ onReset } />
    </div>
  )
}

App.propTypes = {
  onReset: PropTypes.func.isRequired
}

export default App
