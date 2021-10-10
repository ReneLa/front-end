import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Tab,
  Tabs,
  Divider,
  Typography,
  Avatar,
  Box
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { Container } from "../../../styledComponents";
import AgentCard from "./AgentCard";

const StyledTabs = withStyles({
  root: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    width: 50,
    borderRadius: 50,
    justifyContent: "center"
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "transparent"
    }
  }
})(props => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <div />
    }}
  />
));

const StyledTab = withStyles(theme => ({
  root: {
    display: "flex",
    textTransform: "none",
    color: "#000",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),

    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {},
  gridItem: {
    flex: 1,
    margin: 0,
    paddingRight: 10,
    paddingLeft: 10
    // height: "100%",
    // backgroundColor: "green"
  },
  divider: {
    // height: 28
    // margin: 4
  }
}));

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      component="div"
      role="tabpanel"
      elevation={0}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Paper>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const DetailsContainer = ({ house }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { provinceId, districtId, house_type } = house;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container column flex={1}>
      <Grid
        container
        spacing={0}
        style={{
          flex: 1,
          height: "100%"
          // backgroundColor: "pink"
        }}
      >
        <Grid item xs={2} className={classes.gridItem}>
          <Container
            flex={1}
            column
            customStyles={{ height: "100%", borderRadius: 5 }}
          >
            <Container
              flex={0.8}
              center
              // middle
              customStyles={{ height: "100%", borderRadius: 5 }}
            >
              <StyledTabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
              >
                <StyledTab label={<Avatar />} />
                <StyledTab label={<Avatar />} />
                <StyledTab label={<Avatar />} />
              </StyledTabs>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={7} className={classes.gridItem}>
          <Container
            flex={1}
            column
            customStyles={{ height: "100%", borderRadius: 5 }}
          >
            <Container
              flex={0.8}
              customStyles={{ height: "100%", borderRadius: 5 }}
            >
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={3} className={classes.gridItem}>
          <AgentCard house={house} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsContainer;
