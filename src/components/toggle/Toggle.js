import React from 'react'
import PropTypes from 'prop-types'
import Button from '../_common/Button'
import './Toggle.css'

const Toggle = ({ toggleState, onToggle}) => {
  return (
    <div className={'toggle' + (toggleState ? ' -on' : ' -off')}>
      <span>Toggle value: {toggleState.toString()}</span> {' '}
      <Button text="Toggle" onClick={onToggle} />
    </div>
  )
}

Toggle.propTypes = {
  toggleState: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default Toggle