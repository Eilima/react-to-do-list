import React from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";
import TaskLeft from "./TaskLeft";
import { FilterButtons } from "./FilterButtons";

export class TodoList extends React.Component {
  state = {
    tasks: [],
    tasksToShow: "all",
  };

  addTask = (value) => {
    this.setState({ tasks: [value, ...this.state.tasks] });
  };

  toggleComplete = (id) => {
    console.log("test");
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        } else {
          return task;
        }
      }),
    });
  };

  handleClick = (string) => {
    this.setState({
      tasksToShow: string,
    });
  };

  render() {
    let tasks = [];

    if (this.state.tasksToShow === "all") {
      tasks = this.state.tasks;
    } else if (this.state.tasksToShow === "active") {
      tasks = this.state.tasks.filter((task) => !task.complete);
    } else if (this.state.tasksToShow === "complete") {
      tasks = this.state.tasks.filter((task) => task.complete);
    }

    return (
      <div>
        <TaskLeft tasks={this.state.tasks} />
        <TodoForm onSubmit={this.addTask} />
        <FilterButtons handleClick={this.handleClick} />
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            toggleComplete={() => this.toggleComplete(task.id)}
          />
        ))}
      </div>
    );
  }
}
