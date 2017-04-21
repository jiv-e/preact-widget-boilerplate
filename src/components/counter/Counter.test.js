import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'
import Button from '../_common/Button'

function setup() {
  const props = {
    counterValue: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  }

  const wrapper = shallow(<Counter {...props} />)

  return {
    props,
    wrapper
  }
}

describe('components', () => {
  describe('Counter', () => {
    it('should render self and subcomponents', () => {
      const { wrapper } = setup()
      const Buttons = wrapper.find(Button)
      expect(wrapper.find('div').hasClass('counter')).toBe(true)
      expect(Buttons.length).toBe(4)

      const incrementButtonProps = Buttons.at(0).props()
      expect(incrementButtonProps.text).toBe('+')
      const decrementButtonProps = Buttons.at(1).props()
      expect(decrementButtonProps.text).toBe('-')
      const incrementIfOddButtonProps = Buttons.at(2).props()
      expect(incrementIfOddButtonProps.text).toBe('Increment if odd')
      const incrementAsyncButtonProps = Buttons.at(3).props()
      expect(incrementAsyncButtonProps.text).toBe('Increment async')
    })
  })
})