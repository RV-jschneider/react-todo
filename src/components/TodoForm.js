import React from "react"
import shortid from "shortid"

const init = {
  text: ""
}

export class TodoForm extends React.Component {
  state = {
    text: ""
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo({
      text: this.state.text,
      id: shortid.generate(),
      isComplete: false
    })
    this.setState(init)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          placeholder="todo..."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
