import React from "react";
import styled from "styled-components";
import Downshift from "downshift";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { SearchInput, Container } from "../styledComponents";

const SearchBox = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  background-color: white;
  height: 32px;
  padding: 0px 5px;
  min-width: 150px;
  margin-left: 7px;
  margin-right: 10px;
`;

const SEARCH_HOUSE_QUERY = gql`
  query SEARCH_HOUSE_QUERY($searchTerm: String!) {
    searchUserHouses(searchTerm: $searchTerm) {
      id
      house_heading
      house_no
      house_status
      parking
      no_bedrooms
      no_bathrooms
      appliances
      flooring
      live_space
      ext_ft
      utilities
      no_annex
      dinning_room

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
const AutoComplete = ({ setFound, setLoading }) => {
  const onChange = debounce(async (e, client) => {
    setLoading(true);
    const res = await client.query({
      query: SEARCH_HOUSE_QUERY,
      variables: { searchTerm: e.target.value },
    });
    const houses = res.data.searchUserHouses;
    // console.log(res);
    setFound(houses);
    setLoading(false);
  }, 350);

  return (
    <SearchBox>
      <ApolloConsumer>
        {(client) => (
          <SearchInput
            type="search"
            onChange={(e) => {
              e.persist();
              onChange(e, client);
            }}
            customStyles={{
              fontSize: 15,
              height: "100%",
              lineHeight: 1,
              padding: 0,
              width: "100%",
              border: 0,
              backgroundColor: "white",
            }}
          />
        )}
      </ApolloConsumer>
    </SearchBox>
  );
};

export default AutoComplete;
