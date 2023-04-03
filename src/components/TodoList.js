import React, { useState } from "react";
import Input from "./Input";
import TodoItem from "./TodoItem";

function TodoList({ todolist }) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(todolist);
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div>
      <Input
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoItem
      setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      ></TodoItem>
    </div>
  );
}

export default TodoList;
