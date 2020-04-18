import React from "react";

export default (props) => (
  <div
    style={{
      textDecoration: props.task.complete ? "line-through" : "none",
      color: "blue",
    }}
    onClick={props.toggleComplete}
  >
    {props.task.text}
  </div>
);
