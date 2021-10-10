module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1Wzk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Style");

/***/ }),

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6L5Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Container["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ styledComponents_Input; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ styledComponents_TextInput; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ PrimaryButton; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ OutlinedButton; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ActionButton; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ IconButton; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ styledComponents_FlatButton; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ CommandButton; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Header; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ SubHeader; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ Text; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ SubText; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CaptionText; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ NormalText; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ styledComponents_SearchInput; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ DropDown; });

// UNUSED EXPORTS: CardStyles, CardActions, CardFooter, CardContent, CardImage, Title

// EXTERNAL MODULE: ./components/styledComponents/Container.js
var Container = __webpack_require__("RaUI");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styledComponents/Button.js


const Button = external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "d4hwwk-0"
})(["position:relative;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;display:flex;text-align:center;align-items:center;justify-content:center;cursor:pointer;vertical-align:top;background-color:transparent;user-select:none;outline:transparent;"]);
const PrimaryButton = external_styled_components_default()(Button).withConfig({
  displayName: "Button__PrimaryButton",
  componentId: "d4hwwk-1"
})(["padding-top:0px;padding-right:16px;padding-bottom:0px;padding-left:16px;color:white;font-size:13;background-color:", ";color:rgb(255,255,255);border-width:1px;min-height:32px;border-style:solid;border-color:", ";border-image:initial;text-decoration:none;border-radius:2px;&:hover{background-color:", ";border-color:", ";}", ";"], ({
  theme,
  color
}) => color ? color : theme.btnPrimary, ({
  theme,
  color
}) => color ? color : theme.btnPrimary, ({
  theme
}) => theme.btnHover, ({
  theme,
  color
}) => color ? color : theme.btnHover, props => props.customStyles);
const OutlinedButton = external_styled_components_default()(Button).withConfig({
  displayName: "Button__OutlinedButton",
  componentId: "d4hwwk-2"
})(["padding-top:0px;padding-right:4px;padding-bottom:0px;padding-left:4px;height:32px;color:", ";border-width:0.5px;border-style:solid;border-color:", ";border-image:initial;text-decoration:none;border-radius:2px;", ";&:hover{background-color:", ";}"], ({
  theme,
  color
}) => color ? color : theme.textPrimary, ({
  theme,
  bColor
}) => bColor ? bColor : `rgb(138, 136, 134)`, props => props.customStyles, ({
  theme
}) => theme.lightGrey);
const CommandButton = external_styled_components_default()(Button).withConfig({
  displayName: "Button__CommandButton",
  componentId: "d4hwwk-3"
})(["height:100%;color:", ";border-width:initial;border-style:none;border-color:initial;border-image:initial;text-decoration:none;border-radius:0px;", ";&:hover{background-color:", ";}"], ({
  theme,
  color
}) => color ? color : theme.textPrimary, props => props.customStyles, ({
  theme
}) => theme.lightGrey);
const ActionButton = external_styled_components_default()(Button).withConfig({
  displayName: "Button__ActionButton",
  componentId: "d4hwwk-4"
})(["padding-top:0px;padding-right:4px;padding-bottom:0px;padding-left:4px;height:32px;color:", ";border-width:initial;border-style:none;border-color:initial;border-image:initial;text-decoration:none;border-radius:0px;", ";&:hover{color:", ";}"], ({
  theme
}) => theme.textPrimary, props => props.customStyles, ({
  theme,
  color
}) => color ? color : theme.btnPrimary);
const IconButton = external_styled_components_default()(Button).withConfig({
  displayName: "Button__IconButton",
  componentId: "d4hwwk-5"
})(["align-items:center;justify-content:center;color:", ";border-width:initial;border-style:none;border-color:initial;border-image:initial;text-decoration:none;border-radius:2px;", ";&:hover{background-color:", ";}"], ({
  theme,
  color
}) => color ? color : theme.textPrimary, props => props.customStyles, ({
  theme
}) => theme.lightGrey);

// CONCATENATED MODULE: ./components/styledComponents/Text.js


const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "Text__Title",
  componentId: "sc-1depwvm-0"
})(["align-items:baseline;color:rgb(50,49,48);display:flex;font-size:32px;font-weight:600;line-height:40px;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;", ";"], props => props.customStyles);
const Header = external_styled_components_default.a.h2.withConfig({
  displayName: "Text__Header",
  componentId: "sc-1depwvm-1"
})(["color:#323130;font-weight:600;line-height:32px;margin-top:0;font-size:24px;outline:none;margin-top:0;margin-bottom:0;", ";"], props => props.customStyles);
const SubHeader = external_styled_components_default.a.h3.withConfig({
  displayName: "Text__SubHeader",
  componentId: "sc-1depwvm-2"
})(["color:#323130;font-weight:600;line-height:28px;font-size:20px;margin-bottom:0;margin-top:0;", ";"], props => props.customStyles);
const Text = external_styled_components_default.a.p.withConfig({
  displayName: "Text",
  componentId: "sc-1depwvm-3"
})(["color:#323130;font-size:16px;font-weight:400;line-height:22px;margin:0;padding:0;", ";"], props => props.customStyles);
const SubText = external_styled_components_default.a.p.withConfig({
  displayName: "Text__SubText",
  componentId: "sc-1depwvm-4"
})(["color:#323130;font-size:14px;font-weight:", ";line-height:20px;margin:0;padding:0;", ";"], ({
  font
}) => font ? font : 400, props => props.customStyles);
const CaptionText = external_styled_components_default.a.p.withConfig({
  displayName: "Text__CaptionText",
  componentId: "sc-1depwvm-5"
})(["color:#979a9a;font-size:12px;font-weight:500;line-height:16px;margin:0;padding:0;", ";"], props => props.customStyles);
const NormalText = external_styled_components_default.a.p.withConfig({
  displayName: "Text__NormalText",
  componentId: "sc-1depwvm-6"
})(["color:#323130;font-size:10px;font-weight:600;line-height:14px;margin:0;padding:0;", ";"], props => props.customStyles);

// CONCATENATED MODULE: ./components/styledComponents/HouseCard.js



const CardStyles = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "HouseCard__CardStyles",
  componentId: "sc-1wg1ho6-0"
})(["position:relative;height:180px;min-width:170px;margin-left:20px;"]);
const CardActions = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "HouseCard__CardActions",
  componentId: "sc-1wg1ho6-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;position:absolute;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;top:0;z-index:1;background-color:", ";", ";"], ({
  color
}) => color ? color : "transparent", props => props.customStyles);
const CardImage = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "HouseCard__CardImage",
  componentId: "sc-1wg1ho6-2"
})(["display:flex;", ";"], props => props.customStyles);
const CardContent = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "HouseCard__CardContent",
  componentId: "sc-1wg1ho6-3"
})(["display:flex;", ";"], props => props.customStyles);
const CardFooter = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "HouseCard__CardFooter",
  componentId: "sc-1wg1ho6-4"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;position:absolute;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px;bottom:0;z-index:1;background-color:", ";", ";"], ({
  color
}) => color ? color : "transparent", props => props.customStyles);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/styledComponents/Input.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(styles_["makeStyles"])(theme => ({
  inputStyle: {
    border: "1px solid #D7DBDD",
    borderRadius: 1,
    padding: 8,
    backgroundColor: "#F5F8FA",
    // lineHeight: 2,
    fontSize: 14,
    "&:focus": {
      border: "1px solid #5B86C6",
      backgroundColor: "#FEFEFF"
    }
  }
}));

const Input = (_ref) => {
  let {
    label,
    wrapperStyles,
    inputStyles,
    type
  } = _ref,
      other = _objectWithoutProperties(_ref, ["label", "wrapperStyles", "inputStyles", "type"]);

  const classes = useStyles();
  return __jsx(Container["a" /* default */], {
    column: true,
    customStyles: {
      marginBottom: 20
    },
    color: "transparent"
  }, __jsx(CaptionText, {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, label), __jsx("input", _extends({
    className: classes.inputStyle
  }, other, {
    type: type
  })));
};

/* harmony default export */ var styledComponents_Input = (Input);
// CONCATENATED MODULE: ./components/styledComponents/TextInput.js
var TextInput_jsx = external_react_default.a.createElement;

function TextInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TextInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextInput_Input = external_styled_components_default.a.input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-14psr7l-0"
})(["border:1px solid #d7dbdd;padding:8px;color:#273746;font-weight:500;background-color:transparent;font-size:14px;&:focus{border:1px solid #5b86c6;background-color:#fefeff;}", ";"], props => props.customStyles);

const TextInput = (_ref) => {
  let {
    label,
    row
  } = _ref,
      other = TextInput_objectWithoutProperties(_ref, ["label", "row"]);

  return TextInput_jsx(Container["a" /* default */], {
    customStyles: {
      marginBottom: 10,
      flexDirection: row ? "row" : "column",
      alignItems: row ? "center" : "",
      justifyContent: row ? "space-between" : "",
      width: "100%"
    },
    color: "transparent"
  }, TextInput_jsx(CaptionText, {
    customStyles: {
      marginRight: row ? 10 : "",
      color: "#323130",
      fontWeight: "500",
      fontSize: "14px"
    }
  }, label), TextInput_jsx(TextInput_Input, other));
};

/* harmony default export */ var styledComponents_TextInput = (TextInput);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/styledComponents/FlatButton.js
var FlatButton_jsx = external_react_default.a.createElement;

function FlatButton_extends() { FlatButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FlatButton_extends.apply(this, arguments); }




const FlatButton_useStyles = Object(styles_["makeStyles"])(theme => ({}));

const FlatButton = props => {
  const classes = FlatButton_useStyles();
  return FlatButton_jsx(core_["Button"], FlatButton_extends({}, props, {
    variant: "outlined"
  }));
};

/* harmony default export */ var styledComponents_FlatButton = (FlatButton);
// CONCATENATED MODULE: ./components/styledComponents/SearchInput.js


const SearchInput = external_styled_components_default.a.input.withConfig({
  displayName: "SearchInput",
  componentId: "upd1ye-0"
})(["border:none;padding:10px;background-color:transparent;line-height:22px;font-size:22px;color:#273746;font-weight:500;&:focus{border-bottom:0.5px solid #eaecee;}::placeholder,::-webkit-input-placeholder{color:#85929e;font-weight:400;}:-ms-input-placeholder{color:#85929e;font-weight:400;}", ";"], props => props.customStyles);
/* harmony default export */ var styledComponents_SearchInput = (SearchInput);
// EXTERNAL MODULE: external "react-onclickoutside"
var external_react_onclickoutside_ = __webpack_require__("AJUk");
var external_react_onclickoutside_default = /*#__PURE__*/__webpack_require__.n(external_react_onclickoutside_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__("8k/1");
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);

// EXTERNAL MODULE: external "@material-ui/icons/Done"
var Done_ = __webpack_require__("2UeD");
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_);

// CONCATENATED MODULE: ./components/styledComponents/DropDown.js
var DropDown_jsx = external_react_default.a.createElement;










const DropDown_useStyles = Object(styles_["makeStyles"])(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0
  }
}));
const DropWrapper = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "DropDown__DropWrapper",
  componentId: "sc-1atbjfe-0"
})(["flex:0;background-color:transparent;position:relative;", ";"], props => props.customStyles);
const DropHeader = external_styled_components_default()(OutlinedButton).withConfig({
  displayName: "DropDown__DropHeader",
  componentId: "sc-1atbjfe-1"
})(["display:flex;flex-direction:row;flex:0;align-items:center;justify-content:space-between;min-height:35px;padding:0px 5px;border:1px solid #d7dbdd;border-radius:1px;background-color:#f5f8fa;outline:transparent;", " ", ";"], open => open && Object(external_styled_components_["css"])([" border:1px solid #5B86C6,background-color:#FEFEFF"]), props => props.headerStyles);
const DropHeaderTitle = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "DropDown__DropHeaderTitle",
  componentId: "sc-1atbjfe-2"
})(["display:flex;background-color:transparent;flex:1;flex-direction:row;align-items:center;"]);
const DropListContainer = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "DropDown__DropListContainer",
  componentId: "sc-1atbjfe-3"
})(["display:flex;flex:1;border-radius:1px;box-shadow:0 1.6px 3.6px 0 rgba(0,0,0,0.132),0 0.3px 0.9px 0 rgba(0,0,0,0.108);", ""], props => props.customStyles);
const DropListItem = external_styled_components_default()(CommandButton).withConfig({
  displayName: "DropDown__DropListItem",
  componentId: "sc-1atbjfe-4"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:8px 10px;"]);

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
  multiSelect
}) => {
  const classes = DropDown_useStyles();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  Dropdown.handleClickOutside = () => {
    handleClose();
  };

  const handleClick = item => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemSelected = item => {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }

    return false;
  };

  return DropDown_jsx(DropWrapper, {
    customStyles: wrapperStyles
  }, DropDown_jsx(DropHeader, {
    onClick: handleOpen,
    type: "button"
  }, DropDown_jsx(DropHeaderTitle, null, DropDown_jsx(CaptionText, {
    customStyles: {
      fontSize: 14,
      color: "#1c2833"
    }
  }, title)), DropDown_jsx(Container["a" /* default */], {
    flex: 0,
    column: true,
    middle: true,
    center: true,
    color: "transparent"
  }, DropDown_jsx(KeyboardArrowDown_default.a, null))), DropDown_jsx(core_["Popover"], {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    elevation: 0,
    classes: {
      paper: classes.popoverPaper
    }
  }, DropDown_jsx(DropListContainer, {
    customStyles: wrapperStyles
  }, items.map(item => {
    return DropDown_jsx(DropListItem, {
      key: item.id,
      type: "button",
      onClick: () => handleClick(item)
    }, DropDown_jsx("span", null, item.value), isItemSelected(item) && DropDown_jsx(Done_default.a, {
      style: {
        color: "green"
      }
    }));
  }))));
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside
};
/* harmony default export */ var DropDown = (external_react_onclickoutside_default()(Dropdown, clickOutsideConfig));
// CONCATENATED MODULE: ./components/styledComponents/index.js











/***/ }),

/***/ "7nhY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ORJo");


/***/ }),

/***/ "8k/1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJUk":
/***/ (function(module, exports) {

module.exports = require("react-onclickoutside");

/***/ }),

/***/ "CSXW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F1wk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ theme; });

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js

var __jsx = external_react_default.a.createElement;


const Meta = () => __jsx(head_default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/public/fav.png"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://unpkg.com/nprogress@0.2.0/nprogress.css"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons"
}), __jsx("title", null, "House Assist Space"));

/* harmony default export */ var components_Meta = (Meta);
// EXTERNAL MODULE: ./components/styledComponents/Container.js
var Container = __webpack_require__("RaUI");

// CONCATENATED MODULE: ./components/Page.js
var Page_jsx = external_react_default.a.createElement;







router_default.a.onRouteChangeStart = () => {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = () => {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = () => {
  external_nprogress_default.a.done();
};

const theme = {
  greenDarkAlt: "#63b814",
  greenDark: "#549b11",
  greenPrimary: "#6FCC16",
  greenSecondary: "#7dd22e",
  greenTertiary: "#a2e069",
  greenLight: "#cff0b0",
  greenLighter: "#e5f7d4",
  tealDarkAlt: "#00877a",
  tealDark: "#007267",
  tealPrimary: "#009688",
  tealSecondary: "#14a395",
  tealTertiary: "#4dc0b5",
  tealLight: "#9de0d9",
  tealLighter: "#c8eeea",
  cyanDarkAlt: "#00a9b5",
  cyanDark: "#008f99",
  cyanPrimary: "#00BCCA",
  cyanSecondary: "#19c4d0",
  cyanTertiary: "#59d6df",
  cyanLight: "#a7eaef",
  cyanLighter: "#cff4f6",
  blueDarkAlt: "#5279b3",
  blueDark: "#466697",
  bluePrimary: "#5B86C6",
  blueSecondary: "#6c93ce",
  blueTertiary: "#96b2dd",
  blueLight: "#c8d7ee",
  blueLighter: "#e1e9f6",
  redDarkAlt: "#d55858",
  redDark: "#b44a4a",
  redPrimary: "#ED6161",
  redSecondary: "#ef7373",
  redTertiary: "#f49e9e",
  redLight: "#facdcd",
  redLighter: "#fce4e4",
  orangeDarkAlt: "#ae785b",
  orangeDark: "#93654d",
  orangePrimary: "#C18564",
  orangeSecondary: "#c99274",
  orangeTertiary: "#dab19b",
  orangeLight: "#edd6cb",
  orangeLighter: "#f5e9e2",
  deepBlueDarkAlt: "#4433df",
  deepBlueDark: "#3a2bbc",
  deepBluePrimary: "#4C3AF7",
  deepBlueSecondary: "#6150f8",
  deepBlueTertiary: "#9287fa",
  deepBlueLight: "#c8c2fd",
  deepBlueLighter: "#e2dffe",
  primary: "#5E81F4",
  primaryDark: "#1C1D21",
  primaryGrey: "#8181A5",
  outline: "#F0F0F3",
  bgLight: "#F5F5FA",
  primaryOutline: "#5E81F4",
  btnHover: "#2E86C1",
  outlineWhite: "#FFFFFF",
  background: "#F6F6F6",
  bgWhite: "#FFFFFF",
  bgPrimary: "#F2F3F4",
  bgSecondary: "#FEFEFF",
  btnPrimary: "#0078D4",
  textPrimary: "#2A3045",
  textSecondary: "#50566B",
  iconStyle: "#717D7E",
  blue: "#9698D6",
  red: "#FF808B",
  black: "#393939",
  grey: "#717D7E",
  orange: "#F4BE5E",
  grayHover: "#F3F2F1",
  lightGrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat|Noto+Serif|PT+Serif+Caption|Raleway&display=swap');
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
  html {
    box-sizing: border-box;
    font-size: 10px;
    line-height:14px;
    outline:none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  input{
    outline:none;
  }
  select{
    outline:none;
  }
  textarea{
    outline:none;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    line-height: 1;
    background-color:${theme.bgPrimary};
    color:${theme.textPrimary};  
    font-weight:400;
    font-family: 'Lato', sans-serif;
    outline:none;
  }
  a {
    text-decoration: none;
    color: ${theme.textPrimary};
  }
  button { 
  font-family: 'Lato', serif;
  font-weight:400;
  outline:none; 
}
`;

class Page_Page extends external_react_["Component"] {
  render() {
    return Page_jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, Page_jsx(GlobalStyle, null), Page_jsx(Container["a" /* default */], {
      flex: 1,
      column: true
    }, Page_jsx(components_Meta, null), this.props.children));
  }

}

/* harmony default export */ var components_Page = __webpack_exports__["a"] = (Page_Page);

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "IhOE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FiberManualRecord");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "Mx5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./public/static/HAS.png
var HAS = __webpack_require__("Np96");
var HAS_default = /*#__PURE__*/__webpack_require__.n(HAS);

// EXTERNAL MODULE: ./components/Page.js + 1 modules
var components_Page = __webpack_require__("F1wk");

// EXTERNAL MODULE: ./components/queryComponents/User.js
var User = __webpack_require__("mivZ");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Landlrd/ActiveLink.js
var __jsx = external_react_default.a.createElement;




const NavText = external_styled_components_default()(styledComponents["o" /* SubText */]).withConfig({
  displayName: "ActiveLink__NavText",
  componentId: "sc-1urj39a-0"
})(["color:", ";font-weight:600;&:hover{color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.primaryDark);
const NavItem = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "ActiveLink__NavItem",
  componentId: "sc-1urj39a-1"
})(["display:flex;flex-direction:row;align-items:center;background-color:", ";padding-top:10px;padding-left:10px;padding-right:10px;padding-bottom:6px;cursor:pointer;&:hover{background-color:", ";}"], ({
  theme,
  isActive
}) => isActive ? `1.5px solid ${theme.btnPrimary}` : "transparent", ({
  theme
}) => theme.bgPrimary);

function ActiveLink({
  label,
  href
}) {
  const router = Object(router_["useRouter"])();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    href: href,
    onClick: handleClick,
    style: {
      marginRight: 7
    }
  }, __jsx(styledComponents["d" /* Container */], {
    color: "transparent"
  }, __jsx(NavItem, {
    isActive: router.pathname === href
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, __jsx(NavText, {
    isActive: router.pathname === href
  }, label)))));
}

/* harmony default export */ var Landlrd_ActiveLink = (ActiveLink);
// EXTERNAL MODULE: external "@material-ui/icons/PowerSettingsNew"
var PowerSettingsNew_ = __webpack_require__("7nhY");
var PowerSettingsNew_default = /*#__PURE__*/__webpack_require__.n(PowerSettingsNew_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// CONCATENATED MODULE: ./components/Landlrd/LogoutButton.js
var LogoutButton_jsx = external_react_default.a.createElement;







const LOGOUT_MUTATION = external_graphql_tag_default.a`
  mutation LOGOUT_MUTATION {
    logout {
      message
    }
  }
`;

const LogoutButton = props => {
  return LogoutButton_jsx(external_react_apollo_["Mutation"], {
    mutation: LOGOUT_MUTATION // refetchQueries={[{ query: CURRENT_USER_QUERY }]}

  }, logout => LogoutButton_jsx(core_["MenuItem"], {
    style: {
      height: 50
    },
    onClick: () => {
      logout();
      router_default.a.replace("/Landlrd/login");
    }
  }, LogoutButton_jsx(PowerSettingsNew_default.a, {
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), LogoutButton_jsx(styledComponents["o" /* SubText */], null, "Logout")));
};

/* harmony default export */ var Landlrd_LogoutButton = (LogoutButton);
// CONCATENATED MODULE: ./components/Landlrd/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useStyles = Object(styles_["makeStyles"])(theme => ({
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    paddingLeft: 100,
    paddingRight: 100,
    height: 64,
    borderBottom: "1px solid #ECF0F1",
    elevation: 4
  },
  menuPaper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: 150,
    borderRadius: 2,
    marginBottom: 5,
    marginTop: 25
  },
  menuItem: {
    height: 50
  },
  toolbar: _objectSpread({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  content: {
    backgroundColor: components_Page["b" /* theme */].bgPrimary
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  userAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5)
  }
}));

const WithLayout = Page => props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return Layout_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      minHeight: "100vh",
      position: "relative"
    },
    column: true
  }, Layout_jsx(core_["CssBaseline"], null), Layout_jsx(core_["Drawer"], {
    variant: "permanent",
    anchor: "top",
    classes: {
      paper: classes.drawerPaper
    }
  }, Layout_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    color: "transparent",
    customStyles: {
      height: 64
    }
  }, Layout_jsx(core_["Avatar"], {
    src: HAS_default.a,
    className: classes.small
  }), Layout_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    center: true,
    color: "transparent",
    customStyles: {
      marginLeft: 20
    }
  }, Layout_jsx(Landlrd_ActiveLink, {
    label: "Dashboard",
    href: "/Landlrd/dashboard"
  }), Layout_jsx(Landlrd_ActiveLink, {
    label: "Houses",
    href: "/Landlrd/houses"
  }), Layout_jsx(Landlrd_ActiveLink, {
    label: "Tenants",
    href: "/Landlrd/tenants"
  }), Layout_jsx(Landlrd_ActiveLink, {
    label: "Tickets",
    href: "/Landlrd/tickets"
  })), Layout_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: false,
    center: true,
    right: true,
    middle: true,
    color: "transparent"
  }, Layout_jsx(core_["IconButton"], {
    onClick: handleClick,
    style: {
      margin: 0,
      padding: 0
    }
  }, Layout_jsx(core_["Badge"], {
    color: "secondary",
    overlap: "circle",
    badgeContent: " ",
    variant: "dot",
    style: {
      color: "red"
    }
  }, Layout_jsx(core_["Avatar"], {
    alt: "LOGO",
    onMouseOver: handleClick,
    className: classes.userAvatar
  }, Layout_jsx(User["b" /* default */], null, ({
    data
  }) => {
    if (data) {
      const {
        me
      } = data;
      return Layout_jsx(styledComponents["n" /* SubHeader */], {
        customStyles: {
          color: "#fff"
        }
      }, data.me && me.user_name.charAt(0));
    }

    return Layout_jsx("div", null);
  }))))))), Layout_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    customStyles: {
      paddingTop: 64
    }
  }, Layout_jsx(Page, props)), Layout_jsx(core_["Menu"], {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: menuOpen,
    onClose: handleClose,
    TransitionComponent: core_["Fade"],
    classes: {
      paper: classes.menuPaper
    }
  }, Layout_jsx(core_["MenuItem"], {
    onClick: handleClose,
    className: classes.menuItem
  }, Layout_jsx(styledComponents["o" /* SubText */], null, "Contact support")), Layout_jsx(core_["MenuItem"], {
    onClick: handleClose,
    className: classes.menuItem
  }, Layout_jsx(styledComponents["o" /* SubText */], null, "Help center")), Layout_jsx(Landlrd_LogoutButton, {
    handleClose: handleClose
  })));
};

/* harmony default export */ var Layout = __webpack_exports__["a"] = (WithLayout);

/***/ }),

/***/ "Np96":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/HAS-876cab4250f49365da56f3f02aa129ad.png";

/***/ }),

/***/ "ORJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Landlrd/Layout.js + 2 modules
var Layout = __webpack_require__("Mx5e");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/DialPad"
var DialPad_ = __webpack_require__("gqj3");
var DialPad_default = /*#__PURE__*/__webpack_require__.n(DialPad_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@material-ui/icons/MailOutline"
var MailOutline_ = __webpack_require__("YeUX");
var MailOutline_default = /*#__PURE__*/__webpack_require__.n(MailOutline_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckCircleOutline"
var CheckCircleOutline_ = __webpack_require__("CSXW");
var CheckCircleOutline_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/FiberManualRecord"
var FiberManualRecord_ = __webpack_require__("IhOE");
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_);

// EXTERNAL MODULE: external "@material-ui/icons/Style"
var Style_ = __webpack_require__("1Wzk");
var Style_default = /*#__PURE__*/__webpack_require__.n(Style_);

// CONCATENATED MODULE: ./components/Landlrd/tenants/ProfileTab.js
var __jsx = external_react_default.a.createElement;






const Tag = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileTab__Tag",
  componentId: "sc-17njxqf-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 5px;"]);

const ProfileTab = () => {
  return __jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    customStyles: {
      paddingTop: 20
    }
  }, __jsx(styledComponents["d" /* Container */], {
    color: "white",
    flex: 0,
    row: true,
    customStyles: {
      padding: "20px 10px",
      borderRadius: 4
    }
  }, __jsx(styledComponents["d" /* Container */], {
    middle: true,
    flex: 0,
    color: "transparent"
  }, __jsx(CheckCircleOutline_default.a, {
    color: "green",
    style: {
      fontSize: 20
    }
  })), __jsx(styledComponents["d" /* Container */], {
    column: true,
    middle: true,
    flex: 0.8,
    color: "transparent",
    customStyles: {
      paddingLeft: 10
    }
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontWeight: "600"
    }
  }, "Tenant is Active"), __jsx(styledComponents["b" /* CaptionText */], null, "Tenant is active since a year ago")), __jsx(styledComponents["d" /* Container */], {
    middle: true,
    center: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    wrap: true,
    center: true,
    customStyles: {
      padding: "6px 15px",
      backgroundColor: "green",
      borderRadius: 50
    }
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "white"
    }
  }, "Deactivate")))), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0,
    row: true,
    customStyles: {
      padding: "20px 0px"
    }
  }, __jsx(styledComponents["d" /* Container */], {
    color: "white",
    flex: 1,
    row: true,
    customStyles: {
      padding: "20px 10px",
      borderRadius: 4,
      marginRight: 5
    }
  }, __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0,
    column: true,
    top: true
  }, __jsx(FiberManualRecord_default.a, {
    color: "green",
    style: {
      fontSize: 16
    }
  })), __jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }, __jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontWeight: "600",
      marginBottom: 8
    }
  }, "House Details"), __jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      marginBottom: 8
    }
  }, "Barcelona"), __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 8
    }
  }, "4 Members"), __jsx(styledComponents["b" /* CaptionText */], null, "420 Cubic Feet"))), __jsx(styledComponents["d" /* Container */], {
    color: "white",
    flex: 1,
    row: true,
    customStyles: {
      padding: "25px 10px",
      borderRadius: 4,
      marginLeft: 5
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "white",
    flex: 1,
    column: true,
    customStyles: {
      padding: "10px 10px",
      borderRadius: 4
    }
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 0,
    color: "transparent",
    space: "space-between",
    customStyles: {
      marginTop: 5,
      marginBottom: 5
    }
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    center: true,
    color: "transparent"
  }, __jsx(Style_default.a, {
    color: "white",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), __jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontWeight: "body"
    }
  }, "Tickets by Rene La")), __jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontWeight: "body"
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      marginTop: 5,
      padding: "5px 0px",
      borderBottom: "0.5px solid #979a9a"
    },
    row: true,
    center: true
  }, __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.1,
    center: true,
    row: true
  }, __jsx(styledComponents["j" /* NormalText */], null, "ID")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.4,
    center: true,
    row: true
  }, __jsx(styledComponents["j" /* NormalText */], null, "Title")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.25,
    center: true,
    row: true
  }, __jsx(styledComponents["j" /* NormalText */], null, "Status")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.15,
    center: true,
    row: true
  }, __jsx(styledComponents["j" /* NormalText */], null, "Assignees")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.1,
    middle: true,
    center: true,
    row: true
  })), [{
    id: "#1234",
    title: "Water sink broken",
    status: "closed",
    assignees: "rene"
  }, {
    id: "#1253",
    title: "Window broken",
    status: "open",
    assignees: "rene"
  }, {
    id: "#1902",
    title: "Leaking roof",
    status: "pending",
    assignees: "patrick"
  }, {
    id: "#1324",
    title: "Water sink broken",
    status: "assigned",
    assignees: "rene"
  }].map(ticket => {
    return __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      customStyles: {
        padding: "10px 0px"
      },
      row: true,
      center: true
    }, __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      flex: 0.1,
      center: true,
      row: true
    }, __jsx(styledComponents["j" /* NormalText */], null, ticket.id)), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      flex: 0.4,
      center: true,
      row: true
    }, __jsx(styledComponents["j" /* NormalText */], null, ticket.title)), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      flex: 0.25,
      center: true,
      row: true
    }, __jsx(styledComponents["j" /* NormalText */], null, ticket.status)), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      flex: 0.15,
      center: true,
      row: true
    }, __jsx(styledComponents["j" /* NormalText */], null, ticket.assignees)), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      flex: 0.1,
      middle: true,
      center: true,
      row: true
    }));
  })));
};

/* harmony default export */ var tenants_ProfileTab = (ProfileTab);
// CONCATENATED MODULE: ./components/Landlrd/tenants/SingleTenant.js
var SingleTenant_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const StyledTabs = Object(styles_["withStyles"])({
  indicator: {
    backgroundColor: "#1890ff"
  }
})(core_["Tabs"]);
const StyledTab = Object(styles_["withStyles"])(theme => ({
  root: {
    textTransform: "upper-case",
    minWidth: 72,
    fontWeight: "600",
    fontSize: 12,
    color: "#323130",
    marginRight: theme.spacing(1) // "&:hover": {
    //   color: "#40a9ff",
    //   opacity: 1
    // }
    // "&$selected": {
    //   color: "#1890ff",
    //   fontWeight: theme.typography.fontWeightMedium
    // },
    // "&:focus": {
    //   color: "#40a9ff"
    // }

  } // selected: {}

}))(props => SingleTenant_jsx(core_["Tab"], _extends({
  disableRipple: true
}, props)));
const useStyles = Object(styles_["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: 0,
    backgroundColor: "transparent",
    border: 0
  },
  smaller: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  userAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5)
  },
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  profile: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));
const SideWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTenant__SideWrapper",
  componentId: "sc-1wlswiu-0"
})(["display:flex;flex:0.3;padding-left:110px;padding-top:50px;background-color:white;flex-direction:column;"]);
const ContentWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTenant__ContentWrapper",
  componentId: "sc-1wlswiu-1"
})(["display:flex;flex:0.7;background-color:transparent;"]);
const TabWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTenant__TabWrapper",
  componentId: "sc-1wlswiu-2"
})(["display:flex;flex-direction:row;width:100%;padding:0px 110px;background-color:white;"]);
const TabSection = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTenant__TabSection",
  componentId: "sc-1wlswiu-3"
})(["display:flex;flex:1;flex-direction:column;width:100%;height:100%;padding-right:100px;padding-left:20px;"]);

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return SingleTenant_jsx(core_["Paper"], _extends({
    component: "div",
    role: "tabpanel",
    elevation: 0,
    style: {
      height: "100%"
    },
    hidden: value !== index,
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`
  }, other), value === index && SingleTenant_jsx(TabSection, null, children));
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

const SingleTenant = props => {
  const {
    tenant
  } = props,
        other = _objectWithoutProperties(props, ["tenant"]);

  const classes = useStyles();
  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return SingleTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      height: "100%",
      width: "100%"
    }
  }, SingleTenant_jsx(SideWrapper, null, SingleTenant_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent",
    column: true
  }, tenant.profileImage !== null && SingleTenant_jsx(core_["Avatar"], {
    src: tenant.profileImage,
    className: classes.profile
  }), tenant.profileImage === null && SingleTenant_jsx(core_["Avatar"], {
    className: classes.profile
  }, tenant.firstName.charAt(0) + tenant.lastName.charAt(0))), SingleTenant_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent" // middle
    // center
    ,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, SingleTenant_jsx(styledComponents["g" /* Header */], null, " ", tenant.firstName + " " + tenant.lastName)), SingleTenant_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent",
    middle: true,
    column: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 40
    }
  }, SingleTenant_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontWeight: "600"
    }
  }, "About"), SingleTenant_jsx(styledComponents["b" /* CaptionText */], null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to")), SingleTenant_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent",
    middle: true,
    column: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 40
    }
  }, SingleTenant_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontWeight: "600"
    }
  }, "Contact details"), SingleTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 5
    }
  }, SingleTenant_jsx(MailOutline_default.a, {
    color: "transparent",
    color: "gray",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), SingleTenant_jsx(styledComponents["b" /* CaptionText */], null, tenant.comm_email)), SingleTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleTenant_jsx(DialPad_default.a, {
    color: "gray",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), SingleTenant_jsx(styledComponents["b" /* CaptionText */], null, tenant.tel_no)), SingleTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleTenant_jsx(LocationOn_default.a, {
    color: "gray",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), SingleTenant_jsx(styledComponents["b" /* CaptionText */], null, tenant.street)))), SingleTenant_jsx(ContentWrapper, null, SingleTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    center: true
  }, SingleTenant_jsx(StyledTabs, {
    value: value,
    onChange: handleChange
  }, SingleTenant_jsx(StyledTab, _extends({
    label: "Profile"
  }, a11yProps("profile"))), SingleTenant_jsx(StyledTab, _extends({
    label: "Account"
  }, a11yProps("account"))))), SingleTenant_jsx(TabPanel, {
    value: value,
    index: 0
  }, SingleTenant_jsx(tenants_ProfileTab, null))));
};

/* harmony default export */ var tenants_SingleTenant = (SingleTenant);
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/queryComponents/landlord/Tenant.js
var Tenant_jsx = external_react_default.a.createElement;

function Tenant_extends() { Tenant_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tenant_extends.apply(this, arguments); }




const GET_TENANT = external_graphql_tag_default.a`
  query GET_TENANT($id: ID!) {
    getTenant(id: $id) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const Tenant_SingleTenant = props => Tenant_jsx(external_react_apollo_["Query"], Tenant_extends({}, props, {
  query: GET_TENANT,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ var Tenant = (Tenant_SingleTenant);

// CONCATENATED MODULE: ./pages/Landlrd/tenants/[id].js
var _id_jsx = external_react_default.a.createElement;

function _id_extends() { _id_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _id_extends.apply(this, arguments); }

function _id_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _id_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _id_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const _id_Tenant = (_ref) => {
  let {
    query
  } = _ref,
      other = _id_objectWithoutProperties(_ref, ["query"]);

  return _id_jsx(Tenant, {
    id: query.id
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const tenant = data.getTenant;
      return _id_jsx(styledComponents["d" /* Container */], {
        flex: 1
      }, _id_jsx(tenants_SingleTenant, _id_extends({
        tenant: tenant
      }, other)));
    }

    return null;
  });
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(Layout["a" /* default */])(_id_Tenant));

/***/ }),

/***/ "RaUI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // import Container from "@material-ui/core/Container";

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Container__Wrapper",
  componentId: "sc-1tevnrb-0"
})(["display:flex;flex-direction:column;background-color:", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], ({
  theme,
  color
}) => color ? color : theme.bgPrimary, ({
  flex
}) => flex && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex:", ";"], flex), ({
  flex
}) => !flex && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex:0;"]), ({
  flex
}) => flex === 1 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex:1;"]), ({
  flex
}) => flex === 0 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex:0;"]), ({
  row
}) => row && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex-direction:row;flex-wrap:wrap;"]), ({
  column
}) => column && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex-direction:column;"]), ({
  space
}) => space && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:", ";"], space), ({
  center
}) => center && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["align-items:center;"]), ({
  wrap
}) => wrap && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["flex-wrap:wrap;"]), ({
  middle
}) => middle && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:center;"]), ({
  left
}) => left && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:flex-start;"]), ({
  right
}) => right && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:flex-end;"]), ({
  top
}) => top && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:flex-start;"]), ({
  bottom
}) => bottom && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:flex-end;"]), ({
  left
}) => left && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["justify-content:flex-start;"]), ({
  depth
}) => depth === 2 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:0 1.6px 3.6px 0 rgba(0,0,0,0.132),0 0.3px 0.9px 0 rgba(0,0,0,0.108);"]), ({
  depth
}) => depth === 4 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:0 1.6px 3.6px 0 rgba(0,0,0,0.132),0 0.3px 0.9px 0 rgba(0,0,0,0.108);"]), ({
  depth
}) => depth === 8 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);"]), ({
  depth
}) => depth === 16 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:0 6.4px 14.4px 0 rgba(0,0,0,0.132),0 1.2px 3.6px 0 rgba(0,0,0,0.18);"]), ({
  depth
}) => depth === 64 && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:0 25.6px 67.6px 0 rgba(0,0,0,0.22),0 4.8px 14.4px 0 rgba(0,0,0,0.18);"]), props => props.customStyles);

const StyledContainer = (_ref) => {
  let {
    children
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrapper, other, children);
};

/* harmony default export */ __webpack_exports__["a"] = (StyledContainer);

/***/ }),

/***/ "YeUX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "gqj3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DialPad");

/***/ }),

/***/ "mivZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    me {
      id
      user_name
      email
      permissions
      userType
    }
  }
`;

const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: CURRENT_USER_QUERY
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });