import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Typography variant="h3">React App Todo</Typography>
        </AppBar>
      </div>
    );
  }
}
