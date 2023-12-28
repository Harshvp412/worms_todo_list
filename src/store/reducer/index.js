import { combineReducers } from "redux";
import { todoReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
