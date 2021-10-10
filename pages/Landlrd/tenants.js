import WithLayout from "../../components/Landlrd/Layout";
import { Container, Text } from "../../components/styledComponents";
import Tenants from "../../components/Landlrd/tenants";
import LandlordTenantsQuery from "../../components/queryComponents/landlord/LandlordTenants";
const TenantsPage = (props) => {
  return (
    <LandlordTenantsQuery>
      {({ data, loading, error }, setSkip) => {
        if (data) {
          const tenants = data.getLandlordTenants;

          return (
            <Container flex={1}>
              <Tenants
                tenants={tenants}
                {...props}
                setSkip={setSkip}
                loading={loading}
              />
            </Container>
          );
        }
        return null;
      }}
    </LandlordTenantsQuery>
  );
};

export default WithLayout(TenantsPage);
