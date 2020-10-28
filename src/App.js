import React, { Component } from "react";
import { Sudoku } from "./components/sudoku.jsx";
import "./styles/index.scss";
import { getSudokuStarted } from "./services/fakeService";
import { Keyboard } from "./components/common/keyboard";
import styled from "styled-components";

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
      <Wrapper>
        <Sudoku numbers={this.state.numbers} />
        <Keyboard />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export default App;
