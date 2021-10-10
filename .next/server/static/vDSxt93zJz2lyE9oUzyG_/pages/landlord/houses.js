module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "/sfI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

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

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0ezn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "0oZa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_HAS_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Np96");
/* harmony import */ var _public_static_HAS_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_HAS_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tdHr");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0ezn");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rYcJ");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _queryComponents_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mivZ");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("F1wk");
/* harmony import */ var _components_landlord_LogoutButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("PPy0");
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("6L5Y");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Shq7");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const drawerWidth = 200;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - ${theme.spacing(9)}px)`,
    // borderBottom: `0.5px solid ${fade("#393939", 0.2)}`,
    backgroundColor: `${_Page__WEBPACK_IMPORTED_MODULE_11__[/* theme */ "b"].bgPrimary}`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // borderBottom: `0.5px solid ${fade("#393939", 0.2)}`,
    backgroundColor: `${_Page__WEBPACK_IMPORTED_MODULE_11__[/* theme */ "b"].bgPrimary}`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  toolbar: _objectSpread({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  linkStyle: {
    textDecoration: "none",
    // cursor: "pointer",
    color: _Page__WEBPACK_IMPORTED_MODULE_11__[/* theme */ "b"].iconStyle
  },
  activeLink: {
    textDecoration: "none",
    // cursor: "pointer",
    color: _Page__WEBPACK_IMPORTED_MODULE_11__[/* theme */ "b"].tealPrimary
  },
  menuPaper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F2F3F4",
    width: 200,
    borderRadius: 2,
    marginBottom: 5,
    marginTop: 38
  },
  menuItem: {
    height: 50
  }
}));

const Header = ({
  open,
  children
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CssBaseline"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    color: _Page__WEBPACK_IMPORTED_MODULE_11__[/* theme */ "b"].bgPrimary,
    elevation: 0,
    position: "fixed",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.appBar, {
      [classes.appBarShift]: open
    })
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    style: {
      display: "flex",
      flexDirection: "row",
      flex: 1
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    row: true,
    middle: true,
    left: true,
    flex: 0.8
  }, children), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    row: true,
    flex: 0.2,
    customStyles: {
      minHeight: 35,
      maxHeight: 35
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    flex: 0.85,
    row: true,
    color: "white",
    depth: 4,
    customStyles: {
      marginRight: 8,
      borderRadius: 2
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    middle: true,
    center: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    alt: "LOGO",
    src: _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: classes.small
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    flex: 0.8,
    row: true,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    middle: true,
    flex: 0.8,
    color: "transparent",
    customStyles: {
      flexWrap: "no-wrap"
    }
  }, __jsx(_queryComponents_User__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], null, payload => {
    const {
      data,
      loading
    } = payload;

    if (!loading && data) {
      return __jsx("div", {
        style: {
          flexWrap: "no-wrap"
        }
      }, data.me && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* CaptionText */ "b"], {
        customStyles: {
          flexWrap: "no-wrap"
        }
      }, data.me.email));
    }

    return __jsx("div", null);
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    middle: true,
    center: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    style: {
      width: "100%",
      height: "100%",
      padding: 0,
      borderRadius: 0
    },
    "aria-controls": "fade-menu",
    "aria-haspopup": "true",
    onClick: handleClick
  }, __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, null))))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* Container */ "d"], {
    flex: 0.15,
    color: "white",
    depth: 4,
    customStyles: {
      borderRadius: 2
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    style: {
      width: "100%",
      height: "100%",
      padding: 0,
      borderRadius: 0
    }
  }, __jsx(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_7___default.a, null)))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Menu"], {
    id: "fade-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: menuOpen,
    onClose: handleClose,
    TransitionComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Slide"],
    classes: {
      paper: classes.menuPaper
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/landlord/welcome",
    as: "/landlord/my-profile"
  }, __jsx("a", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleClose,
    className: classes.menuItem
  }, __jsx(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_14___default.a, {
    style: {
      fontSize: 20,
      color: "#717D7E",
      marginRight: 10
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* SubText */ "o"], null, "My Profile")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleClose,
    className: classes.menuItem
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* SubText */ "o"], null, "Contact support")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    onClick: handleClose,
    className: classes.menuItem
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_13__[/* SubText */ "o"], null, "Help center")), __jsx(_components_landlord_LogoutButton__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    handleClose: handleClose
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);
{
  /*<div
  style={{
  // backgroundColor: "white",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-end"
  }}
  >
  <Container
  color="white"
  flex={1}
  customStyles={{ minWidth: 60 }}
  depth={4}
  >
  <User>
    {payload => {
      const { data, loading } = payload;
      if (!loading && data) {
        return (
          <div>
            {data.me && (
              <Typography
                variant="h6"
                noWrap
                style={{
                  marginLeft: 7,
                  marginRight: 7,
                  color: customTheme.textSecondary
                }}
              >
                {data.me.email}
              </Typography>
            )}
          </div>
        );
      }
      return <div />;
    }}
  </User>
  </Container>
  <Avatar alt="LOGO" src={hasLogo} className={classes.small} />
  <LogoutButton />
  </div>*/
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8i5I");


/***/ }),

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5id3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

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

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "8i5I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/landlord/Layout.js + 2 modules
var Layout = __webpack_require__("IxcL");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/Page.js + 1 modules
var Page = __webpack_require__("F1wk");

// EXTERNAL MODULE: external "@material-ui/icons/List"
var List_ = __webpack_require__("/sfI");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewModule"
var ViewModule_ = __webpack_require__("GLi4");
var ViewModule_default = /*#__PURE__*/__webpack_require__.n(ViewModule_);

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckCircleOutline"
var CheckCircleOutline_ = __webpack_require__("CSXW");
var CheckCircleOutline_default = /*#__PURE__*/__webpack_require__.n(CheckCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/SingleBed"
var SingleBed_ = __webpack_require__("BJfW");
var SingleBed_default = /*#__PURE__*/__webpack_require__.n(SingleBed_);

// EXTERNAL MODULE: external "@material-ui/icons/Bathtub"
var Bathtub_ = __webpack_require__("iP/l");
var Bathtub_default = /*#__PURE__*/__webpack_require__.n(Bathtub_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: ./components/landlord/Drawer.js
var Drawer = __webpack_require__("DIlr");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");

// EXTERNAL MODULE: external "@material-ui/icons/House"
var House_ = __webpack_require__("mi5/");
var House_default = /*#__PURE__*/__webpack_require__.n(House_);

// EXTERNAL MODULE: external "@material-ui/icons/AddPhotoAlternate"
var AddPhotoAlternate_ = __webpack_require__("vBgU");
var AddPhotoAlternate_default = /*#__PURE__*/__webpack_require__.n(AddPhotoAlternate_);

// EXTERNAL MODULE: external "@material-ui/icons/NoteAdd"
var NoteAdd_ = __webpack_require__("herE");
var NoteAdd_default = /*#__PURE__*/__webpack_require__.n(NoteAdd_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__("jQ8v");

// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__("cvHV");

// EXTERNAL MODULE: external "@material-ui/icons/Apartment"
var Apartment_ = __webpack_require__("jH29");
var Apartment_default = /*#__PURE__*/__webpack_require__.n(Apartment_);

// EXTERNAL MODULE: external "@material-ui/core/StepConnector"
var StepConnector_ = __webpack_require__("WkHw");
var StepConnector_default = /*#__PURE__*/__webpack_require__.n(StepConnector_);

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/queryComponents/Houses.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_USER_HOUSES = external_graphql_tag_default.a`
  query {
    getUserHouses {
      id
      house_heading
      house_description
      house_no
      no_bathrooms
      no_bedrooms
      no_annex
      dinning_room
      isActive
      has_in_kitchen
      has_balcony
      has_garden
      has_hotwater
      has_carparking
      house_type {
        id
        house_type
      }
      countryId {
        id
        name
      }
      provinceId {
        id
        name
      }
      districtId {
        id
        name
      }
      sectorId {
        id
        name
      }
      images {
        id
        image
      }
    }
  }
`;

const Houses = props => __jsx(external_react_apollo_["Query"], _extends({}, props, {
  query: GET_USER_HOUSES
}), payload => props.children(payload));

/* harmony default export */ var queryComponents_Houses = (Houses);

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);

// EXTERNAL MODULE: external "@material-ui/icons/CloudUpload"
var CloudUpload_ = __webpack_require__("C20b");
var CloudUpload_default = /*#__PURE__*/__webpack_require__.n(CloudUpload_);

// EXTERNAL MODULE: external "@material-ui/icons/CheckBox"
var CheckBox_ = __webpack_require__("zzqg");

// EXTERNAL MODULE: external "@material-ui/icons/LocalOffer"
var LocalOffer_ = __webpack_require__("RmX+");
var LocalOffer_default = /*#__PURE__*/__webpack_require__.n(LocalOffer_);

// EXTERNAL MODULE: ./components/queryComponents/Countries.js
var Countries = __webpack_require__("kseb");

// EXTERNAL MODULE: ./components/queryComponents/Provinces.js
var Provinces = __webpack_require__("YbdR");

// EXTERNAL MODULE: ./components/queryComponents/Districts.js
var Districts = __webpack_require__("WRcy");

// EXTERNAL MODULE: ./components/queryComponents/HouseTypes.js
var HouseTypes = __webpack_require__("LBc1");

// EXTERNAL MODULE: ./public/static/126.gif
var _126 = __webpack_require__("TjsY");
var _126_default = /*#__PURE__*/__webpack_require__.n(_126);

// CONCATENATED MODULE: ./components/landlord/house/create/CreateHouse.js
var CreateHouse_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CreateHouse_extends() { CreateHouse_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CreateHouse_extends.apply(this, arguments); }















 // import Sectors from "../../queryComponents/Sectors";




const CREATE_HOUSE_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_HOUSE_MUTATION(
    $house_heading: String!
    $house_description: String!
    $house_no: String!
    $no_bathrooms: Int
    $no_bedrooms: Int
    $no_annex: Int
    $dinning_room: Int
    $isActive: Boolean
    $has_in_kitchen: Boolean
    $has_balcony: Boolean
    $has_garden: Boolean
    $has_hotwater: Boolean
    $has_carparking: Boolean
    $house_type: ID
    # $parent_houseId: ID
    $countryId: ID
    $provinceId: ID
    $districtId: ID # $sectorId: ID
  ) {
    createHouse(
      house_heading: $house_heading
      house_description: $house_description
      house_no: $house_no
      no_bathrooms: $no_bathrooms
      no_bedrooms: $no_bedrooms
      no_annex: $no_annex
      dinning_room: $dinning_room
      isActive: $isActive
      has_in_kitchen: $has_in_kitchen
      has_balcony: $has_balcony
      has_garden: $has_garden
      has_hotwater: $has_hotwater
      has_carparking: $has_carparking
      house_type: $house_type
      # parent_houseId: $parent_houseId
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId # sectorId: $sectorId
    ) {
      id
      house_heading
      house_description
      house_no
      no_annex
      no_bathrooms
      no_bedrooms
      dinning_room
      isActive
      has_in_kitchen
      has_balcony
      has_garden
      has_hotwater
      has_carparking
      house_type {
        id
      }
      # parent_houseId {
      #   id
      # }
      countryId {
        id
        name
      }
      provinceId {
        id
        name
      }
      districtId {
        id
        name
      }
      # sectorId {
      #   id
      #   name
      # }
    }
  }
`;
const ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateHouse__ActionBtn",
  componentId: "r30vjh-0"
})(["display:flex;justify-content:center;align-items:center;height:30px;width:30px;align-content:center;border-radius:2px;margin-right:5px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);

const styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: 120
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
  },
  button: {
    margin: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  headerStyle: {
    fontWeight: "500",
    fontSize: 14
  },
  checkStyle: {
    fontWeight: "400",
    fontSize: 12
  }
});

const GreenCheckbox = Object(styles_["withStyles"])({
  root: {
    color: "green",
    "&$checked": {
      color: "red"
    }
  },
  checked: {}
})(props => CreateHouse_jsx(core_["Checkbox"], CreateHouse_extends({
  color: "default"
}, props)));

class CreateHouse_CreateHouse extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      createdHouses: [],
      activeStep: 0,
      house_heading: "",
      house_description: "",
      house_no: "",
      no_annex: "",
      no_bathrooms: "",
      no_bedrooms: "",
      dinning_room: "",
      isActive: false,
      has_in_kitchen: false,
      has_balcony: false,
      has_garden: false,
      has_hotwater: false,
      has_carparking: false,
      house_type: "",
      parent_houseId: "",
      countryId: "",
      provinceId: "",
      districtId: "",
      sectorId: "",
      success: false
    });

    _defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "handleReset", () => {
      this.setState({
        activeStep: 0
      });
    });
  }

  render() {
    const {
      activeStep,
      house_heading,
      house_description,
      house_no,
      no_annex,
      no_bathrooms,
      no_bedrooms,
      dinning_room,
      isActive,
      has_in_kitchen,
      has_balcony,
      has_garden,
      has_hotwater,
      has_carparking,
      house_type,
      parent_houseId,
      countryId,
      provinceId,
      districtId,
      sectorId,
      createdHouses,
      success
    } = this.state;
    const {
      classes
    } = this.props;
    return CreateHouse_jsx(external_react_apollo_["Mutation"], {
      mutation: CREATE_HOUSE_MUTATION,
      refetchQueries: [{
        query: GET_USER_HOUSES
      }],
      variables: {
        house_heading,
        house_description,
        house_no,
        no_bathrooms: parseInt(no_bathrooms),
        no_bedrooms: parseInt(no_bedrooms),
        no_annex: parseInt(no_annex),
        dinning_room: parseInt(dinning_room),
        isActive,
        has_in_kitchen,
        has_balcony,
        has_garden,
        has_hotwater,
        has_carparking,
        house_type,
        // parent_houseId,
        countryId,
        provinceId,
        districtId // sectorId

      }
    }, (createHouse, {
      loading,
      error
    }) => {
      return CreateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1
      }, CreateHouse_jsx("form", {
        method: "post",
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 15,
          position: "relative"
        },
        onSubmit: async e => {
          e.preventDefault();
          await createHouse().then(res => {
            this.setState({
              success: true
            });
          }).catch(err => {
            alert(err);
          });
          this.setState({
            house_heading: "",
            house_description: "",
            house_no: "",
            no_annex: 0,
            no_bathrooms: 0,
            no_bedrooms: 0,
            dinning_room: 0,
            isActive: false,
            has_in_kitchen: false,
            has_balcony: false,
            has_garden: false,
            has_hotwater: false,
            has_carparking: false,
            house_type: "",
            parent_houseId: "",
            countryId: "",
            provinceId: "",
            districtId: "",
            sectorId: ""
          });
        }
      }, CreateHouse_jsx(styledComponents["d" /* Container */], {
        flex: false,
        row: true,
        center: true,
        customStyles: {
          paddingTop: 20,
          paddingBottom: 20
        }
      }, CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        flex: 1
      }, CreateHouse_jsx(ActionBtn, null, CreateHouse_jsx(Add_default.a, {
        style: {
          fontSize: 20
        }
      })), CreateHouse_jsx(styledComponents["b" /* CaptionText */], null, "Assign to building")), CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        flex: 1
      }, CreateHouse_jsx(ActionBtn, null, CreateHouse_jsx(Add_default.a, {
        style: {
          fontSize: 20
        }
      })), CreateHouse_jsx(styledComponents["b" /* CaptionText */], null, "Assign to tenant")), CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        flex: 1
      }, CreateHouse_jsx(ActionBtn, null, CreateHouse_jsx(LocalOffer_default.a, {
        style: {
          fontSize: 18
        }
      })), CreateHouse_jsx(styledComponents["b" /* CaptionText */], null, "select tag"))), CreateHouse_jsx(core_["Divider"], {
        style: {
          height: "0.5px"
        }
      }), CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        flex: false,
        space: "space-between",
        customStyles: {
          width: "100%",
          paddingTop: 20
        }
      }, CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        label: "House Heading",
        placeholder: "start typing ...",
        type: "text",
        value: house_heading,
        onChange: e => {
          this.setState({
            house_heading: e.target.value
          });
        },
        customStyles: {
          width: 200
        }
      }), CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        label: "House Number",
        type: "text",
        value: house_no,
        onChange: e => {
          this.setState({
            house_no: e.target.value
          });
        },
        customStyles: {
          width: 200
        }
      })), CreateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        flex: false,
        customStyles: {
          width: "100%",
          paddingTop: 20
        }
      }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          marginBottom: 5
        }
      }, "Description"), CreateHouse_jsx("textarea", {
        type: "text",
        placeholder: "start typing here...",
        className: classes.inputStyle,
        value: house_description,
        onChange: e => {
          this.setState({
            house_description: e.target.value
          });
        }
      })), CreateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        flex: false,
        customStyles: {
          width: "100%",
          paddingTop: 15,
          paddingBottom: 5
        }
      }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          color: "#323130",
          fontWeight: "600"
        }
      }, "House Features"), CreateHouse_jsx(core_["Divider"], {
        style: {
          height: "0.5px"
        }
      })), CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        flex: false,
        customStyles: {
          width: "100%"
        }
      }, CreateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        flex: 1
      }, CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        row: true,
        label: "Bedrooms",
        type: "number",
        placeholder: "...",
        value: no_bedrooms,
        onChange: e => {
          this.setState({
            no_bedrooms: e.target.value
          });
        },
        customStyles: {
          width: 80
        }
      }), CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        label: "Bathrooms",
        type: "number",
        placeholder: "...",
        value: no_bathrooms,
        onChange: e => {
          this.setState({
            no_bathrooms: e.target.value
          });
        },
        row: true,
        customStyles: {
          width: 80
        }
      }), CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        label: "Annex",
        type: "number",
        placeholder: "...",
        value: no_annex,
        row: true,
        onChange: e => {
          this.setState({
            no_annex: e.target.value
          });
        },
        customStyles: {
          width: 80
        }
      }), CreateHouse_jsx(styledComponents["q" /* TextInput */], {
        label: "Dinning rooms",
        type: "number",
        placeholder: "...",
        value: dinning_room,
        onChange: e => {
          this.setState({
            dinning_room: e.target.value
          });
        },
        row: true,
        customStyles: {
          width: 80
        }
      })), CreateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        center: true,
        customStyles: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 20
        }
      }, CreateHouse_jsx(core_["FormGroup"], {
        column: true
      }, CreateHouse_jsx(core_["FormControlLabel"], {
        control: CreateHouse_jsx(GreenCheckbox, {
          checked: has_hotwater,
          onChange: e => {
            this.setState({
              has_hotwater: !has_hotwater
            });
          },
          name: "hot_water"
        }),
        label: "Hot Water"
      }), CreateHouse_jsx(core_["FormControlLabel"], {
        control: CreateHouse_jsx(GreenCheckbox, {
          checked: has_carparking,
          onChange: e => {
            this.setState({
              has_carparking: !has_carparking
            });
          },
          name: "parking"
        }),
        label: "Has Parking"
      }), CreateHouse_jsx(core_["FormControlLabel"], {
        control: CreateHouse_jsx(GreenCheckbox, {
          checked: has_in_kitchen,
          onChange: e => {
            this.setState({
              has_in_kitchen: !has_in_kitchen
            });
          },
          name: "kitchen"
        }),
        label: "Inside Kitchen"
      }), CreateHouse_jsx(core_["FormControlLabel"], {
        control: CreateHouse_jsx(GreenCheckbox, {
          checked: has_balcony,
          onChange: e => {
            this.setState({
              has_balcony: !has_balcony
            });
          },
          name: "balcony"
        }),
        label: "Has balcony"
      }), CreateHouse_jsx(core_["FormControlLabel"], {
        control: CreateHouse_jsx(GreenCheckbox, {
          checked: has_garden,
          onChange: e => {
            this.setState({
              has_garden: !has_garden
            });
          },
          name: "garden"
        }),
        label: "Has garden"
      })))), CreateHouse_jsx(styledComponents["d" /* Container */], {
        flex: false,
        column: true,
        customStyles: {
          width: "100%",
          paddingTop: 10,
          paddingBottom: 20
        }
      }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          marginBottom: 5
        }
      }, "House profile"), CreateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true
      }, CreateHouse_jsx(CloudUpload_default.a, {
        style: {}
      }), CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          marginLeft: 10
        }
      }, "upload your house image")))));
    });
  }

}

/* harmony default export */ var create_CreateHouse = (Object(styles_["withStyles"])(styles)(CreateHouse_CreateHouse));
// CONCATENATED MODULE: ./components/landlord/house/create/AddHouseImage.js
var AddHouseImage_jsx = external_react_default.a.createElement;

function AddHouseImage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const ADD_IMAGE_MUTATION = external_graphql_tag_default.a`
  mutation ADD_IMAGE_MUTATION($image: String!, $houseId: ID!) {
    createHouseImage(image: $image, houseId: $houseId) {
      id
      image
      houseId {
        id
        house_heading
      }
    }
  }
`;

const AddHouseImage_styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    // marginTop: theme.spacing(2),
    maxWidth: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class AddHouseImage_AddHouseImage extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    AddHouseImage_defineProperty(this, "state", {
      image: null,
      houseId: ""
    });

    AddHouseImage_defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    AddHouseImage_defineProperty(this, "uploadImage", async e => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "house_assist");
      const res = await fetch("https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/", {
        method: "POST",
        body: data
      });
      const file = await res.json();

      if (file) {
        this.setState({
          image: file.secure_url
        });
      }
    });

    AddHouseImage_defineProperty(this, "addImageContainer", data => {
      const {
        image,
        houseId
      } = this.state;
      const {
        classes
      } = this.props;
      return AddHouseImage_jsx(external_react_apollo_["Mutation"], {
        mutation: ADD_IMAGE_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: GET_USER_HOUSES
        }]
      }, (addImage, {
        loading,
        error
      }) => {
        return AddHouseImage_jsx(styledComponents["d" /* Container */], {
          flex: 1
        }, AddHouseImage_jsx("form", {
          method: "post",
          style: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1
          },
          onSubmit: async e => {
            e.preventDefault();
            await addImage();
            this.setState({
              image: null,
              houseId: ""
            });
          }
        }, AddHouseImage_jsx(styledComponents["d" /* Container */], {
          middle: true,
          row: true,
          center: true,
          customStyles: {
            paddingTop: 15,
            marginTop: 30
          }
        }, AddHouseImage_jsx("span", null, " Select House:"), AddHouseImage_jsx(core_["FormControl"], {
          size: "small",
          variant: "outlined",
          className: classes.formControl
        }, AddHouseImage_jsx(core_["Select"], {
          native: true,
          size: "normal",
          value: houseId,
          style: {
            marginLeft: 15
          },
          onChange: e => {
            this.setState({
              houseId: e.target.value
            });
          },
          inputProps: {
            name: "house",
            id: "outlined-house-image"
          }
        }, AddHouseImage_jsx("option", {
          value: ""
        }, "choose house"), data.map(house => AddHouseImage_jsx("option", {
          key: house.id,
          value: house.id
        }, house.house_heading))))), AddHouseImage_jsx(styledComponents["d" /* Container */], {
          middle: true,
          row: true,
          center: true,
          customStyles: {
            paddingTop: 15,
            marginTop: 30
          }
        }, AddHouseImage_jsx("span", null, " Select photo:"), AddHouseImage_jsx(styledComponents["i" /* Input */], {
          accept: "image/*",
          id: "text-button-file",
          multiple: true,
          type: "file",
          onChange: this.uploadImage,
          style: {
            marginLeft: 10,
            width: 200
          }
        }), image !== null && AddHouseImage_jsx("img", {
          src: image,
          style: {
            width: 40,
            height: 35,
            objectFit: "fit"
          }
        })), AddHouseImage_jsx(styledComponents["d" /* Container */], {
          right: true,
          center: true,
          row: true,
          flex: 1,
          space: "space-between",
          customStyles: {
            position: "absolute",
            bottom: 0,
            marginTop: 15,
            padding: 10,
            borderTop: `0.5px solid ${Object(styles_["fade"])("#393939", 0.2)}`,
            width: "100%"
          }
        }, AddHouseImage_jsx(styledComponents["f" /* FlatButton */], {
          type: "submit"
        }, loading ? AddHouseImage_jsx("img", {
          src: _126_default.a,
          style: {
            width: 20,
            height: 20
          }
        }) : "Save"))));
      });
    });
  }

  render() {
    const {
      image,
      houseId
    } = this.state;
    const {
      classes
    } = this.props;
    return AddHouseImage_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      column: true
    }, AddHouseImage_jsx(queryComponents_Houses, null, ({
      data,
      loading,
      error
    }) => {
      if (data) {
        const houses = data.getUserHouses;

        if (houses.length === 0) {
          return AddHouseImage_jsx(styledComponents["d" /* Container */], {
            flex: 1,
            column: true,
            middle: true,
            center: true // customStyles={{ paddingTop: 64 }}

          }, AddHouseImage_jsx(AddPhotoAlternate_default.a, {
            style: {
              fontSize: 60,
              color: "gray"
            }
          }), AddHouseImage_jsx(core_["Typography"], {
            style: {
              fontSize: 13,
              fontWeight: 200,
              marginTop: 20
            }
          }, "Add at least one house"));
        }

        if (houses.length !== 0) {
          return AddHouseImage_jsx(styledComponents["d" /* Container */], {
            color: "pink",
            flex: 1
          }, this.addImageContainer(houses));
        }
      }

      if (loading) {
        return AddHouseImage_jsx(styledComponents["d" /* Container */], {
          flex: 1,
          middle: true,
          center: true
        }, AddHouseImage_jsx("img", {
          src: _126_default.a,
          style: {
            width: 25,
            height: 25
          }
        }));
      }

      return null;
    }));
  }

}

/* harmony default export */ var create_AddHouseImage = (Object(styles_["withStyles"])(AddHouseImage_styles)(AddHouseImage_AddHouseImage));
// EXTERNAL MODULE: external "react-reveal/Slide"
var Slide_ = __webpack_require__("8qPd");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// CONCATENATED MODULE: ./components/queryComponents/Leases.js
var Leases_jsx = external_react_default.a.createElement;

function Leases_extends() { Leases_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Leases_extends.apply(this, arguments); }




const GET_USER_HOUSES_LEASES = external_graphql_tag_default.a`
  query {
    getLeases {
      id
      lease_name
      admin_fee
      brokerage_fee
      security_deposit
      houseId {
        id
        house_heading
      }
    }
  }
`;

const Leases = props => Leases_jsx(external_react_apollo_["Query"], Leases_extends({}, props, {
  query: GET_USER_HOUSES_LEASES
}), payload => props.children(payload));

/* harmony default export */ var queryComponents_Leases = (Leases);

// EXTERNAL MODULE: ./components/queryComponents/ParentHouses.js
var ParentHouses = __webpack_require__("iJxd");

// CONCATENATED MODULE: ./components/landlord/house/DeleteParentHouse.js
var DeleteParentHouse_jsx = external_react_default.a.createElement;




const DELETE_PARENT_HOUSE = external_graphql_tag_default.a`
  mutation DELETE_PARENT_HOUSE($id: ID!) {
    deleteParentHouse(id: $id) {
      id
      building_name
      image
    }
  }
`;

class DeleteParentHouse_DeleteParentHouse extends external_react_default.a.Component {
  //   update = (cache, payload) => {
  //     // manually update the cache on the client, so it matches the server
  //     // 1. Read the cache for the items we want
  //     const data = cache.readQuery({ query: GET_USER_PARENT_HOUSES });
  //     // console.log(data, payload);
  //     // 2. Filter the deleted itemout of the page
  //     // data.items = data.items.filter(
  //     //   item => item.id !== payload.data.deleteItem.id
  //     // );
  //     // 3. Put the items back!
  //     cache.writeQuery({ query: GET_USER_PARENT_HOUSES, data });
  //   };
  render() {
    return DeleteParentHouse_jsx(external_react_apollo_["Mutation"], {
      mutation: DELETE_PARENT_HOUSE,
      variables: {
        id: this.props.id
      },
      refetchQueries: [{
        query: ParentHouses["a" /* GET_USER_PARENT_HOUSES */]
      }] // update={this.update}

    }, (deleteParentHouse, {
      error
    }) => DeleteParentHouse_jsx("button", {
      style: {
        color: "red"
      },
      onClick: () => {
        if (confirm("Are you sure you want to delete this building?")) {
          deleteParentHouse().catch(err => {
            alert(err.message);
          });
        }
      }
    }, "delete"));
  }

}

/* harmony default export */ var house_DeleteParentHouse = (DeleteParentHouse_DeleteParentHouse);
// CONCATENATED MODULE: ./components/landlord/house/create/LeaseInfo.js
var LeaseInfo_jsx = external_react_default.a.createElement;

function LeaseInfo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const CREATE_LEASE_INFO_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_LEASE_INFO_MUTATION(
    $lease_name: String!
    $admin_fee: Int!
    $brokerage_fee: Int
    $security_deposit: Int
    $houseId: ID!
  ) {
    createLeaseInfo(
      lease_name: $lease_name
      admin_fee: $admin_fee
      brokerage_fee: $brokerage_fee
      security_deposit: $security_deposit
      houseId: $houseId
    ) {
      id
      lease_name
      admin_fee
      security_deposit
      brokerage_fee
      houseId {
        id
        house_heading
      }
    }
  }
`;

const LeaseInfo_styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: 120
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
});

class LeaseInfo_Lease extends external_react_default.a.Component {
  render() {
    const {
      classes,
      leases,
      create,
      showForm
    } = this.props;
    return LeaseInfo_jsx(styledComponents["d" /* Container */], {
      column: true
    }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      customStyles: {
        padding: 10
      }
    }, LeaseInfo_jsx(core_["Paper"], {
      component: "form",
      className: classes.root,
      elevation: 0
    }, LeaseInfo_jsx(core_["InputBase"], {
      className: classes.input,
      placeholder: "Search leases" // inputProps={{ "aria-label": "search google maps" }}

    }), LeaseInfo_jsx(core_["Divider"], {
      className: classes.divider,
      orientation: "vertical"
    }), LeaseInfo_jsx(core_["IconButton"], {
      type: "submit",
      className: classes.iconButton,
      "aria-label": "search"
    }, LeaseInfo_jsx(Search_default.a, null))), LeaseInfo_jsx(styledComponents["f" /* FlatButton */], {
      onClick: () => {
        create();
      }
    }, "New Lease")), LeaseInfo_jsx(styledComponents["d" /* Container */], {
      column: true
    }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
      column: true,
      customStyles: {
        width: "100%",
        borderRadius: 2,
        border: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`
      }
    }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      customStyles: {
        padding: 10
      }
    }, LeaseInfo_jsx("span", null, "House"), LeaseInfo_jsx("span", null, "Admin fee"), LeaseInfo_jsx("span", null, "Brokerage fee"), LeaseInfo_jsx("span", null, "Security fee"), LeaseInfo_jsx("span", null, "action")), leases.map(lease => {
      return LeaseInfo_jsx(styledComponents["d" /* Container */], {
        key: lease.id,
        row: true,
        space: "space-between",
        customStyles: {
          padding: 10,
          cursor: "pointer",
          borderTop: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`,
          "&:hover": {
            backgroundColor: ` ${Object(styles_["fade"])("#FEFEFF", 1)}`
          }
        }
      }, LeaseInfo_jsx("span", null, lease.lease_name), LeaseInfo_jsx("span", null, lease.admin_fee), LeaseInfo_jsx("span", null, lease.brokerage_fee), LeaseInfo_jsx("span", null, lease.security_deposit), LeaseInfo_jsx(styledComponents["d" /* Container */], {
        row: true,
        right: true,
        center: true
      }, LeaseInfo_jsx(house_DeleteParentHouse, {
        id: lease.id
      })));
    }), LeaseInfo_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      customStyles: {
        padding: 10,
        borderTop: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`
      },
      middle: true
    }, LeaseInfo_jsx(core_["Typography"], null, "showing " + leases.length + " result(s)")))));
  }

}

const LeaseList = Object(styles_["withStyles"])({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200
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
  }
})(LeaseInfo_Lease);

class LeaseInfo_LeaseInfo extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    LeaseInfo_defineProperty(this, "state", {
      lease_name: "",
      admin_fee: parseInt(0),
      brokerage_fee: parseInt(0),
      security_deposit: parseInt(0),
      houseId: null,
      showForm: false
    });

    LeaseInfo_defineProperty(this, "createForm", () => {
      this.setState({
        showForm: true
      });
    });

    LeaseInfo_defineProperty(this, "closeCreateForm", () => {
      this.setState({
        showForm: false
      });
    });

    LeaseInfo_defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    LeaseInfo_defineProperty(this, "CreateFormWrapper", () => {
      const {
        lease_name,
        admin_fee,
        brokerage_fee,
        security_deposit,
        houseId,
        showForm
      } = this.state;
      const {
        classes
      } = this.props;
      return LeaseInfo_jsx(core_["Fade"], {
        in: showForm
      }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        customStyles: {
          zIndex: 1305,
          paddingTop: 64
        }
      }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        space: "space-between",
        customStyles: {
          position: "absolute",
          top: 0,
          width: "100%",
          paddingLeft: 10,
          paddingRight: 15,
          height: 64,
          borderBottom: `0.5px solid ${Object(styles_["fade"])("#393939", 0.2)}`
        }
      }, LeaseInfo_jsx("div", null), LeaseInfo_jsx(core_["Typography"], {
        variant: "button",
        style: {
          fontSize: 13,
          fontFamily: 400
        }
      }, "Create Lease"), LeaseInfo_jsx("span", {
        onClick: this.closeCreateForm,
        style: {
          fontSize: 30,
          fontWeight: 200,
          cursor: "pointer"
        }
      }, "\xD7")), LeaseInfo_jsx(queryComponents_Houses, null, ({
        data,
        loading,
        error
      }) => {
        if (data) {
          const houses = data.getUserHouses;
          return LeaseInfo_jsx(styledComponents["d" /* Container */], {
            flex: 1,
            column: true
          }, LeaseInfo_jsx(external_react_apollo_["Mutation"], {
            mutation: CREATE_LEASE_INFO_MUTATION,
            refetchQueries: [{
              query: GET_USER_HOUSES_LEASES
            }],
            variables: {
              lease_name,
              admin_fee: parseInt(admin_fee),
              brokerage_fee: parseInt(brokerage_fee),
              security_deposit: parseInt(security_deposit),
              houseId
            }
          }, (createLeaseInfo, {
            loading,
            error
          }) => {
            return LeaseInfo_jsx(styledComponents["d" /* Container */], {
              flex: 1,
              color: "inherit",
              role: "presentation"
            }, LeaseInfo_jsx("form", {
              method: "post",
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flex: 1
              },
              onSubmit: async e => {
                e.preventDefault();
                await createLeaseInfo().then(res => {
                  this.closeCreateForm();
                });
                this.setState({
                  lease_name: "",
                  admin_fee: "",
                  brokerage_fee: "",
                  security_deposit: "",
                  houseId: null
                });
              }
            }, error && error.graphQLErrors.map(({
              message
            }, i) => LeaseInfo_jsx("p", {
              key: i,
              style: {
                color: "red"
              }
            }, message)), LeaseInfo_jsx(styledComponents["d" /* Container */], {
              column: true,
              middle: true
            }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
              middle: true,
              row: true,
              center: true,
              customStyles: {
                paddingTop: 15,
                marginTop: 30
              }
            }, LeaseInfo_jsx("span", null, " Select House:"), LeaseInfo_jsx(core_["FormControl"], {
              size: "small",
              variant: "outlined",
              className: classes.formControl
            }, LeaseInfo_jsx(core_["Select"], {
              native: true,
              size: "normal",
              value: houseId,
              style: {
                marginLeft: 15
              },
              onChange: e => {
                this.setState({
                  houseId: e.target.value
                });
              },
              inputProps: {
                name: "house",
                id: "outlined-lease-house-id"
              }
            }, LeaseInfo_jsx("option", null, "choose house"), houses.map(house => LeaseInfo_jsx("option", {
              key: house.id,
              value: house.id
            }, house.house_heading))))), LeaseInfo_jsx(Slide_default.a, {
              bottom: true,
              when: houseId !== null
            }, LeaseInfo_jsx(styledComponents["d" /* Container */], {
              column: true,
              middle: true,
              center: true
            }, LeaseInfo_jsx(styledComponents["i" /* Input */], {
              type: "text",
              name: "lease",
              label: "lease name",
              value: lease_name,
              style: {
                width: "50%",
                marginTop: 40,
                marginBottom: 20
              },
              onChange: e => {
                this.setState({
                  lease_name: e.target.value
                });
              }
            }), LeaseInfo_jsx(styledComponents["i" /* Input */], {
              type: "number",
              name: "admin",
              label: "admin fee",
              value: admin_fee,
              style: {
                width: "50%",
                marginBottom: 20
              },
              onChange: e => {
                this.setState({
                  admin_fee: e.target.value
                });
              }
            }), LeaseInfo_jsx(styledComponents["i" /* Input */], {
              type: "number",
              name: "brokerage",
              label: "brokerage fee",
              value: brokerage_fee,
              style: {
                width: "50%",
                marginBottom: 20
              },
              onChange: e => {
                this.setState({
                  brokerage_fee: e.target.value
                });
              }
            }), LeaseInfo_jsx(styledComponents["i" /* Input */], {
              type: "number",
              name: "security",
              label: "security fee",
              value: security_deposit,
              style: {
                width: "50%",
                marginBottom: 20
              },
              onChange: e => {
                this.setState({
                  security_deposit: e.target.value
                });
              }
            })))), LeaseInfo_jsx(styledComponents["d" /* Container */], {
              right: true,
              center: true,
              row: true,
              flex: 1,
              space: "space-between",
              customStyles: {
                position: "absolute",
                bottom: 0,
                marginTop: 15,
                padding: 10,
                borderTop: `0.5px solid ${Object(styles_["fade"])("#393939", 0.2)}`,
                width: "100%"
              }
            }, LeaseInfo_jsx(styledComponents["f" /* FlatButton */], {
              type: "submit"
            }, "\"Save\""))));
          }));
        }

        return null;
      })));
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      showForm
    } = this.state;
    return LeaseInfo_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, !showForm && LeaseInfo_jsx(queryComponents_Leases, null, ({
      data,
      loading
    }) => {
      if (data) {
        const leases = data.getLeases;

        if (leases.length !== 0) {
          return LeaseInfo_jsx(LeaseList, {
            leases: leases,
            create: this.createForm,
            showForm: showForm
          });
        }

        if (leases.length === 0) {
          return LeaseInfo_jsx(styledComponents["d" /* Container */], {
            flex: 1,
            column: true,
            middle: true,
            center: true
          }, LeaseInfo_jsx(NoteAdd_default.a, {
            style: {
              fontSize: 60,
              color: "gray"
            }
          }), LeaseInfo_jsx(core_["Typography"], {
            variant: "button",
            style: {
              fontSize: 18,
              color: "black",
              fontWeight: 600,
              marginTop: 15
            }
          }, "Create Lease Info"), LeaseInfo_jsx(core_["Typography"], {
            style: {
              fontSize: 13,
              fontWeight: 200,
              marginTop: 10
            }
          }, "Make sure to create house first"), LeaseInfo_jsx(core_["Typography"], {
            style: {
              fontSize: 13,
              fontWeight: 200,
              marginBottom: 15
            }
          }, "in order to attach lease information"), LeaseInfo_jsx(styledComponents["f" /* FlatButton */], {
            onClick: this.createForm
          }, "New"));
        }
      }

      if (loading) {
        return LeaseInfo_jsx(styledComponents["d" /* Container */], {
          flex: 1,
          middle: true,
          center: true
        }, LeaseInfo_jsx("img", {
          src: _126_default.a,
          style: {
            width: 25,
            height: 25
          }
        }));
      }

      return null;
    }), this.CreateFormWrapper());
  }

}

/* harmony default export */ var create_LeaseInfo = (Object(styles_["withStyles"])(LeaseInfo_styles)(LeaseInfo_LeaseInfo));
// CONCATENATED MODULE: ./components/landlord/house/create/CreateParentHouse.js
var CreateParentHouse_jsx = external_react_default.a.createElement;

function CreateParentHouse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const CREATE_PARENT_HOUSE_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_PARENT_HOUSE_MUTATION(
    $building_name: String!
    $address: String
    $image: String
  ) {
    createParentHouse(
      building_name: $building_name
      address: $address
      image: $image
    ) {
      id
      building_name
      address
      image
    }
  }
`;

const CreateParentHouse_styles = theme => ({
  list: {
    width: "100%",
    alignItems: "center"
  },
  formControl: {
    marginTop: theme.spacing(2),
    maxWidth: 120
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(styles_["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(styles_["fade"])(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  }
});

class CreateParentHouse_Buildings extends external_react_default.a.Component {
  render() {
    const {
      classes,
      buildings,
      create,
      showForm
    } = this.props;
    return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      column: true,
      flex: 1
    }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      customStyles: {
        padding: 10
      }
    }, CreateParentHouse_jsx(core_["Paper"], {
      component: "form",
      className: classes.root,
      elevation: 0
    }, CreateParentHouse_jsx(core_["InputBase"], {
      className: classes.input,
      placeholder: "Search buildings" // inputProps={{ "aria-label": "search google maps" }}

    }), CreateParentHouse_jsx(core_["Divider"], {
      className: classes.divider,
      orientation: "vertical"
    }), CreateParentHouse_jsx(core_["IconButton"], {
      type: "submit",
      className: classes.iconButton,
      "aria-label": "search"
    }, CreateParentHouse_jsx(Search_default.a, null))), CreateParentHouse_jsx(styledComponents["f" /* FlatButton */], {
      onClick: () => {
        create();
      }
    }, "New Building")), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      column: true
    }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      column: true,
      customStyles: {
        width: "100%",
        borderRadius: 2,
        border: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`
      }
    }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      customStyles: {
        padding: 10
      }
    }, CreateParentHouse_jsx("span", null, "Name"), CreateParentHouse_jsx("span", null, "address"), CreateParentHouse_jsx("span", null, "action")), buildings.map(building => {
      return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
        key: building.id,
        row: true // color="#FEFEFF"
        ,
        space: "space-between",
        customStyles: {
          padding: 10,
          cursor: "pointer",
          borderTop: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`,
          "&:hover": {
            backgroundColor: ` ${Object(styles_["fade"])("#FEFEFF", 1)}`
          }
        }
      }, CreateParentHouse_jsx("span", null, building.building_name), CreateParentHouse_jsx("span", null, building.address), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        right: true,
        center: true
      }, CreateParentHouse_jsx(house_DeleteParentHouse, {
        id: building.id
      })));
    }), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      customStyles: {
        padding: 10,
        borderTop: `1px solid ${Object(styles_["fade"])("#393939", 0.1)}`
      },
      middle: true
    }, CreateParentHouse_jsx(core_["Typography"], null, "showing " + buildings.length + " result(s)")))));
  }

}

const BuildingsList = Object(styles_["withStyles"])({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200
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
  }
})(CreateParentHouse_Buildings);

class CreateParentHouse_CreateParentHouse extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    CreateParentHouse_defineProperty(this, "state", {
      building_name: "",
      address: "",
      image: null,
      showForm: false
    });

    CreateParentHouse_defineProperty(this, "createForm", () => {
      this.setState({
        showForm: true
      });
    });

    CreateParentHouse_defineProperty(this, "closeCreateForm", () => {
      this.setState({
        showForm: false
      });
    });

    CreateParentHouse_defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    CreateParentHouse_defineProperty(this, "uploadImage", async e => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "house_assist");
      const res = await fetch("https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/", {
        method: "POST",
        body: data
      });
      const file = await res.json();

      if (file) {
        this.setState({
          image: file.secure_url
        });
      }
    });

    CreateParentHouse_defineProperty(this, "CreateFormWrapper", () => {
      const {
        building_name,
        address,
        image,
        showForm
      } = this.state;
      const {
        classes
      } = this.props;
      return CreateParentHouse_jsx(core_["Fade"], {
        in: showForm
      }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        customStyles: {
          zIndex: 1305,
          paddingTop: 64
        }
      }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        center: true,
        space: "space-between",
        customStyles: {
          position: "absolute",
          top: 0,
          width: "100%",
          paddingLeft: 10,
          paddingRight: 15,
          height: 64,
          border: `0.5px solid ${Object(styles_["fade"])("#393939", 0.2)}`
        }
      }, CreateParentHouse_jsx("div", null), CreateParentHouse_jsx(core_["Typography"], {
        variant: "button",
        style: {
          fontSize: 13,
          fontFamily: 400
        }
      }, "Create Building"), CreateParentHouse_jsx("span", {
        onClick: this.closeCreateForm,
        style: {
          fontSize: 30,
          fontWeight: 200,
          cursor: "pointer"
        }
      }, "\xD7")), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true
      }, CreateParentHouse_jsx(external_react_apollo_["Mutation"], {
        mutation: CREATE_PARENT_HOUSE_MUTATION,
        refetchQueries: [{
          query: ParentHouses["a" /* GET_USER_PARENT_HOUSES */]
        }],
        variables: this.state
      }, (createParentHouse, {
        loading,
        error
      }) => {
        return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
          flex: 1,
          color: "inherit",
          role: "presentation"
        }, CreateParentHouse_jsx("form", {
          method: "post",
          style: {
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            flex: 1
          },
          onSubmit: async e => {
            e.preventDefault();
            await createParentHouse().then(res => {
              this.closeCreateForm();
            });
            this.setState({
              building_name: "",
              address: "",
              image: null // showForm: false

            });
          }
        }, error && error.graphQLErrors.map(({
          message
        }, i) => CreateParentHouse_jsx("p", {
          key: i,
          style: {
            color: "red"
          }
        }, message)), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
          column: true,
          center: true
        }, CreateParentHouse_jsx(styledComponents["i" /* Input */], {
          type: "text",
          name: "building",
          label: "building name",
          value: building_name,
          style: {
            width: "50%",
            marginTop: 40,
            marginBottom: 20
          },
          onChange: e => {
            this.setState({
              building_name: e.target.value
            });
          }
        }), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
          row: true
        }, CreateParentHouse_jsx(styledComponents["i" /* Input */], {
          accept: "image/*",
          id: "text-button-file",
          multiple: true,
          type: "file" // value={image}
          ,
          onChange: this.uploadImage
        }), image !== null && CreateParentHouse_jsx("img", {
          src: image,
          style: {
            width: 40,
            height: 35,
            objectFit: "fit"
          }
        }))), CreateParentHouse_jsx(styledComponents["d" /* Container */], {
          right: true,
          center: true,
          row: true,
          flex: 1,
          space: "space-between",
          customStyles: {
            position: "absolute",
            bottom: 0,
            marginTop: 15,
            padding: 10,
            borderTop: `0.5px solid ${Object(styles_["fade"])("#393939", 0.2)}`,
            width: "100%"
          }
        }, CreateParentHouse_jsx(styledComponents["f" /* FlatButton */], {
          type: "submit"
        }, loading ? CreateParentHouse_jsx("img", {
          src: _126_default.a,
          style: {
            width: 20,
            height: 20
          }
        }) : "Save"))));
      }))));
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      showForm
    } = this.state;
    return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, !showForm && CreateParentHouse_jsx(ParentHouses["b" /* default */], null, ({
      data,
      loading
    }) => {
      if (data) {
        const buildings = data.getUserParentHouses;

        if (buildings.length !== 0) {
          return CreateParentHouse_jsx(BuildingsList, {
            buildings: buildings,
            create: this.createForm,
            showForm: showForm
          });
        }

        if (buildings.length === 0) {
          return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
            flex: 1
          }, CreateParentHouse_jsx(styledComponents["d" /* Container */], {
            flex: 1,
            column: true,
            middle: true,
            center: true,
            customStyles: {
              paddingTop: 64
            }
          }, CreateParentHouse_jsx(Apartment_default.a, {
            style: {
              fontSize: 60,
              color: "gray"
            }
          }), CreateParentHouse_jsx(core_["Typography"], {
            variant: "button",
            style: {
              fontSize: 18,
              color: "black",
              fontWeight: 600,
              marginTop: 15
            }
          }, "Add New Building"), CreateParentHouse_jsx(core_["Typography"], {
            style: {
              fontSize: 13,
              fontWeight: 200,
              marginTop: 10
            }
          }, "You have more than one house with in a"), CreateParentHouse_jsx(core_["Typography"], {
            style: {
              fontSize: 13,
              fontWeight: 200,
              marginBottom: 15
            }
          }, "single building, add them in to a building"), CreateParentHouse_jsx(styledComponents["f" /* FlatButton */], {
            onClick: this.createForm
          }, "Add Building")));
        }
      }

      if (loading) {
        return CreateParentHouse_jsx(styledComponents["d" /* Container */], {
          flex: 1,
          middle: true,
          center: true
        }, CreateParentHouse_jsx("img", {
          src: _126_default.a,
          style: {
            width: 25,
            height: 25
          }
        }));
      }

      return null;
    }), this.CreateFormWrapper());
  }

}

/* harmony default export */ var create_CreateParentHouse = (Object(styles_["withStyles"])(CreateParentHouse_styles)(CreateParentHouse_CreateParentHouse));
// CONCATENATED MODULE: ./components/landlord/house/create/index.js
var create_jsx = external_react_default.a.createElement;

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // import BackIcon from "@material-ui/icons/NoteAdd";
// import NextIcon from "@material-ui/icons/NoteAdd";









const create_styles = theme => ({
  list: {
    width: 800
  },
  root: {
    width: "100%"
  },
  button: {
    margin: theme.spacing(1),
    padding: 0
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
});

const CustomStepConnector = Object(styles_["withStyles"])({
  alternativeLabel: {
    top: 22
  },
  active: {
    "& $line": {
      backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  completed: {
    "& $line": {
      backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1
  }
})(StepConnector_default.a);
const useCustomStepIconStyles = Object(styles_["makeStyles"])({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
  },
  completed: {
    backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
  }
});

function CustomStepIcon(props) {
  const classes = useCustomStepIconStyles();
  const {
    active,
    completed
  } = props;
  const icons = {
    1: create_jsx(House_default.a, null),
    2: create_jsx(Apartment_default.a, null),
    3: create_jsx(NoteAdd_default.a, null),
    4: create_jsx(AddPhotoAlternate_default.a, null)
  };
  return create_jsx("div", {
    className: external_clsx_default()(classes.root, {
      [classes.active]: active,
      [classes.completed]: completed
    })
  }, icons[String(props.icon)]);
}

class create_Index extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    create_defineProperty(this, "state", {
      activeStep: 0,
      completed: {}
    });

    create_defineProperty(this, "totalSteps", () => {
      const steps = this.getSteps();
      return steps.length;
    });

    create_defineProperty(this, "completedSteps", () => {
      return Object.keys(this.state.completed).length;
    });

    create_defineProperty(this, "isLastStep", () => {
      return this.state.activeStep === this.totalSteps() - 1;
    });

    create_defineProperty(this, "allStepsCompleted", () => {
      return this.completedSteps() === this.totalSteps();
    });

    create_defineProperty(this, "handleNext", () => {
      const steps = this.getSteps();
      const newActiveStep = this.isLastStep() && !this.allStepsCompleted() ? // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      steps.findIndex((step, i) => !(i in this.state.completed)) : this.state.activeStep + 1;
      this.setState({
        activeStep: newActiveStep
      });
    });

    create_defineProperty(this, "handleBack", () => {
      this.setState({
        activeStep: this.state.activeStep - 1
      });
    });

    create_defineProperty(this, "handleStep", step => () => {
      this.setState({
        activeStep: step
      });
    });

    create_defineProperty(this, "handleComplete", () => {
      const newCompleted = this.state.completed;
      newCompleted[this.state.activeStep] = true;
      this.setState({
        completed: newCompleted
      });
      this.handleNext();
    });

    create_defineProperty(this, "handleReset", () => {
      this.setState({
        activeStep: 0,
        completed: {}
      });
    });

    create_defineProperty(this, "getSteps", () => {
      return [" CREATE HOUSE", "BUILDINGS", "LEASE INFORMATION", "PHOTOS"];
    });

    create_defineProperty(this, "getStepContent", step => {
      switch (step) {
        case 0:
          return create_jsx(create_CreateHouse, {
            onComplete: this.handleComplete
          });
        // return "rene la";

        case 1:
          return create_jsx(create_CreateParentHouse, null);

        case 2:
          return create_jsx(create_LeaseInfo, null);

        case 3:
          return create_jsx(create_AddHouseImage, null);

        default:
          return;
      }
    });
  }

  render() {
    const {
      activeStep,
      completed
    } = this.state;
    const {
      classes,
      onClose
    } = this.props;
    const steps = this.getSteps();
    return create_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      customStyles: {
        width: 480,
        height: "100vh",
        position: "relative"
      }
    }, create_jsx(core_["AppBar"], {
      elevation: 0,
      position: "sticky",
      style: {
        position: "sticky",
        backgroundColor: "transparent"
      }
    }, create_jsx(core_["Stepper"], {
      style: {
        height: 64
      },
      nonLinear: true,
      activeStep: activeStep,
      connector: create_jsx(CustomStepConnector, null)
    }, steps.map((label, index) => create_jsx(core_["Step"], {
      key: label
    }, create_jsx(core_["StepButton"], {
      onClick: this.handleStep(index),
      completed: completed[index]
    }, create_jsx(core_["StepLabel"], {
      StepIconComponent: CustomStepIcon
    }, label)))), create_jsx(core_["StepLabel"], {
      onClick: onClose,
      icon: create_jsx("p", {
        style: {
          fontSize: 30,
          fontWeight: 200,
          marginLeft: 15,
          color: "inherit",
          cursor: "pointer"
        }
      }, "\xD7")
    }))), create_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, this.getStepContent(activeStep)));
  }

}

/* harmony default export */ var house_create = (Object(styles_["withStyles"])(create_styles)(create_Index));
// EXTERNAL MODULE: ./public/static/sandy.jpeg
var sandy = __webpack_require__("tdHr");
var sandy_default = /*#__PURE__*/__webpack_require__.n(sandy);

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// CONCATENATED MODULE: ./components/landlord/house/DeleteHouse.js
var DeleteHouse_jsx = external_react_default.a.createElement;






const DELETE_HOUSE = external_graphql_tag_default.a`
  mutation DELETE_HOUSE($id: ID!) {
    deleteHouse(id: $id) {
      id
      house_heading
    }
  }
`;

class DeleteHouse_DeleteHouse extends external_react_default.a.Component {
  // update = (cache, payload) => {
  //   // manually update the cache on the client, so it matches the server
  //   // 1. Read the cache for the items we want
  //   const data = cache.readQuery({ query: GET_USER_HOUSES });
  //   // console.log(data, payload);
  //   // 2. Filter the deleted itemout of the page
  //   // data.items = data.items.filter(
  //   //   item => item.id !== payload.data.deleteItem.id
  //   // );
  //   // 3. Put the items back!
  //   cache.writeQuery({ query: GET_USER_HOUSES, data });
  // };
  render() {
    return DeleteHouse_jsx(external_react_apollo_["Mutation"], {
      mutation: DELETE_HOUSE,
      variables: {
        id: this.props.id
      } // update={this.update}
      ,
      refetchQueries: [{
        query: GET_USER_HOUSES
      }]
    }, (deleteHouse, {
      error
    }) => DeleteHouse_jsx(core_["IconButton"], {
      style: {
        padding: 5
      },
      onClick: () => {
        if (confirm("Are you sure you want to delete this house?")) {
          deleteHouse().then(res => {
            this.props.onClose();
          }).catch(err => {
            alert(err.message);
          });
        }
      }
    }, DeleteHouse_jsx(Delete_default.a, {
      style: {
        fontSize: 17
      }
    })));
  }

}

/* harmony default export */ var house_DeleteHouse = (DeleteHouse_DeleteHouse);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardBackspace"
var KeyboardBackspace_ = __webpack_require__("cXpd");
var KeyboardBackspace_default = /*#__PURE__*/__webpack_require__.n(KeyboardBackspace_);

// CONCATENATED MODULE: ./components/landlord/house/UpdateHouse.js
var UpdateHouse_jsx = external_react_default.a.createElement;

function UpdateHouse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import styled, { css } from "styled-components";






 // import Sectors from "../../queryComponents/Sectors";





const UPDATE_HOUSE_MUTATION = external_graphql_tag_default.a`
  mutation UPDATE_HOUSE_MUTATION(
    $id: ID!
    $house_heading: String
    $house_description: String
    $house_no: String
    $no_bathrooms: Int
    $no_bedrooms: Int
    $no_annex: Int
    $dinning_room: Int
    $isActive: Boolean
    $has_in_kitchen: Boolean
    $has_balcony: Boolean
    $has_garden: Boolean
    $has_hotwater: Boolean
    $has_carparking: Boolean
    $house_type: ID
    # $parent_houseId: ID
    $countryId: ID
    $provinceId: ID
    $districtId: ID # $sectorId: ID
  ) {
    updateHouse(
      id: $id
      house_heading: $house_heading
      house_description: $house_description
      house_no: $house_no
      no_bathrooms: $no_bathrooms
      no_bedrooms: $no_bedrooms
      no_annex: $no_annex
      dinning_room: $dinning_room
      isActive: $isActive
      has_in_kitchen: $has_in_kitchen
      has_balcony: $has_balcony
      has_garden: $has_garden
      has_hotwater: $has_hotwater
      has_carparking: $has_carparking
      house_type: $house_type
      # parent_houseId: $parent_houseId
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId # sectorId: $sectorId
    ) {
      id
      house_heading
      house_description
      house_no
      no_annex
      no_bathrooms
      no_bedrooms
      dinning_room
      isActive
      has_in_kitchen
      has_balcony
      has_garden
      has_hotwater
      has_carparking
      house_type {
        id
      }
      # parent_houseId {
      #   id
      # }
      countryId {
        id
        name
      }
      provinceId {
        id
        name
      }
      districtId {
        id
        name
      }
      # sectorId {
      #   id
      #   name
      # }
    }
  }
`;
const UpdateHouse_styles = {
  list: {
    width: 340
  },
  label: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    marginBottom: 10,
    borderRadius: 8,
    padding: 5
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
    fontSize: 12,
    "&:focus": {
      border: "1px solid #4C3AF7",
      backgroundColor: "#FEFEFF"
    }
  }
};

class UpdateHouse_UpdateHouse extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    UpdateHouse_defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    this.state = {
      house_heading: "",
      house_description: "",
      house_no: "",
      no_annex: "",
      no_bathrooms: "",
      no_bedrooms: "",
      dinning_room: "",
      isActive: false,
      has_in_kitchen: false,
      has_balcony: false,
      has_garden: false,
      has_carparking: false,
      house_type: "",
      parent_houseId: "",
      countryId: "",
      provinceId: "",
      districtId: "",
      sectorId: ""
    };
  }

  render() {
    const {
      house_heading,
      house_description,
      house_no,
      no_annex,
      no_bathrooms,
      no_bedrooms,
      dinning_room,
      isActive,
      has_in_kitchen,
      has_balcony,
      has_garden,
      has_hotwater,
      has_carparking,
      house_type,
      parent_houseId,
      countryId,
      provinceId,
      districtId,
      sectorId
    } = this.state;
    const {
      classes,
      onClose,
      house
    } = this.props;
    let type = house.house_type;
    let c_name = house.countryId;
    let p_name = house.provinceId;
    let d_name = house.districtId;
    return UpdateHouse_jsx(external_react_apollo_["Mutation"], {
      mutation: UPDATE_HOUSE_MUTATION,
      refetchQueries: [{
        query: GET_USER_HOUSES
      }],
      variables: {
        id: this.props.house.id,
        house_heading,
        house_description,
        house_no,
        no_bathrooms: parseInt(no_bathrooms),
        no_bedrooms: parseInt(no_bedrooms),
        no_annex: parseInt(no_annex),
        dinning_room: parseInt(dinning_room),
        isActive,
        has_in_kitchen,
        has_balcony,
        has_garden,
        has_hotwater,
        has_carparking,
        house_type,
        // parent_houseId,
        countryId,
        provinceId,
        districtId // sectorId

      }
    }, (updateHouse, {
      loading,
      error
    }) => {
      return UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        color: "inherit",
        role: "presentation",
        customStyles: {
          width: 350
        }
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "white",
        customStyles: {
          borderBottom: `0.8px solid ${Object(styles_["fade"])("#393939", 0.1)}`,
          padding: 7,
          position: `-webkit-sticky`,
          position: "sticky",
          top: 0
        }
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        color: "transparent",
        row: true,
        center: true,
        left: true
      }, UpdateHouse_jsx(core_["IconButton"], {
        style: {
          padding: 10
        },
        onClick: onClose
      }, UpdateHouse_jsx(KeyboardBackspace_default.a, {
        style: {
          fontSize: 20
        }
      }))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        color: "transparent",
        row: true,
        middle: true,
        center: true
      }, UpdateHouse_jsx(styledComponents["p" /* Text */], {
        customStyles: {
          fontWeight: "600"
        }
      }, house.house_heading)), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        color: "transparent",
        row: true,
        center: true,
        right: true
      })), UpdateHouse_jsx("form", {
        method: "post",
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1
        },
        onSubmit: async e => {
          e.preventDefault();
          await updateHouse(); // onClose();

          this.setState({
            house_heading: "",
            house_description: "",
            house_no: "",
            no_annex: 0,
            no_bathrooms: 0,
            no_bedrooms: 0,
            dinning_room: 0,
            isActive: false,
            has_in_kitchen: false,
            has_balcony: false,
            has_garden: false,
            has_hotwater: false,
            has_carparking: false,
            house_type: "",
            parent_houseId: "",
            countryId: "",
            provinceId: "",
            districtId: "",
            sectorId: ""
          });
        }
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        column: true,
        color: "transparent",
        customStyles: {
          padding: 15
        }
      }, UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: "House heading",
        type: "text",
        className: classes.inputStyle,
        defaultValue: house.house_heading,
        onChange: e => {
          this.setState({
            house_heading: e.target.value
          });
        }
      }), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          marginBottom: 10
        },
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["b" /* CaptionText */], {
        customStyles: {
          marginBottom: 5
        }
      }, " Description"), UpdateHouse_jsx("textarea", {
        type: "text",
        className: classes.inputStyle,
        defaultValue: house.house_description,
        onChange: e => {
          this.setState({
            house_description: e.target.value
          });
        }
      })), UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: "House no.",
        type: "text",
        size: "small",
        className: classes.inputStyle,
        defaultValue: house.house_no,
        onChange: e => {
          this.setState({
            house_heading: e.target.value
          });
        }
      }), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          marginBottom: 10
        },
        color: "transparent"
      }, UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "House type"), UpdateHouse_jsx("select", {
        className: classes.inputStyle,
        value: house_type,
        onChange: e => {
          this.setState({
            house_type: e.target.value
          });
        }
      }, UpdateHouse_jsx("option", {
        style: {
          padding: 5
        }
      }, type && type.house_type), UpdateHouse_jsx(HouseTypes["b" /* default */], null, ({
        data
      }) => {
        if (data) {
          return UpdateHouse_jsx(external_react_default.a.Fragment, null, data.houseTypes.map(type => UpdateHouse_jsx("option", {
            key: type.id,
            value: type.id
          }, type.house_type)));
        }

        return null;
      }))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: " No. bedrooms",
        type: "number",
        name: "no_bedrooms",
        defaultValue: house.no_bedrooms,
        className: classes.inputStyle,
        onChange: e => {
          this.setState({
            no_bedrooms: e.target.value
          });
        }
      }), UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: " No. bathrooms",
        type: "number",
        name: "no_bathrooms",
        defaultValue: house.no_bathrooms,
        className: classes.inputStyle,
        onChange: e => {
          this.setState({
            no_bathrooms: e.target.value
          });
        }
      })), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: " No. Annex",
        type: "number",
        name: "no_annex",
        defaultValue: house.no_annex,
        className: classes.inputStyle,
        onChange: e => {
          this.setState({
            no_annex: e.target.value
          });
        }
      }), UpdateHouse_jsx(styledComponents["i" /* Input */], {
        label: " No. dinning rooms",
        type: "number",
        name: "dinning_room",
        defaultValue: house.dinning_room,
        className: classes.inputStyle,
        onChange: e => {
          this.setState({
            dinning_room: e.target.value
          });
        }
      })), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10,
          marginRight: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox" // checked={has_garden}
        ,
        defaultChecked: house.has_garden,
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        onChange: e => {
          this.setState({
            has_garden: !has_garden
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Has garden")), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox",
        defaultChecked: house.has_hotwater,
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        onChange: e => {
          this.setState({
            has_hotwater: !has_hotwater
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "has hot water"))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10,
          marginRight: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox",
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        defaultChecked: house.has_carparking,
        onChange: e => {
          this.setState({
            has_carparking: !has_carparking
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Has carparking")), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox",
        defaultChecked: house.has_balcony,
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        onChange: e => {
          this.setState({
            has_balcony: !has_balcony
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "has balcony"))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent"
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10,
          marginRight: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox",
        defaultChecked: house.has_in_kitchen,
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        onChange: e => {
          this.setState({
            has_in_kitchen: !has_in_kitchen
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Has in kitchen")), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        customStyles: {
          marginBottom: 10
        }
      }, UpdateHouse_jsx("input", {
        type: "checkbox",
        style: {
          marginLeft: 10,
          marginRight: 5
        },
        defaultChecked: house.isActive,
        onChange: e => {
          this.setState({
            isActive: !isActive
          });
        }
      }), UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Has tenant"))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        row: true,
        color: "transparent",
        space: "space-between"
      }, UpdateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          marginBottom: 10
        },
        color: "transparent"
      }, UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Country"), UpdateHouse_jsx("select", {
        value: countryId,
        className: classes.inputStyle,
        onChange: e => {
          this.setState({
            countryId: e.target.value
          });
        }
      }, UpdateHouse_jsx("option", null, " ", c_name && c_name.name), UpdateHouse_jsx(Countries["b" /* default */], null, ({
        data
      }) => {
        if (data) {
          return UpdateHouse_jsx(external_react_default.a.Fragment, null, data.countries.map(country => UpdateHouse_jsx("option", {
            key: country.id,
            value: country.id
          }, country.name)));
        }

        return null;
      }))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          marginBottom: 10
        },
        color: "transparent"
      }, UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "Province"), UpdateHouse_jsx("select", {
        className: classes.inputStyle,
        value: provinceId,
        onChange: e => {
          this.setState({
            provinceId: e.target.value
          });
        }
      }, UpdateHouse_jsx("option", null, p_name && p_name.name), UpdateHouse_jsx(Provinces["b" /* default */], {
        id: countryId
      }, ({
        data
      }) => {
        if (data) {
          return UpdateHouse_jsx(external_react_default.a.Fragment, null, data.getProvincesByCountry.map(prov => UpdateHouse_jsx("option", {
            key: prov.id,
            value: prov.id
          }, prov.name)));
        }

        return null;
      }))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        column: true,
        customStyles: {
          marginBottom: 10
        },
        color: "transparent"
      }, UpdateHouse_jsx(core_["Typography"], {
        variant: "h6",
        noWrap: true
      }, "District"), UpdateHouse_jsx("select", {
        className: classes.inputStyle,
        value: districtId,
        onChange: e => {
          this.setState({
            districtId: e.target.value
          });
        }
      }, UpdateHouse_jsx("option", null, d_name && d_name.name), UpdateHouse_jsx(Districts["b" /* default */], {
        id: provinceId
      }, ({
        data
      }) => {
        if (data) {
          return UpdateHouse_jsx(external_react_default.a.Fragment, null, data.getDistrictsByProvince.map(dist => UpdateHouse_jsx("option", {
            key: dist.id,
            value: dist.id
          }, dist.name)), " ");
        }

        return null;
      }))))), UpdateHouse_jsx(styledComponents["d" /* Container */], {
        right: true,
        center: true,
        flex: 0,
        row: true,
        color: "white",
        space: "space-between",
        customStyles: {
          position: `-webkit-sticky`,
          position: "sticky",
          bottom: 0,
          marginTop: 15,
          padding: 10,
          borderTop: `0.8px solid ${Object(styles_["fade"])("#393939", 0.1)}`,
          width: "100%"
        }
      }, UpdateHouse_jsx(styledComponents["l" /* PrimaryButton */], {
        type: "submit"
      }, loading ? UpdateHouse_jsx("img", {
        src: _126_default.a,
        style: {
          width: 20,
          height: 20
        }
      }) : "Save Changes"))));
    });
  }

}

/* harmony default export */ var house_UpdateHouse = (Object(styles_["withStyles"])(UpdateHouse_styles)(UpdateHouse_UpdateHouse));
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableContainer"
var TableContainer_ = __webpack_require__("5id3");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TablePagination"
var TablePagination_ = __webpack_require__("bzUq");
var TablePagination_default = /*#__PURE__*/__webpack_require__.n(TablePagination_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// CONCATENATED MODULE: ./components/DataTable.js
var DataTable_jsx = external_react_default.a.createElement;










const columns = [{
  id: "name",
  label: "Name",
  minWidth: 170
}, {
  id: "code",
  label: "ISO\u00a0Code",
  minWidth: 100
}, {
  id: "population",
  label: "Population",
  minWidth: 170,
  align: "right",
  format: value => value.toLocaleString()
}, {
  id: "size",
  label: "Size\u00a0(km\u00b2)",
  minWidth: 170,
  align: "right",
  format: value => value.toLocaleString()
}, {
  id: "density",
  label: "Density",
  minWidth: 170,
  align: "right",
  format: value => value.toFixed(2)
}];

function createData(name, code, population, size) {
  const density = population / size;
  return {
    name,
    code,
    population,
    size,
    density
  };
}

const rows = [createData("India", "IN", 1324171354, 3287263), createData("China", "CN", 1403500365, 9596961), createData("Italy", "IT", 60483973, 301340), createData("United States", "US", 327167434, 9833520), createData("Canada", "CA", 37602103, 9984670), createData("Australia", "AU", 25475400, 7692024), createData("Germany", "DE", 83019200, 357578), createData("Ireland", "IE", 4857000, 70273), createData("Mexico", "MX", 126577691, 1972550), createData("Japan", "JP", 126317000, 377973), createData("France", "FR", 67022000, 640679), createData("United Kingdom", "GB", 67545757, 242495), createData("Russia", "RU", 146793744, 17098246), createData("Nigeria", "NG", 200962417, 923768), createData("Brazil", "BR", 210147125, 8515767)];
const useStyles = Object(styles_["makeStyles"])({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});
function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = external_react_default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default.a.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return DataTable_jsx(Paper_default.a, {
    className: classes.root,
    elevation: 0
  }, DataTable_jsx(TableContainer_default.a, {
    className: classes.container
  }, DataTable_jsx(Table_default.a, {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, DataTable_jsx(TableHead_default.a, null, DataTable_jsx(TableRow_default.a, null, columns.map(column => DataTable_jsx(TableCell_default.a, {
    key: column.id,
    align: column.align,
    style: {
      minWidth: column.minWidth
    }
  }, column.label)))), DataTable_jsx(TableBody_default.a, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    return DataTable_jsx(TableRow_default.a, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code
    }, columns.map(column => {
      const value = row[column.id];
      return DataTable_jsx(TableCell_default.a, {
        key: column.id,
        align: column.align
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), DataTable_jsx(TablePagination_default.a, {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}
// CONCATENATED MODULE: ./components/landlord/house/index.js
var house_jsx = external_react_default.a.createElement;






















const house_useStyles = Object(styles_["makeStyles"])(theme => ({
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
    marginBottom: theme.spacing(2) // padding: theme.spacing(0)
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
    height: "100%" // backgroundColor: "pink"

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
const CmdButton = external_styled_components_default()(styledComponents["c" /* CommandButton */]).withConfig({
  displayName: "house__CmdButton",
  componentId: "sc-13v145a-0"
})(["background-color:", ";min-width:50px;border-radius:2px;&:hover{background-color:", ";}"], ({
  theme,
  isSelected
}) => isSelected ? theme.lightGrey : "transparent", ({
  theme
}) => theme.btnHover);
const house_ActionBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "house__ActionBtn",
  componentId: "sc-13v145a-1"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-left:10px;padding-right:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);

const house_Index = props => {
  const classes = house_useStyles();
  const [open, setOpen] = external_react_default.a.useState(false);
  const [openSlide, setOpenSlide] = external_react_default.a.useState(true);
  const [house, setHouse] = external_react_default.a.useState({});
  const [layout, setLayout] = external_react_default.a.useState(0);

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
    const {
      countryId,
      provinceId,
      districtId,
      images
    } = house;
    const image = images[0];
    return house_jsx(link_default.a, {
      href: "house/[id]",
      as: "house/" + house.id
    }, house_jsx("a", {
      style: {
        textDecoration: "none"
      }
    }, house_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      column: true,
      depth: 64,
      className: classes.tileWrapper,
      color: "white"
    }, house_jsx(styledComponents["d" /* Container */], {
      middle: true,
      center: true,
      color: "transparent",
      customStyles: {
        position: "absolute",
        top: 3,
        right: 3
      }
    }, house.isActive && house_jsx(CheckCircleOutline_default.a, {
      style: {
        fontSize: 20,
        color: "green"
      }
    })), images.length === 0 && house_jsx(styledComponents["d" /* Container */], {
      flex: 0.6,
      middle: true,
      center: true,
      className: classes.imageWrapper,
      color: "transparent"
    }, house_jsx(core_["Avatar"], null, house.house_heading.charAt(0))), images.length !== 0 && house_jsx(styledComponents["d" /* Container */], {
      flex: 0.6,
      className: classes.imageWrapper,
      color: "transparent"
    }, house_jsx("img", {
      src: image.image,
      className: classes.imageStyle
    })), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.4,
      column: true,
      color: "transparent",
      customStyles: {
        paddingLeft: 5,
        paddingRight: 5
      }
    }, house_jsx(core_["Typography"], {
      variant: "h6",
      gutterBottom: true
    }, house.house_heading), house_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      flex: 0,
      color: "transparent"
    }, house_jsx(core_["Typography"], {
      variant: "body2",
      gutterBottom: true
    }, countryId.name + ", "), house_jsx(core_["Typography"], {
      variant: "body2",
      gutterBottom: true
    }, provinceId.name + ", "), house_jsx(core_["Typography"], {
      variant: "body2",
      gutterBottom: true
    }, districtId.name)), house_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      flex: 0,
      space: "space-between",
      color: "transparent"
    }, house_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      middle: true,
      flex: 1,
      color: "transparent"
    }, house_jsx(SingleBed_default.a, {
      style: {
        fontSize: 18
      }
    }), house_jsx("span", null, "4")), house_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      middle: true,
      flex: 1,
      color: "transparent"
    }, house_jsx(Bathtub_default.a, {
      style: {
        fontSize: 15
      }
    }), house_jsx("span", null, "4")), house_jsx(styledComponents["d" /* Container */], {
      row: true,
      middle: true,
      center: true,
      flex: 1,
      center: true,
      color: "transparent"
    }, house_jsx(core_["Button"], {
      color: "primary",
      onClick: () => onViewHouse(house)
    }, "Edit")))))));
  };

  const _houseCard = house => {
    const {
      countryId,
      provinceId,
      districtId,
      images
    } = house;
    const image = images[0];
    return house_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      depth: 64,
      column: true,
      color: "white",
      customStyles: {
        width: "100%",
        height: "100%",
        position: "relative"
      }
    }, images.length === 0 && house_jsx(styledComponents["d" /* Container */], {
      flex: 0.5,
      middle: true,
      center: true // className={classes.imageWrapper}
      ,
      color: "transparent"
    }, house_jsx(core_["Avatar"], null, house.house_heading.charAt(0))), images.length !== 0 && house_jsx(styledComponents["d" /* Container */], {
      flex: 0.5 // className={classes.imageWrapper}
      ,
      color: "transparent"
    }), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.35,
      column: true,
      customStyles: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5
      }
    }, house_jsx(styledComponents["d" /* Container */], {
      column: true,
      space: "space-around",
      flex: 0.6,
      customStyles: {
        paddingTop: 5
      }
    }, house_jsx(styledComponents["b" /* CaptionText */], {
      customStyles: {
        fontWeight: 600
      }
    }, house.house_heading), house_jsx(styledComponents["j" /* NormalText */], {
      customStyles: {
        color: "#3A3A3A"
      }
    }, provinceId.name + ", " + districtId.name)), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.4,
      middle: true
    }, house_jsx("span", null, "heyy"))), house_jsx(styledComponents["d" /* Container */], {
      flex: 0
    }, house_jsx(core_["Divider"], null)), house_jsx(styledComponents["d" /* Container */], {
      row: true,
      flex: 0.15
    }, house_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, house_jsx(styledComponents["c" /* CommandButton */], {
      customStyles: {
        height: "100%",
        fontSize: "12px"
      },
      onClick: () => onViewHouse(house)
    }, "Edit")), house_jsx(styledComponents["d" /* Container */], null, house_jsx(core_["Divider"], {
      orientation: "vertical"
    })), house_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, house_jsx(styledComponents["c" /* CommandButton */], {
      customStyles: {
        height: "100%",
        fontSize: "12px"
      }
    }, "Delete"))));
  };

  const _row = house => {
    return house_jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      key: house.id,
      row: true,
      flex: false,
      customStyles: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        width: "100%",
        borderRadius: 3,
        marginBottom: 5,
        border: "1px solid #E1E1E1"
      }
    }, house_jsx(styledComponents["d" /* Container */], {
      flex: 0.3,
      row: true,
      center: true,
      left: true,
      color: "transparent"
    }, house_jsx(core_["Avatar"], {
      alt: "house",
      src: sandy_default.a,
      className: classes.small
    }), house_jsx(styledComponents["o" /* SubText */], null, house.name)), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.175,
      column: true,
      middle: true,
      left: true,
      color: "transparent"
    }, house_jsx(styledComponents["o" /* SubText */], null, house.no)), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.2,
      row: true,
      center: true,
      left: true,
      color: "transparent"
    }, house.tenants.map(ten => {
      return house_jsx(core_["Avatar"], {
        alt: "house",
        key: ten.id,
        src: sandy_default.a,
        className: classes.small,
        style: {
          borderRadius: 2
        }
      });
    }), house_jsx(core_["Avatar"], {
      className: classes.small,
      style: {
        borderRadius: 2,
        backgroundColor: "#E1E1E1"
      }
    }, house_jsx(styledComponents["b" /* CaptionText */], null, "+ 5"))), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.175,
      column: true,
      middle: true,
      left: true,
      color: "transparent"
    }, house_jsx(core_["Chip"], {
      variant: "primary",
      label: house.date,
      style: {
        width: 80,
        height: 25,
        borderRadius: 5
      }
    })), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.15,
      column: true,
      middle: true,
      left: true,
      color: "transparent"
    }, house_jsx(core_["Chip"], {
      variant: "primary",
      label: house.status,
      style: {
        width: 80,
        height: 25,
        backgroundColor: "light-blue"
      }
    })), house_jsx(styledComponents["d" /* Container */], {
      flex: 0.05,
      column: true,
      middle: true,
      right: true,
      color: "transparent"
    }, house_jsx(styledComponents["o" /* SubText */], null, "Action")));
  };

  return house_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    customStyles: {
      paddingLeft: 20,
      height: "100%"
    }
  }, house_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    color: "white",
    id: "page-container",
    customStyles: {
      position: "relative",
      borderRadius: 5
    }
  }, house_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      width: "100%",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10
    },
    row: true
  }, house_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(CmdButton, {
    isSelected: layout === 0,
    onClick: () => setLayout(0)
  }, house_jsx(List_default.a, {
    style: {
      fontSize: 23,
      marginRight: 1
    }
  }), house_jsx(styledComponents["o" /* SubText */], null, "List")), house_jsx(CmdButton, {
    onClick: () => setLayout(1),
    isSelected: layout === 1,
    customStyles: {
      marginLeft: 5
    }
  }, house_jsx(ViewModule_default.a, {
    style: {
      fontSize: 23,
      marginRight: 1
    }
  }), house_jsx(styledComponents["o" /* SubText */], null, "Grid"))), house_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    middle: true,
    right: true,
    color: "transparent"
  }, house_jsx(core_["Paper"], {
    component: "form",
    className: classes.searchRoot,
    elevation: 0
  }, house_jsx(core_["InputBase"], {
    className: classes.input,
    placeholder: "Search house by name" // inputProps={{ "aria-label": "search google maps" }}

  }), house_jsx(core_["Divider"], {
    className: classes.divider,
    orientation: "vertical"
  }), house_jsx(core_["IconButton"], {
    type: "submit",
    className: classes.iconButton,
    "aria-label": "search"
  }, house_jsx(Search_default.a, null))), house_jsx(house_ActionBtn, {
    onClick: handleDrawerOpen
  }, house_jsx(AddCircleOutline_default.a, {
    style: {
      fontSize: 23
    }
  }), house_jsx(styledComponents["o" /* SubText */], null, "New")))), house_jsx(styledComponents["d" /* Container */], {
    flex: false,
    row: true,
    color: "#e5e7e9",
    customStyles: {
      width: "100%",
      padding: 10
    }
  }, house_jsx(styledComponents["d" /* Container */], {
    flex: 0.3,
    column: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(styledComponents["o" /* SubText */], null, "Name")), house_jsx(styledComponents["d" /* Container */], {
    flex: 0.175,
    column: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(styledComponents["o" /* SubText */], null, "House_no")), house_jsx(styledComponents["d" /* Container */], {
    flex: 0.2,
    column: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(styledComponents["o" /* SubText */], null, "Tenants")), house_jsx(styledComponents["d" /* Container */], {
    flex: 0.175,
    column: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(styledComponents["o" /* SubText */], null, "Due date")), house_jsx(styledComponents["d" /* Container */], {
    flex: 0.15,
    column: true,
    middle: true,
    left: true,
    color: "transparent"
  }, house_jsx(styledComponents["o" /* SubText */], null, "Status")), house_jsx(styledComponents["d" /* Container */], {
    flex: 0.05,
    column: true,
    middle: true,
    right: true,
    color: "transparent"
  })), house_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    flex: 1,
    customStyles: {
      padding: 10
    }
  }, [{
    id: 1,
    name: "Barcelona",
    no: "#AD120",
    tenants: [{
      id: 1,
      image: "rene"
    }, {
      id: 2,
      image: "you"
    }, {
      id: 3,
      image: "me"
    }],
    date: "20-March-2020",
    status: "Active"
  }, {
    id: 2,
    name: "Paris",
    no: "#AD40",
    tenants: [{
      id: 1,
      image: "rene"
    }, {
      id: 2,
      image: "you"
    }, {
      id: 3,
      image: "me"
    }],
    date: "20-09-2020",
    status: "not active"
  }].map(house => _row(house)))), house_jsx(Drawer["a" /* default */], {
    open: openSlide,
    house: house
  }, house_jsx(house_UpdateHouse, {
    house: house,
    onClose: handleSlideClose
  })), house_jsx(Drawer["a" /* default */], {
    onOpen: handleDrawerOpen,
    onClose: handleDrawerClose,
    open: open
  }, house_jsx(house_create, {
    onClose: handleDrawerClose
  })));
};

/* harmony default export */ var landlord_house = (house_Index);
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
// EXTERNAL MODULE: ./components/landlord/Header.js
var Header = __webpack_require__("0oZa");

// CONCATENATED MODULE: ./pages/landlord/houses.js

var houses_jsx = external_react_default.a.createElement;







const HousePage = ({
  open
}) => {
  return houses_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true
  }, houses_jsx(head_default.a, null, houses_jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/public/fav.png"
  }), houses_jsx("title", null, "Houses - HouseAssist - Space")), houses_jsx(Header["a" /* default */], {
    open: open
  }, houses_jsx(core_["Typography"], {
    variant: "h6",
    style: {
      color: "#2A3045",
      fontSize: 18,
      fontWeight: 600
    }
  }, "Houses")), houses_jsx(landlord_house, null));
};

/* harmony default export */ var landlord_houses = __webpack_exports__["default"] = (Object(Layout["a" /* default */])(HousePage));

/***/ }),

/***/ "8k/1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "8qPd":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Slide");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AJUk":
/***/ (function(module, exports) {

module.exports = require("react-onclickoutside");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

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

/***/ "BJfW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SingleBed");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

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

/***/ "C20b":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudUpload");

/***/ }),

/***/ "CSXW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleOutline");

/***/ }),

/***/ "DIlr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Q01v");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6L5Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({});
function customDrawer(props) {
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    anchor: "right",
    open: props.open
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    column: true,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    flex: 1,
    color: "transparent"
  }, props.children)));
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: ./components/styledComponents/Container.js
var Container = __webpack_require__("RaUI");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./components/Page.js
var Page_jsx = external_react_default.a.createElement;


 // import { theme } from "../theme/Theme";






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

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GLi4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewModule");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "IxcL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");

// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");

// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__("yFMe");

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__("Q6gG");

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");

// EXTERNAL MODULE: ./components/Page.js + 1 modules
var components_Page = __webpack_require__("F1wk");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/CustomLink.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/* harmony default export */ var CustomLink = (Object(router_["withRouter"])((_ref) => {
  let {
    router,
    children,
    as,
    href
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["router", "children", "as", "href"]);

  return __jsx(link_default.a, _extends({}, rest, {
    href: href,
    as: as
  }), external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    className: router.pathname === href || router.asPath === as ? `active` : null
  }));
})); // import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// export default ({ href, children }) => {
//   const router = useRouter();
//   let className = children.props.className || "";
//   if (router.pathname === href) {
//     className = `${className} selected`;
//   }
//   return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
// };
// import { withRouter } from "next/router";
// import Link from "next/link";
// import React, { Children } from "react";
// const ActiveLink = ({ router, children, ...props }) => {
//   const child = Children.only(children);
//   let className = child.props.className || "";
//   if (router.pathname === props.href && props.activeClassName) {
//     className = `${className}${props.activeClassName}`.trim();
//   }
//   delete props.activeClassName;
//   return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
// };
// export default withRouter(ActiveLink);
// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: ./public/static/HAS.png
var HAS = __webpack_require__("Np96");
var HAS_default = /*#__PURE__*/__webpack_require__.n(HAS);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// CONCATENATED MODULE: ./components/ActiveLink.js
var ActiveLink_jsx = external_react_default.a.createElement;





const NavText = external_styled_components_default()(styledComponents["o" /* SubText */]).withConfig({
  displayName: "ActiveLink__NavText",
  componentId: "sc-172y5y2-0"
})(["color:", ";font-weight:", ";&:hover{color:", ";}"], ({
  theme,
  isActive
}) => isActive ? theme.primaryDark : theme.grey, ({
  isActive
}) => isActive ? 600 : 500, ({
  theme
}) => theme.primaryDark);
const NavItem = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "ActiveLink__NavItem",
  componentId: "sc-172y5y2-1"
})(["display:flex;flex-direction:row;align-items:center;background-color:", ";padding-top:12px;padding-bottom:12px;padding-left:7px;padding-right:7px;cursor:pointer;&:hover{background-color:", ";}"], ({
  theme,
  isActive
}) => isActive ? theme.bgPrimary : "transparent", ({
  theme
}) => theme.bgPrimary);

function ActiveLink({
  children,
  open,
  icon,
  label,
  href
}) {
  const router = Object(router_["useRouter"])();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  if (open) {
    return ActiveLink_jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      customStyles: {
        paddingLeft: 10,
        paddingRight: 10
      }
    }, ActiveLink_jsx(NavItem, {
      isActive: router.pathname === href
    }, ActiveLink_jsx(styledComponents["d" /* Container */], {
      row: true,
      left: true,
      center: true,
      flex: 0,
      color: "transparent"
    }, ActiveLink_jsx(Icon_default.a, {
      style: {
        fontSize: router.pathname === href ? 21 : 20,
        color: router.pathname === href ? "#1C1D21" : "#717D7E"
      }
    }, icon))));
  }

  return ActiveLink_jsx("a", {
    href: href,
    onClick: handleClick,
    style: {
      marginBottom: 5
    }
  }, ActiveLink_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }, ActiveLink_jsx(NavItem, {
    isActive: router.pathname === href
  }, ActiveLink_jsx(styledComponents["d" /* Container */], {
    row: true,
    left: true,
    center: true,
    flex: 0,
    color: "transparent"
  }, ActiveLink_jsx(Icon_default.a, {
    style: {
      fontSize: router.pathname === href ? 21 : 20,
      color: router.pathname === href ? "#1C1D21" : "#717D7E"
    }
  }, icon)), ActiveLink_jsx(styledComponents["d" /* Container */], {
    row: true,
    left: true,
    center: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      marginLeft: 20
    }
  }, ActiveLink_jsx(NavText, {
    isActive: router.pathname === href
  }, label)))));
}

/* harmony default export */ var components_ActiveLink = (ActiveLink);
// CONCATENATED MODULE: ./components/landlord/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const drawerWidth = 200;
const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    border: "none",
    backgroundColor: components_Page["b" /* theme */].bgSecondary,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    border: "none",
    backgroundColor: components_Page["b" /* theme */].bgSecondary,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: _objectSpread({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  content: {
    // flexGrow: 1,
    // width: "100%",
    backgroundColor: components_Page["b" /* theme */].bgPrimary // paddingTop: 64
    // paddingLeft: theme.spacing(20)
    // paddingRight: theme.spacing(2)

  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  },
  linkStyle: {
    textDecoration: "none",
    // cursor: "pointer",
    color: components_Page["b" /* theme */].iconStyle
  },
  activeLink: {
    textDecoration: "none",
    // cursor: "pointer",
    color: components_Page["b" /* theme */].tealPrimary
  }
}));

const WithLayout = Page => props => {
  const classes = useStyles();
  const [open, setOpen] = external_react_default.a.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return Layout_jsx("div", {
    className: classes.root
  }, Layout_jsx(CssBaseline_default.a, null), Layout_jsx(Drawer_default.a, {
    variant: "permanent",
    className: external_clsx_default()(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open
    }),
    classes: {
      paper: external_clsx_default()({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    }
  }, Layout_jsx("div", {
    className: classes.toolbar
  }, Layout_jsx("div", {
    style: {
      display: "flex",
      marginLeft: 5,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    }
  }, open ? Layout_jsx(core_["Avatar"], {
    src: HAS_default.a,
    className: classes.small
  }) : Layout_jsx(core_["Avatar"], {
    src: HAS_default.a,
    className: classes.small
  }))), Layout_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      height: "100%",
      paddingTop: 20
    }
  }, Layout_jsx(components_ActiveLink, {
    label: "Dashboard",
    href: "/landlord/dashboard",
    icon: "dashboard"
  }), Layout_jsx(components_ActiveLink, {
    label: "Houses",
    href: "/landlord/houses",
    icon: "home"
  }), Layout_jsx(components_ActiveLink, {
    label: "Tenants",
    href: "/landlord/tenants",
    icon: "people"
  }), Layout_jsx(components_ActiveLink, {
    label: "Tickets",
    href: "/landlord/tickets",
    icon: "mail"
  }))), Layout_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    customStyles: {
      paddingTop: 64,
      // paddingLeft: 10,
      paddingRight: 10,
      minHeight: "99.9vh"
    }
  }, Layout_jsx(Page, {
    open: open
  })));
};

/* harmony default export */ var Layout = __webpack_exports__["a"] = (WithLayout);
{
  /*  <div className={classes.toolbar}>
          <div style={{ marginLeft: 2 }}>
            <IconButton onClick={handleDrawerOpen}>
              {open ? (
                <MenuCloseIcon style={{ fontSize: 22, color: "black" }} />
              ) : (
                <MenuIcon style={{ fontSize: 20, color: "black" }} />
              )}
            </IconButton>
          </div>
              </div>*/
}

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "LBc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_HOUSE_TYPES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const GET_HOUSE_TYPES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    houseTypes {
      id
      house_type
    }
  }
`;

const HouseTypes = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
  query: GET_HOUSE_TYPES
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (HouseTypes);


/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "Np96":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/HAS-876cab4250f49365da56f3f02aa129ad.png";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PPy0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queryComponents_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mivZ");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7nhY");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6L5Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const LOGOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation LOGOUT_MUTATION {
    logout {
      message
    }
  }
`;

const LogoutButton = props => {
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: LOGOUT_MUTATION,
    refetchQueries: [{
      query: _queryComponents_User__WEBPACK_IMPORTED_MODULE_2__[/* CURRENT_USER_QUERY */ "a"]
    }]
  }, logout => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    style: {
      height: 50
    },
    onClick: () => {
      logout();
      props.handleClose();
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace("/");
    }
  }, __jsx(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: 20,
      marginRight: 10
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_7__[/* SubText */ "o"], null, "Logout")));
};

/* harmony default export */ __webpack_exports__["a"] = (LogoutButton);

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

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

/***/ "RmX+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalOffer");

/***/ }),

/***/ "Shq7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "TjsY":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/126-18f401b0ce674372ebd02b7f07bee79f.gif";

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

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

/***/ "WkHw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/StepConnector");

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

/***/ "bzUq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "cXpd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardBackspace");

/***/ }),

/***/ "cvHV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

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

/***/ "herE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NoteAdd");

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

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

/***/ "iP/l":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Bathtub");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "jH29":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apartment");

/***/ }),

/***/ "jQ8v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

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

/***/ "mi5/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/House");

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

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rYcJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "tdHr":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sandy-6d0fabfc11bc7e25470ef279f022b7bc.jpeg";

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vBgU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddPhotoAlternate");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "zzqg":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckBox");

/***/ })

/******/ });