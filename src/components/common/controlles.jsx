import React from "react";
import { Icon } from "./icon";
import styled from "styled-components";
import { colors } from "../../global/color";

export const Controller = ({ name }) => {
  return (
    <Wrapper>
      <Icon name={name.toLowerCase()} />
      <SubName>{name}</SubName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SubName = styled.div`
  font-family: ${colors.font};
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;
