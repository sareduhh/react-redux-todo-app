import { connect } from 'react-redux'
import { completeTodo } from '../actions'
import TodoList from '../components/todoList'

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_INCOMPLETE':
      return todos.filter(t => !t.completed)
    default:
      return null
  }
}

const mapState = (state) => ({
  todos: getTodos(state.todos, state.getAllTodos)
})

const mapDispatch = {
  onTodoClick: completeTodo
}

const FilteredTodos = connect(
  mapState,
  mapDispatch
)(TodoList)

export default FilteredTodos
