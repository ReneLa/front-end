import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h1`
  align-items: baseline;
  color: rgb(50, 49, 48);
  display: flex;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  ${props => props.customStyles};
`;

const Header = styled.h2`
  color: #323130;
  font-weight: 600;
  line-height: 32px;
  margin-top: 0;
  font-size: 24px;
  outline: none;
  margin-top: 0;
  margin-bottom: 0;
  ${props => props.customStyles};
`;
const SubHeader = styled.h3`
  color: #323130;
  font-weight: 600;
  line-height: 28px;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 0;

  ${props => props.customStyles};
`;

const Text = styled.p`
  color: #323130;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
  padding: 0;
  ${props => props.customStyles};
`;
const SubText = styled.p`
  color: #323130;
  font-size: 14px;
  font-weight: ${({ font }) => (font ? font : 400)};
  line-height: 20px;
  margin: 0;
  padding: 0;
  ${props => props.customStyles};
`;
const CaptionText = styled.p`
  color: #979a9a;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 0;
  padding: 0;
  ${props => props.customStyles};
`;
const NormalText = styled.p`
  color: #323130;
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  margin: 0;
  padding: 0;
  ${props => props.customStyles};
`;

export { Title, Header, SubHeader, Text, SubText, CaptionText, NormalText };
