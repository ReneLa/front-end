import React from "react";
import styled from "styled-components";
import Container from "./Container";

const CardStyles = styled(Container)`
  position: relative;
  height: 180px;
  min-width: 170px;
  /* max-width: 170px; */
  margin-left: 20px;
`;
const CardActions = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  top: 0;
  z-index: 1;
  background-color: ${({ color }) => (color ? color : "transparent")};
  ${props => props.customStyles};
`;
const CardImage = styled(Container)`
  display: flex;
  ${props => props.customStyles};
`;
const CardContent = styled(Container)`
  display: flex;
  ${props => props.customStyles};
`;
const CardFooter = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  bottom: 0;
  z-index: 1;
  background-color: ${({ color }) => (color ? color : "transparent")};
  ${props => props.customStyles};
`;

export { CardStyles, CardActions, CardContent, CardFooter, CardImage };
