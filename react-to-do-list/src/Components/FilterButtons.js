import React from "react";

export class FilterButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick("all")}>All</button>
        <button onClick={() => this.props.handleClick("active")}>Active</button>
        <button onClick={() => this.props.handleClick("complete")}>
          Complete
        </button>
      </div>
    );
  }
}
