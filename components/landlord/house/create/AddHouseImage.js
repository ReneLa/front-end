import React from "react";
import { withStyles, fade } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import { Select, FormControl, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { theme as customTheme } from "../../../Page";
import { GET_USER_HOUSES } from "../../../queryComponents/Houses";
import Houses from "../../../queryComponents/Houses";
import { Container, FlatButton, Input } from "../../../styledComponents";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import loadingImg from "../../../../public/static/126.gif";

const ADD_IMAGE_MUTATION = gql`
  mutation ADD_IMAGE_MUTATION($image: String!, $houseId: ID!) {
    createHouseImage(image: $image, houseId: $houseId) {
      id
      image
      houseId {
        id
        house_heading
      }
    }
  }
`;

const styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    // marginTop: theme.spacing(2),
    maxWidth: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class AddHouseImage extends React.Component {
  state = {
    image: null,
    houseId: ""
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

  addImageContainer = data => {
    const { image, houseId } = this.state;
    const { classes } = this.props;
    return (
      <Mutation
        mutation={ADD_IMAGE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: GET_USER_HOUSES }]}
      >
        {(addImage, { loading, error }) => {
          return (
            <Container flex={1}>
              <form
                method="post"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1
                }}
                onSubmit={async e => {
                  e.preventDefault();
                  await addImage();
                  this.setState({ image: null, houseId: "" });
                }}
              >
                <Container
                  middle
                  row
                  center
                  customStyles={{ paddingTop: 15, marginTop: 30 }}
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
                        marginLeft: 15
                      }}
                      onChange={e => {
                        this.setState({ houseId: e.target.value });
                      }}
                      inputProps={{
                        name: "house",
                        id: "outlined-house-image"
                      }}
                    >
                      <option value="">choose house</option>
                      {data.map(house => (
                        <option key={house.id} value={house.id}>
                          {house.house_heading}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Container>

                <Container
                  middle
                  row
                  center
                  customStyles={{ paddingTop: 15, marginTop: 30 }}
                >
                  <span> Select photo:</span>
                  <Input
                    accept="image/*"
                    id="text-button-file"
                    multiple
                    type="file"
                    onChange={this.uploadImage}
                    style={{ marginLeft: 10, width: 200 }}
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

                {/* action footer */}

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
                      <img src={loadingImg} style={{ width: 20, height: 20 }} />
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
    );
  };
  render() {
    const { image, houseId } = this.state;
    const { classes } = this.props;

    return (
      <Container flex={1} column>
        <Houses>
          {({ data, loading, error }) => {
            if (data) {
              const houses = data.getUserHouses;
              if (houses.length === 0) {
                return (
                  <Container
                    flex={1}
                    column
                    middle
                    center
                    // customStyles={{ paddingTop: 64 }}
                  >
                    <AddPhotoIcon style={{ fontSize: 60, color: "gray" }} />

                    <Typography
                      style={{
                        fontSize: 13,
                        fontWeight: 200,
                        marginTop: 20
                      }}
                    >
                      Add at least one house
                    </Typography>
                  </Container>
                );
              }
              if (houses.length !== 0) {
                return (
                  <Container color="pink" flex={1}>
                    {this.addImageContainer(houses)}
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
        </Houses>
      </Container>
    );
  }
}

export default withStyles(styles)(AddHouseImage);
