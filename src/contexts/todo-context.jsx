import React, { useContext, useState } from "react";

export const defaultValue = {
  todos: [],
};
export const TodoContext = React.createContext(defaultValue);
export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = (props) => {
  const { children } = props;
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
