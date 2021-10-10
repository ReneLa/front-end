import React from "react";
import styled from "styled-components";
import loadingImg from "../../../public/static/126.gif";
import HouseTenantsQuery from "../../queryComponents/landlord/HouseTenants";
import {
  Container,
  SubHeader
} from "../../styledComponents";
import TenantCard from "../TenantCard";

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
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e1e1e1;
  padding: 4px 15px;
  margin: 0px 5px;
`;

const Tenants = ({ house, ...other }) => {
  const [ticket, setTicket] = React.useState({});
  const [openTicket, setOpenTicket] = React.useState(false);
  const handleClickOpen = (ticket) => {
    setTicket(ticket);
    setOpenTicket(true);
  };
  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };
  return (
    <HouseTenantsQuery id={house.id}>
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
          const tenants = data.getHouseTenants;

          return (
            <React.Fragment>
              {tenants.length <= 0 ? (
                <Container
                  center
                  middle
                  column
                  customStyles={{ minHeight: 250 }}
                >
                  <SubHeader customStyles={{ color: "#979a9a" }}>
                    House has no tenants yet
                  </SubHeader>
                </Container>
              ) : (
                <Wrapper>
                  <Container
                    flex={1}
                    row
                    customStyles={{
                      flexWrap: "wrap",
                      // justifyContent: "space-between",
                    }}
                  >
                    {tenants.map((tenant) => {
                      return (
                        <TenantCard
                          key={tenant.id}
                          tenant={tenant}
                          {...other}
                        />
                      );
                    })}
                  </Container>
                </Wrapper>
              )}
            </React.Fragment>
          );
        }
        return null;
      }}
    </HouseTenantsQuery>
  );
};

export default Tenants;
