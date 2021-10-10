import React from "react";
import clsx from "clsx";
import Link from "next/link";
import hasLogo from "../../public/static/HAS.png";
import userPhoto from "../../public/static/sandy.jpeg";
import { makeStyles, fade } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Avatar,
  IconButton,
  Fade,
  Slide,
  Menu,
  MenuItem
} from "@material-ui/core";
import BellIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { useRouter } from "next/router";
import User from "../queryComponents/User";
import { theme as customTheme } from "../Page";
import LogoutButton from "../../components/landlord/LogoutButton";
import { Container, CaptionText, SubText } from "../styledComponents";
import PersonIcon from "@material-ui/icons/Person";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(9)}px)`,
    // borderBottom: `0.5px solid ${fade("#393939", 0.2)}`,
    backgroundColor: `${customTheme.bgPrimary}`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // borderBottom: `0.5px solid ${fade("#393939", 0.2)}`,
    backgroundColor: `${customTheme.bgPrimary}`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
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
  },
  menuPaper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F2F3F4",
    width: 200,
    borderRadius: 2,
    marginBottom: 5,
    marginTop: 38
  },
  menuItem: {
    height: 50
  }
}));

const Header = ({ open, children }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color={customTheme.bgPrimary}
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1
          }}
        >
          <Container row middle left flex={0.8}>
            {children}
          </Container>
          <Container
            row
            flex={0.2}
            customStyles={{ minHeight: 35, maxHeight: 35 }}
          >
            <Container
              flex={0.85}
              row
              color="white"
              depth={4}
              customStyles={{ marginRight: 8, borderRadius: 2 }}
            >
              <Container middle center flex={0.2} color="transparent">
                <Avatar alt="LOGO" src={userPhoto} className={classes.small} />
              </Container>
              <Container flex={0.8} row color="transparent">
                <Container
                  middle
                  flex={0.8}
                  color="transparent"
                  customStyles={{ flexWrap: "no-wrap" }}
                >
                  <User>
                    {payload => {
                      const { data, loading } = payload;
                      if (!loading && data) {
                        return (
                          <div style={{ flexWrap: "no-wrap" }}>
                            {data.me && (
                              <CaptionText
                                customStyles={{ flexWrap: "no-wrap" }}
                              >
                                {data.me.email}
                              </CaptionText>
                            )}
                          </div>
                        );
                      }
                      return <div />;
                    }}
                  </User>
                </Container>
                <Container middle center flex={0.2} color="transparent">
                  <IconButton
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: 0,
                      borderRadius: 0
                    }}
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreIcon />
                  </IconButton>
                </Container>
              </Container>
            </Container>
            <Container
              flex={0.15}
              color="white"
              depth={4}
              customStyles={{ borderRadius: 2 }}
            >
              <IconButton
                style={{
                  width: "100%",
                  height: "100%",
                  padding: 0,
                  borderRadius: 0
                }}
              >
                <BellIcon />
              </IconButton>
            </Container>
          </Container>
        </Toolbar>
      </AppBar>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Slide}
        classes={{
          paper: classes.menuPaper
        }}
      >
        <Link href="/landlord/welcome" as="/landlord/my-profile">
          <a>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <PersonIcon
                style={{ fontSize: 20, color: "#717D7E", marginRight: 10 }}
              />
              <SubText>My Profile</SubText>
            </MenuItem>
          </a>
        </Link>

        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <SubText>Contact support</SubText>
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <SubText>Help center</SubText>
        </MenuItem>
        <LogoutButton handleClose={handleClose} />
      </Menu>
    </div>
  );
};

export default Header;

{
  /*<div
style={{
  // backgroundColor: "white",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-end"
}}
>
<Container
  color="white"
  flex={1}
  customStyles={{ minWidth: 60 }}
  depth={4}
>
  <User>
    {payload => {
      const { data, loading } = payload;
      if (!loading && data) {
        return (
          <div>
            {data.me && (
              <Typography
                variant="h6"
                noWrap
                style={{
                  marginLeft: 7,
                  marginRight: 7,
                  color: customTheme.textSecondary
                }}
              >
                {data.me.email}
              </Typography>
            )}
          </div>
        );
      }
      return <div />;
    }}
  </User>
</Container>
<Avatar alt="LOGO" src={hasLogo} className={classes.small} />

<LogoutButton />
  </div>*/
}
