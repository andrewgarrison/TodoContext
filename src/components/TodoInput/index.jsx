import React, { useState } from "react";
import { v4 } from "uuid";
import { useTodoContext } from "../../contexts";

export const TodoInput = () => {
  const { todos, setTodos } = useTodoContext();
  const [value, setValue] = useState("");

  const handleAddTodo = (event) => {
    if (event.key === "Enter" && value) {
      setTodos([...todos, { value, id: v4() }]);
      setValue("");
    }
  };

  return (
    <input
      value={value}
      className="todo__input"
      placeholder="Enter a Todo"
      onChange={(event) => setValue(event.target.value)}
      onKeyPress={handleAddTodo}
    />
  );
};
