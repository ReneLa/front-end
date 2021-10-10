import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Container } from "../../styledComponents";

const ticket = {
  id: 1,
  title: "KItchen Sink Broken",
  isClosed: false,
  reportDate: "10-10-2019",
  dateAssigned: "10-11-2019",
  dateClosed: "12-12-2019",

  description:
    "The water faucet is broken and there is water one the floor. Need to be fixed",
  reportedBy: {
    id: 109,
    email: "renela@gmail.com",
    username: "rene la",
    tel: "07852133",
    address: "kigali rwanda"
  },
  house: {
    id: 2,
    house_heading: "barcelona",
    house_no: "ASx_334",
    houseType: "studio",
    address: "kigali, rwez"
  },
  houseAgent: {
    id: 30,
    company: "Mbanza",
    email: "mbanza@gmail.com",
    star: "golden",
    address: "kigali"
  }
};

const useStyles = makeStyles(theme => ({
  divider: {
    height: 100,
    margin: 4
  }
}));
const TicketDetails = () => {
  const classes = useStyles();
  return (
    <Container column flex={1} color="transparent">
      <Container flex={0.08} color="white" middle center>
        status:open
      </Container>
      <Container
        flex={0.6}
        color="transparent"
        column
        space={"space-between"}
        customStyles={{
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10
        }}
      >
        <Container middle color="transparent" center>
          <Typography variant="h3" gutterBottom>
            {ticket.title}
          </Typography>
        </Container>
        <Container color="transparent" middle>
          <Typography variant="h5" gutterBottom>
            {ticket.description}
          </Typography>
        </Container>
        <Container color="transparent" column>
          <Typography variant="subtitle1" gutterBottom>
            Reported date: {" " + ticket.reportDate + " "}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Date Assigned: {" " + ticket.dateAssigned + " "}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Date closed: {" " + ticket.dateClosed + " "}
          </Typography>
        </Container>
      </Container>
      <Container flex={0.32} column color="transparent">
        <Container
          row
          flex={1}
          color="#F2F3F4"
          customStyles={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 10
          }}
        >
          <Container flex={1} color="transparent" column>
            <Typography variant="h5" gutterBottom style={{ marginTop: 15 }}>
              {"Reported by:"}
            </Typography>
            <Container color="transparent" flex={1} column space="space-around">
              <Typography variant="h6" gutterBottom>
                {"name: " + ticket.reportedBy.username}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Email: " + ticket.reportedBy.email}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"tel: " + ticket.reportedBy.tel}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Address: " + ticket.reportedBy.address}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={0}
            middle
            center
            color="transparent"
            customStyles={{ marginRight: 10 }}
          >
            <Divider className={classes.divider} orientation="vertical" />
          </Container>
          <Container flex={1} color="transparent">
            <Typography variant="h6" gutterBottom style={{ marginTop: 15 }}>
              {"House :"}
            </Typography>
            <Container color="transparent" flex={1} column space="space-around">
              <Typography variant="h6" gutterBottom>
                {"name: " + ticket.house.house_heading}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"No: " + ticket.house.house_no}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"house type: " + ticket.house.houseType}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Address: " + ticket.house.address}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={0}
            middle
            center
            color="transparent"
            customStyles={{ marginRight: 10 }}
          >
            <Divider className={classes.divider} orientation="vertical" />
          </Container>

          <Container flex={1} color="#F2F3F4" column>
            <Typography variant="h6" gutterBottom style={{ marginTop: 15 }}>
              {"Management Agent"}
            </Typography>
            <Container color="transparent" flex={1} column space="space-around">
              <Typography variant="h6" gutterBottom>
                {"Company: " + ticket.houseAgent.company}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Email: " + ticket.houseAgent.email}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Stars: " + ticket.houseAgent.star}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {"Address: " + ticket.houseAgent.address}
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default TicketDetails;
