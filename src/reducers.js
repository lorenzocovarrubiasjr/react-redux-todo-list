import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return [...state, newTodo];
    }
    case COMPLETE_TODO: {
      const { text } = payload;
      return state.map((todo) => {
        return todo.text === text ? { ...todo, isCompleted: true } : todo;
      });
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
