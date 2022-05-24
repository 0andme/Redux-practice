import React from "react";
import useReduxState from "../hooks/useReduxState";
function TodoList() {
  const state = useReduxState();
  return (
    <ul>
      {state.todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
