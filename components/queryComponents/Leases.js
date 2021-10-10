import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER_HOUSES_LEASES = gql`
  query {
    getLeases {
      id
      lease_name
      admin_fee
      brokerage_fee
      security_deposit
      houseId {
        id
        house_heading
      }
    }
  }
`;

const Leases = props => (
  <Query {...props} query={GET_USER_HOUSES_LEASES}>
    {payload => props.children(payload)}
  </Query>
);

Leases.propTypes = {
  children: PropTypes.func.isRequired
};
export default Leases;
export { GET_USER_HOUSES_LEASES };
