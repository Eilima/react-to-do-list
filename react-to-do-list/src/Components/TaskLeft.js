import React from "react";
//Component displays the amount of 'active', task(s) that have not been completed.
//Component is passed the parents, TodoList, state value of "tasks"
export default (props) => (
  // Calls the filter function on the state value of tasks
  //Filter function will check to see the if the the task has the value of complete in the state array is false.
  //If false it will be add to the returned array which will have the funciton .length called on it to return the number non-completed tasks
  <div style={{ color: "blue" }}>
    Tasks left: {props.tasks.filter((x) => !x.complete).length}
  </div>
);
