module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/renela/Projects/React js/House /HouseAssist/frontend/components/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/public/fav.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://unpkg.com/nprogress@0.2.0/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, "House Assist Space"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: theme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledComponents_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styledComponents/Container */ "./components/styledComponents/Container.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/renela/Projects/React js/House /HouseAssist/frontend/components/Page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { theme } from "../theme/Theme";






next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = () => {
  nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.done();
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
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
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

class Page extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }
    }, __jsx(GlobalStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }), __jsx(_styledComponents_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      flex: 1,
      column: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }
    }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }
    }), this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/styledComponents/Container.js":
/*!**************************************************!*\
  !*** ./components/styledComponents/Container.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/renela/Projects/React js/House /HouseAssist/frontend/components/styledComponents/Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  return __jsx(Wrapper, _extends({}, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (StyledContainer);

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
const endpoint = `http://localhost:4444`;
const perPage = 8;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.ts");




function createClient(headers) {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri: true ? _config__WEBPACK_IMPORTED_MODULE_2__["endpoint"] : undefined,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient));

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/renela/Projects/React js/House /HouseAssist/frontend/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } //this exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps
    };
  } // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }


  render() {
    const {
      Component,
      pageProps,
      apollo
    } = this.props;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: apollo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map