import React from "react";
import Link from "next/link";
import Router from "next/router";
import hasLogo from "../public/static/HAS.png";
import styled, { keyframes } from "styled-components";
import { Container } from "../components/styledComponents";
import { Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      user_name
      email
      permissions
      userType
    }
  }
`;
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(${(props) => props.rotation || "360deg"});
  }
`;

const RotatingBox = styled.div`
  animation: ${rotate} 10s linear infinite;
`;
const Home = (props) => {
  const handleAuth = () => {
    if (data.me) {
      Router.replace("/Landlrd/dashboard");
    } else {
      Router.replace("/Landlrd/login");
    }
  };
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY, {
    onCompleted: handleAuth,
  });

  return (
    <Container column middle center customStyles={{ minHeight: "100vh" }}>
      <img
        src={hasLogo}
        style={{ width: "7%", height: "7%" }}
        className="App-logo"
      />
    </Container>
  );
};
export default Home;
