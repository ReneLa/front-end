import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { Typography, Breadcrumbs } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/KeyboardBackspace";
import WithLayout from "../../../components/landlord/Layout";
import SingleTenantPage from "../../../components/landlord/tenant/single-tenant";
import SingleTenant from "../../../components/queryComponents/SingleTenant";
import { Container } from "../../../components/styledComponents";
import loadingImg from "../../../public/static/126.gif";
import Header from "../../../components/landlord/Header";

const TenantPage = ({ open }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <SingleTenant id={id}>
      {({ data, loading }) => {
        if (data) {
          const tenant = data.getTenant;
          return (
            <Container flex={1} column>
              <Head>
                <link rel="shortcut icon" href="public/fav.png" />
                <title>{"Rene La" + " - HouseAssist - Space"}</title>
              </Head>
              <Header open={open}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href="/landlord/houses" as="/landlord/houses">
                    <a style={{ textDecoration: "none" }}>
                      <Container row middle center>
                        <ArrowBack style={{ fontSize: 20, marginRight: 5 }} />
                        <Typography
                          variant="subtitle1"
                          style={{
                            color: "#50566B",
                            fontSize: 14,
                            fontWeight: 200
                          }}
                        >
                          back to tenants
                        </Typography>
                      </Container>
                    </a>
                  </Link>
                </Breadcrumbs>
              </Header>
              <SingleTenantPage open={open} tenant={tenant} />
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
    </SingleTenant>
  );
};

export default WithLayout(TenantPage);
