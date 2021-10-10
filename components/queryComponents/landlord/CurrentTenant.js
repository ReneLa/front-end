import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_CURRENT_TENANT = gql`
  query GET_CURRENT_TENANT($houseId: ID!) {
    getCurrentTenant(houseId: $houseId) {
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

const CurrentTenant = (props) => (
  <Query
    {...props}
    query={GET_CURRENT_TENANT}
    variables={{ houseId: props.houseId }}
  >
    {(payload) => props.children(payload)}
  </Query>
);

CurrentTenant.propTypes = {
  children: PropTypes.func.isRequired,
};
export default CurrentTenant;
export { GET_CURRENT_TENANT };
