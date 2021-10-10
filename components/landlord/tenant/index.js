import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
  GridList,
  Avatar,
  Button,
  GridListTile
} from "@material-ui/core";
import { theme as customTheme } from "../../Page";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import BedIcon from "@material-ui/icons/SingleBed";
import BathroomIcon from "@material-ui/icons/Bathtub";
import SearchIcon from "@material-ui/icons/Search";
import CustomDrawer from "../Drawer";
import Tenants from "../../queryComponents/Tenants";
import { Container } from "../../styledComponents";
import loadingImg from "../../../public/static/126.gif";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flex: 1,
    height: 500,
    flexDirection: "column",
    padding: theme.spacing(1)
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: theme.spacing(2)
    // padding: theme.spacing(0)
    // ...theme.mixins.toolbar
  },
  searchRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  input: {
    marginLeft: 10,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  dividerLine: {
    width: "100%"
    // marginTop: 3
  },
  gridList: {
    display: "flex",
    flex: 1,
    // backgroundColor: "blue",
    // width: "100%",
    height: "100%",
    overflowY: "hidden"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  tenantTileStyle: {
    // display: "flex",
    // flex: 1,
    // width: 150,
    borderRadius: 5,

    margin: 5,
    transition: `transform 600ms`,
    "&:hover": {
      // zIndex: 1,
      // backgroundColor: "#0B1B21",
      transform: `scale(1.03) translate(0.2px, 0px)`
    }
  },
  tileWrapper: {
    width: "100%",
    height: "100%"
    // backgroundColor: "pink"
  },
  imageWrapper: {
    // display: "flex",
    // flex: 1,
    // width: 150,
    padding: 2,
    borderRadius: 4,
    transition: `transform 600ms`
    // "&:hover": {
    //   border: "1px solid red"
    // }
  },
  imageStyle: {
    width: "100%",
    height: 90,
    objectFit: "fit"
  }
}));

const Index = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onViewHouse = house => {
    setHouse(house);
  };

  const _tileCard = tenant => {
    const { userId, houseId } = tenant;

    return (
      <Link href={"tenant/[id]"} as={"tenant/" + tenant.id}>
        <a style={{ textDecoration: "none" }}>
          <Container
            flex={1}
            column
            className={classes.tileWrapper}
            color="white"
          >
            <Container
              middle
              center
              color="transparent"
              customStyles={{
                position: "absolute",
                top: 3,
                right: 3
              }}
            >
              {tenant.isActive && (
                <CheckIcon style={{ fontSize: 20, color: "green" }} />
              )}
            </Container>

            <Container
              flex={0.6}
              middle
              column
              center
              className={classes.imageWrapper}
              color="transparent"
            >
              <Avatar>{tenant.firstName.charAt(0)}</Avatar>
              <Typography variant="h6" gutterBottom>
                {tenant.firstName + " " + tenant.lastName}
              </Typography>
            </Container>

            <Container
              flex={0.4}
              row
              color="transparent"
              customStyles={{ paddingLeft: 5, paddingRight: 5 }}
            >
              <Container row center middle flex={1} color="transparent">
                <BathroomIcon style={{ fontSize: 15 }} />
              </Container>
              <Container row middle center flex={1} center color="transparent">
                <Button color="primary">View Profile</Button>
              </Container>
            </Container>
          </Container>
        </a>
      </Link>
    );
  };

  return (
    <Container
      flex={1}
      column
      customStyles={{
        paddingLeft: 20,
        height: "100%"
      }}
    >
      <Container
        flex={1}
        id={"page-container"}
        customStyles={{ position: "relative" }}
      >
        <Container
          id="command-header"
          row
          space="space-between"
          customStyles={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}
        >
          <Paper component="form" className={classes.searchRoot} elevation={0}>
            <InputBase
              className={classes.input}
              placeholder="Search any tenant"
              // inputProps={{ "aria-label": "search google maps" }}
            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>

          <Container flex={0.1} row middle center>
            <button onClick={handleDrawerOpen}> Add Tenant</button>
          </Container>
        </Container>

        <Tenants>
          {({ data, loading }) => {
            if (data) {
              const tenants = data.getUserTenants;

              if (tenants.length === 0) {
                return (
                  <GridList
                    cellHeight={150}
                    cols={7}
                    spacing={0}
                    className={classes.gridList}
                  >
                    {[
                      {
                        id: 1,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 2,
                        isActive: false,
                        firstName: "Mehn",
                        lastName: "Soft"
                      },
                      {
                        id: 3,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 4,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 5,
                        isActive: false,
                        firstName: "Mehn",
                        lastName: "Soft"
                      },
                      {
                        id: 6,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 7,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 8,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 9,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 10,
                        isActive: false,
                        firstName: "Mehn",
                        lastName: "Soft"
                      },
                      {
                        id: 11,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 12,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 13,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 14,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      },
                      {
                        id: 15,
                        isActive: false,
                        firstName: "Mehn",
                        lastName: "Soft"
                      },
                      {
                        id: 16,
                        isActive: true,
                        firstName: "Nein",
                        lastName: "gehts"
                      },
                      {
                        id: 17,
                        isActive: true,
                        firstName: "Rene",
                        lastName: "La"
                      }
                    ].map(tenant => (
                      <GridListTile
                        key={tenant.id}
                        cols={1}
                        className={classes.tenantTileStyle}
                      >
                        {_tileCard(tenant)}
                      </GridListTile>
                    ))}
                  </GridList>
                );
              }
              return null;
            }

            return (
              <Container flex={1} column middle center>
                {loading && (
                  <img src={loadingImg} style={{ width: 25, height: 25 }} />
                )}
              </Container>
            );
          }}
        </Tenants>
      </Container>

      <CustomDrawer
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        open={open}
      ></CustomDrawer>
    </Container>
  );
};

export default Index;
