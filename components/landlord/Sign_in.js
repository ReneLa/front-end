import React from "react";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";
import Router from "next/router";
import hasLogo from "../../public/static/HAS.png";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../queryComponents/User";
import { Divider } from "@material-ui/core";
import {
  Container,
  Input,
  PrimaryButton,
  ActionButton,
  SubHeader,
} from "../styledComponents";
import loadingImg from "../../public/static/126.gif";

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      user_name
      email
    }
  }
`;

const styles = {
  divider: {
    height: 3,
    width: "20%",
    margin: 4,
    backgroundColor: "#0078D4",
  },
};

class Sign_in extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Container
        flex={1}
        column
        color="#EAECEE"
        customStyles={{ height: "100%" }}
      >
        <Container
          middle
          center
          flex={1}
          color="#EAECEE"
          column
          customStyles={{ minHeight: "100vh", paddingTop: 60 }}
        >
          <Container
            depth={16}
            flex={0.6}
            column
            customStyles={{
              width: "35%",
              borderRadius: 5,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            <Container middle center>
              <img src={hasLogo} style={{ width: "25%", height: "25%" }} />
            </Container>
            <Container column middle center flex={0.2}>
              <SubHeader>Agent login</SubHeader>
              <Divider
                className={this.props.classes.divider}
                orientation="horizontal"
              />
            </Container>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(login, { error, loading }) => {
                return (
                  <form
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      flex: 0.8,
                    }}
                    method="post"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const res = await login();
                      if (res) {
                        Router.replace("/landlord/dashboard");
                      }
                      this.setState({ email: "", password: "" });
                    }}
                  >
                    <fieldset
                      disabled={loading}
                      aria-busy={loading}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        border: "none",
                        width: "100%",
                      }}
                    >
                      {error &&
                        error.graphQLErrors.map(({ message }, i) => (
                          <p key={i} style={{ color: "red" }}>
                            {message}
                          </p>
                        ))}

                      <Container flex={1} middle center>
                        <Input
                          id="email"
                          label="E-mail"
                          type="email"
                          name="email"
                          placeholder="enter email"
                          style={{ marginBottom: 10, width: 300 }}
                          value={email}
                          onChange={this.handleChange}
                        />
                      </Container>

                      <Container middle center>
                        <Input
                          id="password"
                          label="Password"
                          type="password"
                          name="password"
                          placeholder="enter password"
                          style={{ marginBottom: 10, width: 300 }}
                          value={password}
                          onChange={this.handleChange}
                        />
                      </Container>
                    </fieldset>
                    <Container
                      space="space-between"
                      row
                      center
                      customStyles={{
                        width: "100%",
                        // position: "absolute",
                        backgroundColor: "transparent",
                        // bottom: 0,
                        paddingLeft: 35,
                        paddingRight: 35,
                      }}
                    >
                      <Link href="/landlord/signup">
                        <a>
                          <ActionButton>Create account</ActionButton>
                        </a>
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
                            "Login"
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
      </Container>
    );
  }
}
export default withStyles(styles)(Sign_in);
