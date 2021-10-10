import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HOUSE_IMAGES = gql`
  query GET_HOUSE_IMAGES($id: ID!) {
    getHouseImages(id: $id) {
      id
      image
    }
  }
`;

const HouseImages = props => (
  <Query {...props} query={GET_HOUSE_IMAGES} variables={{ id: props.id }}>
    {payload => props.children(payload)}
  </Query>
);

HouseImages.propTypes = {
  children: PropTypes.func.isRequired
};
export default HouseImages;
export { GET_HOUSE_IMAGES };
