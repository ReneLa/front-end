import {
  Avatar, Badge, CssBaseline, Drawer, Fade, IconButton, Menu,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import hasLogo from "../../public/static/HAS.png";
import { theme as customTheme } from "../Page";
import User from "../queryComponents/User";
import {
  Container, SubHeader, SubText
} from "../styledComponents";
import ActiveLink from "./ActiveLink";
import LogoutButton from "./LogoutButton";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },

  drawerPaper: {
    paddingLeft: 100,
    paddingRight: 100,
    height: 64,
    borderBottom: "1px solid #ECF0F1",
    elevation: 4,
  },
  menuPaper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: 150,
    borderRadius: 2,
    marginBottom: 5,
    marginTop: 25,
  },
  menuItem: {
    height: 50,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    backgroundColor: customTheme.bgPrimary,
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
}));

const WithLayout = (Page) => (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container
      flex={1}
      customStyles={{ minHeight: "100vh", position: "relative" }}
      column
    >
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="top"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Container center row color="transparent" customStyles={{ height: 64 }}>
          <Avatar src={hasLogo} className={classes.small} />
          <Container
            row
            flex={1}
            center
            color="transparent"
            customStyles={{ marginLeft: 20 }}
          >
            <ActiveLink label="Dashboard" href={"/Landlrd/dashboard"} />
            <ActiveLink label="Houses" href={"/Landlrd/houses"} />
            <ActiveLink label="Tenants" href={"/Landlrd/tenants"} />
            <ActiveLink label="Tickets" href={"/Landlrd/tickets"} />
          </Container>
          <Container row flex={false} center right middle color="transparent">
            <IconButton onClick={handleClick} style={{ margin: 0, padding: 0 }}>
              <Badge
                color="secondary"
                overlap="circle"
                badgeContent=" "
                variant="dot"
                style={{ color: "red" }}
              >
                <Avatar
                  alt="LOGO"
                  onMouseOver={handleClick}
                  className={classes.userAvatar}
                >
                  <User>
                    {({ data }) => {
                      if (data) {
                        const { me } = data;
                        return (
                          <SubHeader customStyles={{ color: "#fff" }}>
                            {data.me && me.user_name.charAt(0)}
                          </SubHeader>
                        );
                      }
                      return <div />;
                    }}
                  </User>
                </Avatar>
              </Badge>
            </IconButton>
          </Container>
        </Container>
      </Drawer>
      <Container
        flex={1}
        column
        customStyles={{
          paddingTop: 64,
        }}
      >
        <Page {...props} />
      </Container>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
        classes={{
          paper: classes.menuPaper,
        }}
      >
        {/*   <Link href="/landlord/welcome">
          <a>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <PersonIcon
                style={{ fontSize: 20, color: "#717D7E", marginRight: 10 }}
              />
              <SubText>My Profile</SubText>
            </MenuItem>
          </a>
      </Link>*/}

        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <SubText>Contact support</SubText>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <SubText>Help center</SubText>
        </MenuItem>
        <LogoutButton handleClose={handleClose} />
      </Menu>
    </Container>
  );
};

export default WithLayout;
