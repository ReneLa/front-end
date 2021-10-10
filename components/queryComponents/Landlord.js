import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENT_LANDLORD = gql`
  query {
    currentLandlord {
      id
      firstName
      lastName
      tel_no
    }
  }
`;

const Landlord = props => (
  <Query {...props} query={CURRENT_LANDLORD}>
    {payload => props.children(payload)}
  </Query>
);

Landlord.propTypes = {
  children: PropTypes.func.isRequired
};
export default Landlord;
export { CURRENT_LANDLORD };
