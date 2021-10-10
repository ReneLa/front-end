import React from "react";
import styled from "styled-components";
import {
  Container,
  SubHeader,
  SubText,
  Text,
  NormalText,
  CaptionText,
} from "../../styledComponents";
import { Avatar, Divider } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import BathroomIcon from "@material-ui/icons/BathTub";
import BedIcon from "@material-ui/icons/KingBed";
import GardenIcon from "@material-ui/icons/AmpStories";
import CarIcon from "@material-ui/icons/DirectionsCar";
import GraphIcon from "@material-ui/icons/ShowChart";
import ViewIcon from "@material-ui/icons/Style";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import DotIcon from "@material-ui/icons/FiberManualRecord";
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e1e1e1;
  padding: 4px 15px;
  margin: 0px 5px;
`;

const ProfileTab = () => {
  return (
    <Container flex={1} column customStyles={{ paddingTop: 20 }}>
      <Container
        color="white"
        flex={0}
        row
        customStyles={{ padding: "20px 10px", borderRadius: 4 }}
      >
        <Container middle flex={0} color="transparent">
          <CheckIcon color="green" style={{ fontSize: 20 }} />
        </Container>
        <Container
          column
          middle
          flex={0.8}
          color="transparent"
          customStyles={{ paddingLeft: 10 }}
        >
          <Text customStyles={{ fontWeight: "600" }}>Tenant is Active</Text>
          <CaptionText>Tenant is active since a year ago</CaptionText>
        </Container>
        <Container middle center flex={0.2} color="transparent">
          <Container
            row
            middle
            wrap
            center
            customStyles={{
              padding: "6px 15px",
              backgroundColor: "green",
              borderRadius: 50,
            }}
          >
            <CaptionText customStyles={{ color: "white" }}>
              Deactivate
            </CaptionText>
          </Container>
        </Container>
      </Container>
      <Container
        color="transparent"
        flex={0}
        row
        customStyles={{ padding: "20px 0px" }}
      >
        <Container
          color="white"
          flex={1}
          row
          customStyles={{
            padding: "20px 10px",
            borderRadius: 4,
            marginRight: 5,
          }}
        >
          <Container color="transparent" flex={0} column top>
            <DotIcon color="green" style={{ fontSize: 16 }} />
          </Container>
          <Container
            flex={1}
            column
            color="transparent"
            customStyles={{ paddingLeft: 10, paddingRight: 10 }}
          >
            <SubText customStyles={{ fontWeight: "600", marginBottom: 8 }}>
              House Details
            </SubText>
            <SubHeader customStyles={{ marginBottom: 8 }}>Barcelona</SubHeader>
            <CaptionText customStyles={{ marginBottom: 8 }}>
              4 Members
            </CaptionText>
            <CaptionText>420 Cubic Feet</CaptionText>
          </Container>
        </Container>
        <Container
          color="white"
          flex={1}
          row
          customStyles={{
            padding: "25px 10px",
            borderRadius: 4,
            marginLeft: 5,
          }}
        ></Container>
      </Container>

      <Container
        color="white"
        flex={1}
        column
        customStyles={{ padding: "10px 10px", borderRadius: 4 }}
      >
        <Container
          row
          center
          flex={0}
          color="transparent"
          space="space-between"
          customStyles={{ marginTop: 5, marginBottom: 5 }}
        >
          <Container row flex={1} center color="transparent">
            <ViewIcon color="white" style={{ fontSize: 20, marginRight: 10 }} />
            <SubText customStyles={{ fontWeight: "body" }}>
              Tickets by Rene La
            </SubText>
          </Container>
          <SubText customStyles={{ fontWeight: "body" }}></SubText>
        </Container>
        <Container
          color="transparent"
          customStyles={{
            marginTop: 5,
            padding: "5px 0px",
            borderBottom: "0.5px solid #979a9a",
          }}
          row
          center
        >
          <Container color="transparent" flex={0.1} center row>
            <NormalText>ID</NormalText>
          </Container>
          <Container color="transparent" flex={0.4} center row>
            <NormalText>Title</NormalText>
          </Container>
          <Container color="transparent" flex={0.25} center row>
            <NormalText>Status</NormalText>
          </Container>
          <Container color="transparent" flex={0.15} center row>
            <NormalText>Assignees</NormalText>
          </Container>
          <Container
            color="transparent"
            flex={0.1}
            middle
            center
            row
          ></Container>
        </Container>
        {[
          {
            id: "#1234",
            title: "Water sink broken",
            status: "closed",
            assignees: "rene",
          },
          {
            id: "#1253",
            title: "Window broken",
            status: "open",
            assignees: "rene",
          },
          {
            id: "#1902",
            title: "Leaking roof",
            status: "pending",
            assignees: "patrick",
          },
          {
            id: "#1324",
            title: "Water sink broken",
            status: "assigned",
            assignees: "rene",
          },
        ].map((ticket) => {
          return (
            <Container
              color="transparent"
              customStyles={{
                padding: "10px 0px",
              }}
              row
              center
            >
              <Container color="transparent" flex={0.1} center row>
                <NormalText>{ticket.id}</NormalText>
              </Container>
              <Container color="transparent" flex={0.4} center row>
                <NormalText>{ticket.title}</NormalText>
              </Container>
              <Container color="transparent" flex={0.25} center row>
                <NormalText>{ticket.status}</NormalText>
              </Container>
              <Container color="transparent" flex={0.15} center row>
                <NormalText>{ticket.assignees}</NormalText>
              </Container>
              <Container
                color="transparent"
                flex={0.1}
                middle
                center
                row
              ></Container>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default ProfileTab;
