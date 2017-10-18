import {GET_ALL_TODOS, ADD_TODO, COMPLETE_TODO} from '../types'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      case GET_ALL_TODOS:
      return action.filter

    default:
      return state
  }
}

export default reducer
