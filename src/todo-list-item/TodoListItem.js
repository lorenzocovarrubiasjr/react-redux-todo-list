import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onCompletePressed, onRemovePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    {todo.isCompleted ? null : (
      <button
        className="complete-button"
        onClick={() => onCompletePressed(todo.text)}
      >
        Mark As Completed
      </button>
    )}

    <button
      className="remove-button"
      onClick={() => onRemovePressed(todo.text)}
    >
      Remove
    </button>
  </div>
);

export default TodoListItem;
