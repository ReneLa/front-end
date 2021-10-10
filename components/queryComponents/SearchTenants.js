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

const SEARCH_TENANT_QUERY = gql`
  query SEARCH_TENANT_QUERY($searchTerm: String!) {
    searchUserTenants(searchTerm: $searchTerm) {
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
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;
const AutoComplete = ({ setFound, setLoading }) => {
  const onChange = debounce(async (e, client) => {
    setLoading(true);
    const res = await client.query({
      query: SEARCH_TENANT_QUERY,
      variables: { searchTerm: e.target.value },
    });
    const tenants = res.data.searchUserTenants;
    // console.log(res);
    setFound(tenants);
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
