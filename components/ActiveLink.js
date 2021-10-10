import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

import { Container, SubText } from "./styledComponents";
const NavText = styled(SubText)`
  color: ${({ theme, isActive }) =>
    isActive ? theme.primaryDark : theme.grey};
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};

  &:hover {
    color: ${({ theme }) => theme.primaryDark};
  }
`;

const NavItem = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.bgPrimary : "transparent"};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 7px;
  padding-right: 7px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bgPrimary};
  }
`;

function ActiveLink({ children, open, icon, label, href }) {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  if (open) {
    return (
      <Container
        color="transparent"
        customStyles={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <NavItem isActive={router.pathname === href}>
          <Container row left center flex={0} color="transparent">
            <Icon
              style={{
                fontSize: router.pathname === href ? 21 : 20,
                color: router.pathname === href ? "#1C1D21" : "#717D7E"
              }}
            >
              {icon}
            </Icon>
          </Container>
        </NavItem>
      </Container>
    );
  }
  return (
    <a href={href} onClick={handleClick} style={{ marginBottom: 5 }}>
      <Container
        color="transparent"
        customStyles={{ paddingLeft: 10, paddingRight: 10 }}
      >
        <NavItem isActive={router.pathname === href}>
          <Container row left center flex={0} color="transparent">
            <Icon
              style={{
                fontSize: router.pathname === href ? 21 : 20,
                color: router.pathname === href ? "#1C1D21" : "#717D7E"
              }}
            >
              {icon}
            </Icon>
          </Container>

          <Container
            row
            left
            center
            flex={1}
            color="transparent"
            customStyles={{ marginLeft: 20 }}
          >
            <NavText isActive={router.pathname === href}>{label}</NavText>
          </Container>
        </NavItem>
      </Container>
    </a>
  );
}

export default ActiveLink;
