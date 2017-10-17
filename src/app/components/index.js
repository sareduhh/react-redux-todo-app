import React from 'react'
import Filters from '../containers/filter'
import NewTodo from '../containers/newTodo'
import FilteredTodos from '../containers/filteredTodos'

const Main = () => (
  <div>
    <NewTodo />
    <ShowAllTodos />
    <Filters />
  </div>
)

export default Main
