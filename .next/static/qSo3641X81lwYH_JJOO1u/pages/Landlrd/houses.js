(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{BaJs:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),o=n("q1tI"),i=n.n(o),a=n("Mx5e"),u=n("6L5Y"),c=n("bzWV"),s=n("sQtf"),f=i.a.createElement;t.default=Object(a.a)((function(e){return f(c.b,null,(function(t,n){var o=t.data;t.loading,t.error;if(o){var i=o.getUserHouses;return f(u.d,{flex:1},f(s.b,Object(r.a)({},e,{houses:i,setSkip:n})))}return null}))}))},GMI5:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=i},ThQ7:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");t.default=i},"V3Y+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Landlrd/houses",function(){return n("BaJs")}])},WRcy:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),o=n("h4VS"),i=n("q1tI"),a=n.n(i),u=n("vbcS"),c=n("lTCR"),s=n.n(c),f=a.a.createElement;function l(){var e=Object(o.a)(["\n  query GET_DISTRICTS_IN_PROVINCE($id: ID!) {\n    getDistrictsByProvince(id: $id) {\n      id\n      name\n    }\n  }\n"]);return l=function(){return e},e}var d=s()(l());t.b=function(e){return f(u.b,Object(r.a)({},e,{query:d,variables:{id:e.id}}),(function(t){return e.children(t)}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},YbdR:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),o=n("h4VS"),i=n("q1tI"),a=n.n(i),u=n("vbcS"),c=n("lTCR"),s=n.n(c),f=a.a.createElement;function l(){var e=Object(o.a)(["\n  query GET_PROVINCES_IN_COUNTRY($id: ID!) {\n    getProvincesByCountry(id: $id) {\n      id\n      name\n    }\n  }\n"]);return l=function(){return e},e}var d=s()(l());t.b=function(e){return f(u.b,Object(r.a)({},e,{query:d,variables:{id:e.id}}),(function(t){return e.children(t)}))}},bnla:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");t.default=i},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),a=n("tCBg"),u=n("T0f4");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("AroE"),f=n("7KCV");t.__esModule=!0,t.default=void 0;var l,d=f(n("q1tI")),p=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),b=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,g=window.IntersectionObserver,_={};function w(){return l||(g?l=new g((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){i(s,e);var t,n=(t=s,function(){var e,n=u(t);if(c()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function s(e){var t;return r(this,s),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,b.addBasePath)(y(e)),as:t?(0,b.addBasePath)(y(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,u=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,p.resolve)(c,a),u=u?(0,p.resolve)(c,u):a,e.preventDefault();var s=t.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](a,u,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),d.default.cloneElement(i,a)}}]),s}(d.Component);t.default=E},flkU:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("wx14"),o=n("ODXe"),i=n("h4VS"),a=n("q1tI"),u=n.n(a),c=n("vbcS"),s=n("lTCR"),f=n.n(s),l=n("UIRo"),d=u.a.createElement;function p(){var e=Object(i.a)(["\n  query GET_LANDLORD_TENANTS($skip: Int = 0, $first: Int=",") {\n    getLandlordTenants(skip: $skip, first: $first,orderBy:createdAt_DESC) {\n      id\n      firstName\n      lastName\n      isActive\n      sex\n      comm_email\n      tel_no\n      profileImage\n      registeredBy {\n        id\n      }\n      houseId {\n        id\n        house_no\n        house_heading\n      }\n      stay_duration\n      from_date\n      street\n      updatedAt\n    }\n  }\n"]);return p=function(){return e},e}var h=f()(p(),l.b);t.b=function(e){var t=u.a.useState(1),n=Object(o.a)(t,2),i=n[0],a=n[1];return d(c.b,Object(r.a)({},e,{query:h,variables:{skip:i*l.b-l.b}}),(function(t){return e.children(t,a)}))}},kseb:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),o=n("h4VS"),i=n("q1tI"),a=n.n(i),u=n("vbcS"),c=n("lTCR"),s=n.n(c),f=a.a.createElement;function l(){var e=Object(o.a)(["\n  query {\n    countries {\n      id\n      name\n      provinces {\n        id\n        name\n        districts {\n          id\n          name\n          sectors {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return l=function(){return e},e}var d=s()(l());t.b=function(e){return f(u.b,Object(r.a)({},e,{query:d}),(function(t){return e.children(t)}))}}},[["V3Y+",0,2,1,3,4,5,6,7,8,11,17]]]);