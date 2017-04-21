import reducer from './CounterReducer'
import { increment, decrement } from './CounterActions'
import { resetState } from '../../GlobalActions'

describe('counter reducer', () => {
  it('should return the initial state 0', () => {
    expect(reducer(undefined, {})).toEqual(0)
  })
  it('should handle INCREMENT', () => {
    expect(reducer(0, increment())).toEqual(1)
    expect(reducer(1, increment())).toEqual(2)
    expect(reducer(2, increment())).toEqual(3)
    expect(reducer(-1, increment())).toEqual(0)
    expect(reducer(-2, increment())).toEqual(-1)
  })
  it('should handle DECREMENT', () => {
    expect(reducer(0, decrement())).toEqual(-1)
    expect(reducer(1, decrement())).toEqual(0)
    expect(reducer(2, decrement())).toEqual(1)
    expect(reducer(-1, decrement())).toEqual(-2)
    expect(reducer(-2, decrement())).toEqual(-3)
  })
  it('should handle RESET', () => {
    expect(reducer(0, resetState())).toEqual(0)
    expect(reducer(1, resetState())).toEqual(0)
    expect(reducer(-1, resetState())).toEqual(0)
  })
})