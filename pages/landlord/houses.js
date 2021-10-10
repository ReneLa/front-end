import WithLayout from "../../components/landlord/Layout";
import Head from "next/head";
import Index from "../../components/landlord/house";
import Header from "../../components/landlord/Header";
import { Container } from "../../components/styledComponents";
import { Typography } from "@material-ui/core";

const HousePage = ({ open }) => {
  return (
    <Container flex={1} column>
      <Head>
        <link rel="icon" type="image/x-icon" href="/public/fav.png" />
        <title>Houses - HouseAssist - Space</title>
      </Head>
      <Header open={open}>
        <Typography
          variant="h6"
          style={{ color: "#2A3045", fontSize: 18, fontWeight: 600 }}
        >
          Houses
        </Typography>
      </Header>
      <Index />
    </Container>
  );
};

export default WithLayout(HousePage);
