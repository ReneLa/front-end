import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, CssBaseline } from "@material-ui/core";
import { theme as customTheme } from "../Page";
import { Container } from "../styledComponents";

import ActiveLink from "../ActiveLink";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },

  drawerPaper: {
    paddingLeft: 100,
    paddingRight: 100,
    height: 64,
    backgroundColor: "white"
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
    backgroundColor: customTheme.bgPrimary
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  userAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5)
  }
}));

const WithTabLayout = Page => props => {
  console.log(props);
  return (
    <Container flex={1} column>
      <Page {...props} />
    </Container>
  );
};

export default WithTabLayout;
