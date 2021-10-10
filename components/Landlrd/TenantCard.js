import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Text,
  IconButton,
  SubHeader,
  SubText,
  CaptionText,
  PrimaryButton,
  NormalText,
  CommandButton,
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
import AddIcon from "@material-ui/icons/Add";
import HouseIcon from "@material-ui/icons/Home";
import BagIcon from "@material-ui/icons/MonetizationOn";
import CheckIcon from "@material-ui/icons/Check";
import { GET_LANDLORD_TENANTS } from "../queryComponents/landlord/LandlordTenants";
import { PAGINATION_QUERY } from "./tenants/index";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    // borderRadius: 0,
    marginBottom: 10,
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
  },
}));
const CardWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 270px;
  min-width: 220px;
  /* border: 1px solid #d5d8dc; */

  margin: 0px 5px 30px 5px;
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
  flex-direction: column;
  width: 100%;
  padding: 0px 15px 10px 15px;
  background-color: #f7f9f9;
`;

const CardContent = styled(Container)`
  direction: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: transparent;
  align-items: center;
  padding: 15px 0px;
  position: relative;
`;
const CardActions = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: absolute;
  min-height: 40px;
  background-color: transparent;
  bottom: 0;
`;
const CancelBtn = styled(PrimaryButton)`
  border: none;
  color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
  }
`;

const DELETE_TENANT_MUTATION = gql`
  mutation DELETE_TENANT_MUTATION($id: ID!) {
    deleteTenant(id: $id) {
      id
    }
  }
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DeleteTenant = ({ tenant }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCompletion = () => {
    handleClose();
  };

  const [deleteTenant, { data, loading }] = useMutation(
    DELETE_TENANT_MUTATION,
    {
      variables: { id: tenant.id },
      refetchQueries: [
        { query: GET_LANDLORD_TENANTS },
        { query: PAGINATION_QUERY },
      ],
      onCompleted: onCompletion,
    }
  );

  return (
    <div style={{ flex: 1, height: "100%" }}>
      <Container
        flex={1}
        column
        color="transparent"
        customStyles={{
          height: "100%",
          borderTop: `0.5px solid #ECF0F1`,
          borderRight: `0.25px solid #ECF0F1`,
        }}
      >
        <CommandButton
          type="button"
          onClick={() => {
            handleClickOpen();
          }}
        >
          Delete
        </CommandButton>
      </Container>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" style={{ fontSize: 20 }}>
          {"You are about to delete this Tenant?"}
        </DialogTitle>
        <DialogContent>
          <Container
            row
            center
            color="transparent"
            customStyles={{ marginTop: 15, marginBottom: 15 }}
          >
            <SubText customStyles={{ marginRight: 10 }}>Tenant: </SubText>
            <SubHeader customStyles={{ fontSize: 17 }}>
              {tenant.firstName}
            </SubHeader>
          </Container>
        </DialogContent>
        <DialogActions>
          <CancelBtn
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </CancelBtn>
          <PrimaryButton
            onClick={() => {
              deleteTenant();
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

const TenantCard = ({ tenant }) => {
  console.log(tenant);
  const classes = useStyles();
  const { houseId } = tenant;
  return (
    <CardWrapper>
      <CardHeader>
        <Container
          row
          center
          color="transparent"
          customStyles={{ marginTop: 10 }}
        >
          <Container
            row
            center
            flex={0.7}
            color="white"
            customStyles={{
              marginRight: 10,
              border: `0.5px solid #ECF0F1`,
              padding: "10px 0px",
              borderRadius: 2,
            }}
          >
            <HouseIcon
              style={{ fontSize: 22, marginRight: 7, color: "orange" }}
            />
            <CaptionText>
              {houseId !== null && houseId.house_heading}
            </CaptionText>
          </Container>
          <Container
            row
            center
            right
            color="transparent"
            flex={0.3}
            customStyles={{
              padding: "10px 0px",
            }}
          >
            {tenant.isActive && (
              <Avatar
                style={{
                  backgroundColor: "#52BE80",
                  height: 25,
                  width: 25,
                }}
              >
                <CheckIcon color="white" style={{ fontSize: 15 }} />
              </Avatar>
            )}
          </Container>
        </Container>
      </CardHeader>
      <CardContent>
        {tenant.profileImage !== null && (
          <Avatar src={tenant.profileImage} className={classes.small} />
        )}
        {tenant.profileImage === null && (
          <Avatar className={classes.small}>
            {tenant.firstName.charAt(0) + tenant.lastName.charAt(0)}
          </Avatar>
        )}

        <SubText customStyles={{ marginBottom: 2 }}>
          {tenant.firstName + " " + tenant.lastName}
        </SubText>
        <CaptionText customStyles={{ color: "blue", marginBottom: 5 }}>
          {tenant.comm_email}
        </CaptionText>
        <CaptionText customStyles={{ marginBottom: 3 }}>
          {tenant.tel_no}
        </CaptionText>
        <CardActions>
          <Container column flex={0.5} color="transparent">
            <DeleteTenant tenant={tenant} />
          </Container>
          <Container
            column
            flex={0.5}
            color="transparent"
            customStyles={{
              // height: "100%",
              borderTop: `0.5px solid #ECF0F1`,
              borderRight: `0.25px solid #ECF0F1`,
            }}
          >
            <Link href="/" as="/">
              <a style={{ flex: 1, height: "100%" }}>
                <CommandButton
                  customStyles={{ height: "100%", width: "100%" }}
                ></CommandButton>
              </a>
            </Link>
          </Container>
        </CardActions>
      </CardContent>
    </CardWrapper>
  );
};

export default TenantCard;

/** <DeleteTenant tenant={tenant} />
            <Container
              color="transparent"
              flex={0.5}
              customStyles={{
                borderTop: `0.5px solid #ECF0F1`,
              }}
            >
              <Link
                style={{
                  display: "flex",
                  flex: 1,
                  width: "100%",
                }}
                href={{
                  pathname: `/Landlrd/tenants/[id]`,
                  query: { id: tenant.id },
                }}
                as={`/Landlrd/tenants/${tenant.id}`}
              >
                <a
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <CommandButton>View Profile</CommandButton>
                </a>
              </Link>
            </Container> */
