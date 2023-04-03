import React from "react";
import { v4 as uuidv4 } from "uuid";
function Input({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

    const updateTodo = (title,id) =>{
        const newTodo = todos.map((todo) =>
            todo.id ===id?{title,id}:todo
        );
        setTodos(newTodo);
        setEditTodo("");
        setInput('')
    }
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const addTodo = (event) => {
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={onInputChange}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default Input;
