import { Avatar, Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DialIcon from "@material-ui/icons/DialPad";
import StreetIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/MailOutline";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { CaptionText, Container, Header, Text } from "../../styledComponents";
import ProfileTab from "./ProfileTab";

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
  profile: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const SideWrapper = styled(Container)`
  display: flex;
  flex: 0.3;
  padding-left: 110px;
  padding-top: 50px;
  background-color: white;
  flex-direction: column;
`;
const ContentWrapper = styled(Container)`
  display: flex;
  flex: 0.7;
  /* padding-right: 110px; */
  background-color: transparent;
`;
const TabWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 110px;
  background-color: white;
`;
const TabSection = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 100px;
  padding-left: 20px;
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      component={"div"}
      role="tabpanel"
      elevation={0}
      style={{ height: "100%" }}
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

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const SingleTenant = (props) => {
  const { tenant, ...other } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container flex={1} row customStyles={{ height: "100%", width: "100%" }}>
      <SideWrapper>
        <Container flex={false} color="transparent" column>
          {tenant.profileImage !== null && (
            <Avatar src={tenant.profileImage} className={classes.profile} />
          )}
          {tenant.profileImage === null && (
            <Avatar className={classes.profile}>
              {tenant.firstName.charAt(0) + tenant.lastName.charAt(0)}
            </Avatar>
          )}
        </Container>
        <Container
          flex={false}
          color="transparent"
          // middle
          // center
          customStyles={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Header> {tenant.firstName + " " + tenant.lastName}</Header>
        </Container>
        <Container
          flex={false}
          color="transparent"
          middle
          column
          customStyles={{ paddingTop: 10, paddingBottom: 10, paddingRight: 40 }}
        >
          <Text customStyles={{ fontWeight: "600" }}>About</Text>
          <CaptionText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </CaptionText>
        </Container>
        <Container
          flex={false}
          color="transparent"
          middle
          column
          customStyles={{ paddingTop: 10, paddingBottom: 10, paddingRight: 40 }}
        >
          <Text customStyles={{ fontWeight: "600" }}>Contact details</Text>
          <Container
            color="transparent"
            row
            center
            customStyles={{ paddingTop: 5 }}
          >
            <MailIcon
              color="transparent"
              color="gray"
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <CaptionText>{tenant.comm_email}</CaptionText>
          </Container>
          <Container
            color="transparent"
            row
            center
            customStyles={{ paddingTop: 10 }}
          >
            <DialIcon color="gray" style={{ fontSize: 20, marginRight: 10 }} />
            <CaptionText>{tenant.tel_no}</CaptionText>
          </Container>
          <Container
            color="transparent"
            row
            center
            customStyles={{ paddingTop: 10 }}
          >
            <StreetIcon
              color="gray"
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <CaptionText>{tenant.street}</CaptionText>
          </Container>
        </Container>
      </SideWrapper>
      <ContentWrapper>
        <Container row middle center>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Profile" {...a11yProps("profile")} />
            <StyledTab label="Account" {...a11yProps("account")} />
          </StyledTabs>
        </Container>
        <TabPanel value={value} index={0}>
          <ProfileTab />
        </TabPanel>
      </ContentWrapper>
    </Container>
  );
};
export default SingleTenant;
