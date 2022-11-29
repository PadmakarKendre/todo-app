import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import "./Todo.css";

const Todo = ({ item }) => {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={item} secondary="my todo" />
      </ListItem>
    </List>
  );
};

export default Todo;
