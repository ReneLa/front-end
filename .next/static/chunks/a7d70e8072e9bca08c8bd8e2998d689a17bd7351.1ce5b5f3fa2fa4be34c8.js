(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7pUr":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var n=function(e){var t,o=new Date,n=(e=o.getDate(),o.getMonth()),r=o.getFullYear();return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][n]+" "+((t=e)<10?"0"+t:t)+", "+r}},YdRN:function(e,t,o){"use strict";var n=o("ODXe"),r=o("q1tI"),i=o.n(r),a=o("vOnD"),d=o("6L5Y"),l=(o("tdHr"),o("7pUr")),c=o("R/WZ"),s=o("tr08"),p=o("kfFl"),u=o("yv+Y"),g=o("EQI2"),f=o("469l"),m=o("wb2y"),b=o("+JwS"),h=o("ZPUd"),x=o.n(h),y=o("aFMR"),w=i.a.createElement,S=Object(c.a)((function(e){return{dialogPaper:{height:700,width:500,borderRadius:2,backgroundColor:"white",position:"relative"},dialogActionStyle:{padding:0,margin:0,border:"none",backgroundColor:"white"},dialogActions:{width:"100%",padding:0,margin:0,border:"none"},dialogContentStyle:{display:"flex",flex:1,height:"100%",padding:0,border:"none",backgroundColor:"white"},avatarStyle:{width:e.spacing(5),height:e.spacing(5),borderRadius:1,backgroundColor:"#F3F2F1"},buildingImageStyle:{width:e.spacing(5),height:e.spacing(5),borderRadius:2,marginRight:20,border:"1.5px dashed #F3F2F1",backgroundColor:"#F3F2F1"},inputStyle:{border:0,borderRadius:4,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,backgroundColor:"#F5F8FA",minHeight:60,fontSize:12,"&:focus":{border:"1px solid #4C3AF7",backgroundColor:"#FEFEFF"}}}})),k=Object(a.d)(d.d).withConfig({displayName:"SingleTicket__Wrapper",componentId:"sc-1q72bwr-0"})(["flex:1;flex-direction:column;height:100%;padding:0px;background-color:white;"]),v=(Object(a.d)(d.a).withConfig({displayName:"SingleTicket__ActionBtn",componentId:"sc-1q72bwr-1"})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:",";"],(function(e){return e.theme.lightGrey})),Object(a.d)(d.a).withConfig({displayName:"SingleTicket__CloseBtn",componentId:"sc-1q72bwr-2"})(["z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:",";",""],(function(e){return e.theme.bgPrimary}),(function(e){return e.customStyles}))),C=(Object(a.d)(d.a).withConfig({displayName:"SingleTicket__AddBtn",componentId:"sc-1q72bwr-3"})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:",";"],(function(e){return e.theme.lightGrey})),Object(a.d)(d.l).withConfig({displayName:"SingleTicket__CancelBtn",componentId:"sc-1q72bwr-4"})(["border:none;color:",";background-color:transparent;&:hover{background-color:",";}"],(function(e){return e.theme.primaryDark}),(function(e){return e.theme.lightGrey})),a.d.div.withConfig({displayName:"SingleTicket__Tag",componentId:"sc-1q72bwr-5"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:20px;background-color:#e1e1e1;padding:4px 15px;margin:0px 2px;"]),a.d.form.withConfig({displayName:"SingleTicket__Form",componentId:"sc-1q72bwr-6"})(["display:flex;flex-direction:row;padding:0px 40px;"]),Object(a.d)(d.d).withConfig({displayName:"SingleTicket__DateWrapperStyles",componentId:"sc-1q72bwr-7"})(["flex-direction:row;border-bottom:",";padding:5px 0px;flex:0.4;align-items:center;background-color:transparent;"],(function(e){var t=e.theme;return"4px solid ".concat(t.btnPrimary)}))),_=function(e){var t,o=new Date,n=(e=o.getDate(),o.getMonth()),r=(o.getFullYear(),(t=e)<10?"0"+t:t);return w(C,null,w(d.n,{customStyles:{fontWeight:"500"}},r),w(d.p,{customStyles:{fontSize:14,marginRight:5}},function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(r)),w(d.n,{customStyles:{fontWeight:"500"}},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][n]))};t.a=function(e){var t=e.ticket,o=e.num,r=S(),a=(Object(s.a)(),i.a.useState(!0)),c=Object(n.a)(a,2),h=(c[0],c[1],i.a.useState("paper")),C=Object(n.a)(h,2),j=C[0],F=(C[1],i.a.useState(!1)),I=Object(n.a)(F,2),O=I[0],T=I[1],R=function(){T(!1)},N=t.houseId,A=t.reported_by;return w("div",{style:{flex:0}},w(y.a,{list:!0,ticket:t,onClick:function(){T(!0)},num:o}),w(p.a,{onClose:R,classes:{paper:r.dialogPaper},open:O,scroll:j},w(u.a,{id:"scroll-dialog-title",classes:{root:r.dialogActionStyle}},w(d.d,{row:!0,center:!0,color:"transparent",space:"space-between",customStyles:{paddingTop:15,paddingRight:10,paddingLeft:30}},w(d.d,{row:!0,center:!0,flex:1,color:"transparent"},w(_,{data:t.createdAt})),w(v,{onClick:function(){return R()}},w(x.a,{style:{fontSize:23}})))),w(g.a,{classes:{root:r.dialogContentStyle}},w(k,null,w(d.d,{flex:1,column:!0,customStyles:{paddingTop:25}},w(d.d,{flex:0,middle:!0,center:!0,column:!0},w(f.a,{style:{width:60,height:60,borderRadius:30,backgroundColor:"#fff",marginBottom:5}},w(d.n,{customStyles:{fontSize:16}},N.house_heading.charAt(0))),w(d.o,{customStyles:{color:"#000",marginBottom:5}},A.user_name),A.userType.map((function(e,t){return w(d.j,{key:t,customStyles:{color:"gray",marginBottom:5}},e)}))),w(d.d,{flex:.35,column:!0,customStyles:{paddingLeft:60,paddingRight:60,paddingTop:15}},w(d.d,{flex:1,column:!0,color:"white",depth:4,customStyles:{padding:15,marginBottom:10}},w(d.n,null,"\u201c"),w(d.d,{color:"transparent"},w(d.o,null,t.description))),w(d.d,{row:!0,center:!0,middle:!0},w(m.a,{style:{marginTop:10,width:"40%"}}))),w(d.d,{flex:0,column:!0,customStyles:{paddingLeft:25,paddingRight:15,marginBottom:10,paddingTop:10}},w(d.n,{customStyles:{fontSize:12,color:"#17202A"}},"Details"),w(d.d,{flex:0,row:!0},w(d.d,{flex:.5,column:!0},w(d.d,{flex:1,row:!0},w(d.d,{flex:.5,row:!0},w(d.o,null,"Created")),w(d.d,{flex:.5},w(d.o,null,Object(l.a)(t.reported_date)))),w(d.d,{flex:1,row:!0,customStyles:{paddingTop:10}},w(d.d,{flex:.5,row:!0},w(d.o,null,"Reported way")),w(d.d,{flex:.5},w(d.o,null,t.reported_way))),w(d.d,{flex:1,row:!0,customStyles:{paddingTop:10}},w(d.d,{flex:.5,row:!0},w(d.o,null,"House")),w(d.d,{flex:.5},w(d.o,null,N.house_heading))))))))),w(b.a,{className:r.dialogActions},w(d.d,{flex:1,row:!0,right:!0,center:!0,customStyles:{padding:10}},"dfsdsdf"))))}},ZPUd:function(e,t,o){"use strict";var n=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("q1tI")),i=(0,n(o("8/g6")).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},aFMR:function(e,t,o){"use strict";var n=o("Ff2n"),r=o("q1tI"),i=o.n(r),a=o("vOnD"),d=o("R/WZ"),l=o("ye/S"),c=o("6L5Y"),s=(o("tdHr"),o("GMI5")),p=o.n(s),u=o("7pUr"),g=i.a.createElement,f=Object(d.a)((function(e){return{small:{width:e.spacing(6),height:e.spacing(6),borderRadius:3}}})),m=(Object(a.d)(c.d).withConfig({displayName:"TicketItem__TicketWrapper",componentId:"sc-53bb2i-0"})(["display:flex;flex-direction:column;padding-top:10px;padding-left:15px;padding-right:15px;height:385px;min-width:320px;border:1px solid #d5d8dc;position:relative;margin-bottom:20px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]),Object(a.d)(c.d).withConfig({displayName:"TicketItem__Wrapper",componentId:"sc-53bb2i-1"})(["display:flex;flex-direction:row;position:relative;border-radius:2px;padding:12px 15px;margin-bottom:8px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"])),b=a.d.div.withConfig({displayName:"TicketItem__Tag",componentId:"sc-53bb2i-2"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;border-radius:5px;padding:2px 15px;",""],(function(e){return e.customStyles}));Object(a.d)(c.d).withConfig({displayName:"TicketItem__CardHeader",componentId:"sc-53bb2i-3"})(["direction:flex;flex-direction:row;width:100%;align-items:center;background-color:transparent;"]),Object(a.d)(c.d).withConfig({displayName:"TicketItem__ImageWrapper",componentId:"sc-53bb2i-4"})(["direction:flex;flex-direction:row;flex:1;width:100%;background-color:transparent;padding:0px;margin-top:15px;"]);t.a=function(e){e.list;var t=e.num,o=e.ticket,r=Object(n.a)(e,["list","num","ticket"]),i=(f(),o.houseId);return g(m,r,g(c.d,{center:!0,row:!0,flex:.1,color:"transparent"},g(c.p,{customStyles:{fontSize:14}},t)),g(c.d,{center:!0,row:!0,flex:.2,color:"transparent"},g(c.p,{customStyles:{fontSize:14}},Object(u.a)(o.createdAt))),g(c.d,{center:!0,row:!0,flex:.2,color:"transparent"},g(c.p,{customStyles:{fontSize:15}},o.title)),g(c.d,{center:!0,row:!0,flex:.2,color:"transparent"},g(c.p,{customStyles:{fontSize:15}},i.house_heading)),g(c.d,{center:!0,row:!0,flex:.2,color:"transparent"},o.isClosed?g(b,{customStyles:{backgroundColor:Object(l.c)("#A9DFBF",.3)}},g(c.b,{customStyles:{color:"#212F3D"}},"closed")):g(b,{customStyles:{backgroundColor:Object(l.c)("#A9DFBF",.3)}},g(c.b,{customStyles:{color:"#212F3D"}},"open"))),g(c.d,{center:!0,row:!0,right:!0,flex:.1,color:"transparent"},g(p.a,null)))}},wb2y:function(e,t,o){"use strict";var n=o("wx14"),r=o("Ff2n"),i=o("q1tI"),a=(o("17x9"),o("iuhU")),d=o("H2TA"),l=o("ye/S"),c=i.forwardRef((function(e,t){var o=e.absolute,d=void 0!==o&&o,l=e.classes,c=e.className,s=e.component,p=void 0===s?"hr":s,u=e.flexItem,g=void 0!==u&&u,f=e.light,m=void 0!==f&&f,b=e.orientation,h=void 0===b?"horizontal":b,x=e.role,y=void 0===x?"hr"!==p?"separator":void 0:x,w=e.variant,S=void 0===w?"fullWidth":w,k=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return(i.createElement(p,Object(n.a)({className:Object(a.a)(l.root,c,"fullWidth"!==S&&l[S],d&&l.absolute,g&&l.flexItem,m&&l.light,"vertical"===h&&l.vertical),role:y,ref:t},k)))}));t.a=Object(d.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)}}]);