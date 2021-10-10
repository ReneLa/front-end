import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
// import styled, { css } from "styled-components";
import { GET_USER_HOUSES } from "../../queryComponents/Houses";
import gql from "graphql-tag";
import { Typography, IconButton } from "@material-ui/core";
import Countries from "../../queryComponents/Countries";
import Provinces from "../../queryComponents/Provinces";
import Districts from "../../queryComponents/Districts";
// import Sectors from "../../queryComponents/Sectors";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import HouseTypes from "../../queryComponents/HouseTypes";
import {
  Container,
  FlatButton,
  PrimaryButton,
  SubHeader,
  Text,
  Input,
  SubText,
  CaptionText
} from "../../styledComponents";
import loadingImg from "../../../public/static/126.gif";

const UPDATE_HOUSE_MUTATION = gql`
  mutation UPDATE_HOUSE_MUTATION(
    $id: ID!
    $house_heading: String
    $house_description: String
    $house_no: String
    $no_bathrooms: Int
    $no_bedrooms: Int
    $no_annex: Int
    $dinning_room: Int
    $isActive: Boolean
    $has_in_kitchen: Boolean
    $has_balcony: Boolean
    $has_garden: Boolean
    $has_hotwater: Boolean
    $has_carparking: Boolean
    $house_type: ID
    # $parent_houseId: ID
    $countryId: ID
    $provinceId: ID
    $districtId: ID # $sectorId: ID
  ) {
    updateHouse(
      id: $id
      house_heading: $house_heading
      house_description: $house_description
      house_no: $house_no
      no_bathrooms: $no_bathrooms
      no_bedrooms: $no_bedrooms
      no_annex: $no_annex
      dinning_room: $dinning_room
      isActive: $isActive
      has_in_kitchen: $has_in_kitchen
      has_balcony: $has_balcony
      has_garden: $has_garden
      has_hotwater: $has_hotwater
      has_carparking: $has_carparking
      house_type: $house_type
      # parent_houseId: $parent_houseId
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId # sectorId: $sectorId
    ) {
      id
      house_heading
      house_description
      house_no
      no_annex
      no_bathrooms
      no_bedrooms
      dinning_room
      isActive
      has_in_kitchen
      has_balcony
      has_garden
      has_hotwater
      has_carparking
      house_type {
        id
      }
      # parent_houseId {
      #   id
      # }
      countryId {
        id
        name
      }
      provinceId {
        id
        name
      }
      districtId {
        id
        name
      }
      # sectorId {
      #   id
      #   name
      # }
    }
  }
`;

const styles = {
  list: {
    width: 340
  },
  label: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    marginBottom: 10,
    borderRadius: 8,
    padding: 5
  },

  inputStyle: {
    border: 0,
    borderRadius: 4,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#F5F8FA",
    // lineHeight: 2,
    fontSize: 12,
    "&:focus": {
      border: "1px solid #4C3AF7",
      backgroundColor: "#FEFEFF"
    }
  }
};
class UpdateHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house_heading: "",
      house_description: "",
      house_no: "",
      no_annex: "",
      no_bathrooms: "",
      no_bedrooms: "",
      dinning_room: "",
      isActive: false,
      has_in_kitchen: false,
      has_balcony: false,
      has_garden: false,
      has_carparking: false,
      house_type: "",
      parent_houseId: "",
      countryId: "",
      provinceId: "",
      districtId: "",
      sectorId: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      house_heading,
      house_description,
      house_no,
      no_annex,
      no_bathrooms,
      no_bedrooms,
      dinning_room,
      isActive,
      has_in_kitchen,
      has_balcony,
      has_garden,
      has_hotwater,
      has_carparking,
      house_type,
      parent_houseId,
      countryId,
      provinceId,
      districtId,
      sectorId
    } = this.state;
    const { classes, onClose, house } = this.props;
    let type = house.house_type;
    let c_name = house.countryId;
    let p_name = house.provinceId;
    let d_name = house.districtId;
    return (
      <Mutation
        mutation={UPDATE_HOUSE_MUTATION}
        refetchQueries={[{ query: GET_USER_HOUSES }]}
        variables={{
          id: this.props.house.id,
          house_heading,
          house_description,
          house_no,
          no_bathrooms: parseInt(no_bathrooms),
          no_bedrooms: parseInt(no_bedrooms),
          no_annex: parseInt(no_annex),
          dinning_room: parseInt(dinning_room),
          isActive,
          has_in_kitchen,
          has_balcony,
          has_garden,
          has_hotwater,
          has_carparking,
          house_type,
          // parent_houseId,
          countryId,
          provinceId,
          districtId
          // sectorId
        }}
      >
        {(updateHouse, { loading, error }) => {
          return (
            <Container
              flex={1}
              color="inherit"
              role="presentation"
              customStyles={{ width: 350 }}
            >
              <Container
                row
                color={"white"}
                customStyles={{
                  borderBottom: `0.8px solid ${fade("#393939", 0.1)}`,
                  padding: 7,
                  position: `-webkit-sticky`,
                  position: "sticky",
                  top: 0
                }}
              >
                <Container flex={1} color="transparent" row center left>
                  <IconButton style={{ padding: 10 }} onClick={onClose}>
                    <BackIcon style={{ fontSize: 20 }} />
                  </IconButton>
                </Container>
                <Container flex={1} color="transparent" row middle center>
                  <Text customStyles={{ fontWeight: "600" }}>
                    {house.house_heading}
                  </Text>
                </Container>
                <Container
                  flex={1}
                  color="transparent"
                  row
                  center
                  right
                ></Container>
              </Container>
              <form
                method="post"
                style={{ display: "flex", flexDirection: "column", flex: 1 }}
                onSubmit={async e => {
                  e.preventDefault();

                  await updateHouse();
                  // onClose();
                  this.setState({
                    house_heading: "",
                    house_description: "",
                    house_no: "",
                    no_annex: 0,
                    no_bathrooms: 0,
                    no_bedrooms: 0,
                    dinning_room: 0,
                    isActive: false,
                    has_in_kitchen: false,
                    has_balcony: false,
                    has_garden: false,
                    has_hotwater: false,
                    has_carparking: false,
                    house_type: "",
                    parent_houseId: "",
                    countryId: "",
                    provinceId: "",
                    districtId: "",
                    sectorId: ""
                  });
                }}
              >
                <Container
                  flex={1}
                  column
                  color="transparent"
                  customStyles={{ padding: 15 }}
                >
                  <Input
                    label="House heading"
                    type="text"
                    className={classes.inputStyle}
                    defaultValue={house.house_heading}
                    onChange={e => {
                      this.setState({ house_heading: e.target.value });
                    }}
                  />

                  <Container
                    column
                    customStyles={{ marginBottom: 10 }}
                    color="transparent"
                  >
                    <CaptionText customStyles={{marginBottom:5}}> Description</CaptionText>
                    <textarea
                      type="text"
                      className={classes.inputStyle}
                      defaultValue={house.house_description}
                      onChange={e => {
                        this.setState({ house_description: e.target.value });
                      }}
                    />
                  </Container>

                  <Input
                    label="House no."
                    type="text"
                    size="small"
                    className={classes.inputStyle}
                    defaultValue={house.house_no}
                    onChange={e => {
                      this.setState({ house_heading: e.target.value });
                    }}
                  />
                  <Container
                    column
                    customStyles={{ marginBottom: 10 }}
                    color="transparent"
                  >
                    <Typography variant="h6" noWrap>
                      House type
                    </Typography>
                    <select
                      className={classes.inputStyle}
                      value={house_type}
                      onChange={e => {
                        this.setState({ house_type: e.target.value });
                      }}
                    >
                      <option style={{ padding: 5 }}>
                        {type && type.house_type}
                      </option>
                      <HouseTypes>
                        {({ data }) => {
                          if (data) {
                            return (
                              <React.Fragment>
                                {data.houseTypes.map(type => (
                                  <option key={type.id} value={type.id}>
                                    {type.house_type}
                                  </option>
                                ))}
                              </React.Fragment>
                            );
                          }
                          return null;
                        }}
                      </HouseTypes>
                    </select>
                  </Container>
                  <Container row color="transparent">
                    <Input
                      label=" No. bedrooms"
                      type="number"
                      name="no_bedrooms"
                      defaultValue={house.no_bedrooms}
                      className={classes.inputStyle}
                      onChange={e => {
                        this.setState({ no_bedrooms: e.target.value });
                      }}
                    />

                    <Input
                      label=" No. bathrooms"
                      type="number"
                      name="no_bathrooms"
                      defaultValue={house.no_bathrooms}
                      className={classes.inputStyle}
                      onChange={e => {
                        this.setState({ no_bathrooms: e.target.value });
                      }}
                    />
                  </Container>

                  <Container row color="transparent">
                    <Input
                      label=" No. Annex"
                      type="number"
                      name="no_annex"
                      defaultValue={house.no_annex}
                      className={classes.inputStyle}
                      onChange={e => {
                        this.setState({ no_annex: e.target.value });
                      }}
                    />

                    <Input
                      label=" No. dinning rooms"
                      type="number"
                      name="dinning_room"
                      defaultValue={house.dinning_room}
                      className={classes.inputStyle}
                      onChange={e => {
                        this.setState({ dinning_room: e.target.value });
                      }}
                    />
                  </Container>
                  <Container row color="transparent">
                    <Container
                      flex={1}
                      row
                      customStyles={{ marginBottom: 10, marginRight: 10 }}
                    >
                      <input
                        type="checkbox"
                        // checked={has_garden}
                        defaultChecked={house.has_garden}
                        style={{ marginLeft: 10, marginRight: 5 }}
                        onChange={e => {
                          this.setState({ has_garden: !has_garden });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        Has garden
                      </Typography>
                    </Container>
                    <Container flex={1} row customStyles={{ marginBottom: 10 }}>
                      <input
                        type="checkbox"
                        defaultChecked={house.has_hotwater}
                        style={{ marginLeft: 10, marginRight: 5 }}
                        onChange={e => {
                          this.setState({ has_hotwater: !has_hotwater });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        has hot water
                      </Typography>
                    </Container>
                  </Container>

                  <Container row color="transparent">
                    <Container
                      flex={1}
                      row
                      customStyles={{ marginBottom: 10, marginRight: 10 }}
                    >
                      <input
                        type="checkbox"
                        style={{ marginLeft: 10, marginRight: 5 }}
                        defaultChecked={house.has_carparking}
                        onChange={e => {
                          this.setState({ has_carparking: !has_carparking });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        Has carparking
                      </Typography>
                    </Container>
                    <Container flex={1} row customStyles={{ marginBottom: 10 }}>
                      <input
                        type="checkbox"
                        defaultChecked={house.has_balcony}
                        style={{ marginLeft: 10, marginRight: 5 }}
                        onChange={e => {
                          this.setState({ has_balcony: !has_balcony });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        has balcony
                      </Typography>
                    </Container>
                  </Container>

                  <Container row color="transparent">
                    <Container
                      flex={1}
                      row
                      customStyles={{ marginBottom: 10, marginRight: 10 }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={house.has_in_kitchen}
                        style={{ marginLeft: 10, marginRight: 5 }}
                        onChange={e => {
                          this.setState({ has_in_kitchen: !has_in_kitchen });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        Has in kitchen
                      </Typography>
                    </Container>
                    <Container flex={1} row customStyles={{ marginBottom: 10 }}>
                      <input
                        type="checkbox"
                        style={{ marginLeft: 10, marginRight: 5 }}
                        defaultChecked={house.isActive}
                        onChange={e => {
                          this.setState({ isActive: !isActive });
                        }}
                      />
                      <Typography variant="h6" noWrap>
                        Has tenant
                      </Typography>
                    </Container>
                  </Container>

                  <Container row color="transparent" space="space-between">
                    <Container
                      column
                      customStyles={{ marginBottom: 10 }}
                      color="transparent"
                    >
                      <Typography variant="h6" noWrap>
                        Country
                      </Typography>
                      <select
                        value={countryId}
                        className={classes.inputStyle}
                        onChange={e => {
                          this.setState({ countryId: e.target.value });
                        }}
                      >
                        <option> {c_name && c_name.name}</option>
                        <Countries>
                          {({ data }) => {
                            if (data) {
                              return (
                                <React.Fragment>
                                  {data.countries.map(country => (
                                    <option key={country.id} value={country.id}>
                                      {country.name}
                                    </option>
                                  ))}
                                </React.Fragment>
                              );
                            }
                            return null;
                          }}
                        </Countries>
                      </select>
                    </Container>
                    <Container
                      column
                      customStyles={{ marginBottom: 10 }}
                      color="transparent"
                    >
                      <Typography variant="h6" noWrap>
                        Province
                      </Typography>
                      <select
                        className={classes.inputStyle}
                        value={provinceId}
                        onChange={e => {
                          this.setState({ provinceId: e.target.value });
                        }}
                      >
                        <option>{p_name && p_name.name}</option>
                        <Provinces id={countryId}>
                          {({ data }) => {
                            if (data) {
                              return (
                                <React.Fragment>
                                  {data.getProvincesByCountry.map(prov => (
                                    <option key={prov.id} value={prov.id}>
                                      {prov.name}
                                    </option>
                                  ))}
                                </React.Fragment>
                              );
                            }
                            return null;
                          }}
                        </Provinces>
                      </select>
                    </Container>
                    <Container
                      column
                      customStyles={{ marginBottom: 10 }}
                      color="transparent"
                    >
                      <Typography variant="h6" noWrap>
                        District
                      </Typography>
                      <select
                        className={classes.inputStyle}
                        value={districtId}
                        onChange={e => {
                          this.setState({ districtId: e.target.value });
                        }}
                      >
                        <option>{d_name && d_name.name}</option>
                        <Districts id={provinceId}>
                          {({ data }) => {
                            if (data) {
                              return (
                                <React.Fragment>
                                  {data.getDistrictsByProvince.map(dist => (
                                    <option key={dist.id} value={dist.id}>
                                      {dist.name}
                                    </option>
                                  ))}{" "}
                                </React.Fragment>
                              );
                            }
                            return null;
                          }}
                        </Districts>
                      </select>
                    </Container>
                    {/*  <Container
                      column
                      customStyles={{ marginBottom: 10 }}
                      color="transparent"
                    >
                      <Typography variant="h6" noWrap>
                        Sector
                      </Typography>
                      <select
                        className={classes.inputStyle}
                        value={sectorId}
                        onChange={e => {
                          this.setState({ sectorId: e.target.value });
                        }}
                      >
                        <option>{d_name && d_name.name}</option>
                        <Sectors id={districtId}>
                          {({ data }) => {
                            if (data) {
                              return (
                                <React.Fragment>
                                  {data.getSectorsByDistrict.map(sect => (
                                    <option key={sect.id} value={sect.id}>
                                      {sect.name}
                                    </option>
                                  ))}
                                </React.Fragment>
                              );
                            }
                            return null;
                          }}
                        </Sectors>
                      </select>
                        </Container>*/}
                  </Container>
                </Container>

                <Container
                  right
                  center
                  flex={0}
                  row
                  color={"white"}
                  space="space-between"
                  customStyles={{
                    position: `-webkit-sticky`,
                    position: "sticky",
                    bottom: 0,
                    marginTop: 15,
                    padding: 10,
                    borderTop: `0.8px solid ${fade("#393939", 0.1)}`,
                    width: "100%"
                  }}
                >
                  <PrimaryButton type="submit">
                    {loading ? (
                      <img src={loadingImg} style={{ width: 20, height: 20 }} />
                    ) : (
                      "Save Changes"
                    )}
                  </PrimaryButton>
                </Container>
              </form>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(styles)(UpdateHouse);
