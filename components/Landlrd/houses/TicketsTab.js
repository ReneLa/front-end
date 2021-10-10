import React from "react";
import styled from "styled-components";
import loadingImg from "../../../public/static/126.gif";
import HouseTicketsQuery from "../../queryComponents/landlord/HouseTickets";
import { Container, SubHeader, Text } from "../../styledComponents";
import SingleTicket from "../tickets/SingleTicket";

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 30px;
  max-height: calc(100vh - 115px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Tickets = ({ house, ...other }) => {
  return (
    <HouseTicketsQuery id={house.id}>
      {({ data, loading, error }) => {
        if (loading) {
          return (
            <Container
              flex={1}
              center
              middle
              customStyles={{ paddingTop: 30, minHeight: 300 }}
            >
              <img src={loadingImg} style={{ width: 20, height: 20 }} />
            </Container>
          );
        }
        if (data) {
          const tickets = data.getHouseTickets;

          return (
            <React.Fragment>
              {tickets.length <= 0 ? (
                <Container
                  flex={1}
                  column
                  color="transparent"
                  center
                  middle
                  customStyles={{ minHeight: 200 }}
                >
                  <SubHeader customStyles={{ color: "#979a9a" }}>
                    House has no tickets
                  </SubHeader>
                </Container>
              ) : (
                <Wrapper>
                  <Container
                    row
                    center
                    flex={1}
                    customStyles={{ width: "100%", paddingLeft: 5 }}
                  >
                    <Container center row flex={0.2} color="transparent">
                      <Text customStyles={{ fontSize: 13 }}>Date</Text>
                    </Container>
                    <Container center row flex={0.3} color="transparent">
                      <Text customStyles={{ fontSize: 13 }}>Title</Text>
                    </Container>
                    <Container center row flex={0.2}>
                      <Text customStyles={{ fontSize: 13 }}>Assigned to</Text>
                    </Container>

                    <Container center row flex={0.2} color="transparent">
                      <Text customStyles={{ fontSize: 13 }}>Status</Text>
                    </Container>
                    <Container center row flex={0.1} color="transparent" />
                  </Container>
                  <Container
                    column
                    customStyles={{ paddingTop: 10, paddingBottom: 20 }}
                  >
                    {tickets.map((issue) => {
                      return <SingleTicket key={issue.id} ticket={issue} />;
                    })}
                  </Container>
                </Wrapper>
              )}
            </React.Fragment>
          );
        }
        return null;
      }}
    </HouseTicketsQuery>
  );
};

export default Tickets;
