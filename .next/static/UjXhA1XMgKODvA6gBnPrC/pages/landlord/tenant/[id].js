(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{MD1O:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("nOHt"),i=n("YFqc"),c=n.n(i),l=n("8Kt/"),s=n.n(l),d=n("wx14"),u=n("KQm4"),p=n("Ff2n"),f=(n("TOwV"),n("17x9"),n("iuhU")),m=n("H2TA"),g=n("ofer"),x=n("ye/S"),h=n("5AJ6"),b=Object(h.a)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=n("VD++");var y=Object(m.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(x.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=Object(p.a)(e,["classes"]);return(a.createElement(v.a,Object(d.a)({component:"li",className:t.root,focusRipple:!0},n),a.createElement(b,{className:t.icon})))}));var w=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,i=e.component,c=void 0===i?"nav":i,l=e.expandText,s=void 0===l?"Show path":l,m=e.itemsAfterCollapse,x=void 0===m?1:m,h=e.itemsBeforeCollapse,b=void 0===h?1:h,v=e.maxItems,w=void 0===v?8:v,S=e.separator,j=void 0===S?"/":S,O=Object(p.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=a.useState(!1),k=C[0],z=C[1],N=a.Children.toArray(n).filter((function(e){return a.isValidElement(e)})).map((function(e,t){return a.createElement("li",{className:r.li,key:"child-".concat(t)},e)}));return a.createElement(g.a,Object(d.a)({ref:t,component:c,color:"textSecondary",className:Object(f.a)(r.root,o)},O),a.createElement("ol",{className:r.ol},function(e,t,n){return e.reduce((function(r,o,i){return i<e.length-1?r=r.concat(o,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},n)):r.push(o),r}),[])}(k||w&&N.length<=w?N:function(e){return b+x>=e.length?e:[].concat(Object(u.a)(e.slice(0,b)),[a.createElement(y,{"aria-label":s,key:"ellipsis",onClick:function(e){z(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(u.a)(e.slice(e.length-x,e.length)))}(N),r.separator,j)))})),S=Object(m.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(w),j=n("snoG"),O=n.n(j),C=n("IxcL"),k=n("ODXe"),z=n("R/WZ"),N=n("kKAo"),T=n("dfam"),R=n("JrkS"),B=n("tRbT"),E=n("469l"),F=n("wb2y"),A=n("6L5Y"),I=r.a.createElement,M=function(e){var t=e.children,n=e.value,a=e.index,r=Object(p.a)(e,["children","value","index"]);return I(N.a,Object(d.a)({component:"div",role:"tabpanel",style:{padding:0},elevation:0,hidden:n!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},r),n===a&&I(A.d,{flex:1,color:"#F5F8FA",column:!0,customStyles:{paddingTop:5,height:"40vh"}},t))},W=Object(z.a)((function(e){return{root:{},gridItem:{flex:1,margin:0,paddingRight:10,paddingLeft:10},divider:{height:150,margin:4}}})),L=Object(m.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > div":{width:"100%",backgroundColor:"#635ee7"}}})((function(e){return I(T.a,Object(d.a)({},e,{TabIndicatorProps:{children:I("div",null)}}))})),_=Object(m.a)((function(e){return{root:{textTransform:"none",color:"black",fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}))((function(e){return I(R.a,Object(d.a)({disableRipple:!0},e))})),H=function(){var e=W(),t=r.a.useState(0),n=Object(k.a)(t,2),a=n[0],o=n[1],i={id:1,isActive:!0,firstName:"Rene",lastName:"La"};return I(A.d,{flex:1,column:!0,customStyles:{marginLeft:10,marginRight:20,paddingBottom:10}},I(B.a,{container:!0,spacing:0,style:{flex:1,height:"100%"}},I(B.a,{item:!0,xs:4,className:e.gridItem},I(A.d,{flex:1,color:"transparent",column:!0,customStyles:{height:"100%",borderRadius:5,paddingLeft:20,paddingRight:10}},I(A.d,{flex:.6,color:"transparent",column:!0},I(A.d,{flex:.5,bottom:!0,center:!0,color:"transparent"},I(E.a,{style:{height:130,width:130}},I("h3",{style:{fontSize:40}},i.firstName.charAt(0)))),I(A.d,{flex:.25,color:"transparent",column:!0,middle:!0,center:!0},I("h3",{style:{fontSize:25,margin:0}},i.firstName," "," "+i.lastName),I(A.d,{flex:0,customStyles:{borderRadius:10,padding:"5px 20px"}},"isActive")),I(A.d,{flex:.25,color:"transparent",middle:!0,center:!0},I("span",null))),I(A.d,{flex:.4,color:"transparent",customStyles:{padding:"0px 25px"}},I(A.d,{color:"transparent",row:!0,flex:1},I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"user name")),I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Aghsa43"))),I(A.d,{color:"transparent",row:!0,flex:1},I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"email")),I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"renela@gmail.com"))),I(A.d,{color:"transparent",row:!0,flex:1},I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Company")),I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"lasoft Systems"))),I(A.d,{color:"transparent",row:!0,flex:1},I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Company address")),I(A.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"East, Kayonza")))))),I(B.a,{item:!0,xs:8,className:e.gridItem},I(A.d,{flex:1,column:!0,customStyles:{height:"100%",borderRadius:5}},I(A.d,{flex:.5,column:!0,color:"#F5F8FA",customStyles:{marginBottom:10}},I(A.d,{row:!0,center:!0,flex:0,color:"transparent",customStyles:{paddingLeft:10,paddingTop:10}},I(g.a,{variant:"h6",style:{fontWeight:"600",fontSize:12}},"House Information")),I(A.d,{flex:1,row:!0,color:"#F5F8FA",customStyles:{marginBottom:10}},I(A.d,{flex:1,column:!0,color:"transparent",space:"space-around",customStyles:{padding:15}},I(g.a,{variant:"h5",gutterBottom:!0},"House Name: Barcelona"),I(g.a,{variant:"h5",gutterBottom:!0},"House Number: ADCJHSX87E"),I(g.a,{variant:"h5",gutterBottom:!0},"House Type: Apartment"),I(g.a,{variant:"h5",gutterBottom:!0},"House details: 2 bedrooms 2 bathroom"),I(g.a,{variant:"h5",gutterBottom:!0},"address:Kigali, Kicukiro")),I(A.d,{flex:0,column:!0,color:"transparent",middle:!0,center:!0},I(F.a,{className:e.divider,orientation:"vertical"})),I(A.d,{flex:1,column:!0,color:"transparent",middle:!0,customStyles:{paddingLeft:20}},I(g.a,{variant:"h5",gutterBottom:!0},"Property manager: Mbanza"),I(g.a,{variant:"h5",gutterBottom:!0},"Agent: Mbanza"),I(g.a,{variant:"h5",gutterBottom:!0},"address:Kigali, Kicukiro")))),I(A.d,{flex:.5,column:!0,color:"#F5F8FA"},I(L,{value:a,onChange:function(e,t){o(t)},"aria-label":"styled tabs example"},I(_,{label:"Maintenance Requests"})),I(M,null,I(A.d,{row:!0,color:"transparent",space:"space-between",customStyles:{paddingLeft:10,paddingRight:10,paddingTop:25,paddingBottom:25,cursor:"pointer",borderBottom:"1px solid ".concat(Object(x.c)("#393939",.1)),"&:hover":{backgroundColor:" ".concat(Object(x.c)("#FEFEFF",1))}}},I("span",null,"kitchen sink not working")),I(A.d,{row:!0,color:"transparent",space:"space-between",customStyles:{paddingLeft:10,paddingRight:10,paddingTop:25,paddingBottom:25,cursor:"pointer",borderBottom:"1px solid ".concat(Object(x.c)("#393939",.1)),"&:hover":{backgroundColor:" ".concat(Object(x.c)("#FEFEFF",1))}}},I("span",null,"BathTab leak"))))))))},K=n("h4VS"),q=n("vbcS"),D=n("lTCR"),G=n.n(D),P=r.a.createElement;function J(){var e=Object(K.a)(["\n  query GET_TENANT($id: ID!) {\n    getTenant(id: $id) {\n      id\n      firstName\n      lastName\n      no_people\n      tel_no\n      isActive\n      userId {\n        id\n        email\n        password\n      }\n      houseId {\n        id\n        house_heading\n        house_no\n      }\n    }\n  }\n"]);return J=function(){return e},e}var V=G()(J()),X=function(e){return P(q.b,Object(d.a)({},e,{query:V,variables:{id:e.id}}),(function(t){return e.children(t)}))},Y=n("TjsY"),$=n.n(Y),U=n("0oZa"),Z=r.a.createElement;t.default=Object(C.a)((function(e){var t=e.open,n=Object(o.useRouter)().query.id;return Z(X,{id:n},(function(e){var n=e.data,a=e.loading;if(n){var r=n.getTenant;return Z(A.d,{flex:1,column:!0},Z(s.a,null,Z("link",{rel:"shortcut icon",href:"public/fav.png"}),Z("title",null,"Rene La - HouseAssist - Space")),Z(U.a,{open:t},Z(S,{"aria-label":"breadcrumb"},Z(c.a,{href:"/landlord/houses",as:"/landlord/houses"},Z("a",{style:{textDecoration:"none"}},Z(A.d,{row:!0,middle:!0,center:!0},Z(O.a,{style:{fontSize:20,marginRight:5}}),Z(g.a,{variant:"subtitle1",style:{color:"#50566B",fontSize:14,fontWeight:200}},"back to tenants")))))),Z(H,{open:t,tenant:r}))}return a?Z(A.d,{flex:1},Z(U.a,{open:t}),Z(A.d,{middle:!0,center:!0,flex:1},Z("img",{src:$.a,style:{width:25,height:25}}))):null}))}))},TjsY:function(e,t){e.exports="/_next/static/images/126-18f401b0ce674372ebd02b7f07bee79f.gif"},pKmh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landlord/tenant/[id]",function(){return n("MD1O")}])},snoG:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.default=o},tRbT:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,d=e.classes,u=e.className,p=e.component,f=void 0===p?"div":p,m=e.container,g=void 0!==m&&m,x=e.direction,h=void 0===x?"row":x,b=e.item,v=void 0!==b&&b,y=e.justify,w=void 0===y?"flex-start":y,S=e.lg,j=void 0!==S&&S,O=e.md,C=void 0!==O&&O,k=e.sm,z=void 0!==k&&k,N=e.spacing,T=void 0===N?0:N,R=e.wrap,B=void 0===R?"wrap":R,E=e.xl,F=void 0!==E&&E,A=e.xs,I=void 0!==A&&A,M=e.zeroMinWidth,W=void 0!==M&&M,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=Object(i.a)(d.root,u,g&&[d.container,0!==T&&d["spacing-xs-".concat(String(T))]],v&&d.item,W&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==B&&d["wrap-xs-".concat(String(B))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==I&&d["grid-xs-".concat(String(I))],!1!==z&&d["grid-sm-".concat(String(z))],!1!==C&&d["grid-md-".concat(String(C))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==F&&d["grid-xl-".concat(String(F))]);return o.createElement(f,Object(r.a)({className:_,ref:t},L))})),p=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=p}},[["pKmh",0,2,1,3,5,4,6,7,8,11,9]]]);