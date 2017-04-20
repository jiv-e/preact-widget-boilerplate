import React from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'
import Counter from '../components/counter'
import Toggle from '../components/toggle'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Counter />
      <Toggle />
    </div>
  )
}

export default App
