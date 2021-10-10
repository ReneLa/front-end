import { Avatar } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import ArrowIcon from "@material-ui/icons/ArrowForward";
import BusinessIcon from "@material-ui/icons/Business";
// import BathroomIcon from "@material-ui/icons/BathTub";
import BedIcon from "@material-ui/icons/KingBed";
import PhoneIcon from "@material-ui/icons/LocalPhone";
import MailIcon from "@material-ui/icons/Mail";
import TenantIcon from "@material-ui/icons/PersonPin";
import GraphIcon from "@material-ui/icons/ShowChart";
import ViewIcon from "@material-ui/icons/Style";
import React from "react";
import styled from "styled-components";
import CurrentTenant from "../../queryComponents/landlord/CurrentTenant";
import {
  CaptionText, Container, NormalText, SubHeader,
  SubText,
  Text
} from "../../styledComponents";
import AddHouseTenant from "./AddHouseTenant";

const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e1e1e1;
  padding: 2px 15px;
  margin: 3px 3px;
`;
const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  max-height: calc(100vh - 115px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TenantCard = ({ house, tenant }) => {
  return (
    <CurrentTenant houseId={house.id}>
      {({ data, loading, error }) => {
        if (data) {
          const tenants = data.getCurrentTenant;

          return (
            <Container
              flex={0.5}
              row
              customStyles={{
                borderRadius: 3,
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 0,
                paddingBottom: 20,
                marginRight: 8,
              }}
              color="white"
            >
              <Container
                row
                middle
                flex={0.1}
                color="transparent"
                customStyles={{ height: "100%" }}
              >
                <TenantIcon style={{ fontSize: 20 }} />
              </Container>
              <Container
                column
                space={"space-between"}
                flex={0.8}
                color="transparent"
              >
                <SubText
                  customStyles={{
                    fontSize: 16,

                    marginBottom: 0,
                    marginTop: 0,
                  }}
                >
                  Tenant
                </SubText>

                {tenants.map((curr) => {
                  return (
                    <React.Fragment key={curr.id}>
                      <Container
                        color="transparent"
                        customStyles={{ paddingTop: 10, paddingBottom: 10 }}
                      >
                        <Container row center color="transparent">
                          <Avatar
                            style={{
                              width: 30,
                              height: 30,
                              marginRight: 8,
                            }}
                          >
                            <SubHeader customStyles={{ fontSize: 10 }}>
                              {curr.firstName.charAt(0) +
                                curr.lastName.charAt(0)}
                            </SubHeader>
                          </Avatar>

                          <SubHeader
                            customStyles={{
                              fontSize: 18,
                            }}
                          >
                            {curr.firstName + " " + curr.lastName}
                          </SubHeader>
                        </Container>
                      </Container>
                      <Container
                        row
                        center
                        color="transparent"
                        customStyles={{ paddingTop: 5, paddingBottom: 5 }}
                      >
                        <Avatar
                          style={{
                            backgroundColor: fade("#F7DC6F", 0.3),
                            width: 25,
                            height: 25,
                            marginRight: 8,
                          }}
                        >
                          <MailIcon
                            style={{ fontSize: 15, color: "#F1C40F" }}
                          />
                        </Avatar>
                        <SubText>{curr.comm_email}</SubText>
                      </Container>
                      <Container
                        row
                        center
                        color="transparent"
                        customStyles={{ paddingTop: 1, paddingBottom: 1 }}
                      >
                        <Avatar
                          style={{
                            backgroundColor: fade("#58D68D", 0.3),
                            width: 25,
                            height: 25,
                            marginRight: 8,
                          }}
                        >
                          <PhoneIcon
                            style={{ fontSize: 15, color: "#27AE60" }}
                          />
                        </Avatar>
                        <SubText>{curr.tel_no}</SubText>
                      </Container>
                    </React.Fragment>
                  );
                })}
              </Container>
              {tenants.length <= 0 && <AddHouseTenant house={house} />}
            </Container>
          );
        }
        return null;
      }}
    </CurrentTenant>
  );
};

const ManagerCard = ({ managingAgent }) => {
  return (
    <React.Fragment>
      {managingAgent === null ? (
        <Container
          flex={0.5}
          row
          customStyles={{
            borderRadius: 3,
            padding: 20,
            marginRight: 8,
          }}
          color="white"
        >
          <Container
            row
            middle
            flex={0.1}
            color="transparent"
            customStyles={{ height: "100%" }}
          >
            <BusinessIcon style={{ fontSize: 20 }} />
          </Container>
          <Container
            column
            space={"space-between"}
            flex={0.8}
            color="transparent"
          >
            <SubText
              customStyles={{
                fontSize: 16,

                marginBottom: 0,
                marginTop: 0,
              }}
            >
              Managing Agent
            </SubText>
          </Container>
          <Container
            row
            middle
            flex={0.1}
            color="transparent"
            customStyles={{ height: "100%", paddingTop: 2 }}
          >
            <ArrowIcon style={{ fontSize: 18 }} />
          </Container>
        </Container>
      ) : (
        <Container
          flex={0.5}
          row
          customStyles={{
            borderRadius: 3,
            padding: 20,
            marginRight: 8,
          }}
          color="white"
        >
          <Container
            row
            middle
            flex={0.1}
            color="transparent"
            customStyles={{ height: "100%" }}
          >
            <BusinessIcon style={{ fontSize: 20 }} />
          </Container>
          <Container
            column
            space={"space-between"}
            flex={0.8}
            color="transparent"
          >
            <SubText
              customStyles={{
                fontSize: 16,

                marginBottom: 0,
                marginTop: 0,
              }}
            >
              Managing Agent
            </SubText>
            <Container
              color="transparent"
              customStyles={{ paddingTop: 10, paddingBottom: 10 }}
            >
              <SubHeader
                customStyles={{
                  fontSize: 18,
                }}
              >
                {managingAgent.company_name}
              </SubHeader>
            </Container>
            <Container
              row
              center
              color="transparent"
              customStyles={{ paddingTop: 5, paddingBottom: 5 }}
            >
              <Avatar
                style={{
                  backgroundColor: fade("#F7DC6F", 0.3),
                  width: 25,
                  height: 25,
                  marginRight: 8,
                }}
              >
                <MailIcon style={{ fontSize: 15, color: "#F1C40F" }} />
              </Avatar>
              <SubText>{managingAgent.comm_email}</SubText>
            </Container>
            <Container
              row
              center
              color="transparent"
              customStyles={{ paddingTop: 1, paddingBottom: 1 }}
            >
              <Avatar
                style={{
                  backgroundColor: fade("#58D68D", 0.3),
                  width: 25,
                  height: 25,
                  marginRight: 8,
                }}
              >
                <PhoneIcon style={{ fontSize: 15, color: "#27AE60" }} />
              </Avatar>
              <SubText>{managingAgent.tel_no}</SubText>
            </Container>
          </Container>
          <Container
            row
            middle
            flex={0.1}
            color="transparent"
            customStyles={{ height: "100%", paddingTop: 2 }}
          >
            <ArrowIcon style={{ fontSize: 18 }} />
          </Container>
        </Container>
      )}
    </React.Fragment>
  );
};

const HouseFact = ({ house, house_type }) => {
  return (
    <Container
      flex={1}
      customStyles={{ padding: 10, marginBottom: 10 }}
      row
      center
      color="transparent"
    >
      <Container column flex={1} color="transparent">
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container row center flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              PROPERTY TYPE
            </NormalText>
          </Container>
          <Container row center flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house_type.house_type}
            </SubText>
          </Container>
        </Container>
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container column flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              YEAR BUILT
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house.year_built}
            </SubText>
          </Container>
        </Container>
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container column flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              PARKING
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house.parking + " space(s)"}
            </SubText>
          </Container>
        </Container>
      </Container>
      <Container column flex={1} color="transparent">
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container row center flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              FLOORING
            </NormalText>
          </Container>
          <Container row center flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house.flooring}
            </SubText>
          </Container>
        </Container>
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container column flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              LIVING SPACE
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house.live_space + " sqt"}
            </SubText>
          </Container>
        </Container>
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container column flex={1} color="transparent">
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              PARCEL NO.
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <SubText customStyles={{ fontSize: 14, color: "#E59866" }}>
              {house.parcel_no}
            </SubText>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

const Interior = ({ house, appliances, utilities }) => {
  return (
    <Container
      flex={1}
      customStyles={{ padding: 10, marginBottom: 10 }}
      row
      center
      color="transparent"
    >
      <Container column flex={1} color="transparent">
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container row center flex={1} color="transparent">
            <BedIcon
              style={{ color: "#979a9a", fontSize: 20, marginRight: 10 }}
            />
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              BEDS
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <Text>{house.no_bedrooms}</Text>
          </Container>
        </Container>
        <Container
          row
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 7 }}
        >
          <Container row center flex={1} color="transparent">
            {/* <BathroomIcon
              style={{ color: "#979a9a", fontSize: 20, marginRight: 10 }}
            /> */}
            <NormalText customStyles={{ fontSize: 12, color: "#979a9a" }}>
              BATHS
            </NormalText>
          </Container>
          <Container column flex={1} color="transparent">
            <Text>{house.no_bathrooms}</Text>
          </Container>
        </Container>
      </Container>
      <Container column flex={1} color="transparent">
        <Container
          row
          center
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 10 }}
        >
          <NormalText
            customStyles={{ fontSize: 12, color: "#979a9a", marginRight: 10 }}
          >
            APPLIANCES
          </NormalText>
          <Container row flex={1} color="transparent" wrap>
            {appliances.map((app, i) => (
              <Tag key={i}>
                <CaptionText customStyles={{ fontSize: 12, color: "#0078D4" }}>
                  {app}
                </CaptionText>
              </Tag>
            ))}
          </Container>
        </Container>

        <Container row center flex={1} color="transparent">
          <NormalText
            customStyles={{ fontSize: 12, color: "#979a9a", marginRight: 20 }}
          >
            UTILITIES
          </NormalText>
          <Container row flex={1} color="transparent" wrap>
            {utilities.map((util, i) => (
              <Tag key={i}>
                <CaptionText customStyles={{ fontSize: 12, color: "#0078D4" }}>
                  {util}
                </CaptionText>
              </Tag>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
const Exterior = ({ house, ext_ft }) => {
  return (
    <Container
      flex={1}
      customStyles={{ padding: 10, marginBottom: 10 }}
      row
      center
      color="transparent"
    >
      <Container column flex={1} color="transparent">
        <Container
          row
          center
          flex={1}
          color="transparent"
          customStyles={{ marginBottom: 10 }}
        >
          <NormalText
            customStyles={{ fontSize: 12, color: "#979a9a", marginRight: 10 }}
          >
            FEATURES
          </NormalText>
          <Container row flex={1} color="transparent" wrap>
            {ext_ft.map((ft, i) => (
              <Tag key={i}>
                <CaptionText customStyles={{ fontSize: 12, color: "#0078D4" }}>
                  {ft}
                </CaptionText>
              </Tag>
            ))}
          </Container>
        </Container>
      </Container>
      <Container column flex={1} color="transparent" />
    </Container>
  );
};
const Overview = ({ house, ...other }) => {
  const [ticket, setTicket] = React.useState({});
  const [openTicket, setOpenTicket] = React.useState(false);
  const handleClickOpen = (ticket) => {
    setTicket(ticket);
    setOpenTicket(true);
  };
  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };

  const {
    house_type,
    managingAgent,
    house_status,
    appliances,
    ext_ft,
    utilities,
  } = house;

  return (
    <Wrapper>
      <Container row center flex={1} customStyles={{ width: "100%" }}>
        <Avatar
          style={{
            backgroundColor: "#0078D4",
            width: 35,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ViewIcon style={{ fontSize: 20 }} />
        </Avatar>
        <Container
          column
          flex={1}
          customStyles={{ width: "100%", paddingLeft: 15, paddingTop: 3 }}
        >
          <SubHeader customStyles={{ fontSize: 16, marginBottom: 0 }}>
            At a glance
          </SubHeader>
        </Container>
      </Container>

      <Container
        row
        flex={1}
        customStyles={{
          marginTop: 10,
          marginBottom: 20,
        }}
        color="transparent"
      >
        <TenantCard
          house={house}
          tenant={{
            firstName: "Rene",
            lastName: "La",
            comm_email: "renela@gmail.com",
            tel_no: "+86 158721827812",
          }}
        />
        <ManagerCard managingAgent={managingAgent} />
      </Container>

      <Container
        column
        flex={1}
        customStyles={{
          borderRadius: 3,
          padding: 15,
          marginTop: 10,
          marginBottom: 20,
        }}
        color="white"
      >
        <Container row center color="transparent">
          <SubHeader customStyles={{ fontSize: 16, marginBottom: 0 }}>
            Facts and features
          </SubHeader>
        </Container>
        <HouseFact house={house} house_type={house_type} />

        <Container row center color="transparent">
          <SubHeader customStyles={{ fontSize: 16, marginBottom: 0 }}>
            Interior details
          </SubHeader>
        </Container>
        <Interior house={house} appliances={appliances} utilities={utilities} />
        <Container row center color="transparent">
          <SubHeader customStyles={{ fontSize: 16, marginBottom: 0 }}>
            External details
          </SubHeader>
        </Container>
        <Exterior house={house} ext_ft={ext_ft} />
      </Container>

      <Container row center flex={1} customStyles={{ width: "100%" }}>
        <Avatar
          style={{
            backgroundColor: "#0078D4",
            width: 35,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GraphIcon style={{ fontSize: 20 }} />
        </Avatar>
        <Container
          column
          middle
          flex={1}
          customStyles={{ width: "100%", paddingLeft: 15, paddingTop: 3 }}
        >
          <SubHeader customStyles={{ fontSize: 16, marginBottom: 0 }}>
            Latest Activity
          </SubHeader>
        </Container>
      </Container>
      <Container row flex={1} customStyles={{ marginTop: 15 }}>
        <Container
          column
          customStyles={{ height: 300, borderRadius: 5 }}
          flex={0.5}
          color="white"
        />
      </Container>
    </Wrapper>
  );
};

export default Overview;
