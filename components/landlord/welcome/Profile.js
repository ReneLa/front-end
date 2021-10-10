import React from "react";
import Link from "next/link";
import { Container, Input, FlatButton } from "../../styledComponents";
import NextIcon from "@material-ui/icons/ArrowRightAlt";

class Profile extends React.Component {
  state = {};

  render() {
    const { landlord } = this.props;
    return (
      <Container
        key={landlord.id}
        column
        flex={1}
        customStyles={{ padding: 20 }}
      >
        <Container flex={1} row center customStyles={{ paddingTop: 20 }}>
          <Container flex={1} row center right>
            <label>first name</label>
          </Container>
          <Container flex={1} middle center>
            <i> {landlord.firstName}</i>
          </Container>
        </Container>
        <Container
          flex={1}
          row
          center
          space="space-evenly"
          customStyles={{ paddingTop: 20 }}
        >
          <Container flex={1} row center right>
            <label>last name</label>
          </Container>
          <Container flex={1} middle center>
            <i> {landlord.lastName}</i>
          </Container>
        </Container>

        <Container
          flex={1}
          row
          center
          space="space-evenly"
          customStyles={{ paddingTop: 20 }}
        >
          <Container flex={1} row center right>
            <label>Company</label>
          </Container>
          <Container flex={1} middle center>
            <i> .....</i>
          </Container>
        </Container>
        <Container
          flex={1}
          row
          center
          space="space-evenly"
          customStyles={{ paddingTop: 20 }}
        >
          <Container flex={1} row center right>
            <label>Phone</label>
          </Container>
          <Container flex={1} middle center>
            <i> {landlord.tel_no}</i>
          </Container>
        </Container>
        <Container
          flex={1}
          row
          center
          space="space-evenly"
          customStyles={{ paddingTop: 20 }}
        >
          <Container flex={1} row center right>
            <label>Address</label>
          </Container>
          <Container flex={1} middle center>
            <i> Rwanda kigali</i>
          </Container>
        </Container>
        <Container row flex={1} customStyles={{ marginTop: 20 }}>
          <Container flex={1} />
          <Container flex={1} middle center>
            <Link href={"/landlord/dashboard"} as={"/landlord/dashboard"}>
              <a>
                <NextIcon style={{ height: 40, width: 50 }} />
              </a>
            </Link>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Profile;
