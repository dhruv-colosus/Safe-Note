(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(30),c=a.n(r),s=(a(124),a(125),a(7)),o=(a(126),a(127),a.p+"static/media/notes.7c831644.png"),i=a(14),l=a(18),u=a(179),d=a(173),j=a(181),b=a(9),p=a(107),h=a(178),O=a(12),x=a(11),m=a.n(x),f=a(16),g="USER_LOGIN_REQUEST",v="USER_LOGIN_SUCCESS",y="USER_LOGIN_FAIL",_="USER_LOGOUT",N="USER_REGISTER_REQUEST",S="USER_REGISTER_SUCCESS",E="USER_REGISTER_FAIL",C="USER_UPDATE_REQUEST",w="USER_UPDATE_SUCCESS",I="USER_UPDATE_FAIL",L=a(34),T=a.n(L),k=function(e,t){return function(){var a=Object(f.a)(m.a.mark((function a(n){var r,c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:g}),r={headers:{"Content-type":"application/json"}},a.next=5,T.a.post("http://localhost:4000/api/users/login",{email:e,password:t},r);case 5:c=a.sent,s=c.data,n({type:v,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:y,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},U=function(e,t,a,n){return function(){var r=Object(f.a)(m.a.mark((function r(c){var s,o,i;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:N}),s={headers:{"Content-type":"application/json"}},r.next=5,T.a.post("http://localhost:4000/api/users",{name:e,pic:n,email:t,password:a},s);case 5:o=r.sent,i=o.data,c({type:S,payload:i}),c({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:E,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(f.a)(m.a.mark((function t(a,n){var r,c,s,o,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:C}),r=n(),c=r.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,T.a.post("http://localhost:4000/api/users/updateprofile",e,s);case 6:o=t.sent,i=o.data,a({type:w,payload:i}),a({type:v,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),a({type:I,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,a){return t.apply(this,arguments)}}()},P=a(1);var B=function(e){var t=e.setSearch,a=Object(i.f)(),n=Object(O.b)(),r=Object(O.c)((function(e){return e.userLogin})).userInfo,c=function(){n(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("userInfo"),t({type:_});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.push("/")};return Object(P.jsx)(u.a,{style:{backgroundColor:"black"},variant:"dark",expand:"lg",children:Object(P.jsxs)(d.a,{fluid:!0,children:[Object(P.jsx)(u.a.Brand,{className:"header_title ml-5 ",children:Object(P.jsxs)(l.b,{to:"/",children:[Object(P.jsx)("img",{src:o,style:{width:"1.6rem",marginRight:"10px"},alt:"n"}),"Safe Note"]})}),Object(P.jsx)(u.a.Toggle,{"aria-controls":"navbarScroll"}),Object(P.jsxs)(u.a.Collapse,{id:"navbarScroll",children:[Object(P.jsx)(j.a,{className:"m-auto",children:r?Object(P.jsx)(b.a,{className:"d-flex",children:Object(P.jsx)(p.a,{style:{width:"20vw"},type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){t(e.target.value)}})}):""}),Object(P.jsx)(j.a,{className:"mr-5 my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:r?Object(P.jsxs)(P.Fragment,{children:[" ",Object(P.jsx)(j.a.Link,{href:"/mynotes",className:"active",children:"My Notes"}),Object(P.jsxs)(h.a,{className:"active",title:r?"".concat(r.name):"Login",id:"navbarScrollingDropdown",children:[Object(P.jsx)(h.a.Item,{href:"/profile",children:"Profile "}),Object(P.jsx)(h.a.Divider,{}),Object(P.jsx)(h.a.Item,{onClick:function(){c()},children:"LogOut"})]})]}):Object(P.jsx)(j.a.Link,{href:"/login",className:"active",children:"Login"})})]})]})})},G=a(174),A=a(108);var D=function(){return Object(P.jsx)("div",{children:Object(P.jsx)("footer",{style:{width:"100%",position:"relative",bottom:0,display:"flex",justifyContent:"center"},children:Object(P.jsx)(d.a,{children:Object(P.jsx)(G.a,{children:Object(P.jsx)(A.a,{className:"text-center py-3",children:"Copyright \xa9 Dhruv Deora"})})})})})},F=(a(158),a.p+"static/media/notess.84ba53e1.png");var H=function(){var e=Object(i.f)();return Object(n.useEffect)((function(){localStorage.getItem("userInfo")&&e.push("/mynotes")}),[e]),Object(P.jsxs)("div",{className:"land",children:[Object(P.jsxs)("div",{className:"land_left",children:[Object(P.jsx)("h2",{children:"Welcome to SafeNote !"}),Object(P.jsx)("p",{children:"Store your Notes in one of the Safest Online Notes Provider and retrieve them in a go. Build on MERN stack , this is one of the fastest Notes Provider."}),Object(P.jsxs)("div",{className:"land_btns",children:[Object(P.jsx)(l.b,{to:"/login",children:Object(P.jsx)("button",{className:"land_login",children:"Login"})}),Object(P.jsx)(l.b,{to:"/register",children:Object(P.jsx)("button",{className:"land_signup",children:"Register"})})]})]}),Object(P.jsx)("div",{className:"land_right",children:Object(P.jsx)("img",{className:"land_img",src:F,alt:"notes"})})]})},Y=a(110),z=a(182),W=a(180),Q=a(177),J=a(175);var M=function(e){var t=e.size,a=void 0===t?100:t;return Object(P.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:Object(P.jsx)(J.a,{style:{width:a,height:a},animation:"border"})})},q=a(176),K=function(e){var t=e.variant,a=void 0===t?"info":t,n=e.children;return Object(P.jsx)(q.a,{variant:a,style:{fontSize:20},children:Object(P.jsx)("strong",{children:n})})};a(159);var V=function(e){var t=e.title,a=e.children;return Object(P.jsx)("div",{className:"main-back",children:Object(P.jsx)(d.a,{children:Object(P.jsx)(G.a,{children:Object(P.jsxs)("div",{className:"page",children:[t&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h1",{className:"heading",children:t}),Object(P.jsx)("hr",{})]}),a]})})})})},X=(a(160),"NOTES_LIST_REQUEST"),Z="NOTES_LIST_SUCCESS",$="NOTES_LIST_FAIL",ee="NOTES_CREATE_REQUEST",te="NOTES_CREATE_SUCCESS",ae="NOTES_CREATE_FAIL",ne="NOTES_UPDATE_REQUEST",re="NOTES_UPDATE_SUCCESS",ce="NOTES_UPDATE_FAIL",se="NOTES_DELETE_REQUEST",oe="NOTES_DELETE_SUCCESS",ie="NOTES_DELETE_FAIL";var le=function(e){var t=e.search,a=Object(i.f)(),r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],u=c[1],d=Object(n.useState)(""),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(O.b)(),x=Object(O.c)((function(e){return e.noteList})),g=x.loading,v=x.notes,y=x.error,_=Object(O.c)((function(e){return e.userLogin})).userInfo,N=Object(O.c)((function(e){return e.noteDelete})),S=N.loading,E=N.error,C=N.success,w=function(){return u(!1)},I=function(e){u(!0);var t=v.find((function(t){return t._id===e}));p(t)},L=function(e){window.confirm("Are You Sure")&&h(function(e){return function(){var t=Object(f.a)(m.a.mark((function t(a,n){var r,c,s,o,i,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:se}),r=n(),c=r.userLogin.userInfo,s={headers:{Authorization:"Bearer ".concat(c.token)}},t.next=6,T.a.delete("http://localhost:4000/api/notes/".concat(e),s);case 6:o=t.sent,i=o.data,a({type:oe,payload:i}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),l=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,a({type:ie,payload:l});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(e))},k=Object(O.c)((function(e){return e.noteCreate})).success,U=Object(O.c)((function(e){return e.noteUpdate})).success;return Object(n.useEffect)((function(){_||a.push("/"),h(function(){var e=Object(f.a)(m.a.mark((function e(t,a){var n,r,c,s,o,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:X}),n=a(),r=n.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(r.token)}},e.next=6,T.a.get("http://localhost:4000/api/notes",c);case 6:s=e.sent,o=s.data,t({type:Z,payload:o}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),i=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:$,payload:i});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}())}),[h,_,a,k,U,C]),Object(P.jsxs)(V,{title:"Welcome Back ".concat(_.name),children:[Object(P.jsx)("div",{className:"addnote_btn_div",children:Object(P.jsx)(l.b,{to:"/createnote",children:Object(P.jsx)(Y.a,{className:"addnote_btn",style:{},size:"lg",children:"+"})})}),Object(P.jsxs)("div",{className:"mynotes_div",children:[g?Object(P.jsx)(M,{}):"",y?Object(P.jsx)(K,{variant:"danger",children:y}):"",S?Object(P.jsx)(M,{}):"",E?Object(P.jsx)(K,{variant:"danger",children:E}):"",null===v||void 0===v?void 0:v.reverse().filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(z.a,{className:"card_body",style:{width:"18rem"},children:[Object(P.jsxs)(z.a.Body,{onClick:function(){return I(e._id)},children:[Object(P.jsx)(z.a.Title,{style:{fontSize:"1.4rem",fontWeight:"700"},children:e.title.slice(0,20)}),Object(P.jsx)(z.a.Text,{style:{fontSize:"0.94rem",fontWeight:"300"},children:Object(P.jsx)(Q.a,{children:e.content.slice(0,120)})})]}),Object(P.jsxs)("div",{className:"note_btns",children:[Object(P.jsx)(Y.a,{className:"btn_edit",variant:"primary",href:"/note/".concat(e._id),children:"Edit"}),Object(P.jsx)(Y.a,{className:"btn_delete",onClick:function(t){return L(e._id)},children:"Delete"})]})]},e._id),Object(P.jsxs)(W.a,{show:o,centered:!0,onHide:w,children:[Object(P.jsx)(W.a.Header,{closeButton:!0,children:Object(P.jsx)(W.a.Title,{className:"modal_title",children:b.title})}),Object(P.jsxs)(W.a.Body,{className:"modal_body",children:[Object(P.jsxs)(Q.a,{children:[" ",b.content]}),b.content]}),Object(P.jsxs)(W.a.Footer,{children:[Object(P.jsx)(Y.a,{style:{position:"absolute",left:10,backgroundColor:"yellowgreen",border:"0px solid"},href:"/note/".concat(b._id),children:"Edit"}),"Last Updated on ",e.createdAt.substring(0,10)]})]})]})}))]})]})},ue=(a(162),function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),x=h[0],g=h[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),_=y[0],N=y[1],S=Object(n.useState)("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"),E=Object(s.a)(S,2),C=E[0],w=(E[1],Object(n.useState)(null)),I=Object(s.a)(w,2),L=I[0],T=I[1],k=Object(O.b)(),R=Object(O.c)((function(e){return e.userRegister})),B=R.loading,D=R.error,F=R.userInfo,H=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),x!==_?T("Passwords do not match"):k(U(r,d,x,C));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F&&e.push("/mynotes")}),[e,F]),Object(P.jsx)("div",{className:"login_flex",children:Object(P.jsxs)(V,{title:"Register User",children:[D&&Object(P.jsx)(K,{variant:"danger",children:D}),L?Object(P.jsx)(K,{variant:"danger",children:L}):"",B?Object(P.jsx)(M,{}):"",Object(P.jsxs)(b.a,{className:"login_container",children:[Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(P.jsx)(b.a.Label,{children:"Name"}),Object(P.jsx)(b.a.Control,{value:r,type:"text",placeholder:"Enter Your Name",onChange:function(e){return c(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(P.jsx)(b.a.Label,{children:"Email address"}),Object(P.jsx)(b.a.Control,{value:d,type:"email",placeholder:"Enter email",onChange:function(e){return j(e.target.value)}}),Object(P.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{children:"Password"}),Object(P.jsx)(b.a.Control,{type:"password",value:x,placeholder:"Password",onChange:function(e){return g(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{children:"Confirm Password"}),Object(P.jsx)(b.a.Control,{type:"password",value:_,placeholder:"Confirm Password",onChange:function(e){return N(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(P.jsx)(b.a.Label,{children:"Upload Your Pic"}),Object(P.jsx)(b.a.Control,{type:"file"})]}),Object(P.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:H,children:"Register"})]}),Object(P.jsx)(G.a,{className:"py-3",children:Object(P.jsxs)(A.a,{children:["Have an Account ?",Object(P.jsx)(l.b,{className:"register_here",to:"/login",children:"\xa0Login Here"})]})})]})})}),de=(a(163),function(){var e=Object(i.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),d=u[0],j=u[1],p=Object(O.b)(),h=Object(O.c)((function(e){return e.userLogin})),x=h.loading,g=h.error,v=h.userInfo,y=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),p(k(r,d));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v&&e.push("/mynotes")}),[e,v]),Object(P.jsx)("div",{className:"login_flex",children:Object(P.jsxs)(V,{title:"Login",children:[g?Object(P.jsx)(K,{variant:"danger",children:g}):"",x?Object(P.jsx)(M,{}):"",Object(P.jsxs)(b.a,{className:"login_container",children:[Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(P.jsx)(b.a.Label,{children:"Email address"}),Object(P.jsx)(b.a.Control,{value:r,type:"email",placeholder:"Enter email",onChange:function(e){return c(e.target.value)}}),Object(P.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{children:"Password"}),Object(P.jsx)(b.a.Control,{type:"password",value:d,placeholder:"Password",onChange:function(e){return j(e.target.value)}})]}),Object(P.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"}),Object(P.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:y,children:"Login"})]}),Object(P.jsx)(G.a,{className:"py-3",children:Object(P.jsxs)(A.a,{children:["New Customer?"," ",Object(P.jsx)(l.b,{className:"register_here",to:"/register",children:"Register Here"})]})})]})})}),je=(a(104),function(){var e=Object(i.f)(),t=Object(O.b)(),a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),d=u[0],j=u[1],p=Object(n.useState)(""),h=Object(s.a)(p,2),x=h[0],g=h[1],v=Object(O.c)((function(e){return e.noteCreate})),y=v.loading,_=v.error,N=function(a){a.preventDefault(),c&&x&&d&&(t(function(e,t,a){return function(){var n=Object(f.a)(m.a.mark((function n(r,c){var s,o,i,l,u,d;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:ee}),s=c(),o=s.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},n.next=6,T.a.post("http://localhost:4000/api/notes/create",{title:e,content:t,category:a},i);case 6:l=n.sent,u=l.data,r({type:te,payload:u}),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),d=n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message,r({type:ae,payload:d});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()}(c,x,d)),g(""),j(""),o(""),e.push("/mynotes"))};return Object(P.jsxs)("div",{className:"center_create",children:[y?Object(P.jsx)(M,{}):"",_?Object(P.jsx)(K,{variant:"danger",children:_}):"",Object(P.jsxs)(z.a,{className:" create_card",children:[Object(P.jsx)(z.a.Header,{className:"create_card_input_header",children:"Enter Your Note Here"}),Object(P.jsxs)(b.a,{children:[Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Title"}),Object(P.jsx)(b.a.Control,{type:"text",value:c,placeholder:"Title",onChange:function(e){return o(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Category"}),Object(P.jsx)(b.a.Control,{type:"text",placeholder:"Eg:- Urgent/Basic/ToDo",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"exampleForm.ControlTextarea1",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Content"}),Object(P.jsx)(b.a.Control,{as:"textarea",rows:6,value:x,placeholder:"Enter Your Note Here",onChange:function(e){return g(e.target.value)}})]}),x&&Object(P.jsxs)(z.a,{className:"create_card_input my-3",children:[Object(P.jsx)(z.a.Header,{children:"Note Preview"}),Object(P.jsx)(z.a.Body,{children:Object(P.jsx)(Q.a,{children:x})})]}),Object(P.jsx)(Y.a,{className:"create_card_button",variant:"primary",type:"submit",onClick:function(e){return N(e)},children:"Submit"})]}),Object(P.jsx)(z.a.Footer,{className:"text-muted",children:"Your Note is safe with You :-)"})]})]})});var be=function(){var e=Object(i.f)(),t=Object(i.g)(),a=Object(O.b)(),r=Object(n.useState)(),c=Object(s.a)(r,2),o=c[0],l=c[1],u=Object(n.useState)(),d=Object(s.a)(u,2),j=d[0],p=d[1],h=Object(n.useState)(),x=Object(s.a)(h,2),g=x[0],v=x[1],y=Object(n.useState)(),_=Object(s.a)(y,2),N=_[0],S=_[1],E=Object(O.c)((function(e){return e.noteUpdate})),C=E.loading,w=E.error,I=function(n){n.preventDefault(),o&&g&&j&&(a(function(e,t,a,n){return function(){var r=Object(f.a)(m.a.mark((function r(c,s){var o,i,l,u,d,j;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:ne}),o=s(),i=o.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},r.next=6,T.a.put("http://localhost:4000/api/notes/".concat(e),{title:t,content:a,category:n},l);case 6:u=r.sent,d=u.data,c({type:re,payload:d}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),j=r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message,c({type:ce,payload:j});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,t){return r.apply(this,arguments)}}()}(t.id,o,g,j)),v(""),p(""),l(""),e.push("/mynotes"))};return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("http://localhost:4000/api/notes/".concat(t.id));case 2:a=e.sent,n=a.data,v(n.content),p(n.category),l(n.title),S(n.updatedAt);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.id,N]),Object(P.jsxs)("div",{className:"center_create",children:[C?Object(P.jsx)(M,{}):"",w?Object(P.jsx)(K,{variant:"danger",children:w}):"",Object(P.jsxs)(z.a,{className:" create_ca =rd",children:[Object(P.jsx)(z.a.Header,{className:"create_card_input_header",children:"Enter Your Note Here"}),Object(P.jsxs)(b.a,{children:[Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Title"}),Object(P.jsx)(b.a.Control,{type:"text",value:o,placeholder:"Title",onChange:function(e){return l(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Category"}),Object(P.jsx)(b.a.Control,{type:"text",placeholder:"Eg:- Urgent/Basic/ToDo",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3 create_card_input",controlId:"exampleForm.ControlTextarea1",children:[Object(P.jsx)(b.a.Label,{className:"create_card_input_heading",children:"Content"}),Object(P.jsx)(b.a.Control,{as:"textarea",rows:6,value:g,placeholder:"Enter Your Note Here",onChange:function(e){return v(e.target.value)}})]}),g&&Object(P.jsxs)(z.a,{className:"create_card_input my-3",children:[Object(P.jsx)(z.a.Header,{children:"Note Preview"}),Object(P.jsx)(z.a.Body,{children:Object(P.jsx)(Q.a,{children:g})})]}),Object(P.jsx)(Y.a,{className:"create_card_button",variant:"primary",type:"submit",onClick:function(e){return I(e)},children:"Update"})]}),Object(P.jsx)(z.a.Footer,{className:"text-muted",children:"Your Note is safe with You :-)"})]})]})};var pe=function(){var e=Object(i.f)(),t=Object(O.c)((function(e){return e.userLogin})).userInfo,a=Object(n.useState)(t.name),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(t.email),d=Object(s.a)(u,2),j=d[0],p=d[1],h=Object(n.useState)(""),x=Object(s.a)(h,2),g=x[0],v=x[1],y=Object(n.useState)(""),_=Object(s.a)(y,2),N=_[0],S=_[1],E=Object(n.useState)(""),C=Object(s.a)(E,2),w=C[0],I=C[1],L=Object(O.c)((function(e){return e.userUpdate})),T=L.loading,k=L.error,U=L.success,B=Object(O.b)(),G=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),g!==N){e.next=6;break}B(R({name:c,email:j,password:g})),I(""),e.next=7;break;case 6:return e.abrupt("return",I("Passwords Do Not Match"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t||e.push("/")}),[e]),Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"login_flex",children:Object(P.jsxs)(V,{title:"Update Profile",children:[k?Object(P.jsx)(K,{variant:"danger",children:k}):"",w?Object(P.jsx)(K,{variant:"danger",children:w}):"",T?Object(P.jsx)(M,{}):"",U?Object(P.jsx)(K,{variant:"success",children:"SuccessFully Updated"}):"",Object(P.jsxs)(b.a,{className:"login_container",children:[Object(P.jsxs)(b.a.Group,{className:"mb-3",children:[Object(P.jsx)(b.a.Label,{children:"Name"}),Object(P.jsx)(b.a.Control,{value:c,type:"text",placeholder:"Update Name",onChange:function(e){return o(e.target.value)}}),Object(P.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(P.jsx)(b.a.Label,{children:"Email address"}),Object(P.jsx)(b.a.Control,{value:j,type:"email",placeholder:"Update email",onChange:function(e){return p(e.target.value)}}),Object(P.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{children:"Password"}),Object(P.jsx)(b.a.Control,{type:"password",value:g,placeholder:"Update Password",onChange:function(e){return v(e.target.value)}})]}),Object(P.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(P.jsx)(b.a.Label,{children:" Confirm Password"}),Object(P.jsx)(b.a.Control,{type:"password",value:N,placeholder:"Update Password",onChange:function(e){return S(e.target.value)}})]}),Object(P.jsx)(b.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"}),Object(P.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"flex_btnsss",children:[Object(P.jsx)(b.a,{className:"login_btn",variant:"primary",type:"submit",onClick:G,children:"Update Profile"}),U?Object(P.jsx)(l.b,{to:"/mynotes",children:Object(P.jsx)(b.a,{style:{backgroundColor:"Green",textAlign:"center"},className:"login_btn",variant:"primary",type:"submit",children:"Go Back"})}):""]})]})]})})})};var he=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(P.jsx)(l.a,{children:Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(B,{setSearch:r}),Object(P.jsxs)(i.c,{children:[Object(P.jsx)(i.a,{path:"/mynotes",exact:!0,children:Object(P.jsx)(le,{search:a})}),Object(P.jsx)(i.a,{path:"/profile",exact:!0,children:Object(P.jsx)(pe,{})}),Object(P.jsx)(i.a,{path:"/createnote",exact:!0,children:Object(P.jsx)(je,{})}),Object(P.jsx)(i.a,{path:"/note/:id",children:Object(P.jsx)(be,{})}),Object(P.jsx)(i.a,{path:"/login",exact:!0,children:Object(P.jsx)(de,{})}),Object(P.jsx)(i.a,{path:"/register",exact:!0,children:Object(P.jsx)(ue,{})}),Object(P.jsx)(i.a,{path:"/",exact:!0,children:Object(P.jsx)(H,{})})]}),Object(P.jsx)(D,{})]})})},Oe=a(69),xe=a(115),me=a(114),fe={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},ge=Object(Oe.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case y:return{loading:!1,error:t.payload};case _:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case S:return{loading:!1,userInfo:t.payload};case E:return{loading:!1,error:t.payload};default:return e}},noteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{loading:!0};case Z:return{loading:!1,notes:t.payload};case $:return{loading:!1,error:t.payload};default:return e}},noteCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return{loading:!0};case te:return{loading:!1,success:!0};case ae:return{loading:!1,error:t.payload};default:return e}},noteUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return{loading:!0};case re:return{loading:!1,success:!0};case ce:return{loading:!1,error:t.payload,success:!1};default:return e}},noteDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return{loading:!0};case oe:return{loading:!1,success:!0};case ie:return{loading:!1,error:t.payload,success:!1};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case w:return{loading:!1,userInfo:t.payload,success:!0};case I:return{loading:!1,error:t.payload,success:!1};default:return e}}}),ve=[xe.a],ye=Object(Oe.createStore)(ge,fe,Object(me.composeWithDevTools)(Oe.applyMiddleware.apply(void 0,ve)));c.a.render(Object(P.jsx)(O.a,{store:ye,children:Object(P.jsx)(he,{})}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.769d648d.chunk.js.map