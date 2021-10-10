import { Avatar, Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DialIcon from "@material-ui/icons/DialPad";
import NumIcon from "@material-ui/icons/FormatAlignRight";
import StreetIcon from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
  CaptionText,
  Container,
  Header,
  NormalText,
  Text,
} from "../../styledComponents";
import CreateBuilding from "./create/CreateBuilding";
import Overview from "./OverviewTab";
import Tenants from "./TenantsTab";
import Tickets from "./TicketsTab";
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
    borderRadius: theme.spacing(7) / 2,
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
const HeaderSection = styled(Container)`
  display: flex;
  width: 100%;
  flex: 0.2;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 100px;
  padding-bottom: 10px;
  padding-right: 80px;
  background-color: white;
`;
const ContentWrapper = styled(Container)`
  display: flex;
  flex: 0.8;
  flex-direction: column;
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
  /* flex: 1; */
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding-right: 100px;
  padding-left: 20px;
`;
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e1e1e1;

  padding: 4px 15px;
  margin: 0px 2px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Paper
      component={"div"}
      role="tabpanel"
      style={{ borderRadius: 0 }}
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

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}
const SingleHouse = (props) => {
  const classes = useStyles();
  const { house, ...other } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { countryId, provinceId, districtId } = house;
  return (
    <Container flex={1} row>
      <HeaderSection>
        <Container flex={false} color="transparent">
          <Avatar src={house.profileImage} className={classes.small} />
        </Container>
        <Container
          flex={false}
          color="transparent"
          // middle
          // center
          customStyles={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Header>{house.house_heading}</Header>
        </Container>
        <Container
          flex={false}
          color="transparent"
          middle
          column
          customStyles={{ paddingTop: 10, paddingBottom: 10, paddingRight: 40 }}
        >
          <Text customStyles={{ fontWeight: "600" }}>Description</Text>
          <CaptionText customStyles={{ fontSize: 12.5 }}>
            {house.house_description}
          </CaptionText>
        </Container>
        <Container
          flex={false}
          color="transparent"
          middle
          column
          customStyles={{ paddingTop: 10, paddingBottom: 10, paddingRight: 40 }}
        >
          <Text customStyles={{ fontWeight: "600" }}>House details</Text>
          <Container
            color="transparent"
            row
            center
            customStyles={{ paddingTop: 5 }}
          >
            <NumIcon
              color="transparent"
              color="gray"
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <NormalText customStyles={{ fontSize: 11 }}>
              {house.house_no}
            </NormalText>
          </Container>
          <Container
            color="transparent"
            row
            center
            customStyles={{ paddingTop: 10 }}
          >
            <DialIcon color="gray" style={{ fontSize: 20, marginRight: 10 }} />
            <NormalText customStyles={{ fontSize: 11 }}>
              {countryId.name + ", " + provinceId.name}
            </NormalText>
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
            <NormalText customStyles={{ fontSize: 11 }}>
              {districtId.name + ", " + house.street}
            </NormalText>
          </Container>
        </Container>
      </HeaderSection>
      <ContentWrapper>
        <TabWrapper>
          <Container flex={1} color="white">
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab label="Overview" {...a11yProps("overview")} />
              <StyledTab label="Issues" {...a11yProps("issues")} />
              <StyledTab label="Tenants" {...a11yProps("tenants")} />
            </StyledTabs>
          </Container>
          <Container row middle center color="white">
            <CreateBuilding house={house} />
          </Container>
        </TabWrapper>
        <TabPanel value={value} index={0}>
          <Overview house={house} {...other} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tickets house={house} {...other} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Tenants house={house} {...other} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Page Four
        </TabPanel>
      </ContentWrapper>
    </Container>
  );
};

export default SingleHouse;
