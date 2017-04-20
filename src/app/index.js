import { connect } from 'react-redux'
import App from './App'
import { resetState } from '../GlobalActions'

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: () => {
      dispatch(resetState())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)