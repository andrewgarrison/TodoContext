import React from "react";
import { useTodoContext } from "../../contexts";

export const Todo = ({ id, value }) => {
  const { todos, setTodos } = useTodoContext();

  const handleTodoRemove = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <p className="todo__value">{value}</p>
      <button className="todo__button" onClick={handleTodoRemove}>
        Remove
      </button>
    </div>
  );
};
