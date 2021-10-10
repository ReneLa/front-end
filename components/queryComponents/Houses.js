import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER_HOUSES = gql`
  query {
    getUserHouses {
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

const Houses = props => (
  <Query {...props} query={GET_USER_HOUSES}>
    {payload => props.children(payload)}
  </Query>
);

Houses.propTypes = {
  children: PropTypes.func.isRequired
};
export default Houses;
export { GET_USER_HOUSES };
