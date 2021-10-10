import { useQuery } from "@apollo/react-hooks";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import React from "react";
import styled from "styled-components";
import tenantIcon from "../../../public/static/tenant.png";
import ticketIcon from "../../../public/static/ticket1.png";
import houseIcon from "../../../public/static/web.png";
import { GET_USER_HOUSES } from "../../queryComponents/landlord/LandlordHouses";
import { GET_LANDLORD_TENANTS } from "../../queryComponents/landlord/LandlordTenants";
import User from "../../queryComponents/User";
import {
  ActionButton, Container, Header,
  SubHeader,
  SubText, Text
} from "../../styledComponents";
import { PAGINATION_QUERY as HOUSE_COUNT_QUERY } from "../houses";
import { PAGINATION_QUERY as TENANTS_COUNT_QUERY } from "../tenants";
import { PAGINATION_QUERY as TICKETS_COUNT_QUERY } from "../tickets/AllTickets";
const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 10,
  },
  badgeStyle: {
    backgroundColor: "red",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    position: "absolute",
    top: -5,
    right: -5,
  },
}));

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  width: 100%;
  padding-top: 0px;
  padding-left: 110px;
  padding-bottom: 0px 110px;
  padding-right: 0px 110px;
`;
const SideContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  flex: 0.2;
  background-color: white;
`;
const Card = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 90px;
  min-width: 180px;
  background-color: white;
  border-radius: 3px;
  padding: 15px;
  margin-right: 20px;
  margin-bottom: 20px;
`;
const ListItem = styled("Container")`
  display: flex;
  flex-direction: row;
  padding: 5px 10;
  background-color: white;
  border-radius: 3px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const TenantList = styled(Container)`
  background-color: transparent;
  padding: 10px;
  flex: 0;
`;
const NotifButton = styled(ActionButton)`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.btnPrimary};
  height: 35px;
  width: 40px;
  border-radius: 3px;
`;

const HouseCountCard = () => {
  const { loading, error, data } = useQuery(HOUSE_COUNT_QUERY);

  if (data) {
    return (
      <Card>
        <Container
          row
          space="space-between"
          middle
          center
          color="transparent"
          flex={0.5}
        >
          <img src={houseIcon} style={{ width: 40, height: 40 }} />
        </Container>
        <Container color="transparent" column middle flex={0.5}>
          <Header customStyles={{ color: "#0078D4" }}>
            {data.housesConnection.aggregate.count}
          </Header>
          <SubHeader
            customStyles={{ fontSize: 14, marginTop: 0, lineHeight: 1 }}
          >
            Houses
          </SubHeader>
        </Container>
      </Card>
    );
  }
  return (
    <Card>
      <Container
        row
        space="space-between"
        middle
        center
        color="transparent"
        flex={0.5}
      >
        <img src={houseIcon} style={{ width: 40, height: 40 }} />
      </Container>
      <Container color="transparent" column middle flex={0.5}>
        <Header customStyles={{ color: "#0078D4" }}>0</Header>
        <SubHeader customStyles={{ fontSize: 14, marginTop: 0, lineHeight: 1 }}>
          Houses
        </SubHeader>
      </Container>
    </Card>
  );
};

const TenantCountCard = () => {
  const { loading, error, data } = useQuery(TENANTS_COUNT_QUERY);

  if (data) {
    return (
      <Card>
        <Container
          row
          space="space-between"
          middle
          center
          color="transparent"
          flex={0.5}
        >
          <img src={tenantIcon} style={{ width: 48, height: 45 }} />
        </Container>
        <Container color="transparent" column middle flex={0.5}>
          <Header customStyles={{ color: "#009688" }}>
            {data.tenantsConnection.aggregate.count}
          </Header>
          <SubHeader
            customStyles={{
              fontSize: 14,
              marginTop: 0,
              lineHeight: 1,
            }}
          >
            Tenants
          </SubHeader>
        </Container>
      </Card>
    );
  }
  return (
    <Card>
      <Container
        row
        space="space-between"
        middle
        center
        color="transparent"
        flex={0.5}
      >
        <img src={tenantIcon} style={{ width: 48, height: 45 }} />
      </Container>
      <Container color="transparent" column middle flex={0.5}>
        <Header customStyles={{ color: "#009688" }}>0</Header>
        <SubHeader customStyles={{ fontSize: 14, marginTop: 0, lineHeight: 1 }}>
          Tenants
        </SubHeader>
      </Container>
    </Card>
  );
};

const TicketCountCard = () => {
  const { loading, error, data } = useQuery(TICKETS_COUNT_QUERY);

  if (data) {
    return (
      <Card>
        <Container
          row
          space="space-between"
          middle
          center
          color="transparent"
          flex={0.5}
        >
          <img src={ticketIcon} style={{ width: 40, height: 40 }} />
        </Container>
        <Container color="transparent" column middle flex={0.5}>
          <Header customStyles={{ color: "#ff5722" }}>
            {data.ticketsConnection.aggregate.count}
          </Header>
          <SubHeader
            customStyles={{ fontSize: 14, marginTop: 0, lineHeight: 1 }}
          >
            Tickets
          </SubHeader>
        </Container>
      </Card>
    );
  }
  return (
    <Card>
      <Container
        row
        space="space-between"
        middle
        center
        color="transparent"
        flex={0.5}
      >
        <img src={ticketIcon} style={{ width: 40, height: 40 }} />
      </Container>
      <Container color="transparent" column middle flex={0.5}>
        <Header customStyles={{ color: "#ff5722" }}>0</Header>
        <SubHeader customStyles={{ fontSize: 14, marginTop: 0, lineHeight: 1 }}>
          Tickets
        </SubHeader>
      </Container>
    </Card>
  );
};
const RecentCreatedHouses = () => {
  const { loading, error, data } = useQuery(GET_USER_HOUSES, {
    variables: {
      first: 4,
    },
  });
  const classes = useStyles();

  if (data) {
    const houses = data.getUserHouses;
    return (
      <Container
        flex={0.6}
        column
        customStyles={{ padding: 15, marginRight: 10 }}
        color="white"
      >
        <SubHeader
          customStyles={{
            borderRadius: 3,
            fontSize: 14,
            marginBottom: 20,
            lineHeight: 1,
          }}
        >
          Latest created houses
        </SubHeader>
        {houses.map((house) => (
          <ListItem key={house.id}>
            <Container flex={0.6} row center color="transparent">
              {house.profileImage === null ? (
                <Avatar className={classes.small}>
                  <SubHeader>{house.house_heading.charAt(0)}</SubHeader>
                </Avatar>
              ) : (
                <Avatar src={house.profileImage} className={classes.small} />
              )}
              <SubText>{house.house_heading}</SubText>
            </Container>

            <SubText>{house.house_no}</SubText>
            <SubText>456</SubText>
            <MoreIcon />
          </ListItem>
        ))}
      </Container>
    );
  }
  return (
    <Container flex={0.6} column customStyles={{ paddingRight: 20 }}>
      <Text customStyles={{ marginBottom: 20 }}>Latest created houses</Text>
    </Container>
  );
};

const RecentCreatedTenants = () => {
  const { loading, error, data } = useQuery(GET_LANDLORD_TENANTS, {
    variables: {
      first: 5,
    },
  });
  const classes = useStyles();

  if (data) {
    const tenants = data.getLandlordTenants;
    return (
      <Container
        flex={0.4}
        column
        color="white"
        customStyles={{
          padding: 15,
          marginRight: 10,
          borderRadius: 3,
          maxHeight: 120,
        }}
      >
        <SubHeader
          customStyles={{
            fontSize: 14,
            marginBottom: 20,
            lineHeight: 1,
          }}
        >
          Recent tenants
        </SubHeader>
        <Container row center color="white">
          {tenants &&
            tenants.map((ten) => (
              <TenantList key={ten.id}>
                {ten.profileImage === null ? (
                  <Avatar className={classes.small}>
                    <SubHeader>
                      {ten.firstName.charAt(0) + "" + ten.lastName.charAt(0)}
                    </SubHeader>
                  </Avatar>
                ) : (
                  <Avatar src={ten.profileImage} className={classes.small} />
                )}
              </TenantList>
            ))}
        </Container>
      </Container>
    );
  }
  return (
    <Container
      flex={0.4}
      column
      color="transparent"
      customStyles={{ paddingRight: 20 }}
    >
      <Text customStyles={{ marginBottom: 20 }}>Recent tenants</Text>
      <Container column color="white" customStyles={{ borderRadius: 3 }} />
    </Container>
  );
};
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container flex={1} row>
      <Wrapper>
        <Container row customStyles={{ paddingTop: 40, paddingBottom: 10 }}>
          <SubHeader customStyles={{ marginRight: 10 }}>
            Welcome back,
          </SubHeader>
          <User>
            {({ data }) => {
              if (data) {
                const { me } = data;
                return (
                  <SubHeader customStyles={{ color: "#009688" }}>
                    {data.me && me.user_name}
                  </SubHeader>
                );
              }
              return <div />;
            }}
          </User>
        </Container>
        <Container
          customStyles={{ paddingTop: 20, paddingBottom: 20 }}
          wrap
          row
        >
          <HouseCountCard />
          <TenantCountCard />
          <TicketCountCard />
        </Container>
        <div style={{ display: "flex", flexDirection: "row", height: "auto" }}>
          <RecentCreatedHouses />
          <RecentCreatedTenants />
        </div>
      </Wrapper>
      <SideContainer>
        <Container row color="transparent">
          <Container flex={0.7} center middle row color="transparent">
            <Text>Recent Activity</Text>
          </Container>
          <Container row flex={0.3} middle center color="transparent">
            <NotifButton>
              {/*<Avatar className={classes.badgeStyle}>
                <NormalText customStyles={{ color: "white" }}></NormalText>
          </Avatar>*/}
              <NotificationIcon
                style={{ fontSize: 30, fontWeight: "normal", color: "white" }}
              />
            </NotifButton>
          </Container>
        </Container>
      </SideContainer>
    </Container>
  );
};

export default Dashboard;
