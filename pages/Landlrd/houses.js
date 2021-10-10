import WithLayout from "../../components/Landlrd/Layout";
import { Container, Text } from "../../components/styledComponents";
import LandlordHousesQuery from "../../components/queryComponents/landlord/LandlordHouses";
import Houses from "../../components/Landlrd/houses";

const HousePage = (props) => {
  return (
    <LandlordHousesQuery>
      {({ data, loading, error }, setSkip) => {
        // console.log(loading);
        if (data) {
          const houses = data.getUserHouses;
          return (
            <Container flex={1}>
              <Houses {...props} houses={houses} setSkip={setSkip} />
            </Container>
          );
        }
        return null;
      }}
    </LandlordHousesQuery>
  );
};

export default WithLayout(HousePage);
