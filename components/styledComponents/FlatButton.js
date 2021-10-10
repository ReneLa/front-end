import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));

const FlatButton = props => {
  const classes = useStyles();
  return <Button {...props} variant="outlined" />;
};

export default FlatButton;
