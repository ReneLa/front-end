import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Container, Text, CaptionText } from "../../../styledComponents";
import { Avatar } from "@material-ui/core";
const useStyles = makeStyles(theme => ({}));

const Activity = ({ house }) => {
  const classes = useStyles();
  return (
    <Container column flex={1} customStyles={{ height: "100%" }}>
      <Container
        column
        depth={4}
        flex={1}
        customStyles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}
        color="white"
      >
        <Text
          customStyles={{ fontWeight: "600", marginBottom: 20, marginLeft: 15 }}
        >
          Tenants
        </Text>
        <Container
          column
          flex={1}
          customStyles={{ height: "100%" }}
          color="transparent"
        >
          <Container
            color="transparent"
            row
            customStyles={{
              paddingTop: 10,
              paddingBottom: 10,
              borderBottom: "0.5px solid #E1E1E1"
            }}
          >
            <Container flex={0.5} center middle color="transparent">
              <CaptionText />
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>First Name</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>Last Name</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>E-mail</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>Gender</CaptionText>
            </Container>
          </Container>
          {[
            {
              id: 1,
              fName: "Rene",
              lName: "La",
              email: "renela@gmail.com",
              gender: "Male"
            },
            {
              id: 2,
              fName: "Rene",
              lName: "La",
              email: "renela@gmail.com",
              gender: "Male"
            },
            {
              id: 3,
              fName: "Rene",
              lName: "La",
              email: "renela@gmail.com",
              gender: "Male"
            },
            {
              id: 4,
              fName: "Rene",
              lName: "La",
              email: "renela@gmail.com",
              gender: "Male"
            }
          ].map(tenant => {
            return (
              <Container
                color="transparent"
                row
                key={tenant.id}
                customStyles={{
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderBottom: "0.5px solid #E1E1E1"
                }}
              >
                <Container flex={0.5} row center middle color="transparent">
                  <Avatar>{tenant.fName.charAt(0)}</Avatar>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{tenant.fName}</CaptionText>
                </Container>
                <Container flex={1} column middle left color="transparent">
                  <CaptionText>{tenant.lName}</CaptionText>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{tenant.email}</CaptionText>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{tenant.gender}</CaptionText>
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
      <Container
        column
        depth={4}
        flex={1}
        customStyles={{ marginBottom: 20, paddingTop: 15, paddingBottom: 15 }}
        color="white"
      >
        <Text
          customStyles={{ fontWeight: "600", marginBottom: 20, marginLeft: 15 }}
        >
          Maintenance Requests
        </Text>
        <Container
          column
          flex={1}
          customStyles={{ height: "100%" }}
          color="transparent"
        >
          <Container
            color="transparent"
            row
            customStyles={{
              paddingTop: 10,
              paddingLeft: 15,
              paddingBottom: 10,
              borderBottom: "0.5px solid #E1E1E1"
            }}
          >
            <Container flex={1} middle left color="transparent">
              <CaptionText>Title</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>Reported At</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>ReportedBy</CaptionText>
            </Container>
            <Container flex={1} middle left color="transparent">
              <CaptionText>Status</CaptionText>
            </Container>
          </Container>
          {[
            {
              id: 1,
              title: "Rene",
              reported: "La",
              by: "renela@gmail.com",
              status: "Male"
            },
            {
              id: 2,
              title: "Rene",
              reported: "La",
              by: "renela@gmail.com",
              status: "Male"
            },
            {
              id: 3,
              title: "Rene",
              reported: "La",
              by: "renela@gmail.com",
              status: "Male"
            },
            {
              id: 4,
              title: "Rene",
              reported: "La",
              by: "renela@gmail.com",
              status: "Male"
            }
          ].map(req => {
            return (
              <Container
                key={req.id}
                color="transparent"
                row
                customStyles={{
                  paddingTop: 15,
                  paddingLeft: 15,
                  paddingBottom: 15,
                  borderBottom: "0.5px solid #E1E1E1"
                }}
              >
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{req.title}</CaptionText>
                </Container>
                <Container flex={1} column middle left color="transparent">
                  <CaptionText>{req.reported}</CaptionText>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{req.by}</CaptionText>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <CaptionText>{req.status}</CaptionText>
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default Activity;
