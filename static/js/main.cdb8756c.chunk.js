(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{21:function(e,t,n){e.exports={header:"Header_header__XlsL2",logo:"Header_logo__3KJX_",region:"Header_region__1xgtw",icon:"Header_icon__1xavi",login:"Header_login__13tCi",main:"Header_main__3X-RL",logOut:"Header_logOut__2szZ-"}},22:function(e,t,n){e.exports={photo:"Users_photo__10zGs",main:"Users_main__uHd8N",content:"Users_content__45MrH",users:"Users_users__lJ20s",title:"Users_title__25cNx",item:"Users_item__1ZS3k",item_right:"Users_item_right__4Ny_g",name:"Users_name__dbiFR",followed:"Users_followed__3sczf"}},23:function(e,t,n){e.exports={main:"ProfileInfo_main__SAb4T",header:"ProfileInfo_header__1lITb",content:"ProfileInfo_content__307eA",about:"ProfileInfo_about__EJqM8",about_title:"ProfileInfo_about_title__3xMQy",name:"ProfileInfo_name__I2hNY",info:"ProfileInfo_info__3mvHo",item:"ProfileInfo_item__OdwwX",item_title:"ProfileInfo_item_title__20eoT",item_value:"ProfileInfo_item_value__K4VOJ"}},27:function(e,t,n){e.exports={main:"Dialogs_main__3R7Ka",content:"Dialogs_content__1nnl1",dialogs:"Dialogs_dialogs__3K9os",messages:"Dialogs_messages__10Erg",send_message:"Dialogs_send_message__3I9K9",textarea:"Dialogs_textarea__3LB2v",button:"Dialogs_button__3K-Yb"}},31:function(e,t,n){e.exports={content:"MyPost_content__IAHca",title:"MyPost_title__2YqSs",form:"MyPost_form__2K0wz",button:"MyPost_button__raeao"}},34:function(e,t,n){e.exports={container:"Login_container__2ikek",form:"Login_form__ergDS",field:"Login_field__DqujJ"}},44:function(e,t,n){e.exports={profile_image:"Post_profile_image__2PJ4G",item:"Post_item__A5mWq",auto:"Post_auto__3NZ27",text:"Post_text__29oBf"}},45:function(e,t,n){e.exports={item:"DialogsItem_item__1BLGU",photo:"DialogsItem_photo__1sYcJ",name:"DialogsItem_name__312Rb"}},46:function(e,t,n){e.exports={pages:"Paginator_pages__2pa9z",page:"Paginator_page__2oqrm",selectedPage:"Paginator_selectedPage__ZO08F"}},52:function(e,t,n){},8:function(e,t,n){e.exports={nav:"Nav_nav__29iXS",a:"Nav_a__2SSeN",a_title:"Nav_a_title__3TuiD",activeLink:"Nav_activeLink__heyhV"}},92:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=(n(52),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))}),c=n(19),o=n(28),r=n(3),l=n(61).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ae506d1a-c3bf-404f-8afd-e366c64d1f0b"}}),u=function(e,t){return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},d=function(e){return l.post("follow/".concat(e))},j=function(e){return l.delete("follow/".concat(e))},b=function(e){return console.warn("Obsolete method. Please use ProfileAPI object."),f.getProfile(e)},f={getProfile:function(e){return l.get("profile/".concat(e))},getStatus:function(e){return l.get("profile/status/"+e)},setStatus:function(e){return l.get("profile/status/"+e)},updateStatus:function(e){return l.put("profile/status",{status:e})}},h=function(){return l.get("auth/me",{withCredentials:!0})},p=function(e,t,n){return l.post("auth/login",{email:e,password:t,rememberMe:n})},g=function(){return l.delete("auth/login")},m="ADD-POST",O="SET_USER_PROFILE",_="SET_STATUS",x="UPDATE_STATUS",v={posts:[{id:1,name:"dmitry"},{id:2,name:"vaider"},{id:3,name:"alex"}],newPostText:"",status:"loading"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n={id:4,name:"test",text:t.text};return Object(r.a)(Object(r.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case O:return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});case _:case x:return Object(r.a)(Object(r.a)({},e),{},{status:t.status});default:return e}},N=function(e){return{type:_,status:e}},w=function(e){return function(t){f.getStatus(e).then((function(e){t(N(e.data)),console.log(e.data)}))}},S="MESSAGE-SEND",C={dialogs:[{id:1,name:"dmitry"},{id:2,name:"vaider"},{id:3,name:"alex"}],messages:[{id:1,text:"hi"},{id:2,text:"how are you"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var n={id:4,text:t.text};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[n])});default:return e}},I="FOLLOW",k="UNFOLLOW",U="SET_USERS",A="SET_CURRENT_PAGE",L="SET_TOTAL_USERS_COUNT",T="TOGGLE_IS_FETCHING",E="TOGGLE_IS_FOLLOWING_IN_PROGRESS",F={users:[],pageSize:10,totalCount:14,currentPage:1,isFetching:!0,followingInProcess:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case k:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case U:return Object(r.a)(Object(r.a)({},e),{},{users:Object(o.a)(t.users)});case A:return Object(r.a)(Object(r.a)({},e),{},{currentPage:t.newCurrentPage});case L:return Object(r.a)(Object(r.a)({},e),{},{totalCount:t.totalCount});case T:return Object(r.a)(Object(r.a)({},e),{},{isFetching:t.isFetching});case E:return Object(r.a)(Object(r.a)({},e),{},{followingInProcess:t.isFetching?[].concat(Object(o.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return e!==t.userId}))});default:return e}},M=function(e){return{type:U,users:e}},R=function(e){return{type:A,newCurrentPage:e}},z=function(e){return{type:L,totalCount:e}},B=function(e){return{type:T,isFetching:e}},G=function(e,t){return{type:E,isFetching:e,userId:t}},H="SET_USER_DATA",J={isAuth:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.data),{},{isAuth:t.isAuth});default:return e}},q=function(e,t){return{type:H,data:e,isAuth:t}},V=function(){return function(e){h().then((function(t){0===t.data.resultCode&&e(q(t.data.data,!0))}))}},W=function(){return function(e){g().then((function(t){0===t.data.resultCode&&e(q(null,!1))}))}},X=n(62),Y="INITIALIZED_SUCCESS",Z={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(r.a)(Object(r.a)({},e),{},{initialized:!0});default:return e}},$=Object(c.c)({profilePage:P,dialogsPage:y,usersPage:D,authReducer:K,app:Q}),ee=Object(c.e)($,Object(c.a)(X.a)),te=n(36),ne=n.n(te),ae=n(15),se=n(16),ie=n(18),ce=n(17),oe=(n(92),n(8)),re=n.n(oe),le=n(64),ue=n(40),de=n(41),je=n(39),be=n(9),fe=n(2),he=function(){return Object(fe.jsx)("nav",{className:re.a.nav,children:Object(fe.jsxs)("ul",{children:[Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/profile",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(le.a,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"Profile"})," "]})}),Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/users",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(je.b,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"Users"})," "]})}),Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/dialogs",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(ue.a,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"Message"})]})}),Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/news",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(de.b,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"News"})]})}),Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/music",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(de.a,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"Music"})]})}),Object(fe.jsx)("li",{children:Object(fe.jsxs)(be.b,{to:"/settings",className:re.a.a,activeClassName:re.a.activeLink,children:[Object(fe.jsx)(je.a,{}),Object(fe.jsx)("span",{className:re.a.a_title,children:"Settings"})]})})]})})},pe=n(23),ge=n.n(pe),me=n(31),Oe=n.n(me),_e=n(44),xe=n.n(_e),ve=function(e){return Object(fe.jsxs)("div",{className:xe.a.item,children:[Object(fe.jsx)("div",{className:"profile_image_small",style:{backgroundImage:'url("http://placehold.it/50x50")',backgroundPosition:"center"}}),Object(fe.jsxs)("div",{children:[Object(fe.jsx)("div",{className:xe.a.autor,children:e.name}),Object(fe.jsx)("div",{className:xe.a.text,children:e.comment})]})]})},Pe=n(30),Ne=function(e){var t=Object(Pe.a)({initialValues:{newPostBody:""},onSubmit:function(t){e.props.addPost(t.newPostBody)}});return Object(fe.jsxs)("form",{className:Oe.a.form,onSubmit:t.handleSubmit,children:[Object(fe.jsx)("textarea",{name:"newPostBody",value:t.values.newPostBody,onChange:t.handleChange,className:Oe.a.textarea,placeholder:"What's new?"}),Object(fe.jsx)("button",{className:Oe.a.button,type:"submit",children:"Send"})]})},we=function(e){var t=e.profilePage.posts.map((function(e){return Object(fe.jsx)(ve,{name:e.name,comment:e.text},e.id)}));return Object(fe.jsxs)("div",{className:Oe.a.content,children:[Object(fe.jsxs)("div",{className:Oe.a.title,children:[Object(fe.jsx)(ue.b,{})," 21 posts"]}),Object(fe.jsx)(Ne,{props:e}),t]})},Se=n(7),Ce=Object(Se.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:m,text:e}}(t))}}}))(we),ye=n.p+"static/media/oval.085f3aca.svg",Ie=function(){return Object(fe.jsx)("img",{style:{width:"100px",height:"100px",display:"block",margin:"100px auto"},src:ye,alt:""})},ke=n(33),Ue=n(67),Ae=Object(Se.b)((function(e){return{profilePage:e.profilePage}}),{getStatus:w,setStatus:N,updateStatus:function(e){return function(t){f.updateStatus(e).then((function(n){0===n.data.resultCode&&t(N(e))}))}}})((function(e){var t=Object(a.useState)(!1),n=Object(ke.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)(e.profilePage.status),o=Object(ke.a)(c,2),r=o[0],l=o[1];return Object(a.useEffect)((function(){l(e.profilePage.status)}),[e.profilePage.status]),Object(fe.jsxs)("form",{children:[s?Object(fe.jsx)("div",{children:Object(fe.jsx)("input",{onBlur:function(){i(!1),e.updateStatus(r)},onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,type:"text"})}):Object(fe.jsxs)("div",{onClick:function(){i(!0)},children:[Object(fe.jsx)(Ue.a,{})," ",r]})," "]})})),Le=function(e){var t=e.profilePage.profile;return t?Object(fe.jsxs)("div",{className:ge.a.main,children:[Object(fe.jsx)("div",{className:ge.a.content_img,style:{backgroundImage:'url("https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_1280.png")',backgroundSize:"cover",backgroundPosition:"center",gridRow:"1/2",gridColumn:"1/4"}}),Object(fe.jsxs)("div",{className:ge.a.header,children:[Object(fe.jsx)("img",{src:null===t.photos.small?"http://placehold.it/100x100":t.photos.small,alt:"",className:"profile_image"}),Object(fe.jsxs)("div",{className:ge.a.title,children:[Object(fe.jsx)("div",{className:ge.a.name,children:t.fullName}),Object(fe.jsx)("div",{className:ge.a.followers,children:"100 followers"})]})]}),Object(fe.jsx)("div",{className:ge.a.content,children:Object(fe.jsxs)("div",{className:ge.a.info,children:[Object(fe.jsx)("div",{className:ge.a.about,children:Object(fe.jsx)(Ae,{})}),Object(fe.jsx)(Ce,{})]})})]}):Object(fe.jsx)(Ie,{})},Te=function(e){return Object(fe.jsx)("div",{children:Object(fe.jsx)(Le,{profilePage:e.profilePage})})},Ee=n(5),Fe=function(e){return{isAuth:e.authReducer.isAuth}},De=function(e){var t=function(t){Object(ie.a)(a,t);var n=Object(ce.a)(a);function a(){return Object(ae.a)(this,a),n.apply(this,arguments)}return Object(se.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(fe.jsx)(e,Object(r.a)({},this.props)):Object(fe.jsx)(Ee.a,{to:"/login"})}}]),a}(s.a.Component);return Object(Se.b)(Fe)(t)},Me=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(ae.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(fe.jsx)(Te,Object(r.a)(Object(r.a)({},this.props),{},{profilePage:this.props.profilePage,status:this.props.status}))}}]),n}(s.a.Component),Re=Object(c.d)(Object(Se.b)((function(e){return{profilePage:e.profilePage,status:e.profilePage.status,userId:e.authReducer.id}}),{getProfile:function(e){return function(t){b(e).then((function(e){var n;t((n=e.data,{type:O,profile:n}))}))}},getStatus:w,getAuthUserData:V}),Ee.f,De)(Me),ze=n(27),Be=n.n(ze),Ge=n(45),He=n.n(Ge),Je=function(e){return Object(fe.jsxs)("div",{className:He.a.item,children:[Object(fe.jsx)("img",{className:He.a.photo,src:"https://placehold.it/80x80",alt:""}),Object(fe.jsx)("div",{className:He.a.name,children:e.name})]})},Ke=function(e){return Object(fe.jsx)("div",{className:e.dialogs_item,children:e.name})},qe=function(e){var t=Object(Pe.a)({initialValues:{newMessageBody:""},onSubmit:function(t){e.props.messageSend(t.newMessageBody)}});return Object(fe.jsxs)("form",{className:Be.a.send_message,onSubmit:t.handleSubmit,children:[Object(fe.jsx)("textarea",{name:"newMessageBody",className:Be.a.textarea,onChange:t.handleChange,value:t.values.newMessageBody}),Object(fe.jsx)("button",{type:"submit",className:Be.a.button,children:"Send"})]})},Ve=function(e){var t=e.state.dialogs.map((function(e){return Object(fe.jsx)(Je,{id:e.id,name:e.name},e.id)})),n=e.state.messages.map((function(e){return Object(fe.jsx)(Ke,{id:e.id,name:e.text},e.id)}));return e.isAuth?Object(fe.jsx)("div",{className:Be.a.main,children:Object(fe.jsxs)("div",{className:Be.a.content,children:[Object(fe.jsx)("div",{className:Be.a.dialogs,children:t}),Object(fe.jsx)("div",{className:Be.a.messages,children:n}),Object(fe.jsx)(qe,{props:e})]})}):Object(fe.jsx)(Ee.a,{to:"/login"})},We=Object(c.d)(Object(Se.b)((function(e){return{state:e.dialogsPage,newMessageBody:e.dialogsPage.newMessageBody}}),(function(e){return{messageSend:function(t){e(function(e){return{type:S,text:e}}(t))}}})),De)(Ve),Xe=n(22),Ye=n.n(Xe),Ze=function(e){var t=e.user,n=e.followingInProcess,a=e.follow,s=e.unfollow;return Object(fe.jsxs)("div",{className:Ye.a.item,children:[Object(fe.jsxs)("div",{className:Ye.a.item_right,children:[Object(fe.jsx)("img",{className:"profile_image_middle",src:null===t.photos.small?"http://placehold.it/80x80":t.photos.small,alt:""}),Object(fe.jsx)(be.b,{to:"profile/"+t.id,className:Ye.a.name,children:t.name})]}),t.followed?Object(fe.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:Ye.a.followed,onClick:function(){s(t.id)},children:"Unfollow"}):Object(fe.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:Ye.a.followed,onClick:function(){a(t.id)},children:"Follow"})]},t.id)},Qe=n(46),$e=n.n(Qe),et=n(99),tt=function(e){for(var t=e.currentPage,n=e.onPageChanged,s=e.totalCount,i=Math.ceil(s/10),c=Math.ceil(i/5),o=Object(a.useState)(1),r=Object(ke.a)(o,2),l=r[0],u=r[1],d=5*(l-1)+1,j=5*l,b=[],f=1;f<=i;f++)b.push(f);return Object(fe.jsxs)("div",{className:$e.a.pages,children:[l>1&&Object(fe.jsx)("button",{onClick:function(){u(l-1)},children:Object(fe.jsx)(et.a,{})}),b.filter((function(e){return e>=d&&e<=j})).map((function(e){return Object(fe.jsx)("div",{onClick:function(){return n(e)},className:t===e&&$e.a.selectedPage||$e.a.page,children:e})})),l<c&&Object(fe.jsx)("button",{onClick:function(){u(l+1)},children:Object(fe.jsx)(et.b,{})})]})},nt=function(e){return Object(fe.jsx)("div",{className:Ye.a.main,children:Object(fe.jsxs)("div",{className:Ye.a.content,children:[Object(fe.jsx)("h2",{children:"Users:"}),Object(fe.jsx)("div",{className:Ye.a.users,children:e.users.map((function(t){return Object(fe.jsx)(Ze,{user:t,followingInProcess:e.followingInProcess,follow:e.follow,unfollow:e.unfollow})}))}),Object(fe.jsx)(tt,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalCount:e.totalCount})]})})},at=function(e){return e.usersPage.totalCount},st=function(e){return e.usersPage.currentPage},it=function(e){return e.usersPage.users},ct=function(e){return e.usersPage.pageSize},ot=function(e){return e.usersPage.isFetching},rt=function(e){return e.usersPage.followingInProcess},lt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){var e;Object(ae.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(fe.jsxs)(fe.Fragment,{children:[" ",this.props.isFetching?Object(fe.jsx)(Ie,{}):Object(fe.jsx)(nt,{users:this.props.users,totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,isFetching:this.props.isFetching,toggleIsFollowingProcess:this.props.toggleIsFollowingProcess,followingInProcess:this.props.followingInProcess})]})}}]),n}(s.a.Component),ut=Object(c.d)(Object(Se.b)((function(e){return{users:it(e),pageSize:ct(e),totalCount:at(e),currentPage:st(e),followingInProcess:rt(e),isFetching:ot(e)}}),{follow:function(e){return function(t){t(G(!0,e)),d(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:I,userId:e}}(e)),t(G(!1,e))}))}},unfollow:function(e){return function(t){t(G(!0,e)),j(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:k,userId:e}}(e)),t(G(!1,e))}))}},setUsers:M,setCurrentPage:R,setTotalUsersCount:z,toggleIsFetching:B,toggleIsFollowingProcess:G,getUsers:function(e,t){return function(n){n(B(!0)),u(e,t).then((function(t){n(M(t.items)),n(z(t.totalCount)),n(R(e)),n(B(!1))}))}},getUsersS:it}),De)(lt),dt=n(21),jt=n.n(dt),bt=n(68),ft=n(100),ht=function(e){var t=e.data.data;return Object(fe.jsxs)("header",{className:jt.a.header,children:[Object(fe.jsxs)("div",{className:jt.a.logo,children:[Object(fe.jsx)("div",{className:jt.a.icon,children:Object(fe.jsx)(bt.a,{})}),"Enigma ",Object(fe.jsx)("div",{className:jt.a.region,children:"RU"})]}),t.isAuth?Object(fe.jsx)("div",{className:jt.a.main,children:Object(fe.jsx)("div",{className:jt.a.login,children:Object(fe.jsxs)("button",{className:jt.a.logOut,onClick:e.data.logout,children:[t.login,Object(fe.jsx)(ft.a,{})]})})}):Object(fe.jsx)("div",{className:jt.a.main,children:Object(fe.jsx)("div",{className:jt.a.login,children:Object(fe.jsxs)("button",{className:jt.a.logOut,onClick:e.data.logout,children:["LogIn",Object(fe.jsx)(ue.c,{})]})})})]})},pt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(ae.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(fe.jsx)(ht,{data:this.props})}}]),n}(s.a.Component),gt=Object(Se.b)((function(e){return{data:{userId:e.authReducer.id,login:e.authReducer.login,email:e.authReducer.email,isAuth:e.authReducer.isAuth}}}),{setUserData:q,getAuthUserData:V,logout:W})(pt),mt=n(34),Ot=n.n(mt),_t=function(e){var t=Object(Pe.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){return e.props.login(t.email,t.password,t.rememberMe)}});return e.props.authReducer.isAuth?Object(fe.jsx)(Ee.a,{to:"/profile"}):Object(fe.jsx)("div",{className:Ot.a.container,children:Object(fe.jsxs)("form",{className:Ot.a.form,onSubmit:t.handleSubmit,children:[Object(fe.jsx)("h2",{children:"Login"}),Object(fe.jsx)("input",{name:"email",type:"email",placeholder:"Email",className:Ot.a.field,onChange:t.handleChange,value:t.values.email}),t.errors.email?Object(fe.jsx)("div",{children:t.errors.email}):null,Object(fe.jsx)("input",{name:"password",type:"password",placeholder:"Password",className:Ot.a.field,onChange:t.handleChange,value:t.values.password}),Object(fe.jsxs)("div",{children:[Object(fe.jsx)("input",{name:"rememberMe",type:"checkbox",onChange:t.handleChange,value:t.values.rememberMe}),"remember me"]}),Object(fe.jsx)("button",{type:"submit",children:"LogIn"})]})})},xt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(ae.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"render",value:function(){return Object(fe.jsx)(_t,{props:this.props})}}]),n}(s.a.Component),vt=Object(Se.b)((function(e){return{authReducer:e.authReducer}}),{login:function(e,t,n){return function(a){p(e,t,n).then((function(e){0===e.data.resultCode&&a(V())}))}},logout:W})(xt),Pt=function(e){Object(ie.a)(n,e);var t=Object(ce.a)(n);function n(){return Object(ae.a)(this,n),t.apply(this,arguments)}return Object(se.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(fe.jsx)(be.a,{children:Object(fe.jsxs)("div",{className:"app-wrapper",children:[Object(fe.jsx)(gt,{}),Object(fe.jsx)(he,{}),Object(fe.jsxs)("div",{className:"app-wrapper-content",children:[Object(fe.jsx)(Ee.b,{path:"/profile/:userId?",render:function(){return Object(fe.jsx)(Re,{})}}),Object(fe.jsx)(Ee.b,{path:"/dialogs",render:function(){return Object(fe.jsx)(We,{})}}),Object(fe.jsx)(Ee.b,{path:"/users",render:function(){return Object(fe.jsx)(ut,{})}}),Object(fe.jsx)(Ee.b,{path:"/login",render:function(){return Object(fe.jsx)(vt,{})}})]})]})}):Object(fe.jsx)(Ie,{})}}]),n}(s.a.Component),Nt=Object(Se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(V());Promise.all([t]).then((function(){e({type:Y})}))}}})(Pt);ne.a.render(Object(fe.jsx)(s.a.StrictMode,{children:Object(fe.jsx)(Se.a,{store:ee,children:Object(fe.jsx)(Nt,{})})}),document.getElementById("root")),i()}},[[98,1,2]]]);
//# sourceMappingURL=main.cdb8756c.chunk.js.map