import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../global/color";
import { Controller } from "./controlles";

export const Box = ({ number, name, ...props }) => {
  return (
    <Wrapper {...props}>
      {name && <Controller name={name} />}
      {number === 0 ? "" : number}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  font-size: 32px;
  font-family: ${colors.font};
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  transition: 0.15s ease-in-out transform;
  :hover {
    ${({ forKeyboard }) => {
      const { hoverLight, hoverBlue } = colors;
      return css`
        background: ${forKeyboard ? hoverLight : hoverBlue};
      `;
    }}
  }
  :active {
    transform: scale(0.92);
  }

  ${({ statusBg }) => {
    const { bgRed, similarBg, focsedBlue, light } = colors;
    let bgColor;
    switch (statusBg) {
      case 1:
        bgColor = bgRed; // warning (1)
        break;
      case 2:
        bgColor = similarBg; // similar (2)
        break;
      case 3:
        bgColor = focsedBlue; // focuced (3)
        break;
      default:
        bgColor = light;
    }
    return css`
      background: ${bgColor};
    `;
  }}
`;
