(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"1kqj":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Mx5e"),i=n("6L5Y"),l=a.a.createElement;e.default=Object(o.a)((function(){return l(i.d,{flex:1,column:!0,middle:!0},l(i.p,null,"I am a reports page"))}))},Mx5e:function(t,e,n){"use strict";var r=n("ODXe"),a=n("rePB"),o=n("q1tI"),i=n.n(o),l=(n("YFqc"),n("R/WZ")),c=n("5CWz"),s=n("IIOH"),d=n("PsDL"),m=n("wx14"),u=n("Ff2n"),p=(n("17x9"),n("iuhU")),f=n("H2TA"),g=n("NqtD"),h=o.forwardRef((function(t,e){var n=t.anchorOrigin,r=void 0===n?{vertical:"top",horizontal:"right"}:n,a=t.badgeContent,i=t.children,l=t.classes,c=t.className,s=t.color,d=void 0===s?"default":s,f=t.component,h=void 0===f?"span":f,b=t.invisible,v=t.max,O=void 0===v?99:v,y=t.overlap,x=void 0===y?"rectangle":y,w=t.showZero,j=void 0!==w&&w,C=t.variant,k=void 0===C?"standard":C,T=Object(u.a)(t,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),L=b;null==b&&(0===a&&!j||null==a&&"dot"!==k)&&(L=!0);var P="";return"dot"!==k&&(P=a>O?"".concat(O,"+"):a),o.createElement(h,Object(m.a)({className:Object(p.a)(l.root,c),ref:e},T),i,o.createElement("span",{className:Object(p.a)(l.badge,l["".concat(r.horizontal).concat(Object(g.a)(r.vertical),"}")],l["anchorOrigin".concat(Object(g.a)(r.vertical)).concat(Object(g.a)(r.horizontal)).concat(Object(g.a)(x))],"default"!==d&&l["color".concat(Object(g.a)(d))],L&&l.invisible,"dot"===k&&l.dot)},P))})),b=Object(f.a)((function(t){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorError:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(h),v=n("gd/W"),O=n("kKU3"),y=n("jjAL"),x=n("mivZ"),w=n("F1wk"),j=n("6L5Y"),C=n("Np96"),k=n.n(C),T=(n("vf4I"),n("469l")),L=n("nOHt"),P=n.n(L),R=n("vOnD"),I=i.a.createElement,N=Object(R.d)(j.o).withConfig({displayName:"ActiveLink__NavText",componentId:"sc-1urj39a-0"})(["color:",";font-weight:600;&:hover{color:",";}"],(function(t){return t.theme.primaryDark}),(function(t){return t.theme.primaryDark})),S=Object(R.d)(j.d).withConfig({displayName:"ActiveLink__NavItem",componentId:"sc-1urj39a-1"})(["display:flex;flex-direction:row;align-items:center;background-color:",";padding-top:10px;padding-left:10px;padding-right:10px;padding-bottom:6px;cursor:pointer;&:hover{background-color:",";}"],(function(t){var e=t.theme;return t.isActive?"1.5px solid ".concat(e.btnPrimary):"transparent"}),(function(t){return t.theme.bgPrimary}));var D=function(t){var e=t.label,n=t.href,r=Object(L.useRouter)();return I("a",{href:n,onClick:function(t){t.preventDefault(),r.push(n)},style:{marginRight:7}},I(j.d,{color:"transparent"},I(S,{isActive:r.pathname===n},I(j.d,{row:!0,middle:!0,center:!0,flex:1,color:"transparent"},I(N,{isActive:r.pathname===n},e)))))},E=n("h4VS"),_=n("vbcS"),A=n("lTCR"),B=n.n(A),q=n("ldhQ"),z=n.n(q),W=i.a.createElement;function $(){var t=Object(E.a)(["\n  mutation LOGOUT_MUTATION {\n    logout {\n      message\n    }\n  }\n"]);return $=function(){return t},t}var F=B()($()),H=function(t){return W(_.a,{mutation:F},(function(t){return W(y.a,{style:{height:50},onClick:function(){t(),P.a.replace("/Landlrd/login")}},W(z.a,{style:{fontSize:20,marginRight:10}}),W(j.o,null,"Logout"))}))},M=i.a.createElement;function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X=Object(l.a)((function(t){return{menuButton:{marginRight:36},hide:{display:"none"},drawerPaper:{paddingLeft:100,paddingRight:100,height:64,borderBottom:"1px solid #ECF0F1",elevation:4},menuPaper:{display:"flex",flex:1,flexDirection:"column",backgroundColor:"white",width:150,borderRadius:2,marginBottom:5,marginTop:25},menuItem:{height:50},toolbar:Z({display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"space-between",padding:t.spacing(0,1)},t.mixins.toolbar),content:{backgroundColor:w.b.bgPrimary},small:{width:t.spacing(7),height:t.spacing(7)},userAvatar:{width:t.spacing(4.5),height:t.spacing(4.5)}}}));e.a=function(t){return function(e){var n=X(),a=i.a.useState(null),o=Object(r.a)(a,2),l=o[0],m=o[1],u=Boolean(l),p=function(t){m(t.currentTarget)},f=function(){m(null)};return M(j.d,{flex:1,customStyles:{minHeight:"100vh",position:"relative"},column:!0},M(c.a,null),M(s.a,{variant:"permanent",anchor:"top",classes:{paper:n.drawerPaper}},M(j.d,{center:!0,row:!0,color:"transparent",customStyles:{height:64}},M(T.a,{src:k.a,className:n.small}),M(j.d,{row:!0,flex:1,center:!0,color:"transparent",customStyles:{marginLeft:20}},M(D,{label:"Dashboard",href:"/Landlrd/dashboard"}),M(D,{label:"Houses",href:"/Landlrd/houses"}),M(D,{label:"Tenants",href:"/Landlrd/tenants"}),M(D,{label:"Tickets",href:"/Landlrd/tickets"})),M(j.d,{row:!0,flex:!1,center:!0,right:!0,middle:!0,color:"transparent"},M(d.a,{onClick:p,style:{margin:0,padding:0}},M(b,{color:"secondary",overlap:"circle",badgeContent:" ",variant:"dot",style:{color:"red"}},M(T.a,{alt:"LOGO",onMouseOver:p,className:n.userAvatar},M(x.b,null,(function(t){var e=t.data;if(e){var n=e.me;return M(j.n,{customStyles:{color:"#fff"}},e.me&&n.user_name.charAt(0))}return M("div",null)})))))))),M(j.d,{flex:1,column:!0,customStyles:{paddingTop:64}},M(t,e)),M(v.a,{id:"fade-menu",anchorEl:l,keepMounted:!0,open:u,onClose:f,TransitionComponent:O.a,classes:{paper:n.menuPaper}},M(y.a,{onClick:f,className:n.menuItem},M(j.o,null,"Contact support")),M(y.a,{onClick:f,className:n.menuItem},M(j.o,null,"Help center")),M(H,{handleClose:f})))}}},q7vb:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Landlrd/reports",function(){return n("1kqj")}])},vf4I:function(t,e){t.exports="/_next/static/images/rene-a28576b2d0a79d6be8fe21e57e70682d.jpeg"}},[["q7vb",0,2,1,3,5,4,6,7,8]]]);