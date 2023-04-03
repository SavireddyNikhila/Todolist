import "./App.css";
import TodoList from "./components/TodoList";

function App() {

  const todolist =[{
    id:1,
    title:'Morning walk'
  },
  {
    id:2,
    title:'Reading Newspaper'
  }
]
  return <div>
   <TodoList todolist={todolist}/>
  </div>;
}

export default App;
