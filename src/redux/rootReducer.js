import { combineReducers } from "redux";
import filterReducer from "./fillter/fillter.reducer";
import todoReducer from "./todo/todo.reducer";
const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
