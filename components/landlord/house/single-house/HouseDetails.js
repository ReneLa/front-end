import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography, IconButton } from "@material-ui/core";
import {
  Container,
  FlatButton,
  CommandButton,
  PrimaryButton,
  OutlineButton,
  ActionButton,
  Text,
  SubText,
  NormalText,
  CaptionText
} from "../../../styledComponents";
import MoreIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 10,
    paddingRight: 20
    // flexGrow: 1,
    // height: "85vh",
    // zIndex: 1305
  }
}));

const HouseDetails = ({ house }) => {
  const { house_type, images, countryId, provinceId, districtId } = house;
  return (
    <Container flex={1} color="transparent" customStyles={{ height: "100%" }}>
      <Container
        flex={0.5}
        column
        color="transparent"
        customStyles={{ marginBottom: 10 }}
      >
        <Container flex={0.7} column color="transparent">
          <Container center right row flex={0.1} color="transparent">
            <IconButton
              style={{
                padding: 5,
                borderRadius: 0
              }}
              aria-controls="fade-menu"
              aria-haspopup="true"
            >
              <MoreIcon />
            </IconButton>
          </Container>
          <Container middle center column flex={0.3} color="transparent">
            <Avatar
              style={{
                height: 55,
                width: 55
              }}
            />
          </Container>
          <Container middle center column flex={0.35} color="transparent">
            <Text customStyles={{ fontWeight: "600" }}>
              {house.house_heading}
            </Text>
          </Container>
          <Container middle center column flex={0.25} color="transparent">
            <CommandButton>mbanza@gmail.con</CommandButton>
          </Container>
        </Container>

        <Container
          middle
          flex={0.3}
          color="transparent"
          customStyles={{ marginBottom: 10 }}
        >
          <SubText  customStyles={{ fontWeight:'600' }}>Description</SubText>
          <CaptionText>{house.house_description}</CaptionText>
        </Container>
      </Container>
      <Container flex={0.5} column>
        <Typography variant="h3" style={{ fontSize: 12, fontWeight: 600 }}>
          current tenant
        </Typography>
        <Container
          flex={1}
          column
          customStyles={{
            position: "relative",
            border: "1px solid #D5D8DC ",
            borderRadius: 5,
            marginTop: 10
          }}
        >
          <Container flex={0} middle center customStyles={{ marginTop: 30 }}>
            <Avatar style={{ height: 40, width: 40 }}>
              {house.house_heading.charAt(0)}
            </Avatar>
          </Container>
          <Container flex={1} colum center customStyles={{ padding: 5 }}>
            <Typography variant="h6" style={{ fontWeight: 500 }}>
              Rene La
            </Typography>
            <Typography variant="h6" style={{ fontWeight: 500 }}>
              {house.house_no}
            </Typography>
          </Container>
          <Container
            flex={0.1}
            customStyles={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: 5
            }}
          >
            <FlatButton>View Profile</FlatButton>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default HouseDetails;
