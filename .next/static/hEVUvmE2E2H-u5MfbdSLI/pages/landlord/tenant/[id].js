(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{MD1O:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("nOHt"),i=n("YFqc"),l=n.n(i),c=n("8Kt/"),s=n.n(c),d=n("wx14"),p=n("KQm4"),u=n("Ff2n"),f=(n("TOwV"),n("17x9"),n("iuhU")),g=n("H2TA"),m=n("ofer"),h=n("ye/S"),x=n("5AJ6"),y=Object(x.a)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),b=n("VD++");var v=Object(g.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(h.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=Object(u.a)(e,["classes"]);return(a.createElement(b.a,Object(d.a)({component:"li",className:t.root,focusRipple:!0},n),a.createElement(y,{className:t.icon})))}));var w=a.forwardRef((function(e,t){var n=e.children,o=e.classes,r=e.className,i=e.component,l=void 0===i?"nav":i,c=e.expandText,s=void 0===c?"Show path":c,g=e.itemsAfterCollapse,h=void 0===g?1:g,x=e.itemsBeforeCollapse,y=void 0===x?1:x,b=e.maxItems,w=void 0===b?8:b,S=e.separator,j=void 0===S?"/":S,O=Object(u.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),B=a.useState(!1),C=B[0],N=B[1],T=a.Children.toArray(n).filter((function(e){return a.isValidElement(e)})).map((function(e,t){return a.createElement("li",{className:o.li,key:"child-".concat(t)},e)}));return a.createElement(m.a,Object(d.a)({ref:t,component:l,color:"textSecondary",className:Object(f.a)(o.root,r)},O),a.createElement("ol",{className:o.ol},function(e,t,n){return e.reduce((function(o,r,i){return i<e.length-1?o=o.concat(r,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},n)):o.push(r),o}),[])}(C||w&&T.length<=w?T:function(e){return y+h>=e.length?e:[].concat(Object(p.a)(e.slice(0,y)),[a.createElement(v,{"aria-label":s,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(p.a)(e.slice(e.length-h,e.length)))}(T),o.separator,j)))})),S=Object(g.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(w),j=n("snoG"),O=n.n(j),B=n("IxcL"),C=n("ODXe"),N=n("kKAo"),T=n("dfam"),k=n("JrkS"),R=n("tRbT"),z=n("469l"),E=n("wb2y"),A=n("R/WZ"),F=n("6L5Y"),I=o.a.createElement,W=function(e){var t=e.children,n=e.value,a=e.index,o=Object(u.a)(e,["children","value","index"]);return I(N.a,Object(d.a)({component:"div",role:"tabpanel",style:{padding:0},elevation:0,hidden:n!==a,id:"vertical-tabpanel-".concat(a),"aria-labelledby":"vertical-tab-".concat(a)},o),n===a&&I(F.d,{flex:1,color:"#F5F8FA",column:!0,customStyles:{paddingTop:5,height:"40vh"}},t))},M=Object(A.a)((function(e){return{root:{},gridItem:{flex:1,margin:0,paddingRight:10,paddingLeft:10},divider:{height:150,margin:4}}})),L=Object(g.a)({indicator:{display:"flex",justifyContent:"center",backgroundColor:"transparent","& > div":{width:"100%",backgroundColor:"#635ee7"}}})((function(e){return I(T.a,Object(d.a)({},e,{TabIndicatorProps:{children:I("div",null)}}))})),H=Object(g.a)((function(e){return{root:{textTransform:"none",color:"black",fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(15),marginRight:e.spacing(1),"&:focus":{opacity:1}}}}))((function(e){return I(k.a,Object(d.a)({disableRipple:!0},e))})),_=function(){var e=M(),t=o.a.useState(0),n=Object(C.a)(t,2),a=n[0],r=n[1],i={id:1,isActive:!0,firstName:"Rene",lastName:"La"};return I(F.d,{flex:1,column:!0,customStyles:{marginLeft:10,marginRight:20,paddingBottom:10}},I(R.a,{container:!0,spacing:0,style:{flex:1,height:"100%"}},I(R.a,{item:!0,xs:4,className:e.gridItem},I(F.d,{flex:1,color:"transparent",column:!0,customStyles:{height:"100%",borderRadius:5,paddingLeft:20,paddingRight:10}},I(F.d,{flex:.6,color:"transparent",column:!0},I(F.d,{flex:.5,bottom:!0,center:!0,color:"transparent"},I(z.a,{style:{height:130,width:130}},I("h3",{style:{fontSize:40}},i.firstName.charAt(0)))),I(F.d,{flex:.25,color:"transparent",column:!0,middle:!0,center:!0},I("h3",{style:{fontSize:25,margin:0}},i.firstName," "," "+i.lastName),I(F.d,{flex:0,customStyles:{borderRadius:10,padding:"5px 20px"}},"isActive")),I(F.d,{flex:.25,color:"transparent",middle:!0,center:!0},I("span",null))),I(F.d,{flex:.4,color:"transparent",customStyles:{padding:"0px 25px"}},I(F.d,{color:"transparent",row:!0,flex:1},I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"user name")),I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Aghsa43"))),I(F.d,{color:"transparent",row:!0,flex:1},I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"email")),I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"renela@gmail.com"))),I(F.d,{color:"transparent",row:!0,flex:1},I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Company")),I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"lasoft Systems"))),I(F.d,{color:"transparent",row:!0,flex:1},I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"Company address")),I(F.d,{row:!0,flex:1,color:"transparent",center:!0,left:!0},I("span",{style:{fontSize:13}},"East, Kayonza")))))),I(R.a,{item:!0,xs:8,className:e.gridItem},I(F.d,{flex:1,column:!0,customStyles:{height:"100%",borderRadius:5}},I(F.d,{flex:.5,column:!0,color:"#F5F8FA",customStyles:{marginBottom:10}},I(F.d,{row:!0,center:!0,flex:0,color:"transparent",customStyles:{paddingLeft:10,paddingTop:10}},I(m.a,{variant:"h6",style:{fontWeight:"600",fontSize:12}},"House Information")),I(F.d,{flex:1,row:!0,color:"#F5F8FA",customStyles:{marginBottom:10}},I(F.d,{flex:1,column:!0,color:"transparent",space:"space-around",customStyles:{padding:15}},I(m.a,{variant:"h5",gutterBottom:!0},"House Name: Barcelona"),I(m.a,{variant:"h5",gutterBottom:!0},"House Number: ADCJHSX87E"),I(m.a,{variant:"h5",gutterBottom:!0},"House Type: Apartment"),I(m.a,{variant:"h5",gutterBottom:!0},"House details: 2 bedrooms 2 bathroom"),I(m.a,{variant:"h5",gutterBottom:!0},"address:Kigali, Kicukiro")),I(F.d,{flex:0,column:!0,color:"transparent",middle:!0,center:!0},I(E.a,{className:e.divider,orientation:"vertical"})),I(F.d,{flex:1,column:!0,color:"transparent",middle:!0,customStyles:{paddingLeft:20}},I(m.a,{variant:"h5",gutterBottom:!0},"Property manager: Mbanza"),I(m.a,{variant:"h5",gutterBottom:!0},"Agent: Mbanza"),I(m.a,{variant:"h5",gutterBottom:!0},"address:Kigali, Kicukiro")))),I(F.d,{flex:.5,column:!0,color:"#F5F8FA"},I(L,{value:a,onChange:function(e,t){r(t)},"aria-label":"styled tabs example"},I(H,{label:"Maintenance Requests"})),I(W,null,I(F.d,{row:!0,color:"transparent",space:"space-between",customStyles:{paddingLeft:10,paddingRight:10,paddingTop:25,paddingBottom:25,cursor:"pointer",borderBottom:"1px solid ".concat(Object(h.c)("#393939",.1)),"&:hover":{backgroundColor:" ".concat(Object(h.c)("#FEFEFF",1))}}},I("span",null,"kitchen sink not working")),I(F.d,{row:!0,color:"transparent",space:"space-between",customStyles:{paddingLeft:10,paddingRight:10,paddingTop:25,paddingBottom:25,cursor:"pointer",borderBottom:"1px solid ".concat(Object(h.c)("#393939",.1)),"&:hover":{backgroundColor:" ".concat(Object(h.c)("#FEFEFF",1))}}},I("span",null,"BathTab leak"))))))))},q=n("h4VS"),D=n("vbcS"),K=n("lTCR"),P=n.n(K),G=o.a.createElement;function J(){var e=Object(q.a)(["\n  query GET_TENANT($id: ID!) {\n    getTenant(id: $id) {\n      id\n      firstName\n      lastName\n      no_people\n      tel_no\n      isActive\n      userId {\n        id\n        email\n        password\n      }\n      houseId {\n        id\n        house_heading\n        house_no\n      }\n    }\n  }\n"]);return J=function(){return e},e}var V=P()(J()),X=function(e){return G(D.b,Object(d.a)({},e,{query:V,variables:{id:e.id}}),(function(t){return e.children(t)}))},Y=n("TjsY"),U=n.n(Y),$=n("0oZa"),Z=o.a.createElement;t.default=Object(B.a)((function(e){var t=e.open,n=Object(r.useRouter)().query.id;return Z(X,{id:n},(function(e){var n=e.data,a=e.loading;if(n){var o=n.getTenant;return Z(F.d,{flex:1,column:!0},Z(s.a,null,Z("link",{rel:"shortcut icon",href:"public/fav.png"}),Z("title",null,"Rene La - HouseAssist - Space")),Z($.a,{open:t},Z(S,{"aria-label":"breadcrumb"},Z(l.a,{href:"/landlord/houses",as:"/landlord/houses"},Z("a",{style:{textDecoration:"none"}},Z(F.d,{row:!0,middle:!0,center:!0},Z(O.a,{style:{fontSize:20,marginRight:5}}),Z(m.a,{variant:"subtitle1",style:{color:"#50566B",fontSize:14,fontWeight:200}},"back to tenants")))))),Z(_,{open:t,tenant:o}))}return a?Z(F.d,{flex:1},Z($.a,{open:t}),Z(F.d,{middle:!0,center:!0,flex:1},Z("img",{src:U.a,style:{width:25,height:25}}))):null}))}))},TjsY:function(e,t){e.exports="/_next/static/images/126-18f401b0ce674372ebd02b7f07bee79f.gif"},ofer:function(e,t,n){"use strict";var a=n("wx14"),o=n("Ff2n"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),c=n("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(e,t){var n=e.align,l=void 0===n?"inherit":n,d=e.classes,p=e.className,u=e.color,f=void 0===u?"initial":u,g=e.component,m=e.display,h=void 0===m?"initial":m,x=e.gutterBottom,y=void 0!==x&&x,b=e.noWrap,v=void 0!==b&&b,w=e.paragraph,S=void 0!==w&&w,j=e.variant,O=void 0===j?"body1":j,B=e.variantMapping,C=void 0===B?s:B,N=Object(o.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),T=g||(S?"p":C[O]||s[O])||"span";return r.createElement(T,Object(a.a)({className:Object(i.a)(d.root,p,"inherit"!==O&&d[O],"initial"!==f&&d["color".concat(Object(c.a)(f))],v&&d.noWrap,y&&d.gutterBottom,S&&d.paragraph,"inherit"!==l&&d["align".concat(Object(c.a)(l))],"initial"!==h&&d["display".concat(Object(c.a)(h))]),ref:t},N))}));t.a=Object(l.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},pKmh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/landlord/tenant/[id]",function(){return n("MD1O")}])},snoG:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),r=(0,a(n("8/g6")).default)(o.default.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.default=r},tRbT:function(e,t,n){"use strict";var a=n("Ff2n"),o=n("wx14"),r=n("q1tI"),i=(n("17x9"),n("iuhU")),l=n("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=r.forwardRef((function(e,t){var n=e.alignContent,l=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,d=e.classes,p=e.className,u=e.component,f=void 0===u?"div":u,g=e.container,m=void 0!==g&&g,h=e.direction,x=void 0===h?"row":h,y=e.item,b=void 0!==y&&y,v=e.justify,w=void 0===v?"flex-start":v,S=e.lg,j=void 0!==S&&S,O=e.md,B=void 0!==O&&O,C=e.sm,N=void 0!==C&&C,T=e.spacing,k=void 0===T?0:T,R=e.wrap,z=void 0===R?"wrap":R,E=e.xl,A=void 0!==E&&E,F=e.xs,I=void 0!==F&&F,W=e.zeroMinWidth,M=void 0!==W&&W,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(i.a)(d.root,p,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],b&&d.item,M&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==z&&d["wrap-xs-".concat(String(z))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==l&&d["align-content-xs-".concat(String(l))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==I&&d["grid-xs-".concat(String(I))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==B&&d["grid-md-".concat(String(B))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==A&&d["grid-xl-".concat(String(A))]);return r.createElement(f,Object(o.a)({className:H,ref:t},L))})),u=Object(l.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(o,2)),width:"calc(100% + ".concat(d(o),")"),"& > $item":{padding:d(o,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.a=u}},[["pKmh",0,2,1,3,4,5,6,7,8,9,11,12]]]);