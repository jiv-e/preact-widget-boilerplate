import { combineReducers } from 'redux'
import counter from './components/counter/CounterReducer'
import toggle from './components/toggle/ToggleReducer'

const Reducers = combineReducers({
  counter,
  toggle
})

export default Reducers