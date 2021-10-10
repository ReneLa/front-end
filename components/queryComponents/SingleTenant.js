import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_TENANT = gql`
  query GET_TENANT($id: ID!) {
    getTenant(id: $id) {
      id
      firstName
      lastName
      no_people
      tel_no
      isActive
      userId {
        id
        email
        password
      }
      houseId {
        id
        house_heading
        house_no
      }
    }
  }
`;

const SingleTenant = props => (
  <Query {...props} query={GET_TENANT} variables={{ id: props.id }}>
    {payload => props.children(payload)}
  </Query>
);

SingleTenant.propTypes = {
  children: PropTypes.func.isRequired
};
export default SingleTenant;
export { GET_TENANT };
