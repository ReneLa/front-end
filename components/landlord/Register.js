import gql from "graphql-tag";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { Mutation } from "react-apollo";
import loadingImg from "../../public/static/126.gif";
import hasLogo from "../../public/static/HAS.png";
import { CURRENT_USER_QUERY } from "../queryComponents/User";
import {
  Container,
  Input, PrimaryButton
} from "../styledComponents";

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
    }
  }
`;

class Registration extends React.Component {
  state = {
    user_name: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { user_name, email, password } = this.state;
    return (
      <Container flex={1} column>
        <Container middle center>
          <img src={hasLogo} style={{ width: "7%", height: "7%" }} />
        </Container>
        <Container
          middle
          center
          flex={1}
          column
          customStyles={{ minHeight: "50vh" }}
        >
          <Container middle center>
            <h3>Create your account</h3>
          </Container>
          <Mutation
            mutation={SIGNUP_MUTATION}
            variables={this.state}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {(signup, { loading }) => {
              return (
                <form
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await signup();
                    if (res) {
                      Router.replace("/landlord/welcome");
                    }
                    this.setState({ user_name: "", email: "", password: "" });
                  }}
                >
                  <fieldset
                    disabled={loading}
                    aria-busy={loading}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "none",
                      width: 200
                    }}
                  >
                    <Container column middle center>
                      <Input
                        id="input_email"
                        label="E-mail"
                        type="email"
                        name="email"
                        style={{ marginBottom: 10, width: 200 }}
                        placeholder="enter email"
                        value={email}
                        onChange={e => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                      <Input
                        id="user_name"
                        label="User name"
                        type="text"
                        name="user_name"
                        placeholder="enter username"
                        style={{ marginBottom: 10, width: 200 }}
                        value={user_name}
                        onChange={e => {
                          this.setState({ user_name: e.target.value });
                        }}
                      />

                      <Input
                        id="input_password"
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="enter password"
                        style={{ marginBottom: 10, width: 200 }}
                        value={password}
                        onChange={this.handleChange}
                      />
                    </Container>
                  </fieldset>
                  <Container
                    space="space-between"
                    row
                    center
                    customStyles={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    <Link href="/landlord/login">
                      <a>login to your account</a>
                    </Link>
                    <Container>
                      <PrimaryButton type="submit">
                        
                        {loading ? (
                          <img
                            src={loadingImg}
                            style={{ width: 20, height: 20 }}
                            alt="loading..."
                          />
                        ) : (
                          "Register"
                        )}
                      </PrimaryButton>
                    </Container>
                  </Container>
                </form>
              );
            }}
          </Mutation>
        </Container>
      </Container>
    );
  }
}
export default Registration;
