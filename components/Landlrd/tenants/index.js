import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import ContactIcon from "@material-ui/icons/PersonPin";
import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import { perPage } from "../../../config";
import SearchTenants from "../../queryComponents/SearchTenants";
import {
  ActionButton, CaptionText, Container, Header, IconButton, SubHeader, SubText
} from "../../styledComponents";
import TenantCard from "../TenantCard";
import CreateTenant from "./create/CreateTenant";

const SearchWrapper = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px 110px 10px 110px;
  /* background-color: white; */
`;
const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: 0px;
  padding-left: 110px;
  padding-bottom: 15px;
  padding-right: 110px;
`;
const ActionBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
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
    tenantsConnection {
      aggregate {
        count
      }
    }
  }
`;

const TenantsPagination = ({ setSkip }) => {
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
          const count = data.tenantsConnection.aggregate.count;
          const pages = Math.ceil(count / perPage);
          let backDisabled = currentPage <= 1;
          let nextDisabled = currentPage >= pages;
          return (
            <Container
              flex={0}
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
const Tenants = ({ tenants, setSkip, ...other }) => {
  const [loading, setLoading] = React.useState(false);
  const [foundTenants, setFound] = React.useState(null);
  return (
    <Container flex={1}>
      <SearchWrapper>
        <Header>Your Tenants</Header>
        <Container row center flex={1} right>
          <SubText>Search:</SubText>
          <SearchTenants setLoading={setLoading} setFound={setFound} />
          <CreateTenant />
        </Container>
      </SearchWrapper>

      <Wrapper>
        <Container
          space="space-between"
          center
          row
          customStyles={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Container row center flex={1}></Container>
        </Container>
        {foundTenants === null && (
          <React.Fragment>
            {tenants && tenants.length > 0 && (
              <TenantsPagination setSkip={setSkip} />
            )}

            <Container flex={1} row customStyles={{ flexWrap: "wrap" }}>
              {tenants &&
                tenants.map((tenant) => {
                  return (
                    <TenantCard key={tenant.id} tenant={tenant} {...other} />
                  );
                })}
            </Container>
            {tenants && tenants.length <= 0 && (
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
        {foundTenants !== null && (
          <Container flex={1} row customStyles={{ flexWrap: "wrap" }}>
            {foundTenants.map((ten) => {
              return <TenantCard key={ten.id} tenant={ten} {...other} />;
            })}
          </Container>
        )}
        {foundTenants !== null && foundTenants.length === 0 && (
          <Container
            flex={1}
            column
            middle
            center
            customStyles={{ flexWrap: "wrap" }}
          >
            <SubHeader>No House Found</SubHeader>
          </Container>
        )}
      </Wrapper>
    </Container>
  );
};

export default Tenants;
export { PAGINATION_QUERY };
