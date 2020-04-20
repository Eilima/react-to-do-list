import React from "react";
import { TodoForm } from "./TodoForm";
import Todo from "./Todo";
import TaskLeft from "./TaskLeft";
import { FilterButtons } from "./FilterButtons";
import { Header } from "./Header";
import Button from "@material-ui/core/Button";

export class TodoList extends React.Component {
  //Setting the state for parent component
  state = {
    //A array with nested arrays for the values of the each individual 'task'
    tasks: [],
    tasksToShow: "all",
    toggleAllComplete: true,
  };

  //Method that adds the value passed to it to the states array, "tasks".
  addTask = (value) => {
    //Calls setState to update state with arguement passed to it and its current contents
    this.setState({ tasks: [value, ...this.state.tasks] });
  };
  //Used to update the value of the state of a "task"
  //Accepts the id 'task' that will be updated.
  toggleComplete = (id) => {
    this.setState({
      //Iterates through each value of the "tasks" array
      tasks: this.state.tasks.map((task) => {
        //If the current iteration of the elements id is equal to the one that was passed
        //will not change any of the other values in the array only will set 'complete' value to its opposite value
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
  //Method that handle updating state with the string passed to it.
  //Used for filter buttonsf
  handleClick = (string) => {
    this.setState({
      tasksToShow: string,
    });
  };

  handleDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((todo) => todo.id !== id),
    });
  };
  completedTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter((todo) => !todo.complete),
    });
  };

  render() {
    //Sets an array that allows us to down below not have to call components state
    let tasks = [];
    //Depending on the value of the state 'tasksToShow' it will save that the current state of 'tasks' to the array above.
    if (this.state.tasksToShow === "all") {
      //Sets the array equal to the same values of the state
      tasks = this.state.tasks;
    } else if (this.state.tasksToShow === "active") {
      //Sets the array equal to the values that are equal to "complete" being false
      tasks = this.state.tasks.filter((task) => !task.complete);
    } else if (this.state.tasksToShow === "complete") {
      ///Sets the array equal to teh values that are equal to "complete" being true
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
            completedTasks={this.completedTasks}
          />
        ))}
        {this.state.tasks.some((task) => task.complete) ? (
          <div>
            <Button
              onClick={this.completedTasks}
              color="secondary"
              variant="outlined"
            >
              Delete all completed
            </Button>
          </div>
        ) : null}
        <div>
          <Button
            onClick={() => {
              this.setState({
                tasks: this.state.tasks.map((task) => ({
                  ...task,
                  complete: this.state.toggleAllComplete,
                })),
                toggleAllComplete: !this.state.toggleAllComplete,
              });
            }}
          >
            Toggle All Complete: {`${this.state.toggleAllComplete}`}{" "}
          </Button>
        </div>
      </div>
    );
  }
}
