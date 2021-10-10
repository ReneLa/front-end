import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import hasLogo from "../../public/static/HAS.png";
import {
  Container, Input,
  PrimaryButton, SubHeader, SubText, Text
} from "../styledComponents";

const ImgWrapper = styled(Container)`
  flex-direction: column;
  flex: 0.3;
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.btnPrimary};
  min-height: 100%;
  max-height: 100%;
`;
const FormWrapper = styled(Container)`
  flex-direction: column;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
  flex: 0.7;
  min-height: 100%;
  max-height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  flex: 0.72;
  /* background-color: red; */
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $user_name: String!
    $email: String!
    $password: String!
  ) {
    signup(user_name: $user_name, email: $email, password: $password) {
      id
      user_name
      email
      userType
    }
  }
`;
const Register = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const onCompletion = () => {
    Router.replace("/Landlrd/complete_register");
    setEmail(null);
    setPassword(null);
    setName(null);
  };

  const [signup, { data, loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: onCompletion,
  });

  return (
    <Container
      flex={1}
      row
      customStyles={{ minHeight: "100vh", maxHeight: "100vh" }}
    >
      <FormWrapper>
        <Container flex={false} row center color="transparent">
          <img
            src={hasLogo}
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <Text>House-Assist Space</Text>
        </Container>
        <Container flex={1} column middle center>
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              signup({ variables: { email, user_name: name, password } });
            }}
          >
            <SubHeader customStyles={{ fontWeight: "500", marginBottom: 10 }}>
              Create your account
            </SubHeader>
            <Text>
              Ready to handle your property? House-Assist Space assists your
              plan and organize your houses and properties.
            </Text>
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
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Input
                label="YOUR EMAIL"
                placeholder="eg: name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="USER NAME"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="PASSWORD"
                placeholder="enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            {loading ? (
              <PrimaryButton type="submit" customStyles={{ padding: 12 }}>
                Creating
              </PrimaryButton>
            ) : (
              <PrimaryButton type="submit" customStyles={{ padding: 12 }}>
                Register
              </PrimaryButton>
            )}

            <Container row middle center customStyles={{ marginTop: 40 }}>
              <SubText
                customStyles={{
                  fontWeight: "italic",
                }}
              >
                Already have an account?
              </SubText>
              <Link href={"/Landlrd/login"} as={"/Landlrd/login"}>
                <a>
                  <SubText
                    customStyles={{
                      fontWeight: "italic",
                      color: "#0078D4",
                      marginLeft: 8,
                    }}
                  >
                    Log in here.
                  </SubText>
                </a>
              </Link>
            </Container>
          </Form>
        </Container>
      </FormWrapper>
      <ImgWrapper />
    </Container>
  );
};

export default Register;
