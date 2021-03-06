import React from "react";
import styled, { css } from "styled-components";

// import Container from "@material-ui/core/Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, color }) => (color ? color : theme.bgPrimary)};
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
  ${({ flex }) =>
    !flex &&
    css`
      flex: 0;
    `};
  ${({ flex }) =>
    flex === 1 &&
    css`
      flex: 1;
    `};
  ${({ flex }) =>
    flex === 0 &&
    css`
      flex: 0;
    `};
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
    `};
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};
  ${({ space }) =>
    space &&
    css`
      justify-content: ${space};
    `};
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `};
  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};
  ${({ middle }) =>
    middle &&
    css`
      justify-content: center;
    `};
  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
    `};
  ${({ right }) =>
    right &&
    css`
      justify-content: flex-end;
    `};
  ${({ top }) =>
    top &&
    css`
      justify-content: flex-start;
    `};
  ${({ bottom }) =>
    bottom &&
    css`
      justify-content: flex-end;
    `};
  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
    `};
  ${({ depth }) =>
    depth === 2 &&
    css`
      box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
        0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
    `};
  ${({ depth }) =>
    depth === 4 &&
    css`
      box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
        0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
    `};
  ${({ depth }) =>
    depth === 8 &&
    css`
      box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
        0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
    `};
  ${({ depth }) =>
    depth === 16 &&
    css`
      box-shadow: 0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132),
        0 1.2px 3.6px 0 rgba(0, 0, 0, 0.18);
    `};
  ${({ depth }) =>
    depth === 64 &&
    css`
      box-shadow: 0 25.6px 67.6px 0 rgba(0, 0, 0, 0.22),
        0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18);
    `};
  ${props => props.customStyles};
`;

const StyledContainer = ({ children, ...other }) => {
  return <Wrapper {...other}>{children}</Wrapper>;
};

export default StyledContainer;
