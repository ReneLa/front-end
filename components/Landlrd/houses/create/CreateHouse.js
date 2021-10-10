import React, { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ApolloConsumer } from "react-apollo";
import {
  Container,
  ActionButton,
  Text,
  Input,
  TextInput,
  SubText,
  OutlinedButton,
  SubHeader,
  CaptionText,
  PrimaryButton,
  Dropdown,
} from "../../../styledComponents";
import UploadIcon from "@material-ui/icons/AddPhotoAlternate";
import HouseIcon from "@material-ui/icons/Home";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
} from "@material-ui/core";
import { GET_HOUSE_TYPES } from "../../../queryComponents/HouseTypes";
import { GET_COUNTRIES } from "../../../queryComponents/Countries";
import { GET_PROVINCES_IN_COUNTRY } from "../../../queryComponents/Provinces";
import { GET_DISTRICTS_IN_PROVINCE } from "../../../queryComponents/Districts";
import { GET_LANDLORD_TENANTS } from "../../../queryComponents/landlord/LandlordTenants";
import { GET_USER_HOUSES } from "../../../queryComponents/landlord/LandlordHouses";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import { PAGINATION_QUERY } from "..";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    minWidth: 900,
    borderRadius: 2,
    // position: "relative",
    backgroundColor: "#F2F3F4",
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "#F2F3F4",
  },
  dialogActions: {
    // position: "absolute",
    width: "100%",
    // bottom: 0,
    padding: 0,
    margin: 0,
    border: "none",
    // backgroundColor: "white"
  },
  dialogContentStyle: {
    display: "flex",

    flexDirection: "row",
    marginRight: 10,
    height: "100%",
    backgroundColor: "white",
    border: "none",
    // backgroundColor: "#F2F3F4",
  },
  avatarStyle: {
    position: "relative",
    width: theme.spacing(12),
    height: theme.spacing(10),
    borderRadius: 5,
    backgroundColor: "#F3F2F1",
  },
  inputStyle: {
    border: 0,
    borderRadius: 1,
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
      backgroundColor: "#FEFEFF",
    },
  },
}));

const ActionBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.btnPrimary};
  color: white;
  &:hover {
    color: #d1f2eb;
  }
`;
const CloseBtn = styled(ActionButton)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1304;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 6px;
  padding-left: 6px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.bgPrimary};
`;

const CancelBtn = styled(PrimaryButton)`
  border: none;
  color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;
const UploadBtn = styled(OutlinedButton)`
  display: flex;
  height: 60px;
  width: 100%;
  border: ${({ theme }) => `1px dashed ${theme.btnPrimary}`};
`;
const CREATE_HOUSE_MUTATION = gql`
  mutation CREATE_HOUSE_MUTATION(
    $house_heading: String!
    $house_no: String!
    $house_description: String!
    $house_type: ID
    $parking: Int
    $no_bedrooms: Int
    $no_bathrooms: Int
    $flooring: String
    $appliances: [Appliances]
    $utilities: [Utilities]
    $ext_ft: [Ext_features]
    $profileImage: String
    $countryId: ID
    $provinceId: ID
    $districtId: ID
  ) {
    createHouse(
      house_heading: $house_heading
      house_no: $house_no
      house_description: $house_description
      house_type: $house_type
      parking: $parking
      no_bedrooms: $no_bedrooms
      no_bathrooms: $no_bathrooms
      flooring: $flooring
      appliances: $appliances
      utilities: $utilities
      ext_ft: $ext_ft
      profileImage: $profileImage
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId
    ) {
      id
      house_heading
      house_description
      house_no
    }
  }
`;

const HouseTypesList = ({ house_type, setHouseType }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleClickOpen(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({ query: GET_HOUSE_TYPES });
    const { houseTypes } = res.data;
    setOptions(changeObj(houseTypes));
  }
  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.house_type,
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
        <Dropdown
          title={house_type.length > 0 ? house_type[0].value : "choose"}
          anchorEl={anchorEl}
          handleOpen={(e) => handleClickOpen(e, client)}
          handleClose={handleClose}
          selection={house_type}
          setSelection={setHouseType}
          items={options}
          wrapperStyles={{ width: 150 }}
        />
      )}
    </ApolloConsumer>
  );
};

const ApplianceList = ({ list, setList }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState([
    { id: 1, value: "Dishwasher" },
    { id: 2, value: "Refrigrator" },
    { id: 3, value: "Microwave" },
    { id: 4, value: "Garbage_disposal" },
    { id: 5, value: "Oven" },
  ]);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const valuesList = () => {
    return (
      <div>
        {list.map((lst) => (
          <span key={lst.id}>{lst.value + ", "}</span>
        ))}
      </div>
    );
  };

  return (
    <Dropdown
      title={list.length > 0 ? valuesList() : "choose"}
      anchorEl={anchorEl}
      handleOpen={handleClickOpen}
      multiSelect
      handleClose={handleClose}
      selection={list}
      setSelection={setList}
      items={options}
      wrapperStyles={{ width: 200 }}
    />
  );
};

const UtilitiesList = ({ utilities, setUtilities }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState([
    { id: 1, value: "Internet" },
    { id: 2, value: "TV" },
    { id: 3, value: "Heater" },
  ]);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const valuesList = () => {
    return (
      <div>
        {utilities.map((lst) => (
          <span key={lst.id}>{lst.value + ", "}</span>
        ))}
      </div>
    );
  };

  return (
    <Dropdown
      title={utilities.length > 0 ? valuesList() : "choose"}
      anchorEl={anchorEl}
      handleOpen={handleClickOpen}
      multiSelect
      handleClose={handleClose}
      selection={utilities}
      setSelection={setUtilities}
      items={options}
      wrapperStyles={{ width: 200 }}
    />
  );
};
const ExtDetails = ({ ext_details, setExtDetails }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState([
    { id: 1, value: "Toilet" },
    { id: 2, value: "Garden" },
    { id: 3, value: "Fenced_yard" },
    { id: 4, value: "Balcony" },
  ]);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const valuesList = () => {
    return (
      <div>
        {ext_details.map((lst) => (
          <span key={lst.id}>{lst.value + ", "}</span>
        ))}
      </div>
    );
  };

  return (
    <Dropdown
      title={ext_details.length > 0 ? valuesList() : "choose"}
      anchorEl={anchorEl}
      handleOpen={handleClickOpen}
      multiSelect
      handleClose={handleClose}
      selection={ext_details}
      setSelection={setExtDetails}
      items={options}
      wrapperStyles={{ width: 200 }}
    />
  );
};

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
            wrapperStyles={{ width: 150 }}
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

const Tenants = ({ tenant, setTenant }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tenantsList, setTenantsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTenants(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({ query: GET_LANDLORD_TENANTS });
    const tenants = res.data.getLandlordTenants;
    setTenantsList(changeObj(tenants));
  }

  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.firstName,
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
            title={tenant.length > 0 ? tenant[0].value : "Add Tenant"}
            anchorEl={anchorEl}
            handleOpen={(e) => getTenants(e, client)}
            handleClose={handleClose}
            selection={tenant}
            setSelection={setTenant}
            items={tenantsList}
            wrapperStyles={{ width: 100 }}
          />
        </Container>
      )}
    </ApolloConsumer>
  );
};

const UploadImageContainer = ({
  profileImg,
  setProfile,
  images,
  setImages,
  isUploading,
  setIsUploading,
}) => {
  const [img_names, setNames] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const uploadProfile = async (e) => {
    setIsUploading(true);
    const files = e.target.files;

    setNames([...img_names, files[0].name]);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "house_assist");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    if (file) {
      setProfile(file.secure_url);
      setLoaded(true);
      setIsUploading(false);
    }
  };

  return (
    <React.Fragment>
      <Container
        flex={0}
        row
        center
        color="transparent"
        customStyles={{ paddingTop: 10, paddingBottom: 5 }}
      >
        <Container
          row
          center
          middle
          flex={0}
          customStyles={{ padding: 3, marginRight: 5 }}
        >
          <UploadIcon style={{ fontSize: 25 }} />
        </Container>
        <Container flex={1} row center color="transparent">
          {img_names.map((img, i) => (
            <CaptionText
              key={i}
              customStyles={{ marginRight: 4, color: "black", fontSize: 13 }}
            >
              {img}
            </CaptionText>
          ))}
        </Container>
      </Container>
      <Container
        flex={1}
        row
        customStyles={{
          pointerEvents: loaded === 0 ? "none" : "auto",
        }}
      >
        <UploadBtn type="button">
          <Input
            accept="image/*"
            id="text-button-file"
            // multiple
            type="file"
            onChange={uploadProfile}
            style={{ marginLeft: 10, width: 200 }}
          />
        </UploadBtn>
      </Container>
    </React.Fragment>
  );
};

const CreateHouse = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [isUploading, setIsUploading] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [house_heading, setHouseHeading] = useState(null);
  const [house_type, setHouseType] = useState([]);
  const [house_no, setHouseNo] = useState(null);
  const [house_description, setHouseDesc] = useState(null);
  const [parking, setParking] = useState(null);
  const [no_bathrooms, setNoBathrooms] = useState(null);
  const [no_bedrooms, setNoBedrooms] = useState(null);
  const [flooring, setFloor] = useState(null);

  const [applianceList, setApplianceList] = useState([]);
  const [utilities, setUtilities] = useState([]);
  const [ext_details, setExtDetails] = useState([]);
  const [tenant, setTenant] = useState([]);
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [province, setProvince] = useState([]);
  const [street, setStreet] = useState("");
  const [profileImage, setProfile] = useState(null);
  const [images, setImages] = useState([]);

  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      newArr.push(item.value);
    });
    return newArr;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setHouseHeading(null);
    setHouseType([]);
    setHouseNo(null);
    setHouseDesc(null);
    setParking(null);
    setNoBathrooms(null);
    setNoBedrooms(null);
    setFloor(null);

    setApplianceList([]);
    setUtilities([]);
    setExtDetails([]);
    setTenant([]);
    setCountry([]);
    setDistrict([]);
    setProvince([]);
    setStreet("");
    setProfile(null);
    setImages([]);
  };
  return (
    <Mutation
      mutation={CREATE_HOUSE_MUTATION}
      refetchQueries={[{ query: GET_USER_HOUSES }, { query: PAGINATION_QUERY }]}
      variables={{
        house_heading,
        house_no,
        house_description,
        house_type: house_type.length > 0 ? house_type[0].id : "",
        parking: parseInt(parking),
        no_bedrooms: parseInt(no_bathrooms),
        no_bathrooms: parseInt(no_bedrooms),
        flooring,
        appliances: changeObj(applianceList),
        utilities: changeObj(utilities),
        ext_ft: changeObj(ext_details),
        profileImage,
        countryId: country.length > 0 ? country[0].id : "",
        provinceId: province.length > 0 ? province[0].id : "",
        districtId: district.length > 0 ? district[0].id : "",
      }}
    >
      {(createHouse, { loading, error }) => (
        <div>
          <ActionBtn
            onClick={handleClickOpen}
            // customStyles={{ backgroundColor: "blue" }}
          >
            <AddIcon style={{ fontSize: 23, marginRight: 5 }} />
            Create House
          </ActionBtn>
          <Dialog
            fullScreen={fullScreen}
            onClose={handleClose}
            classes={{
              paper: classes.dialogPaper,
            }}
            aria-labelledby="customized-dialog-title"
            open={open}
            scroll={scroll}
          >
            <DialogTitle
              id="scroll-dialog-title"
              classes={{
                root: classes.dialogActionStyle,
              }}
            >
              <Container
                row
                center
                color="transparent"
                space="space-between"
                customStyles={{
                  paddingTop: 15,
                  paddingBottom: 7,
                  paddingRight: 10,
                  paddingLeft: 20,
                }}
              >
                <SubHeader> Create House</SubHeader>
                <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
              </Container>
            </DialogTitle>
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                await createHouse()
                  .then((res) => {
                    handleClose();
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <DialogContent
                dividers={scroll === "body"}
                style={{ flex: 0.6 }}
                classes={{
                  root: classes.dialogContentStyle,
                }}
              >
                <div>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      House Details
                    </CaptionText>
                  </Container>
                  <Container color="transparent" row space="space-between">
                    <Container
                      flex={1}
                      customStyles={{ paddingRight: 10 }}
                      color="transparent"
                    >
                      <Input
                        label="Title"
                        placeholder="eg. desired name"
                        type="text"
                        value={house_heading}
                        onChange={(e) => setHouseHeading(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      flex={1}
                      customStyles={{ paddingLeft: 10 }}
                    >
                      <Input
                        label="House number"
                        placeholder="eg. #A457"
                        type="text"
                        value={house_no}
                        onChange={(e) => setHouseNo(e.target.value)}
                      />
                    </Container>
                  </Container>
                  <Container
                    color="transparent"
                    column
                    flex={false}
                    customStyles={{ width: "100%" }}
                  >
                    <CaptionText
                      customStyles={{ marginBottom: 5, color: "#323130" }}
                    >
                      Description
                    </CaptionText>
                    <textarea
                      type="text"
                      placeholder="start typing here..."
                      className={classes.inputStyle}
                      value={house_description}
                      onChange={(e) => setHouseDesc(e.target.value)}
                    />
                  </Container>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginTop: 20,
                        marginBottom: 10,
                      }}
                    >
                      Facts and Features
                    </CaptionText>
                  </Container>
                  <Container row space="space-between" color="transparent">
                    <Container flex={0.3} column color="transparent">
                      <CaptionText
                        customStyles={{ marginBottom: 5, color: "#323130" }}
                      >
                        House type
                      </CaptionText>
                      <HouseTypesList
                        house_type={house_type}
                        setHouseType={setHouseType}
                      />
                    </Container>
                    <Input
                      label="year built"
                      type="date"
                      placeholder="eg.2011"
                      style={{ width: 150 }}
                      // value={house_heading}
                      // onChange={e => {
                      //   this.setState({ house_heading: e.target.value });
                      // }}
                    />
                    <Input
                      label="Parking"
                      placeholder="eg. 3 cars"
                      type="number"
                      style={{ width: 100 }}
                      value={parking}
                      onChange={(e) => setParking(e.target.value)}
                    />
                  </Container>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Interior details
                    </CaptionText>
                  </Container>
                  <Container
                    row
                    color="transparent"
                    customStyles={{ marginBottom: 10 }}
                  >
                    <Container
                      color="transparent"
                      customStyles={{ marginRight: 15 }}
                    >
                      <TextInput
                        label="no. bedrooms"
                        placeholder="0"
                        type="number"
                        customStyles={{ textAlign: "center", width: 50 }}
                        row
                        value={no_bedrooms}
                        onChange={(e) => setNoBedrooms(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      customStyles={{ marginRight: 15 }}
                    >
                      <TextInput
                        label="no. bathrooms"
                        type="number"
                        placeholder="0"
                        row
                        customStyles={{ textAlign: "center", width: 50 }}
                        value={no_bathrooms}
                        onChange={(e) => setNoBathrooms(e.target.value)}
                      />
                    </Container>
                    <Container color="transparent">
                      <TextInput
                        label="Flooring"
                        placeholder="eg. wooden floor"
                        type="text"
                        row
                        customStyles={{ width: 140 }}
                        value={flooring}
                        onChange={(e) => setFloor(e.target.value)}
                      />
                    </Container>
                  </Container>
                  <Container
                    row
                    color="transparent"
                    customStyles={{ marginBottom: 15 }}
                  >
                    <Container
                      column
                      color="transparent"
                      customStyles={{ marginRight: 10 }}
                    >
                      <CaptionText
                        customStyles={{ marginBottom: 5, color: "#323130" }}
                      >
                        Appliances
                      </CaptionText>
                      <ApplianceList
                        list={applianceList}
                        setList={setApplianceList}
                      />
                    </Container>
                    <Container column color="transparent">
                      <CaptionText
                        customStyles={{ marginBottom: 5, color: "#323130" }}
                      >
                        Utilities
                      </CaptionText>
                      <UtilitiesList
                        utilities={utilities}
                        setUtilities={setUtilities}
                      />
                    </Container>
                  </Container>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Exterior details
                    </CaptionText>
                  </Container>
                  <Container row space="space-between" color="transparent">
                    <Container flex={0.3} column color="transparent">
                      <ExtDetails
                        ext_details={ext_details}
                        setExtDetails={setExtDetails}
                      />
                    </Container>
                  </Container>

                  <Container
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
                  </Container>
                </div>
              </DialogContent>
              <div
                style={{
                  flex: 0.4,

                  paddingBottom: 10,
                }}
              >
                <Container
                  flex={0}
                  color="white"
                  customStyles={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Container flex={0} row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Add House Tenant
                    </CaptionText>
                  </Container>

                  <Container
                    flex={0}
                    row
                    space="space-between"
                    color="transparent"
                  >
                    <Container flex={0.3} column color="transparent">
                      <Tenants tenant={tenant} setTenant={setTenant} />
                    </Container>
                  </Container>
                  <Container
                    flex={0}
                    row
                    center
                    color="transparent"
                    customStyles={{ marginTop: 20 }}
                  >
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Upload house images
                    </CaptionText>
                  </Container>

                  <UploadImageContainer
                    isUploading={isUploading}
                    setIsUploading={setIsUploading}
                    profileImg={profileImage}
                    setProfile={setProfile}
                    images={images}
                    setImages={setImages}
                  />
                  <Container
                    color="transparent"
                    right
                    center
                    row
                    flex={false}
                    customStyles={{
                      paddingTop: 30,

                      paddingBottom: 5,
                    }}
                  >
                    {isUploading ? (
                      <PrimaryButton
                        type="submit"
                        customStyles={{
                          pointerEvents: isUploading ? "none" : "auto",
                        }}
                      >
                        Uploading..
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        type="submit"
                        customStyles={{
                          pointerEvents: isUploading ? "none" : "auto",
                        }}
                      >
                        {loading ? "saving" : "Save House"}
                      </PrimaryButton>
                    )}
                  </Container>
                </Container>
              </div>
            </form>
          </Dialog>
        </div>
      )}
    </Mutation>
  );
};

export default CreateHouse;
