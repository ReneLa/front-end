import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import TimesIcon from "@material-ui/icons/Close";
import React from "react";
import {
  CaptionText, Container, OutlinedButton, SubText, Text
} from "../../../styledComponents";
import Activity from "./Activity";

const useStyles = makeStyles(theme => ({}));
const Details = ({ house }) => {
  const classes = useStyles();
  const [active, setActive] = React.useState(2);
  const handleActive = value => {
    setActive(value);
  };
  const { house_type, countryId, provinceId, districtId } = house;
  return (
    <Container
      flex={1}
      // color={fade("#D5D8DC", 0.7)}
      color="transparent"
      customStyles={{
        height: "100%",
        paddingLeft: 20
        // overflowY: "scroll"
      }}
    >
      <Container flex={0} row center right customStyles={{ paddingBottom: 10 }}>
        {/* <Container flex={1} left color="white">
          <Text>Tenants</Text>
    </Container>*/}
        <Container
          flex={1}
          row
          center
          right
          customStyles={{ paddingBottom: 10 }}
        >
          <OutlinedButton
            bColor={active === 1 ? "#0078D4" : "transparent"}
            onClick={() => handleActive(1)}
            customStyles={{
              marginRight: -20,
              borderRadius: 15,
              paddingRight: "20px",
              paddingLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
              backgroundColor: active === 1 ? "white" : "#E1E1E1",
              zIndex: active === 1 ? 1 : 0
            }}
          >
            Profile
          </OutlinedButton>
          <OutlinedButton
            onClick={() => handleActive(2)}
            bColor={active === 2 ? "#0078D4" : "transparent"}
            customStyles={{
              borderRadius: 15,
              paddingRight: "20px",
              paddingLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
              backgroundColor: active === 2 ? "white" : "#E1E1E1",
              zIndex: active === 2 ? 1 : 0
            }}
          >
            Activity
          </OutlinedButton>
        </Container>
      </Container>

      {active === 1 && (
        <React.Fragment>
          <Container
            row
            color="transparent"
            customStyles={{ marginBottom: 20 }}
          >
            <Container flex={0.25}>
              <Text customStyles={{ fontWeight: "500" }}>
                House Information
              </Text>
            </Container>
            <Container flex={0.75} column>
              <Container
                flex={1}
                color={"white"}
                customStyles={{ marginBottom: 10, padding: 15 }}
                depth={4}
              >
                <SubText customStyles={{ fontWeight: "600", marginBottom: 20 }}>
                  House Details
                </SubText>
                <Container column space="space-between" color="transparent">
                  <CaptionText customStyles={{ marginBottom: 5 }}>
                    House Name
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_heading}
                  </CaptionText>
                </Container>
                <Divider />
                <Container column space="space-between" color="transparent">
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    House Number
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_no}
                  </CaptionText>
                </Container>
                <Divider />
                <Container column space="space-between" color="transparent">
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    House Description
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_description}
                  </CaptionText>
                </Container>
                <Divider />
                <Container column space="space-between" color="transparent">
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    House Type
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house_type.house_type}
                  </CaptionText>
                </Container>
                <Divider />
              </Container>
              <Container
                flex={1}
                color={"#FDFEFE"}
                customStyles={{ marginBottom: 10, padding: 15 }}
                depth={4}
              >
                <SubText customStyles={{ fontWeight: "600", marginBottom: 20 }}>
                  House Features
                </SubText>
                <Container row flex={1} color="transparent">
                  <Container
                    column
                    flex={1}
                    color="transparent"
                    customStyles={{ paddingRight: 15 }}
                  >
                    <Container row space="space-between" color="transparent">
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Bathrooms
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.no_bathrooms}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Bedrooms
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.no_bedrooms}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Annex
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.no_annex}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Dinning rooms
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.dinning_room}
                      </CaptionText>
                    </Container>
                    <Divider />
                  </Container>
                  <Container
                    column
                    flex={1}
                    color="transparent"
                    customStyles={{ marginLeft: 10, paddingRight: 15 }}
                  >
                    <Container row space="space-between" color="transparent">
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Has Hot water
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.has_hotwater ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <TimesIcon style={{ color: "red" }} />
                        )}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Has In Kitchen
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.has_in_kitchen ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <TimesIcon style={{ color: "red" }} />
                        )}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Has Balcony
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.has_balcony ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <TimesIcon style={{ color: "red" }} />
                        )}
                      </CaptionText>
                    </Container>
                    <Divider />
                    <Container
                      row
                      color="transparent"
                      space="space-between"
                      customStyles={{ marginTop: 10 }}
                    >
                      <CaptionText customStyles={{ marginBottom: 5 }}>
                        Has Car parking
                      </CaptionText>
                      <CaptionText
                        customStyles={{ fontWeight: "600", marginBottom: 10 }}
                      >
                        {house.has_carparking ? (
                          <CheckIcon style={{ color: "green" }} />
                        ) : (
                          <TimesIcon style={{ color: "red" }} />
                        )}
                      </CaptionText>
                    </Container>
                    <Divider />
                  </Container>
                </Container>
              </Container>
              <Container
                flex={1}
                color={"#FDFEFE"}
                customStyles={{ marginBottom: 20, padding: 15 }}
                depth={4}
              >
                <SubText customStyles={{ fontWeight: "600" }}>
                  House Location
                </SubText>
                <Container
                  row
                  flex={1}
                  space="space-between"
                  color="transparent"
                >
                  <Container column space="space-between" color="transparent">
                    <CaptionText
                      customStyles={{ marginBottom: 5, marginTop: 10 }}
                    >
                      Country
                    </CaptionText>
                    <CaptionText
                      customStyles={{ fontWeight: "600", marginBottom: 10 }}
                    >
                      {countryId.name}
                    </CaptionText>
                  </Container>
                  <Container column space="space-between" color="transparent">
                    <CaptionText
                      customStyles={{ marginBottom: 5, marginTop: 10 }}
                    >
                      Province
                    </CaptionText>
                    <CaptionText
                      customStyles={{ fontWeight: "600", marginBottom: 10 }}
                    >
                      {provinceId.name}
                    </CaptionText>
                  </Container>
                  <Container column space="space-between" color="transparent">
                    <CaptionText
                      customStyles={{ marginBottom: 5, marginTop: 10 }}
                    >
                      District
                    </CaptionText>
                    <CaptionText
                      customStyles={{ fontWeight: "600", marginBottom: 10 }}
                    >
                      {districtId.name}
                    </CaptionText>
                  </Container>
                </Container>
                <Divider />
              </Container>
            </Container>
          </Container>

          <Container
            row
            color="transparent"
            customStyles={{ marginBottom: 20 }}
          >
            <Container flex={0.25}>
              <Text customStyles={{ fontWeight: "500" }}>
                Tenant Information
              </Text>
            </Container>
            <Container flex={0.75} column>
              <Container
                flex={1}
                color={"#FDFEFE"}
                customStyles={{ marginBottom: 10, padding: 15 }}
                depth={4}
              >
                <Container color="transparent" column space="space-between">
                  <CaptionText customStyles={{ marginBottom: 5 }}>
                    First Name
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_heading}
                  </CaptionText>
                </Container>
                <Divider />
                <Container color="transparent" column space="space-between">
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    Last Name
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_no}
                  </CaptionText>
                </Container>
                <Divider />
                <Container color="transparent" column space="space-between">
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    E-mail
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_no}
                  </CaptionText>
                </Container>
                <Divider />
                <Container
                  column
                  color="transparent"
                  color="transparent"
                  space="space-between"
                >
                  <CaptionText
                    customStyles={{ marginBottom: 5, marginTop: 10 }}
                  >
                    Phone number
                  </CaptionText>
                  <CaptionText
                    customStyles={{ fontWeight: "600", marginBottom: 10 }}
                  >
                    {house.house_no}
                  </CaptionText>
                </Container>
                <Divider />
              </Container>
            </Container>
          </Container>
        </React.Fragment>
      )}
      {active === 2 && <Activity house={house} />}
    </Container>
  );
};

export default Details;
