import { connect } from 'react-redux'
import { getAllTodos} from '../actions'
import Links from '../components/links'

const mapState = (state, ownProps) => ({
  incomplete: ownProps.filter === state.getAllTodos
})

const mapDispatch = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(getAllTodos(ownProps.filter))
  }
})

const Filters = connect(
  mapState,
  mapDispatch
)(Links)

export default Filters
