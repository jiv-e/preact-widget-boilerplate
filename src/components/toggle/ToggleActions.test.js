import * as actions from './ToggleActions'

describe('actions', () => {
  it('should create a toggle action', () => {
    const expectedAction = {
      type: 'TOGGLE'
    }
    expect(actions.toggle()).toEqual(expectedAction)
  })
})