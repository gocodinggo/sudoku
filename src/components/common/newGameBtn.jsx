import React from "react";
import styled from "styled-components";
import { colors } from "../../global/color";
export const NewGameBtn = () => {
  return (
    <Button onClick={() => console.log("clicked new game")}>New Game</Button>
  );
};

const Button = styled.button`
  background-color: ${colors.blue};
  height: 60px;
  border-radius: 5px;
  font-size: 20px;
  font-family: ${colors.font};
  font-weight: 600;
  line-height: 60px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 0 20px;
  transition: 0.25s ease-in-out transform;
  :hover {
    background: rgba(${colors.blue}, 0.8);
  }
  :active {
    transform: scale(0.95);
  }
`;
