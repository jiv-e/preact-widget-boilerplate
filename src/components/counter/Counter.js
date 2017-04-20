import React from 'react'
import PropTypes from 'prop-types'
import Button from '../_common/Button'
import CounterValueDisplay from './CounterValueDisplay'
import './Counter.css'

const Counter = ({ counterValue, onIncrement, onDecrement}) => {
  const incrementIfOdd = () => {
    if (counterValue % 2 !== 0) {
      onIncrement()
    }
  }
  const incrementAsync = () => {
    setTimeout(onIncrement, 1000)
  }

  return (
    <div className="counter">
      <CounterValueDisplay value={counterValue} />{' '}
      <Button text="+" onClick={onIncrement} />
      <Button text="-" onClick={onDecrement} />
      <Button text="Increment if odd" onClick={incrementIfOdd} />
      <Button text="Increment async" onClick={incrementAsync} />
    </div>
  )
}

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter