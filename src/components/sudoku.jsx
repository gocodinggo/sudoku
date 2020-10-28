import React from "react";
import styled from "styled-components";
import { Grid } from "./common/grid";
import { colors } from "../global/color";

export const Sudoku = ({ numbers }) => {
  return (
    <Wrapper className="sudoku">
      {numbers.map((num) => (
        <Grid key={Math.random().toString()} numbers={num} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  background-color: ${colors.black};
  grid-template-columns: auto auto auto;
  column-gap: 3px;
  border: 3px solid ${colors.black};
  row-gap: 3px;
`;
