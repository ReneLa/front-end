import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Tabs,
  Typography,
  Tab,
  Avatar,
  Divider
} from "@material-ui/core";
import { Container } from "../../../styledComponents";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      component={"div"}
      role="tabpanel"
      style={{ padding: 0 }}
      elevation={0}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container
          flex={1}
          color="#F5F8FA"
          column
          customStyles={{ paddingTop: 5, height: "40vh" }}
        >
          {children}
        </Container>
      )}
    </Paper>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
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
    height: 150,
    margin: 4
  }
}));

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      // maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",

    color: "black",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const Index = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tenant = {
    id: 1,
    isActive: true,
    firstName: "Rene",
    lastName: "La"
  };
  return (
    <Container
      flex={1}
      column
      customStyles={{
        marginLeft: 10,
        marginRight: 20,
        paddingBottom: 10
      }}
    >
      <Grid
        container
        spacing={0}
        style={{
          flex: 1,
          height: "100%"
        }}
      >
        <Grid item xs={4} className={classes.gridItem}>
          <Container
            flex={1}
            color="transparent"
            column
            customStyles={{
              height: "100%",
              borderRadius: 5,
              paddingLeft: 20,
              paddingRight: 10
            }}
          >
            <Container flex={0.6} color="transparent" column>
              <Container flex={0.5} bottom center color="transparent">
                <Avatar
                  style={{
                    height: 130,
                    width: 130
                    // backgroundColor: "#EAECEE"
                  }}
                >
                  <h3 style={{ fontSize: 40 }}>{tenant.firstName.charAt(0)}</h3>
                </Avatar>
              </Container>
              <Container flex={0.25} color="transparent" column middle center>
                <h3 style={{ fontSize: 25, margin: 0 }}>
                  {tenant.firstName} {" " + tenant.lastName}
                </h3>
                <Container
                  flex={0}
                  customStyles={{ borderRadius: 10, padding: "5px 20px" }}
                >
                  {"isActive"}
                </Container>
              </Container>
              <Container flex={0.25} color="transparent" middle center>
                <span></span>
              </Container>
            </Container>
            <Container
              flex={0.4}
              color="transparent"
              customStyles={{ padding: "0px 25px" }}
            >
              <Container color="transparent" row flex={1}>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>user name</span>
                </Container>

                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>Aghsa43</span>
                </Container>
              </Container>
              <Container color="transparent" row flex={1}>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>email</span>
                </Container>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>renela@gmail.com</span>
                </Container>
              </Container>
              <Container color="transparent" row flex={1}>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>Company</span>
                </Container>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>lasoft Systems</span>
                </Container>
              </Container>
              <Container color="transparent" row flex={1}>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>Company address</span>
                </Container>
                <Container row flex={1} color="transparent" center left>
                  <span style={{ fontSize: 13 }}>East, Kayonza</span>
                </Container>
              </Container>
            </Container>
          </Container>
        </Grid>
        <Grid item xs={8} className={classes.gridItem}>
          <Container
            flex={1}
            column
            customStyles={{ height: "100%", borderRadius: 5 }}
          >
            <Container
              flex={0.5}
              column
              color="#F5F8FA"
              customStyles={{ marginBottom: 10 }}
            >
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ paddingLeft: 10, paddingTop: 10 }}
              >
                <Typography
                  variant="h6"
                  style={{ fontWeight: "600", fontSize: 12 }}
                >
                  House Information
                </Typography>
              </Container>
              <Container
                flex={1}
                row
                color="#F5F8FA"
                customStyles={{ marginBottom: 10 }}
              >
                <Container
                  flex={1}
                  column
                  color="transparent"
                  space="space-around"
                  customStyles={{ padding: 15 }}
                >
                  <Typography variant="h5" gutterBottom>
                    House Name: Barcelona
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    House Number: ADCJHSX87E
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    House Type: Apartment
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    House details: 2 bedrooms 2 bathroom
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    address:Kigali, Kicukiro
                  </Typography>
                </Container>
                <Container flex={0} column color="transparent" middle center>
                  <Divider className={classes.divider} orientation="vertical" />
                </Container>
                <Container
                  flex={1}
                  column
                  color="transparent"
                  middle
                  customStyles={{ paddingLeft: 20 }}
                >
                  <Typography variant="h5" gutterBottom>
                    Property manager: Mbanza
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Agent: Mbanza
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                    address:Kigali, Kicukiro
                  </Typography>
                </Container>
              </Container>
            </Container>
            <Container flex={0.5} column color="#F5F8FA">
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="Maintenance Requests" />
              </StyledTabs>
              <TabPanel>
                <Container
                  row
                  color="transparent"
                  space="space-between"
                  customStyles={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 25,
                    paddingBottom: 25,
                    cursor: "pointer",
                    // backgroundColor: ` ${fade("#FEFEFF", 1)}`,
                    borderBottom: `1px solid ${fade("#393939", 0.1)}`,
                    "&:hover": {
                      backgroundColor: ` ${fade("#FEFEFF", 1)}`
                    }
                  }}
                >
                  <span>kitchen sink not working</span>
                </Container>
                <Container
                  row
                  color="transparent"
                  space="space-between"
                  customStyles={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 25,
                    paddingBottom: 25,
                    cursor: "pointer",
                    // backgroundColor: ` ${fade("#FEFEFF", 1)}`,
                    borderBottom: `1px solid ${fade("#393939", 0.1)}`,
                    "&:hover": {
                      backgroundColor: ` ${fade("#FEFEFF", 1)}`
                    }
                  }}
                >
                  <span>BathTab leak</span>
                </Container>
              </TabPanel>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
