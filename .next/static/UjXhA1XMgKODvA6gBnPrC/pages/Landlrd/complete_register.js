(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"93dI":function(n,e,t){"use strict";var r="375px",a="425px",i="768px",o="1024px",c="1440px",u="2560px";"(min-width: ".concat("320px",")"),"(min-width: ".concat(r,")"),"(min-width: ".concat(a,")"),"(min-width: ".concat(i,")"),"(min-width: ".concat(o,")"),"(min-width: ".concat(c,")"),"(min-width: ".concat(u,")"),"(min-width: ".concat(u,")")},TuVA:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Landlrd/complete_register",function(){return t("U+mq")}])},"U+mq":function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),a=t.n(r),i=t("h4VS"),o=(t("o0o1"),t("ODXe")),c=t("YFqc"),u=t.n(c),l=t("nOHt"),d=t.n(l),s=t("ttZb"),p=t("6L5Y"),m=t("lTCR"),f=t.n(m),b=(t("lqOT"),t("vOnD")),h=(t("93dI"),t("Np96")),g=t.n(h),y=(t("YbdR"),t("WRcy"),t("kseb"),a.a.createElement);function v(){var n=Object(i.a)(["\n  mutation CREATE_LANDLORD_MUTATION(\n    $firstName: String!\n    $lastName: String!\n    $tel_no: String\n    $reason: String\n    $street: String\n  ) {\n    createLandlord(\n      firstName: $firstName\n      lastName: $lastName\n      tel_no: $tel_no\n      reason: $reason\n      street: $street\n    ) {\n      id\n      firstName\n    }\n  }\n"]);return v=function(){return n},n}var S=Object(b.d)(p.d).withConfig({displayName:"CompleteRegister__ImgWrapper",componentId:"r6hcm3-0"})(["flex-direction:column;flex:0.3;padding-top:50px;padding-left:60px;padding-right:10px;background-color:",";min-height:100%;max-height:100%;"],(function(n){return n.theme.btnPrimary})),O=Object(b.d)(p.d).withConfig({displayName:"CompleteRegister__FormWrapper",componentId:"r6hcm3-1"})(["flex-direction:column;padding-top:40px;padding-left:60px;padding-right:60px;flex:0.7;min-height:100%;max-height:100%;"]),x=b.d.form.withConfig({displayName:"CompleteRegister__Form",componentId:"r6hcm3-2"})(["display:flex;flex-direction:column;width:50%;flex:0.72;padding-top:30px;padding-bottom:20px;"]),T=f()(v()),w=function(){var n=Object(r.useState)([]),e=(n[0],n[1],Object(r.useState)([])),t=(e[0],e[1],Object(r.useState)([])),a=(t[0],t[1],Object(r.useState)(null)),i=a[0],c=a[1],l=Object(r.useState)(null),m=l[0],f=l[1],b=Object(r.useState)(null),h=b[0],v=b[1],w=Object(r.useState)(null),N=w[0],j=w[1],R=Object(r.useState)(null),C=R[0],I=R[1],_=Object(s.b)(T,{variables:{firstName:i,lastName:m,tel_no:h,reason:N,street:C}}),q=Object(o.a)(_,2),E=q[0],P=q[1],$=P.data,A=P.loading;return console.log($),y(p.d,{flex:1,row:!0,customStyles:{minHeight:"100vh",maxHeight:"100vh"}},y(O,null,y(p.d,{flex:!1,row:!0,center:!0,color:"transparent"},y("img",{src:g.a,style:{width:"50px",height:"50px",marginRight:"10px"}}),y(p.p,null,"House-Assist Space")),y(p.d,{flex:1,column:!0,center:!0},y(x,{method:"post",onSubmit:function(n){n.preventDefault(),E(),d.a.replace("/Landlrd/dashboard"),c(null),f(null),v(null),j(null),I(null)}},y(p.g,{customStyles:{fontWeight:"400",marginBottom:5}},"Provide more information"),y("fieldset",{disabled:A,style:{display:"flex",paddingTop:"30px",paddingLeft:0,paddingRight:0,paddingBottom:0,border:"none",flexDirection:"column",marginBottom:10}},y(p.b,{customStyles:{marginBottom:10}},"Tell us a little more about yourself"),y(p.i,{label:"FIRST NAME",placeholder:"First Name",type:"text",value:i,onChange:function(n){return c(n.target.value)}}),y(p.i,{label:"LAST NAME",placeholder:"Last Name",type:"text",value:m,onChange:function(n){return f(n.target.value)}}),y(p.i,{label:"PHONE NUMBER",placeholder:"Phone Number",type:"tel",value:h,onChange:function(n){return v(n.target.value)}}),y(p.i,{label:"LOCATION",placeholder:"Country/ city / street",type:"tel",value:C,onChange:function(n){return I(n.target.value)}}),y(p.b,{customStyles:{marginBottom:10,fontSize:11,color:"#323130"}},"WHY ARE YOU JOINING HOUSE-ASSIST SPACE"),y(p.i,{placeholder:"provide reason",type:"text",value:N,onChange:function(n){return j(n.target.value)}})),y(p.d,{row:!0,center:!0,space:"space-between"},y(u.a,{href:"/Landlrd/dashboard",as:"/Landlrd/dashboard"},y("a",null,y(p.l,{type:"button",customStyles:{paddingTop:8,paddingBottom:8,marginTop:10,width:100}},"Skip"))),A?y(p.l,{type:"submit",customStyles:{paddingTop:8,paddingBottom:8,marginTop:10,width:100}},"Saving"):y(p.l,{disabled:null===i,type:"submit",customStyles:{paddingTop:8,paddingBottom:8,marginTop:10,width:100}},"Save"))))),y(S,null))},N=a.a.createElement;e.default=function(){return N(w,null)}},WRcy:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t("wx14"),a=t("h4VS"),i=t("q1tI"),o=t.n(i),c=t("vbcS"),u=t("lTCR"),l=t.n(u),d=o.a.createElement;function s(){var n=Object(a.a)(["\n  query GET_DISTRICTS_IN_PROVINCE($id: ID!) {\n    getDistrictsByProvince(id: $id) {\n      id\n      name\n    }\n  }\n"]);return s=function(){return n},n}var p=l()(s());e.b=function(n){return d(c.b,Object(r.a)({},n,{query:p,variables:{id:n.id}}),(function(e){return n.children(e)}))}},YbdR:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t("wx14"),a=t("h4VS"),i=t("q1tI"),o=t.n(i),c=t("vbcS"),u=t("lTCR"),l=t.n(u),d=o.a.createElement;function s(){var n=Object(a.a)(["\n  query GET_PROVINCES_IN_COUNTRY($id: ID!) {\n    getProvincesByCountry(id: $id) {\n      id\n      name\n    }\n  }\n"]);return s=function(){return n},n}var p=l()(s());e.b=function(n){return d(c.b,Object(r.a)({},n,{query:p,variables:{id:n.id}}),(function(e){return n.children(e)}))}},kseb:function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var r=t("wx14"),a=t("h4VS"),i=t("q1tI"),o=t.n(i),c=t("vbcS"),u=t("lTCR"),l=t.n(u),d=o.a.createElement;function s(){var n=Object(a.a)(["\n  query {\n    countries {\n      id\n      name\n      provinces {\n        id\n        name\n        districts {\n          id\n          name\n          sectors {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n"]);return s=function(){return n},n}var p=l()(s());e.b=function(n){return d(c.b,Object(r.a)({},n,{query:p}),(function(e){return n.children(e)}))}},o0o1:function(n,e,t){n.exports=t("ls82")},vbcS:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return c}));var r=t("mrSG"),a=t("ttZb"),i=t("17x9"),o=t.n(i);function c(n){var e=n.children,t=n.query,i=Object(r.e)(n,["children","query"]),o=Object(a.c)(t,i);return e&&o?e(o):null}function u(n){var e=Object(a.b)(n.mutation,n),t=e[0],r=e[1];return n.children?n.children(t,r):null}function l(n){var e=Object(a.d)(n.subscription,n);return n.children&&e?n.children(e):null}!function(n){n.propTypes={client:o.a.object,children:o.a.func.isRequired,fetchPolicy:o.a.string,notifyOnNetworkStatusChange:o.a.bool,onCompleted:o.a.func,onError:o.a.func,pollInterval:o.a.number,query:o.a.object.isRequired,variables:o.a.object,ssr:o.a.bool,partialRefetch:o.a.bool,returnPartialData:o.a.bool}}(c||(c={})),function(n){n.propTypes={mutation:o.a.object.isRequired,variables:o.a.object,optimisticResponse:o.a.oneOfType([o.a.object,o.a.func]),refetchQueries:o.a.oneOfType([o.a.arrayOf(o.a.oneOfType([o.a.string,o.a.object])),o.a.func]),awaitRefetchQueries:o.a.bool,update:o.a.func,children:o.a.func.isRequired,onCompleted:o.a.func,onError:o.a.func,fetchPolicy:o.a.string}}(u||(u={})),function(n){n.propTypes={subscription:o.a.object.isRequired,variables:o.a.object,children:o.a.func,onSubscriptionData:o.a.func,onSubscriptionComplete:o.a.func,shouldResubscribe:o.a.oneOfType([o.a.func,o.a.bool])}}(l||(l={}))}},[["TuVA",0,2,1,3,5,4]]]);