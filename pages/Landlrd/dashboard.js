import WithLayout from "../../components/Landlrd/Layout";
import { Container, Text } from "../../components/styledComponents";
import Dashboard from "../../components/Landlrd/dashboard";
const DashboardPage = (props) => {
  return (
    <Container flex={1}>
      <Dashboard {...props} />
    </Container>
  );
};

export default WithLayout(DashboardPage);
