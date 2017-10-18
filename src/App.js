import React from 'react'
import Filters from './components/filter'
import AddTodo from './containers/addTodo'
import FilteredTodos from './containers/filteredTodos'

const App = () => (
  <div>
    <AddTodo />
    <FilteredTodos />
    <Filters />
  </div>
)

export default App
