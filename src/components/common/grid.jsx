import React from "react";
import { Box } from "./box.jsx";
import styled from "styled-components";
import { colors } from "../../global/color";

export const Grid = ({ numbers }) => {
  return (
    <Wrapper>
      {numbers.map((num, i) => (
        <Box
          key={Math.random().toString()}
          statusBg={i === 0 ? 1 : 0}
          number={num}
          forKeyboard={false}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1px;
  background-color: ${colors.gray};
  row-gap: 1px;
`;
