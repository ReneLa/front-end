import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";
import {
  Container,
  SubText,
  NormalText,
  OutlinedButton,
} from "../../../styledComponents";
import AgentCard from "./AgentCard";
import AddIcon from "@material-ui/icons/Add";
import HouseDetails from "./HouseDetails";
import Details from "./Details";
// import agentPhoto from "../../../../public/static/rene.jpeg";
// import mbanzaPhoto from "../../../../public/static/mbanza png.png";
// import hasPhoto from "../../../../public/static/HAS.png";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 20,
  },
  gridItem: {
    flex: 1,
    margin: 0,
    // height: "100%",
    // backgroundColor: "green"
  },
  agencyItem: {
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    cursor: "pointer",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#c8d7ee",
    },
  },
}));
const SingleHousePage = ({ house }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} flex={1} column>
      <Container column flex={1}>
        <Grid
          container
          spacing={0}
          style={{
            flex: 1,
            height: "100%",
          }}
        >
          <Grid item xs={9} className={classes.gridItem}>
            <Details house={house} />
          </Grid>
          <Grid item xs={3} className={classes.gridItem}>
            <Container
              flex={1}
              column
              color="transparent"
              style={{
                height: "100%",
                maxHeight: "90vh",
                paddingLeft: 15,
              }}
            >
              <Container flex={1}>
                <AgentCard house={house} />
              </Container>
              <Container flex={1} column color="transparent">
                <Container
                  flex={0.2}
                  color="transparent"
                  column
                  middle
                  customStyles={{ paddingTop: 10 }}
                >
                  <SubText customStyles={{ fontWeight: "600" }}>
                    Suggested agents
                  </SubText>
                  <NormalText>Based on your location</NormalText>
                </Container>
                <Container
                  flex={0.8}
                  color="transparent"
                  customStyles={{ paddingRight: 3 }}
                >
                  {[
                    {
                      id: 1,
                      company: "HouseAssist Space",
                      image: null, // hasPhoto
                      description: " Innovative and creative ",
                    },
                    {
                      id: 2,
                      company: "Mbanza property",
                      image: null, //mbanzaPhoto
                      description: " customer is number one ",
                    },
                    {
                      id: 3,
                      company: "LaSoft Systems Inc",
                      image: null, //agentPhoto
                      description: " mobile first oriented",
                    },

                    {
                      id: 4,
                      company: "Lorem ipsum",
                      image: null, //agentPhoto
                      description: " a Lorem ipsum",
                    },
                  ].map((agent) => {
                    return (
                      <Container
                        key={agent.id}
                        row
                        className={classes.agencyItem}
                      >
                        <Container flex={0.1} middle center color="transparent">
                          <Avatar
                            src={agent.image}
                            style={{ height: 30, width: 30 }}
                          />
                        </Container>

                        <Container
                          flex={0.7}
                          column
                          color="transparent"
                          customStyles={{ paddingLeft: 10 }}
                        >
                          <NormalText customStyles={{ fontWeight: "600" }}>
                            {agent.company}
                          </NormalText>
                          <NormalText>{agent.description}</NormalText>
                        </Container>
                        <Container flex={0.2} middle center color="transparent">
                          <OutlinedButton
                            bColor="#0078D4"
                            customStyles={{
                              justifyContent: "center",
                              paddingTop: "2px",
                              paddingBottom: "2px",
                              borderRadius: 15,
                            }}
                          >
                            <AddIcon style={{ color: "#0078D4" }} /> add
                          </OutlinedButton>
                        </Container>
                      </Container>
                    );
                  })}
                </Container>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
      {/*  <DetailsContainer house={house} />*/}
    </Container>
  );
};

export default SingleHousePage;
