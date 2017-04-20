export default (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state
    case 'RESET':
      return true
    default:
      return state
  }
}