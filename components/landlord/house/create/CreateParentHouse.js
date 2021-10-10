import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import {
  Select,
  Button,
  Avatar,
  IconButton,
  Typography,
  Fade,
  Paper,
  InputBase,
  Divider
} from "@material-ui/core";
import gql from "graphql-tag";
import SearchIcon from "@material-ui/icons/Search";
import BuildingIcon from "@material-ui/icons/Apartment";
import { theme as customTheme } from "../../../Page";
import loadingImg from "../../../../public/static/126.gif";
import { Container, FlatButton, Input } from "../../../styledComponents";
import ParentHouses from "../../../queryComponents/ParentHouses";
import { GET_USER_PARENT_HOUSES } from "../../../queryComponents/ParentHouses";
import DeleteParentHouse from "../DeleteParentHouse";

const CREATE_PARENT_HOUSE_MUTATION = gql`
  mutation CREATE_PARENT_HOUSE_MUTATION(
    $building_name: String!
    $address: String
    $image: String
  ) {
    createParentHouse(
      building_name: $building_name
      address: $address
      image: $image
    ) {
      id
      building_name
      address
      image
    }
  }
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
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  }
});

class Buildings extends React.Component {
  render() {
    const { classes, buildings, create, showForm } = this.props;

    return (
      <Container column flex={1}>
        <Container row space="space-between" customStyles={{ padding: 10 }}>
          <Paper component="form" className={classes.root} elevation={0}>
            <InputBase
              className={classes.input}
              placeholder="Search buildings"
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
            New Building
          </FlatButton>
        </Container>
        <Container flex={1} column>
          <Container
            column
            customStyles={{
              width: "100%",
              borderRadius: 2,
              border: `1px solid ${fade("#393939", 0.1)}`
            }}
          >
            <Container row space="space-between" customStyles={{ padding: 10 }}>
              <span>Name</span>
              <span>address</span>
              <span>action</span>
            </Container>
            {buildings.map(building => {
              return (
                <Container
                  key={building.id}
                  row
                  // color="#FEFEFF"
                  space="space-between"
                  customStyles={{
                    padding: 10,
                    cursor: "pointer",
                    borderTop: `1px solid ${fade("#393939", 0.1)}`,
                    "&:hover": {
                      backgroundColor: ` ${fade("#FEFEFF", 1)}`
                    }
                  }}
                >
                  <span>{building.building_name}</span>
                  <span>{building.address}</span>
                  <Container row right center>
                    <DeleteParentHouse id={building.id} />
                  </Container>
                </Container>
              );
            })}
            <Container
              row
              center
              customStyles={{
                padding: 10,
                borderTop: `1px solid ${fade("#393939", 0.1)}`
              }}
              middle
            >
              <Typography>
                {"showing " + buildings.length + " result(s)"}
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

const BuildingsList = withStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
})(Buildings);
class CreateParentHouse extends React.Component {
  state = {
    building_name: "",
    address: "",
    image: null,
    showForm: false
  };
  createForm = () => {
    this.setState({ showForm: true });
  };
  closeCreateForm = () => {
    this.setState({ showForm: false });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "house_assist");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();

    if (file) {
      this.setState({
        image: file.secure_url
      });
    }
  };

  CreateFormWrapper = () => {
    const { building_name, address, image, showForm } = this.state;
    const { classes } = this.props;
    return (
      <Fade in={showForm}>
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
              border: `0.5px solid ${fade("#393939", 0.2)}`
            }}
          >
            <div />
            <Typography
              variant="button"
              style={{ fontSize: 13, fontFamily: 400 }}
            >
              Create Building
            </Typography>
            <span
              onClick={this.closeCreateForm}
              style={{ fontSize: 30, fontWeight: 200, cursor: "pointer" }}
            >
              &times;
            </span>
          </Container>
          <Container flex={1} column>
            <Mutation
              mutation={CREATE_PARENT_HOUSE_MUTATION}
              refetchQueries={[{ query: GET_USER_PARENT_HOUSES }]}
              variables={this.state}
            >
              {(createParentHouse, { loading, error }) => {
                return (
                  <Container flex={1} color="inherit" role="presentation">
                    <form
                      method="post"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        // alignItems: "center",
                        flex: 1
                      }}
                      onSubmit={async e => {
                        e.preventDefault();

                        await createParentHouse().then(res => {
                          this.closeCreateForm();
                        });
                        this.setState({
                          building_name: "",
                          address: "",
                          image: null
                          // showForm: false
                        });
                      }}
                    >
                      {error &&
                        error.graphQLErrors.map(({ message }, i) => (
                          <p key={i} style={{ color: "red" }}>
                            {message}
                          </p>
                        ))}
                      <Container column center>
                        <Input
                          type="text"
                          name="building"
                          label="building name"
                          value={building_name}
                          style={{
                            width: "50%",
                            marginTop: 40,
                            marginBottom: 20
                          }}
                          onChange={e => {
                            this.setState({ building_name: e.target.value });
                          }}
                        />
                        <Container row>
                          <Input
                            accept="image/*"
                            id="text-button-file"
                            multiple
                            type="file"
                            // value={image}
                            onChange={this.uploadImage}
                          />
                          {image !== null && (
                            <img
                              src={image}
                              style={{
                                width: 40,
                                height: 35,
                                objectFit: "fit"
                              }}
                            />
                          )}
                        </Container>
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
                          borderTop: `0.5px solid ${fade("#393939", 0.2)}`,
                          width: "100%"
                        }}
                      >
                        <FlatButton type="submit">
                          {loading ? (
                            <img
                              src={loadingImg}
                              style={{ width: 20, height: 20 }}
                            />
                          ) : (
                            "Save"
                          )}
                        </FlatButton>
                      </Container>
                    </form>
                  </Container>
                );
              }}
            </Mutation>
          </Container>
        </Container>
      </Fade>
    );
  };
  render() {
    const { classes } = this.props;
    const { showForm } = this.state;
    return (
      <Container flex={1}>
        {!showForm && (
          <ParentHouses>
            {({ data, loading }) => {
              if (data) {
                const buildings = data.getUserParentHouses;
                if (buildings.length !== 0) {
                  return (
                    <BuildingsList
                      buildings={buildings}
                      create={this.createForm}
                      showForm={showForm}
                    />
                  );
                }
                if (buildings.length === 0) {
                  return (
                    <Container flex={1}>
                      <Container
                        flex={1}
                        column
                        middle
                        center
                        customStyles={{ paddingTop: 64 }}
                      >
                        <BuildingIcon style={{ fontSize: 60, color: "gray" }} />
                        <Typography
                          variant="button"
                          style={{
                            fontSize: 18,
                            color: "black",
                            fontWeight: 600,
                            marginTop: 15
                          }}
                        >
                          Add New Building
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 13,
                            fontWeight: 200,
                            marginTop: 10
                          }}
                        >
                          You have more than one house with in a
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 13,
                            fontWeight: 200,
                            marginBottom: 15
                          }}
                        >
                          single building, add them in to a building
                        </Typography>
                        <FlatButton onClick={this.createForm}>
                          Add Building
                        </FlatButton>
                      </Container>
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
          </ParentHouses>
        )}
        {this.CreateFormWrapper()}
      </Container>
    );
  }
}

export default withStyles(styles)(CreateParentHouse);
