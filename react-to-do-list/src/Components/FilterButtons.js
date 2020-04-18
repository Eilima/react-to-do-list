import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
//Adds functionality for buttons that will filter tasks.
//Three options for buttons, 'all', 'active' and 'complete'.
export class FilterButtons extends React.Component {
  render() {
    return (
      <div>
        {/*All", will show all the tasks that have been submitted complete or not. */}
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.handleClick("all")}
          >
            All
          </Button>
          {/* "Active", shows the tasks that have not been complete. */}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.handleClick("active")}
          >
            Active
          </Button>
          {/* "Complete", shows the tasks that have been marked complete by the user. */}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.handleClick("complete")}
          >
            Complete
          </Button>
        </Grid>
        {/* Filtering is done by calling the the handleClick method with its corresponding arguement that was passed from the parent component, "TodoList.js".  */}
        {/* The "handleClick" method will set the state "tasksToShow" of the parent component to whatever string was passed to it.  */}
      </div>
    );
  }
}
