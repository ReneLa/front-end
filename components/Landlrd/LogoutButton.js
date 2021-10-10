import React from "react";
import { Mutation } from "react-apollo";
import Router from "next/router";
import { CURRENT_USER_QUERY } from "../queryComponents/User";
import gql from "graphql-tag";
import Link from "next/link";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import { IconButton, MenuItem } from "@material-ui/core";
import { SubText } from "../styledComponents";
const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout {
      message
    }
  }
`;
const LogoutButton = (props) => {
  return (
    <Mutation
      mutation={LOGOUT_MUTATION}
      // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
      {(logout) => (
        <MenuItem
          style={{ height: 50 }}
          onClick={() => {
            logout();
            Router.replace("/Landlrd/login");
          }}
        >
          <LogoutIcon style={{ fontSize: 20, marginRight: 10 }} />
          <SubText>Logout</SubText>
        </MenuItem>
      )}
    </Mutation>
  );
};

export default LogoutButton;
