import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { perPage } from "../../../config";

const GET_USER_HOUSES = gql`
  query GET_USER_HOUSES($skip:Int=0,$first:Int=${perPage}) {
    getUserHouses(skip:$skip, first:$first,orderBy:createdAt_DESC) {
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

const Houses = (props) => {
  const [skipItems, setSkip] = React.useState(1);
  return (
    <Query
      {...props}
      query={GET_USER_HOUSES}
      variables={{
        skip: skipItems * perPage - perPage,
      }}
    >
      {(payload) => props.children(payload, setSkip)}
    </Query>
  );
};

Houses.propTypes = {
  children: PropTypes.func.isRequired,
};
export default Houses;
export { GET_USER_HOUSES };
