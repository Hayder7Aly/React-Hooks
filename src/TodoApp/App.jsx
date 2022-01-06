import React, { useReducer } from "react";
import AddTods from "./AddTods";
import { ContextProvider } from "./context/Context";
import reducer, { initialState } from "./reducer/reducer";

const App = () => {
  const [{ todos, deleteTodos }, dispatch] = useReducer(reducer, initialState);

  const renderTodos = () => {
    return todos.map((todo, idx) => {
      return (
        <div key={idx}>
          <p >{todo}</p>
          <button onClick={() => dispatch({type : "DEL" , payload : todo})}>Delete Todo</button>
        </div>
      );
    });
  }

  const renderDelteTodos = () => {
    return deleteTodos.map((todo, idx) => {
      return (
        <div key={idx}>
          <p >{todo}</p>
          <button onClick={() => dispatch({type : "RESTORE" , payload : todo})}>Restore Todo</button>

        </div>
      );
    });
  };

  return (
    <ContextProvider value={{todos,deleteTodos ,dispatch}}>
    <div className="App" style={{padding : '5rem 20%'}}>
      <h1>Todo App using Context Api & Reducer</h1>
      <br />
      <br />
      <AddTods />
      <br />
      <br />
      <div>
        <h3>Your Todos</h3>
        {renderTodos()}
      </div>
      <br />
      <br />
      <br />

      <div>
        <h3>Delete Tods</h3>
        {renderDelteTodos()}
      </div>
    </div>
     </ContextProvider>
  );
};

export default App;
