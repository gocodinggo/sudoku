import React, { Component } from "react";
import { Sudoku } from "./components/sudoku.jsx";
import "./styles/index.scss";
import { getSudokuStarted } from "./services/fakeService";
import { NewGameBtn } from "./components/common/newGameBtn.jsx";
import { Box, Cell } from "./components/common/box.jsx";
import { Icon } from "./components/common/icon.jsx";
import { Controller } from "./components/common/controlles";
import { Keyboard } from "./components/common/keyboard";

class App extends Component {
  state = {
    numbers: [],
  };

  componentDidMount() {
    let numbers = getSudokuStarted();
    this.setState({ numbers });
  }

  render() {
    return (
      <div className="app">
        <Sudoku numbers={this.state.numbers} />
        <Keyboard />
      </div>
    );
  }
}

const Test = () => {
  return <h1>Hello World</h1>;
};

export default App;
