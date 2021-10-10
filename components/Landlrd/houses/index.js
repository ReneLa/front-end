import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  Container,
  Text,
  CommandButton,
  PrimaryButton,
  SearchInput,
  OutlinedButton,
  SubText,
  ActionButton,
  IconButton,
  Header,
  SubHeader,
  CaptionText,
  Input,
  TextInput,
} from "../../styledComponents";
import SearchHouses from "../../queryComponents/SearchHouses";
import styled from "styled-components";
import HouseItem from "../HouseItem";
import CreateHouse from "./create/CreateHouse";
import { Divider, Icon } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeWork";
import DecreaseIcon from "@material-ui/icons/ArrowDropDown";
import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import { perPage } from "../../../config";
import loadingImg from "../../../public/static/126.gif";

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
    housesConnection {
      aggregate {
        count
      }
    }
  }
`;
const HousesPagination = ({ setSkip }) => {
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
          const count = data.housesConnection.aggregate.count;
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

const Houses = (props) => {
  const [showNumber, setNumber] = React.useState(10);
  const [loading, setLoading] = React.useState(false);
  const [foundHouses, setFound] = React.useState(null);

  if (loading) {
    return (
      <Container flex={1}>
        <SearchWrapper>
          <Header>Your Houses</Header>
          <Container row center flex={1} right>
            <SubText>Search:</SubText>
            <SearchHouses setLoading={setLoading} setFound={setFound} />
            <CreateHouse />
          </Container>
        </SearchWrapper>
        <Wrapper>
          <Container flex={1} middle center column>
            <img src={loadingImg} style={{ width: 20, height: 20 }} />
          </Container>
        </Wrapper>
      </Container>
    );
  }
  return (
    <Container flex={1}>
      <SearchWrapper>
        <Header>Your Houses</Header>
        <Container row center flex={1} right>
          <SubText>Search:</SubText>
          <SearchHouses setLoading={setLoading} setFound={setFound} />
          <CreateHouse />
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
        {foundHouses === null && (
          <React.Fragment>
            {props.houses.length > 0 && (
              <HousesPagination setSkip={props.setSkip} />
            )}
            <Container flex={1} row customStyles={{ flexWrap: "wrap" }}>
              {props.houses.length > 0 &&
                props.houses.map((house) => {
                  return <HouseItem key={house.id} house={house} {...props} />;
                })}
            </Container>
            {props.houses.length <= 0 && (
              <Container
                flex={1}
                column
                center
                middle
                customStyles={{ minHeight: 300 }}
              >
                <SubHeader customStyles={{ marginBottom: 20 }}>
                  No House found?
                </SubHeader>
                <HomeIcon
                  style={{
                    fontSize: 100,
                    color: "#1C2833",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                />
                <CaptionText>Try to create more houses</CaptionText>
              </Container>
            )}
          </React.Fragment>
        )}
        {foundHouses !== null && (
          <Container flex={1} row customStyles={{ flexWrap: "wrap" }}>
            {foundHouses.map((house) => {
              return <HouseItem key={house.id} house={house} {...props} />;
            })}
          </Container>
        )}
        {foundHouses !== null && foundHouses.length === 0 && (
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

export default Houses;
export { PAGINATION_QUERY };
