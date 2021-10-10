import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_HOUSE_TICKETS = gql`
  query GET_HOUSE_TICKETS($id: ID!) {
    getHouseTickets(id: $id) {
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
        house_description
        house_no
      }
    }
  }
`;

const HouseTickets = (props) => (
  <Query {...props} query={GET_HOUSE_TICKETS} variables={{ id: props.id }}>
    {(payload) => props.children(payload)}
  </Query>
);

HouseTickets.propTypes = {
  children: PropTypes.func.isRequired,
};
export default HouseTickets;
export { GET_HOUSE_TICKETS };
