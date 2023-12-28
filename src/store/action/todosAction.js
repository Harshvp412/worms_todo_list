// todosAction.js
import { ADD_TODO, DELETE_TODO, ALL_TODOS, ERROR_TODOS } from "../type";
import axios from "axios";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );

    console.log("check-1", response.data, response.status);

    if (response.status === 200) {
      dispatch({ type: ALL_TODOS, payload: response.data });
      return response.data;
    }
  } catch (e) {
    console.log("error", e.message);
    dispatch({ type: ERROR_TODOS, err: e.message });
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
