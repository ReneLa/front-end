import React from "react";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px sold black",
    backgroundColor: "brown",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0
  },
  wrapper: {
    width: 100 + theme.spacing(2)
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function CustomSlide(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slide direction="right" in={props.open} mountOnEnter unmountOnExit>
        {props.children}
      </Slide>
    </div>
  );
}
