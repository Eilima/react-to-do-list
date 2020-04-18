import React from "react";
import shortid from "shortid";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export class TodoForm extends React.Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="filled-basic"
            label="Enter a task!"
            name="text"
            value={this.state.text}
            placeholder="Enter a task!"
            onChange={this.handleChange}
          />
          <Button variant="outlined" color="blue" onClick={this.handleSubmit}>
            Add to the list
          </Button>
        </form>
      </div>
    );
  }
}
