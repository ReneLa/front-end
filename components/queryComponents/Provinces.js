import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_PROVINCES_IN_COUNTRY = gql`
  query GET_PROVINCES_IN_COUNTRY($id: ID!) {
    getProvincesByCountry(id: $id) {
      id
      name
    }
  }
`;

const Provinces = props => (
  <Query
    {...props}
    query={GET_PROVINCES_IN_COUNTRY}
    variables={{ id: props.id }}
  >
    {payload => props.children(payload)}
  </Query>
);

Provinces.propTypes = {
  children: PropTypes.func.isRequired
};
export default Provinces;
export { GET_PROVINCES_IN_COUNTRY };
