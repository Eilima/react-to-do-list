import React from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";

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
        <TodoForm onSubmit={this.addTask} />
        {this.state.tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            toggleComplete={() => this.toggleComplete(task.id)}
          />
        ))}
        <div>
          Tasks left: {this.state.tasks.filter((x) => !x.complete).length}
        </div>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Complete</button>
        </div>
      </div>
    );
  }
}
