import React from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Drawer, Typography, CssBaseline, IconButton } from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import { Container } from "../../styledComponents";
import UpdateHouse from "./UpdateHouse";
import DeleteHouse from "./DeleteHouse";

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100vw"
  },

  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    maxHeight: "95vh",
    border: "none"
  },
  drawerPaper: {
    width: drawerWidth,
    maxHeight: "95vh",
    border: "none"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    padding: theme.spacing(0),
    width: "100%",
    // flex: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    // padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));

export default function House(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open
        })}
      >
        {props.children}
      </main>
      {props.open && (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={props.open}
          PaperProps={{
            style: {
              position: "absolute",
              marginTop: 10,
              border: "none",
              borderRadius: 5
            }
          }}
          BackdropProps={{ style: { position: "absolute" } }}
          ModalProps={{
            container: ` ${
              typeof window !== "undefined"
                ? document.getElementById("page-container")
                : ""
            }`,
            style: { position: "absolute" }
          }}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Container
            row
            color={"white"}
            customStyles={{
              borderBottom: `0.8px solid ${fade("#393939", 0.1)}`,
              paddingTop: 15,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 2,
              position: `-webkit-sticky`,
              position: "sticky",
              top: 0
            }}
          >
            <Container flex={1} color="transparent" row center left>
              <IconButton style={{ padding: 5 }} onClick={props.onClose}>
                <BackIcon style={{ fontSize: 20 }} />
              </IconButton>
            </Container>
            <Container flex={1} color="transparent" row middle center>
              <Typography gutterBottom variant="h5" component="h2">
                {props.house.house_heading}
              </Typography>
            </Container>
            <Container flex={1} color="transparent" row center right>
              <DeleteHouse id={props.house.id} onClose={props.onClose} />
            </Container>
          </Container>
          <UpdateHouse house={props.house} />
        </Drawer>
      )}
    </div>
  );
}
