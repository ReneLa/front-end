import React from "react";
import WithLayout from "../../../components/Landlrd/Layout";
import { Container } from "../../../components/styledComponents";
import SingleTenant from "../../../components/Landlrd/tenants/SingleTenant";
import TenantQuery from "../../../components/queryComponents/landlord/Tenant";
const Tenant = ({ query, ...other }) => {
  return (
    <TenantQuery id={query.id}>
      {({ data, loading, error }) => {
        if (data) {
          const tenant = data.getTenant;
          return (
            <Container flex={1}>
              <SingleTenant tenant={tenant} {...other} />
            </Container>
          );
        }
        return null;
      }}
    </TenantQuery>
  );
};

export default WithLayout(Tenant);
