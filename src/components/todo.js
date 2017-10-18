import React, {Component} from 'react'

class Todo extends Component{
onSubmit = (e) => {
  this.props.addTodo(e.target.value)
}
  render(){
    const {onClick, completed, text} = this.props
    return(
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.props.text}/>
        <button type="submit">
       Add
     </button>
      </form>
      <li
        onClick={this.onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
      </div>
    )
  }
}

export default Todo
