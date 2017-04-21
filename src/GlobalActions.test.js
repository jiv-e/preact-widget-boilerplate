import * as actions from './GlobalActions'

describe('actions', () => {
  it('should create an action for resetting the state', () => {
    const expectedAction = {
      type: 'RESET'
    }
    expect(actions.resetState()).toEqual(expectedAction)
  })
})