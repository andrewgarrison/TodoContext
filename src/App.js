import React from "react";
import { TodoInput } from "./components/TodoInput";
import { Todo } from "./components/Todo";
import { useTodoContext } from "./contexts";
import "./App.css";

function App() {
  const { todos } = useTodoContext();

  return (
    <div className="App">
      <h1>Basic Todo app using React Context</h1>
      <TodoInput />
      {todos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default App;
