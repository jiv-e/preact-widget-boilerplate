import reducer from './ToggleReducer'
import { toggle } from './ToggleActions'
import { resetState } from '../../GlobalActions'

describe('toggle reducer', () => {
  it('should return the initial state "true"', () => {
    expect(reducer(undefined, {})).toEqual(true)
  })
  it('should handle TOGGLE', () => {
    expect(reducer(true, toggle())).toEqual(false)
    expect(reducer(false, toggle())).toEqual(true)
  })
  it('should handle RESET', () => {
    expect(reducer(false, resetState())).toEqual(true)
    expect(reducer(true, resetState())).toEqual(true)
  })
})