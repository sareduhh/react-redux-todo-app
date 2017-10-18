import {GET_ALL_TODOS, ADD_TODO, COMPLETE_TODO} from '../types'

let currentId = 0
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: currentId++,
  text
})

export const getAllTodos = (filter) => ({
  type: GET_ALL_TODOS,
  filter
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})
