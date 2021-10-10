import WithLayout from "../../components/Landlrd/Layout";
import { Container, Text } from "../../components/styledComponents";

const ReportsPage = () => {
  return (
    <Container flex={1} column middle>
      <Text>I am a reports page</Text>
    </Container>
  );
};

export default WithLayout(ReportsPage);
