import { connect } from 'react-redux'
import MyComponent from './myComponent'
import { changeInput, add, substract, toZero } from './action'

// Map Redux state to component props
function mapStateToProps(state) {
  console.log('state', state)
  return {
    info: state.info,
    count: state.count
    // text: state.text,
    // name: state.name,
    // count: state.count,
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(changeInput(e.target.value)),
    add: () => dispatch(add()),
    substract: () => dispatch(substract()),
    toZero: () => dispatch(toZero())
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)

export default App
