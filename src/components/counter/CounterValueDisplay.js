import React from 'react'
import PropTypes from 'prop-types'

const CounterValueDisplay = ({ value }) => {
  return (
    <span>Counter value: { value }</span>
  )
}

CounterValueDisplay.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterValueDisplay