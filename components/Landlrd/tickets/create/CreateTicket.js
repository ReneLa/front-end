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

import { GET_LANDLORD_TICKETS } from "../../../queryComponents/landlord/LandlordTickets";
import { GET_USER_HOUSES } from "../../../queryComponents/landlord/LandlordHouses";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    width: 550,
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

const CREATE_TICKET_MUTATION = gql`
  mutation CREATE_TICKET_MUTATION(
    $title: String!
    $description: String!
    $reported_way: String
    $owner_review: String
    $houseId: ID
  ) {
    createTicket(
      title: $title
      description: $description
      reported_way: $reported_way
      owner_review: $owner_review
      houseId: $houseId
    ) {
      id
    }
  }
`;

const Reported = ({ reportWay, setReportWay }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState([
    { id: 1, value: "System" },
    { id: 2, value: "Phone" },
    { id: 3, value: "Email" },
    { id: 4, value: "In person" },
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
        {reportWay.map((lst) => (
          <span key={lst.id}>{lst.value + ", "}</span>
        ))}
      </div>
    );
  };

  return (
    <Dropdown
      title={reportWay.length > 0 ? valuesList() : "choose"}
      anchorEl={anchorEl}
      handleOpen={handleClickOpen}
      handleClose={handleClose}
      selection={reportWay}
      setSelection={setReportWay}
      items={options}
      wrapperStyles={{ width: 120 }}
    />
  );
};

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

const CreateTenant = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [reportWay, setReportWay] = useState([]);
  const [scroll, setScroll] = useState("paper");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [title, setTitle] = useState(null);
  const [description, setDesc] = useState(null);
  const [owner_review, setOwnerReview] = useState(null);
  const [house, setHouse] = useState([]);

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
      mutation={CREATE_TICKET_MUTATION}
      refetchQueries={[{ query: GET_LANDLORD_TICKETS }]}
      variables={{
        title,
        description,
        reported_way: reportWay.length > 0 ? reportWay[0].value : "",
        owner_review,
        houseId: house.length > 0 ? house[0].id : "",
      }}
    >
      {(createTicket, { loading, error }) => (
        <div>
          <ActionBtn onClick={handleClickOpen}>Create Ticket</ActionBtn>
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
                <SubHeader> Create Ticket</SubHeader>
                <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
              </Container>
            </DialogTitle>
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                await createTicket()
                  .then((res) => {
                    handleClose();
                    // console.log(res);
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
                <div style={{ flex: 1, width: "100%" }}>
                  <Container row center color="transparent">
                    <CaptionText
                      customStyles={{
                        color: "#323130",
                        fontWeight: "600",
                        marginBottom: 10,
                      }}
                    >
                      Ticket Information
                    </CaptionText>
                  </Container>
                  <Container color="transparent" row space="space-between">
                    <Container
                      flex={0.7}
                      customStyles={{ paddingRight: 10 }}
                      color="transparent"
                    >
                      <Input
                        placeholder="Ticket title.."
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Container>
                    <Container
                      color="transparent"
                      flex={0.3}
                      customStyles={{ paddingLeft: 10 }}
                    />
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
                      value={description}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </Container>
                  <Container
                    row
                    flex={1}
                    customStyles={{ marginTop: 10 }}
                    color="transparent"
                  >
                    <Container
                      column
                      flex={0.5}
                      color="transparent"
                      customStyles={{ paddingRight: 5 }}
                    >
                      <Container row center color="transparent">
                        <CaptionText
                          customStyles={{
                            color: "#323130",
                            fontWeight: "600",
                            marginBottom: 8,
                            marginTop: 15,
                          }}
                        >
                          Landlord Review
                        </CaptionText>
                      </Container>
                      <Container
                        color="transparent"
                        column
                        flex={false}
                        customStyles={{ width: "100%" }}
                      >
                        <textarea
                          type="text"
                          placeholder="start typing here..."
                          className={classes.inputStyle}
                          value={owner_review}
                          onChange={(e) => setOwnerReview(e.target.value)}
                        />
                      </Container>
                    </Container>
                    <Container
                      column
                      flex={0.5}
                      color="transparent"
                      customStyles={{ paddingLeft: 5 }}
                    >
                      <Container row center color="transparent">
                        <CaptionText
                          customStyles={{
                            color: "#323130",
                            fontWeight: "600",
                            marginBottom: 8,
                            marginTop: 15,
                          }}
                        >
                          Agent Review
                        </CaptionText>
                      </Container>
                      <Container
                        color="transparent"
                        column
                        flex={false}
                        customStyles={{ width: "100%" }}
                      >
                        <textarea
                          type="text"
                          disabled
                          placeholder="start typing here..."
                          className={classes.inputStyle}
                          //   value={house_description}
                          //   onChange={(e) => setHouseDesc(e.target.value)}
                        />
                      </Container>
                    </Container>
                  </Container>
                  <Container color="transparent" row flex={0}>
                    <Container
                      color="transparent"
                      customStyles={{ paddingRight: 5 }}
                      flex={0.3}
                    >
                      <Container flex={0} row center color="transparent">
                        <CaptionText
                          customStyles={{
                            color: "#323130",
                            fontWeight: "600",
                            marginBottom: 8,
                            marginTop: 15,
                          }}
                        >
                          Add House
                        </CaptionText>
                      </Container>

                      <Container
                        flex={0}
                        row
                        center
                        // space="space-between"
                        color="transparent"
                      >
                        <Houses house={house} setHouse={setHouse} />
                      </Container>
                    </Container>

                    <Container
                      color="transparent"
                      customStyles={{ paddingRight: 5 }}
                      flex={0.3}
                    >
                      <Container flex={0} row center color="transparent">
                        <CaptionText
                          customStyles={{
                            color: "#323130",
                            fontWeight: "600",
                            marginBottom: 8,
                            marginTop: 15,
                          }}
                        >
                          Reported way
                        </CaptionText>
                      </Container>

                      <Container
                        flex={0}
                        row
                        center
                        // space="space-between"
                        color="transparent"
                      >
                        <Reported
                          reportWay={reportWay}
                          setReportWay={setReportWay}
                        />
                      </Container>
                    </Container>
                  </Container>

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
                    <PrimaryButton
                      type="submit"
                      customStyles={{
                        pointerEvents: house.length <= 0 ? "none" : "auto",
                        opacity: house.length <= 0 ? 0.5 : 1,
                      }}
                    >
                      {loading ? "saving" : "Save Ticket"}
                    </PrimaryButton>
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
