import { initialState } from "./initialState";
import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETETODO,
  TOGGLED
} from "./todo.types";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id,maxId), -1);
  return maxId+1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case DELETETODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);
    case COLORSELECTED:
      const { id, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    default:
      return state;
  }
};

export default reducer;
