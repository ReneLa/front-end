import {
  Dialog, DialogContent, DialogTitle
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import UploadIcon from "@material-ui/icons/AddPhotoAlternate";
import gql from "graphql-tag";
import React, { useState } from "react";
import { ApolloConsumer, Mutation } from "react-apollo";
import styled from "styled-components";
import { GET_COUNTRIES } from "../../../queryComponents/Countries";
import { GET_DISTRICTS_IN_PROVINCE } from "../../../queryComponents/Districts";
import { GET_USER_HOUSES } from "../../../queryComponents/landlord/LandlordHouses";
import { GET_LANDLORD_TENANTS } from "../../../queryComponents/landlord/LandlordTenants";
import { GET_PROVINCES_IN_COUNTRY } from "../../../queryComponents/Provinces";
import {
  ActionButton, CaptionText, Container, Dropdown, Input, OutlinedButton, PrimaryButton, SubHeader
} from "../../../styledComponents";


const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    // minWidth: 900,
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
  background-color: ${({ theme }) => theme.lightGrey};
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
const CREATE_TENANT_MUTATION = gql`
  mutation CREATE_TENANT_MUTATION(
    $firstName: String!
    $lastName: String!
    $no_people: Int
    $tenantType: String
    $isActive: Boolean
    $tel_no: String
    $sex: String
    $stay_duration: DateTime
    $comm_email: String
    $profileImage: String
    $houseId: ID
    $from_date: DateTime
    $to_date: DateTime
    $countryId: ID
    $provinceId: ID
    $districtId: ID
    $street: String
  ) {
    createTenant(
      firstName: $firstName
      lastName: $lastName
      no_people: $no_people
      tenantType: $tenantType
      isActive: $isActive
      tel_no: $tel_no
      sex: $sex
      stay_duration: $stay_duration
      comm_email: $comm_email
      profileImage: $profileImage
      houseId: $houseId
      from_date: $from_date
      to_date: $to_date
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId
      street: $street
    ) {
      id
    }
  }
`;

const Houses = ({ house, setHouse }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [housesList, setHousesList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTenants(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({ query: GET_USER_HOUSES });
    const houses = res.data.getUserHouses;
    setHousesList(changeObj(houses));
    console.log(houses);
  }

  const changeObj = (arr) => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.house_heading,
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
          customStyles={{ marginRight: 10, marginBottom: 10 }}
        >
          <Dropdown
            title={house.length > 0 ? house[0].value : "Add House"}
            anchorEl={anchorEl}
            handleOpen={(e) => getTenants(e, client)}
            handleClose={handleClose}
            selection={house}
            setSelection={setHouse}
            items={housesList}
            wrapperStyles={{ width: 100 }}
          />
        </Container>
      )}
    </ApolloConsumer>
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
        flex={0.5}
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
const CreateTenant = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [no_people, setNoPeople] = useState(null);
  const [comm_email, setCommEmail] = useState(null);
  const [tel_no, setTelNo] = useState(null);
  const [sex, setSex] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [tenantType, setTenantType] = useState(null);
  const [from_date, setFromDate] = useState(null);
  const [to_date, setToDate] = useState(null);
  const [stay_duration, setStayDuration] = useState(null);
  const [country, setCountry] = useState([]);
  const [district, setDistrict] = useState([]);
  const [province, setProvince] = useState([]);
  const [profileImage, setProfile] = useState(null);
  const [images, setImages] = useState([]);
  const [house, setHouse] = useState([]);
  const [street, setStreet] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substr(0, 10);
  return (
    <Mutation
      mutation={CREATE_TENANT_MUTATION}
      refetchQueries={[{ query: GET_LANDLORD_TENANTS }]}
      variables={{
        firstName,
        lastName,
        no_people: parseInt(no_people),
        tenantType,
        isActive: house.length > 0 ? true : false,
        tel_no,
        sex,
        stay_duration,
        comm_email,
        profileImage,
        houseId: house.length > 0 ? house[0].id : "",
        from_date,
        to_date,
        countryId: country.length > 0 ? country[0].id : "",
        provinceId: province.length > 0 ? province[0].id : "",
        districtId: district.length > 0 ? district[0].id : "",
        street,
      }}
    >
      {(createTenant, { loading, error }) => (
        <div>
          <ActionBtn onClick={handleClickOpen}>
            <AddIcon style={{ fontSize: 23, marginRight: 5 }} />
            Add Tenant
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
                <SubHeader> Add Tenant</SubHeader>
                <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
              </Container>
            </DialogTitle>
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                await createTenant()
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
                style={{ flex: 1 }}
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
                      Profile Information
                    </CaptionText>
                  </Container>
                  <Container color="transparent" row space="space-between">
                    <Container
                      flex={1}
                      customStyles={{ paddingRight: 10 }}
                      color="transparent"
                    >
                      <Input
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      flex={1}
                      customStyles={{ paddingLeft: 10 }}
                    >
                      <Input
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Container>
                  </Container>
                  <Container color="transparent" row space="space-between">
                    <Container
                      flex={1}
                      customStyles={{ paddingRight: 10 }}
                      color="transparent"
                    >
                      <Input
                        placeholder="E-mail"
                        type="email"
                        value={comm_email}
                        onChange={(e) => setCommEmail(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      flex={1}
                      customStyles={{ paddingLeft: 10 }}
                    >
                      <Input
                        placeholder="Tel no"
                        type="phone"
                        value={tel_no}
                        onChange={(e) => setTelNo(e.target.value)}
                      />
                    </Container>
                  </Container>
                  <Container color="transparent" row space="space-between">
                    <Container
                      flex={1}
                      customStyles={{ paddingRight: 10 }}
                      color="transparent"
                    >
                      <Input
                        placeholder="No. of family"
                        type="number"
                        value={no_people}
                        onChange={(e) => setNoPeople(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      flex={1}
                      customStyles={{ paddingLeft: 10 }}
                    >
                      <Input
                        placeholder="Sex"
                        type="text"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                      />
                    </Container>
                  </Container>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    >
                      Duration of stay
                    </CaptionText>
                  </Container>
                  <Container row color="transparent">
                    <Input
                      type="date"
                      label="From"
                      defaultValue={date}
                      value={from_date}
                      onChange={(e) => setFromDate(e.target.value)}
                      style={{ marginRight: 20 }}
                    />
                    <Input
                      type="date"
                      label="To.."
                      defaultValue={date}
                      value={to_date}
                      onChange={(e) => setToDate(e.target.value)}
                    />
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
                        marginTop: 10,
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
                    center
                    // space="space-between"
                    color="transparent"
                  >
                    <Container flex={0.3} column color="transparent">
                      <Houses house={house} setHouse={setHouse} />
                    </Container>
                    <CaptionText customStyles={{ color: "#E74C3C" }}>
                      you need to atleast have one house
                    </CaptionText>
                  </Container>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Profile picture
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
                          opacity: isUploading ? 0.5 : 1,
                        }}
                      >
                        Uploading..
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton
                        type="submit"
                        customStyles={{
                          pointerEvents: house.length <= 0 ? "none" : "auto",
                          opacity: house.length <= 0 ? 0.5 : 1,
                        }}
                      >
                        {loading ? "saving" : "Save Tenant"}
                      </PrimaryButton>
                    )}
                  </Container>
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      )}
    </Mutation>
  );
};

export default CreateTenant;
