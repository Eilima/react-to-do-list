import React from "react";

export class FilterButtons extends React.Component {
  handleClick = (string) => {
    this.setState({
      tasksToShow: string,
    });
  };
  render() {
    let tasks = [];

    if (this.state.tasksToShow === "all") {
      tasks = this.props.tasks;
    } else if (this.state.tasksToShow === "active") {
      tasks = this.state.tasks.filter((task) => !task.complete);
    } else if (this.state.tasksToShow === "complete") {
      tasks = this.state.tasks.filter((task) => task.complete);
    }

    return (
      <div>
        <button onClick={() => this.handleClick("all")}>All</button>
        <button>Active</button>
        <button>Complete</button>
      </div>
    );
  }
}
