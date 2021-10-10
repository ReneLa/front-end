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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/1S3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForward");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1Wzk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Style");

/***/ }),

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DzuS");


/***/ }),

/***/ "4Fsb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KingBed");

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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7nhY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ "8k/1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "AJUk":
/***/ (function(module, exports) {

module.exports = require("react-onclickoutside");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "DRbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "DzuS":
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

// EXTERNAL MODULE: external "@material-ui/icons/FormatAlignRight"
var FormatAlignRight_ = __webpack_require__("n4aT");
var FormatAlignRight_default = /*#__PURE__*/__webpack_require__.n(FormatAlignRight_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/icons/Done"
var Done_ = __webpack_require__("2UeD");
var Done_default = /*#__PURE__*/__webpack_require__.n(Done_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./public/static/126.gif
var _126 = __webpack_require__("TjsY");
var _126_default = /*#__PURE__*/__webpack_require__.n(_126);

// EXTERNAL MODULE: ./components/queryComponents/ParentHouses.js
var ParentHouses = __webpack_require__("iJxd");

// CONCATENATED MODULE: ./components/Landlrd/houses/create/CreateBuilding.js
var __jsx = external_react_default.a.createElement;














const useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    width: 525,
    borderRadius: 2,
    backgroundColor: "white",
    position: "relative"
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "white"
  },
  dialogActions: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 10,
    margin: 0,
    border: "none" // backgroundColor: "red",

  },
  dialogContentStyle: {
    display: "flex",
    padding: 0,
    border: "none",
    backgroundColor: "white"
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 1,
    backgroundColor: "#F3F2F1"
  },
  buildingImageStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 2,
    marginRight: 20,
    border: "1.5px dashed #F3F2F1",
    backgroundColor: "#F3F2F1"
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
      backgroundColor: "#FEFEFF"
    }
  }
}));
const ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateBuilding__ActionBtn",
  componentId: "sc-1f2konc-0"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateBuilding__CloseBtn",
  componentId: "sc-1f2konc-1"
})(["z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.bgPrimary);
const AddBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateBuilding__AddBtn",
  componentId: "sc-1f2konc-2"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "CreateBuilding__CancelBtn",
  componentId: "sc-1f2konc-3"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const Tag = external_styled_components_default.a.div.withConfig({
  displayName: "CreateBuilding__Tag",
  componentId: "sc-1f2konc-4"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]);
const Form = external_styled_components_default.a.form.withConfig({
  displayName: "CreateBuilding__Form",
  componentId: "sc-1f2konc-5"
})(["display:flex;flex-direction:row;padding:0px 40px;"]);
const CREATE_PARENT_HOUSE_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_PARENT_HOUSE_MUTATION($building_name: String!) {
    createParentHouse(building_name: $building_name) {
      id
      building_name
      address
      image
    }
  }
`;
const ADD_HOUSE_TO_BUILDING = external_graphql_tag_default.a`
  mutation AddHouseToBuilding($houseId: ID!, $buildingId: ID!) {
    addHouseToBuilding(houseId: $houseId, buildingId: $buildingId) {
      id
      house_heading
    }
  }
`;

const BuildingsContainer = ({
  addTo,
  buildings,
  buildingList,
  loading
}) => {
  const classes = useStyles();

  const handleClick = building => {
    if (!buildings.some(current => current.id === building.id)) {
      addTo([building]);
    } else {
      let buildingAfterRemoval = buildings;
      buildingAfterRemoval = buildingAfterRemoval.filter(current => current.id !== building.id);
      addTo([...buildingAfterRemoval]);
    }
  };

  const isBuildingSelected = building => {
    if (buildings.some(current => current.id === building.id)) {
      return true;
    }

    return false;
  };

  return __jsx(styledComponents["d" /* Container */], {
    column: true,
    customStyles: {
      padding: "10px 40px"
    },
    color: "transparent"
  }, loading && __jsx(styledComponents["d" /* Container */], {
    flex: 1,
    middle: true,
    center: true,
    column: true,
    color: "transparent"
  }, __jsx("img", {
    src: _126_default.a,
    style: {
      width: 20,
      height: 20
    }
  })), !loading && buildingList && buildingList.map(build => {
    return __jsx(styledComponents["d" /* Container */], {
      flex: false,
      key: build.id,
      column: true,
      color: "transparent"
    }, __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      row: true,
      center: true,
      flex: 1,
      customStyles: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 5
      }
    }, __jsx(styledComponents["d" /* Container */], {
      row: true,
      flex: 1,
      center: true,
      color: "transparent"
    }, build.image === null ? __jsx(core_["Avatar"], {
      src: build.image,
      className: classes.avatarStyle
    }, __jsx(styledComponents["n" /* SubHeader */], null, build.building_name.charAt(0))) : __jsx(core_["Avatar"], {
      src: build.image,
      className: classes.avatarStyle
    }), __jsx(styledComponents["d" /* Container */], {
      column: true,
      flex: 1,
      color: "transparent"
    }, __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 0,
        marginLeft: 10
      }
    }, build.building_name))), __jsx(AddBtn, {
      onClick: () => handleClick(build)
    }, isBuildingSelected(build) ? __jsx(Done_default.a, {
      style: {
        fontSize: 18,
        color: "green"
      }
    }) : __jsx(Add_default.a, {
      style: {
        fontSize: 18
      }
    }))), __jsx(core_["Divider"], {
      style: {
        height: "1px"
      }
    }));
  }));
};

const CreateBuilding = ({
  house
}) => {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: building_name,
    1: setBuildingName
  } = Object(external_react_["useState"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])("paper");
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: isloading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: addToBuilding,
    1: setAddToBuilding
  } = Object(external_react_["useState"])([]);
  const {
    0: buildingList,
    1: setBuildingList
  } = Object(external_react_["useState"])(null);

  const onCompletion = () => {
    setOpen(false);
  };

  const [addTo, {
    data,
    loading
  }] = Object(react_hooks_["useMutation"])(ADD_HOUSE_TO_BUILDING);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getBuildings(client) {
    setLoading(true);
    const res = await client.query({
      query: ParentHouses["a" /* GET_USER_PARENT_HOUSES */]
    });
    const buildings = res.data.getUserParentHouses;
    console.log(buildings);
    setBuildingList(buildings);
    setLoading(false);
  }

  const isAdded = buildings => {
    const {
      parent_houseId
    } = house;

    if (parent_houseId !== null && buildings.some(current => current.id === parent_houseId.id)) {
      return true;
    }

    return false;
  };

  return __jsx(ParentHouses["b" /* default */], null, ({
    data
  }) => {
    if (data) {
      const parentBuildings = data.getUserParentHouses;
      return __jsx("div", null, isAdded(parentBuildings) ? __jsx(styledComponents["n" /* SubHeader */], null, "Added") : __jsx(styledComponents["h" /* IconButton */], {
        onClick: e => {
          handleClickOpen();
        },
        customStyles: {
          backgroundColor: "#0078D4",
          height: 33,
          width: 33
        }
      }, __jsx(Add_default.a, {
        style: {
          fontSize: 18,
          color: "white"
        }
      })), __jsx(core_["Dialog"], {
        fullScreen: fullScreen,
        onClose: e => {
          handleClose();
        },
        classes: {
          paper: classes.dialogPaper
        },
        "aria-labelledby": "customized-dialog-title",
        open: open,
        scroll: scroll
      }, __jsx(core_["DialogTitle"], {
        id: "scroll-dialog-title",
        classes: {
          root: classes.dialogActionStyle
        }
      }, __jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        right: true,
        color: "transparent",
        space: "space-between",
        customStyles: {
          paddingTop: 15,
          paddingBottom: 7,
          paddingRight: 10,
          paddingLeft: 20
        }
      }, __jsx(styledComponents["d" /* Container */], {
        color: "transparent",
        column: true,
        row: true,
        center: true,
        left: true,
        flex: 1
      }, __jsx(styledComponents["n" /* SubHeader */], null, "Add House")), __jsx(CloseBtn, {
        onClick: handleClose
      }, __jsx(Close_default.a, {
        style: {
          fontSize: 23
        }
      })))), __jsx(core_["DialogContent"], {
        classes: {
          root: classes.dialogContentStyle
        }
      }, __jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        color: "transparent",
        customStyles: {
          paddingTop: 10,
          paddingBottom: 10
        }
      }, __jsx(styledComponents["d" /* Container */], {
        customStyles: {
          paddingLeft: "40px"
        },
        row: true,
        center: true,
        color: "transparent"
      }, house.profileImage === null ? __jsx(core_["Avatar"], {
        src: house.profileImage,
        className: classes.avatarStyle
      }, __jsx(styledComponents["g" /* Header */], null, house.house_heading.charAt(0))) : __jsx(core_["Avatar"], {
        src: house.profileImage,
        className: classes.avatarStyle
      }), __jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          marginLeft: 20
        }
      }, "You are adding Barcelona")), __jsx(external_react_apollo_["Mutation"], {
        mutation: CREATE_PARENT_HOUSE_MUTATION,
        variables: {
          building_name
        }
      }, (createParentHouse, {
        loading,
        error
      }) => {
        return __jsx(Form, {
          method: "post",
          onSubmit: async e => {
            e.preventDefault();
            await createParentHouse().then(res => {
              const newBuilding = res.data.createParentHouse;
              setBuildingList([...buildingList, newBuilding]);
              setBuildingName(null);
            });
          }
        }, __jsx("fieldset", {
          style: {
            display: "flex",
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 10,
            paddingTop: 30,
            border: "none",
            flex: 1
          }
        }, __jsx(styledComponents["d" /* Container */], {
          row: true,
          color: "transparent",
          flex: 1
        }, __jsx(styledComponents["d" /* Container */], {
          flex: 1,
          column: true,
          middle: true,
          color: "transparent",
          customStyles: {
            paddingRight: 10
          }
        }, __jsx(styledComponents["i" /* Input */], {
          placeholder: "Create a new building",
          type: "text",
          value: building_name,
          onChange: e => setBuildingName(e.target.value)
        })), __jsx(styledComponents["d" /* Container */], {
          flex: false,
          column: true,
          color: "transparent",
          customStyles: {
            paddingTop: 5
          }
        }, __jsx(styledComponents["l" /* PrimaryButton */], {
          type: "submit",
          customStyles: {
            pointerEvents: building_name === null ? "none" : "auto",
            opacity: building_name === null ? 0.3 : 1.0
          }
        }, loading ? "CREATING" : "CREATE")))));
      }), __jsx(BuildingsContainer, {
        loading: isloading,
        addTo: setAddToBuilding,
        buildings: addToBuilding,
        buildingList: parentBuildings
      }))), __jsx(core_["DialogActions"], {
        className: classes.dialogActions
      }, __jsx(styledComponents["l" /* PrimaryButton */], {
        customStyles: {
          pointerEvents: addToBuilding.length <= 0 ? "none" : "auto",
          opacity: addToBuilding.length <= 0 ? 0.4 : 1.0
        },
        onClick: () => {
          addTo({
            variables: {
              houseId: house.id,
              buildingId: addToBuilding[0].id
            },
            onCompleted: onCompletion
          });
        }
      }, loading ? "SAVING" : "SAVE"))));
    }

    return null;
  });
};

/* harmony default export */ var create_CreateBuilding = (CreateBuilding);
// EXTERNAL MODULE: external "@material-ui/icons/ArrowForward"
var ArrowForward_ = __webpack_require__("/1S3");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);

// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__("XcKE");
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);

// EXTERNAL MODULE: external "@material-ui/icons/KingBed"
var KingBed_ = __webpack_require__("4Fsb");
var KingBed_default = /*#__PURE__*/__webpack_require__.n(KingBed_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalPhone"
var LocalPhone_ = __webpack_require__("H8f9");
var LocalPhone_default = /*#__PURE__*/__webpack_require__.n(LocalPhone_);

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");
var PersonPin_default = /*#__PURE__*/__webpack_require__.n(PersonPin_);

// EXTERNAL MODULE: external "@material-ui/icons/ShowChart"
var ShowChart_ = __webpack_require__("sMk+");
var ShowChart_default = /*#__PURE__*/__webpack_require__.n(ShowChart_);

// EXTERNAL MODULE: external "@material-ui/icons/Style"
var Style_ = __webpack_require__("1Wzk");
var Style_default = /*#__PURE__*/__webpack_require__.n(Style_);

// CONCATENATED MODULE: ./components/queryComponents/landlord/CurrentTenant.js
var CurrentTenant_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_CURRENT_TENANT = external_graphql_tag_default.a`
  query GET_CURRENT_TENANT($houseId: ID!) {
    getCurrentTenant(houseId: $houseId) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      houseId {
        id
        house_no
        house_heading
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const CurrentTenant = props => CurrentTenant_jsx(external_react_apollo_["Query"], _extends({}, props, {
  query: GET_CURRENT_TENANT,
  variables: {
    houseId: props.houseId
  }
}), payload => props.children(payload));

/* harmony default export */ var landlord_CurrentTenant = (CurrentTenant);

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTenants.js
var LandlordTenants = __webpack_require__("flkU");

// CONCATENATED MODULE: ./components/Landlrd/houses/AddHouseTenant.js
var AddHouseTenant_jsx = external_react_default.a.createElement;














const AddHouseTenant_useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    width: 500,
    borderRadius: 2,
    backgroundColor: "white",
    position: "relative"
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "white"
  },
  dialogActions: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 10,
    margin: 0,
    border: "none" // backgroundColor: "red",

  },
  dialogContentStyle: {
    display: "flex",
    padding: 0,
    border: "none",
    backgroundColor: "white"
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 1,
    backgroundColor: "#F3F2F1"
  },
  buildingImageStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 2,
    marginRight: 20,
    border: "1.5px dashed #F3F2F1",
    backgroundColor: "#F3F2F1"
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
      backgroundColor: "#FEFEFF"
    }
  }
}));
const AddHouseTenant_ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "AddHouseTenant__ActionBtn",
  componentId: "sc-3wd5u5-0"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const AddHouseTenant_CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "AddHouseTenant__CloseBtn",
  componentId: "sc-3wd5u5-1"
})(["z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.bgPrimary);
const AddHouseTenant_AddBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "AddHouseTenant__AddBtn",
  componentId: "sc-3wd5u5-2"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const AddHouseTenant_CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "AddHouseTenant__CancelBtn",
  componentId: "sc-3wd5u5-3"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const AddHouseTenant_Tag = external_styled_components_default.a.div.withConfig({
  displayName: "AddHouseTenant__Tag",
  componentId: "sc-3wd5u5-4"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]);
const AddHouseTenant_Form = external_styled_components_default.a.form.withConfig({
  displayName: "AddHouseTenant__Form",
  componentId: "sc-3wd5u5-5"
})(["display:flex;flex-direction:row;padding:0px 40px;"]);
const ADD_HOUSE_TENANT_MUTATION = external_graphql_tag_default.a`
  mutation ADD_HOUSE_TENANT_MUTATION($houseId: ID!, $tenantId: ID!) {
    addHouseTenant(houseId: $houseId, tenantId: $tenantId) {
      id
      firstName
      lastName
    }
  }
`;

const TenantsContainer = ({
  addTo,
  tenants,
  tenantList,
  loading
}) => {
  const classes = AddHouseTenant_useStyles();

  const handleClick = tenant => {
    if (!tenants.some(current => current.id === tenant.id)) {
      addTo([tenant]);
    } else {
      let tenantAfterRemoval = tenants;
      tenantAfterRemoval = tenantAfterRemoval.filter(current => current.id !== tenant.id);
      addTo([...tenantAfterRemoval]);
    }
  };

  const isTenantSelected = tenant => {
    if (tenants.some(current => current.id === tenant.id)) {
      return true;
    }

    return false;
  };

  return AddHouseTenant_jsx(styledComponents["d" /* Container */], {
    column: true,
    customStyles: {
      padding: "10px 40px"
    },
    color: "transparent"
  }, loading && AddHouseTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    middle: true,
    center: true,
    column: true,
    color: "transparent"
  }, AddHouseTenant_jsx("img", {
    src: _126_default.a,
    style: {
      width: 20,
      height: 20
    }
  })), !loading && tenantList && tenantList.map(ten => {
    return AddHouseTenant_jsx(styledComponents["d" /* Container */], {
      flex: false,
      key: ten.id,
      column: true,
      color: "transparent"
    }, AddHouseTenant_jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      row: true,
      center: true,
      flex: 1,
      customStyles: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 0,
        paddingRight: 5
      }
    }, AddHouseTenant_jsx(styledComponents["d" /* Container */], {
      row: true,
      flex: 1,
      center: true,
      color: "transparent"
    }, ten.profileImage === null ? AddHouseTenant_jsx(core_["Avatar"], {
      src: ten.profileImage,
      className: classes.avatarStyle
    }, AddHouseTenant_jsx(styledComponents["n" /* SubHeader */], null, ten.firstName.charAt(0) + ten.lastName.charAt(0))) : AddHouseTenant_jsx(core_["Avatar"], {
      src: ten.profileImage,
      className: classes.avatarStyle
    }), AddHouseTenant_jsx(styledComponents["d" /* Container */], {
      column: true,
      flex: 1,
      color: "transparent"
    }, AddHouseTenant_jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 0,
        marginLeft: 15
      }
    }, ten.firstName + "" + ten.lastName))), AddHouseTenant_jsx(AddHouseTenant_AddBtn, {
      onClick: () => handleClick(ten)
    }, isTenantSelected(ten) ? AddHouseTenant_jsx(Done_default.a, {
      style: {
        fontSize: 18,
        color: "green"
      }
    }) : AddHouseTenant_jsx(Add_default.a, {
      style: {
        fontSize: 18
      }
    }))));
  }));
};

const AddHouseTenant = ({
  house
}) => {
  const classes = AddHouseTenant_useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: building_name,
    1: setBuildingName
  } = Object(external_react_["useState"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])("paper");
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: isloading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: addToTenant,
    1: setAddToTenant
  } = Object(external_react_["useState"])([]);
  const {
    0: tenantList,
    1: setTenantList
  } = Object(external_react_["useState"])(null);
  const [addToHouse, {
    data,
    loading
  }] = Object(react_hooks_["useMutation"])(ADD_HOUSE_TENANT_MUTATION, {
    variables: {
      houseId: house.id,
      tenantId: addToTenant.length > 0 ? addToTenant[0].id : ""
    }
  });
  console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getTenants(client) {
    setLoading(true);
    const res = await client.query({
      query: LandlordTenants["a" /* GET_LANDLORD_TENANTS */]
    });
    const tenants = res.data.getLandlordTenants;
    setTenantList(tenants);
    setLoading(false);
  }

  return AddHouseTenant_jsx(external_react_apollo_["ApolloConsumer"], null, client => AddHouseTenant_jsx("div", null, AddHouseTenant_jsx(styledComponents["h" /* IconButton */], {
    onClick: e => {
      handleClickOpen();
      getTenants(client);
    },
    customStyles: {
      backgroundColor: "#0078D4",
      height: 33 //   width: 33,

    }
  }, AddHouseTenant_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      color: "white"
    }
  }, "Add")), AddHouseTenant_jsx(core_["Dialog"], {
    fullScreen: fullScreen,
    onClose: e => {
      handleClose();
    },
    classes: {
      paper: classes.dialogPaper
    },
    "aria-labelledby": "customized-dialog-title",
    open: open,
    scroll: scroll
  }, AddHouseTenant_jsx(core_["DialogTitle"], {
    id: "scroll-dialog-title",
    classes: {
      root: classes.dialogActionStyle
    }
  }, AddHouseTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    right: true,
    color: "transparent",
    space: "space-between",
    customStyles: {
      paddingTop: 15,
      paddingBottom: 7,
      paddingRight: 10,
      paddingLeft: 20
    }
  }, AddHouseTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    row: true,
    center: true,
    left: true,
    flex: 1
  }, AddHouseTenant_jsx(styledComponents["n" /* SubHeader */], null, "Tenants")), AddHouseTenant_jsx(AddHouseTenant_CloseBtn, {
    onClick: handleClose
  }, AddHouseTenant_jsx(Close_default.a, {
    style: {
      fontSize: 23
    }
  })))), AddHouseTenant_jsx(core_["DialogContent"], {
    classes: {
      root: classes.dialogContentStyle
    }
  }, AddHouseTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, AddHouseTenant_jsx(TenantsContainer, {
    loading: isloading,
    addTo: setAddToTenant,
    tenants: addToTenant,
    tenantList: tenantList
  }))), AddHouseTenant_jsx(core_["DialogActions"], {
    className: classes.dialogActions
  }, AddHouseTenant_jsx(styledComponents["l" /* PrimaryButton */], {
    customStyles: {
      pointerEvents: addToTenant.length <= 0 ? "none" : "auto",
      opacity: addToTenant.length <= 0 ? 0.4 : 1.0
    },
    onClick: () => {
      addToHouse();
    }
  }, "ADD")))));
};

/* harmony default export */ var houses_AddHouseTenant = (AddHouseTenant);
// CONCATENATED MODULE: ./components/Landlrd/houses/OverviewTab.js
var OverviewTab_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // import BathroomIcon from "@material-ui/icons/BathTub";












const OverviewTab_Tag = external_styled_components_default.a.div.withConfig({
  displayName: "OverviewTab__Tag",
  componentId: "sc-1lnu1uy-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:2px 15px;margin:3px 3px;"]);
const Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "OverviewTab__Wrapper",
  componentId: "sc-1lnu1uy-1"
})(["display:flex;flex-direction:column;flex:1;padding-top:30px;max-height:calc(100vh - 115px);overflow:scroll;::-webkit-scrollbar{display:none;}"]);

const TenantCard = ({
  house,
  tenant
}) => {
  return OverviewTab_jsx(landlord_CurrentTenant, {
    houseId: house.id
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const tenants = data.getCurrentTenant;
      return OverviewTab_jsx(styledComponents["d" /* Container */], {
        flex: 0.5,
        row: true,
        customStyles: {
          borderRadius: 3,
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 0,
          paddingBottom: 20,
          marginRight: 8
        },
        color: "white"
      }, OverviewTab_jsx(styledComponents["d" /* Container */], {
        row: true,
        middle: true,
        flex: 0.1,
        color: "transparent",
        customStyles: {
          height: "100%"
        }
      }, OverviewTab_jsx(PersonPin_default.a, {
        style: {
          fontSize: 20
        }
      })), OverviewTab_jsx(styledComponents["d" /* Container */], {
        column: true,
        space: "space-between",
        flex: 0.8,
        color: "transparent"
      }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
        customStyles: {
          fontSize: 16,
          marginBottom: 0,
          marginTop: 0
        }
      }, "Tenant"), tenants.map(curr => {
        return OverviewTab_jsx(external_react_default.a.Fragment, {
          key: curr.id
        }, OverviewTab_jsx(styledComponents["d" /* Container */], {
          color: "transparent",
          customStyles: {
            paddingTop: 10,
            paddingBottom: 10
          }
        }, OverviewTab_jsx(styledComponents["d" /* Container */], {
          row: true,
          center: true,
          color: "transparent"
        }, OverviewTab_jsx(core_["Avatar"], {
          style: {
            width: 30,
            height: 30,
            marginRight: 8
          }
        }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
          customStyles: {
            fontSize: 10
          }
        }, curr.firstName.charAt(0) + curr.lastName.charAt(0))), OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
          customStyles: {
            fontSize: 18
          }
        }, curr.firstName + " " + curr.lastName))), OverviewTab_jsx(styledComponents["d" /* Container */], {
          row: true,
          center: true,
          color: "transparent",
          customStyles: {
            paddingTop: 5,
            paddingBottom: 5
          }
        }, OverviewTab_jsx(core_["Avatar"], {
          style: {
            backgroundColor: Object(styles_["fade"])("#F7DC6F", 0.3),
            width: 25,
            height: 25,
            marginRight: 8
          }
        }, OverviewTab_jsx(Mail_default.a, {
          style: {
            fontSize: 15,
            color: "#F1C40F"
          }
        })), OverviewTab_jsx(styledComponents["o" /* SubText */], null, curr.comm_email)), OverviewTab_jsx(styledComponents["d" /* Container */], {
          row: true,
          center: true,
          color: "transparent",
          customStyles: {
            paddingTop: 1,
            paddingBottom: 1
          }
        }, OverviewTab_jsx(core_["Avatar"], {
          style: {
            backgroundColor: Object(styles_["fade"])("#58D68D", 0.3),
            width: 25,
            height: 25,
            marginRight: 8
          }
        }, OverviewTab_jsx(LocalPhone_default.a, {
          style: {
            fontSize: 15,
            color: "#27AE60"
          }
        })), OverviewTab_jsx(styledComponents["o" /* SubText */], null, curr.tel_no)));
      })), tenants.length <= 0 && OverviewTab_jsx(houses_AddHouseTenant, {
        house: house
      }));
    }

    return null;
  });
};

const ManagerCard = ({
  managingAgent
}) => {
  return OverviewTab_jsx(external_react_default.a.Fragment, null, managingAgent === null ? OverviewTab_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true,
    customStyles: {
      borderRadius: 3,
      padding: 20,
      marginRight: 8
    },
    color: "white"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    flex: 0.1,
    color: "transparent",
    customStyles: {
      height: "100%"
    }
  }, OverviewTab_jsx(Business_default.a, {
    style: {
      fontSize: 20
    }
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    space: "space-between",
    flex: 0.8,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0,
      marginTop: 0
    }
  }, "Managing Agent")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    flex: 0.1,
    color: "transparent",
    customStyles: {
      height: "100%",
      paddingTop: 2
    }
  }, OverviewTab_jsx(ArrowForward_default.a, {
    style: {
      fontSize: 18
    }
  }))) : OverviewTab_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true,
    customStyles: {
      borderRadius: 3,
      padding: 20,
      marginRight: 8
    },
    color: "white"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    flex: 0.1,
    color: "transparent",
    customStyles: {
      height: "100%"
    }
  }, OverviewTab_jsx(Business_default.a, {
    style: {
      fontSize: 20
    }
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    space: "space-between",
    flex: 0.8,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0,
      marginTop: 0
    }
  }, "Managing Agent"), OverviewTab_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 18
    }
  }, managingAgent.company_name)), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      paddingTop: 5,
      paddingBottom: 5
    }
  }, OverviewTab_jsx(core_["Avatar"], {
    style: {
      backgroundColor: Object(styles_["fade"])("#F7DC6F", 0.3),
      width: 25,
      height: 25,
      marginRight: 8
    }
  }, OverviewTab_jsx(Mail_default.a, {
    style: {
      fontSize: 15,
      color: "#F1C40F"
    }
  })), OverviewTab_jsx(styledComponents["o" /* SubText */], null, managingAgent.comm_email)), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      paddingTop: 1,
      paddingBottom: 1
    }
  }, OverviewTab_jsx(core_["Avatar"], {
    style: {
      backgroundColor: Object(styles_["fade"])("#58D68D", 0.3),
      width: 25,
      height: 25,
      marginRight: 8
    }
  }, OverviewTab_jsx(LocalPhone_default.a, {
    style: {
      fontSize: 15,
      color: "#27AE60"
    }
  })), OverviewTab_jsx(styledComponents["o" /* SubText */], null, managingAgent.tel_no))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    flex: 0.1,
    color: "transparent",
    customStyles: {
      height: "100%",
      paddingTop: 2
    }
  }, OverviewTab_jsx(ArrowForward_default.a, {
    style: {
      fontSize: 18
    }
  }))));
};

const HouseFact = ({
  house,
  house_type
}) => {
  return OverviewTab_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      padding: 10,
      marginBottom: 10
    },
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "PROPERTY TYPE")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house_type.house_type))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "YEAR BUILT")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house.year_built))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "PARKING")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house.parking + " space(s)")))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "FLOORING")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house.flooring))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "LIVING SPACE")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house.live_space + " sqt"))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "PARCEL NO.")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      fontSize: 14,
      color: "#E59866"
    }
  }, house.parcel_no)))));
};

const Interior = ({
  house,
  appliances,
  utilities
}) => {
  return OverviewTab_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      padding: 10,
      marginBottom: 10
    },
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(KingBed_default.a, {
    style: {
      color: "#979a9a",
      fontSize: 20,
      marginRight: 10
    }
  }), OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "BEDS")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["p" /* Text */], null, house.no_bedrooms))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a"
    }
  }, "BATHS")), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["p" /* Text */], null, house.no_bathrooms)))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 10
    }
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a",
      marginRight: 10
    }
  }, "APPLIANCES"), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    wrap: true
  }, appliances.map((app, i) => OverviewTab_jsx(OverviewTab_Tag, {
    key: i
  }, OverviewTab_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      fontSize: 12,
      color: "#0078D4"
    }
  }, app))))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a",
      marginRight: 20
    }
  }, "UTILITIES"), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    wrap: true
  }, utilities.map((util, i) => OverviewTab_jsx(OverviewTab_Tag, {
    key: i
  }, OverviewTab_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      fontSize: 12,
      color: "#0078D4"
    }
  }, util)))))));
};

const Exterior = ({
  house,
  ext_ft
}) => {
  return OverviewTab_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      padding: 10,
      marginBottom: 10
    },
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginBottom: 10
    }
  }, OverviewTab_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 12,
      color: "#979a9a",
      marginRight: 10
    }
  }, "FEATURES"), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    color: "transparent",
    wrap: true
  }, ext_ft.map((ft, i) => OverviewTab_jsx(OverviewTab_Tag, {
    key: i
  }, OverviewTab_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      fontSize: 12,
      color: "#0078D4"
    }
  }, ft)))))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    color: "transparent"
  }));
};

const Overview = (_ref) => {
  let {
    house
  } = _ref,
      other = _objectWithoutProperties(_ref, ["house"]);

  const [ticket, setTicket] = external_react_default.a.useState({});
  const [openTicket, setOpenTicket] = external_react_default.a.useState(false);

  const handleClickOpen = ticket => {
    setTicket(ticket);
    setOpenTicket(true);
  };

  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };

  const {
    house_type,
    managingAgent,
    house_status,
    appliances,
    ext_ft,
    utilities
  } = house;
  return OverviewTab_jsx(Wrapper, null, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    customStyles: {
      width: "100%"
    }
  }, OverviewTab_jsx(core_["Avatar"], {
    style: {
      backgroundColor: "#0078D4",
      width: 35,
      height: 35,
      alignItems: "center",
      justifyContent: "center"
    }
  }, OverviewTab_jsx(Style_default.a, {
    style: {
      fontSize: 20
    }
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    customStyles: {
      width: "100%",
      paddingLeft: 15,
      paddingTop: 3
    }
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0
    }
  }, "At a glance"))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    customStyles: {
      marginTop: 10,
      marginBottom: 20
    },
    color: "transparent"
  }, OverviewTab_jsx(TenantCard, {
    house: house,
    tenant: {
      firstName: "Rene",
      lastName: "La",
      comm_email: "renela@gmail.com",
      tel_no: "+86 158721827812"
    }
  }), OverviewTab_jsx(ManagerCard, {
    managingAgent: managingAgent
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 1,
    customStyles: {
      borderRadius: 3,
      padding: 15,
      marginTop: 10,
      marginBottom: 20
    },
    color: "white"
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0
    }
  }, "Facts and features")), OverviewTab_jsx(HouseFact, {
    house: house,
    house_type: house_type
  }), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0
    }
  }, "Interior details")), OverviewTab_jsx(Interior, {
    house: house,
    appliances: appliances,
    utilities: utilities
  }), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0
    }
  }, "External details")), OverviewTab_jsx(Exterior, {
    house: house,
    ext_ft: ext_ft
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    customStyles: {
      width: "100%"
    }
  }, OverviewTab_jsx(core_["Avatar"], {
    style: {
      backgroundColor: "#0078D4",
      width: 35,
      height: 35,
      alignItems: "center",
      justifyContent: "center"
    }
  }, OverviewTab_jsx(ShowChart_default.a, {
    style: {
      fontSize: 20
    }
  })), OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    middle: true,
    flex: 1,
    customStyles: {
      width: "100%",
      paddingLeft: 15,
      paddingTop: 3
    }
  }, OverviewTab_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16,
      marginBottom: 0
    }
  }, "Latest Activity"))), OverviewTab_jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    customStyles: {
      marginTop: 15
    }
  }, OverviewTab_jsx(styledComponents["d" /* Container */], {
    column: true,
    customStyles: {
      height: 300,
      borderRadius: 5
    },
    flex: 0.5,
    color: "white"
  })));
};

/* harmony default export */ var OverviewTab = (Overview);
// CONCATENATED MODULE: ./components/queryComponents/landlord/HouseTenants.js
var HouseTenants_jsx = external_react_default.a.createElement;

function HouseTenants_extends() { HouseTenants_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HouseTenants_extends.apply(this, arguments); }




const GET_HOUSE_TENANTS = external_graphql_tag_default.a`
  query GET_HOUSE_TENANTS($id: ID!) {
    getHouseTenants(id: $id) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      houseId {
        id
        house_no
        house_heading
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const HouseTenants = props => HouseTenants_jsx(external_react_apollo_["Query"], HouseTenants_extends({}, props, {
  query: GET_HOUSE_TENANTS,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ var landlord_HouseTenants = (HouseTenants);

// EXTERNAL MODULE: ./components/Landlrd/TenantCard.js
var Landlrd_TenantCard = __webpack_require__("KSRF");

// CONCATENATED MODULE: ./components/Landlrd/houses/TenantsTab.js
var TenantsTab_jsx = external_react_default.a.createElement;

function TenantsTab_extends() { TenantsTab_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TenantsTab_extends.apply(this, arguments); }

function TenantsTab_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TenantsTab_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TenantsTab_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TenantsTab_Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TenantsTab__Wrapper",
  componentId: "g3ugtk-0"
})(["display:flex;flex-direction:column;flex:1;padding-top:30px;max-height:calc(100vh - 115px);overflow:scroll;::-webkit-scrollbar{display:none;}"]);
const TenantsTab_Tag = external_styled_components_default.a.div.withConfig({
  displayName: "TenantsTab__Tag",
  componentId: "g3ugtk-1"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 5px;"]);

const Tenants = (_ref) => {
  let {
    house
  } = _ref,
      other = TenantsTab_objectWithoutProperties(_ref, ["house"]);

  const [ticket, setTicket] = external_react_default.a.useState({});
  const [openTicket, setOpenTicket] = external_react_default.a.useState(false);

  const handleClickOpen = ticket => {
    setTicket(ticket);
    setOpenTicket(true);
  };

  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };

  return TenantsTab_jsx(landlord_HouseTenants, {
    id: house.id
  }, ({
    data,
    loading,
    error
  }) => {
    if (loading) {
      return TenantsTab_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        center: true,
        middle: true,
        customStyles: {
          paddingTop: 30,
          minHeight: 300
        }
      }, TenantsTab_jsx("img", {
        src: _126_default.a,
        style: {
          width: 20,
          height: 20
        }
      }));
    }

    if (data) {
      const tenants = data.getHouseTenants;
      return TenantsTab_jsx(external_react_default.a.Fragment, null, tenants.length <= 0 ? TenantsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        middle: true,
        column: true,
        customStyles: {
          minHeight: 250
        }
      }, TenantsTab_jsx(styledComponents["n" /* SubHeader */], {
        customStyles: {
          color: "#979a9a"
        }
      }, "House has no tenants yet")) : TenantsTab_jsx(TenantsTab_Wrapper, null, TenantsTab_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          flexWrap: "wrap" // justifyContent: "space-between",

        }
      }, tenants.map(tenant => {
        return TenantsTab_jsx(Landlrd_TenantCard["a" /* default */], TenantsTab_extends({
          key: tenant.id,
          tenant: tenant
        }, other));
      }))));
    }

    return null;
  });
};

/* harmony default export */ var TenantsTab = (Tenants);
// CONCATENATED MODULE: ./components/queryComponents/landlord/HouseTickets.js
var HouseTickets_jsx = external_react_default.a.createElement;

function HouseTickets_extends() { HouseTickets_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HouseTickets_extends.apply(this, arguments); }




const GET_HOUSE_TICKETS = external_graphql_tag_default.a`
  query GET_HOUSE_TICKETS($id: ID!) {
    getHouseTickets(id: $id) {
      id
      title
      description
      isClosed
      reported_way
      reported_date
      assignedDate
      reported_by {
        id
        user_name
        userType
      }
      houseId {
        id
        house_heading
        house_description
        house_no
      }
    }
  }
`;

const HouseTickets = props => HouseTickets_jsx(external_react_apollo_["Query"], HouseTickets_extends({}, props, {
  query: GET_HOUSE_TICKETS,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ var landlord_HouseTickets = (HouseTickets);

// EXTERNAL MODULE: ./components/Landlrd/tickets/SingleTicket.js + 2 modules
var SingleTicket = __webpack_require__("YdRN");

// CONCATENATED MODULE: ./components/Landlrd/houses/TicketsTab.js
var TicketsTab_jsx = external_react_default.a.createElement;

function TicketsTab_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TicketsTab_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TicketsTab_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const TicketsTab_Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TicketsTab__Wrapper",
  componentId: "sc-11bvte6-0"
})(["display:flex;flex-direction:column;flex:1;padding-top:30px;max-height:calc(100vh - 115px);overflow:scroll;::-webkit-scrollbar{display:none;}"]);

const Tickets = (_ref) => {
  let {
    house
  } = _ref,
      other = TicketsTab_objectWithoutProperties(_ref, ["house"]);

  return TicketsTab_jsx(landlord_HouseTickets, {
    id: house.id
  }, ({
    data,
    loading,
    error
  }) => {
    if (loading) {
      return TicketsTab_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        center: true,
        middle: true,
        customStyles: {
          paddingTop: 30,
          minHeight: 300
        }
      }, TicketsTab_jsx("img", {
        src: _126_default.a,
        style: {
          width: 20,
          height: 20
        }
      }));
    }

    if (data) {
      const tickets = data.getHouseTickets;
      return TicketsTab_jsx(external_react_default.a.Fragment, null, tickets.length <= 0 ? TicketsTab_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        color: "transparent",
        center: true,
        middle: true,
        customStyles: {
          minHeight: 200
        }
      }, TicketsTab_jsx(styledComponents["n" /* SubHeader */], {
        customStyles: {
          color: "#979a9a"
        }
      }, "House has no tickets")) : TicketsTab_jsx(TicketsTab_Wrapper, null, TicketsTab_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        flex: 1,
        customStyles: {
          width: "100%",
          paddingLeft: 5
        }
      }, TicketsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        row: true,
        flex: 0.2,
        color: "transparent"
      }, TicketsTab_jsx(styledComponents["p" /* Text */], {
        customStyles: {
          fontSize: 13
        }
      }, "Date")), TicketsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        row: true,
        flex: 0.3,
        color: "transparent"
      }, TicketsTab_jsx(styledComponents["p" /* Text */], {
        customStyles: {
          fontSize: 13
        }
      }, "Title")), TicketsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        row: true,
        flex: 0.2
      }, TicketsTab_jsx(styledComponents["p" /* Text */], {
        customStyles: {
          fontSize: 13
        }
      }, "Assigned to")), TicketsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        row: true,
        flex: 0.2,
        color: "transparent"
      }, TicketsTab_jsx(styledComponents["p" /* Text */], {
        customStyles: {
          fontSize: 13
        }
      }, "Status")), TicketsTab_jsx(styledComponents["d" /* Container */], {
        center: true,
        row: true,
        flex: 0.1,
        color: "transparent"
      })), TicketsTab_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          paddingTop: 10,
          paddingBottom: 20
        }
      }, tickets.map(issue => {
        return TicketsTab_jsx(SingleTicket["a" /* default */], {
          key: issue.id,
          ticket: issue
        });
      }))));
    }

    return null;
  });
};

/* harmony default export */ var TicketsTab = (Tickets);
// CONCATENATED MODULE: ./components/Landlrd/houses/SingleHouse.js
var SingleHouse_jsx = external_react_default.a.createElement;

function SingleHouse_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SingleHouse_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SingleHouse_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SingleHouse_extends() { SingleHouse_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SingleHouse_extends.apply(this, arguments); }


 // import DialIcon from "@material-ui/icons/DialPad";










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

}))(props => SingleHouse_jsx(core_["Tab"], SingleHouse_extends({
  disableRipple: true
}, props)));
const SingleHouse_useStyles = Object(styles_["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: 0,
    backgroundColor: "transparent",
    border: 0
  },
  smaller: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(7) / 2
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
  }
}));
const HeaderSection = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleHouse__HeaderSection",
  componentId: "i6c9mt-0"
})(["display:flex;width:100%;flex:0.2;flex-direction:column;padding-top:30px;padding-left:100px;padding-bottom:10px;padding-right:80px;background-color:white;"]);
const ContentWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleHouse__ContentWrapper",
  componentId: "i6c9mt-1"
})(["display:flex;flex:0.8;flex-direction:column;"]);
const TabWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleHouse__TabWrapper",
  componentId: "i6c9mt-2"
})(["display:flex;flex-direction:row;width:100%;padding:0px 110px;background-color:white;"]);
const TabSection = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleHouse__TabSection",
  componentId: "i6c9mt-3"
})(["display:flex;flex-direction:column;width:100%;height:100%;padding-right:100px;padding-left:20px;"]);
const SingleHouse_Tag = external_styled_components_default.a.div.withConfig({
  displayName: "SingleHouse__Tag",
  componentId: "i6c9mt-4"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]);

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = SingleHouse_objectWithoutProperties(props, ["children", "value", "index"]);

  return SingleHouse_jsx(core_["Paper"], SingleHouse_extends({
    component: "div",
    role: "tabpanel",
    style: {
      borderRadius: 0
    },
    elevation: 0,
    hidden: value !== index,
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`
  }, other), value === index && SingleHouse_jsx(TabSection, null, children));
}

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

const SingleHouse = props => {
  const classes = SingleHouse_useStyles();

  const {
    house
  } = props,
        other = SingleHouse_objectWithoutProperties(props, ["house"]);

  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    countryId,
    provinceId,
    districtId
  } = house;
  return SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true
  }, SingleHouse_jsx(HeaderSection, null, SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent"
  }, SingleHouse_jsx(core_["Avatar"], {
    src: house.profileImage,
    className: classes.small
  })), SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent" // middle
    // center
    ,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, SingleHouse_jsx(styledComponents["g" /* Header */], null, house.house_heading)), SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent",
    middle: true,
    column: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 40
    }
  }, SingleHouse_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontWeight: "600"
    }
  }, "Description"), SingleHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      fontSize: 12.5
    }
  }, house.house_description)), SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: false,
    color: "transparent",
    middle: true,
    column: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 40
    }
  }, SingleHouse_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontWeight: "600"
    }
  }, "House details"), SingleHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 5
    }
  }, SingleHouse_jsx(FormatAlignRight_default.a, {
    color: "transparent",
    color: "gray",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), SingleHouse_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 11
    }
  }, house.house_no)), SingleHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleHouse_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 11
    }
  }, countryId.name + ", " + provinceId.name)), SingleHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    center: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleHouse_jsx(LocationOn_default.a, {
    color: "gray",
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), SingleHouse_jsx(styledComponents["j" /* NormalText */], {
    customStyles: {
      fontSize: 11
    }
  }, districtId.name + ", " + house.street)))), SingleHouse_jsx(ContentWrapper, null, SingleHouse_jsx(TabWrapper, null, SingleHouse_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    color: "white"
  }, SingleHouse_jsx(StyledTabs, {
    value: value,
    onChange: handleChange
  }, SingleHouse_jsx(StyledTab, SingleHouse_extends({
    label: "Overview"
  }, a11yProps("overview"))), SingleHouse_jsx(StyledTab, SingleHouse_extends({
    label: "Issues"
  }, a11yProps("issues"))), SingleHouse_jsx(StyledTab, SingleHouse_extends({
    label: "Tenants"
  }, a11yProps("tenants"))))), SingleHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    middle: true,
    center: true,
    color: "white"
  }, SingleHouse_jsx(create_CreateBuilding, {
    house: house
  }))), SingleHouse_jsx(TabPanel, {
    value: value,
    index: 0
  }, SingleHouse_jsx(OverviewTab, SingleHouse_extends({
    house: house
  }, other))), SingleHouse_jsx(TabPanel, {
    value: value,
    index: 1
  }, SingleHouse_jsx(TicketsTab, SingleHouse_extends({
    house: house
  }, other))), SingleHouse_jsx(TabPanel, {
    value: value,
    index: 2
  }, SingleHouse_jsx(TenantsTab, SingleHouse_extends({
    house: house
  }, other))), SingleHouse_jsx(TabPanel, {
    value: value,
    index: 3
  }, "Page Four")));
};

/* harmony default export */ var houses_SingleHouse = (SingleHouse);
// CONCATENATED MODULE: ./components/queryComponents/landlord/House.js
var House_jsx = external_react_default.a.createElement;

function House_extends() { House_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return House_extends.apply(this, arguments); }




const GET_HOUSE = external_graphql_tag_default.a`
  query GET_HOUSE($id: ID!) {
    getHouse(id: $id) {
      id
      house_heading
      house_description
      house_no
      house_status
      parcel_no

      house_type {
        id
        house_type
      }
      year_built
      parking
      lot
      price_sqrft
      no_bedrooms
      no_bathrooms
      appliances
      flooring
      live_space
      ext_ft
      utilities
      no_annex
      dinning_room
      date_available_from
      isActive
      has_in_kitchen
      has_balcony
      has_hotwater
      has_carparking
      profileImage
      contact_no
      parent_houseId {
        id
      }
      managingAgent {
        id
        company_name
        comm_email
        tel_no
      }
      countryId {
        name
      }
      provinceId {
        name
      }
      districtId {
        name
      }
      street
      createdAt
      updatedAt
      images {
        id
        image
      }
    }
  }
`;

const House_SingleHouse = props => House_jsx(external_react_apollo_["Query"], House_extends({}, props, {
  query: GET_HOUSE,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ var House = (House_SingleHouse);

// CONCATENATED MODULE: ./pages/Landlrd/houses/[id].js
var _id_jsx = external_react_default.a.createElement;

function _id_extends() { _id_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _id_extends.apply(this, arguments); }

function _id_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _id_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _id_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const _id_House = (_ref) => {
  let {
    query
  } = _ref,
      other = _id_objectWithoutProperties(_ref, ["query"]);

  return _id_jsx(House, {
    id: query.id
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const house = data.getHouse;
      return _id_jsx(styledComponents["d" /* Container */], {
        flex: 1
      }, _id_jsx(houses_SingleHouse, _id_extends({
        house: house
      }, other)));
    }

    return null;
  });
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Object(Layout["a" /* default */])(_id_House));

/***/ }),

/***/ "EtfT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

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

/***/ "H8f9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalPhone");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KSRF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9qvJ");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YZXy");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _queryComponents_landlord_LandlordTenants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("flkU");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6L5Y");
/* harmony import */ var _tenants_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("je9M");
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    // borderRadius: 0,
    marginBottom: 10
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0
  }
}));
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardWrapper",
  componentId: "sc-1cxgd1s-0"
})(["display:flex;flex-direction:column;height:270px;min-width:220px;margin:0px 5px 30px 5px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__Tag",
  componentId: "sc-1cxgd1s-1"
})(["flex:1;align-items:center;justify-content:center;border-radius:10px;padding:5px;margin-right:5px;"]);
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardHeader",
  componentId: "sc-1cxgd1s-2"
})(["direction:flex;flex-direction:column;width:100%;padding:0px 15px 10px 15px;background-color:#f7f9f9;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardContent",
  componentId: "sc-1cxgd1s-3"
})(["direction:flex;flex-direction:column;flex:1;width:100%;background-color:transparent;align-items:center;padding:15px 0px;position:relative;"]);
const CardActions = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardActions",
  componentId: "sc-1cxgd1s-4"
})(["display:flex;flex-direction:row;width:100%;position:absolute;min-height:40px;background-color:transparent;bottom:0;"]);
const CancelBtn = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* PrimaryButton */ "l"]).withConfig({
  displayName: "TenantCard__CancelBtn",
  componentId: "sc-1cxgd1s-5"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const DELETE_TENANT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
  mutation DELETE_TENANT_MUTATION($id: ID!) {
    deleteTenant(id: $id) {
      id
    }
  }
`;
const Transition = react__WEBPACK_IMPORTED_MODULE_7___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slide"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

const DeleteTenant = ({
  tenant
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCompletion = () => {
    handleClose();
  };

  const [deleteTenant, {
    data,
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_0__["useMutation"])(DELETE_TENANT_MUTATION, {
    variables: {
      id: tenant.id
    },
    refetchQueries: [{
      query: _queryComponents_landlord_LandlordTenants__WEBPACK_IMPORTED_MODULE_9__[/* GET_LANDLORD_TENANTS */ "a"]
    }, {
      query: _tenants_index__WEBPACK_IMPORTED_MODULE_11__[/* PAGINATION_QUERY */ "a"]
    }],
    onCompleted: onCompletion
  });
  return __jsx("div", {
    style: {
      flex: 1,
      height: "100%"
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      height: "100%",
      borderTop: `0.5px solid #ECF0F1`,
      borderRight: `0.25px solid #ECF0F1`
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* CommandButton */ "c"], {
    type: "button",
    onClick: () => {
      handleClickOpen();
    }
  }, "Delete")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    id: "alert-dialog-slide-title",
    style: {
      fontSize: 20
    }
  }, "You are about to delete this Tenant?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 15,
      marginBottom: 15
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* SubText */ "o"], {
    customStyles: {
      marginRight: 10
    }
  }, "Tenant: "), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: 17
    }
  }, tenant.firstName))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], null, __jsx(CancelBtn, {
    onClick: () => {
      handleClose();
    }
  }, "Cancel"), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* PrimaryButton */ "l"], {
    onClick: () => {
      deleteTenant();
    },
    type: "button",
    customStyles: {
      backgroundColor: "#E74C3C",
      border: "none"
    }
  }, loading ? "Deleting" : "Delete"))));
};

const TenantCard = ({
  tenant
}) => {
  console.log(tenant);
  const classes = useStyles();
  const {
    houseId
  } = tenant;
  return __jsx(CardWrapper, null, __jsx(CardHeader, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    row: true,
    center: true,
    flex: 0.7,
    color: "white",
    customStyles: {
      marginRight: 10,
      border: `0.5px solid #ECF0F1`,
      padding: "10px 0px",
      borderRadius: 2
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 22,
      marginRight: 7,
      color: "orange"
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* CaptionText */ "b"], null, houseId !== null && houseId.house_heading)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    row: true,
    center: true,
    right: true,
    color: "transparent",
    flex: 0.3,
    customStyles: {
      padding: "10px 0px"
    }
  }, tenant.isActive && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    style: {
      backgroundColor: "#52BE80",
      height: 25,
      width: 25
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "white",
    style: {
      fontSize: 15
    }
  }))))), __jsx(CardContent, null, tenant.profileImage !== null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: tenant.profileImage,
    className: classes.small
  }), tenant.profileImage === null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: classes.small
  }, tenant.firstName.charAt(0) + tenant.lastName.charAt(0)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* SubText */ "o"], {
    customStyles: {
      marginBottom: 2
    }
  }, tenant.firstName + " " + tenant.lastName), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* CaptionText */ "b"], {
    customStyles: {
      color: "blue",
      marginBottom: 5
    }
  }, tenant.comm_email), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* CaptionText */ "b"], {
    customStyles: {
      marginBottom: 3
    }
  }, tenant.tel_no), __jsx(CardActions, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    column: true,
    flex: 0.5,
    color: "transparent"
  }, __jsx(DeleteTenant, {
    tenant: tenant
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* Container */ "d"], {
    column: true,
    flex: 0.5,
    color: "transparent",
    customStyles: {
      // height: "100%",
      borderTop: `0.5px solid #ECF0F1`,
      borderRight: `0.25px solid #ECF0F1`
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/"
  }, __jsx("a", {
    style: {
      flex: 1,
      height: "100%"
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_10__[/* CommandButton */ "c"], {
    customStyles: {
      height: "100%",
      width: "100%"
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TenantCard);
/** <DeleteTenant tenant={tenant} />
            <Container
              color="transparent"
              flex={0.5}
              customStyles={{
                borderTop: `0.5px solid #ECF0F1`,
              }}
            >
              <Link
                style={{
                  display: "flex",
                  flex: 1,
                  width: "100%",
                }}
                href={{
                  pathname: `/Landlrd/tenants/[id]`,
                  query: { id: tenant.id },
                }}
                as={`/Landlrd/tenants/${tenant.id}`}
              >
                <a
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <CommandButton>View Profile</CommandButton>
                </a>
              </Link>
            </Container> */

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Q4dm":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "Q6gG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

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

/***/ "TjsY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/126-18f401b0ce674372ebd02b7f07bee79f.gif";

/***/ }),

/***/ "UIRo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return perPage; });
const endpoint = `http://localhost:4444`;
const perPage = 8;

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "WRcy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_DISTRICTS_IN_PROVINCE; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_DISTRICTS_IN_PROVINCE = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query GET_DISTRICTS_IN_PROVINCE($id: ID!) {
    getDistrictsByProvince(id: $id) {
      id
      name
    }
  }
`;

const Districts = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: GET_DISTRICTS_IN_PROVINCE,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (Districts);


/***/ }),

/***/ "XcKE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "YbdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PROVINCES_IN_COUNTRY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_PROVINCES_IN_COUNTRY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query GET_PROVINCES_IN_COUNTRY($id: ID!) {
    getProvincesByCountry(id: $id) {
      id
      name
    }
  }
`;

const Provinces = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: GET_PROVINCES_IN_COUNTRY,
  variables: {
    id: props.id
  }
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (Provinces);


/***/ }),

/***/ "YdRN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./lib/dateFormat.js
const formatDate = date => {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  return monthNames[month] + " " + dateFormat_pad(date) + ", " + year;
};

function dateFormat_pad(n) {
  return n < 10 ? "0" + n : n;
} //    var monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
// var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_ = __webpack_require__("rYcJ");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);

// CONCATENATED MODULE: ./components/Landlrd/TicketItem.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(styles_["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: 3
  }
}));
const TicketWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TicketItem__TicketWrapper",
  componentId: "sc-53bb2i-0"
})(["display:flex;flex-direction:column;padding-top:10px;padding-left:15px;padding-right:15px;height:385px;min-width:320px;border:1px solid #d5d8dc;position:relative;margin-bottom:20px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TicketItem__Wrapper",
  componentId: "sc-53bb2i-1"
})(["display:flex;flex-direction:row;position:relative;border-radius:2px;padding:12px 15px;margin-bottom:8px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Tag = external_styled_components_default.a.div.withConfig({
  displayName: "TicketItem__Tag",
  componentId: "sc-53bb2i-2"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:5px;padding:2px 15px;", ""], props => props.customStyles);
const CardHeader = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TicketItem__CardHeader",
  componentId: "sc-53bb2i-3"
})(["direction:flex;flex-direction:row;width:100%;align-items:center;background-color:transparent;"]);
const ImageWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "TicketItem__ImageWrapper",
  componentId: "sc-53bb2i-4"
})(["direction:flex;flex-direction:row;flex:1;width:100%;background-color:transparent;padding:0px;margin-top:15px;"]);

const TicketItem = (_ref) => {
  let {
    list,
    num,
    ticket
  } = _ref,
      other = _objectWithoutProperties(_ref, ["list", "num", "ticket"]);

  const classes = useStyles();
  const {
    houseId
  } = ticket;
  return __jsx(Wrapper, other, __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.1,
    color: "transparent"
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 14
    }
  }, num)), __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 14
    }
  }, formatDate(ticket.createdAt))), __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, ticket.title)), __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, houseId.house_heading)), __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, ticket.isClosed ? __jsx(Tag, {
    customStyles: {
      backgroundColor: Object(styles_["fade"])("#A9DFBF", 0.3)
    }
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#212F3D"
    }
  }, "closed")) : __jsx(Tag, {
    customStyles: {
      backgroundColor: Object(styles_["fade"])("#A9DFBF", 0.3)
    }
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#212F3D"
    }
  }, "open"))), __jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    right: true,
    flex: 0.1,
    color: "transparent"
  }, __jsx(MoreHoriz_default.a, null)));
};

/* harmony default export */ var Landlrd_TicketItem = (TicketItem);
{
  /**
  <TicketWrapper {...other}>
      <CardHeader>
        <Avatar src={userPhoto} className={classes.small} />
        <Container
          flex={1}
          column
          color="transparent"
          customStyles={{
            paddingLeft: 10,
            paddingRight: 5,
          }}
        >
          <Text customStyles={{ fontSize: "14px", fontWeight: "500" }}>
            {ticket.title}
          </Text>
          <NormalText customStyles={{ color: "#0078D4" }}>
            Sat, Mar. 28, 2020
          </NormalText>
        </Container>
      </CardHeader>
       <ImageWrapper>
        <Container flex={1} middle center customStyles={{ padding: 40 }}>
          <Avatar
            src={userPhoto}
            style={{ width: "100%", height: "auto", borderRadius: 0 }}
          />
        </Container>
      </ImageWrapper>
    </TicketWrapper> */
}
// CONCATENATED MODULE: ./components/Landlrd/tickets/SingleTicket.js
var SingleTicket_jsx = external_react_default.a.createElement;








const SingleTicket_useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    width: 500,
    borderRadius: 2,
    backgroundColor: "white",
    position: "relative"
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "white"
  },
  dialogActions: {
    // position: "absolute",
    width: "100%",
    // bottom: 0,
    padding: 0,
    margin: 0,
    border: "none" // backgroundColor: "white",

  },
  dialogContentStyle: {
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 0,
    border: "none",
    backgroundColor: "white"
  },
  avatarStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 1,
    backgroundColor: "#F3F2F1"
  },
  buildingImageStyle: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: 2,
    marginRight: 20,
    border: "1.5px dashed #F3F2F1",
    backgroundColor: "#F3F2F1"
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
      backgroundColor: "#FEFEFF"
    }
  }
}));
const SingleTicket_Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTicket__Wrapper",
  componentId: "sc-1q72bwr-0"
})(["flex:1;flex-direction:column;height:100%;padding:0px;background-color:white;"]);
const ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "SingleTicket__ActionBtn",
  componentId: "sc-1q72bwr-1"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "SingleTicket__CloseBtn",
  componentId: "sc-1q72bwr-2"
})(["z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";", ""], ({
  theme
}) => theme.bgPrimary, props => props.customStyles);
const AddBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "SingleTicket__AddBtn",
  componentId: "sc-1q72bwr-3"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "SingleTicket__CancelBtn",
  componentId: "sc-1q72bwr-4"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const SingleTicket_Tag = external_styled_components_default.a.div.withConfig({
  displayName: "SingleTicket__Tag",
  componentId: "sc-1q72bwr-5"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]);
const Form = external_styled_components_default.a.form.withConfig({
  displayName: "SingleTicket__Form",
  componentId: "sc-1q72bwr-6"
})(["display:flex;flex-direction:row;padding:0px 40px;"]);
const DateWrapperStyles = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SingleTicket__DateWrapperStyles",
  componentId: "sc-1q72bwr-7"
})(["flex-direction:row;border-bottom:", ";padding:5px 0px;flex:0.4;align-items:center;background-color:transparent;"], ({
  theme
}) => `4px solid ${theme.btnPrimary}`);

const DateHeader = date => {
  const pad = n => {
    return n < 10 ? "0" + n : n;
  };

  const nth = d => {
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

  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  const newDate = pad(date);
  return SingleTicket_jsx(DateWrapperStyles, null, SingleTicket_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontWeight: "500"
    }
  }, newDate), SingleTicket_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 14,
      marginRight: 5
    }
  }, nth(newDate)), SingleTicket_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontWeight: "500"
    }
  }, monthNames[month]));
};

const SingleTicket = ({
  ticket,
  num
}) => {
  const classes = SingleTicket_useStyles();
  const theme = Object(styles_["useTheme"])();
  const [list, setList] = external_react_default.a.useState(true);
  const [scroll, setScroll] = external_react_default.a.useState("paper");
  const [open, setOpen] = external_react_default.a.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    houseId,
    reported_by
  } = ticket;
  return SingleTicket_jsx("div", {
    style: {
      flex: 0
    }
  }, SingleTicket_jsx(Landlrd_TicketItem, {
    list: true,
    ticket: ticket,
    onClick: handleOpen,
    num: num
  }), SingleTicket_jsx(core_["Dialog"], {
    onClose: handleClose,
    classes: {
      paper: classes.dialogPaper
    },
    open: open,
    scroll: scroll
  }, SingleTicket_jsx(core_["DialogTitle"], {
    id: "scroll-dialog-title",
    classes: {
      root: classes.dialogActionStyle
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    space: "space-between",
    customStyles: {
      paddingTop: 15,
      // paddingBottom: 7,
      paddingRight: 10,
      paddingLeft: 30
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, SingleTicket_jsx(DateHeader, {
    data: ticket.createdAt
  })), SingleTicket_jsx(CloseBtn, {
    onClick: () => handleClose()
  }, SingleTicket_jsx(Close_default.a, {
    style: {
      fontSize: 23
    }
  })))), SingleTicket_jsx(core_["DialogContent"], {
    classes: {
      root: classes.dialogContentStyle
    }
  }, SingleTicket_jsx(SingleTicket_Wrapper, null, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    customStyles: {
      paddingTop: 25
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    middle: true,
    center: true,
    column: true
  }, SingleTicket_jsx(core_["Avatar"], {
    style: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: "#fff",
      marginBottom: 5
    }
  }, SingleTicket_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 16
    }
  }, houseId.house_heading.charAt(0))), SingleTicket_jsx(styledComponents["o" /* SubText */], {
    customStyles: {
      color: "#000",
      marginBottom: 5
    }
  }, reported_by.user_name), reported_by.userType.map((curr, i) => SingleTicket_jsx(styledComponents["j" /* NormalText */], {
    key: i,
    customStyles: {
      color: "gray",
      marginBottom: 5
    }
  }, curr))), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.35,
    column: true,
    customStyles: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 15
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    color: "white",
    depth: 4,
    customStyles: {
      padding: 15,
      marginBottom: 10
    }
  }, SingleTicket_jsx(styledComponents["n" /* SubHeader */], null, "\u201C"), SingleTicket_jsx(styledComponents["d" /* Container */], {
    color: "transparent"
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, ticket.description))), SingleTicket_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    middle: true
  }, SingleTicket_jsx(core_["Divider"], {
    style: {
      marginTop: 10,
      width: "40%"
    }
  }))), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    column: true,
    customStyles: {
      paddingLeft: 25,
      paddingRight: 15,
      marginBottom: 10,
      paddingTop: 10
    }
  }, SingleTicket_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 12,
      color: "#17202A"
    }
  }, "Details"), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    column: true
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, "Created")), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, formatDate(ticket.reported_date)))), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, "Reported way")), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, ticket.reported_way))), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      paddingTop: 10
    }
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, "House")), SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 0.5
  }, SingleTicket_jsx(styledComponents["o" /* SubText */], null, houseId.house_heading))))))))), SingleTicket_jsx(core_["DialogActions"], {
    className: classes.dialogActions
  }, SingleTicket_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    right: true,
    center: true,
    customStyles: {
      padding: 10
    }
  }, "dfsdsdf"))));
};

/* harmony default export */ var tickets_SingleTicket = __webpack_exports__["a"] = (SingleTicket);
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

/***/ }),

/***/ "bzWV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_USER_HOUSES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UIRo");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GET_USER_HOUSES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query GET_USER_HOUSES($skip:Int=0,$first:Int=${_config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]}) {
    getUserHouses(skip:$skip, first:$first,orderBy:createdAt_DESC) {
      id
      house_heading
      house_description
      house_no
      house_status
      parcel_no

      house_type {
        id
        house_type
      }
      year_built
      parking
      lot
      price_sqrft
      no_bedrooms
      no_bathrooms
      appliances
      flooring
      live_space
      ext_ft
      utilities
      no_annex
      dinning_room
      date_available_from
      isActive
      has_in_kitchen
      has_balcony
      has_hotwater
      has_carparking
      profileImage
      contact_no
      countryId {
        name
      }
      provinceId {
        name
      }
      districtId {
        name
      }
      street
      createdAt
      updatedAt
      images {
        id
        image
      }
    }
  }
`;

const Houses = props => {
  const [skipItems, setSkip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: GET_USER_HOUSES,
    variables: {
      skip: skipItems * _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"] - _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]
    }
  }), payload => props.children(payload, setSkip));
};

/* harmony default export */ __webpack_exports__["b"] = (Houses);


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "dFji":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonPin");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "flkU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_LANDLORD_TENANTS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UIRo");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GET_LANDLORD_TENANTS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query GET_LANDLORD_TENANTS($skip: Int = 0, $first: Int=${_config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]}) {
    getLandlordTenants(skip: $skip, first: $first,orderBy:createdAt_DESC) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      registeredBy {
        id
      }
      houseId {
        id
        house_no
        house_heading
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const LandlordTenants = props => {
  const [skipItems, setSkip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: GET_LANDLORD_TENANTS,
    variables: {
      skip: skipItems * _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"] - _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]
    }
  }), payload => props.children(payload, setSkip));
};

/* harmony default export */ __webpack_exports__["b"] = (LandlordTenants);


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iJxd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_USER_PARENT_HOUSES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_USER_PARENT_HOUSES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    getUserParentHouses {
      id
      building_name
      address
      image
    }
  }
`;

const ParentHouses = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: GET_USER_PARENT_HOUSES
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (ParentHouses);


/***/ }),

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "je9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PAGINATION_QUERY; });

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");
var PersonPin_default = /*#__PURE__*/__webpack_require__.n(PersonPin_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// CONCATENATED MODULE: ./components/queryComponents/SearchTenants.js
var __jsx = external_react_default.a.createElement;







const SearchBox = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SearchTenants__SearchBox",
  componentId: "d3456b-0"
})(["display:flex;flex-direction:row;align-items:center;padding-right:10px;background-color:white;height:32px;padding:0px 5px;min-width:150px;margin-left:7px;margin-right:10px;"]);
const SEARCH_TENANT_QUERY = external_graphql_tag_default.a`
  query SEARCH_TENANT_QUERY($searchTerm: String!) {
    searchUserTenants(searchTerm: $searchTerm) {
      id
      firstName
      lastName
      isActive
      sex
      comm_email
      tel_no
      profileImage
      registeredBy {
        id
      }
      houseId {
        id
        house_no
      }
      stay_duration
      from_date
      street
      updatedAt
    }
  }
`;

const AutoComplete = ({
  setFound,
  setLoading
}) => {
  const onChange = external_lodash_debounce_default()(async (e, client) => {
    setLoading(true);
    const res = await client.query({
      query: SEARCH_TENANT_QUERY,
      variables: {
        searchTerm: e.target.value
      }
    });
    const tenants = res.data.searchUserTenants; // console.log(res);

    setFound(tenants);
    setLoading(false);
  }, 350);
  return __jsx(SearchBox, null, __jsx(external_react_apollo_["ApolloConsumer"], null, client => __jsx(styledComponents["m" /* SearchInput */], {
    type: "search",
    onChange: e => {
      e.persist();
      onChange(e, client);
    },
    customStyles: {
      fontSize: 15,
      height: "100%",
      lineHeight: 1,
      padding: 0,
      width: "100%",
      border: 0,
      backgroundColor: "white"
    }
  })));
};

/* harmony default export */ var SearchTenants = (AutoComplete);
// EXTERNAL MODULE: ./components/Landlrd/TenantCard.js
var TenantCard = __webpack_require__("KSRF");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/AddPhotoAlternate"
var AddPhotoAlternate_ = __webpack_require__("vBgU");
var AddPhotoAlternate_default = /*#__PURE__*/__webpack_require__.n(AddPhotoAlternate_);

// EXTERNAL MODULE: ./components/queryComponents/Countries.js
var Countries = __webpack_require__("kseb");

// EXTERNAL MODULE: ./components/queryComponents/Districts.js
var Districts = __webpack_require__("WRcy");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordHouses.js
var LandlordHouses = __webpack_require__("bzWV");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTenants.js
var LandlordTenants = __webpack_require__("flkU");

// EXTERNAL MODULE: ./components/queryComponents/Provinces.js
var Provinces = __webpack_require__("YbdR");

// CONCATENATED MODULE: ./components/Landlrd/tenants/create/CreateTenant.js
var CreateTenant_jsx = external_react_default.a.createElement;















const useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    // minWidth: 900,
    borderRadius: 2,
    // position: "relative",
    backgroundColor: "#F2F3F4"
  },
  dialogActionStyle: {
    padding: 0,
    margin: 0,
    border: "none",
    backgroundColor: "#F2F3F4"
  },
  dialogActions: {
    // position: "absolute",
    width: "100%",
    // bottom: 0,
    padding: 0,
    margin: 0,
    border: "none" // backgroundColor: "white"

  },
  dialogContentStyle: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10,
    height: "100%",
    backgroundColor: "white",
    border: "none" // backgroundColor: "#F2F3F4",

  },
  avatarStyle: {
    position: "relative",
    width: theme.spacing(12),
    height: theme.spacing(10),
    borderRadius: 5,
    backgroundColor: "#F3F2F1"
  },
  inputStyle: {
    border: 0,
    borderRadius: 1,
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
      backgroundColor: "#FEFEFF"
    }
  }
}));
const ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateTenant__ActionBtn",
  componentId: "sc-3akzex-0"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateTenant__CloseBtn",
  componentId: "sc-3akzex-1"
})(["position:absolute;top:0;right:0;z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.bgPrimary);
const CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "CreateTenant__CancelBtn",
  componentId: "sc-3akzex-2"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const UploadBtn = external_styled_components_default()(styledComponents["k" /* OutlinedButton */]).withConfig({
  displayName: "CreateTenant__UploadBtn",
  componentId: "sc-3akzex-3"
})(["display:flex;height:60px;width:100%;border:", ";"], ({
  theme
}) => `1px dashed ${theme.btnPrimary}`);
const CREATE_TENANT_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_TENANT_MUTATION(
    $firstName: String!
    $lastName: String!
    $no_people: Int
    $tenantType: String
    $isActive: Boolean
    $tel_no: String
    $sex: String
    $stay_duration: DateTime
    $comm_email: String
    $profileImage: String
    $houseId: ID
    $from_date: DateTime
    $to_date: DateTime
    $countryId: ID
    $provinceId: ID
    $districtId: ID
    $street: String
  ) {
    createTenant(
      firstName: $firstName
      lastName: $lastName
      no_people: $no_people
      tenantType: $tenantType
      isActive: $isActive
      tel_no: $tel_no
      sex: $sex
      stay_duration: $stay_duration
      comm_email: $comm_email
      profileImage: $profileImage
      houseId: $houseId
      from_date: $from_date
      to_date: $to_date
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId
      street: $street
    ) {
      id
    }
  }
`;

const Houses = ({
  house,
  setHouse
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: housesList,
    1: setHousesList
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function getTenants(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: LandlordHouses["a" /* GET_USER_HOUSES */]
    });
    const houses = res.data.getUserHouses;
    setHousesList(changeObj(houses));
    console.log(houses);
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.house_heading
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateTenant_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateTenant_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10,
      marginBottom: 10
    }
  }, CreateTenant_jsx(styledComponents["e" /* Dropdown */], {
    title: house.length > 0 ? house[0].value : "Add House",
    anchorEl: anchorEl,
    handleOpen: e => getTenants(e, client),
    handleClose: handleClose,
    selection: house,
    setSelection: setHouse,
    items: housesList,
    wrapperStyles: {
      width: 100
    }
  })));
};

const CreateTenant_Countries = ({
  country,
  setCountry
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: countryList,
    1: setCountryList
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function getCountries(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: Countries["a" /* GET_COUNTRIES */]
    });
    const {
      countries
    } = res.data;
    setCountryList(changeObj(countries));
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateTenant_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateTenant_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10
    }
  }, CreateTenant_jsx(styledComponents["e" /* Dropdown */], {
    title: country.length > 0 ? country[0].value : "Country",
    anchorEl: anchorEl,
    handleOpen: e => getCountries(e, client),
    handleClose: handleClose,
    selection: country,
    setSelection: setCountry,
    items: countryList,
    wrapperStyles: {
      width: 150
    }
  })));
};

const CreateTenant_Provinces = ({
  country,
  province,
  setProvince
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: provinceList,
    1: setProvinceList
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function getProvinces(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: Provinces["a" /* GET_PROVINCES_IN_COUNTRY */],
      variables: {
        id: country[0].id
      }
    });
    const provinces = res.data.getProvincesByCountry;
    setProvinceList(changeObj(provinces));
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateTenant_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateTenant_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      pointerEvents: country.length === 0 ? "none" : "auto",
      marginRight: 10
    }
  }, CreateTenant_jsx(styledComponents["e" /* Dropdown */], {
    title: province.length > 0 ? province[0].value : "Province",
    anchorEl: anchorEl,
    handleOpen: e => getProvinces(e, client),
    handleClose: handleClose,
    selection: province,
    setSelection: setProvince,
    items: provinceList,
    wrapperStyles: {
      width: 150
    }
  })));
};

const CreateTenant_Districts = ({
  province,
  district,
  setDistrict
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: districtList,
    1: setDistrictList
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function getDistricts(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: Districts["a" /* GET_DISTRICTS_IN_PROVINCE */],
      variables: {
        id: province[0].id
      }
    });
    const districts = res.data.getDistrictsByProvince;
    setDistrictList(changeObj(districts));
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.name
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateTenant_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateTenant_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      pointerEvents: province.length === 0 ? "none" : "auto"
    }
  }, CreateTenant_jsx(styledComponents["e" /* Dropdown */], {
    title: district.length > 0 ? district[0].value : "District",
    anchorEl: anchorEl,
    handleOpen: e => getDistricts(e, client),
    handleClose: handleClose,
    selection: district,
    setSelection: setDistrict,
    items: districtList,
    wrapperStyles: {
      width: 150
    }
  })));
};

const UploadImageContainer = ({
  profileImg,
  setProfile,
  images,
  setImages,
  isUploading,
  setIsUploading
}) => {
  const {
    0: img_names,
    1: setNames
  } = Object(external_react_["useState"])([]);
  const {
    0: loaded,
    1: setLoaded
  } = Object(external_react_["useState"])(false);

  const uploadProfile = async e => {
    setIsUploading(true);
    const files = e.target.files;
    setNames([...img_names, files[0].name]);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "house_assist");
    const res = await fetch("https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/", {
      method: "POST",
      body: data
    });
    const file = await res.json();

    if (file) {
      setProfile(file.secure_url);
      setLoaded(true);
      setIsUploading(false);
    }
  };

  return CreateTenant_jsx(external_react_default.a.Fragment, null, CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      paddingTop: 10,
      paddingBottom: 5
    }
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    middle: true,
    flex: 0,
    customStyles: {
      padding: 3,
      marginRight: 5
    }
  }, CreateTenant_jsx(AddPhotoAlternate_default.a, {
    style: {
      fontSize: 25
    }
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    center: true,
    color: "transparent"
  }, img_names.map((img, i) => CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    key: i,
    customStyles: {
      marginRight: 4,
      color: "black",
      fontSize: 13
    }
  }, img)))), CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 0.5,
    row: true,
    customStyles: {
      pointerEvents: loaded === 0 ? "none" : "auto"
    }
  }, CreateTenant_jsx(UploadBtn, {
    type: "button"
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    accept: "image/*",
    id: "text-button-file" // multiple
    ,
    type: "file",
    onChange: uploadProfile,
    style: {
      marginLeft: 10,
      width: 200
    }
  }))));
};

const CreateTenant = () => {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: isUploading,
    1: setIsUploading
  } = Object(external_react_["useState"])(false);
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])("paper");
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: firstName,
    1: setFirstName
  } = Object(external_react_["useState"])(null);
  const {
    0: lastName,
    1: setLastName
  } = Object(external_react_["useState"])(null);
  const {
    0: no_people,
    1: setNoPeople
  } = Object(external_react_["useState"])(null);
  const {
    0: comm_email,
    1: setCommEmail
  } = Object(external_react_["useState"])(null);
  const {
    0: tel_no,
    1: setTelNo
  } = Object(external_react_["useState"])(null);
  const {
    0: sex,
    1: setSex
  } = Object(external_react_["useState"])(null);
  const {
    0: isActive,
    1: setIsActive
  } = Object(external_react_["useState"])(false);
  const {
    0: tenantType,
    1: setTenantType
  } = Object(external_react_["useState"])(null);
  const {
    0: from_date,
    1: setFromDate
  } = Object(external_react_["useState"])(null);
  const {
    0: to_date,
    1: setToDate
  } = Object(external_react_["useState"])(null);
  const {
    0: stay_duration,
    1: setStayDuration
  } = Object(external_react_["useState"])(null);
  const {
    0: country,
    1: setCountry
  } = Object(external_react_["useState"])([]);
  const {
    0: district,
    1: setDistrict
  } = Object(external_react_["useState"])([]);
  const {
    0: province,
    1: setProvince
  } = Object(external_react_["useState"])([]);
  const {
    0: profileImage,
    1: setProfile
  } = Object(external_react_["useState"])(null);
  const {
    0: images,
    1: setImages
  } = Object(external_react_["useState"])([]);
  const {
    0: house,
    1: setHouse
  } = Object(external_react_["useState"])([]);
  const {
    0: street,
    1: setStreet
  } = Object(external_react_["useState"])("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substr(0, 10);
  return CreateTenant_jsx(external_react_apollo_["Mutation"], {
    mutation: CREATE_TENANT_MUTATION,
    refetchQueries: [{
      query: LandlordTenants["a" /* GET_LANDLORD_TENANTS */]
    }],
    variables: {
      firstName,
      lastName,
      no_people: parseInt(no_people),
      tenantType,
      isActive: house.length > 0 ? true : false,
      tel_no,
      sex,
      stay_duration,
      comm_email,
      profileImage,
      houseId: house.length > 0 ? house[0].id : "",
      from_date,
      to_date,
      countryId: country.length > 0 ? country[0].id : "",
      provinceId: province.length > 0 ? province[0].id : "",
      districtId: district.length > 0 ? district[0].id : "",
      street
    }
  }, (createTenant, {
    loading,
    error
  }) => CreateTenant_jsx("div", null, CreateTenant_jsx(ActionBtn, {
    onClick: handleClickOpen
  }, CreateTenant_jsx(AddCircleOutline_default.a, {
    style: {
      fontSize: 23,
      marginRight: 5
    }
  }), "Add Tenant"), CreateTenant_jsx(core_["Dialog"], {
    fullScreen: fullScreen,
    onClose: handleClose,
    classes: {
      paper: classes.dialogPaper
    },
    "aria-labelledby": "customized-dialog-title",
    open: open,
    scroll: scroll
  }, CreateTenant_jsx(core_["DialogTitle"], {
    id: "scroll-dialog-title",
    classes: {
      root: classes.dialogActionStyle
    }
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    space: "space-between",
    customStyles: {
      paddingTop: 15,
      paddingBottom: 7,
      paddingRight: 10,
      paddingLeft: 20
    }
  }, CreateTenant_jsx(styledComponents["n" /* SubHeader */], null, " Add Tenant"), CreateTenant_jsx(CancelBtn, {
    onClick: handleClose
  }, "Cancel"))), CreateTenant_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      await createTenant().then(res => {
        handleClose();
      }).catch(err => {
        alert(err);
      });
    },
    style: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10
    }
  }, CreateTenant_jsx(core_["DialogContent"], {
    dividers: scroll === "body",
    style: {
      flex: 1
    },
    classes: {
      root: classes.dialogContentStyle
    }
  }, CreateTenant_jsx("div", null, CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Profile Information")), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    space: "space-between"
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      paddingRight: 10
    },
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "First Name",
    type: "text",
    value: firstName,
    onChange: e => setFirstName(e.target.value)
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 1,
    customStyles: {
      paddingLeft: 10
    }
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "Last Name",
    type: "text",
    value: lastName,
    onChange: e => setLastName(e.target.value)
  }))), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    space: "space-between"
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      paddingRight: 10
    },
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "E-mail",
    type: "email",
    value: comm_email,
    onChange: e => setCommEmail(e.target.value)
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 1,
    customStyles: {
      paddingLeft: 10
    }
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "Tel no",
    type: "phone",
    value: tel_no,
    onChange: e => setTelNo(e.target.value)
  }))), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    space: "space-between"
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      paddingRight: 10
    },
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "No. of family",
    type: "number",
    value: no_people,
    onChange: e => setNoPeople(e.target.value)
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 1,
    customStyles: {
      paddingLeft: 10
    }
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    placeholder: "Sex",
    type: "text",
    value: sex,
    onChange: e => setSex(e.target.value)
  }))), CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginTop: 10,
      marginBottom: 10
    }
  }, "Duration of stay")), CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["i" /* Input */], {
    type: "date",
    label: "From",
    defaultValue: date,
    value: from_date,
    onChange: e => setFromDate(e.target.value),
    style: {
      marginRight: 20
    }
  }), CreateTenant_jsx(styledComponents["i" /* Input */], {
    type: "date",
    label: "To..",
    defaultValue: date,
    value: to_date,
    onChange: e => setToDate(e.target.value)
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginBottom: 10
    }
  }, CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginTop: 10
    }
  }, "Location")), CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent",
    customStyles: {
      marginBottom: 15
    }
  }, CreateTenant_jsx(CreateTenant_Countries, {
    country: country,
    setCountry: setCountry
  }), CreateTenant_jsx(CreateTenant_Provinces, {
    country: country,
    province: province,
    setProvince: setProvince
  }), CreateTenant_jsx(CreateTenant_Districts, {
    district: district,
    province: province,
    setDistrict: setDistrict
  })), CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Add House Tenant")), CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true // space="space-between"
    ,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["d" /* Container */], {
    flex: 0.3,
    column: true,
    color: "transparent"
  }, CreateTenant_jsx(Houses, {
    house: house,
    setHouse: setHouse
  })), CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#E74C3C"
    }
  }, "you need to atleast have one house")), CreateTenant_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateTenant_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Profile picture")), CreateTenant_jsx(UploadImageContainer, {
    isUploading: isUploading,
    setIsUploading: setIsUploading,
    profileImg: profileImage,
    setProfile: setProfile,
    images: images,
    setImages: setImages
  }), CreateTenant_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    right: true,
    center: true,
    row: true,
    flex: false,
    customStyles: {
      paddingTop: 30,
      paddingBottom: 5
    }
  }, isUploading ? CreateTenant_jsx(styledComponents["l" /* PrimaryButton */], {
    type: "submit",
    customStyles: {
      pointerEvents: isUploading ? "none" : "auto",
      opacity: isUploading ? 0.5 : 1
    }
  }, "Uploading..") : CreateTenant_jsx(styledComponents["l" /* PrimaryButton */], {
    type: "submit",
    customStyles: {
      pointerEvents: house.length <= 0 ? "none" : "auto",
      opacity: house.length <= 0 ? 0.5 : 1
    }
  }, loading ? "saving" : "Save Tenant"))))))));
};

/* harmony default export */ var create_CreateTenant = (CreateTenant);
// CONCATENATED MODULE: ./components/Landlrd/tenants/index.js
var tenants_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const SearchWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "tenants__SearchWrapper",
  componentId: "sc-13ij4ib-0"
})(["display:flex;width:100%;flex-direction:row;padding:20px 110px 10px 110px;"]);
const Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "tenants__Wrapper",
  componentId: "sc-13ij4ib-1"
})(["display:flex;flex-direction:column;width:100%;padding-top:0px;padding-left:110px;padding-bottom:15px;padding-right:110px;"]);
const tenants_ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "tenants__ActionBtn",
  componentId: "sc-13ij4ib-2"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const PageBtn = external_styled_components_default()(styledComponents["h" /* IconButton */]).withConfig({
  displayName: "tenants__PageBtn",
  componentId: "sc-13ij4ib-3"
})(["display:flex;justify-content:center;align-items:center;align-content:center;border:none;margin-right:5px;height:33px;width:33px;", ""], props => props.activeStyles);
const PAGINATION_QUERY = external_graphql_tag_default.a`
  query PAGINATION_QUERY {
    tenantsConnection {
      aggregate {
        count
      }
    }
  }
`;

const TenantsPagination = ({
  setSkip
}) => {
  const [currentPage, setCurrentPage] = external_react_default.a.useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setSkip(currentPage + 1);
  };

  const handleBack = () => {
    setCurrentPage(currentPage - 1);
    setSkip(currentPage - 1);
  };

  return tenants_jsx(external_react_apollo_["Query"], {
    query: PAGINATION_QUERY
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const count = data.tenantsConnection.aggregate.count;
      const pages = Math.ceil(count / config["b" /* perPage */]);
      let backDisabled = currentPage <= 1;
      let nextDisabled = currentPage >= pages;
      return tenants_jsx(styledComponents["d" /* Container */], {
        flex: 0,
        row: true,
        middle: true,
        customStyles: {
          paddingTop: 10,
          paddingBottom: 25
        }
      }, tenants_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleBack(),
        customStyles: {
          border: "1px solid #E1E1E1",
          marginRight: 10,
          height: 33,
          width: 33,
          pointerEvents: backDisabled ? "none" : "auto",
          opacity: backDisabled ? 0.6 : 1.0
        }
      }, tenants_jsx(KeyboardArrowLeft_default.a, {
        style: {
          fontSize: 25
        }
      })), [...Array(pages)].map((num, i) => {
        let index = i + 1;
        return tenants_jsx(PageBtn, {
          key: i,
          onClick: () => {
            setCurrentPage(index);
            setSkip(index);
          },
          activeStyles: {
            backgroundColor: index === currentPage ? "#E1E1E1" : "transparent",
            pointerEvents: index === currentPage ? "none" : "auto"
          }
        }, tenants_jsx("span", null, index));
      }), tenants_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleNext(),
        customStyles: {
          border: "1px solid #E1E1E1",
          height: 33,
          width: 33,
          marginLeft: 5,
          pointerEvents: nextDisabled ? "none" : "auto",
          opacity: nextDisabled ? 0.6 : 1.0
        }
      }, tenants_jsx(KeyboardArrowRight_default.a, {
        style: {
          fontSize: 25
        }
      })));
    }

    return null;
  });
};

const Tenants = (_ref) => {
  let {
    tenants,
    setSkip
  } = _ref,
      other = _objectWithoutProperties(_ref, ["tenants", "setSkip"]);

  const [loading, setLoading] = external_react_default.a.useState(false);
  const [foundTenants, setFound] = external_react_default.a.useState(null);
  return tenants_jsx(styledComponents["d" /* Container */], {
    flex: 1
  }, tenants_jsx(SearchWrapper, null, tenants_jsx(styledComponents["g" /* Header */], null, "Your Tenants"), tenants_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    right: true
  }, tenants_jsx(styledComponents["o" /* SubText */], null, "Search:"), tenants_jsx(SearchTenants, {
    setLoading: setLoading,
    setFound: setFound
  }), tenants_jsx(create_CreateTenant, null))), tenants_jsx(Wrapper, null, tenants_jsx(styledComponents["d" /* Container */], {
    space: "space-between",
    center: true,
    row: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, tenants_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1
  })), foundTenants === null && tenants_jsx(external_react_default.a.Fragment, null, tenants && tenants.length > 0 && tenants_jsx(TenantsPagination, {
    setSkip: setSkip
  }), tenants_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, tenants && tenants.map(tenant => {
    return tenants_jsx(TenantCard["a" /* default */], _extends({
      key: tenant.id,
      tenant: tenant
    }, other));
  })), tenants && tenants.length <= 0 && tenants_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    center: true,
    middle: true,
    customStyles: {
      minHeight: 300
    }
  }, tenants_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      marginBottom: 20
    }
  }, "No Tenants found?"), tenants_jsx(PersonPin_default.a, {
    style: {
      fontSize: 100,
      color: "#1C2833",
      marginBottom: 20,
      marginTop: 20
    }
  }), tenants_jsx(styledComponents["b" /* CaptionText */], null, "Try to create one Tenant"))), foundTenants !== null && tenants_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, foundTenants.map(ten => {
    return tenants_jsx(TenantCard["a" /* default */], _extends({
      key: ten.id,
      tenant: ten
    }, other));
  })), foundTenants !== null && foundTenants.length === 0 && tenants_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    middle: true,
    center: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, tenants_jsx(styledComponents["n" /* SubHeader */], null, "No House Found"))));
};

/* harmony default export */ var Landlrd_tenants = __webpack_exports__["b"] = (Tenants);


/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kseb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_COUNTRIES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_COUNTRIES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    countries {
      id
      name
      provinces {
        id
        name
        districts {
          id
          name
          sectors {
            id
            name
          }
        }
      }
    }
  }
`;

const Countries = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: GET_COUNTRIES
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (Countries);


/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

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

/***/ "n4aT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatAlignRight");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nd8x":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "rYcJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "sMk+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShowChart");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vBgU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddPhotoAlternate");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });