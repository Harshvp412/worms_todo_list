import { ALL_TODOS, ERROR_TODOS, DELETE_TODO, ADD_TODO } from "../type";

const initial_state = {
  loading: true,
  data: [],
  error: null,
};
export const todoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ALL_TODOS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ERROR_TODOS:
      return { ...state, loading: false, error: action.err, data: [] };
    case DELETE_TODO:
      const updatedData = state.data.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        data: updatedData,
      };
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};
