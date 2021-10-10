import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER_TENANTS = gql`
  query {
    getUserTenants {
      id
      firstName
      lastName
      no_people
      tel_no
      isActive

      houseId {
        id
        house_heading
        house_no
      }
    }
  }
`;
const Tenants = (props) => (
  <Query {...props} query={GET_USER_TENANTS}>
    {(payload) => props.children(payload)}
  </Query>
);

Tenants.propTypes = {
  children: PropTypes.func.isRequired,
};
export default Tenants;
export { GET_USER_TENANTS };
