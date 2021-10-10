import React from "react";
import styled, { css } from "styled-components";

const SearchInput = styled.input`
  border: none;
  padding: 10px;
  background-color: transparent;
  line-height: 22px;
  font-size: 22px;
  color: #273746;
  font-weight: 500;
  &:focus {
    border-bottom: 0.5px solid #eaecee;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #85929e;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: #85929e;
    font-weight: 400;
  }
  ${props => props.customStyles};
`;

export default SearchInput;
