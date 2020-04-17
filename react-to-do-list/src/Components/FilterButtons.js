import React from "react";

//Adds functionality for buttons that will filter tasks.
//Three options for buttons, 'all', 'active' and 'complete'.
export class FilterButtons extends React.Component {
  render() {
    return (
      <div>
        {/*All", will show all the tasks that have been submitted complete or not. */}
        <button onClick={() => this.props.handleClick("all")}>All</button>
        {/* "Active", shows the tasks that have not been complete. */}
        <button onClick={() => this.props.handleClick("active")}>Active</button>
        {/* "Complete", shows the tasks that have been marked complete by the user. */}
        <button onClick={() => this.props.handleClick("complete")}>
          Complete
        </button>
        {/* Filtering is done by calling the the handleClick method with its corresponding arguement that was passed from the parent component, "TodoList.js".  */}
        {/* The "handleClick" method will set the state "tasksToShow" of the parent component to whatever string was passed to it.  */}
      </div>
    );
  }
}
