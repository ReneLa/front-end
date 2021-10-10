import hasLogo from "../../public/static/HAS.png";
import LogoutButton from "../../components/landlord/LogoutButton";
import Footer from "../../components/Footer";
import User from "../../components/queryComponents/User";
import Profile from "../../components/landlord/welcome/Profile";
import Landlord from "../../components/queryComponents/Landlord";
import CreateProfile from "../../components/landlord/welcome/CreateProfile";
import {
  Container,
  Input,
  FlatButton
} from "../../components/styledComponents";
import WithLayout from "../../components/landlord/Layout";
const Welcome = props => {
  return (
    <Container column flex={1} customStyles={{ padding: 30 }}>
      <User>
        {({ data, loading }) => {
          if (data) {
            const { me } = data;
            return (
              <Container flex={1} row space="space-between" id="content" center>
                {me && (
                  <Container
                    id="left-container"
                    flex={1}
                    customStyles={{
                      paddingLeft: 20,
                      paddingTop: 40,
                      minHeight: "50vh"
                      // width: "100%"
                    }}
                  >
                    <h1>Welcome, {me.user_name} </h1>
                    <p> {me.email} </p>
                  </Container>
                )}
                {me && (
                  <Landlord>
                    {({ data, loading }) => {
                      if (data) {
                        const { currentLandlord } = data;
                        return (
                          <Container
                            column
                            flex={1}
                            // right
                            customStyles={{
                              height: "50vh",
                              padding: 40
                            }}
                          >
                            <Container middle center>
                              <h2>Your Profile</h2>
                            </Container>

                            {currentLandlord.length === 0 && <CreateProfile />}
                            {currentLandlord &&
                              currentLandlord.map(land => (
                                <Profile key={land.id} landlord={land} />
                              ))}
                          </Container>
                        );
                      }

                      return <Container />;
                    }}
                  </Landlord>
                )}
              </Container>
            );
          }
          if (loading) {
            return (
              <Container flex={1} column center row middle>
                loading....
              </Container>
            );
          }
          return <Container />;
        }}
      </User>
    </Container>
  );
};

export default WithLayout(Welcome);
