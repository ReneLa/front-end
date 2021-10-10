import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Typography, Breadcrumbs } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/KeyboardBackspace";
import WithLayout from "../../../components/landlord/Layout";
import SingleHousePage from "../../../components/landlord/house/single-house";
import SingleHouse from "../../../components/queryComponents/SingleHouse";
import {
  Container,
  Header as HouseHeader
} from "../../../components/styledComponents";
import loadingImg from "../../../public/static/126.gif";
import Header from "../../../components/landlord/Header";

const HousePage = ({ open }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <SingleHouse id={id}>
      {({ data, loading }) => {
        if (data) {
          const house = data.getHouse;
          return (
            <Container flex={1} column>
              <Head>
                <link rel="shortcut icon" href="public/fav.png" />
                <title>{house.house_heading + " - HouseAssist - Space"}</title>
              </Head>
              <Header open={open}>
                <HouseHeader>{house.house_heading}</HouseHeader>
              </Header>
              <SingleHousePage open={open} house={house} />
            </Container>
          );
        }
        if (loading) {
          return (
            <Container flex={1}>
              <Header open={open} />
              <Container middle center flex={1}>
                <img src={loadingImg} style={{ width: 25, height: 25 }} />
              </Container>
            </Container>
          );
        }
        return null;
      }}
    </SingleHouse>
  );
};

export default WithLayout(HousePage);
