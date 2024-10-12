import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({ text, id: Date.now() });
      setText("");
    }
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={sendData}>
        <TextField
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
        />
        <Button variant="text" type="submit">ADD</Button>
      </form>
    </Paper>
  );
};

export default Form;
