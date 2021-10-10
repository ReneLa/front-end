import WithLayout from "../../components/landlord/Layout";
import Head from "next/head";
import Index from "../../components/landlord/tenant";
import Header from "../../components/landlord/Header";
import { Container } from "../../components/styledComponents";
import { Typography } from "@material-ui/core";

const TenantPage = ({ open }) => {
  return (
    <Container flex={1} column>
      <Head>
        <link rel="icon" type="image/x-icon" href="/public/fav.png" />
        <title>Tenants - HouseAssist - Space</title>
      </Head>
      <Header open={open}>
        <Typography
          variant="h6"
          style={{ color: "#2A3045", fontSize: 18, fontWeight: 600 }}
        >
          Tenants
        </Typography>
      </Header>
      <Index />
    </Container>
  );
};

export default WithLayout(TenantPage);
