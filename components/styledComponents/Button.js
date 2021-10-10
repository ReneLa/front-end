import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  vertical-align: top;
  background-color: transparent;
  user-select: none;
  outline: transparent;
`;
const PrimaryButton = styled(Button)`
  padding-top: 0px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 16px;
  color: white;
  font-size: 13;
  /* background-color: rgb(0, 120, 212); */
  background-color: ${({ theme, color }) => (color ? color : theme.btnPrimary)};
  color: rgb(255, 255, 255);
  border-width: 1px;
  min-height: 32px;
  /* min-width: 80px; */
  border-style: solid;
  border-color: ${({ theme, color }) => (color ? color : theme.btnPrimary)};
  border-image: initial;
  text-decoration: none;
  border-radius: 2px;
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
    border-color: ${({ theme, color }) => (color ? color : theme.btnHover)};
  }
  ${(props) => props.customStyles};
`;
const OutlinedButton = styled(Button)`
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
  height: 32px;
  /* min-width: 80px; */
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  border-width: 0.5px;
  border-style: solid;
  border-color: ${({ theme, bColor }) =>
    bColor ? bColor : `rgb(138, 136, 134)`};
  border-image: initial;
  text-decoration: none;
  border-radius: 2px;
  ${(props) => props.customStyles};
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

const CommandButton = styled(Button)`
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  border-radius: 0px;

  ${(props) => props.customStyles};
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;
const ActionButton = styled(Button)`
  padding-top: 0px;
  padding-right: 4px;
  padding-bottom: 0px;
  padding-left: 4px;
  /* max-width: 80px; */
  height: 32px;
  color: ${({ theme }) => theme.textPrimary};

  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  border-radius: 0px;
  ${(props) => props.customStyles};
  &:hover {
    color: ${({ theme, color }) => (color ? color : theme.btnPrimary)};
  }
`;
const IconButton = styled(Button)`
  align-items: center;
  justify-content: center;
  color: ${({ theme, color }) => (color ? color : theme.textPrimary)};
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  text-decoration: none;
  border-radius: 2px;
  ${(props) => props.customStyles};
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

export {
  PrimaryButton,
  OutlinedButton,
  CommandButton,
  ActionButton,
  IconButton,
};
