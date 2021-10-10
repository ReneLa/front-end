import {
  Divider,
  Fade as FadeWrapper,
  FormControl,
  IconButton,
  InputBase,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { fade, withStyles } from "@material-ui/core/styles";
import LeaseIcon from "@material-ui/icons/NoteAdd";
import SearchIcon from "@material-ui/icons/Search";
import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
import Slide from "react-reveal/Slide";
import loadingImg from "../../../../public/static/126.gif";
import Houses from "../../../queryComponents/Houses";
import Leases, {
  GET_USER_HOUSES_LEASES,
} from "../../../queryComponents/Leases";
import { Container, FlatButton, Input } from "../../../styledComponents";
import DeleteParentHouse from "../DeleteParentHouse";

const CREATE_LEASE_INFO_MUTATION = gql`
  mutation CREATE_LEASE_INFO_MUTATION(
    $lease_name: String!
    $admin_fee: Int!
    $brokerage_fee: Int
    $security_deposit: Int
    $houseId: ID!
  ) {
    createLeaseInfo(
      lease_name: $lease_name
      admin_fee: $admin_fee
      brokerage_fee: $brokerage_fee
      security_deposit: $security_deposit
      houseId: $houseId
    ) {
      id
      lease_name
      admin_fee
      security_deposit
      brokerage_fee
      houseId {
        id
        house_heading
      }
    }
  }
`;

const styles = (theme) => ({
  list: {
    width: "100%",
    alignItems: "center",
  },
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
});

class Lease extends React.Component {
  render() {
    const { classes, leases, create, showForm } = this.props;

    return (
      <Container column>
        <Container row space="space-between" customStyles={{ padding: 10 }}>
          <Paper component="form" className={classes.root} elevation={0}>
            <InputBase
              className={classes.input}
              placeholder="Search leases"
              // inputProps={{ "aria-label": "search google maps" }}
            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <FlatButton
            onClick={() => {
              create();
            }}
          >
            New Lease
          </FlatButton>
        </Container>
        <Container column>
          <Container
            column
            customStyles={{
              width: "100%",
              borderRadius: 2,
              border: `1px solid ${fade("#393939", 0.1)}`,
            }}
          >
            <Container row space="space-between" customStyles={{ padding: 10 }}>
              <span>House</span>
              <span>Admin fee</span>
              <span>Brokerage fee</span>
              <span>Security fee</span>
              <span>action</span>
            </Container>
            {leases.map((lease) => {
              return (
                <Container
                  key={lease.id}
                  row
                  space="space-between"
                  customStyles={{
                    padding: 10,
                    cursor: "pointer",
                    borderTop: `1px solid ${fade("#393939", 0.1)}`,
                    "&:hover": {
                      backgroundColor: ` ${fade("#FEFEFF", 1)}`,
                    },
                  }}
                >
                  <span>{lease.lease_name}</span>
                  <span>{lease.admin_fee}</span>
                  <span>{lease.brokerage_fee}</span>
                  <span>{lease.security_deposit}</span>
                  <Container row right center>
                    <DeleteParentHouse id={lease.id} />
                  </Container>
                </Container>
              );
            })}
            <Container
              row
              center
              customStyles={{
                padding: 10,
                borderTop: `1px solid ${fade("#393939", 0.1)}`,
              }}
              middle
            >
              <Typography>
                {"showing " + leases.length + " result(s)"}
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

const LeaseList = withStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
})(Lease);
class LeaseInfo extends React.Component {
  state = {
    lease_name: "",
    admin_fee: parseInt(0),
    brokerage_fee: parseInt(0),
    security_deposit: parseInt(0),
    houseId: null,
    showForm: false,
  };
  createForm = () => {
    this.setState({ showForm: true });
  };
  closeCreateForm = () => {
    this.setState({ showForm: false });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  CreateFormWrapper = () => {
    const {
      lease_name,
      admin_fee,
      brokerage_fee,
      security_deposit,
      houseId,
      showForm,
    } = this.state;
    const { classes } = this.props;
    return (
      <FadeWrapper in={showForm}>
        <Container
          flex={1}
          column
          customStyles={{ zIndex: 1305, paddingTop: 64 }}
        >
          <Container
            row
            center
            space="space-between"
            customStyles={{
              position: "absolute",
              top: 0,
              width: "100%",
              paddingLeft: 10,
              paddingRight: 15,
              height: 64,
              borderBottom: `0.5px solid ${fade("#393939", 0.2)}`,
            }}
          >
            <div />
            <Typography
              variant="button"
              style={{ fontSize: 13, fontFamily: 400 }}
            >
              Create Lease
            </Typography>
            <span
              onClick={this.closeCreateForm}
              style={{ fontSize: 30, fontWeight: 200, cursor: "pointer" }}
            >
              &times;
            </span>
          </Container>

          <Houses>
            {({ data, loading, error }) => {
              if (data) {
                const houses = data.getUserHouses;

                return (
                  <Container flex={1} column>
                    <Mutation
                      mutation={CREATE_LEASE_INFO_MUTATION}
                      refetchQueries={[{ query: GET_USER_HOUSES_LEASES }]}
                      variables={{
                        lease_name,
                        admin_fee: parseInt(admin_fee),
                        brokerage_fee: parseInt(brokerage_fee),
                        security_deposit: parseInt(security_deposit),
                        houseId,
                      }}
                    >
                      {(createLeaseInfo, { loading, error }) => {
                        return (
                          <Container
                            flex={1}
                            color="inherit"
                            role="presentation"
                          >
                            <form
                              method="post"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                flex: 1,
                              }}
                              onSubmit={async (e) => {
                                e.preventDefault();

                                await createLeaseInfo().then((res) => {
                                  this.closeCreateForm();
                                });
                                this.setState({
                                  lease_name: "",
                                  admin_fee: "",
                                  brokerage_fee: "",
                                  security_deposit: "",
                                  houseId: null,
                                });
                              }}
                            >
                              {error &&
                                error.graphQLErrors.map(({ message }, i) => (
                                  <p key={i} style={{ color: "red" }}>
                                    {message}
                                  </p>
                                ))}
                              <Container column middle>
                                <Container
                                  middle
                                  row
                                  center
                                  customStyles={{
                                    paddingTop: 15,
                                    marginTop: 30,
                                  }}
                                >
                                  <span> Select House:</span>
                                  <FormControl
                                    size="small"
                                    variant="outlined"
                                    className={classes.formControl}
                                  >
                                    <Select
                                      native
                                      size="normal"
                                      value={houseId}
                                      style={{
                                        marginLeft: 15,
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          houseId: e.target.value,
                                        });
                                      }}
                                      inputProps={{
                                        name: "house",
                                        id: "outlined-lease-house-id",
                                      }}
                                    >
                                      <option>choose house</option>
                                      {houses.map((house) => (
                                        <option key={house.id} value={house.id}>
                                          {house.house_heading}
                                        </option>
                                      ))}
                                    </Select>
                                  </FormControl>
                                </Container>

                                <Slide bottom when={houseId !== null}>
                                  <Container column middle center>
                                    <Input
                                      type="text"
                                      name="lease"
                                      label="lease name"
                                      value={lease_name}
                                      style={{
                                        width: "50%",
                                        marginTop: 40,
                                        marginBottom: 20,
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          lease_name: e.target.value,
                                        });
                                      }}
                                    />
                                    <Input
                                      type="number"
                                      name="admin"
                                      label="admin fee"
                                      value={admin_fee}
                                      style={{
                                        width: "50%",
                                        marginBottom: 20,
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          admin_fee: e.target.value,
                                        });
                                      }}
                                    />

                                    <Input
                                      type="number"
                                      name="brokerage"
                                      label="brokerage fee"
                                      value={brokerage_fee}
                                      style={{
                                        width: "50%",
                                        marginBottom: 20,
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          brokerage_fee: e.target.value,
                                        });
                                      }}
                                    />
                                    <Input
                                      type="number"
                                      name="security"
                                      label="security fee"
                                      value={security_deposit}
                                      style={{
                                        width: "50%",
                                        marginBottom: 20,
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          security_deposit: e.target.value,
                                        });
                                      }}
                                    />
                                  </Container>
                                </Slide>
                              </Container>

                              <Container
                                right
                                center
                                row
                                flex={1}
                                space="space-between"
                                customStyles={{
                                  position: "absolute",
                                  bottom: 0,
                                  marginTop: 15,
                                  padding: 10,
                                  borderTop: `0.5px solid ${fade(
                                    "#393939",
                                    0.2
                                  )}`,
                                  width: "100%",
                                }}
                              >
                                <FlatButton type="submit">"Save"</FlatButton>
                              </Container>
                            </form>
                          </Container>
                        );
                      }}
                    </Mutation>
                  </Container>
                );
              }

              return null;
            }}
          </Houses>
        </Container>
      </FadeWrapper>
    );
  };
  render() {
    const { classes } = this.props;
    const { showForm } = this.state;

    return (
      <Container flex={1}>
        {!showForm && (
          <Leases>
            {({ data, loading }) => {
              if (data) {
                const leases = data.getLeases;
                if (leases.length !== 0) {
                  return (
                    <LeaseList
                      leases={leases}
                      create={this.createForm}
                      showForm={showForm}
                    />
                  );
                }
                if (leases.length === 0) {
                  return (
                    <Container flex={1} column middle center>
                      <LeaseIcon style={{ fontSize: 60, color: "gray" }} />
                      <Typography
                        variant="button"
                        style={{
                          fontSize: 18,
                          color: "black",
                          fontWeight: 600,
                          marginTop: 15,
                        }}
                      >
                        Create Lease Info
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 13,
                          fontWeight: 200,
                          marginTop: 10,
                        }}
                      >
                        Make sure to create house first
                      </Typography>
                      <Typography
                        style={{
                          fontSize: 13,
                          fontWeight: 200,
                          marginBottom: 15,
                        }}
                      >
                        in order to attach lease information
                      </Typography>
                      <FlatButton onClick={this.createForm}>New</FlatButton>
                    </Container>
                  );
                }
              }

              if (loading) {
                return (
                  <Container flex={1} middle center>
                    <img src={loadingImg} style={{ width: 25, height: 25 }} />
                  </Container>
                );
              }
              return null;
            }}
          </Leases>
        )}
        {this.CreateFormWrapper()}
      </Container>
    );
  }
}

export default withStyles(styles)(LeaseInfo);
