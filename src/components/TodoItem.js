import React from 'react'

function TodoItem({setInput,todos,setTodos, setEditTodo}) {

    const updateHandler=({id})=>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
        setInput(findTodo.title)
    }

    const deleteHandler = ({id}) => {
         setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div>
        <>
        {todos.map((todo) => {
                return(<>
                <div key={todo.id}>
                    {todo.title}
                    <button onClick={()=>updateHandler(todo)}>Update</button>
                    <button onClick={()=>deleteHandler(todo)}>Delete</button> 
                </div>
                </>
                )
            })
        }
        </>
    </div>
  )
}

export default TodoItem