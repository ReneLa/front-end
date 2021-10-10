import { useMutation } from "@apollo/react-hooks";
import {
  Avatar, Dialog, DialogActions, DialogContent, DialogTitle
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Add from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Done";
import gql from "graphql-tag";
import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import styled from "styled-components";
import loadingImg from "../../../public/static/126.gif";
import { GET_LANDLORD_TENANTS } from "../../queryComponents/landlord/LandlordTenants";
import {
  ActionButton, Container, IconButton, PrimaryButton, SubHeader, SubText
} from "../../styledComponents";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    width: 500,
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

const ADD_HOUSE_TENANT_MUTATION = gql`
  mutation ADD_HOUSE_TENANT_MUTATION($houseId: ID!, $tenantId: ID!) {
    addHouseTenant(houseId: $houseId, tenantId: $tenantId) {
      id
      firstName
      lastName
    }
  }
`;

const TenantsContainer = ({ addTo, tenants, tenantList, loading }) => {
  const classes = useStyles();

  const handleClick = (tenant) => {
    if (!tenants.some((current) => current.id === tenant.id)) {
      addTo([tenant]);
    } else {
      let tenantAfterRemoval = tenants;
      tenantAfterRemoval = tenantAfterRemoval.filter(
        (current) => current.id !== tenant.id
      );
      addTo([...tenantAfterRemoval]);
    }
  };
  const isTenantSelected = (tenant) => {
    if (tenants.some((current) => current.id === tenant.id)) {
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
        tenantList &&
        tenantList.map((ten) => {
          return (
            <Container flex={false} key={ten.id} column color="transparent">
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
                  {ten.profileImage === null ? (
                    <Avatar
                      src={ten.profileImage}
                      className={classes.avatarStyle}
                    >
                      <SubHeader>
                        {ten.firstName.charAt(0) + ten.lastName.charAt(0)}
                      </SubHeader>
                    </Avatar>
                  ) : (
                    <Avatar
                      src={ten.profileImage}
                      className={classes.avatarStyle}
                    />
                  )}

                  <Container column flex={1} color="transparent">
                    <SubHeader
                      customStyles={{
                        fontSize: 14,
                        fontWeight: "600",
                        marginBottom: 0,
                        marginLeft: 15,
                      }}
                    >
                      {ten.firstName + "" + ten.lastName}
                    </SubHeader>
                  </Container>
                </Container>

                <AddBtn onClick={() => handleClick(ten)}>
                  {isTenantSelected(ten) ? (
                    <CheckIcon style={{ fontSize: 18, color: "green" }} />
                  ) : (
                    <Add style={{ fontSize: 18 }} />
                  )}
                </AddBtn>
              </Container>
            </Container>
          );
        })}
    </Container>
  );
};
const AddHouseTenant = ({ house }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [building_name, setBuildingName] = useState(null);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isloading, setLoading] = useState(false);
  const [addToTenant, setAddToTenant] = useState([]);
  const [tenantList, setTenantList] = useState(null);

  const [addToHouse, { data, loading }] = useMutation(
    ADD_HOUSE_TENANT_MUTATION,
    {
      variables: {
        houseId: house.id,
        tenantId: addToTenant.length > 0 ? addToTenant[0].id : "",
      },
    }
  );

  console.log(data);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function getTenants(client) {
    setLoading(true);
    const res = await client.query({ query: GET_LANDLORD_TENANTS });
    const tenants = res.data.getLandlordTenants;
    setTenantList(tenants);
    setLoading(false);
  }
  return (
    <ApolloConsumer>
      {(client) => (
        <div>
          <IconButton
            onClick={(e) => {
              handleClickOpen();
              getTenants(client);
            }}
            customStyles={{
              backgroundColor: "#0078D4",
              height: 33,
              //   width: 33,
            }}
          >
            <SubText customStyles={{ color: "white" }}>Add</SubText>
          </IconButton>

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
                <Container color="transparent" column row center left flex={1}>
                  <SubHeader>Tenants</SubHeader>
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
                <TenantsContainer
                  loading={isloading}
                  addTo={setAddToTenant}
                  tenants={addToTenant}
                  tenantList={tenantList}
                />
              </Container>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
              <PrimaryButton
                customStyles={{
                  pointerEvents: addToTenant.length <= 0 ? "none" : "auto",
                  opacity: addToTenant.length <= 0 ? 0.4 : 1.0,
                }}
                onClick={() => {
                  addToHouse();
                }}
              >
                ADD
              </PrimaryButton>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </ApolloConsumer>
  );
};

export default AddHouseTenant;
