import React from "react";
import shortid from "shortid";

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
          <input
            name="text"
            value={this.state.text}
            placeholder="Enter a task!"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add to the list</button>
        </form>
      </div>
    );
  }
}
