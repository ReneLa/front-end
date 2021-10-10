import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Container, SubText } from "../styledComponents";

const NavText = styled(SubText)`
  color: ${({ theme, isActive }) =>
    isActive ? theme.primaryDark : theme.grey};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primaryDark};
  }
`;

const NavItem = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border-bottom: ${({ theme, isActive }) =>
    isActive ? `1.5px solid ${theme.btnPrimary}` : "transparent"};
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 6px;

  cursor: pointer;
  &:hover {
    /* background-color: ${({ theme }) => theme.bgPrimary}; */
    padding-bottom: 5px;
  }
`;

function ActiveTab({ label, href }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={{ marginRight: 7 }}>
      <Container color="transparent">
        <NavItem isActive={router.pathname === href}>
          <Container row middle center flex={1} color="transparent">
            <NavText isActive={router.pathname === href}>{label}</NavText>
          </Container>
        </NavItem>
      </Container>
    </a>
  );
}

export default ActiveTab;
