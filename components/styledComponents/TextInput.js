import React from "react";
import styled, { css } from "styled-components";
import { SubText, CaptionText } from "./Text";
import Container from "./Container";

const Input = styled.input`
  border: 1px solid #d7dbdd;
  padding: 8px;
  color: #273746;
  font-weight: 500;
  background-color: transparent;
  font-size: 14px;
  /* ::placeholder,
  ::-webkit-input-placeholder {
    color: #85929e;
    font-weight: 400;
    font-size: 15px;
  }
  :-ms-input-placeholder {
    color: #85929e;
    font-weight: 400;
    font-size: 15px;
  } */
  &:focus {
    border: 1px solid #5b86c6;
    background-color: #fefeff;
  }
  ${(props) => props.customStyles};
`;

const TextInput = ({ label, row, ...other }) => {
  return (
    <Container
      customStyles={{
        marginBottom: 10,
        flexDirection: row ? "row" : "column",
        alignItems: row ? "center" : "",
        justifyContent: row ? "space-between" : "",
        width: "100%",
      }}
      color="transparent"
    >
      <CaptionText
        customStyles={{
          marginRight: row ? 10 : "",
          color: "#323130",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        {label}
      </CaptionText>
      <Input {...other} />
    </Container>
  );
};

export default TextInput;
