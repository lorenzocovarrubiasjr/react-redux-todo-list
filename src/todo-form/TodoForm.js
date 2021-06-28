import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions";
import "./TodoForm.css";

const TodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");
  {
    console.log("Todos in todoform: ", todos);
  }

  return (
    <div className="new-todo-form">
      <p>{inputValue}</p>
      <input
        type="text"
        className="new-todo-form"
        value={inputValue}
        placeholder="Type Your New Todo"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          if (!todos.some((todo) => todo.text === inputValue)) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
