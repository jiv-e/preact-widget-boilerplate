import * as actions from './CounterActions'

describe('actions', () => {
  it('should create an action for incrementing the value', () => {
    const expectedAction = {
      type: 'INCREMENT'
    }
    expect(actions.increment()).toEqual(expectedAction)
  })
  it('should create an action for incrementing the value', () => {
    const expectedAction = {
      type: 'INCREMENT'
    }
    expect(actions.increment()).toEqual(expectedAction)
  })
})