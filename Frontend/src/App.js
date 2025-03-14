import { useRef, useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{id: 1, name: "Todo1", completed: false},]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する。
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: "1", name: name, completed: false }]
    });
    todoNameRef.current.value = null;
  };  
  
  return( 
    <>
    <TodoList todos={todos}/>
    <input type="text"/>
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク:0</div>
    </>
  );
}

export default App;
