import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { db } from "./firebase-config";
import "./App.css";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newTodo = onSnapshot(collection(db, "todo"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    return newTodo;
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.round(Math.random * 1000000),
        item: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>
        Hello coders <span role="img">🛩️</span>!
      </h1>
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
          <Todo key={todo.id} item={todo.item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
