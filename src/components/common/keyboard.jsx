import React from "react";
import { Box } from "./box";
import styled from "styled-components";
import { colors } from "../../global/color";
import { NewGameBtn } from "./newGameBtn";

export const Keyboard = () => {
  return (
    <Wrapper>
      <NewGameBtn />
      <WrapperNumber>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Box number={number} forKeyboard />
        ))}
      </WrapperNumber>
      <WrapperController>
        <Box name="Notes" />
        <Box name="Hint" />
        <Box name="Undo" />
        <Box name="Erace" />
      </WrapperController>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;
const WrapperNumber = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1px;
  background-color: ${colors.gray};
  row-gap: 1px;
  border: 1px solid ${colors.gray};
`;

const WrapperController = styled(WrapperNumber)`
  grid-template-columns: auto auto;
  border-top: 0;
`;
