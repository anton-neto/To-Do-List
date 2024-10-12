import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const EditTodoDialog = ({ open, handleClose, editItem, item }) => {
  const [newText, setNewText] = useState(item.text);

  const handleEdit = () => {
    editItem(item.id, newText);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Editar tarefa</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleEdit}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTodoDialog;
