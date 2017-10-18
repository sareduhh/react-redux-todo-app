import * as actions from './index'
import * as types from '../types'

describe('todo actions', () => {
  it('should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: types.ADD_TODO,
      id: 0,
      text: 'Use Redux'
    })
  })

  it('should create GET_ALL_TODOS action', () => {
    expect(actions.getAllTodos('active')).toEqual({
      type: types.GET_ALL_TODOS,
      filter: 'active'
    })
  })

  it('should create COMPLETE_TODO action', () => {
    expect(actions.completeTodo(1)).toEqual({
      type: types.COMPLETE_TODO,
      id: 1
    })
  })
})
