import React from "react";
import WithLayout from "../../../components/Landlrd/Layout";
import { Container } from "../../../components/styledComponents";
import SingleHouse from "../../../components/Landlrd/houses/SingleHouse";
import HouseQuery from "../../../components/queryComponents/landlord/House";
const House = ({ query, ...other }) => {
  return (
    <HouseQuery id={query.id}>
      {({ data, loading, error }) => {
        if (data) {
          const house = data.getHouse;
          return (
            <Container flex={1}>
              <SingleHouse house={house} {...other} />
            </Container>
          );
        }
        return null;
      }}
    </HouseQuery>
  );
};

export default WithLayout(House);
