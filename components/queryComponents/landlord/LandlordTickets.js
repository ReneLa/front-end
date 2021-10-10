import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { perPage } from "../../../config";

const GET_LANDLORD_TICKETS = gql`
  query GET_LANDLORD_TICKETS($skip:Int=0,$first:Int=${perPage}) {
    getLandlordTickets(skip:$skip, first:$first,orderBy:createdAt_DESC) {
      id
      title
      description
      isClosed
      reported_way
      reported_date
      assignedDate
      reported_by {
        id
        user_name
        userType
      }
      houseId {
        id
        house_heading
      }
      createdAt
    }
  }
`;

const LandlordTickets = (props) => {
  const [skipItems, setSkip] = React.useState(1);
  return (
    <Query
      {...props}
      query={GET_LANDLORD_TICKETS}
      variables={{
        skip: skipItems * perPage - perPage,
      }}
    >
      {(payload) => props.children(payload, setSkip)}
    </Query>
  );
};

LandlordTickets.propTypes = {
  children: PropTypes.func.isRequired,
};
export default LandlordTickets;
export { GET_LANDLORD_TICKETS };
