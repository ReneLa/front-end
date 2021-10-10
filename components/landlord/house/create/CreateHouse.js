import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { GET_USER_HOUSES } from "../../../queryComponents/Houses";
import {
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  Divider,
  Avatar
} from "@material-ui/core";
import gql from "graphql-tag";
import AddIcon from "@material-ui/icons/Add";
import UploadIcon from "@material-ui/icons/CloudUpload";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import TagIcon from "@material-ui/icons/LocalOffer";
import { theme as customTheme } from "../../../Page";
import Countries from "../../../queryComponents/Countries";
import Provinces from "../../../queryComponents/Provinces";
import Districts from "../../../queryComponents/Districts";
// import Sectors from "../../queryComponents/Sectors";
import HouseTypes from "../../../queryComponents/HouseTypes";
import {
  Container,
  FlatButton,
  Input,
  TextInput,
  ActionButton,
  SubText,
  CaptionText
} from "../../../styledComponents";
import loadingImg from "../../../../public/static/126.gif";

const CREATE_HOUSE_MUTATION = gql`
  mutation CREATE_HOUSE_MUTATION(
    $house_heading: String!
    $house_description: String!
    $house_no: String!
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
    createHouse(
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

const ActionBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  align-content: center;
  border-radius: 2px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: 120
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
    minHeight: 60,
    fontSize: 12,
    "&:focus": {
      border: "1px solid #4C3AF7",
      backgroundColor: "#FEFEFF"
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  headerStyle: {
    fontWeight: "500",
    fontSize: 14
  },
  checkStyle: {
    fontWeight: "400",
    fontSize: 12
  }
});

const GreenCheckbox = withStyles({
  root: {
    color: "green",
    "&$checked": {
      color: "red"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);
class CreateHouse extends React.Component {
  state = {
    createdHouses: [],
    activeStep: 0,
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
    has_hotwater: false,
    has_carparking: false,
    house_type: "",
    parent_houseId: "",
    countryId: "",
    provinceId: "",
    districtId: "",
    sectorId: "",
    success: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  render() {
    const {
      activeStep,
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
      sectorId,
      createdHouses,
      success
    } = this.state;
    const { classes } = this.props;

    return (
      <Mutation
        mutation={CREATE_HOUSE_MUTATION}
        refetchQueries={[{ query: GET_USER_HOUSES }]}
        variables={{
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
        {(createHouse, { loading, error }) => {
          return (
            <Container flex={1}>
              <form
                method="post"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: 15,
                  position: "relative"
                }}
                onSubmit={async e => {
                  e.preventDefault();
                  await createHouse()
                    .then(res => {
                      this.setState({ success: true });
                    })
                    .catch(err => {
                      alert(err);
                    });

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
                  flex={false}
                  row
                  center
                  customStyles={{
                    paddingTop: 20,
                    paddingBottom: 20
                  }}
                >
                  <Container row center flex={1}>
                    <ActionBtn>
                      <AddIcon style={{ fontSize: 20 }} />
                    </ActionBtn>
                    <CaptionText>Assign to building</CaptionText>
                  </Container>
                  <Container row center flex={1}>
                    <ActionBtn>
                      <AddIcon style={{ fontSize: 20 }} />
                    </ActionBtn>
                    <CaptionText>Assign to tenant</CaptionText>
                  </Container>
                  <Container row center flex={1}>
                    <ActionBtn>
                      <TagIcon style={{ fontSize: 18 }} />
                    </ActionBtn>
                    <CaptionText>select tag</CaptionText>
                  </Container>
                </Container>

                <Divider style={{ height: "0.5px" }} />

                <Container
                  row
                  flex={false}
                  space="space-between"
                  customStyles={{ width: "100%", paddingTop: 20 }}
                >
                  <TextInput
                    label="House Heading"
                    placeholder="start typing ..."
                    type="text"
                    value={house_heading}
                    onChange={e => {
                      this.setState({ house_heading: e.target.value });
                    }}
                    customStyles={{ width: 200 }}
                  />
                  <TextInput
                    label="House Number"
                    type="text"
                    value={house_no}
                    onChange={e => {
                      this.setState({ house_no: e.target.value });
                    }}
                    customStyles={{ width: 200 }}
                  />
                </Container>
                <Container
                  column
                  flex={false}
                  customStyles={{ width: "100%", paddingTop: 20 }}
                >
                  <CaptionText customStyles={{ marginBottom: 5 }}>
                    Description
                  </CaptionText>
                  <textarea
                    type="text"
                    placeholder="start typing here..."
                    className={classes.inputStyle}
                    value={house_description}
                    onChange={e => {
                      this.setState({
                        house_description: e.target.value
                      });
                    }}
                  />
                </Container>
                <Container
                  column
                  flex={false}
                  customStyles={{
                    width: "100%",
                    paddingTop: 15,
                    paddingBottom: 5
                  }}
                >
                  <CaptionText
                    customStyles={{ color: "#323130", fontWeight: "600" }}
                  >
                    House Features
                  </CaptionText>
                  <Divider style={{ height: "0.5px" }} />
                </Container>
                <Container row flex={false} customStyles={{ width: "100%" }}>
                  <Container column flex={1}>
                    <TextInput
                      row
                      label="Bedrooms"
                      type="number"
                      placeholder="..."
                      value={no_bedrooms}
                      onChange={e => {
                        this.setState({ no_bedrooms: e.target.value });
                      }}
                      customStyles={{ width: 80 }}
                    />
                    <TextInput
                      label="Bathrooms"
                      type="number"
                      placeholder="..."
                      value={no_bathrooms}
                      onChange={e => {
                        this.setState({ no_bathrooms: e.target.value });
                      }}
                      row
                      customStyles={{ width: 80 }}
                    />
                    <TextInput
                      label="Annex"
                      type="number"
                      placeholder="..."
                      value={no_annex}
                      row
                      onChange={e => {
                        this.setState({ no_annex: e.target.value });
                      }}
                      customStyles={{ width: 80 }}
                    />
                    <TextInput
                      label="Dinning rooms"
                      type="number"
                      placeholder="..."
                      value={dinning_room}
                      onChange={e => {
                        this.setState({ dinning_room: e.target.value });
                      }}
                      row
                      customStyles={{ width: 80 }}
                    />
                  </Container>
                  <Container
                    flex={1}
                    column
                    center
                    customStyles={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 20
                    }}
                  >
                    <FormGroup column>
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={has_hotwater}
                            onChange={e => {
                              this.setState({ has_hotwater: !has_hotwater });
                            }}
                            name="hot_water"
                          />
                        }
                        label="Hot Water"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={has_carparking}
                            onChange={e => {
                              this.setState({
                                has_carparking: !has_carparking
                              });
                            }}
                            name="parking"
                          />
                        }
                        label="Has Parking"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={has_in_kitchen}
                            onChange={e => {
                              this.setState({
                                has_in_kitchen: !has_in_kitchen
                              });
                            }}
                            name="kitchen"
                          />
                        }
                        label="Inside Kitchen"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={has_balcony}
                            onChange={e => {
                              this.setState({ has_balcony: !has_balcony });
                            }}
                            name="balcony"
                          />
                        }
                        label="Has balcony"
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={has_garden}
                            onChange={e => {
                              this.setState({ has_garden: !has_garden });
                            }}
                            name="garden"
                          />
                        }
                        label="Has garden"
                      />
                    </FormGroup>
                  </Container>
                </Container>

                <Container
                  flex={false}
                  column
                  customStyles={{
                    width: "100%",
                    paddingTop: 10,
                    paddingBottom: 20
                  }}
                >
                  <CaptionText customStyles={{ marginBottom: 5 }}>
                    House profile
                  </CaptionText>
                  <Container row center>
                    <UploadIcon style={{}} />
                    <CaptionText customStyles={{ marginLeft: 10 }}>
                      upload your house image
                    </CaptionText>
                  </Container>
                </Container>
              </form>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(styles)(CreateHouse);
