import WithLayout from "../../components/landlord/Layout";
import { Container } from "../../components/styledComponents";

const DashboardPage = () => {
  return (
    <Container flex={1} center middle>
      <h2>Am the dashboard</h2>
      <h3>My components</h3>
      <Container flex={1} row center></Container>
    </Container>
  );
};

export default WithLayout(DashboardPage);
