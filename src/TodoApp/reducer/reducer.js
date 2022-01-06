export const initialState = {
  todos: ["Hello", "Good After Noon"],
  deleteTodos: ["i am deleted", "todo delete"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DEL":
      return {
        todos: state.todos.filter((todo) => todo !== action.payload),
        deleteTodos: [...state.deleteTodos, action.payload],
      };
    case "RESTORE":
      return {
        deleteTodos: state.deleteTodos.filter(
          (delTodo) => delTodo !== action.payload
        ),
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;