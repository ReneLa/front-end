import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Text,
  CommandButton,
  IconButton,
  SubHeader,
  SubText,
  PrimaryButton,
  CaptionText,
} from "../styledComponents";
import userPhoto from "../../public/static/sandy.jpeg";
import {
  Avatar,
  Popover,
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import AddIcon from "@material-ui/icons/MoreHoriz";
import BathIcon from "@material-ui/icons/Bathtub";
import BedIcon from "@material-ui/icons/SingleBed";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import { GET_USER_HOUSES } from "../queryComponents/landlord/LandlordHouses";
import { PAGINATION_QUERY } from "./houses/index";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: 0,
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
  },
}));
const HouseWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 300px;
  min-width: 250px;
  max-width: 250px;
  margin-right: 10px;
  /* border: 1px solid #d5d8dc; */
  position: relative;
  margin-bottom: 20px;
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
      0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  }
`;

const Tag = styled(Container)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px;
  margin-right: 5px;
`;
const CardHeader = styled(Container)`
  direction: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background-color: transparent;
`;

const ImageWrapper = styled(Container)`
  direction: flex;
  flex-direction: row;
  flex: 0;
  width: 100%;
  /* align-items: center; */
  background-color: transparent;
  padding-top: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 10px;
  ${(props) => props.customStyles}
`;
const PopContainer = styled(Container)`
  display: flex;
  flex: 1;
  border-radius: 1px;
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);

  ${(props) => props.customStyles}
`;
const CancelBtn = styled(PrimaryButton)`
  border: none;
  color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;
const PopListItem = styled(CommandButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`;

const DELETE_HOUSE_MUTATION = gql`
  mutation DELETE_HOUSE_MUTATION($id: ID!) {
    deleteHouse(id: $id) {
      id
    }
  }
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteHouse = ({ closePopover, house }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCompletion = () => {
    handleClose();
    closePopover();
  };

  const [deleteHouse, { data, loading }] = useMutation(DELETE_HOUSE_MUTATION, {
    variables: { id: house.id },
    refetchQueries: [{ query: GET_USER_HOUSES }, { query: PAGINATION_QUERY }],
    onCompleted: onCompletion,
  });

  return (
    <div>
      <PopListItem
        type="button"
        onClick={() => {
          handleClickOpen();
        }}
      >
        <DeleteIcon style={{ color: "red", fontSize: 20, marginRight: 6 }} />
        Delete
      </PopListItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{ fontSize: 20 }}>
          {"You are about to delete this house?"}
        </DialogTitle>
        <DialogContent>
          <Container
            row
            center
            color="transparent"
            customStyles={{ marginTop: 15, marginBottom: 15 }}
          >
            <SubText customStyles={{ marginRight: 10 }}>House: </SubText>
            <SubHeader customStyles={{ fontSize: 17 }}>
              {house.house_heading}
            </SubHeader>
          </Container>
        </DialogContent>
        <DialogActions>
          <CancelBtn
            onClick={() => {
              handleClose();
              closePopover();
            }}
          >
            Cancel
          </CancelBtn>
          <PrimaryButton
            onClick={() => {
              deleteHouse();
            }}
            type="button"
            customStyles={{ backgroundColor: "#E74C3C", border: "none" }}
          >
            {loading ? "Deleting" : "Delete"}
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const HouseItem = ({ house }) => {
  const classes = useStyles();
  const {
    images,
    countryId,
    provinceId,
    districtId,
    appliances,
    utilities,
  } = house;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Link
        style={{ flex: 0 }}
        href={{
          pathname: `/Landlrd/houses/[id]`,
          query: { id: house.id },
        }}
        as={`/Landlrd/houses/${house.id}`}
      >
        <a style={{ textDecoration: "none", flex: 0 }}>
          <HouseWrapper>
            <CardHeader>
              {house.profileImage !== null && (
                <Avatar src={house.profileImage} className={classes.small} />
              )}
              {house.profileImage === null && <div className={classes.small} />}
              <Container
                flex={1}
                column
                color="transparent"
                customStyles={{ paddingLeft: 10, paddingRight: 10 }}
              >
                <SubHeader
                  customStyles={{ fontSize: "18px", fontWeight: "500" }}
                >
                  {house.house_heading}
                </SubHeader>
                <CaptionText customStyles={{ color: "#0078D4" }}>
                  {countryId.name + " ," + districtId.name}
                </CaptionText>
              </Container>

              <Container flex={false} color="transparent">
                <IconButton
                  customStyles={{
                    border: "1px solid #E1E1E1",
                    height: 33,
                    width: 33,
                  }}
                  onMouseEnter={handlePopoverOpen}
                >
                  <AddIcon style={{ fontSize: 18 }} />
                </IconButton>
              </Container>
            </CardHeader>
            {/*   <CaptionText customStyles={{ marginTop: 3 }}>
            Last updated 2 days ago..
              </CaptionText>*/}
            <ImageWrapper>
              {images.length <= 0 && (
                <Container
                  center
                  middle
                  flex={1}
                  color="transparent"
                  customStyles={{ width: 90, height: 90 }}
                >
                  <Avatar
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 70 / 2,
                      backgroundColor: "#F2F3F4",
                    }}
                  >
                    <SubHeader> {house.house_heading.charAt(0)}</SubHeader>
                  </Avatar>
                </Container>
              )}
            </ImageWrapper>
            <ImageWrapper>
              {images.map((img) => {
                return (
                  <Container flex={1} key={img.id}>
                    <Avatar
                      src={img.image}
                      style={{ width: "100%", height: 90, borderRadius: 0 }}
                    />
                  </Container>
                );
              })}
            </ImageWrapper>

            <Container color="transparent" column>
              <Container
                flex={1}
                row
                color="transparent"
                customStyles={{ marginBottom: 7 }}
              >
                <Container
                  flex={1}
                  column
                  middle
                  color="transparent"
                  customStyles={{ paddingRight: 10 }}
                >
                  <Container
                    color="transparent"
                    row
                    center
                    space="space-between"
                  >
                    <CaptionText customStyles={{ fontSize: 10 }}>
                      BEDROOMS
                    </CaptionText>
                    <BedIcon style={{ fontSize: 18 }} />
                  </Container>

                  <SubText
                    customStyles={{
                      fontWeight: "600",
                      color: "#ED6161",
                      fontSize: 16,
                    }}
                  >
                    {house.no_bedrooms}
                  </SubText>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <Container
                    color="transparent"
                    row
                    center
                    space="space-between"
                  >
                    <CaptionText customStyles={{ fontSize: 10 }}>
                      BATHROOMS
                    </CaptionText>
                    <BathIcon style={{ fontSize: 15 }} />
                  </Container>

                  <SubText
                    customStyles={{
                      fontWeight: "600",
                      color: "#00BCCA",
                      fontSize: 16,
                    }}
                  >
                    {house.no_bathrooms}
                  </SubText>
                </Container>
              </Container>
              <Container flex={1} row color="transparent">
                <Container
                  flex={1}
                  column
                  middle
                  color="transparent"
                  customStyles={{ paddingTop: 10 }}
                >
                  <Container
                    color="transparent"
                    row
                    center
                    space="space-between"
                  >
                    <CaptionText customStyles={{ fontSize: 10 }}>
                      Utilities
                    </CaptionText>
                  </Container>
                  <Container row center color="transparent">
                    {utilities.map((util, i) => (
                      <Container
                        flex={0}
                        key={i}
                        row
                        center
                        middle
                        customStyles={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          borderRadius: 5,
                          marginRight: 3,
                        }}
                      >
                        <span>{util}</span>
                      </Container>
                    ))}
                  </Container>
                </Container>
                <Container flex={1} column middle color="transparent">
                  <Container
                    color="transparent"
                    row
                    center
                    space="space-between"
                  >
                    <CaptionText customStyles={{ fontSize: 10 }}>
                      Appliances
                    </CaptionText>
                  </Container>

                  <Container row center color="transparent">
                    {appliances.map((util, i) => (
                      <Container
                        flex={0}
                        key={i}
                        row
                        center
                        middle
                        customStyles={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          borderRadius: 5,
                          marginRight: 3,
                        }}
                      >
                        <span>{util}</span>
                      </Container>
                    ))}
                  </Container>
                </Container>
              </Container>
            </Container>
          </HouseWrapper>
        </a>
      </Link>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={0}
        classes={{
          paper: classes.popoverPaper,
        }}
        disableRestoreFocus
      >
        <PopContainer>
          <DeleteHouse closePopover={handlePopoverClose} house={house} />
        </PopContainer>
      </Popover>
    </div>
  );
};

export default HouseItem;
