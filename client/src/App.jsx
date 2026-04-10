import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const API = "http://localhost:5000/api/todos";

  useEffect(() => {
    axios.get(API).then(res => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (!text) return;
    axios.post(API, { text }).then(res => {
      setTodos([...todos, res.data]);
      setText("");
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`${API}/${id}`).then(() => {
      setTodos(todos.filter(t => t._id !== id));
    });
  };

  const toggleTodo = (todo) => {
    axios.put(`${API}/${todo._id}`, {
      completed: !todo.completed
    }).then(res => {
      setTodos(todos.map(t => t._id === todo._id ? res.data : t));
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 MERN Todo App (Vite)</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <span
              onClick={() => toggleTodo(todo)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;