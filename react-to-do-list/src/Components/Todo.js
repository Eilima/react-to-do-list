import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default (props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.task.complete ? "line-through" : "none",
        color: "#3f51b5",
      }}
      onClick={props.toggleComplete}
    >
      <Paper variant="outlined">{props.task.text}</Paper>
    </div>
    <Button
      onClick={props.onDelete}
      color="primary"
      variant="outlined"
      size="small"
    >
      x
    </Button>
  </div>
);
