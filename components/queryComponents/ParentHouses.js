import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER_PARENT_HOUSES = gql`
  query {
    getUserParentHouses {
      id
      building_name
      address
      image
    }
  }
`;

const ParentHouses = props => (
  <Query {...props} query={GET_USER_PARENT_HOUSES}>
    {payload => props.children(payload)}
  </Query>
);

ParentHouses.propTypes = {
  children: PropTypes.func.isRequired
};
export default ParentHouses;
export { GET_USER_PARENT_HOUSES };
