import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import styled from "styled-components";
import {
  Typography,
  Paper,
  InputBase,
  Divider,
  IconButton,
  GridList,
  Avatar,
  Chip,
  Button,
  GridListTile
} from "@material-ui/core";
import { theme as customTheme } from "../../Page";
import ListIcon from "@material-ui/icons/List";
import GridIcon from "@material-ui/icons/ViewModule";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import BedIcon from "@material-ui/icons/SingleBed";
import BathroomIcon from "@material-ui/icons/Bathtub";
import SearchIcon from "@material-ui/icons/Search";
import CustomDrawer from "../Drawer";
import CreateNewHouse from "./create";
import Houses from "../../queryComponents/Houses";
import {
  Container,
  PrimaryButton,
  ActionButton,
  CommandButton,
  SubText,
  CaptionText,
  NormalText,
  Text
} from "../../styledComponents";
import userPhoto from "../../../public/static/sandy.jpeg";
import DeleteHouse from "./DeleteHouse";
import loadingImg from "../../../public/static/126.gif";
import UpdateHouse from "./UpdateHouse";
import DataTable from "../../DataTable";

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
    height: 33,
    borderRadius: 2,
    marginRight: 10,
    backgroundColor: "#E1E1E1",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "4px",
    display: "flex",
    alignItems: "center",
    width: 200
  },
  input: {
    marginLeft: 10,
    fontSize: 13,
    flex: 1
  },
  iconButton: {
    padding: 10,
    borderRadius: 0
  },
  divider: {
    height: 33
  },
  dividerLine: {
    width: "100%"
  },
  gridList: {
    display: "flex",
    flex: 1,

    height: "100%",
    overflowY: "hidden"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  houseTileStyle: {
    margin: 5,
    borderRadius: 2,
    padding: 0,
    backgroundColor: "white",
    boxShadow: `0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132),
    0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)`,
    "&:hover": {
      transform: `scale(1.005) translate(0.2px, 0px)`
    }
  },
  tileWrapper: {
    width: "100%",
    height: "100%"
    // backgroundColor: "pink"
  },
  imageWrapper: {
    padding: 2,
    borderRadius: 4,
    transition: `transform 600ms`
  },
  imageStyle: {
    width: "100%",
    height: 90,
    objectFit: "fit"
  },
  small: {
    // borderRadius: 0,
    backgroundColor: "#E1E1E1",
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 5
  }
}));

const CmdButton = styled(CommandButton)`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.lightGrey : "transparent"};
  min-width: 50px;
  border-radius: 2px;
  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;
const ActionBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const Index = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openSlide, setOpenSlide] = React.useState(true);
  const [house, setHouse] = React.useState({});
  const [layout, setLayout] = React.useState(0);

  const handleSlideOpen = () => {
    setOpenSlide(true);
  };
  const handleSlideClose = () => {
    setOpenSlide(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onViewHouse = house => {
    setHouse(house);
    handleSlideOpen();
  };

  const _tileCard = house => {
    const { countryId, provinceId, districtId, images } = house;
    const image = images[0];
    return (
      <Link href={"house/[id]"} as={"house/" + house.id}>
        <a style={{ textDecoration: "none" }}>
          <Container
            flex={1}
            column
            depth={64}
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
              {house.isActive && (
                <CheckIcon style={{ fontSize: 20, color: "green" }} />
              )}
            </Container>
            {images.length === 0 && (
              <Container
                flex={0.6}
                middle
                center
                className={classes.imageWrapper}
                color="transparent"
              >
                <Avatar>{house.house_heading.charAt(0)}</Avatar>
              </Container>
            )}
            {images.length !== 0 && (
              <Container
                flex={0.6}
                className={classes.imageWrapper}
                color="transparent"
              >
                <img src={image.image} className={classes.imageStyle} />
              </Container>
            )}

            <Container
              flex={0.4}
              column
              color="transparent"
              customStyles={{ paddingLeft: 5, paddingRight: 5 }}
            >
              <Typography variant="h6" gutterBottom>
                {house.house_heading}
              </Typography>
              <Container row center flex={0} color="transparent">
                <Typography variant="body2" gutterBottom>
                  {countryId.name + ", "}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {provinceId.name + ", "}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {districtId.name}
                </Typography>
              </Container>
              {/* <Divider
                className={classes.dividerLine}
                orientation="horizontal"
             />*/}
              <Container
                row
                center
                flex={0}
                space="space-between"
                color="transparent"
              >
                <Container row center middle flex={1} color="transparent">
                  <BedIcon style={{ fontSize: 18 }} />
                  <span>4</span>
                </Container>
                <Container row center middle flex={1} color="transparent">
                  <BathroomIcon style={{ fontSize: 15 }} />
                  <span>4</span>
                </Container>
                <Container
                  row
                  middle
                  center
                  flex={1}
                  center
                  color="transparent"
                >
                  <Button color="primary" onClick={() => onViewHouse(house)}>
                    Edit
                  </Button>
                </Container>
              </Container>
            </Container>
          </Container>
        </a>
      </Link>
    );
  };
  const _houseCard = house => {
    const { countryId, provinceId, districtId, images } = house;
    const image = images[0];
    return (
      <Container
        flex={1}
        depth={64}
        column
        color="white"
        customStyles={{ width: "100%", height: "100%", position: "relative" }}
      >
        {images.length === 0 && (
          <Container
            flex={0.5}
            middle
            center
            // className={classes.imageWrapper}
            color="transparent"
          >
            <Avatar>{house.house_heading.charAt(0)}</Avatar>
          </Container>
        )}
        {images.length !== 0 && (
          <Container
            flex={0.5}
            // className={classes.imageWrapper}
            color="transparent"
          >
            {/* <img src={image.image} className={classes.imageStyle} />*/}
          </Container>
        )}
        <Container
          flex={0.35}
          column
          customStyles={{ paddingTop: 5, paddingLeft: 5, paddingRight: 5 }}
        >
          <Container
            column
            space="space-around"
            flex={0.6}
            customStyles={{ paddingTop: 5 }}
          >
            <CaptionText customStyles={{ fontWeight: 600 }}>
              {house.house_heading}
            </CaptionText>
            <NormalText customStyles={{ color: "#3A3A3A" }}>
              {provinceId.name + ", " + districtId.name}
            </NormalText>
          </Container>
          <Container flex={0.4} middle>
            <span>heyy</span>
          </Container>
        </Container>
        <Container flex={0}>
          <Divider />
        </Container>

        <Container row flex={0.15}>
          <Container flex={1}>
            <CommandButton
              customStyles={{ height: "100%", fontSize: "12px" }}
              onClick={() => onViewHouse(house)}
            >
              Edit
            </CommandButton>
          </Container>
          <Container>
            <Divider orientation="vertical" />
          </Container>
          <Container flex={1}>
            <CommandButton customStyles={{ height: "100%", fontSize: "12px" }}>
              Delete
            </CommandButton>
          </Container>
        </Container>
      </Container>
    );
  };
  const _row = house => {
    return (
      <Container
        color="transparent"
        key={house.id}
        row
        flex={false}
        customStyles={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 15,
          paddingBottom: 15,
          width: "100%",
          borderRadius: 3,
          marginBottom: 5,
          border: "1px solid #E1E1E1"
        }}
      >
        <Container flex={0.3} row center left color="transparent">
          <Avatar alt="house" src={userPhoto} className={classes.small} />
          <SubText>{house.name}</SubText>
        </Container>
        <Container flex={0.175} column middle left color="transparent">
          <SubText>{house.no}</SubText>
        </Container>
        <Container flex={0.2} row center left color="transparent">
          {house.tenants.map(ten => {
            return (
              <Avatar
                alt="house"
                key={ten.id}
                src={userPhoto}
                className={classes.small}
                style={{ borderRadius: 2 }}
              />
            );
          })}
          <Avatar
            className={classes.small}
            style={{ borderRadius: 2, backgroundColor: "#E1E1E1" }}
          >
            <CaptionText>+ 5</CaptionText>
          </Avatar>
        </Container>
        <Container flex={0.175} column middle left color="transparent">
          <Chip
            variant="primary"
            label={house.date}
            style={{ width: 80, height: 25, borderRadius: 5 }}
          />
        </Container>
        <Container flex={0.15} column middle left color="transparent">
          <Chip
            variant="primary"
            label={house.status}
            style={{
              width: 80,
              height: 25,

              backgroundColor: "light-blue"
            }}
          />
        </Container>

        <Container flex={0.05} column middle right color="transparent">
          <SubText>Action</SubText>
        </Container>
      </Container>
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
        color="white"
        id={"page-container"}
        customStyles={{
          position: "relative",
          borderRadius: 5
        }}
      >
        <Container
          color="transparent"
          customStyles={{
            width: "100%",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10
          }}
          row
        >
          <Container flex={1} row middle left color="transparent">
            <CmdButton isSelected={layout === 0} onClick={() => setLayout(0)}>
              <ListIcon style={{ fontSize: 23, marginRight: 1 }} />
              <SubText>List</SubText>
            </CmdButton>
            <CmdButton
              onClick={() => setLayout(1)}
              isSelected={layout === 1}
              customStyles={{ marginLeft: 5 }}
            >
              <GridIcon style={{ fontSize: 23, marginRight: 1 }} />
              <SubText>Grid</SubText>
            </CmdButton>
          </Container>
          <Container flex={1} row middle right color="transparent">
            <Paper
              component="form"
              className={classes.searchRoot}
              elevation={0}
            >
              <InputBase
                className={classes.input}
                placeholder="Search house by name"
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
            <ActionBtn onClick={handleDrawerOpen}>
              <AddIcon style={{ fontSize: 23 }} />
              <SubText>New</SubText>
            </ActionBtn>
          </Container>
        </Container>
        <Container
          flex={false}
          row
          color="#e5e7e9"
          customStyles={{ width: "100%", padding: 10 }}
        >
          <Container flex={0.3} column middle left color="transparent">
            <SubText>Name</SubText>
          </Container>
          <Container flex={0.175} column middle left color="transparent">
            <SubText>House_no</SubText>
          </Container>
          <Container flex={0.2} column middle left color="transparent">
            <SubText>Tenants</SubText>
          </Container>
          <Container flex={0.175} column middle left color="transparent">
            <SubText>Due date</SubText>
          </Container>
          <Container flex={0.15} column middle left color="transparent">
            <SubText>Status</SubText>
          </Container>

          <Container flex={0.05} column middle right color="transparent" />
        </Container>
        <Container
          color="transparent"
          column
          flex={1}
          customStyles={{ padding: 10 }}
        >
          {[
            {
              id: 1,
              name: "Barcelona",
              no: "#AD120",
              tenants: [
                { id: 1, image: "rene" },
                { id: 2, image: "you" },
                { id: 3, image: "me" }
              ],
              date: "20-March-2020",
              status: "Active"
            },
            {
              id: 2,
              name: "Paris",
              no: "#AD40",
              tenants: [
                { id: 1, image: "rene" },
                { id: 2, image: "you" },
                { id: 3, image: "me" }
              ],
              date: "20-09-2020",
              status: "not active"
            }
          ].map(house => _row(house))}
        </Container>
      </Container>

      <CustomDrawer open={openSlide} house={house}>
        <UpdateHouse house={house} onClose={handleSlideClose} />
      </CustomDrawer>
      <CustomDrawer
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        open={open}
      >
        <CreateNewHouse onClose={handleDrawerClose} />
      </CustomDrawer>
    </Container>
  );
};

export default Index;

{
  /*<GridList
cellHeight={180}
cols={7}
className={classes.gridList}
justify="center"
>
{houses.map(house => (
  <GridListTile
    key={house.id}
    className={classes.houseTileStyle}
  >
    <Link href={"house/[id]"} as={"house/" + house.id}>
      <a style={{ textDecoration: "none" }}>
        {_houseCard(house)}
      </a>
    </Link>
  </GridListTile>
))}
</GridList>*/
}

{
  /*<Container
          id="command-header"
          row
          space="space-between"
          customStyles={{ marginTop: 10, marginLeft: 5, marginBottom: 10 }}
        >
          <Paper component="form" className={classes.searchRoot} elevation={0}>
            <InputBase
              className={classes.input}
              placeholder="Search house by name"
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

          <Container flex={0.2} row middle center>
            <PrimaryButton onClick={handleDrawerOpen}>
              <span
                style={{
                  marginRight: 5,
                  // marginLeft: 3,
                  padding: 0,
                  fontWeight: 500,
                  fontSize: "24px"
                }}
              >
                +
              </span>
            </PrimaryButton>
          </Container>
        </Container>
        <Houses>
          {({ data, loading }) => {
            if (data) {
              const houses = data.getUserHouses;

              if (houses.length !== 0) {
                return <DataTable />;
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
        </Houses> */
}
