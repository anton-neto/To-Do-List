import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Button, Paper, TextField } from "@mui/material";

const HomeView = ({ todos, addTodo, deleteTodo, editTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({ text: todoText, completed: false }); 
      setTodoText(""); 
    }
  };

  return (
    <div className="todo-list">
      <Paper style={{ padding: "1em",  }}>
        <form onSubmit={handleAddTodo} style={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            label="Adicione uma nova tarefa"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            style={{ flexGrow: 1, marginRight: "10px", fontSize: "16px", borderRadius: "4px" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "rgba(37, 117, 252, 1)", 
              color: "white",
              borderRadius: "4px",
              padding: "10px 20px",
            }}
          >
            Adicionar
          </Button>
        </form>
      </Paper>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          deleteItem={deleteTodo}
          editItem={editTodo}
          toggleComplete={editTodo} 
        />
      ))}
    </div>
  );
};

export default HomeView;
