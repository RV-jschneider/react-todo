import React from "react"

export const Todo = (props) => {
  console.log(props.todo)
  return (
    <li
      onClick={props.handleClick}
      style={{
        textDecoration: props.todo.isComplete ? "line-through" : ""
      }}
    >
      {props.todo.text}
    </li>
  )
}
