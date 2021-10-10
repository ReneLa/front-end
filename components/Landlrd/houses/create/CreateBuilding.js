import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  ActionButton,
  IconButton,
  Text,
  Input,
  TextInput,
  SubText,
  CaptionText,
  PrimaryButton,
  Header,
  SubHeader,
} from "../../../styledComponents";
import gql from "graphql-tag";
import { ApolloConsumer, Mutation } from "react-apollo";
import { useMutation } from "@apollo/react-hooks";
import userPhoto from "../../../../public/static/sandy.jpeg";
import CheckIcon from "@material-ui/icons/Done";
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
  Divider,
} from "@material-ui/core";
import ParentHouses, {
  GET_USER_PARENT_HOUSES,
} from "../../../queryComponents/ParentHouses";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Add from "@material-ui/icons/Add";
import loadingImg from "../../../../public/static/126.gif";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    width: 525,
    borderRadius: 2,
    backgroundColor: "white",
    position: "relative",
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "white",
  },
  dialogActions: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 10,
    margin: 0,
    border: "none",
    // backgroundColor: "red",
  },
  dialogContentStyle: {
    display: "flex",
    padding: 0,
    border: "none",
    backgroundColor: "white",
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 1,
    backgroundColor: "#F3F2F1",
  },
  buildingImageStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 2,
    marginRight: 20,
    border: "1.5px dashed #F3F2F1",
    backgroundColor: "#F3F2F1",
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
  /* position: absolute;
  top: 0;
  right: 0; */
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

const AddBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const CancelBtn = styled(PrimaryButton)`
  border: none;
  color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
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
const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  /* background-color: red; */
`;

const CREATE_PARENT_HOUSE_MUTATION = gql`
  mutation CREATE_PARENT_HOUSE_MUTATION($building_name: String!) {
    createParentHouse(building_name: $building_name) {
      id
      building_name
      address
      image
    }
  }
`;

const ADD_HOUSE_TO_BUILDING = gql`
  mutation AddHouseToBuilding($houseId: ID!, $buildingId: ID!) {
    addHouseToBuilding(houseId: $houseId, buildingId: $buildingId) {
      id
      house_heading
    }
  }
`;

const BuildingsContainer = ({ addTo, buildings, buildingList, loading }) => {
  const classes = useStyles();

  const handleClick = (building) => {
    if (!buildings.some((current) => current.id === building.id)) {
      addTo([building]);
    } else {
      let buildingAfterRemoval = buildings;
      buildingAfterRemoval = buildingAfterRemoval.filter(
        (current) => current.id !== building.id
      );
      addTo([...buildingAfterRemoval]);
    }
  };
  const isBuildingSelected = (building) => {
    if (buildings.some((current) => current.id === building.id)) {
      return true;
    }
    return false;
  };
  return (
    <Container
      column
      customStyles={{ padding: "10px 40px" }}
      color="transparent"
    >
      {loading && (
        <Container flex={1} middle center column color="transparent">
          <img src={loadingImg} style={{ width: 20, height: 20 }} />
        </Container>
      )}
      {!loading &&
        buildingList &&
        buildingList.map((build) => {
          return (
            <Container flex={false} key={build.id} column color="transparent">
              <Container
                color="transparent"
                row
                center
                flex={1}
                customStyles={{
                  paddingTop: 15,
                  paddingBottom: 5,
                  paddingLeft: 0,
                  paddingRight: 5,
                }}
              >
                <Container row flex={1} center color="transparent">
                  {build.image === null ? (
                    <Avatar src={build.image} className={classes.avatarStyle}>
                      <SubHeader>{build.building_name.charAt(0)}</SubHeader>
                    </Avatar>
                  ) : (
                    <Avatar src={build.image} className={classes.avatarStyle} />
                  )}

                  <Container column flex={1} color="transparent">
                    <SubHeader
                      customStyles={{
                        fontSize: 13,
                        fontWeight: "600",
                        marginBottom: 0,
                        marginLeft: 10,
                      }}
                    >
                      {build.building_name}
                    </SubHeader>
                  </Container>
                </Container>

                <AddBtn onClick={() => handleClick(build)}>
                  {isBuildingSelected(build) ? (
                    <CheckIcon style={{ fontSize: 18, color: "green" }} />
                  ) : (
                    <Add style={{ fontSize: 18 }} />
                  )}
                </AddBtn>
              </Container>
              <Divider style={{ height: "1px" }} />
            </Container>
          );
        })}
    </Container>
  );
};

const CreateBuilding = ({ house }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [building_name, setBuildingName] = useState(null);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isloading, setLoading] = useState(false);
  const [addToBuilding, setAddToBuilding] = useState([]);
  const [buildingList, setBuildingList] = useState(null);

  const onCompletion = () => {
    setOpen(false);
  };
  const [addTo, { data, loading }] = useMutation(ADD_HOUSE_TO_BUILDING);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function getBuildings(client) {
    setLoading(true);
    const res = await client.query({ query: GET_USER_PARENT_HOUSES });
    const buildings = res.data.getUserParentHouses;
    console.log(buildings);
    setBuildingList(buildings);
    setLoading(false);
  }
  const isAdded = (buildings) => {
    const { parent_houseId } = house;

    if (
      parent_houseId !== null &&
      buildings.some((current) => current.id === parent_houseId.id)
    ) {
      return true;
    }
    return false;
  };
  return (
    <ParentHouses>
      {({ data }) => {
        if (data) {
          const parentBuildings = data.getUserParentHouses;

          return (
            <div>
              {isAdded(parentBuildings) ? (
                <SubHeader>Added</SubHeader>
              ) : (
                <IconButton
                  onClick={(e) => {
                    handleClickOpen();
                  }}
                  customStyles={{
                    backgroundColor: "#0078D4",
                    height: 33,
                    width: 33,
                  }}
                >
                  <Add style={{ fontSize: 18, color: "white" }} />
                </IconButton>
              )}

              <Dialog
                fullScreen={fullScreen}
                onClose={(e) => {
                  handleClose();
                }}
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
                    right
                    color="transparent"
                    space="space-between"
                    customStyles={{
                      paddingTop: 15,
                      paddingBottom: 7,
                      paddingRight: 10,
                      paddingLeft: 20,
                    }}
                  >
                    <Container
                      color="transparent"
                      column
                      row
                      center
                      left
                      flex={1}
                    >
                      <SubHeader>Add House</SubHeader>
                    </Container>
                    <CloseBtn onClick={handleClose}>
                      <CloseIcon style={{ fontSize: 23 }} />
                    </CloseBtn>
                  </Container>
                </DialogTitle>
                <DialogContent
                  classes={{
                    root: classes.dialogContentStyle,
                  }}
                >
                  <Container
                    flex={1}
                    column
                    color="transparent"
                    customStyles={{ paddingTop: 10, paddingBottom: 10 }}
                  >
                    <Container
                      customStyles={{ paddingLeft: "40px" }}
                      row
                      center
                      color="transparent"
                    >
                      {house.profileImage === null ? (
                        <Avatar
                          src={house.profileImage}
                          className={classes.avatarStyle}
                        >
                          <Header>{house.house_heading.charAt(0)}</Header>
                        </Avatar>
                      ) : (
                        <Avatar
                          src={house.profileImage}
                          className={classes.avatarStyle}
                        />
                      )}

                      <CaptionText customStyles={{ marginLeft: 20 }}>
                        You are adding Barcelona
                      </CaptionText>
                    </Container>
                    <Mutation
                      mutation={CREATE_PARENT_HOUSE_MUTATION}
                      variables={{ building_name }}
                    >
                      {(createParentHouse, { loading, error }) => {
                        return (
                          <Form
                            method="post"
                            onSubmit={async (e) => {
                              e.preventDefault();

                              await createParentHouse().then((res) => {
                                const newBuilding = res.data.createParentHouse;
                                setBuildingList([...buildingList, newBuilding]);
                                setBuildingName(null);
                              });
                            }}
                          >
                            <fieldset
                              style={{
                                display: "flex",
                                paddingRight: 0,
                                paddingLeft: 0,
                                paddingBottom: 10,
                                paddingTop: 30,
                                border: "none",
                                flex: 1,
                              }}
                            >
                              <Container row color="transparent" flex={1}>
                                <Container
                                  flex={1}
                                  column
                                  middle
                                  color="transparent"
                                  customStyles={{ paddingRight: 10 }}
                                >
                                  <Input
                                    placeholder="Create a new building"
                                    type="text"
                                    value={building_name}
                                    onChange={(e) =>
                                      setBuildingName(e.target.value)
                                    }
                                  />
                                </Container>
                                <Container
                                  flex={false}
                                  column
                                  color="transparent"
                                  customStyles={{ paddingTop: 5 }}
                                >
                                  <PrimaryButton
                                    type="submit"
                                    customStyles={{
                                      pointerEvents:
                                        building_name === null
                                          ? "none"
                                          : "auto",
                                      opacity:
                                        building_name === null ? 0.3 : 1.0,
                                    }}
                                  >
                                    {loading ? "CREATING" : "CREATE"}
                                  </PrimaryButton>
                                </Container>
                              </Container>
                            </fieldset>
                          </Form>
                        );
                      }}
                    </Mutation>
                    <BuildingsContainer
                      loading={isloading}
                      addTo={setAddToBuilding}
                      buildings={addToBuilding}
                      buildingList={parentBuildings}
                    />
                  </Container>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                  <PrimaryButton
                    customStyles={{
                      pointerEvents:
                        addToBuilding.length <= 0 ? "none" : "auto",
                      opacity: addToBuilding.length <= 0 ? 0.4 : 1.0,
                    }}
                    onClick={() => {
                      addTo({
                        variables: {
                          houseId: house.id,
                          buildingId: addToBuilding[0].id,
                        },
                        onCompleted: onCompletion,
                      });
                    }}
                  >
                    {loading ? "SAVING" : "SAVE"}
                  </PrimaryButton>
                </DialogActions>
              </Dialog>
            </div>
          );
        }
        return null;
      }}
    </ParentHouses>
  );
};

export default CreateBuilding;
