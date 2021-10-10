import React from "react";
import styled from "styled-components";
import {
  Container,
  ActionButton,
  IconButton,
  Text,
  Input,
  TextInput,
  NormalText,
  SubText,
  CaptionText,
  PrimaryButton,
  Header,
  SubHeader,
} from "../../styledComponents";
import StreetIcon from "@material-ui/icons/LocationOn";
import userPhoto from "../../../public/static/sandy.jpeg";
import AdjustIcon from "@material-ui/icons/Adjust";
import UserIcon from "@material-ui/icons/Face";
import TimeLineIcon from "@material-ui/icons/Timeline";
import HouseIcon from "@material-ui/icons/Kitchen";
import { formatDate } from "../../../lib/dateFormat";
import {
  withStyles,
  makeStyles,
  useTheme,
  fade,
} from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
  Divider,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Add from "@material-ui/icons/Add";
import TicketItem from "../TicketItem";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: 700,
    width: 500,
    borderRadius: 2,
    backgroundColor: "white",
    position: "relative",
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "white",
  },
  dialogActions: {
    // position: "absolute",
    width: "100%",
    // bottom: 0,
    padding: 0,
    margin: 0,
    border: "none",
    // backgroundColor: "white",
  },
  dialogContentStyle: {
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 0,
    border: "none",
    backgroundColor: "white",
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 1,
    backgroundColor: "#F3F2F1",
  },
  buildingImageStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 2,
    marginRight: 20,
    border: "1.5px dashed #F3F2F1",
    backgroundColor: "#F3F2F1",
  },
  inputStyle: {
    border: 0,
    borderRadius: 4,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#F5F8FA",
    // lineHeight: 2,
    minHeight: 60,
    fontSize: 12,
    "&:focus": {
      border: "1px solid #4C3AF7",
      backgroundColor: "#FEFEFF",
    },
  },
}));

const Wrapper = styled(Container)`
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 0px;
  background-color: white;
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
const CloseBtn = styled(ActionButton)`
  /* position: absolute;
  top: 0;
  right: 0; */
  z-index: 1304;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 6px;
  padding-left: 6px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.bgPrimary};
  ${(props) => props.customStyles}
`;

const AddBtn = styled(ActionButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

const CancelBtn = styled(PrimaryButton)`
  border: none;
  color: ${({ theme }) => theme.primaryDark};
  background-color: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.lightGrey};
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
  margin: 0px 2px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  /* background-color: red; */
`;

const DateWrapperStyles = styled(Container)`
  flex-direction: row;
  border-bottom: ${({ theme }) => `4px solid ${theme.btnPrimary}`};
  padding: 5px 0px;
  flex: 0.4;
  align-items: center;
  background-color: transparent;
`;

const DateHeader = (date) => {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };
  const nth = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  const newDate = pad(date);
  return (
    <DateWrapperStyles>
      <SubHeader customStyles={{ fontWeight: "500" }}>{newDate}</SubHeader>
      <Text customStyles={{ fontSize: 14, marginRight: 5 }}>
        {nth(newDate)}
      </Text>
      <SubHeader customStyles={{ fontWeight: "500" }}>
        {monthNames[month]}
      </SubHeader>
    </DateWrapperStyles>
  );
};
const SingleTicket = ({ ticket, num }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [list, setList] = React.useState(true);
  const [scroll, setScroll] = React.useState("paper");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { houseId, reported_by } = ticket;
  return (
    <div style={{ flex: 0 }}>
      <TicketItem list ticket={ticket} onClick={handleOpen} num={num} />
      <Dialog
        onClose={handleClose}
        classes={{
          paper: classes.dialogPaper,
        }}
        open={open}
        scroll={scroll}
      >
        <DialogTitle
          id="scroll-dialog-title"
          classes={{
            root: classes.dialogActionStyle,
          }}
        >
          <Container
            row
            center
            color="transparent"
            space="space-between"
            customStyles={{
              paddingTop: 15,
              // paddingBottom: 7,
              paddingRight: 10,
              paddingLeft: 30,
            }}
          >
            <Container row center flex={1} color="transparent">
              <DateHeader data={ticket.createdAt} />
            </Container>

            <CloseBtn onClick={() => handleClose()}>
              <CloseIcon style={{ fontSize: 23 }} />
            </CloseBtn>
          </Container>
        </DialogTitle>
        <DialogContent
          classes={{
            root: classes.dialogContentStyle,
          }}
        >
          <Wrapper>
            <Container flex={1} column customStyles={{ paddingTop: 25 }}>
              <Container flex={0} middle center column>
                <Avatar
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60 / 2,
                    backgroundColor: "#fff",
                    marginBottom: 5,
                  }}
                >
                  <SubHeader customStyles={{ fontSize: 16 }}>
                    {houseId.house_heading.charAt(0)}
                  </SubHeader>
                </Avatar>
                <SubText customStyles={{ color: "#000", marginBottom: 5 }}>
                  {reported_by.user_name}
                </SubText>
                {reported_by.userType.map((curr, i) => (
                  <NormalText
                    key={i}
                    customStyles={{ color: "gray", marginBottom: 5 }}
                  >
                    {curr}
                  </NormalText>
                ))}
              </Container>
              <Container
                flex={0.35}
                column
                customStyles={{
                  paddingLeft: 60,
                  paddingRight: 60,
                  paddingTop: 15,
                }}
              >
                <Container
                  flex={1}
                  column
                  color="white"
                  depth={4}
                  customStyles={{ padding: 15, marginBottom: 10 }}
                >
                  <SubHeader>&ldquo;</SubHeader>
                  <Container color="transparent">
                    <SubText>{ticket.description}</SubText>
                  </Container>
                </Container>
                <Container row center middle>
                  <Divider style={{ marginTop: 10, width: "40%" }} />
                </Container>
              </Container>
              <Container
                flex={0}
                column
                customStyles={{
                  paddingLeft: 25,
                  paddingRight: 15,
                  marginBottom: 10,
                  paddingTop: 10,
                }}
              >
                <SubHeader customStyles={{ fontSize: 12, color: "#17202A" }}>
                  Details
                </SubHeader>
                <Container flex={0} row>
                  <Container flex={0.5} column>
                    <Container flex={1} row>
                      <Container flex={0.5} row>
                        <SubText>Created</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText>{formatDate(ticket.reported_date)}</SubText>
                      </Container>
                    </Container>
                    <Container flex={1} row customStyles={{ paddingTop: 10 }}>
                      <Container flex={0.5} row>
                        <SubText>Reported way</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText>{ticket.reported_way}</SubText>
                      </Container>
                    </Container>
                    <Container flex={1} row customStyles={{ paddingTop: 10 }}>
                      <Container flex={0.5} row>
                        <SubText>House</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText>{houseId.house_heading}</SubText>
                      </Container>
                    </Container>
                  </Container>

                  {/*  <Container flex={0.5} column>
                    <Container flex={1} row>
                      <Container flex={0.5} row>
                        <SubText>Assigned by</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText/>
                      </Container>
                    </Container>
                    <Container flex={1} row customStyles={{ paddingTop: 10 }}>
                      <Container flex={0.5} row>
                        <SubText>Reported way</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText>{ticket.reported_way}</SubText>
                      </Container>
                    </Container>
                    <Container flex={1} row customStyles={{ paddingTop: 10 }}>
                      <Container flex={0.5} row>
                        <SubText>House</SubText>
                      </Container>
                      <Container flex={0.5}>
                        <SubText>{houseId.house_heading}</SubText>
                      </Container>
                    </Container>
              </Container>*/}
                </Container>
              </Container>
            </Container>
          </Wrapper>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Container flex={1} row right center customStyles={{ padding: 10 }}>
            dfsdsdf
          </Container>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SingleTicket;

{
  /**<Container
              flex={0.35}
              column
              color="transparent"
              space="space-between"
              customStyles={{
                paddingTop: 15,
                paddingRight: 15,
                paddingLeft: 15,
                border: "1px solid #E1E1E1",
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <Container
                row
                center
                flex={0}
                color="transparent"
                space="space-between"
              >
                
                <Container row center flex={1} color="transparent">
                  <SubHeader customStyles={{ fontSize: 13 }}>@</SubHeader>
                  <CaptionText customStyles={{ marginLeft: 8 }}>
                    Issue details
                  </CaptionText>
                </Container>
                <Container row center right flex={1} color="transparent">
                  <SubHeader customStyles={{ fontSize: 13 }}>Status:</SubHeader>
                  <CloseBtn customStyles={{ maxHeight: 30, marginLeft: 10 }}>
                    Open
                  </CloseBtn>
                </Container>
              </Container>
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "5px 0px" }}
              >
                <Text customStyles={{ fontSize: 16 }}>{ticket.title}</Text>
              </Container>
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "2px 0px" }}
              >
                <CaptionText customStyles={{ fontSize: 15 }}>
                  {ticket.description}
                </CaptionText>
              </Container>
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "2px 0px" }}
              >
                <Text customStyles={{ fontSize: 14 }}>by:</Text>
                <CloseBtn
                  customStyles={{
                    maxHeight: 30,
                    backgroundColor: "#e1e9f6",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  RL
                </CloseBtn>
                <Text customStyles={{ fontSize: 14 }}>reported_way:</Text>
                <Text customStyles={{ fontSize: 14 }}>
                  {ticket.reported_way}
                </Text>
              </Container>
            </Container>
            <Container
              flex={0.3}
              column
              color="transparent"
              space="space-between"
              customStyles={{
                padding: 15,
                border: "1px solid #E1E1E1",
                borderRadius: 10,
              }}
            >
              <Container
                row
                center
                flex={0}
                color="transparent"
                space="space-between"
              >
               
                <Container row center flex={1} color="transparent">
                  <SubHeader customStyles={{ fontSize: 13 }}>@</SubHeader>
                  <CaptionText customStyles={{ marginLeft: 8 }}>
                    18:34 PM
                  </CaptionText>
                </Container>
                <Container row center right flex={1} color="transparent">
                  <SubHeader customStyles={{ fontSize: 15 }}>Status:</SubHeader>
                  <CloseBtn customStyles={{ maxHeight: 30, marginLeft: 10 }}>
                    Open
                  </CloseBtn>
                </Container>
              </Container>
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "5px 0px" }}
              >
                <SubText customStyles={{ fontSize: 15, marginRight: 15 }}>
                  Title:
                </SubText>
                <Text customStyles={{ fontSize: 16 }}>{ticket.title}</Text>
              </Container>
              <Container
                row
                center
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "2px 0px" }}
              >
                <CaptionText
                  customStyles={{
                    fontSize: 15,
                    color: "black",
                    marginRight: 15,
                  }}
                >
                  Description:
                </CaptionText>
                <CaptionText customStyles={{ fontSize: 15 }}>
                  {ticket.description}
                </CaptionText>
              </Container>
              <Container
                row
                center
                right
                flex={0}
                color="transparent"
                customStyles={{ marginLeft: 20, padding: "2px 0px" }}
              >
                <Text customStyles={{ fontSize: 14 }}>Reported by:</Text>
                <CloseBtn
                  customStyles={{
                    maxHeight: 30,
                    backgroundColor: "#e1e9f6",
                    marginLeft: 10,
                  }}
                >
                  RL
                </CloseBtn>
              </Container>
            </Container> */
}
