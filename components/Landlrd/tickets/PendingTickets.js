import React from "react";
import styled from "styled-components";
import {
  Container,
  SubHeader,
  SubText,
  Text,
  CaptionText
} from "../../styledComponents";
import { Avatar, Divider } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import BathroomIcon from "@material-ui/icons/BathTub";
import BedIcon from "@material-ui/icons/KingBed";
import GardenIcon from "@material-ui/icons/AmpStories";
import CarIcon from "@material-ui/icons/DirectionsCar";
import GraphIcon from "@material-ui/icons/ShowChart";
import ViewIcon from "@material-ui/icons/Style";
import TicketItem from "../TicketItem";
import SingleTicket from "../tickets/SingleTicket";

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

const PendingTickets = () => {
  const [ticket, setTicket] = React.useState({});
  const [openTicket, setOpenTicket] = React.useState(false);
  const handleClickOpen = ticket => {
    setTicket(ticket);
    setOpenTicket(true);
  };
  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };
  return (
    <Container flex={1} customStyles={{ paddingTop: 30 }}>
      <Container
        row
        space="space-between"
        customStyles={{ flexWrap: "wrap", paddingTop: 20 }}
      >
        {[
          {
            id: 1,
            title: "water sink Broken",
            date: "Sat, Mar. 28, 2020",
            means: "mobile",
            description:
              "Happy Saturday, MailCharts! Time to come back to Netflix..."
          },
          {
            id: 2,
            title: "Door handle Broken",
            date: "Mon,     Dec. 14, 2019",
            means: "System",
            description: "MailCharts, Ozark Season 3 is now on Netflix"
          },
          {
            id: 3,
            title: "Water tab mulfunction",
            date: "Wed, Jun. 05, 2019",
            means: "mobile",
            description:
              "MailCharts, come back today to more TV shows & movies."
          },
          {
            id: 4,
            title: "Door handle Broken",
            date: "Mon,     Dec. 14, 2019",
            means: "System",
            description: "MailCharts, Ozark Season 3 is now on Netflix"
          }
        ].map(issue => {
          return (
            <TicketItem
              key={issue.id}
              ticket={issue}
              onClick={handleClickOpen}
            />
          );
        })}
      </Container>
      <SingleTicket
        ticket={ticket}
        open={openTicket}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default PendingTickets;
