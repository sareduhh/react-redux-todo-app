import React from 'react'
import Filters from '../containers/filters'

const Filter = () => (
  <p>
    Show:
    {" "}
    <Filters filter="SHOW_ALL">
      All
    </Filters>
    {", "}
    <Filters filter="SHOW_INCOMPLETE">
      Incomplete
    </Filters>
    {", "}
    <Filters filter="SHOW_COMPLETED">
      Completed
    </Filters>
  </p>
)

export default Filter
