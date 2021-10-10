import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HOUSE_TENANTS = gql`
  query GET_HOUSE_TENANTS($id: ID!) {
    getHouseTenants(id: $id) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      houseId {
        id
        house_no
        house_heading
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const HouseTenants = (props) => (
  <Query {...props} query={GET_HOUSE_TENANTS} variables={{ id: props.id }}>
    {(payload) => props.children(payload)}
  </Query>
);

HouseTenants.propTypes = {
  children: PropTypes.func.isRequired,
};
export default HouseTenants;
export { GET_HOUSE_TENANTS };
