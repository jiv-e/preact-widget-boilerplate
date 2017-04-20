import { connect } from 'react-redux'
import Counter from './Counter'
import { increment, decrement } from './CounterActions'

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)