import React from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"

export class TodoList extends React.Component {
  state = {
    todos: [],
    filter: false
  }

  addTodo = (todo) => this.setState({ todos: [todo, ...this.state.todos] })

  handleClick = (id) => {
    let newTodos = this.state.todos.map((todo) => {
      let newTodo = { ...todo }
      if (todo.id === id) newTodo.isComplete = !todo.isComplete
      return newTodo
    })
    this.setState({ todos: newTodos })
  }

  toggleFilter = () => this.setState({ filter: !this.state.filter })

  render() {
    let todos = !this.state.filter
      ? this.state.todos
      : this.state.todos.filter((x) => !x.isComplete)
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <button onClick={this.toggleFilter}>
          {this.state.filter ? "Unfilter" : "Filter"}
        </button>
        <ul>
          {todos.map((todo, i) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleClick={() => this.handleClick(todo.id)}
            />
          ))}
        </ul>

        <p>
          {
            this.state.todos.filter((x) => {
              console.log(x)
              return !x.isComplete
            }).length
          }
        </p>
      </div>
    )
  }
}
