import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Typography,
  Paper,
  InputBase,
  Tab,
  Tabs,
  Divider,
  Avatar,
  IconButton,
  Box
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "../../styledComponents";
import TicketDetails from "./TicketsDetails";

const StyledTabs = withStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    overflowY: "auto"

    // maxHeight: 500,
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",

    "& > div": {
      maxWidth: 40,
      width: "100%",
      border: 0,
      backgroundColor: "#5B86C6"
    }
  }
})(props => (
  <Tabs
    {...props}
    indicatorColor="primary"
    TabIndicatorProps={{
      children: (
        <div
          style={{
            // minWidth: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            marginTop: 2,
            marginBottom: 2
          }}
        />
      )
    }}
  />
));

const StyledTab = withStyles(theme => ({
  root: {
    display: "flex",
    padding: 0,
    marginBottom: 10,
    border: `0.5px solid ${fade("#3A3A3A", 0.1)}`,
    borderRadius: 5,
    minHeight: 80,
    minWidth: 400,
    backgroundColor: "#F5F8FA",
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      component={"div"}
      role="tabpanel"
      elevation={0}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container
          flex={1}
          color="#F5F8FA"
          column
          customStyles={{ height: "89.5vh" }}
        >
          {children}
        </Container>
      )}
    </Paper>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 15,
    paddingRight: 30
  },
  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginBottom: 10
    // marginLeft: 10
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  tabs: {}
}));

const Index = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ticket, setTicket] = React.useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const showTicket = ticket => {
    setTicket(ticket);
  };
  const _singleTicket = ticket => {
    return (
      <Container
        row
        // middle
        color="transparent"
        customStyles={{
          flex: 1,
          padding: 10,
          width: "100%",
          height: "100%"
        }}
      >
        <Container flex={0} color="transparent">
          <Avatar style={{ width: 40, height: 40 }}>H</Avatar>
        </Container>
        <Container
          flex={1}
          color="transparent"
          column
          customStyles={{ paddingLeft: 8 }}
        >
          <Container row color="transparent" flex={1} space="space-between">
            <span
              style={{ fontSize: 10, fontWeight: 500, textTransform: "none" }}
            >
              {ticket.tenant}
            </span>
            <span>3 days ago</span>
          </Container>
          <Container flex={1} row left color="transparent">
            <span
              style={{ fontSize: 11, fontWeight: 500, textTransform: "none" }}
            >
              {ticket.title}
            </span>
          </Container>
        </Container>
      </Container>
    );
  };
  return (
    <Container flex={1} row className={classes.root}>
      <Container
        flex={0.3}
        column
        customStyles={{ paddingRight: 30, maxHeight: "89.5vh" }}
      >
        <Paper component="form" className={classes.searchRoot} elevation={0}>
          <InputBase
            className={classes.input}
            placeholder="Search a ticket"
            // inputProps={{ "aria-label": "search google maps" }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          scrollButtons={"off"}
          onChange={handleChange}
          value={value}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {[
            {
              id: 1,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 2,
              tenant: "Bruno Sachs",
              title: "Window broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 3,
              tenant: "Mathew Wills",
              title: "Door stuck ",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 4,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 5,
              tenant: "Bruno Sachs",
              title: "Window broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 6,
              tenant: "Bruno Sachs",
              title: "Window broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 7,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 8,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 9,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 10,
              tenant: "Rene La",
              title: "Kitchen sink broken",
              description:
                "The 2nd floor kitchen broke and so much water is running. I need it to be repaired as soon possible"
            },
            {
              id: 11,
              isActive: true,
              firstName: "Nein",
              lastName: "gehts"
            },
            {
              id: 12,
              isActive: true,
              firstName: "Rene",
              lastName: "La"
            },
            {
              id: 13,
              isActive: true,
              firstName: "Nein",
              lastName: "gehts"
            },
            {
              id: 14,
              isActive: true,
              firstName: "Rene",
              lastName: "La"
            },
            {
              id: 15,
              isActive: false,
              firstName: "Mehn",
              lastName: "Soft"
            },
            {
              id: 16,
              isActive: true,
              firstName: "Nein",
              lastName: "gehts"
            },
            {
              id: 17,
              isActive: true,
              firstName: "Rene",
              lastName: "La"
            }
          ].map((ticket, index) => (
            <StyledTab
              key={ticket.id}
              label={_singleTicket(ticket)}
              value={index}
              onClick={() => showTicket(ticket)}
            />
          ))}
        </StyledTabs>
      </Container>
      <Container flex={0.7} column>
        <TabPanel>
          <TicketDetails ticket={ticket} />
        </TabPanel>
      </Container>
    </Container>
  );
};

export default Index;
