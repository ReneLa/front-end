(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{IxcL:function(e,t,n){"use strict";var r=n("ODXe"),a=n("rePB"),o=n("q1tI"),i=n.n(o),c=n("iuhU"),l=n("R/WZ"),s=n("IIOH"),d=n("5CWz"),p=n("F1wk"),f=n("wx14"),u=n("Ff2n"),h=n("YFqc"),m=n.n(h),b=n("nOHt"),g=i.a.createElement,y=(Object(b.withRouter)((function(e){var t=e.router,n=e.children,r=e.as,a=e.href,c=Object(u.a)(e,["router","children","as","href"]);return g(m.a,Object(f.a)({},c,{href:a,as:r}),i.a.cloneElement(o.Children.only(n),{className:t.pathname===a||t.asPath===r?"active":null}))})),n("6L5Y")),w=n("Np96"),O=n.n(w),v=n("469l"),j=n("vOnD"),S=(n("17x9"),n("H2TA")),x=n("NqtD"),k=o.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.color,i=void 0===a?"inherit":a,l=e.component,s=void 0===l?"span":l,d=e.fontSize,p=void 0===d?"default":d,h=Object(u.a)(e,["classes","className","color","component","fontSize"]);return(o.createElement(s,Object(f.a)({className:Object(c.a)("material-icons",n.root,r,"inherit"!==i&&n["color".concat(Object(x.a)(i))],"default"!==p&&n["fontSize".concat(Object(x.a)(p))]),"aria-hidden":!0,ref:t},h)))}));k.muiName="Icon";var D=Object(S.a)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(k),N=i.a.createElement,P=Object(j.d)(y.o).withConfig({displayName:"ActiveLink__NavText",componentId:"sc-172y5y2-0"})(["color:",";font-weight:",";&:hover{color:",";}"],(function(e){var t=e.theme;return e.isActive?t.primaryDark:t.grey}),(function(e){return e.isActive?600:500}),(function(e){return e.theme.primaryDark})),L=Object(j.d)(y.d).withConfig({displayName:"ActiveLink__NavItem",componentId:"sc-172y5y2-1"})(["display:flex;flex-direction:row;align-items:center;background-color:",";padding-top:12px;padding-bottom:12px;padding-left:7px;padding-right:7px;cursor:pointer;&:hover{background-color:",";}"],(function(e){var t=e.theme;return e.isActive?t.bgPrimary:"transparent"}),(function(e){return e.theme.bgPrimary}));var C=function(e){e.children;var t=e.open,n=e.icon,r=e.label,a=e.href,o=Object(b.useRouter)();return t?N(y.d,{color:"transparent",customStyles:{paddingLeft:10,paddingRight:10}},N(L,{isActive:o.pathname===a},N(y.d,{row:!0,left:!0,center:!0,flex:0,color:"transparent"},N(D,{style:{fontSize:o.pathname===a?21:20,color:o.pathname===a?"#1C1D21":"#717D7E"}},n)))):N("a",{href:a,onClick:function(e){e.preventDefault(),o.push(a)},style:{marginBottom:5}},N(y.d,{color:"transparent",customStyles:{paddingLeft:10,paddingRight:10}},N(L,{isActive:o.pathname===a},N(y.d,{row:!0,left:!0,center:!0,flex:0,color:"transparent"},N(D,{style:{fontSize:o.pathname===a?21:20,color:o.pathname===a?"#1C1D21":"#717D7E"}},n)),N(y.d,{row:!0,left:!0,center:!0,flex:1,color:"transparent",customStyles:{marginLeft:20}},N(P,{isActive:o.pathname===a},r)))))},I=i.a.createElement;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=Object(l.a)((function(e){return{root:{display:"flex"},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:200,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:200,border:"none",backgroundColor:p.b.bgSecondary,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(a.a)({border:"none",backgroundColor:p.b.bgSecondary,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:E({display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:e.spacing(0,1)},e.mixins.toolbar),content:{backgroundColor:p.b.bgPrimary},small:{width:e.spacing(5),height:e.spacing(5)},linkStyle:{textDecoration:"none",color:p.b.iconStyle},activeLink:{textDecoration:"none",color:p.b.tealPrimary}}}));t.a=function(e){return function(t){var n,o,l=A(),p=i.a.useState(!0),f=Object(r.a)(p,2),u=f[0];f[1];return I("div",{className:l.root},I(d.a,null),I(s.a,{variant:"permanent",className:Object(c.a)(l.drawer,(n={},Object(a.a)(n,l.drawerOpen,u),Object(a.a)(n,l.drawerClose,!u),n)),classes:{paper:Object(c.a)((o={},Object(a.a)(o,l.drawerOpen,u),Object(a.a)(o,l.drawerClose,!u),o))}},I("div",{className:l.toolbar},I("div",{style:{display:"flex",marginLeft:5,width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center"}},I(v.a,{src:O.a,className:l.small}))),I(y.d,{flex:1,column:!0,color:"transparent",customStyles:{height:"100%",paddingTop:20}},I(C,{label:"Dashboard",href:"/landlord/dashboard",icon:"dashboard"}),I(C,{label:"Houses",href:"/landlord/houses",icon:"home"}),I(C,{label:"Tenants",href:"/landlord/tenants",icon:"people"}),I(C,{label:"Tickets",href:"/landlord/tickets",icon:"mail"}))),I(y.d,{flex:1,column:!0,customStyles:{paddingTop:64,paddingRight:10,minHeight:"99.9vh"}},I(e,{open:u})))}}},XcJw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landlord/dashboard",function(){return n("eLLy")}])},eLLy:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("IxcL"),i=n("6L5Y"),c=a.a.createElement;t.default=Object(o.a)((function(){return c(i.d,{flex:1,center:!0,middle:!0},c("h2",null,"Am the dashboard"),c("h3",null,"My components"),c(i.d,{flex:1,row:!0,center:!0}))}))}},[["XcJw",0,1,2,3,4,6,7]]]);