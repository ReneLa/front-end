import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_DISTRICTS_IN_PROVINCE = gql`
  query GET_DISTRICTS_IN_PROVINCE($id: ID!) {
    getDistrictsByProvince(id: $id) {
      id
      name
    }
  }
`;

const Districts = props => (
  <Query
    {...props}
    query={GET_DISTRICTS_IN_PROVINCE}
    variables={{ id: props.id }}
  >
    {payload => props.children(payload)}
  </Query>
);

Districts.propTypes = {
  children: PropTypes.func.isRequired
};
export default Districts;
export { GET_DISTRICTS_IN_PROVINCE };
