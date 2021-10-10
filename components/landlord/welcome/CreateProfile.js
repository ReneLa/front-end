import React from "react";
import { Mutation } from "react-apollo";
import { CURRENT_LANDLORD } from "../../queryComponents/Landlord";
import gql from "graphql-tag";
import { Container, Input, FlatButton } from "../../styledComponents";
import loadingImg from "../../../public/static/126.gif";

const CREATE_LANDLORD_MUTATION = gql`
  mutation CREATE_LANDLORD_MUTATION(
    $firstName: String!
    $lastName: String!
    $tel_no: String! # $countryId: ID # $provinceId: ID # $districtId: ID # $sectorId: ID
  ) {
    createLandlord(
      firstName: $firstName
      lastName: $lastName
      tel_no: $tel_no # countryId: $countryId # provinceId: $provinceId # districtId: $districtId # sectorId: $sectorId
    ) {
      id
      firstName
      lastName
      tel_no
      # countryId {
      #   id
      #   name
      # }
      # provinceId {
      #   id
      #   name
      # }
      # districtId {
      #   id
      #   name
      # }
      # sectorId {
      #   id
      #   name
      # }
    }
  }
`;

class CreateProfile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    tel_no: ""
    // countryId: "",
    // provinceId: "",
    // districtId: "",
    // sectorId: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, tel_no } = this.state;
    return (
      <Mutation
        mutation={CREATE_LANDLORD_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_LANDLORD }]}
      >
        {(createLandlord, { loading, error }) => {
          return (
            <Container
              flex={1}
              // middle
              // center
              column
              customStyles={{
                padding: 40,
                minHeight: "50vh"
              }}
            >
              <Container middle center>
                <h2>Your Profile</h2>
              </Container>
              <Container middle center>
                <form
                  method="post"
                  style={{ display: "flex", flexDirection: "column" }}
                  onSubmit={async e => {
                    e.preventDefault();
                    await createLandlord();
                    this.setState({
                      firstName: "",
                      lastName: "",
                      tel_no: ""
                      // countryId: "",
                      // provinceId: "",
                      // districtId: "",
                      // sectorId: ""
                    });
                  }}
                >
                  <fieldset
                    disabled={loading}
                    aria-busy={loading}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "none",
                      width: 200
                    }}
                  >
                    {error &&
                      error.graphQLErrors.map(({ message }, i) => (
                        <p key={i} style={{ color: "red" }}>
                          {message}
                        </p>
                      ))}
                    <Input
                      id="first_name"
                      label="First name"
                      type="text"
                      name="firstName"
                      placeholder="enter first name"
                      value={firstName}
                      onChange={e => {
                        this.setState({ firstName: e.target.value });
                      }}
                    />
                    <Input
                      id="last_name"
                      label="Last name"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={e => {
                        this.setState({ lastName: e.target.value });
                      }}
                    />

                    <Input
                      id="tel"
                      label="Tel No."
                      type="text"
                      name="tel_no"
                      value={tel_no}
                      onChange={e => {
                        this.setState({ tel_no: e.target.value });
                      }}
                    />
                  </fieldset>
                  <Container
                    space="space-between"
                    row
                    center
                    right
                    customStyles={{ paddingLeft: 10, paddingRight: 10 }}
                  >
                    <Container>
                      <FlatButton type="submit">
                        {loading ? (
                          <img
                            src={loadingImg}
                            style={{ width: 20, height: 20 }}
                            alt="loading..."
                          />
                        ) : (
                          "Save"
                        )}
                      </FlatButton>
                    </Container>
                  </Container>
                </form>
              </Container>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}

export default CreateProfile;
