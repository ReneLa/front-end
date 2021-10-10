import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
  ActionButton, Container
} from "../../styledComponents";
import AllTickets from "./AllTickets";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: 0,
    backgroundColor: "transparent",
    border: 0,
  },

  smaller: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  userAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
  },
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
}));

const SearchWrapper = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 30px 110px;
  background-color: white;
`;
const ContentSection = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 110px;
  background-color: white;
`;
const TabSection = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 0px 110px;
`;
const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 110px;
`;
const ActionBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
`;
function TabPanel(props) {
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
      {value === index && <TabSection>{children}</TabSection>}
    </Paper>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const StyledTabs = withStyles({
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "upper-case",
    minWidth: 72,
    fontWeight: "600",
    fontSize: 12,
    color: "#323130",
    marginRight: theme.spacing(1),
    // "&:hover": {
    //   color: "#40a9ff",
    //   opacity: 1
    // }
    // "&$selected": {
    //   color: "#1890ff",
    //   fontWeight: theme.typography.fontWeightMedium
    // },
    // "&:focus": {
    //   color: "#40a9ff"
    // }
  },
  // selected: {}
}))((props) => <Tab disableRipple {...props} />);

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}
const Tickets = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container flex={1}>
      <Wrapper>
        <AllTickets {...props} />
      </Wrapper>
    </Container>
  );
};

export default Tickets;
