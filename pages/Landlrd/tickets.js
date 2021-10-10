import WithLayout from "../../components/Landlrd/Layout";
import { Container } from "../../components/styledComponents";
import Tickets from "../../components/Landlrd/tickets";
import LandlordTicketsQuery from "../../components/queryComponents/landlord/LandlordTickets";

const TicketsPage = (props) => {
  return (
    <LandlordTicketsQuery>
      {({ data, loading, error }, setSkip) => {
        if (data) {
          const tickets = data.getLandlordTickets;
          return (
            <Container flex={1}>
              <Tickets tickets={tickets} {...props} setSkip={setSkip} />
            </Container>
          );
        }
        return null;
      }}
    </LandlordTicketsQuery>
  );
};

export default WithLayout(TicketsPage);
