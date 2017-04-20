import { connect } from 'react-redux'
import Toggle from './Toggle'
import { toggle } from './ToggleActions'

const mapStateToProps = (state) => {
  return {
    toggleState: state.toggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: () => {
      dispatch(toggle())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle)