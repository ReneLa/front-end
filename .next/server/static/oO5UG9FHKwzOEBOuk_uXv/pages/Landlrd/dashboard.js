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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+jd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6L5Y");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tdHr");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("rYcJ");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Bathtub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("iP/l");
/* harmony import */ var _material_ui_icons_Bathtub__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Bathtub__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_SingleBed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("BJfW");
/* harmony import */ var _material_ui_icons_SingleBed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SingleBed__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Y1pe");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _queryComponents_landlord_LandlordHouses__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("bzWV");
/* harmony import */ var _houses_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("sQtf");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderRadius: 0
  },
  popoverPaper: {
    display: "flex",
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 0
  }
}));
const HouseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "HouseItem__HouseWrapper",
  componentId: "sc-1dgxdk8-0"
})(["display:flex;flex-direction:column;padding-top:10px;padding-left:15px;padding-right:15px;height:300px;min-width:250px;max-width:250px;margin-right:10px;position:relative;margin-bottom:20px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "HouseItem__Tag",
  componentId: "sc-1dgxdk8-1"
})(["flex:1;align-items:center;justify-content:center;border-radius:10px;padding:5px;margin-right:5px;"]);
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "HouseItem__CardHeader",
  componentId: "sc-1dgxdk8-2"
})(["direction:flex;flex-direction:row;width:100%;align-items:center;background-color:transparent;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "HouseItem__ImageWrapper",
  componentId: "sc-1dgxdk8-3"
})(["direction:flex;flex-direction:row;flex:0;width:100%;background-color:transparent;padding-top:5px;padding-left:0px;padding-right:0px;padding-bottom:10px;", ""], props => props.customStyles);
const PopContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "HouseItem__PopContainer",
  componentId: "sc-1dgxdk8-4"
})(["display:flex;flex:1;border-radius:1px;box-shadow:0 1.6px 3.6px 0 rgba(0,0,0,0.132),0 0.3px 0.9px 0 rgba(0,0,0,0.108);", ""], props => props.customStyles);
const CancelBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryButton */ "l"]).withConfig({
  displayName: "HouseItem__CancelBtn",
  componentId: "sc-1dgxdk8-5"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const PopListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CommandButton */ "c"]).withConfig({
  displayName: "HouseItem__PopListItem",
  componentId: "sc-1dgxdk8-6"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:8px 10px;"]);
const DELETE_HOUSE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default.a`
  mutation DELETE_HOUSE_MUTATION($id: ID!) {
    deleteHouse(id: $id) {
      id
    }
  }
`;
const Transition = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Slide"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

const DeleteHouse = ({
  closePopover,
  house
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCompletion = () => {
    handleClose();
    closePopover();
  };

  const [deleteHouse, {
    data,
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(DELETE_HOUSE_MUTATION, {
    variables: {
      id: house.id
    },
    refetchQueries: [{
      query: _queryComponents_landlord_LandlordHouses__WEBPACK_IMPORTED_MODULE_13__[/* GET_USER_HOUSES */ "a"]
    }, {
      query: _houses_index__WEBPACK_IMPORTED_MODULE_14__[/* PAGINATION_QUERY */ "a"]
    }],
    onCompleted: onCompletion
  });
  return __jsx("div", null, __jsx(PopListItem, {
    type: "button",
    onClick: () => {
      handleClickOpen();
    }
  }, __jsx(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: "red",
      fontSize: 20,
      marginRight: 6
    }
  }), "Delete"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Dialog"], {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogTitle"], {
    id: "alert-dialog-slide-title",
    style: {
      fontSize: 20
    }
  }, "You are about to delete this house?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogContent"], null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 15,
      marginBottom: 15
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubText */ "o"], {
    customStyles: {
      marginRight: 10
    }
  }, "House: "), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: 17
    }
  }, house.house_heading))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogActions"], null, __jsx(CancelBtn, {
    onClick: () => {
      handleClose();
      closePopover();
    }
  }, "Cancel"), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryButton */ "l"], {
    onClick: () => {
      deleteHouse();
    },
    type: "button",
    customStyles: {
      backgroundColor: "#E74C3C",
      border: "none"
    }
  }, loading ? "Deleting" : "Delete"))));
};

const HouseItem = ({
  house
}) => {
  const classes = useStyles();
  const {
    images,
    countryId,
    provinceId,
    districtId,
    appliances,
    utilities
  } = house;
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      flex: 0
    },
    href: {
      pathname: `/Landlrd/houses/[id]`,
      query: {
        id: house.id
      }
    },
    as: `/Landlrd/houses/${house.id}`
  }, __jsx("a", {
    style: {
      textDecoration: "none",
      flex: 0
    }
  }, __jsx(HouseWrapper, null, __jsx(CardHeader, null, house.profileImage !== null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    src: house.profileImage,
    className: classes.small
  }), house.profileImage === null && __jsx("div", {
    className: classes.small
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: "18px",
      fontWeight: "500"
    }
  }, house.house_heading), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      color: "#0078D4"
    }
  }, countryId.name + " ," + districtId.name)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: false,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* IconButton */ "h"], {
    customStyles: {
      border: "1px solid #E1E1E1",
      height: 33,
      width: 33
    },
    onMouseEnter: handlePopoverOpen
  }, __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      fontSize: 18
    }
  })))), __jsx(ImageWrapper, null, images.length <= 0 && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    center: true,
    middle: true,
    flex: 1,
    color: "transparent",
    customStyles: {
      width: 90,
      height: 90
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    style: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2,
      backgroundColor: "#F2F3F4"
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubHeader */ "n"], null, " ", house.house_heading.charAt(0))))), __jsx(ImageWrapper, null, images.map(img => {
    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
      flex: 1,
      key: img.id
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
      src: img.image,
      style: {
        width: "100%",
        height: 90,
        borderRadius: 0
      }
    }));
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    color: "transparent",
    column: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    row: true,
    color: "transparent",
    customStyles: {
      marginBottom: 7
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    middle: true,
    color: "transparent",
    customStyles: {
      paddingRight: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    color: "transparent",
    row: true,
    center: true,
    space: "space-between"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      fontSize: 10
    }
  }, "BEDROOMS"), __jsx(_material_ui_icons_SingleBed__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      fontSize: 18
    }
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubText */ "o"], {
    customStyles: {
      fontWeight: "600",
      color: "#ED6161",
      fontSize: 16
    }
  }, house.no_bedrooms)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    middle: true,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    color: "transparent",
    row: true,
    center: true,
    space: "space-between"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      fontSize: 10
    }
  }, "BATHROOMS"), __jsx(_material_ui_icons_Bathtub__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: 15
    }
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubText */ "o"], {
    customStyles: {
      fontWeight: "600",
      color: "#00BCCA",
      fontSize: 16
    }
  }, house.no_bathrooms))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    row: true,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    middle: true,
    color: "transparent",
    customStyles: {
      paddingTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    color: "transparent",
    row: true,
    center: true,
    space: "space-between"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      fontSize: 10
    }
  }, "Utilities")), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent"
  }, utilities.map((util, i) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 0,
    key: i,
    row: true,
    center: true,
    middle: true,
    customStyles: {
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 5,
      marginRight: 3
    }
  }, __jsx("span", null, util))))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    middle: true,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    color: "transparent",
    row: true,
    center: true,
    space: "space-between"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      fontSize: 10
    }
  }, "Appliances")), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent"
  }, appliances.map((util, i) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 0,
    key: i,
    row: true,
    center: true,
    middle: true,
    customStyles: {
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 5,
      marginRight: 3
    }
  }, __jsx("span", null, util)))))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
    id: "mouse-over-popover",
    open: open,
    anchorEl: anchorEl,
    onClose: handlePopoverClose,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    elevation: 0,
    classes: {
      paper: classes.popoverPaper
    },
    disableRestoreFocus: true
  }, __jsx(PopContainer, null, __jsx(DeleteHouse, {
    closePopover: handlePopoverClose,
    house: house
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (HouseItem);

/***/ }),

/***/ "/Pzr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeWork");

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

/***/ "/qrd":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBRIGEDbyBBgqAAADnElEQVRo3u3YXYhVVRQH8N9tpsGpnKkHJwllKuuhD8FSCoR8yA/Clz6IwrSHiJAkEq0YiSAfh7AwRcqKHkIJBnqwLwhMszSLppfGsA+EmIomRzHNHKfRWT145tyZ8d6Ze6/n3oGx/344d6+79l7/vfY6a++zmJSoL121rgrm63zrNl87VbsVL7HZZkuS3kJnhaPWaKiF8bl2i6TtNx/c7EMhdLqhusZbbTMoHPai9Q4Lg7ZpBUv9LPS6tlrGr7DeKaHfq64sKGnysdBZlTjzqF5h0PZkvXmfbDco9FqBJoeE+7I3/4gQ9pgHGmx0zHGvJEE3zx4hLMMq4f3sCRwQ2tLexjQIN6SyNqEL1wuHsicwIExJe0eE+e4WjqSyKcIA6pNnUVxSEYF6nE57/WgUGExlpxOtM8rKi6UixLBee4EtyOuM1K0KgQbtftfrZZdODIHKdVQaAxkiiwAZvtJcwX9zxQdX5oEzDHsNC2FKopXTN/ZWVEbgB6wetup8G8LqRCtc5vKKbIyJZSNS8WgMpeKHszecx4pxD6Pl1TQPzUkC6tOuOZX0CZFKSkCuVMWCCIScXlvkrDJNyF3wrGURiPOuZFXJfIUMj35usniErOYEzqFlYgm06BK+mTgCnUKXlnKmmvDDKFsPVLAFk8wD/8fAxRsDQ7h4YqCYJ2qWiosRqNlhNJrAeLIxcOExsGiMXtWxTwgdZoAZOoSwt3YEGqxzUjipTVvya10lxbko2r4Yd+w13km1Pxh1Sc+AwFD7S7dOb1vr9gJ33sW6dCV3wkxRmMxvtrg1KxNj3+DzX7bNmsw021z3mAl2ecsuf2a/6tEeOB9zbHKi6Fa9qWmUfoPWSj9ViieVJivt1lOQxP40u+QstkO/0OuxbAkUw3V+TGqjUz3loBD+9YsQHqgFATYIb9jkuBC6PW8anhQ6a0Fglp/SrfjMg2kJaKpwIksCY2eNf2w1e4T+4+V5YPwaXzHTf9tnjauGaTZabqdB54rXmREoDXd4zTEhnLCqkglCeGhE/bNUtFjrQOKVr6wsvWJyPoHQo72MQ6bOIh36hXDUVnNKN1S4fSeEAe9ZOG4+u8lL/kje/R3uLd13xc1/jru8m6zooKdHBFgeTZ7wZTLme8+6ujKXF8d0L/g18cUuz1jgRo2mmmW+5+x0OjkJXndn1qbzqHe/T5wp6KmzPrVCY/mTln9KTbfUArdo1Swc1+2AvT7SU72VT278B2VmHQtVIqFIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTE4VDA2OjE2OjU0KzAwOjAwFnnlaQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0xOFQwNjoxNjo1NCswMDowMGckXdUAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5lxY");


/***/ }),

/***/ "15X6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationsNone");

/***/ }),

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "3d/A":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBRIFLA0yujaoAAAB8UlEQVRo3u2YzS5DQRSAv1tLEfUgLS/AWlhIRZEQXoVYWOAR2LIXpN6gCStWhKRlh12TklbHwrS5v+39mTNJk3vu4jY50/t9c2Y6ObeQR7pwWOaMZ1q0eOKUJRyb+DnqKN9VZ9YWfpVWAK9QtKjYwFfphOIVii7b0vhNugPcOfNMMskCFy6FTTv4DjuezO6gLoIKVRdkK5Bdc2VFFmI4XlxhNF5UIR5eTCE+XkQhGd64QnK8UYV0eGMK6fFGFLLhMytkx2dSMINPrWAOn0rBLD6xgnl8IgUZfGyFQ1dfYxbvVVAchc9eEu9XCFTB3WrK4P8VItpXb6crGaEdtL/RtiMwUKi4Gm27AoouFXgfNNo2Bfq0twI9ALGdHxVbdLUQizRpsOKys1EBWKFJg0XHk/wPyRftAKMgOt8YMYYCDhvc8hV4Nf+ixnq25YuzCae4jvx3QKG4Yio9Y7SAMwKvUFwOrUJGgfWReIViTU6gpkfcUfLN06HMvc7eyAl86hHl0Oyszn4kEUh2EPV0bkIf4N4o8KufE/3byngQ9b/WC832fKNixRgeRLlALpAL5AK5gKDAj75Pi9H6T/4OF3jV92OKIvgiJ/rTS/iAg1gNl4lrP1xghqYVfCO6wiXexPFNSsPXaZ9H2iLoNg/sCW7xMY0/mxO47BUg/p8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMThUMDU6NDQ6MTMrMDA6MDCf/MWsAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTE4VDA1OjQ0OjEzKzAwOjAw7qF9EAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5lxY":
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

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/queryComponents/User.js
var User = __webpack_require__("mivZ");

// EXTERNAL MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_ = __webpack_require__("rYcJ");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);

// EXTERNAL MODULE: external "@material-ui/icons/NotificationsNone"
var NotificationsNone_ = __webpack_require__("15X6");
var NotificationsNone_default = /*#__PURE__*/__webpack_require__.n(NotificationsNone_);

// EXTERNAL MODULE: ./public/static/sandy.jpeg
var sandy = __webpack_require__("tdHr");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./components/Landlrd/houses/index.js + 2 modules
var Landlrd_houses = __webpack_require__("sQtf");

// EXTERNAL MODULE: ./components/Landlrd/tenants/index.js + 2 modules
var Landlrd_tenants = __webpack_require__("je9M");

// EXTERNAL MODULE: ./components/Landlrd/tickets/AllTickets.js + 2 modules
var AllTickets = __webpack_require__("7h5s");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordHouses.js
var LandlordHouses = __webpack_require__("bzWV");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTenants.js
var LandlordTenants = __webpack_require__("flkU");

// EXTERNAL MODULE: ./public/static/web.png
var web = __webpack_require__("3d/A");
var web_default = /*#__PURE__*/__webpack_require__.n(web);

// EXTERNAL MODULE: ./public/static/tenant.png
var tenant = __webpack_require__("/qrd");
var tenant_default = /*#__PURE__*/__webpack_require__.n(tenant);

// EXTERNAL MODULE: ./public/static/ticket1.png
var ticket1 = __webpack_require__("7j7N");
var ticket1_default = /*#__PURE__*/__webpack_require__.n(ticket1);

// CONCATENATED MODULE: ./components/Landlrd/dashboard/index.js
var __jsx = external_react_default.a.createElement;


















const useStyles = Object(styles_["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 10
  },
  badgeStyle: {
    backgroundColor: "red",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    position: "absolute",
    top: -5,
    right: -5
  }
}));
const Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "dashboard__Wrapper",
  componentId: "j8nt0p-0"
})(["display:flex;flex-direction:column;flex:0.8;width:100%;padding-top:0px;padding-left:110px;padding-bottom:0px 110px;padding-right:0px 110px;"]);
const SideContainer = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "dashboard__SideContainer",
  componentId: "j8nt0p-1"
})(["display:flex;flex-direction:column;width:100%;padding:10px;flex:0.2;background-color:white;"]);
const Card = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "dashboard__Card",
  componentId: "j8nt0p-2"
})(["display:flex;flex-direction:row;justify-content:center;height:90px;min-width:180px;background-color:white;border-radius:3px;padding:15px;margin-right:20px;margin-bottom:20px;"]);
const ListItem = external_styled_components_default()("Container").withConfig({
  displayName: "dashboard__ListItem",
  componentId: "j8nt0p-3"
})(["display:flex;flex-direction:row;padding:5px 10;background-color:white;border-radius:3px;align-items:center;justify-content:space-between;margin-bottom:7px;"]);
const TenantList = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "dashboard__TenantList",
  componentId: "j8nt0p-4"
})(["background-color:transparent;padding:10px;flex:0;"]);
const NotifButton = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "dashboard__NotifButton",
  componentId: "j8nt0p-5"
})(["display:flex;position:relative;background-color:", ";height:35px;width:40px;border-radius:3px;"], ({
  theme
}) => theme.btnPrimary);

const HouseCountCard = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(Landlrd_houses["a" /* PAGINATION_QUERY */]);

  if (data) {
    return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      middle: true,
      center: true,
      color: "transparent",
      flex: 0.5
    }, __jsx("img", {
      src: web_default.a,
      style: {
        width: 40,
        height: 40
      }
    })), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      column: true,
      middle: true,
      flex: 0.5
    }, __jsx(styledComponents["g" /* Header */], {
      customStyles: {
        color: "#0078D4"
      }
    }, data.housesConnection.aggregate.count), __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 14,
        marginTop: 0,
        lineHeight: 1
      }
    }, "Houses")));
  }

  return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
    row: true,
    space: "space-between",
    middle: true,
    center: true,
    color: "transparent",
    flex: 0.5
  }, __jsx("img", {
    src: web_default.a,
    style: {
      width: 40,
      height: 40
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    middle: true,
    flex: 0.5
  }, __jsx(styledComponents["g" /* Header */], {
    customStyles: {
      color: "#0078D4"
    }
  }, "0"), __jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 14,
      marginTop: 0,
      lineHeight: 1
    }
  }, "Houses")));
};

const TenantCountCard = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(Landlrd_tenants["a" /* PAGINATION_QUERY */]);

  if (data) {
    return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      middle: true,
      center: true,
      color: "transparent",
      flex: 0.5
    }, __jsx("img", {
      src: tenant_default.a,
      style: {
        width: 48,
        height: 45
      }
    })), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      column: true,
      middle: true,
      flex: 0.5
    }, __jsx(styledComponents["g" /* Header */], {
      customStyles: {
        color: "#009688"
      }
    }, data.tenantsConnection.aggregate.count), __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 14,
        marginTop: 0,
        lineHeight: 1
      }
    }, "Tenants")));
  }

  return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
    row: true,
    space: "space-between",
    middle: true,
    center: true,
    color: "transparent",
    flex: 0.5
  }, __jsx("img", {
    src: tenant_default.a,
    style: {
      width: 48,
      height: 45
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    middle: true,
    flex: 0.5
  }, __jsx(styledComponents["g" /* Header */], {
    customStyles: {
      color: "#009688"
    }
  }, "0"), __jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 14,
      marginTop: 0,
      lineHeight: 1
    }
  }, "Tenants")));
};

const TicketCountCard = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(AllTickets["a" /* PAGINATION_QUERY */]);

  if (data) {
    return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
      row: true,
      space: "space-between",
      middle: true,
      center: true,
      color: "transparent",
      flex: 0.5
    }, __jsx("img", {
      src: ticket1_default.a,
      style: {
        width: 40,
        height: 40
      }
    })), __jsx(styledComponents["d" /* Container */], {
      color: "transparent",
      column: true,
      middle: true,
      flex: 0.5
    }, __jsx(styledComponents["g" /* Header */], {
      customStyles: {
        color: "#ff5722"
      }
    }, data.ticketsConnection.aggregate.count), __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 14,
        marginTop: 0,
        lineHeight: 1
      }
    }, "Tickets")));
  }

  return __jsx(Card, null, __jsx(styledComponents["d" /* Container */], {
    row: true,
    space: "space-between",
    middle: true,
    center: true,
    color: "transparent",
    flex: 0.5
  }, __jsx("img", {
    src: ticket1_default.a,
    style: {
      width: 40,
      height: 40
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    middle: true,
    flex: 0.5
  }, __jsx(styledComponents["g" /* Header */], {
    customStyles: {
      color: "#ff5722"
    }
  }, "0"), __jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      fontSize: 14,
      marginTop: 0,
      lineHeight: 1
    }
  }, "Tickets")));
};

const RecentCreatedHouses = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(LandlordHouses["a" /* GET_USER_HOUSES */], {
    variables: {
      first: 4
    }
  });
  const classes = useStyles();

  if (data) {
    const houses = data.getUserHouses;
    return __jsx(styledComponents["d" /* Container */], {
      flex: 0.6,
      column: true,
      customStyles: {
        padding: 15,
        marginRight: 10
      },
      color: "white"
    }, __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        borderRadius: 3,
        fontSize: 14,
        marginBottom: 20,
        lineHeight: 1
      }
    }, "Latest created houses"), houses.map(house => __jsx(ListItem, {
      key: house.id
    }, __jsx(styledComponents["d" /* Container */], {
      flex: 0.6,
      row: true,
      center: true,
      color: "transparent"
    }, house.profileImage === null ? __jsx(core_["Avatar"], {
      className: classes.small
    }, __jsx(styledComponents["n" /* SubHeader */], null, house.house_heading.charAt(0))) : __jsx(core_["Avatar"], {
      src: house.profileImage,
      className: classes.small
    }), __jsx(styledComponents["o" /* SubText */], null, house.house_heading)), __jsx(styledComponents["o" /* SubText */], null, house.house_no), __jsx(styledComponents["o" /* SubText */], null, "456"), __jsx(MoreHoriz_default.a, null))));
  }

  return __jsx(styledComponents["d" /* Container */], {
    flex: 0.6,
    column: true,
    customStyles: {
      paddingRight: 20
    }
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      marginBottom: 20
    }
  }, "Latest created houses"));
};

const RecentCreatedTenants = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(LandlordTenants["a" /* GET_LANDLORD_TENANTS */], {
    variables: {
      first: 5
    }
  });
  const classes = useStyles();

  if (data) {
    const tenants = data.getLandlordTenants;
    return __jsx(styledComponents["d" /* Container */], {
      flex: 0.4,
      column: true,
      color: "white",
      customStyles: {
        padding: 15,
        marginRight: 10,
        borderRadius: 3,
        maxHeight: 120
      }
    }, __jsx(styledComponents["n" /* SubHeader */], {
      customStyles: {
        fontSize: 14,
        marginBottom: 20,
        lineHeight: 1
      }
    }, "Recent tenants"), __jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      color: "white"
    }, tenants && tenants.map(ten => __jsx(TenantList, {
      key: ten.id
    }, ten.profileImage === null ? __jsx(core_["Avatar"], {
      className: classes.small
    }, __jsx(styledComponents["n" /* SubHeader */], null, ten.firstName.charAt(0) + "" + ten.lastName.charAt(0))) : __jsx(core_["Avatar"], {
      src: ten.profileImage,
      className: classes.small
    })))));
  }

  return __jsx(styledComponents["d" /* Container */], {
    flex: 0.4,
    column: true,
    color: "transparent",
    customStyles: {
      paddingRight: 20
    }
  }, __jsx(styledComponents["p" /* Text */], {
    customStyles: {
      marginBottom: 20
    }
  }, "Recent tenants"), __jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "white",
    customStyles: {
      borderRadius: 3
    }
  }));
};

const Dashboard = () => {
  const classes = useStyles();
  return __jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true
  }, __jsx(Wrapper, null, __jsx(styledComponents["d" /* Container */], {
    row: true,
    customStyles: {
      paddingTop: 40,
      paddingBottom: 10
    }
  }, __jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      marginRight: 10
    }
  }, "Welcome back,"), __jsx(User["b" /* default */], null, ({
    data
  }) => {
    if (data) {
      const {
        me
      } = data;
      return __jsx(styledComponents["n" /* SubHeader */], {
        customStyles: {
          color: "#009688"
        }
      }, data.me && me.user_name);
    }

    return __jsx("div", null);
  })), __jsx(styledComponents["d" /* Container */], {
    customStyles: {
      paddingTop: 20,
      paddingBottom: 20
    },
    wrap: true,
    row: true
  }, __jsx(HouseCountCard, null), __jsx(TenantCountCard, null), __jsx(TicketCountCard, null)), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      height: "auto"
    }
  }, __jsx(RecentCreatedHouses, null), __jsx(RecentCreatedTenants, null))), __jsx(SideContainer, null, __jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent"
  }, __jsx(styledComponents["d" /* Container */], {
    flex: 0.7,
    center: true,
    middle: true,
    row: true,
    color: "transparent"
  }, __jsx(styledComponents["p" /* Text */], null, "Recent Activity")), __jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 0.3,
    middle: true,
    center: true,
    color: "transparent"
  }, __jsx(NotifButton, null, __jsx(NotificationsNone_default.a, {
    style: {
      fontSize: 30,
      fontWeight: "normal",
      color: "white"
    }
  }))))));
};

/* harmony default export */ var dashboard = (Dashboard);
// CONCATENATED MODULE: ./pages/Landlrd/dashboard.js

var dashboard_jsx = external_react_default.a.createElement;




const DashboardPage = props => {
  return dashboard_jsx(styledComponents["d" /* Container */], {
    flex: 1
  }, dashboard_jsx(dashboard, props));
};

/* harmony default export */ var Landlrd_dashboard = __webpack_exports__["default"] = (Object(Layout["a" /* default */])(DashboardPage));

/***/ }),

/***/ "6JG2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Kitchen");

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

/***/ "7h5s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PAGINATION_QUERY; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");
var PersonPin_default = /*#__PURE__*/__webpack_require__.n(PersonPin_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/Landlrd/tickets/SingleTicket.js
var SingleTicket = __webpack_require__("YdRN");

// EXTERNAL MODULE: external "@material-ui/icons/AddPhotoAlternate"
var AddPhotoAlternate_ = __webpack_require__("vBgU");

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTickets.js
var LandlordTickets = __webpack_require__("hwPB");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordHouses.js
var LandlordHouses = __webpack_require__("bzWV");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");

// CONCATENATED MODULE: ./components/Landlrd/tickets/create/CreateTicket.js
var __jsx = external_react_default.a.createElement;















const useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    width: 550,
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
  displayName: "CreateTicket__ActionBtn",
  componentId: "sc-1d91g92-0"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateTicket__CloseBtn",
  componentId: "sc-1d91g92-1"
})(["position:absolute;top:0;right:0;z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.bgPrimary);
const CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "CreateTicket__CancelBtn",
  componentId: "sc-1d91g92-2"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const CREATE_TICKET_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_TICKET_MUTATION(
    $title: String!
    $description: String!
    $reported_way: String
    $owner_review: String
    $houseId: ID
  ) {
    createTicket(
      title: $title
      description: $description
      reported_way: $reported_way
      owner_review: $owner_review
      houseId: $houseId
    ) {
      id
    }
  }
`;

const Reported = ({
  reportWay,
  setReportWay
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])([{
    id: 1,
    value: "System"
  }, {
    id: 2,
    value: "Phone"
  }, {
    id: 3,
    value: "Email"
  }, {
    id: 4,
    value: "In person"
  }]);

  const handleClickOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const valuesList = () => {
    return __jsx("div", null, reportWay.map(lst => __jsx("span", {
      key: lst.id
    }, lst.value + ", ")));
  };

  return __jsx(styledComponents["e" /* Dropdown */], {
    title: reportWay.length > 0 ? valuesList() : "choose",
    anchorEl: anchorEl,
    handleOpen: handleClickOpen,
    handleClose: handleClose,
    selection: reportWay,
    setSelection: setReportWay,
    items: options,
    wrapperStyles: {
      width: 120
    }
  });
};

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

  return __jsx(external_react_apollo_["ApolloConsumer"], null, client => __jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10,
      marginBottom: 10
    }
  }, __jsx(styledComponents["e" /* Dropdown */], {
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

const CreateTenant = () => {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: reportWay,
    1: setReportWay
  } = Object(external_react_["useState"])([]);
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])("paper");
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])(null);
  const {
    0: description,
    1: setDesc
  } = Object(external_react_["useState"])(null);
  const {
    0: owner_review,
    1: setOwnerReview
  } = Object(external_react_["useState"])(null);
  const {
    0: house,
    1: setHouse
  } = Object(external_react_["useState"])([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substr(0, 10);
  return __jsx(external_react_apollo_["Mutation"], {
    mutation: CREATE_TICKET_MUTATION,
    refetchQueries: [{
      query: LandlordTickets["a" /* GET_LANDLORD_TICKETS */]
    }],
    variables: {
      title,
      description,
      reported_way: reportWay.length > 0 ? reportWay[0].value : "",
      owner_review,
      houseId: house.length > 0 ? house[0].id : ""
    }
  }, (createTicket, {
    loading,
    error
  }) => __jsx("div", null, __jsx(ActionBtn, {
    onClick: handleClickOpen
  }, "Create Ticket"), __jsx(core_["Dialog"], {
    fullScreen: fullScreen,
    onClose: handleClose,
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
    color: "transparent",
    space: "space-between",
    customStyles: {
      paddingTop: 15,
      paddingBottom: 7,
      paddingRight: 10,
      paddingLeft: 20
    }
  }, __jsx(styledComponents["n" /* SubHeader */], null, " Create Ticket"), __jsx(CancelBtn, {
    onClick: handleClose
  }, "Cancel"))), __jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      await createTicket().then(res => {
        handleClose(); // console.log(res);
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
  }, __jsx(core_["DialogContent"], {
    dividers: scroll === "body",
    style: {
      flex: 1
    },
    classes: {
      root: classes.dialogContentStyle
    }
  }, __jsx("div", {
    style: {
      flex: 1,
      width: "100%"
    }
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Ticket Information")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    space: "space-between"
  }, __jsx(styledComponents["d" /* Container */], {
    flex: 0.7,
    customStyles: {
      paddingRight: 10
    },
    color: "transparent"
  }, __jsx(styledComponents["i" /* Input */], {
    placeholder: "Ticket title..",
    type: "text",
    value: title,
    onChange: e => setTitle(e.target.value)
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 0.3,
    customStyles: {
      paddingLeft: 10
    }
  })), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    flex: false,
    customStyles: {
      width: "100%"
    }
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, "Description"), __jsx("textarea", {
    type: "text",
    placeholder: "start typing here...",
    className: classes.inputStyle,
    value: description,
    onChange: e => setDesc(e.target.value)
  })), __jsx(styledComponents["d" /* Container */], {
    row: true,
    flex: 1,
    customStyles: {
      marginTop: 10
    },
    color: "transparent"
  }, __jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 0.5,
    color: "transparent",
    customStyles: {
      paddingRight: 5
    }
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 8,
      marginTop: 15
    }
  }, "Landlord Review")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    flex: false,
    customStyles: {
      width: "100%"
    }
  }, __jsx("textarea", {
    type: "text",
    placeholder: "start typing here...",
    className: classes.inputStyle,
    value: owner_review,
    onChange: e => setOwnerReview(e.target.value)
  }))), __jsx(styledComponents["d" /* Container */], {
    column: true,
    flex: 0.5,
    color: "transparent",
    customStyles: {
      paddingLeft: 5
    }
  }, __jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 8,
      marginTop: 15
    }
  }, "Agent Review")), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    flex: false,
    customStyles: {
      width: "100%"
    }
  }, __jsx("textarea", {
    type: "text",
    disabled: true,
    placeholder: "start typing here...",
    className: classes.inputStyle //   value={house_description}
    //   onChange={(e) => setHouseDesc(e.target.value)}

  })))), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    flex: 0
  }, __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      paddingRight: 5
    },
    flex: 0.3
  }, __jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent"
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 8,
      marginTop: 15
    }
  }, "Add House")), __jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true // space="space-between"
    ,
    color: "transparent"
  }, __jsx(Houses, {
    house: house,
    setHouse: setHouse
  }))), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      paddingRight: 5
    },
    flex: 0.3
  }, __jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent"
  }, __jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 8,
      marginTop: 15
    }
  }, "Reported way")), __jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true // space="space-between"
    ,
    color: "transparent"
  }, __jsx(Reported, {
    reportWay: reportWay,
    setReportWay: setReportWay
  })))), __jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    right: true,
    center: true,
    row: true,
    flex: false,
    customStyles: {
      paddingTop: 30,
      paddingBottom: 5
    }
  }, __jsx(styledComponents["l" /* PrimaryButton */], {
    type: "submit",
    customStyles: {
      pointerEvents: house.length <= 0 ? "none" : "auto",
      opacity: house.length <= 0 ? 0.5 : 1
    }
  }, loading ? "saving" : "Save Ticket"))))))));
};

/* harmony default export */ var CreateTicket = (CreateTenant);
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/queryComponents/SearchTicket.js
var SearchTicket_jsx = external_react_default.a.createElement;







const SearchBox = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SearchTicket__SearchBox",
  componentId: "oq8ihl-0"
})(["display:flex;flex-direction:row;align-items:center;padding-right:10px;background-color:white;height:32px;padding:0px 5px;min-width:150px;margin-left:7px;margin-right:10px;"]);
const SEARCH_TICKET_QUERY = external_graphql_tag_default.a`
  query SEARCH_TICKET_QUERY($searchTerm: String!) {
    searchUserTickets(searchTerm: $searchTerm) {
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

const AutoComplete = ({
  setFound,
  setLoading
}) => {
  const onChange = external_lodash_debounce_default()(async (e, client) => {
    setLoading(true);
    const res = await client.query({
      query: SEARCH_TICKET_QUERY,
      variables: {
        searchTerm: e.target.value
      }
    });
    const tickets = res.data.searchUserTickets;
    setFound(tickets);
    setLoading(false);
  }, 350);
  return SearchTicket_jsx(SearchBox, null, SearchTicket_jsx(external_react_apollo_["ApolloConsumer"], null, client => SearchTicket_jsx(styledComponents["m" /* SearchInput */], {
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

/* harmony default export */ var SearchTicket = (AutoComplete);
// CONCATENATED MODULE: ./components/Landlrd/tickets/AllTickets.js
var AllTickets_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const Tag = external_styled_components_default.a.div.withConfig({
  displayName: "AllTickets__Tag",
  componentId: "sc-193fov5-0"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 5px;"]);
const PageBtn = external_styled_components_default()(styledComponents["h" /* IconButton */]).withConfig({
  displayName: "AllTickets__PageBtn",
  componentId: "sc-193fov5-1"
})(["display:flex;justify-content:center;align-items:center;align-content:center;border:none;margin-right:5px;height:33px;width:33px;", ""], props => props.activeStyles);
const PAGINATION_QUERY = external_graphql_tag_default.a`
  query PAGINATION_QUERY {
    ticketsConnection {
      aggregate {
        count
      }
    }
  }
`;

const TicketsPagination = ({
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

  return AllTickets_jsx(external_react_apollo_["Query"], {
    query: PAGINATION_QUERY
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const count = data.ticketsConnection.aggregate.count;
      const pages = Math.ceil(count / config["b" /* perPage */]);
      let backDisabled = currentPage <= 1;
      let nextDisabled = currentPage >= pages;
      return AllTickets_jsx(styledComponents["d" /* Container */], {
        flex: 1,
        row: true,
        middle: true,
        customStyles: {
          paddingTop: 10,
          paddingBottom: 25
        }
      }, AllTickets_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleBack(),
        customStyles: {
          border: "1px solid #E1E1E1",
          marginRight: 10,
          height: 33,
          width: 33,
          pointerEvents: backDisabled ? "none" : "auto",
          opacity: backDisabled ? 0.6 : 1.0
        }
      }, AllTickets_jsx(KeyboardArrowLeft_default.a, {
        style: {
          fontSize: 25
        }
      })), [...Array(pages)].map((num, i) => {
        let index = i + 1;
        return AllTickets_jsx(PageBtn, {
          key: i,
          onClick: () => {
            setCurrentPage(index);
            setSkip(index);
          },
          activeStyles: {
            backgroundColor: index === currentPage ? "#E1E1E1" : "transparent",
            pointerEvents: index === currentPage ? "none" : "auto"
          }
        }, AllTickets_jsx("span", null, index));
      }), AllTickets_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleNext(),
        customStyles: {
          border: "1px solid #E1E1E1",
          height: 33,
          width: 33,
          marginLeft: 5,
          pointerEvents: nextDisabled ? "none" : "auto",
          opacity: nextDisabled ? 0.6 : 1.0
        }
      }, AllTickets_jsx(KeyboardArrowRight_default.a, {
        style: {
          fontSize: 25
        }
      })));
    }

    return null;
  });
};

const AllTickets = (_ref) => {
  let {
    tickets,
    setSkip
  } = _ref,
      other = _objectWithoutProperties(_ref, ["tickets", "setSkip"]);

  const [ticket, setTicket] = external_react_default.a.useState({});
  const [list, setList] = external_react_default.a.useState(true);
  const [openTicket, setOpenTicket] = external_react_default.a.useState(false);
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [foundTickets, setFound] = external_react_default.a.useState(null);

  const handleClickOpen = ticket => {
    setTicket(ticket);
    setOpenTicket(true);
  };

  const handleClose = () => {
    setOpenTicket(false);
    setTicket({});
  };

  console.log(tickets);
  return AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      paddingTop: 10,
      paddingLeft: 30,
      paddingRight: 30
    }
  }, AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    customStyles: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }, tickets && tickets.length > 0 && AllTickets_jsx(TicketsPagination, {
    setSkip: setSkip
  }), AllTickets_jsx(SearchTicket, {
    setLoading: setLoading,
    setFound: setFound
  }), AllTickets_jsx(CreateTicket, null)), AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    customStyles: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }, AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.1,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 14
    }
  }, "No.")), AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 14
    }
  }, "Date")), AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, "Title")), AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, "House")), AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, "Status")), AllTickets_jsx(styledComponents["d" /* Container */], {
    center: true,
    row: true,
    right: true,
    flex: 0.1,
    color: "transparent"
  }, AllTickets_jsx(styledComponents["p" /* Text */], {
    customStyles: {
      fontSize: 15
    }
  }, "Actions"))), foundTickets === null && AllTickets_jsx(external_react_default.a.Fragment, null, AllTickets_jsx(styledComponents["d" /* Container */], {
    customStyles: {
      paddingTop: 10,
      flexDirection: !list ? "row" : "column"
    }
  }, tickets && tickets.map((issue, i) => {
    let num = i + 1;
    return AllTickets_jsx(SingleTicket["a" /* default */], {
      list: list,
      key: issue.id,
      num: num,
      ticket: issue,
      handleClose: handleClose,
      handleOpen: handleClickOpen
    });
  })), tickets && tickets.length <= 0 && AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    center: true,
    middle: true,
    customStyles: {
      minHeight: 300
    }
  }, AllTickets_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      marginBottom: 20
    }
  }, "No Tenants found?"), AllTickets_jsx(PersonPin_default.a, {
    style: {
      fontSize: 100,
      color: "#1C2833",
      marginBottom: 20,
      marginTop: 20
    }
  }), AllTickets_jsx(styledComponents["b" /* CaptionText */], null, "Try to create one Tenant"))), foundTickets !== null && AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      width: "100%",
      marginTop: 15
    }
  }, foundTickets.map((issue, i) => {
    let num = i + 1;
    return AllTickets_jsx(SingleTicket["a" /* default */], {
      list: list,
      key: issue.id,
      num: num,
      ticket: issue,
      handleClose: handleClose,
      handleOpen: handleClickOpen
    });
  })), foundTickets !== null && foundTickets.length === 0 && AllTickets_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    middle: true,
    center: true,
    customStyles: {
      flexWrap: "wrap",
      marginTop: 15
    }
  }, AllTickets_jsx(styledComponents["n" /* SubHeader */], null, "No Tickets Found")));
};

/* harmony default export */ var tickets_AllTickets = __webpack_exports__["b"] = (AllTickets);


/***/ }),

/***/ "7j7N":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBRIGFDhx0PApAAADQElEQVRo3u2ZzUtUURjGf3eMwcwCcZNpYZAuSshlCxsc+gNMd2GRiwwUnWoT6dqJQs0MwyBiaiGBYUJURi4CBd2lkwrSIkhR2/iFOqOgc1p4vN5p7tw7M3fG0Zx3NnPf5z3vec57Pu7HA9HYVSZY4TMFumghfawwRllUOUMsjRs8pRp7CNJIAIFAME9JCFrCgkQDNISgR6njBVUcMSfQK9OMkBtE67n0b/98lAe1qsAfhHdg06B5eKW/D8W4+1JNkimKpDedHunrx8EsAsEmtWqrWjYRCGZx0C8je0iXaBHTmqxXjAnUIBCMso5AsEgpkMWgbNyFHchnUl43oaDglleT5AN2uuT1AFmAkyUEAr+sQq0xgXoEglZKWUQgWKeeCZmwRS1fNsPS58Ej/w2TLVGFZukbxyWHsoCDdgSC+sgIwAV+awoX4H5QXDrvgub8AxlBuIstDTrDRYiWAOQwIhNscC0kMo1OtQOPzuouV5flGKchHAGjbTHHZR7gZIpHeEPQLWoY5Cbwmrc6rXu5RAN5fOMxq0Rs2grE23QrYIstV/wsRSBFYJ8SUKLM8v9VIEVgD838GS2DKo4bRgwylEgCD7ljErHBWeZiJWA+BeZbUrGybc0r0MgvcgzwTb4wm0gCa7THnt7ckr4L9imBw3QvMF+Ex6giM8bsq3jwWSXgNj2IjOwc94wDEj0FwiwgsoPoVIzdz/DKOgEfzxJQGdWSvgtSBJJOQH8Rao/iTG5xMsbsf3jJWiwEtObGZWGA+dw1DjCfgoCF7mHLLCCSg+gnJ2Lsfpk31gn46bRUAxNL+i5IEdhLArq35kNVgYNEIDGP5ak1cBAJZOJmiG6Kw+DX6ecrlWHQYroZwq2+1pg+osPO5/rtF/IcvlsQLHZ1tHHOAPAkcsWkHTgfV8mmOFoCDilDruNiXKZpjli0alHHXqfqb05aIyGwLdt5ZbMlnEAWA2FkOzcKCk2Gst2u/jaKQFBjTMChKdx03ITLKU1Wh9ky3JFuveRpvDY6gubcT0VQq3J8/0i3aRo0V45e8N6se7BRSRu3dcTrBlW8XtAVr+fVBdsYgtqppo1Kq+dOGT9Y5iOFumgBn1jGG518/xeFQbhMo4Rb5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0xOFQwNjoyMDo1NiswMDowMBUa4gYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMThUMDY6MjA6NTYrMDA6MDBkR1q6AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "7nhY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ "7pUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
const formatDate = date => {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var currentDate = new Date();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  return monthNames[month] + " " + pad(date) + ", " + year;
};

function pad(n) {
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

/***/ "BJfW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SingleBed");

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

/***/ "DRbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KSRF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6L5Y");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tdHr");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("W/Kq");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YZXy");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("LVbA");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("9qvJ");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _queryComponents_landlord_LandlordTenants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("flkU");
/* harmony import */ var _tenants_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("je9M");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
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
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardWrapper",
  componentId: "sc-1cxgd1s-0"
})(["display:flex;flex-direction:column;height:270px;min-width:220px;margin:0px 5px 30px 5px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__Tag",
  componentId: "sc-1cxgd1s-1"
})(["flex:1;align-items:center;justify-content:center;border-radius:10px;padding:5px;margin-right:5px;"]);
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardHeader",
  componentId: "sc-1cxgd1s-2"
})(["direction:flex;flex-direction:column;width:100%;padding:0px 15px 10px 15px;background-color:#f7f9f9;"]);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardContent",
  componentId: "sc-1cxgd1s-3"
})(["direction:flex;flex-direction:column;flex:1;width:100%;background-color:transparent;align-items:center;padding:15px 0px;position:relative;"]);
const CardActions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"]).withConfig({
  displayName: "TenantCard__CardActions",
  componentId: "sc-1cxgd1s-4"
})(["display:flex;flex-direction:row;width:100%;position:absolute;min-height:40px;background-color:transparent;bottom:0;"]);
const CancelBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryButton */ "l"]).withConfig({
  displayName: "TenantCard__CancelBtn",
  componentId: "sc-1cxgd1s-5"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const DELETE_TENANT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default.a`
  mutation DELETE_TENANT_MUTATION($id: ID!) {
    deleteTenant(id: $id) {
      id
    }
  }
`;
const Transition = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Slide"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

const DeleteTenant = ({
  tenant
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

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
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(DELETE_TENANT_MUTATION, {
    variables: {
      id: tenant.id
    },
    refetchQueries: [{
      query: _queryComponents_landlord_LandlordTenants__WEBPACK_IMPORTED_MODULE_13__[/* GET_LANDLORD_TENANTS */ "a"]
    }, {
      query: _tenants_index__WEBPACK_IMPORTED_MODULE_14__[/* PAGINATION_QUERY */ "a"]
    }],
    onCompleted: onCompletion
  });
  return __jsx("div", {
    style: {
      flex: 1,
      height: "100%"
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    flex: 1,
    column: true,
    color: "transparent",
    customStyles: {
      height: "100%",
      borderTop: `0.5px solid #ECF0F1`,
      borderRight: `0.25px solid #ECF0F1`
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CommandButton */ "c"], {
    type: "button",
    onClick: () => {
      handleClickOpen();
    }
  }, "Delete")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Dialog"], {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogTitle"], {
    id: "alert-dialog-slide-title",
    style: {
      fontSize: 20
    }
  }, "You are about to delete this Tenant?"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogContent"], null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 15,
      marginBottom: 15
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubText */ "o"], {
    customStyles: {
      marginRight: 10
    }
  }, "Tenant: "), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: 17
    }
  }, tenant.firstName))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["DialogActions"], null, __jsx(CancelBtn, {
    onClick: () => {
      handleClose();
    }
  }, "Cancel"), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* PrimaryButton */ "l"], {
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
  return __jsx(CardWrapper, null, __jsx(CardHeader, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
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
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: 22,
      marginRight: 7,
      color: "orange"
    }
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], null, houseId !== null && houseId.house_heading)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    row: true,
    center: true,
    right: true,
    color: "transparent",
    flex: 0.3,
    customStyles: {
      padding: "10px 0px"
    }
  }, tenant.isActive && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    style: {
      backgroundColor: "#52BE80",
      height: 25,
      width: 25
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "white",
    style: {
      fontSize: 15
    }
  }))))), __jsx(CardContent, null, tenant.profileImage !== null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    src: tenant.profileImage,
    className: classes.small
  }), tenant.profileImage === null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
    className: classes.small
  }, tenant.firstName.charAt(0) + tenant.lastName.charAt(0)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* SubText */ "o"], {
    customStyles: {
      marginBottom: 2
    }
  }, tenant.firstName + " " + tenant.lastName), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      color: "blue",
      marginBottom: 5
    }
  }, tenant.comm_email), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CaptionText */ "b"], {
    customStyles: {
      marginBottom: 3
    }
  }, tenant.tel_no), __jsx(CardActions, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    column: true,
    flex: 0.5,
    color: "transparent"
  }, __jsx(DeleteTenant, {
    tenant: tenant
  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "d"], {
    column: true,
    flex: 0.5,
    color: "transparent",
    customStyles: {
      // height: "100%",
      borderTop: `0.5px solid #ECF0F1`,
      borderRight: `0.25px solid #ECF0F1`
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "/"
  }, __jsx("a", {
    style: {
      flex: 1,
      height: "100%"
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_4__[/* CommandButton */ "c"], {
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

/***/ "LVbA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "Mx5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/queryComponents/User.js
var User = __webpack_require__("mivZ");

// EXTERNAL MODULE: ./components/Page.js + 1 modules
var components_Page = __webpack_require__("F1wk");

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");

// EXTERNAL MODULE: external "@material-ui/icons/Person"
var Person_ = __webpack_require__("Shq7");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: ./public/static/HAS.png
var HAS = __webpack_require__("Np96");
var HAS_default = /*#__PURE__*/__webpack_require__.n(HAS);

// EXTERNAL MODULE: ./public/static/rene.jpeg
var rene = __webpack_require__("vf4I");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

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
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@material-ui/icons/PowerSettingsNew"
var PowerSettingsNew_ = __webpack_require__("7nhY");
var PowerSettingsNew_default = /*#__PURE__*/__webpack_require__.n(PowerSettingsNew_);

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

/***/ "Shq7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

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

/***/ "WpHN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "Y1pe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteOutline");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6L5Y");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cVmi");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tdHr");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Adjust__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zl4g");
/* harmony import */ var _material_ui_icons_Adjust__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Adjust__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WpHN");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jRhr");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Kitchen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6JG2");
/* harmony import */ var _material_ui_icons_Kitchen__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Kitchen__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_dateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7pUr");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("j08L");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("EtfT");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("W/Kq");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _TicketItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("aFMR");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
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
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"]).withConfig({
  displayName: "SingleTicket__Wrapper",
  componentId: "sc-1q72bwr-0"
})(["flex:1;flex-direction:column;height:100%;padding:0px;background-color:white;"]);
const ActionBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* ActionButton */ "a"]).withConfig({
  displayName: "SingleTicket__ActionBtn",
  componentId: "sc-1q72bwr-1"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* ActionButton */ "a"]).withConfig({
  displayName: "SingleTicket__CloseBtn",
  componentId: "sc-1q72bwr-2"
})(["z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";", ""], ({
  theme
}) => theme.bgPrimary, props => props.customStyles);
const AddBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* ActionButton */ "a"]).withConfig({
  displayName: "SingleTicket__AddBtn",
  componentId: "sc-1q72bwr-3"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.lightGrey);
const CancelBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* PrimaryButton */ "l"]).withConfig({
  displayName: "SingleTicket__CancelBtn",
  componentId: "sc-1q72bwr-4"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SingleTicket__Tag",
  componentId: "sc-1q72bwr-5"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "SingleTicket__Form",
  componentId: "sc-1q72bwr-6"
})(["display:flex;flex-direction:row;padding:0px 40px;"]);
const DateWrapperStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"]).withConfig({
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
  return __jsx(DateWrapperStyles, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubHeader */ "n"], {
    customStyles: {
      fontWeight: "500"
    }
  }, newDate), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], {
    customStyles: {
      fontSize: 14,
      marginRight: 5
    }
  }, nth(newDate)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubHeader */ "n"], {
    customStyles: {
      fontWeight: "500"
    }
  }, monthNames[month]));
};

const SingleTicket = ({
  ticket,
  num
}) => {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["useTheme"])();
  const [list, setList] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [scroll, setScroll] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("paper");
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

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
  return __jsx("div", {
    style: {
      flex: 0
    }
  }, __jsx(_TicketItem__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
    list: true,
    ticket: ticket,
    onClick: handleOpen,
    num: num
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Dialog"], {
    onClose: handleClose,
    classes: {
      paper: classes.dialogPaper
    },
    open: open,
    scroll: scroll
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["DialogTitle"], {
    id: "scroll-dialog-title",
    classes: {
      root: classes.dialogActionStyle
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
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
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    row: true,
    center: true,
    flex: 1,
    color: "transparent"
  }, __jsx(DateHeader, {
    data: ticket.createdAt
  })), __jsx(CloseBtn, {
    onClick: () => handleClose()
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      fontSize: 23
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["DialogContent"], {
    classes: {
      root: classes.dialogContentStyle
    }
  }, __jsx(Wrapper, null, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    column: true,
    customStyles: {
      paddingTop: 25
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0,
    middle: true,
    center: true,
    column: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Avatar"], {
    style: {
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      backgroundColor: "#fff",
      marginBottom: 5
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: 16
    }
  }, houseId.house_heading.charAt(0))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], {
    customStyles: {
      color: "#000",
      marginBottom: 5
    }
  }, reported_by.user_name), reported_by.userType.map((curr, i) => __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* NormalText */ "j"], {
    key: i,
    customStyles: {
      color: "gray",
      marginBottom: 5
    }
  }, curr))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.35,
    column: true,
    customStyles: {
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 15
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    column: true,
    color: "white",
    depth: 4,
    customStyles: {
      padding: 15,
      marginBottom: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubHeader */ "n"], null, "\u201C"), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, ticket.description))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    row: true,
    center: true,
    middle: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
    style: {
      marginTop: 10,
      width: "40%"
    }
  }))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0,
    column: true,
    customStyles: {
      paddingLeft: 25,
      paddingRight: 15,
      marginBottom: 10,
      paddingTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubHeader */ "n"], {
    customStyles: {
      fontSize: 12,
      color: "#17202A"
    }
  }, "Details"), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0,
    row: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5,
    column: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    row: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5,
    row: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, "Created")), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, Object(_lib_dateFormat__WEBPACK_IMPORTED_MODULE_9__[/* formatDate */ "a"])(ticket.reported_date)))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    row: true,
    customStyles: {
      paddingTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5,
    row: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, "Reported way")), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, ticket.reported_way))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    row: true,
    customStyles: {
      paddingTop: 10
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5,
    row: true
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, "House")), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 0.5
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* SubText */ "o"], null, houseId.house_heading))))))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["DialogActions"], {
    className: classes.dialogActions
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[/* Container */ "d"], {
    flex: 1,
    row: true,
    right: true,
    center: true,
    customStyles: {
      padding: 10
    }
  }, "dfsdsdf"))));
};

/* harmony default export */ __webpack_exports__["a"] = (SingleTicket);
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

/***/ "aFMR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6L5Y");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tdHr");
/* harmony import */ var _public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_sandy_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rYcJ");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("W/Kq");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_dateFormat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7pUr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: 3
  }
}));
const TicketWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"]).withConfig({
  displayName: "TicketItem__TicketWrapper",
  componentId: "sc-53bb2i-0"
})(["display:flex;flex-direction:column;padding-top:10px;padding-left:15px;padding-right:15px;height:385px;min-width:320px;border:1px solid #d5d8dc;position:relative;margin-bottom:20px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"]).withConfig({
  displayName: "TicketItem__Wrapper",
  componentId: "sc-53bb2i-1"
})(["display:flex;flex-direction:row;position:relative;border-radius:2px;padding:12px 15px;margin-bottom:8px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "TicketItem__Tag",
  componentId: "sc-53bb2i-2"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:5px;padding:2px 15px;", ""], props => props.customStyles);
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"]).withConfig({
  displayName: "TicketItem__CardHeader",
  componentId: "sc-53bb2i-3"
})(["direction:flex;flex-direction:row;width:100%;align-items:center;background-color:transparent;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"]).withConfig({
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
  return __jsx(Wrapper, other, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    flex: 0.1,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "p"], {
    customStyles: {
      fontSize: 14
    }
  }, num)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "p"], {
    customStyles: {
      fontSize: 14
    }
  }, Object(_lib_dateFormat__WEBPACK_IMPORTED_MODULE_8__[/* formatDate */ "a"])(ticket.createdAt))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "p"], {
    customStyles: {
      fontSize: 15
    }
  }, ticket.title)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "p"], {
    customStyles: {
      fontSize: 15
    }
  }, houseId.house_heading)), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    flex: 0.2,
    color: "transparent"
  }, ticket.isClosed ? __jsx(Tag, {
    customStyles: {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["fade"])("#A9DFBF", 0.3)
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* CaptionText */ "b"], {
    customStyles: {
      color: "#212F3D"
    }
  }, "closed")) : __jsx(Tag, {
    customStyles: {
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["fade"])("#A9DFBF", 0.3)
    }
  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* CaptionText */ "b"], {
    customStyles: {
      color: "#212F3D"
    }
  }, "open"))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "d"], {
    center: true,
    row: true,
    right: true,
    flex: 0.1,
    color: "transparent"
  }, __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6___default.a, null)));
};

/* harmony default export */ __webpack_exports__["a"] = (TicketItem);
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

/***/ "hwPB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_LANDLORD_TICKETS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UIRo");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GET_LANDLORD_TICKETS = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query GET_LANDLORD_TICKETS($skip:Int=0,$first:Int=${_config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]}) {
    getLandlordTickets(skip:$skip, first:$first,orderBy:createdAt_DESC) {
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
      }
      createdAt
    }
  }
`;

const LandlordTickets = props => {
  const [skipItems, setSkip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);
  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: GET_LANDLORD_TICKETS,
    variables: {
      skip: skipItems * _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"] - _config__WEBPACK_IMPORTED_MODULE_3__[/* perPage */ "b"]
    }
  }), payload => props.children(payload, setSkip));
};

/* harmony default export */ __webpack_exports__["b"] = (LandlordTickets);


/***/ }),

/***/ "iP/l":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Bathtub");

/***/ }),

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "ioFY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "jRhr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ "je9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PAGINATION_QUERY; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

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
// EXTERNAL MODULE: ./components/Landlrd/HouseItem.js
var HouseItem = __webpack_require__("+jd2");

// EXTERNAL MODULE: ./components/Landlrd/TenantCard.js
var TenantCard = __webpack_require__("KSRF");

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");
var PersonPin_default = /*#__PURE__*/__webpack_require__.n(PersonPin_);

// EXTERNAL MODULE: ./public/static/126.gif
var _126 = __webpack_require__("TjsY");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: external "@material-ui/icons/AddPhotoAlternate"
var AddPhotoAlternate_ = __webpack_require__("vBgU");
var AddPhotoAlternate_default = /*#__PURE__*/__webpack_require__.n(AddPhotoAlternate_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/queryComponents/Countries.js
var Countries = __webpack_require__("kseb");

// EXTERNAL MODULE: ./components/queryComponents/Provinces.js
var Provinces = __webpack_require__("YbdR");

// EXTERNAL MODULE: ./components/queryComponents/Districts.js
var Districts = __webpack_require__("WRcy");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTenants.js
var LandlordTenants = __webpack_require__("flkU");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordHouses.js
var LandlordHouses = __webpack_require__("bzWV");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

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

/***/ "sQtf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PAGINATION_QUERY; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: ./components/styledComponents/index.js + 8 modules
var styledComponents = __webpack_require__("6L5Y");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/queryComponents/SearchHouses.js
var __jsx = external_react_default.a.createElement;







const SearchBox = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "SearchHouses__SearchBox",
  componentId: "sc-713g5w-0"
})(["display:flex;flex-direction:row;align-items:center;padding-right:10px;background-color:white;height:32px;padding:0px 5px;min-width:150px;margin-left:7px;margin-right:10px;"]);
const SEARCH_HOUSE_QUERY = external_graphql_tag_default.a`
  query SEARCH_HOUSE_QUERY($searchTerm: String!) {
    searchUserHouses(searchTerm: $searchTerm) {
      id
      house_heading
      house_no
      house_status
      parking
      no_bedrooms
      no_bathrooms
      appliances
      flooring
      live_space
      ext_ft
      utilities
      no_annex
      dinning_room

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

const AutoComplete = ({
  setFound,
  setLoading
}) => {
  const onChange = external_lodash_debounce_default()(async (e, client) => {
    setLoading(true);
    const res = await client.query({
      query: SEARCH_HOUSE_QUERY,
      variables: {
        searchTerm: e.target.value
      }
    });
    const houses = res.data.searchUserHouses; // console.log(res);

    setFound(houses);
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

/* harmony default export */ var SearchHouses = (AutoComplete);
// EXTERNAL MODULE: ./components/Landlrd/HouseItem.js
var HouseItem = __webpack_require__("+jd2");

// EXTERNAL MODULE: external "@material-ui/icons/AddPhotoAlternate"
var AddPhotoAlternate_ = __webpack_require__("vBgU");
var AddPhotoAlternate_default = /*#__PURE__*/__webpack_require__.n(AddPhotoAlternate_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/queryComponents/HouseTypes.js
var HouseTypes = __webpack_require__("LBc1");

// EXTERNAL MODULE: ./components/queryComponents/Countries.js
var Countries = __webpack_require__("kseb");

// EXTERNAL MODULE: ./components/queryComponents/Provinces.js
var Provinces = __webpack_require__("YbdR");

// EXTERNAL MODULE: ./components/queryComponents/Districts.js
var Districts = __webpack_require__("WRcy");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordTenants.js
var LandlordTenants = __webpack_require__("flkU");

// EXTERNAL MODULE: ./components/queryComponents/landlord/LandlordHouses.js
var LandlordHouses = __webpack_require__("bzWV");

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleOutline"
var AddCircleOutline_ = __webpack_require__("EtfT");
var AddCircleOutline_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutline_);

// CONCATENATED MODULE: ./components/Landlrd/houses/create/CreateHouse.js
var CreateHouse_jsx = external_react_default.a.createElement;




















const useStyles = Object(styles_["makeStyles"])(theme => ({
  dialogPaper: {
    height: 700,
    minWidth: 900,
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
  displayName: "CreateHouse__ActionBtn",
  componentId: "e7caw8-0"
})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:", ";color:white;&:hover{color:#d1f2eb;}"], ({
  theme
}) => theme.btnPrimary);
const CloseBtn = external_styled_components_default()(styledComponents["a" /* ActionButton */]).withConfig({
  displayName: "CreateHouse__CloseBtn",
  componentId: "e7caw8-1"
})(["position:absolute;top:0;right:0;z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:", ";"], ({
  theme
}) => theme.bgPrimary);
const CancelBtn = external_styled_components_default()(styledComponents["l" /* PrimaryButton */]).withConfig({
  displayName: "CreateHouse__CancelBtn",
  componentId: "e7caw8-2"
})(["border:none;color:", ";background-color:transparent;&:hover{background-color:", ";}"], ({
  theme
}) => theme.primaryDark, ({
  theme
}) => theme.lightGrey);
const UploadBtn = external_styled_components_default()(styledComponents["k" /* OutlinedButton */]).withConfig({
  displayName: "CreateHouse__UploadBtn",
  componentId: "e7caw8-3"
})(["display:flex;height:60px;width:100%;border:", ";"], ({
  theme
}) => `1px dashed ${theme.btnPrimary}`);
const CREATE_HOUSE_MUTATION = external_graphql_tag_default.a`
  mutation CREATE_HOUSE_MUTATION(
    $house_heading: String!
    $house_no: String!
    $house_description: String!
    $house_type: ID
    $parking: Int
    $no_bedrooms: Int
    $no_bathrooms: Int
    $flooring: String
    $appliances: [Appliances]
    $utilities: [Utilities]
    $ext_ft: [Ext_features]
    $profileImage: String
    $countryId: ID
    $provinceId: ID
    $districtId: ID
  ) {
    createHouse(
      house_heading: $house_heading
      house_no: $house_no
      house_description: $house_description
      house_type: $house_type
      parking: $parking
      no_bedrooms: $no_bedrooms
      no_bathrooms: $no_bathrooms
      flooring: $flooring
      appliances: $appliances
      utilities: $utilities
      ext_ft: $ext_ft
      profileImage: $profileImage
      countryId: $countryId
      provinceId: $provinceId
      districtId: $districtId
    ) {
      id
      house_heading
      house_description
      house_no
    }
  }
`;

const HouseTypesList = ({
  house_type,
  setHouseType
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function handleClickOpen(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: HouseTypes["a" /* GET_HOUSE_TYPES */]
    });
    const {
      houseTypes
    } = res.data;
    setOptions(changeObj(houseTypes));
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.house_type
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateHouse_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
    title: house_type.length > 0 ? house_type[0].value : "choose",
    anchorEl: anchorEl,
    handleOpen: e => handleClickOpen(e, client),
    handleClose: handleClose,
    selection: house_type,
    setSelection: setHouseType,
    items: options,
    wrapperStyles: {
      width: 150
    }
  }));
};

const ApplianceList = ({
  list,
  setList
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])([{
    id: 1,
    value: "Dishwasher"
  }, {
    id: 2,
    value: "Refrigrator"
  }, {
    id: 3,
    value: "Microwave"
  }, {
    id: 4,
    value: "Garbage_disposal"
  }, {
    id: 5,
    value: "Oven"
  }]);

  const handleClickOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const valuesList = () => {
    return CreateHouse_jsx("div", null, list.map(lst => CreateHouse_jsx("span", {
      key: lst.id
    }, lst.value + ", ")));
  };

  return CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
    title: list.length > 0 ? valuesList() : "choose",
    anchorEl: anchorEl,
    handleOpen: handleClickOpen,
    multiSelect: true,
    handleClose: handleClose,
    selection: list,
    setSelection: setList,
    items: options,
    wrapperStyles: {
      width: 200
    }
  });
};

const UtilitiesList = ({
  utilities,
  setUtilities
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])([{
    id: 1,
    value: "Internet"
  }, {
    id: 2,
    value: "TV"
  }, {
    id: 3,
    value: "Heater"
  }]);

  const handleClickOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const valuesList = () => {
    return CreateHouse_jsx("div", null, utilities.map(lst => CreateHouse_jsx("span", {
      key: lst.id
    }, lst.value + ", ")));
  };

  return CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
    title: utilities.length > 0 ? valuesList() : "choose",
    anchorEl: anchorEl,
    handleOpen: handleClickOpen,
    multiSelect: true,
    handleClose: handleClose,
    selection: utilities,
    setSelection: setUtilities,
    items: options,
    wrapperStyles: {
      width: 200
    }
  });
};

const ExtDetails = ({
  ext_details,
  setExtDetails
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])([{
    id: 1,
    value: "Toilet"
  }, {
    id: 2,
    value: "Garden"
  }, {
    id: 3,
    value: "Fenced_yard"
  }, {
    id: 4,
    value: "Balcony"
  }]);

  const handleClickOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const valuesList = () => {
    return CreateHouse_jsx("div", null, ext_details.map(lst => CreateHouse_jsx("span", {
      key: lst.id
    }, lst.value + ", ")));
  };

  return CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
    title: ext_details.length > 0 ? valuesList() : "choose",
    anchorEl: anchorEl,
    handleOpen: handleClickOpen,
    multiSelect: true,
    handleClose: handleClose,
    selection: ext_details,
    setSelection: setExtDetails,
    items: options,
    wrapperStyles: {
      width: 200
    }
  });
};

const CreateHouse_Countries = ({
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

  return CreateHouse_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10
    }
  }, CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
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

const CreateHouse_Provinces = ({
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

  return CreateHouse_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      pointerEvents: country.length === 0 ? "none" : "auto",
      marginRight: 10
    }
  }, CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
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

const CreateHouse_Districts = ({
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

  return CreateHouse_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      pointerEvents: province.length === 0 ? "none" : "auto"
    }
  }, CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
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

const Tenants = ({
  tenant,
  setTenant
}) => {
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const {
    0: tenantsList,
    1: setTenantsList
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  async function getTenants(event, client) {
    setLoading(true);
    setAnchorEl(event.currentTarget);
    const res = await client.query({
      query: LandlordTenants["a" /* GET_LANDLORD_TENANTS */]
    });
    const tenants = res.data.getLandlordTenants;
    setTenantsList(changeObj(tenants));
  }

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      const newItem = {
        id: item.id,
        value: item.firstName
      };
      newArr.push(newItem);
    });
    return newArr;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return CreateHouse_jsx(external_react_apollo_["ApolloConsumer"], null, client => CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10
    }
  }, CreateHouse_jsx(styledComponents["e" /* Dropdown */], {
    title: tenant.length > 0 ? tenant[0].value : "Add Tenant",
    anchorEl: anchorEl,
    handleOpen: e => getTenants(e, client),
    handleClose: handleClose,
    selection: tenant,
    setSelection: setTenant,
    items: tenantsList,
    wrapperStyles: {
      width: 100
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

  return CreateHouse_jsx(external_react_default.a.Fragment, null, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      paddingTop: 10,
      paddingBottom: 5
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    middle: true,
    flex: 0,
    customStyles: {
      padding: 3,
      marginRight: 5
    }
  }, CreateHouse_jsx(AddPhotoAlternate_default.a, {
    style: {
      fontSize: 25
    }
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    center: true,
    color: "transparent"
  }, img_names.map((img, i) => CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    key: i,
    customStyles: {
      marginRight: 4,
      color: "black",
      fontSize: 13
    }
  }, img)))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      pointerEvents: loaded === 0 ? "none" : "auto"
    }
  }, CreateHouse_jsx(UploadBtn, {
    type: "button"
  }, CreateHouse_jsx(styledComponents["i" /* Input */], {
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

const CreateHouse = () => {
  const classes = useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])("paper");
  const {
    0: isUploading,
    1: setIsUploading
  } = Object(external_react_["useState"])(false);
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: house_heading,
    1: setHouseHeading
  } = Object(external_react_["useState"])(null);
  const {
    0: house_type,
    1: setHouseType
  } = Object(external_react_["useState"])([]);
  const {
    0: house_no,
    1: setHouseNo
  } = Object(external_react_["useState"])(null);
  const {
    0: house_description,
    1: setHouseDesc
  } = Object(external_react_["useState"])(null);
  const {
    0: parking,
    1: setParking
  } = Object(external_react_["useState"])(null);
  const {
    0: no_bathrooms,
    1: setNoBathrooms
  } = Object(external_react_["useState"])(null);
  const {
    0: no_bedrooms,
    1: setNoBedrooms
  } = Object(external_react_["useState"])(null);
  const {
    0: flooring,
    1: setFloor
  } = Object(external_react_["useState"])(null);
  const {
    0: applianceList,
    1: setApplianceList
  } = Object(external_react_["useState"])([]);
  const {
    0: utilities,
    1: setUtilities
  } = Object(external_react_["useState"])([]);
  const {
    0: ext_details,
    1: setExtDetails
  } = Object(external_react_["useState"])([]);
  const {
    0: tenant,
    1: setTenant
  } = Object(external_react_["useState"])([]);
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
    0: street,
    1: setStreet
  } = Object(external_react_["useState"])("");
  const {
    0: profileImage,
    1: setProfile
  } = Object(external_react_["useState"])(null);
  const {
    0: images,
    1: setImages
  } = Object(external_react_["useState"])([]);

  const changeObj = arr => {
    let newArr = [];
    arr.forEach((item, i) => {
      newArr.push(item.value);
    });
    return newArr;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHouseHeading(null);
    setHouseType([]);
    setHouseNo(null);
    setHouseDesc(null);
    setParking(null);
    setNoBathrooms(null);
    setNoBedrooms(null);
    setFloor(null);
    setApplianceList([]);
    setUtilities([]);
    setExtDetails([]);
    setTenant([]);
    setCountry([]);
    setDistrict([]);
    setProvince([]);
    setStreet("");
    setProfile(null);
    setImages([]);
  };

  return CreateHouse_jsx(external_react_apollo_["Mutation"], {
    mutation: CREATE_HOUSE_MUTATION,
    refetchQueries: [{
      query: LandlordHouses["a" /* GET_USER_HOUSES */]
    }, {
      query: PAGINATION_QUERY
    }],
    variables: {
      house_heading,
      house_no,
      house_description,
      house_type: house_type.length > 0 ? house_type[0].id : "",
      parking: parseInt(parking),
      no_bedrooms: parseInt(no_bathrooms),
      no_bathrooms: parseInt(no_bedrooms),
      flooring,
      appliances: changeObj(applianceList),
      utilities: changeObj(utilities),
      ext_ft: changeObj(ext_details),
      profileImage,
      countryId: country.length > 0 ? country[0].id : "",
      provinceId: province.length > 0 ? province[0].id : "",
      districtId: district.length > 0 ? district[0].id : ""
    }
  }, (createHouse, {
    loading,
    error
  }) => CreateHouse_jsx("div", null, CreateHouse_jsx(ActionBtn, {
    onClick: handleClickOpen // customStyles={{ backgroundColor: "blue" }}

  }, CreateHouse_jsx(AddCircleOutline_default.a, {
    style: {
      fontSize: 23,
      marginRight: 5
    }
  }), "Create House"), CreateHouse_jsx(core_["Dialog"], {
    fullScreen: fullScreen,
    onClose: handleClose,
    classes: {
      paper: classes.dialogPaper
    },
    "aria-labelledby": "customized-dialog-title",
    open: open,
    scroll: scroll
  }, CreateHouse_jsx(core_["DialogTitle"], {
    id: "scroll-dialog-title",
    classes: {
      root: classes.dialogActionStyle
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
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
  }, CreateHouse_jsx(styledComponents["n" /* SubHeader */], null, " Create House"), CreateHouse_jsx(CancelBtn, {
    onClick: handleClose
  }, "Cancel"))), CreateHouse_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      await createHouse().then(res => {
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
  }, CreateHouse_jsx(core_["DialogContent"], {
    dividers: scroll === "body",
    style: {
      flex: 0.6
    },
    classes: {
      root: classes.dialogContentStyle
    }
  }, CreateHouse_jsx("div", null, CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "House Details")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    row: true,
    space: "space-between"
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    customStyles: {
      paddingRight: 10
    },
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["i" /* Input */], {
    label: "Title",
    placeholder: "eg. desired name",
    type: "text",
    value: house_heading,
    onChange: e => setHouseHeading(e.target.value)
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    flex: 1,
    customStyles: {
      paddingLeft: 10
    }
  }, CreateHouse_jsx(styledComponents["i" /* Input */], {
    label: "House number",
    placeholder: "eg. #A457",
    type: "text",
    value: house_no,
    onChange: e => setHouseNo(e.target.value)
  }))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    column: true,
    flex: false,
    customStyles: {
      width: "100%"
    }
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, "Description"), CreateHouse_jsx("textarea", {
    type: "text",
    placeholder: "start typing here...",
    className: classes.inputStyle,
    value: house_description,
    onChange: e => setHouseDesc(e.target.value)
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginTop: 20,
      marginBottom: 10
    }
  }, "Facts and Features")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    space: "space-between",
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0.3,
    column: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, "House type"), CreateHouse_jsx(HouseTypesList, {
    house_type: house_type,
    setHouseType: setHouseType
  })), CreateHouse_jsx(styledComponents["i" /* Input */], {
    label: "year built",
    type: "date",
    placeholder: "eg.2011",
    style: {
      width: 150
    } // value={house_heading}
    // onChange={e => {
    //   this.setState({ house_heading: e.target.value });
    // }}

  }), CreateHouse_jsx(styledComponents["i" /* Input */], {
    label: "Parking",
    placeholder: "eg. 3 cars",
    type: "number",
    style: {
      width: 100
    },
    value: parking,
    onChange: e => setParking(e.target.value)
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Interior details")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent",
    customStyles: {
      marginBottom: 10
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      marginRight: 15
    }
  }, CreateHouse_jsx(styledComponents["q" /* TextInput */], {
    label: "no. bedrooms",
    placeholder: "0",
    type: "number",
    customStyles: {
      textAlign: "center",
      width: 50
    },
    row: true,
    value: no_bedrooms,
    onChange: e => setNoBedrooms(e.target.value)
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    customStyles: {
      marginRight: 15
    }
  }, CreateHouse_jsx(styledComponents["q" /* TextInput */], {
    label: "no. bathrooms",
    type: "number",
    placeholder: "0",
    row: true,
    customStyles: {
      textAlign: "center",
      width: 50
    },
    value: no_bathrooms,
    onChange: e => setNoBathrooms(e.target.value)
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["q" /* TextInput */], {
    label: "Flooring",
    placeholder: "eg. wooden floor",
    type: "text",
    row: true,
    customStyles: {
      width: 140
    },
    value: flooring,
    onChange: e => setFloor(e.target.value)
  }))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent",
    customStyles: {
      marginBottom: 15
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent",
    customStyles: {
      marginRight: 10
    }
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, "Appliances"), CreateHouse_jsx(ApplianceList, {
    list: applianceList,
    setList: setApplianceList
  })), CreateHouse_jsx(styledComponents["d" /* Container */], {
    column: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      marginBottom: 5,
      color: "#323130"
    }
  }, "Utilities"), CreateHouse_jsx(UtilitiesList, {
    utilities: utilities,
    setUtilities: setUtilities
  }))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Exterior details")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    space: "space-between",
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0.3,
    column: true,
    color: "transparent"
  }, CreateHouse_jsx(ExtDetails, {
    ext_details: ext_details,
    setExtDetails: setExtDetails
  }))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginBottom: 10
    }
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginTop: 20
    }
  }, "Location")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    row: true,
    color: "transparent",
    customStyles: {
      marginBottom: 15
    }
  }, CreateHouse_jsx(CreateHouse_Countries, {
    country: country,
    setCountry: setCountry
  }), CreateHouse_jsx(CreateHouse_Provinces, {
    country: country,
    province: province,
    setProvince: setProvince
  }), CreateHouse_jsx(CreateHouse_Districts, {
    district: district,
    province: province,
    setDistrict: setDistrict
  })))), CreateHouse_jsx("div", {
    style: {
      flex: 0.4,
      paddingBottom: 10
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    color: "white",
    customStyles: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10
    }
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Add House Tenant")), CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    space: "space-between",
    color: "transparent"
  }, CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0.3,
    column: true,
    color: "transparent"
  }, CreateHouse_jsx(Tenants, {
    tenant: tenant,
    setTenant: setTenant
  }))), CreateHouse_jsx(styledComponents["d" /* Container */], {
    flex: 0,
    row: true,
    center: true,
    color: "transparent",
    customStyles: {
      marginTop: 20
    }
  }, CreateHouse_jsx(styledComponents["b" /* CaptionText */], {
    customStyles: {
      color: "#323130",
      fontWeight: "600",
      marginBottom: 10
    }
  }, "Upload house images")), CreateHouse_jsx(UploadImageContainer, {
    isUploading: isUploading,
    setIsUploading: setIsUploading,
    profileImg: profileImage,
    setProfile: setProfile,
    images: images,
    setImages: setImages
  }), CreateHouse_jsx(styledComponents["d" /* Container */], {
    color: "transparent",
    right: true,
    center: true,
    row: true,
    flex: false,
    customStyles: {
      paddingTop: 30,
      paddingBottom: 5
    }
  }, isUploading ? CreateHouse_jsx(styledComponents["l" /* PrimaryButton */], {
    type: "submit",
    customStyles: {
      pointerEvents: isUploading ? "none" : "auto"
    }
  }, "Uploading..") : CreateHouse_jsx(styledComponents["l" /* PrimaryButton */], {
    type: "submit",
    customStyles: {
      pointerEvents: isUploading ? "none" : "auto"
    }
  }, loading ? "saving" : "Save House"))))))));
};

/* harmony default export */ var create_CreateHouse = (CreateHouse);
// EXTERNAL MODULE: external "@material-ui/icons/HomeWork"
var HomeWork_ = __webpack_require__("/Pzr");
var HomeWork_default = /*#__PURE__*/__webpack_require__.n(HomeWork_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowDropDown"
var ArrowDropDown_ = __webpack_require__("ioFY");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowLeft"
var KeyboardArrowLeft_ = __webpack_require__("DRbO");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft_);

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__("UIRo");

// EXTERNAL MODULE: ./public/static/126.gif
var _126 = __webpack_require__("TjsY");
var _126_default = /*#__PURE__*/__webpack_require__.n(_126);

// CONCATENATED MODULE: ./components/Landlrd/houses/index.js
var houses_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const SearchWrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "houses__SearchWrapper",
  componentId: "sc-1358onz-0"
})(["display:flex;width:100%;flex-direction:row;padding:20px 110px 10px 110px;"]);
const Wrapper = external_styled_components_default()(styledComponents["d" /* Container */]).withConfig({
  displayName: "houses__Wrapper",
  componentId: "sc-1358onz-1"
})(["display:flex;flex-direction:column;width:100%;padding-top:0px;padding-left:110px;padding-bottom:15px;padding-right:110px;"]);
const PageBtn = external_styled_components_default()(styledComponents["h" /* IconButton */]).withConfig({
  displayName: "houses__PageBtn",
  componentId: "sc-1358onz-2"
})(["display:flex;justify-content:center;align-items:center;align-content:center;border:none;margin-right:5px;height:33px;width:33px;", ""], props => props.activeStyles);
const PAGINATION_QUERY = external_graphql_tag_default.a`
  query PAGINATION_QUERY {
    housesConnection {
      aggregate {
        count
      }
    }
  }
`;

const HousesPagination = ({
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

  return houses_jsx(external_react_apollo_["Query"], {
    query: PAGINATION_QUERY
  }, ({
    data,
    loading,
    error
  }) => {
    if (data) {
      const count = data.housesConnection.aggregate.count;
      const pages = Math.ceil(count / config["b" /* perPage */]);
      let backDisabled = currentPage <= 1;
      let nextDisabled = currentPage >= pages;
      return houses_jsx(styledComponents["d" /* Container */], {
        flex: 0,
        row: true,
        middle: true,
        customStyles: {
          paddingTop: 10,
          paddingBottom: 25
        }
      }, houses_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleBack(),
        customStyles: {
          border: "1px solid #E1E1E1",
          marginRight: 10,
          height: 33,
          width: 33,
          pointerEvents: backDisabled ? "none" : "auto",
          opacity: backDisabled ? 0.6 : 1.0
        }
      }, houses_jsx(KeyboardArrowLeft_default.a, {
        style: {
          fontSize: 25
        }
      })), [...Array(pages)].map((num, i) => {
        let index = i + 1;
        return houses_jsx(PageBtn, {
          key: i,
          onClick: () => {
            setCurrentPage(index);
            setSkip(index);
          },
          activeStyles: {
            backgroundColor: index === currentPage ? "#E1E1E1" : "transparent",
            pointerEvents: index === currentPage ? "none" : "auto"
          }
        }, houses_jsx("span", null, index));
      }), houses_jsx(styledComponents["h" /* IconButton */], {
        onClick: () => handleNext(),
        customStyles: {
          border: "1px solid #E1E1E1",
          height: 33,
          width: 33,
          marginLeft: 5,
          pointerEvents: nextDisabled ? "none" : "auto",
          opacity: nextDisabled ? 0.6 : 1.0
        }
      }, houses_jsx(KeyboardArrowRight_default.a, {
        style: {
          fontSize: 25
        }
      })));
    }

    return null;
  });
};

const Houses = props => {
  const [showNumber, setNumber] = external_react_default.a.useState(10);
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [foundHouses, setFound] = external_react_default.a.useState(null);

  if (loading) {
    return houses_jsx(styledComponents["d" /* Container */], {
      flex: 1
    }, houses_jsx(SearchWrapper, null, houses_jsx(styledComponents["g" /* Header */], null, "Your Houses"), houses_jsx(styledComponents["d" /* Container */], {
      row: true,
      center: true,
      flex: 1,
      right: true
    }, houses_jsx(styledComponents["o" /* SubText */], null, "Search:"), houses_jsx(SearchHouses, {
      setLoading: setLoading,
      setFound: setFound
    }), houses_jsx(create_CreateHouse, null))), houses_jsx(Wrapper, null, houses_jsx(styledComponents["d" /* Container */], {
      flex: 1,
      middle: true,
      center: true,
      column: true
    }, houses_jsx("img", {
      src: _126_default.a,
      style: {
        width: 20,
        height: 20
      }
    }))));
  }

  return houses_jsx(styledComponents["d" /* Container */], {
    flex: 1
  }, houses_jsx(SearchWrapper, null, houses_jsx(styledComponents["g" /* Header */], null, "Your Houses"), houses_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1,
    right: true
  }, houses_jsx(styledComponents["o" /* SubText */], null, "Search:"), houses_jsx(SearchHouses, {
    setLoading: setLoading,
    setFound: setFound
  }), houses_jsx(create_CreateHouse, null))), houses_jsx(Wrapper, null, houses_jsx(styledComponents["d" /* Container */], {
    space: "space-between",
    center: true,
    row: true,
    customStyles: {
      paddingTop: 10,
      paddingBottom: 10
    }
  }, houses_jsx(styledComponents["d" /* Container */], {
    row: true,
    center: true,
    flex: 1
  })), foundHouses === null && houses_jsx(external_react_default.a.Fragment, null, props.houses.length > 0 && houses_jsx(HousesPagination, {
    setSkip: props.setSkip
  }), houses_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, props.houses.length > 0 && props.houses.map(house => {
    return houses_jsx(HouseItem["a" /* default */], _extends({
      key: house.id,
      house: house
    }, props));
  })), props.houses.length <= 0 && houses_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    center: true,
    middle: true,
    customStyles: {
      minHeight: 300
    }
  }, houses_jsx(styledComponents["n" /* SubHeader */], {
    customStyles: {
      marginBottom: 20
    }
  }, "No House found?"), houses_jsx(HomeWork_default.a, {
    style: {
      fontSize: 100,
      color: "#1C2833",
      marginBottom: 20,
      marginTop: 20
    }
  }), houses_jsx(styledComponents["b" /* CaptionText */], null, "Try to create more houses"))), foundHouses !== null && houses_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    row: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, foundHouses.map(house => {
    return houses_jsx(HouseItem["a" /* default */], _extends({
      key: house.id,
      house: house
    }, props));
  })), foundHouses !== null && foundHouses.length === 0 && houses_jsx(styledComponents["d" /* Container */], {
    flex: 1,
    column: true,
    middle: true,
    center: true,
    customStyles: {
      flexWrap: "wrap"
    }
  }, houses_jsx(styledComponents["n" /* SubHeader */], null, "No House Found"))));
};

/* harmony default export */ var houses = __webpack_exports__["b"] = (Houses);


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

/***/ "vf4I":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/rene-a28576b2d0a79d6be8fe21e57e70682d.jpeg";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zl4g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Adjust");

/***/ })

/******/ });