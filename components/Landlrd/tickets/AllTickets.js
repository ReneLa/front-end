import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import {
  Container,
  SubHeader,
  SubText,
  Text,
  IconButton,
  CaptionText,
} from "../../styledComponents";
import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import { Avatar, Divider } from "@material-ui/core";
import ContactIcon from "@material-ui/icons/PersonPin";
import gql from "graphql-tag";
import SingleTicket from "../tickets/SingleTicket";
import CreateTicket from "./create/CreateTicket";
import { perPage } from "../../../config";
import SearchTickets from "../../queryComponents/SearchTicket";

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
const PageBtn = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: none;
  margin-right: 5px;
  height: 33px;
  width: 33px;
  ${(props) => props.activeStyles}
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    ticketsConnection {
      aggregate {
        count
      }
    }
  }
`;

const TicketsPagination = ({ setSkip }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setSkip(currentPage + 1);
  };
  const handleBack = () => {
    setCurrentPage(currentPage - 1);
    setSkip(currentPage - 1);
  };
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (data) {
          const count = data.ticketsConnection.aggregate.count;
          const pages = Math.ceil(count / perPage);
          let backDisabled = currentPage <= 1;
          let nextDisabled = currentPage >= pages;
          return (
            <Container
              flex={1}
              row
              middle
              customStyles={{ paddingTop: 10, paddingBottom: 25 }}
            >
              <IconButton
                onClick={() => handleBack()}
                customStyles={{
                  border: "1px solid #E1E1E1",
                  marginRight: 10,
                  height: 33,
                  width: 33,
                  pointerEvents: backDisabled ? "none" : "auto",
                  opacity: backDisabled ? 0.6 : 1.0,
                }}
              >
                <BackIcon style={{ fontSize: 25 }} />
              </IconButton>

              {[...Array(pages)].map((num, i) => {
                let index = i + 1;
                return (
                  <PageBtn
                    key={i}
                    onClick={() => {
                      setCurrentPage(index);
                      setSkip(index);
                    }}
                    activeStyles={{
                      backgroundColor:
                        index === currentPage ? "#E1E1E1" : "transparent",
                      pointerEvents: index === currentPage ? "none" : "auto",
                    }}
                  >
                    <span>{index}</span>
                  </PageBtn>
                );
              })}

              <IconButton
                onClick={() => handleNext()}
                customStyles={{
                  border: "1px solid #E1E1E1",
                  height: 33,
                  width: 33,
                  marginLeft: 5,
                  pointerEvents: nextDisabled ? "none" : "auto",
                  opacity: nextDisabled ? 0.6 : 1.0,
                }}
              >
                <NextIcon style={{ fontSize: 25 }} />
              </IconButton>
            </Container>
          );
        }
        return null;
      }}
    </Query>
  );
};

const AllTickets = ({ tickets, setSkip, ...other }) => {
  const [ticket, setTicket] = React.useState({});
  const [list, setList] = React.useState(true);
  const [openTicket, setOpenTicket] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [foundTickets, setFound] = React.useState(null);

  const handleClickOpen = (ticket) => {
    setTicket(ticket);
    setOpenTicket(true);
  };
  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };

  console.log(tickets);
  return (
    <Container
      flex={1}
      customStyles={{ paddingTop: 10, paddingLeft: 30, paddingRight: 30 }}
    >
      <Container
        flex={0}
        row
        center
        customStyles={{ paddingLeft: 15, paddingRight: 15 }}
      >
        {tickets && tickets.length > 0 && (
          <TicketsPagination setSkip={setSkip} />
        )}
        <SearchTickets setLoading={setLoading} setFound={setFound} />
        <CreateTicket />
      </Container>
      <Container
        flex={0}
        row
        center
        customStyles={{ paddingLeft: 15, paddingRight: 15 }}
      >
        <Container center row flex={0.1} color="transparent">
          <Text customStyles={{ fontSize: 14 }}>No.</Text>
        </Container>
        <Container center row flex={0.2} color="transparent">
          <Text customStyles={{ fontSize: 14 }}>Date</Text>
        </Container>
        <Container center row flex={0.2} color="transparent">
          <Text customStyles={{ fontSize: 15 }}>Title</Text>
        </Container>
        <Container center row flex={0.2} color="transparent">
          <Text customStyles={{ fontSize: 15 }}>House</Text>
        </Container>
        <Container center row flex={0.2} color="transparent">
          <Text customStyles={{ fontSize: 15 }}>Status</Text>
        </Container>
        <Container center row right flex={0.1} color="transparent">
          <Text customStyles={{ fontSize: 15 }}>Actions</Text>
        </Container>
      </Container>
      {foundTickets === null && (
        <React.Fragment>
          <Container
            customStyles={{
              paddingTop: 10,
              flexDirection: !list ? "row" : "column",
            }}
          >
            {tickets &&
              tickets.map((issue, i) => {
                let num = i + 1;
                return (
                  <SingleTicket
                    list={list}
                    key={issue.id}
                    num={num}
                    ticket={issue}
                    handleClose={handleClose}
                    handleOpen={handleClickOpen}
                  />
                );
              })}
          </Container>
          {tickets && tickets.length <= 0 && (
            <Container
              flex={1}
              column
              center
              middle
              customStyles={{ minHeight: 300 }}
            >
              <SubHeader customStyles={{ marginBottom: 20 }}>
                No Tenants found?
              </SubHeader>
              <ContactIcon
                style={{
                  fontSize: 100,
                  color: "#1C2833",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              />
              <CaptionText>Try to create one Tenant</CaptionText>
            </Container>
          )}
        </React.Fragment>
      )}
      {foundTickets !== null && (
        <Container flex={1} customStyles={{ width: "100%", marginTop: 15 }}>
          {foundTickets.map((issue, i) => {
            let num = i + 1;
            return (
              <SingleTicket
                list={list}
                key={issue.id}
                num={num}
                ticket={issue}
                handleClose={handleClose}
                handleOpen={handleClickOpen}
              />
            );
          })}
        </Container>
      )}
      {foundTickets !== null && foundTickets.length === 0 && (
        <Container
          flex={1}
          column
          middle
          center
          customStyles={{ flexWrap: "wrap", marginTop: 15 }}
        >
          <SubHeader>No Tickets Found</SubHeader>
        </Container>
      )}
    </Container>
  );
};

export default AllTickets;
export { PAGINATION_QUERY };
