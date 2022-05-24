import React from "react";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
