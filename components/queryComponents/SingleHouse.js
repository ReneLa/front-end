import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HOUSE = gql`
  query GET_HOUSE($id: ID!) {
    getHouse(id: $id) {
      id
      house_heading
      house_description
      house_no
      no_bathrooms
      no_bedrooms
      no_annex
      dinning_room
      isActive
      has_in_kitchen
      has_balcony
      has_garden
      has_hotwater
      has_carparking
      house_type {
        id
        house_type
      }
      countryId {
        id
        name
      }
      provinceId {
        id
        name
      }
      districtId {
        id
        name
      }
      sectorId {
        id
        name
      }
      images {
        id
        image
      }
    }
  }
`;

const SingleHouses = props => (
  <Query {...props} query={GET_HOUSE} variables={{ id: props.id }}>
    {payload => props.children(payload)}
  </Query>
);

SingleHouses.propTypes = {
  children: PropTypes.func.isRequired
};
export default SingleHouses;
export { GET_HOUSE };
