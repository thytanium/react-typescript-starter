import { useState } from "react";
import "./App.css";

export default function App(): React.ReactElement {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  return (
    <div>
      <h1 style={{ margin: 0 }}>React Typescript Starter</h1>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setTodoList([...todoList, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
