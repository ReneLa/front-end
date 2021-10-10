import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SECTORS_IN_DISTRICT = gql`
  query GET_SECTORS_IN_DISTRICT($id: ID!) {
    getSectorsByDistrict(id: $id) {
      id
      name
    }
  }
`;

const Sectors = props => (
  <Query
    {...props}
    query={GET_SECTORS_IN_DISTRICT}
    variables={{ id: props.id }}
  >
    {payload => props.children(payload)}
  </Query>
);

Sectors.propTypes = {
  children: PropTypes.func.isRequired
};
export default Sectors;
export { GET_SECTORS_IN_DISTRICT };
