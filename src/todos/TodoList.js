import React from "react";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../actions";
import TodoListItem from "../todo-list-item/TodoListItem";
import TodoForm from "../todo-form/TodoForm";

const TodoList = ({ todos, onRemovePressed, onCompletePressed }) => (
  <div className="listWrapper">
    {console.log("Todos: ", todos)}
    <TodoForm />
    {todos?.map((todo) => (
      <TodoListItem
        todo={todo}
        onCompletePressed={onCompletePressed}
        onRemovePressed={onRemovePressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
