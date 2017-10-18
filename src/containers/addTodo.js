import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Todo from '../components/todo'

const mapState = (state) => ({
  todos: addTodo(state.todos, state.addTodo)
})

const mapDispatch = {
  onAddClick: addTodo
}

const AddTodo = connect(
  mapState,
  mapDispatch
)(Todo)

export default AddTodo
