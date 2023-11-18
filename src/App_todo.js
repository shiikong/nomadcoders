import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (todo) => {
    setTodo(todo.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((curentArray) => [todo, ...curentArray]);
    setTodo("");
  };
  console.log(todos);

  return (
    <div>
      <h1>to do list {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write your todo..."
          value={todo}
          onChange={onChange}
        />
        <button>add todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
