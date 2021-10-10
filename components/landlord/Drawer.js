import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Container } from "../styledComponents";

const useStyles = makeStyles({});

export default function customDrawer(props) {
  return (
    <Drawer anchor="right" open={props.open}>
      <Container column color="transparent">
        <Container flex={1} color="transparent">
          {props.children}
        </Container>
      </Container>
    </Drawer>
  );
}
