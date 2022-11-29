import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import db from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.round(Math.random * 1000000), item: input },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello coders 🛩️!</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write todo: </InputLabel>

          <Input
            placeholder="type something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo item={todo.item} id={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
