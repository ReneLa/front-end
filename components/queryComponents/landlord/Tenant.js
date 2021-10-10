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
      isActive
      sex
      comm_email
      tel_no
      profileImage
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const SingleTenant = (props) => (
  <Query {...props} query={GET_TENANT} variables={{ id: props.id }}>
    {(payload) => props.children(payload)}
  </Query>
);

SingleTenant.propTypes = {
  children: PropTypes.func.isRequired,
};
export default SingleTenant;
export { GET_TENANT };
