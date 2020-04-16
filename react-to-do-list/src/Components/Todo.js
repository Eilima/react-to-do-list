import React from "react";

export default (props) => (
  <div
    style={{ textDecoration: props.task.complete ? "line-through" : "none" }}
    onClick={props.toggleComplete}
  >
    {props.task.text}
  </div>
);
