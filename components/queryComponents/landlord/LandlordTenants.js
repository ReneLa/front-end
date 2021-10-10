import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { perPage } from "../../../config";
const GET_LANDLORD_TENANTS = gql`
  query GET_LANDLORD_TENANTS($skip: Int = 0, $first: Int=${perPage}) {
    getLandlordTenants(skip: $skip, first: $first,orderBy:createdAt_DESC) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      registeredBy {
        id
      }
      houseId {
        id
        house_no
        house_heading
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const LandlordTenants = (props) => {
  const [skipItems, setSkip] = React.useState(1);
  return (
    <Query
      {...props}
      query={GET_LANDLORD_TENANTS}
      variables={{ skip: skipItems * perPage - perPage }}
    >
      {(payload) => props.children(payload, setSkip)}
    </Query>
  );
};

LandlordTenants.propTypes = {
  children: PropTypes.func.isRequired,
};
export default LandlordTenants;
export { GET_LANDLORD_TENANTS };
