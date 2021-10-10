import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled, { keyframes, css } from "styled-components";
import onClickOutside from "react-onclickoutside";
import Container from "./Container";
import { OutlinedButton, CommandButton } from "./Button";
import { CaptionText } from "./Text";
import DownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckIcon from "@material-ui/icons/Done";
import { Button, Typography, Popover } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0,
  },
}));

const DropWrapper = styled(Container)`
  flex: 0;
  background-color: transparent;
  position: relative;

  ${(props) => props.customStyles};
`;

const DropHeader = styled(OutlinedButton)`
  display: flex;
  flex-direction: row;
  flex: 0;
  align-items: center;
  justify-content: space-between;
  min-height: 35px;
  padding: 0px 5px;
  border: 1px solid #d7dbdd;
  border-radius: 1px;
  background-color: #f5f8fa;
  outline: transparent;
  ${(open) =>
    open &&
    css` border: 1px solid #5B86C6,
    background-color: #FEFEFF`}

  ${(props) => props.headerStyles};
`;
const DropHeaderTitle = styled(Container)`
  display: flex;
  background-color: transparent;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const DropListContainer = styled(Container)`
  display: flex;
  flex: 1;
  border-radius: 1px;
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
    0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);

  ${(props) => props.customStyles}
`;

const DropListItem = styled(CommandButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`;

const Dropdown = ({
  anchorEl,
  handleOpen,
  handleClose,
  title,
  items,
  wrapperStyles,
  selection,
  setSelection,
  headerStyles,
  multiSelect,
}) => {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  Dropdown.handleClickOutside = () => {
    handleClose();
  };

  const handleClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };
  const isItemSelected = (item) => {
    if (selection.some((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <DropWrapper customStyles={wrapperStyles}>
      <DropHeader onClick={handleOpen} type="button">
        <DropHeaderTitle>
          <CaptionText customStyles={{ fontSize: 14, color: "#1c2833" }}>
            {title}
          </CaptionText>
        </DropHeaderTitle>
        <Container flex={0} column middle center color="transparent">
          <DownIcon />
        </Container>
      </DropHeader>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        elevation={0}
        classes={{
          paper: classes.popoverPaper,
        }}
      >
        <DropListContainer customStyles={wrapperStyles}>
          {items.map((item) => {
            return (
              <DropListItem
                key={item.id}
                type="button"
                onClick={() => handleClick(item)}
              >
                <span>{item.value}</span>
                {isItemSelected(item) && (
                  <CheckIcon style={{ color: "green" }} />
                )}
              </DropListItem>
            );
          })}
        </DropListContainer>
      </Popover>
    </DropWrapper>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
