import React from 'react'
import Todo from './todo'

const TodoList = ({ todos, onAddClick }) => (
  <ul>
    {todos && todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onAddClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
