(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5rCv":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=o},KSRF:function(e,t,n){"use strict";var a=n("ODXe"),r=n("wx14"),o=n("h4VS"),i=n("q1tI"),l=n.n(i),c=n("vOnD"),s=n("YFqc"),u=n.n(s),d=n("R/WZ"),p=n("6L5Y"),g=(n("tdHr"),n("6u8J")),m=n("kfFl"),f=n("yv+Y"),h=n("EQI2"),y=n("+JwS"),b=n("469l"),x=n("lTCR"),v=n.n(x),S=n("ttZb"),w=n("Rme4"),C=n.n(w),j=n("5rCv"),O=n.n(j),T=n("flkU"),_=n("je9M"),I=l.a.createElement;function k(){var e=Object(o.a)(["\n  mutation DELETE_TENANT_MUTATION($id: ID!) {\n    deleteTenant(id: $id) {\n      id\n    }\n  }\n"]);return k=function(){return e},e}var E=Object(d.a)((function(e){return{small:{width:e.spacing(8),height:e.spacing(8),marginBottom:10},popoverPaper:{display:"flex",padding:0,marginLeft:0,marginRight:0,borderRadius:0}}})),N=Object(c.d)(p.d).withConfig({displayName:"TenantCard__CardWrapper",componentId:"sc-1cxgd1s-0"})(["display:flex;flex-direction:column;height:270px;min-width:220px;margin:0px 5px 30px 5px;border-radius:2px;background-color:white;cursor:pointer;&:hover{box-shadow:0 3.2px 7.2px 0 rgba(0,0,0,0.132),0 0.6px 1.8px 0 rgba(0,0,0,0.108);}"]),R=(Object(c.d)(p.d).withConfig({displayName:"TenantCard__Tag",componentId:"sc-1cxgd1s-1"})(["flex:1;align-items:center;justify-content:center;border-radius:10px;padding:5px;margin-right:5px;"]),Object(c.d)(p.d).withConfig({displayName:"TenantCard__CardHeader",componentId:"sc-1cxgd1s-2"})(["direction:flex;flex-direction:column;width:100%;padding:0px 15px 10px 15px;background-color:#f7f9f9;"])),F=Object(c.d)(p.d).withConfig({displayName:"TenantCard__CardContent",componentId:"sc-1cxgd1s-3"})(["direction:flex;flex-direction:column;flex:1;width:100%;background-color:transparent;align-items:center;padding:15px 0px;position:relative;"]),$=Object(c.d)(p.d).withConfig({displayName:"TenantCard__CardActions",componentId:"sc-1cxgd1s-4"})(["display:flex;flex-direction:row;width:100%;position:absolute;min-height:40px;background-color:transparent;bottom:0;"]),B=Object(c.d)(p.l).withConfig({displayName:"TenantCard__CancelBtn",componentId:"sc-1cxgd1s-5"})(["border:none;color:",";background-color:transparent;&:hover{background-color:",";}"],(function(e){return e.theme.primaryDark}),(function(e){return e.theme.lightGrey})),A=v()(k()),D=l.a.forwardRef((function(e,t){return I(g.a,Object(r.a)({direction:"up",ref:t},e))})),P=function(e){var t=e.tenant,n=l.a.useState(!1),r=Object(a.a)(n,2),o=r[0],i=r[1],c=function(){i(!1)},s=Object(S.b)(A,{variables:{id:t.id},refetchQueries:[{query:T.a},{query:_.a}],onCompleted:function(){c()}}),u=Object(a.a)(s,2),d=u[0],g=u[1],b=(g.data,g.loading);return I("div",{style:{flex:1,height:"100%"}},I(p.d,{flex:1,column:!0,color:"transparent",customStyles:{height:"100%",borderTop:"0.5px solid #ECF0F1",borderRight:"0.25px solid #ECF0F1"}},I(p.c,{type:"button",onClick:function(){i(!0)}},"Delete")),I(m.a,{open:o,TransitionComponent:D,keepMounted:!0,onClose:c,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},I(f.a,{id:"alert-dialog-slide-title",style:{fontSize:20}},"You are about to delete this Tenant?"),I(h.a,null,I(p.d,{row:!0,center:!0,color:"transparent",customStyles:{marginTop:15,marginBottom:15}},I(p.o,{customStyles:{marginRight:10}},"Tenant: "),I(p.n,{customStyles:{fontSize:17}},t.firstName))),I(y.a,null,I(B,{onClick:function(){c()}},"Cancel"),I(p.l,{onClick:function(){d()},type:"button",customStyles:{backgroundColor:"#E74C3C",border:"none"}},b?"Deleting":"Delete"))))};t.a=function(e){var t=e.tenant;console.log(t);var n=E(),a=t.houseId;return I(N,null,I(R,null,I(p.d,{row:!0,center:!0,color:"transparent",customStyles:{marginTop:10}},I(p.d,{row:!0,center:!0,flex:.7,color:"white",customStyles:{marginRight:10,border:"0.5px solid #ECF0F1",padding:"10px 0px",borderRadius:2}},I(C.a,{style:{fontSize:22,marginRight:7,color:"orange"}}),I(p.b,null,null!==a&&a.house_heading)),I(p.d,{row:!0,center:!0,right:!0,color:"transparent",flex:.3,customStyles:{padding:"10px 0px"}},t.isActive&&I(b.a,{style:{backgroundColor:"#52BE80",height:25,width:25}},I(O.a,{color:"white",style:{fontSize:15}}))))),I(F,null,null!==t.profileImage&&I(b.a,{src:t.profileImage,className:n.small}),null===t.profileImage&&I(b.a,{className:n.small},t.firstName.charAt(0)+t.lastName.charAt(0)),I(p.o,{customStyles:{marginBottom:2}},t.firstName+" "+t.lastName),I(p.b,{customStyles:{color:"blue",marginBottom:5}},t.comm_email),I(p.b,{customStyles:{marginBottom:3}},t.tel_no),I($,null,I(p.d,{column:!0,flex:.5,color:"transparent"},I(P,{tenant:t})),I(p.d,{column:!0,flex:.5,color:"transparent",customStyles:{borderTop:"0.5px solid #ECF0F1",borderRight:"0.25px solid #ECF0F1"}},I(u.a,{href:"/",as:"/"},I("a",{style:{flex:1,height:"100%"}},I(p.c,{customStyles:{height:"100%",width:"100%"}})))))))}},Rme4:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=o},je9M:function(e,t,n){"use strict";n.d(t,"a",(function(){return pe}));var a=n("wx14"),r=n("Ff2n"),o=n("KQm4"),i=n("ODXe"),l=n("h4VS"),c=n("q1tI"),s=n.n(c),u=n("lTCR"),d=n.n(u),p=n("vbcS"),g=n("6L5Y"),m=n("o0o1"),f=n.n(m),h=n("vOnD"),y=n("lqOT"),b=n("9/5/"),x=n.n(b),v=s.a.createElement;function S(){var e=Object(l.a)(["\n  query SEARCH_TENANT_QUERY($searchTerm: String!) {\n    searchUserTenants(searchTerm: $searchTerm) {\n      id\n      firstName\n      lastName\n      isActive\n      sex\n      comm_email\n      tel_no\n      profileImage\n      registeredBy {\n        id\n      }\n      houseId {\n        id\n        house_no\n      }\n      stay_duration\n      from_date\n      street\n      updatedAt\n    }\n  }\n"]);return S=function(){return e},e}var w=Object(h.d)(g.d).withConfig({displayName:"SearchTenants__SearchBox",componentId:"d3456b-0"})(["display:flex;flex-direction:row;align-items:center;padding-right:10px;background-color:white;height:32px;padding:0px 5px;min-width:150px;margin-left:7px;margin-right:10px;"]),C=d()(S()),j=function(e){var t=e.setFound,n=e.setLoading,a=x()((function(e,a){var r,o;return f.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n(!0),i.next=3,f.a.awrap(a.query({query:C,variables:{searchTerm:e.target.value}}));case 3:r=i.sent,o=r.data.searchUserTenants,t(o),n(!1);case 7:case"end":return i.stop()}}),null,null,null,Promise)}),350);return v(w,null,v(y.a,null,(function(e){return v(g.m,{type:"search",onChange:function(t){t.persist(),a(t,e)},customStyles:{fontSize:15,height:"100%",lineHeight:1,padding:0,width:"100%",border:0,backgroundColor:"white"}})})))},O=(n("+jd2"),n("KSRF")),T=n("UIRo"),_=n("x1ji"),I=n.n(_),k=(n("TjsY"),n("CarD")),E=n.n(k),N=n("8C4M"),R=n.n(N),F=n("ThQ7"),$=n.n(F),B=n("R/WZ"),A=n("tr08"),D=n("kfFl"),P=n("yv+Y"),q=n("EQI2"),z=n("kseb"),L=n("YbdR"),U=n("WRcy"),W=n("flkU"),H=n("bzWV"),M=n("lopY"),Y=n("bnla"),Q=n.n(Y),G=s.a.createElement;function V(){var e=Object(l.a)(["\n  mutation CREATE_TENANT_MUTATION(\n    $firstName: String!\n    $lastName: String!\n    $no_people: Int\n    $tenantType: String\n    $isActive: Boolean\n    $tel_no: String\n    $sex: String\n    $stay_duration: DateTime\n    $comm_email: String\n    $profileImage: String\n    $houseId: ID\n    $from_date: DateTime\n    $to_date: DateTime\n    $countryId: ID\n    $provinceId: ID\n    $districtId: ID\n    $street: String\n  ) {\n    createTenant(\n      firstName: $firstName\n      lastName: $lastName\n      no_people: $no_people\n      tenantType: $tenantType\n      isActive: $isActive\n      tel_no: $tel_no\n      sex: $sex\n      stay_duration: $stay_duration\n      comm_email: $comm_email\n      profileImage: $profileImage\n      houseId: $houseId\n      from_date: $from_date\n      to_date: $to_date\n      countryId: $countryId\n      provinceId: $provinceId\n      districtId: $districtId\n      street: $street\n    ) {\n      id\n    }\n  }\n"]);return V=function(){return e},e}var J=Object(B.a)((function(e){return{dialogPaper:{height:700,borderRadius:2,backgroundColor:"#F2F3F4"},dialogActionStyle:{padding:0,margin:0,border:"none",backgroundColor:"#F2F3F4"},dialogActions:{width:"100%",padding:0,margin:0,border:"none"},dialogContentStyle:{display:"flex",flexDirection:"row",marginRight:10,height:"100%",backgroundColor:"white",border:"none"},avatarStyle:{position:"relative",width:e.spacing(12),height:e.spacing(10),borderRadius:5,backgroundColor:"#F3F2F1"},inputStyle:{border:0,borderRadius:1,paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,backgroundColor:"#F5F8FA",minHeight:60,fontSize:12,"&:focus":{border:"1px solid #4C3AF7",backgroundColor:"#FEFEFF"}}}})),K=Object(h.d)(g.a).withConfig({displayName:"CreateTenant__ActionBtn",componentId:"sc-3akzex-0"})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:",";"],(function(e){return e.theme.lightGrey})),Z=(Object(h.d)(g.a).withConfig({displayName:"CreateTenant__CloseBtn",componentId:"sc-3akzex-1"})(["position:absolute;top:0;right:0;z-index:1304;display:flex;justify-content:center;align-items:center;align-content:center;padding-right:6px;padding-left:6px;border-radius:2px;background-color:",";"],(function(e){return e.theme.bgPrimary})),Object(h.d)(g.l).withConfig({displayName:"CreateTenant__CancelBtn",componentId:"sc-3akzex-2"})(["border:none;color:",";background-color:transparent;&:hover{background-color:",";}"],(function(e){return e.theme.primaryDark}),(function(e){return e.theme.lightGrey}))),X=Object(h.d)(g.k).withConfig({displayName:"CreateTenant__UploadBtn",componentId:"sc-3akzex-3"})(["display:flex;height:60px;width:100%;border:",";"],(function(e){var t=e.theme;return"1px dashed ".concat(t.btnPrimary)})),ee=d()(V()),te=function(e){var t=e.house,n=e.setHouse,a=s.a.useState(null),r=Object(i.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)([]),d=u[0],p=u[1],m=Object(c.useState)(!1),h=(m[0],m[1]);var b=function(e){var t=[];return e.forEach((function(e,n){var a={id:e.id,value:e.house_heading};t.push(a)})),t},x=function(){l(null)};return G(y.a,null,(function(e){return G(g.d,{column:!0,color:"transparent",customStyles:{marginRight:10,marginBottom:10}},G(g.e,{title:t.length>0?t[0].value:"Add House",anchorEl:o,handleOpen:function(t){return function(e,t){var n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return h(!0),l(e.currentTarget),r.next=4,f.a.awrap(t.query({query:H.a}));case 4:n=r.sent,a=n.data.getUserHouses,p(b(a)),console.log(a);case 8:case"end":return r.stop()}}),null,null,null,Promise)}(t,e)},handleClose:x,selection:t,setSelection:n,items:d,wrapperStyles:{width:100}}))}))},ne=function(e){var t=e.country,n=e.setCountry,a=s.a.useState(null),r=Object(i.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)([]),d=u[0],p=u[1],m=Object(c.useState)(!1),h=(m[0],m[1]);var b=function(e){var t=[];return e.forEach((function(e,n){var a={id:e.id,value:e.name};t.push(a)})),t},x=function(){l(null)};return G(y.a,null,(function(e){return G(g.d,{column:!0,color:"transparent",customStyles:{marginRight:10}},G(g.e,{title:t.length>0?t[0].value:"Country",anchorEl:o,handleOpen:function(t){return function(e,t){var n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return h(!0),l(e.currentTarget),r.next=4,f.a.awrap(t.query({query:z.a}));case 4:n=r.sent,a=n.data.countries,p(b(a));case 7:case"end":return r.stop()}}),null,null,null,Promise)}(t,e)},handleClose:x,selection:t,setSelection:n,items:d,wrapperStyles:{width:150}}))}))},ae=function(e){var t=e.country,n=e.province,a=e.setProvince,r=s.a.useState(null),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(c.useState)([]),p=d[0],m=d[1],h=Object(c.useState)(!1),b=(h[0],h[1]);var x=function(e){var t=[];return e.forEach((function(e,n){var a={id:e.id,value:e.name};t.push(a)})),t},v=function(){u(null)};return G(y.a,null,(function(e){return G(g.d,{column:!0,color:"transparent",customStyles:{pointerEvents:0===t.length?"none":"auto",marginRight:10}},G(g.e,{title:n.length>0?n[0].value:"Province",anchorEl:l,handleOpen:function(n){return function(e,n){var a,r;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return b(!0),u(e.currentTarget),o.next=4,f.a.awrap(n.query({query:L.a,variables:{id:t[0].id}}));case 4:a=o.sent,r=a.data.getProvincesByCountry,m(x(r));case 7:case"end":return o.stop()}}),null,null,null,Promise)}(n,e)},handleClose:v,selection:n,setSelection:a,items:p,wrapperStyles:{width:150}}))}))},re=function(e){var t=e.province,n=e.district,a=e.setDistrict,r=s.a.useState(null),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(c.useState)([]),p=d[0],m=d[1],h=Object(c.useState)(!1),b=(h[0],h[1]);var x=function(e){var t=[];return e.forEach((function(e,n){var a={id:e.id,value:e.name};t.push(a)})),t},v=function(){u(null)};return G(y.a,null,(function(e){return G(g.d,{column:!0,color:"transparent",customStyles:{pointerEvents:0===t.length?"none":"auto"}},G(g.e,{title:n.length>0?n[0].value:"District",anchorEl:l,handleOpen:function(n){return function(e,n){var a,r;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return b(!0),u(e.currentTarget),o.next=4,f.a.awrap(n.query({query:U.a,variables:{id:t[0].id}}));case 4:a=o.sent,r=a.data.getDistrictsByProvince,m(x(r));case 7:case"end":return o.stop()}}),null,null,null,Promise)}(n,e)},handleClose:v,selection:n,setSelection:a,items:p,wrapperStyles:{width:150}}))}))},oe=function(e){e.profileImg;var t=e.setProfile,n=(e.images,e.setImages,e.isUploading,e.setIsUploading),a=Object(c.useState)([]),r=a[0],i=a[1],l=Object(c.useState)(!1),u=l[0],d=l[1];return G(s.a.Fragment,null,G(g.d,{flex:0,row:!0,center:!0,color:"transparent",customStyles:{paddingTop:10,paddingBottom:5}},G(g.d,{row:!0,center:!0,middle:!0,flex:0,customStyles:{padding:3,marginRight:5}},G($.a,{style:{fontSize:25}})),G(g.d,{flex:1,row:!0,center:!0,color:"transparent"},r.map((function(e,t){return G(g.b,{key:t,customStyles:{marginRight:4,color:"black",fontSize:13}},e)})))),G(g.d,{flex:.5,row:!0,customStyles:{pointerEvents:0===u?"none":"auto"}},G(X,{type:"button"},G(g.i,{accept:"image/*",id:"text-button-file",type:"file",onChange:function(e){var a,l,c,s;return f.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return n(!0),a=e.target.files,i([].concat(Object(o.a)(r),[a[0].name])),(l=new FormData).append("file",a[0]),l.append("upload_preset","house_assist"),u.next=8,f.a.awrap(fetch("https://api.cloudinary.com/v1_1/dsubmyluz/image/upload/",{method:"POST",body:l}));case 8:return c=u.sent,u.next=11,f.a.awrap(c.json());case 11:(s=u.sent)&&(t(s.secure_url),d(!0),n(!1));case 13:case"end":return u.stop()}}),null,null,null,Promise)},style:{marginLeft:10,width:200}}))))},ie=function(){var e=J(),t=Object(A.a)(),n=Object(c.useState)(!1),a=n[0],r=n[1],o=Object(c.useState)(!1),i=o[0],l=o[1],s=Object(c.useState)("paper"),u=s[0],d=(s[1],Object(M.a)(t.breakpoints.down("sm"))),m=Object(c.useState)(null),h=m[0],y=m[1],b=Object(c.useState)(null),x=b[0],v=b[1],S=Object(c.useState)(null),w=S[0],C=S[1],j=Object(c.useState)(null),O=j[0],T=j[1],_=Object(c.useState)(null),I=_[0],k=_[1],E=Object(c.useState)(null),N=E[0],R=E[1],F=Object(c.useState)(!1),$=(F[0],F[1],Object(c.useState)(null)),B=$[0],z=($[1],Object(c.useState)(null)),L=z[0],U=z[1],H=Object(c.useState)(null),Y=H[0],V=H[1],X=Object(c.useState)(null),ie=X[0],le=(X[1],Object(c.useState)([])),ce=le[0],se=le[1],ue=Object(c.useState)([]),de=ue[0],pe=ue[1],ge=Object(c.useState)([]),me=ge[0],fe=ge[1],he=Object(c.useState)(null),ye=he[0],be=he[1],xe=Object(c.useState)([]),ve=xe[0],Se=xe[1],we=Object(c.useState)([]),Ce=we[0],je=we[1],Oe=Object(c.useState)(""),Te=Oe[0],_e=(Oe[1],function(){r(!0)}),Ie=function(){r(!1)},ke=new Date;ke.setDate(ke.getDate()+3);var Ee=ke.toISOString().substr(0,10);return G(p.a,{mutation:ee,refetchQueries:[{query:W.a}],variables:{firstName:h,lastName:x,no_people:parseInt(w),tenantType:B,isActive:Ce.length>0,tel_no:I,sex:N,stay_duration:ie,comm_email:O,profileImage:ye,houseId:Ce.length>0?Ce[0].id:"",from_date:L,to_date:Y,countryId:ce.length>0?ce[0].id:"",provinceId:me.length>0?me[0].id:"",districtId:de.length>0?de[0].id:"",street:Te}},(function(t,n){var r=n.loading;n.error;return G("div",null,G(K,{onClick:_e},G(Q.a,{style:{fontSize:23,marginRight:5}}),"Add Tenant"),G(D.a,{fullScreen:d,onClose:Ie,classes:{paper:e.dialogPaper},"aria-labelledby":"customized-dialog-title",open:a,scroll:u},G(P.a,{id:"scroll-dialog-title",classes:{root:e.dialogActionStyle}},G(g.d,{row:!0,center:!0,color:"transparent",space:"space-between",customStyles:{paddingTop:15,paddingBottom:7,paddingRight:10,paddingLeft:20}},G(g.n,null," Add Tenant"),G(Z,{onClick:Ie},"Cancel"))),G("form",{method:"post",onSubmit:function(e){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,f.a.awrap(t().then((function(e){Ie()})).catch((function(e){alert(e)})));case 3:case"end":return n.stop()}}),null,null,null,Promise)},style:{display:"flex",flexDirection:"row",paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}},G(q.a,{dividers:"body"===u,style:{flex:1},classes:{root:e.dialogContentStyle}},G("div",null,G(g.d,{row:!0,center:!0,color:"transparent"},G(g.b,{customStyles:{color:"#323130",fontWeight:"600",marginBottom:10}},"Profile Information")),G(g.d,{color:"transparent",row:!0,space:"space-between"},G(g.d,{flex:1,customStyles:{paddingRight:10},color:"transparent"},G(g.i,{placeholder:"First Name",type:"text",value:h,onChange:function(e){return y(e.target.value)}})),G(g.d,{color:"transparent",flex:1,customStyles:{paddingLeft:10}},G(g.i,{placeholder:"Last Name",type:"text",value:x,onChange:function(e){return v(e.target.value)}}))),G(g.d,{color:"transparent",row:!0,space:"space-between"},G(g.d,{flex:1,customStyles:{paddingRight:10},color:"transparent"},G(g.i,{placeholder:"E-mail",type:"email",value:O,onChange:function(e){return T(e.target.value)}})),G(g.d,{color:"transparent",flex:1,customStyles:{paddingLeft:10}},G(g.i,{placeholder:"Tel no",type:"phone",value:I,onChange:function(e){return k(e.target.value)}}))),G(g.d,{color:"transparent",row:!0,space:"space-between"},G(g.d,{flex:1,customStyles:{paddingRight:10},color:"transparent"},G(g.i,{placeholder:"No. of family",type:"number",value:w,onChange:function(e){return C(e.target.value)}})),G(g.d,{color:"transparent",flex:1,customStyles:{paddingLeft:10}},G(g.i,{placeholder:"Sex",type:"text",value:N,onChange:function(e){return R(e.target.value)}}))),G(g.d,{row:!0,center:!0,color:"transparent"},G(g.b,{customStyles:{color:"#323130",fontWeight:"600",marginTop:10,marginBottom:10}},"Duration of stay")),G(g.d,{row:!0,color:"transparent"},G(g.i,{type:"date",label:"From",defaultValue:Ee,value:L,onChange:function(e){return U(e.target.value)},style:{marginRight:20}}),G(g.i,{type:"date",label:"To..",defaultValue:Ee,value:Y,onChange:function(e){return V(e.target.value)}})),G(g.d,{row:!0,center:!0,color:"transparent",customStyles:{marginBottom:10}},G(g.b,{customStyles:{color:"#323130",fontWeight:"600",marginTop:10}},"Location")),G(g.d,{row:!0,color:"transparent",customStyles:{marginBottom:15}},G(ne,{country:ce,setCountry:se}),G(ae,{country:ce,province:me,setProvince:fe}),G(re,{district:de,province:me,setDistrict:pe})),G(g.d,{flex:0,row:!0,center:!0,color:"transparent"},G(g.b,{customStyles:{color:"#323130",fontWeight:"600",marginBottom:10}},"Add House Tenant")),G(g.d,{flex:0,row:!0,center:!0,color:"transparent"},G(g.d,{flex:.3,column:!0,color:"transparent"},G(te,{house:Ce,setHouse:je})),G(g.b,{customStyles:{color:"#E74C3C"}},"you need to atleast have one house")),G(g.d,{row:!0,center:!0,color:"transparent"},G(g.b,{customStyles:{color:"#323130",fontWeight:"600",marginBottom:10}},"Profile picture")),G(oe,{isUploading:i,setIsUploading:l,profileImg:ye,setProfile:be,images:ve,setImages:Se}),G(g.d,{color:"transparent",right:!0,center:!0,row:!0,flex:!1,customStyles:{paddingTop:30,paddingBottom:5}},i?G(g.l,{type:"submit",customStyles:{pointerEvents:i?"none":"auto",opacity:i?.5:1}},"Uploading.."):G(g.l,{type:"submit",customStyles:{pointerEvents:Ce.length<=0?"none":"auto",opacity:Ce.length<=0?.5:1}},r?"saving":"Save Tenant")))))))}))},le=s.a.createElement;function ce(){var e=Object(l.a)(["\n  query PAGINATION_QUERY {\n    tenantsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return ce=function(){return e},e}var se=Object(h.d)(g.d).withConfig({displayName:"tenants__SearchWrapper",componentId:"sc-13ij4ib-0"})(["display:flex;width:100%;flex-direction:row;padding:20px 110px 10px 110px;"]),ue=Object(h.d)(g.d).withConfig({displayName:"tenants__Wrapper",componentId:"sc-13ij4ib-1"})(["display:flex;flex-direction:column;width:100%;padding-top:0px;padding-left:110px;padding-bottom:15px;padding-right:110px;"]),de=(Object(h.d)(g.a).withConfig({displayName:"tenants__ActionBtn",componentId:"sc-13ij4ib-2"})(["display:flex;justify-content:center;align-items:center;align-content:center;padding-right:10px;padding-left:10px;border-radius:2px;background-color:",";"],(function(e){return e.theme.lightGrey})),Object(h.d)(g.h).withConfig({displayName:"tenants__PageBtn",componentId:"sc-13ij4ib-3"})(["display:flex;justify-content:center;align-items:center;align-content:center;border:none;margin-right:5px;height:33px;width:33px;",""],(function(e){return e.activeStyles}))),pe=d()(ce()),ge=function(e){var t=e.setSkip,n=s.a.useState(1),a=Object(i.a)(n,2),r=a[0],l=a[1];return le(p.b,{query:pe},(function(e){var n=e.data;e.loading,e.error;if(n){var a=n.tenantsConnection.aggregate.count,i=Math.ceil(a/T.b),c=r<=1,s=r>=i;return le(g.d,{flex:0,row:!0,middle:!0,customStyles:{paddingTop:10,paddingBottom:25}},le(g.h,{onClick:function(){return l(r-1),void t(r-1)},customStyles:{border:"1px solid #E1E1E1",marginRight:10,height:33,width:33,pointerEvents:c?"none":"auto",opacity:c?.6:1}},le(E.a,{style:{fontSize:25}})),Object(o.a)(Array(i)).map((function(e,n){var a=n+1;return le(de,{key:n,onClick:function(){l(a),t(a)},activeStyles:{backgroundColor:a===r?"#E1E1E1":"transparent",pointerEvents:a===r?"none":"auto"}},le("span",null,a))})),le(g.h,{onClick:function(){return l(r+1),void t(r+1)},customStyles:{border:"1px solid #E1E1E1",height:33,width:33,marginLeft:5,pointerEvents:s?"none":"auto",opacity:s?.6:1}},le(R.a,{style:{fontSize:25}})))}return null}))};t.b=function(e){var t=e.tenants,n=e.setSkip,o=Object(r.a)(e,["tenants","setSkip"]),l=s.a.useState(!1),c=Object(i.a)(l,2),u=(c[0],c[1]),d=s.a.useState(null),p=Object(i.a)(d,2),m=p[0],f=p[1];return le(g.d,{flex:1},le(se,null,le(g.g,null,"Your Tenants"),le(g.d,{row:!0,center:!0,flex:1,right:!0},le(g.o,null,"Search:"),le(j,{setLoading:u,setFound:f}),le(ie,null))),le(ue,null,le(g.d,{space:"space-between",center:!0,row:!0,customStyles:{paddingTop:10,paddingBottom:10}},le(g.d,{row:!0,center:!0,flex:1})),null===m&&le(s.a.Fragment,null,t&&t.length>0&&le(ge,{setSkip:n}),le(g.d,{flex:1,row:!0,customStyles:{flexWrap:"wrap"}},t&&t.map((function(e){return le(O.a,Object(a.a)({key:e.id,tenant:e},o))}))),t&&t.length<=0&&le(g.d,{flex:1,column:!0,center:!0,middle:!0,customStyles:{minHeight:300}},le(g.n,{customStyles:{marginBottom:20}},"No Tenants found?"),le(I.a,{style:{fontSize:100,color:"#1C2833",marginBottom:20,marginTop:20}}),le(g.b,null,"Try to create one Tenant"))),null!==m&&le(g.d,{flex:1,row:!0,customStyles:{flexWrap:"wrap"}},m.map((function(e){return le(O.a,Object(a.a)({key:e.id,tenant:e},o))}))),null!==m&&0===m.length&&le(g.d,{flex:1,column:!0,middle:!0,center:!0,customStyles:{flexWrap:"wrap"}},le(g.n,null,"No House Found"))))}},x1ji:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"PersonPin");t.default=o}}]);