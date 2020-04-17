import React, { Component } from "react";
import UserInput from "./UserDemo/UserInput";
import UserOutput from "./UserDemo/UserOutput";
import "./App.css";
import "./UserDemo/UserDemoStyle.css";

class App extends Component {
  state = {
    username: "Morpheus",
  };

  changeNameHandler = (changedName) => {
    this.setState({ username: changedName });
  };

  updateNameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment #1</h1>
        <h2>Welcome to the Zion Mainframe</h2>
        <p>Please enter your name:</p>
        <UserInput
          userName={this.state.username}
          changedName={this.updateNameHandler}
        />
        <br />
        <button
          className="inputStyle"
          onClick={this.changeNameHandler.bind(this, "Trinity")}
        >
          Continue
        </button>
        <UserOutput
          userName={this.state.username}
          //changedName={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
