import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HOUSE_TYPES = gql`
  query {
    houseTypes {
      id
      house_type
    }
  }
`;

const HouseTypes = props => (
  <Query {...props} query={GET_HOUSE_TYPES}>
    {payload => props.children(payload)}
  </Query>
);

HouseTypes.propTypes = {
  children: PropTypes.func.isRequired
};
export default HouseTypes;
export { GET_HOUSE_TYPES };
