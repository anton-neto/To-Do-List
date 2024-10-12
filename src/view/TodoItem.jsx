import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTodoDialog from "./EditTodoDialog";
import { Paper } from "@mui/material";

const TodoItem = ({ item, deleteItem, editItem, toggleComplete }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditTodoDialog open={open} handleClose={handleClose} editItem={editItem} item={item} />
      <Paper className="todo-item">
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={handleClickOpen}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.completed} 
                tabIndex={-1}
                disableRipple
                onChange={() => toggleComplete(item.id)} 
              />
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              style={{ textDecoration: item.completed ? 'line-through' : 'none' }} 
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
};

export default TodoItem;
