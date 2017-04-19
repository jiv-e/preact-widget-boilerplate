import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Preact widget boilerplate</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Clicked: {value} times
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
          <button onClick={this.incrementIfOdd}>Increment if odd</button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </p>
      </div>
    )
  }
}

export default App
