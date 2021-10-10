import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SubText, CaptionText } from "./Text";
import Container from "./Container";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    border: "1px solid #D7DBDD",
    borderRadius: 1,
    padding: 8,
    backgroundColor: "#F5F8FA",
    // lineHeight: 2,
    fontSize: 14,
    "&:focus": {
      border: "1px solid #5B86C6",
      backgroundColor: "#FEFEFF",
    },
  },
}));

const Input = ({ label, wrapperStyles, inputStyles, type, ...other }) => {
  const classes = useStyles();
  return (
    <Container column customStyles={{ marginBottom: 20 }} color="transparent">
      <CaptionText customStyles={{ marginBottom: 5, color: "#323130" }}>
        {label}
      </CaptionText>
      <input className={classes.inputStyle} {...other} type={type} />
    </Container>
  );
};

export default Input;
