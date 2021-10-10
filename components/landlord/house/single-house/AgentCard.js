import { Avatar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import React from "react";
import agentPhoto from "../../../../public/static/rene.jpeg";
import {
  ActionButton,
  CommandButton, Container,
  PrimaryButton,
  SubText
} from "../../../styledComponents";

const useStyles = makeStyles(theme => ({}));

const AgentCard = ({ house }) => {
  const classes = useStyles();

  return (
    <Container
      column
      depth={4}
      flex={1}
      color="#D5D8DC"
      customStyles={{ height: "100%", borderRadius: 5 }}
    >
      <Container flex={0.7} column color="white">
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
            src={agentPhoto}
            style={{
              height: 55,
              width: 55
            }}
          />
        </Container>
        <Container middle center column flex={0.35} color="transparent">
          <SubText customStyles={{ marginBottom: 3, marginTop: 5 }}>
            Agent
          </SubText>
          <SubText customStyles={{ fontWeight: "600" }}>
            Mbanza Management
          </SubText>
          <Container flex={1} row middle center color="transparent">
            <StarIcon style={{ marginRight: 5 }} />
            <SubText>4.9/5</SubText>
          </Container>
        </Container>
        <Container middle center column flex={0.25} color="transparent">
          <CommandButton>mbanza@gmail.con</CommandButton>
        </Container>
      </Container>

      <Container column flex={0.3} center middle color="#D0D3D4">
        <PrimaryButton customStyles={{ marginBottom: 5 }}>
          <MailIcon style={{ marginRight: 6, fontSize: 18 }} /> Contact Agent
        </PrimaryButton>
        <ActionButton>
          <SearchIcon style={{ marginRight: 6, fontSize: 18 }} /> Find other
          Agent
        </ActionButton>
      </Container>
    </Container>
  );
};

export default AgentCard;
