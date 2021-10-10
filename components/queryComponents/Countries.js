import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_COUNTRIES = gql`
  query {
    countries {
      id
      name
      provinces {
        id
        name
        districts {
          id
          name
          sectors {
            id
            name
          }
        }
      }
    }
  }
`;

const Countries = props => (
  <Query {...props} query={GET_COUNTRIES}>
    {payload => props.children(payload)}
  </Query>
);

Countries.propTypes = {
  children: PropTypes.func.isRequired
};
export default Countries;
export { GET_COUNTRIES };
