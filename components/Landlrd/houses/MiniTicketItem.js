import React from "react";
import styled from "styled-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  ActionButton,
  Text,
  SubText,
  NormalText,
  CaptionText,
} from "../../styledComponents";
import userPhoto from "../../../public/static/sandy.jpeg";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: 0,
  },
  biggerAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: 3,
  },
}));
const TicketWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 300px;
  min-width: 230px;
  border: 1px solid #d5d8dc;
  position: relative;
  margin-bottom: 20px;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
      0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  }
`;
const Wrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid #eaecee;
  position: relative;
  border-radius: 2px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
      0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  }
`;

const Tag = styled(Container)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px;
  margin-right: 5px;
`;
const CardHeader = styled(Container)`
  direction: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: transparent;
`;

const ImageWrapper = styled(Container)`
  direction: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  /* align-items: center; */
  background-color: transparent;
  padding: 0px;
  margin-top: 15px;
`;

const MiniTicketItem = ({ ticket, list, ...other }) => {
  const classes = useStyles();
  if (list) {
    return (
      <Wrapper {...other}>
        <Container color="transparent" flex={0.1} row middle center>
          <Avatar src={userPhoto} className={classes.biggerAvatar} />
        </Container>
        <Container color="transparent" flex={0.16} column middle>
          <SubText customStyles={{ fontWeight: "bold", fontSize: "12px" }}>
            {ticket.user}
          </SubText>
          <CaptionText>{ticket.date}</CaptionText>
        </Container>
        <Container color="transparent" flex={0.74} column middle>
          <SubText customStyles={{ fontWeight: "bold", fontSize: "14px" }}>
            {ticket.title}
          </SubText>
          <CaptionText>{ticket.description}</CaptionText>
        </Container>
      </Wrapper>
    );
  }
  return (
    <TicketWrapper {...other}>
      <CardHeader>
        <Avatar src={userPhoto} className={classes.small} />
        <Container
          flex={1}
          column
          color="transparent"
          customStyles={{
            paddingLeft: 10,
            paddingRight: 5,
          }}
        >
          <Text customStyles={{ fontSize: "14px", fontWeight: "500" }}>
            {ticket.title}
          </Text>
          <CaptionText customStyles={{ color: "#0078D4" }}>
            {ticket.date}
          </CaptionText>
        </Container>
      </CardHeader>

      <ImageWrapper>
        <Container flex={1} middle center customStyles={{ padding: 40 }}>
          <Avatar
            src={userPhoto}
            style={{ width: "100%", height: "auto", borderRadius: 0 }}
          />
        </Container>
      </ImageWrapper>
    </TicketWrapper>
  );
};

export default MiniTicketItem;
