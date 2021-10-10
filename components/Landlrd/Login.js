import gql from "graphql-tag";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import hasLogo from "../../public/static/HAS.png";
import { CURRENT_USER_QUERY } from "../queryComponents/landlord/CurrentUser";
import {
  Container, Input,
  PrimaryButton, SubHeader, SubText, Text
} from "../styledComponents";

const ImgWrapper = styled(Container)`
  flex-direction: column;
  flex: 0.65;
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.btnPrimary};
  min-height: 100%;
  max-height: 100%;
`;
const FormWrapper = styled(Container)`
  flex-direction: column;
  flex: 0.35;
  min-height: 100%;
  max-height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
  padding-left: 50px;
  padding-right: 50px;
  /* padding-bottom: 0px; */
  justify-content: center;
  flex: 1;
  /* background-color: red; */
`;

// login mutation api

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      user_name
      email
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      flex={1}
      color="red"
      row
      customStyles={{ minHeight: "100vh", maxHeight: "100vh" }}
    >
      <ImgWrapper>
        <Container flex={false} row center color="transparent">
          <img
            src={hasLogo}
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <Text customStyles={{ color: "white" }}>House-Assist Space</Text>
        </Container>
      </ImgWrapper>
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { error, loading }) => {
          return (
            <FormWrapper>
              <Form
                method="post"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await login();
                  if (res) {
                    console.log(res);
                    Router.replace("/Landlrd/dashboard");
                  }
                  setEmail("");
                  setPassword("");
                }}
              >
                <SubHeader
                  customStyles={{ fontWeight: "500", marginBottom: 10 }}
                >
                  Login
                </SubHeader>
                <Text>Welcome back, log in to see the latest data!</Text>
                <fieldset
                  disabled={loading}
                  style={{
                    display: "flex",
                    paddingTop: "30px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    border: "none",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    label="EMAIL"
                    placeholder="eg: name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    label="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <Container row left center customStyles={{ marginBottom: 15 }}>
                  {/*<ActionButton>Forgot our password?</ActionButton>*/}
                </Container>
                {loading ? (
                  <PrimaryButton type="submit">Logging...</PrimaryButton>
                ) : (
                  <PrimaryButton type="submit">Login</PrimaryButton>
                )}

                <Container row middle center customStyles={{ marginTop: 30 }}>
                  <Link href={"/Landlrd/register"} as={"/Landlrd/register"}>
                    <a>
                      <SubText
                        customStyles={{
                          fontWeight: "italic",
                          color: "#0078D4",
                        }}
                      >
                        New to House-Assist Space? Register
                      </SubText>
                    </a>
                  </Link>
                </Container>
              </Form>
            </FormWrapper>
          );
        }}
      </Mutation>
    </Container>
  );
};

export default Login;
