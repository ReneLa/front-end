import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TenantsIcon from "@material-ui/icons/People";
import HouseIcon from "@material-ui/icons/Home";
import TicketsIcon from "@material-ui/icons/Mail";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { theme as customTheme } from "../Page";
import CustomLink from "../CustomLink";
import { Container, SubText, SubHeader, Text } from "../styledComponents";
import hasLogo from "../../public/static/HAS.png";
import { Avatar } from "@material-ui/core";
import ActiveLink from "../ActiveLink";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    border: "none",
    backgroundColor: customTheme.bgSecondary,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    border: "none",
    backgroundColor: customTheme.bgSecondary,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    // flexGrow: 1,
    // width: "100%",
    backgroundColor: customTheme.bgPrimary
    // paddingTop: 64
    // paddingLeft: theme.spacing(20)
    // paddingRight: theme.spacing(2)
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  linkStyle: {
    textDecoration: "none",
    // cursor: "pointer",
    color: customTheme.iconStyle
  },
  activeLink: {
    textDecoration: "none",
    // cursor: "pointer",
    color: customTheme.tealPrimary
  }
}));

const WithLayout = Page => props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <div
            style={{
              display: "flex",
              marginLeft: 5,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {open ? (
              <Avatar src={hasLogo} className={classes.small} />
            ) : (
              <Avatar src={hasLogo} className={classes.small} />
            )}
          </div>
        </div>

        <Container
          flex={1}
          column
          color="transparent"
          customStyles={{ height: "100%", paddingTop: 20 }}
        >
          <ActiveLink
            label="Dashboard"
            href={"/landlord/dashboard"}
            icon={"dashboard"}
          />
          <ActiveLink label="Houses" href={"/landlord/houses"} icon={"home"} />
          <ActiveLink
            label="Tenants"
            href={"/landlord/tenants"}
            icon={"people"}
          />
          <ActiveLink
            label="Tickets"
            href={"/landlord/tickets"}
            icon={"mail"}
          />
        </Container>
      </Drawer>

      <Container
        flex={1}
        column
        customStyles={{
          paddingTop: 64,
          // paddingLeft: 10,
          paddingRight: 10,
          minHeight: "99.9vh"
        }}
      >
        <Page open={open} />
      </Container>
    </div>
  );
};

export default WithLayout;

{
  /*  <div className={classes.toolbar}>
          <div style={{ marginLeft: 2 }}>
            <IconButton onClick={handleDrawerOpen}>
              {open ? (
                <MenuCloseIcon style={{ fontSize: 22, color: "black" }} />
              ) : (
                <MenuIcon style={{ fontSize: 20, color: "black" }} />
              )}
            </IconButton>
          </div>
              </div>*/
}
