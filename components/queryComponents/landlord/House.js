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
      house_status
      parcel_no

      house_type {
        id
        house_type
      }
      year_built
      parking
      lot
      price_sqrft
      no_bedrooms
      no_bathrooms
      appliances
      flooring
      live_space
      ext_ft
      utilities
      no_annex
      dinning_room
      date_available_from
      isActive
      has_in_kitchen
      has_balcony
      has_hotwater
      has_carparking
      profileImage
      contact_no
      parent_houseId {
        id
      }
      managingAgent {
        id
        company_name
        comm_email
        tel_no
      }
      countryId {
        name
      }
      provinceId {
        name
      }
      districtId {
        name
      }
      street
      createdAt
      updatedAt
      images {
        id
        image
      }
    }
  }
`;

const SingleHouse = (props) => (
  <Query {...props} query={GET_HOUSE} variables={{ id: props.id }}>
    {(payload) => props.children(payload)}
  </Query>
);

SingleHouse.propTypes = {
  children: PropTypes.func.isRequired,
};
export default SingleHouse;
export { GET_HOUSE };
