import React from "react";

export default (props) => (
  <div>Tasks left: {props.tasks.filter((x) => !x.complete).length}</div>
);
