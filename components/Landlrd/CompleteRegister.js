import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useMutation } from "@apollo/react-hooks";
import {
  Container,
  Text,
  SubHeader,
  Input,
  PrimaryButton,
  SubText,
  Header,
  ActionButton,
  CaptionText,
} from "../styledComponents";
import gql from "graphql-tag";
import { ApolloConsumer } from "react-apollo";
import styled from "styled-components";
import { device } from "../../lib/deviceSize";
import hasLogo from "../../public/static/HAS.png";
import { Dropdown } from "../styledComponents";
import { GET_PROVINCES_IN_COUNTRY } from "../queryComponents/Provinces";
import { GET_DISTRICTS_IN_PROVINCE } from "../queryComponents/Districts";
import { GET_COUNTRIES } from "../queryComponents/Countries";

const ImgWrapper = styled(Container)`
  flex-direction: column;
  flex: 0.3;
  padding-top: 50px;
  padding-left: 60px;
  padding-right: 10px;

  background-color: ${({ theme }) => theme.btnPrimary};
  min-height: 100%;
  max-height: 100%;
`;
const FormWrapper = styled(Container)`
  flex-direction: column;
  padding-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
  flex: 0.7;
  min-height: 100%;
  max-height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex: 0.72;
  padding-top: 30px;
  padding-bottom: 20px;
  /* background-color: red; */
`;

const Countries = ({ country, setCountry }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCountries(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({ query: GET_COUNTRIES });
    const { countries } = res.data;
    setCountryList(changeObj(countries));
  }

  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name,
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <Container
          column
          color="transparent"
          customStyles={{ marginRight: 10 }}
        >
          <Dropdown
            title={country.length > 0 ? country[0].value : "Country"}
            anchorEl={anchorEl}
            handleOpen={(e) => getCountries(e, client)}
            handleClose={handleClose}
            selection={country}
            setSelection={setCountry}
            items={countryList}
            wrapperStyles={{
              width: 150,
              marginBottom: 10,
              backgroundColor: "#fff",
            }}
          />
        </Container>
      )}
    </ApolloConsumer>
  );
};

const Provinces = ({ country, province, setProvince }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [provinceList, setProvinceList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProvinces(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: GET_PROVINCES_IN_COUNTRY,
      variables: { id: country[0].id },
    });

    const provinces = res.data.getProvincesByCountry;
    setProvinceList(changeObj(provinces));
  }
  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name,
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <Container
          column
          color="transparent"
          customStyles={{
            pointerEvents: country.length === 0 ? "none" : "auto",
            marginRight: 10,
          }}
        >
          <Dropdown
            title={province.length > 0 ? province[0].value : "Province"}
            anchorEl={anchorEl}
            handleOpen={(e) => getProvinces(e, client)}
            handleClose={handleClose}
            selection={province}
            setSelection={setProvince}
            items={provinceList}
            wrapperStyles={{ width: 150 }}
          />
        </Container>
      )}
    </ApolloConsumer>
  );
};

const Districts = ({ province, district, setDistrict }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [districtList, setDistrictList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDistricts(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: GET_DISTRICTS_IN_PROVINCE,
      variables: { id: province[0].id },
    });

    const districts = res.data.getDistrictsByProvince;
    setDistrictList(changeObj(districts));
  }
  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name,
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <Container
          column
          color="transparent"
          customStyles={{
            pointerEvents: province.length === 0 ? "none" : "auto",
          }}
        >
          <Dropdown
            title={district.length > 0 ? district[0].value : "District"}
            anchorEl={anchorEl}
            handleOpen={(e) => getDistricts(e, client)}
            handleClose={handleClose}
            selection={district}
            setSelection={setDistrict}
            items={districtList}
            wrapperStyles={{ width: 150 }}
          />
        </Container>
      )}
    </ApolloConsumer>
  );
};

const CREATE_LANDLORD_MUTATION = gql`
  mutation CREATE_LANDLORD_MUTATION(
    $firstName: String!
    $lastName: String!
    $tel_no: String
    $reason: String
    $street: String
  ) {
    createLandlord(
      firstName: $firstName
      lastName: $lastName
      tel_no: $tel_no
      reason: $reason
      street: $street
    ) {
      id
      firstName
    }
  }
`;
const CompleteRegister = () => {
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [province, setProvince] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [tel_no, setTelNo] = useState(null);
  const [reason, setReason] = useState(null);
  const [street, setStreet] = useState(null);

  const onCompletion = () => {
    Router.replace("/Landlord/dashboard");
    setFirstName(null);
    setLastName(null);
    setTelNo(null);
    setReason(null);
    setStreet(null);
  };
  const [createLandlord, { data, loading }] = useMutation(
    CREATE_LANDLORD_MUTATION,
    {
      variables: { firstName, lastName, tel_no, reason, street },
    }
  );
  console.log(data);
  return (
    <Container
      flex={1}
      row
      customStyles={{ minHeight: "100vh", maxHeight: "100vh" }}
    >
      <FormWrapper>
        <Container flex={false} row center color="transparent">
          <img
            src={hasLogo}
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <Text>House-Assist Space</Text>
        </Container>
        <Container flex={1} column center>
          <Form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              createLandlord();
              Router.replace("/Landlrd/dashboard");
              setFirstName(null);
              setLastName(null);
              setTelNo(null);
              setReason(null);
              setStreet(null);
            }}
          >
            <Header customStyles={{ fontWeight: "400", marginBottom: 5 }}>
              Provide more information
            </Header>

            <fieldset
              disabled={loading}
              style={{
                display: "flex",
                paddingTop: "30px",
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 0,
                border: "none",
                flexDirection: "column",
                marginBottom: 10,
              }}
            >
              <CaptionText customStyles={{ marginBottom: 10 }}>
                Tell us a little more about yourself
              </CaptionText>
              <Input
                label="FIRST NAME"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="LAST NAME"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                label="PHONE NUMBER"
                placeholder="Phone Number"
                type="tel"
                value={tel_no}
                onChange={(e) => setTelNo(e.target.value)}
              />
              <Input
                label="LOCATION"
                placeholder="Country/ city / street"
                type="tel"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              {/*<Container
                row
                center
                color="transparent"
                customStyles={{ marginBottom: 10 }}
              >
                <CaptionText
                  customStyles={{
                    color: "#323130",
                    fontWeight: "600",
                    marginTop: 20,
                  }}
                >
                  Location
                </CaptionText>
              </Container>
              <Container
                row
                color="transparent"
                customStyles={{ marginBottom: 15 }}
              >
                <Countries country={country} setCountry={setCountry} />
                <Provinces
                  country={country}
                  province={province}
                  setProvince={setProvince}
                />
                <Districts
                  district={district}
                  province={province}
                  setDistrict={setDistrict}
                />
                </Container>*/}
              <CaptionText
                customStyles={{
                  marginBottom: 10,
                  fontSize: 11,
                  color: "#323130",
                }}
              >
                WHY ARE YOU JOINING HOUSE-ASSIST SPACE
              </CaptionText>
              <Input
                placeholder="provide reason"
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </fieldset>
            <Container row center space="space-between">
              <Link href={"/Landlrd/dashboard"} as={"/Landlrd/dashboard"}>
                <a>
                  <PrimaryButton
                    type="button"
                    customStyles={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      marginTop: 10,
                      width: 100,
                    }}
                  >
                    Skip
                  </PrimaryButton>
                </a>
              </Link>

              {loading ? (
                <PrimaryButton
                  type="submit"
                  customStyles={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    marginTop: 10,
                    width: 100,
                  }}
                >
                  Saving
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  disabled={firstName === null}
                  type="submit"
                  customStyles={{
                    paddingTop: 8,
                    paddingBottom: 8,
                    marginTop: 10,
                    width: 100,
                  }}
                >
                  Save
                </PrimaryButton>
              )}
            </Container>
          </Form>
        </Container>
      </FormWrapper>
      <ImgWrapper />
    </Container>
  );
};

export default CompleteRegister;
