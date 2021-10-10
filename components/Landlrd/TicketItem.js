import { fade, makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import styled from "styled-components";
import { formatDate } from "../../lib/dateFormat";
import {
  CaptionText, Container, Text
} from "../styledComponents";
const useStyles = makeStyles((theme) => ({
  small: {
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
  height: 385px;
  min-width: 320px;
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
  /* border-bottom: 0.5px solid #eaecee; */
  position: relative;
  border-radius: 2px;
  padding: 12px 15px;
  margin-bottom: 8px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
      0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  }
`;
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* background-color: #e1e1e1; */
  padding: 2px 15px;
  ${(props) => props.customStyles}/* margin: 3px 3px; */
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

const TicketItem = ({ list, num, ticket, ...other }) => {
  const classes = useStyles();
  const { houseId } = ticket;
  return (
    <Wrapper {...other}>
      <Container center row flex={0.1} color="transparent">
        <Text customStyles={{ fontSize: 14 }}>{num}</Text>
      </Container>
      <Container center row flex={0.2} color="transparent">
        <Text customStyles={{ fontSize: 14 }}>
          {formatDate(ticket.createdAt)}
        </Text>
      </Container>
      <Container center row flex={0.2} color="transparent">
        <Text customStyles={{ fontSize: 15 }}>{ticket.title}</Text>
      </Container>
      <Container center row flex={0.2} color="transparent">
        <Text customStyles={{ fontSize: 15 }}>{houseId.house_heading}</Text>
      </Container>

      <Container center row flex={0.2} color="transparent">
        {ticket.isClosed ? (
          <Tag customStyles={{ backgroundColor: fade("#A9DFBF", 0.3) }}>
            <CaptionText customStyles={{ color: "#212F3D" }}>
              closed
            </CaptionText>
          </Tag>
        ) : (
          <Tag customStyles={{ backgroundColor: fade("#A9DFBF", 0.3) }}>
            <CaptionText customStyles={{ color: "#212F3D" }}>open</CaptionText>
          </Tag>
        )}
      </Container>
      <Container center row right flex={0.1} color="transparent">
        <MoreIcon />
      </Container>
    </Wrapper>
  );
};

export default TicketItem;

{
  /**
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
          <NormalText customStyles={{ color: "#0078D4" }}>
            Sat, Mar. 28, 2020
          </NormalText>
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
    </TicketWrapper> */
}
