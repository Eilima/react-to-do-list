import React from "react";
import Paper from "@material-ui/core/Paper";
export default (props) => (
  <div
    style={{
      textDecoration: props.task.complete ? "line-through" : "none",
      color: "#3f51b5",
    }}
    onClick={props.toggleComplete}
  >
    <Paper variant="outlined">{props.task.text}</Paper>
  </div>
);
