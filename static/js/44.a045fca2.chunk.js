(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[44],{1156:function(e,t,n){"use strict";n.r(t);var a=n(212),r=n(34),l=n.n(r),i=n(49),s=n(10),o=n(11),u=n(12),d=n(13),c=n(83),f=n(0),v=n.n(f),h=n(44),m=n(88),p=n(15),g=n(718),b=n.n(g),_=n(719),E=n.n(_),y=n(720),w=n.n(y),x=n(721),M=n.n(x),I=n(674),j=n.n(I),S=n(673),O=n.n(S),L=n(735),z=n(713),C=n.n(z),A=n(722),P=n.n(A),T=n(103),$=n(723),k=n.n($),H=n(59),D=n.n(H),F=n(724),R=n.n(F),q=n(102),V=n.n(q),N=n(725),U=n.n(N),B=n(33),W=n.n(B),J=n(30),G=n(17),Q=n(19),K=n.n(Q),X=n(656),Y=(X.string().max(255),X.object().shape({title:X.string().max(100,"Course name cannot exceed 100 characters").required("A level title is required")})),Z=n(18),ee=n(711),te=n(4),ne=n(23),ae=n.n(ne);function re(){var e=Object(te.a)(["\n  mutation levelDelete($_id: ID) {\n    levelDelete(_id: $_id) {\n      level {\n        _id\n      }\n      errors {\n        path\n        message\n      }\n    }\n  }\n"]);return re=function(){return e},e}function le(){var e=Object(te.a)(["\n  mutation levelUpdate($_id: ID, $title: String, $modifier: String) {\n    levelUpdate(input: {_id: $_id, title: $title, modifier: $modifier}) {\n      level {\n        course\n        _id\n        title\n        modifier\n      }\n      errors {\n        message\n      }\n    }\n  }\n"]);return le=function(){return e},e}function ie(){var e=Object(te.a)(["\n  mutation levelSort($courseId: String, $levelSort: [String]) {\n    levelSort(input: {courseId: $courseId, levelSort: $levelSort}) {\n      level {\n        _id\n      }\n      errors {\n        message\n      }\n    }\n  }\n"]);return ie=function(){return e},e}function se(){var e=Object(te.a)(["\n  mutation levelCreate($courseId: String, $title: String, $modifier: String) {\n    levelCreate(\n      input: {courseId: $courseId, title: $title, modifier: $modifier}\n    ) {\n      level {\n        course\n        _id\n        title\n        modifier\n      }\n      errors {\n        message\n      }\n    }\n  }\n"]);return se=function(){return e},e}var oe=ae()(se()),ue=ae()(ie()),de=ae()(le()),ce=ae()(re()),fe=n(108),ve=K()({loader:function(){return n.e(3).then(n.t.bind(null,775,7))},loading:G.a,delay:200}),he=K()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(3)]).then(n.t.bind(null,775,7)).then((function(e){return e.MTableEditRow}))},loading:G.a,delay:200}),me=function(e){return v.a.createElement("div",{style:{display:"table",width:"100%",height:"100%",backgroundColor:Object(T.fade)(e.theme.palette.background.paper,.7)}},v.a.createElement("div",{style:{display:"table-cell",width:"100%",height:"100%",verticalAlign:"middle",textAlign:"center"}},v.a.createElement(L.CircularProgress,null)))},pe=function(e){var t=e.onEditingApproved,n=Object(c.a)(e,["onEditingApproved"]);return v.a.createElement(m.b,{validationSchema:Y,initialValues:n.data,onSubmit:function(e){"update"===n.mode&&delete e.tableData,"add"===n.mode&&(n.data||(n.data={})),t(n.mode,e,n.data)},render:function(e){var t=e.submitForm;return v.a.createElement(he,Object.assign({},n,{onEditingApproved:t}))}})},ge=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.componentWillUnmount=function(){a._isMounted=!1,a._addTrash&&a._addTrash.trash(),a._newLevelTrash&&a._newLevelTrash.trash(),a._sortTrash&&a._sortTrash.trash(),a._updateTrash&&a._updateTrash.trash()},a.convertObjIdsToArr=function(e){return e.map((function(e){return e._id}))},a.state={levels:[]},a.can=null,a.levelsIdsArr=[],a.tableRef=v.a.createRef(),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,this.props.client.query({query:ee.b,fetchPolicy:"no-cache",variables:{courseId:p.session.course._id}}).then((function(t){p.session.levels=t.data.getLevels.levels,e._isMounted&&e.setState({levels:t.data.getLevels.levels},(function(){p.session.levelsIdsArr=e.convertObjIdsToArr(e.state.levels),console.log(e.state)}))})).catch((function(e){return console.log("err: ",e)})),p.session.user.username===p.session.course.owner.username?this.can={onRowAdd:function(){var t=Object(i.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Promise((function(t){var a=e.state.levels;a.push(n),e._isMounted&&e.setState({levels:a}),t({newData:n,levels:a})})),e._addTrash=b()(a),e._addTrash.then((function(t){var n=e.props.client.mutate({mutation:oe,variables:{courseId:p.session.course._id,title:t.newData.title,modifier:t.newData.modifier},refetchQueries:[{query:fe.d,variables:{token:p.cookies._uid}}]});e._newLevelTrash=b()(n),e._newLevelTrash.then((function(t){if(e._newLevelTrash&&e._isMounted){var n=p.session.levels;return n.push(t.data.levelCreate.level),p.session.levels=n,e._isMounted&&e.setState({levels:n}),n}})).then((function(t){p.session.levelsIdsArr=e.convertObjIdsToArr(t),p.session.level=p.session.levelsIdsArr.length>=1?p.session.levelsIdsArr.length:"";var n=e.props.client.mutate({mutation:ue,variables:{courseId:p.session.course._id,levelSort:p.session.levelsIdsArr}});e._sortTrash=b()(n)}))})),t.abrupt("return",e._addTrash);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onRowUpdate:function(t,n){var a=new Promise((function(a){var r=e.state.levels,l=r.indexOf(n);r[l]=t,setTimeout((function(){e.setState({levels:r},(function(){p.session.levels=r,p.session.levelsIdsArr=e.convertObjIdsToArr(r),a()}))}),1e3),e.props.client.mutate({mutation:de,variables:{_id:t._id,title:t.title,modifier:t.modifier}})}));return e._updateTrash=b()(a),a},onRowDelete:function(){var t=Object(i.a)(l.a.mark((function t(n){var r,i,s,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(a.a)(p.session.levels),t.next=3,new Promise((function(e){setTimeout((function(){for(var t=-1,a=0;a<p.session.levels.length;a++)if(p.session.levels[a].title===n.title){t=a;break}var l=r.splice(t,1);e({splicedLevels:r,spliced:l[0],deletedIndex:t})}),1e3)}));case 3:return i=t.sent,s=i.splicedLevels,o=i.spliced,u=i.deletedIndex,e.setState({levels:s},(function(){return p.session.levels=s})),p.session.levelsIdsArr=e.convertObjIdsToArr(s),t.next=9,e.props.client.mutate({mutation:ce,variables:{_id:o._id}});case 9:return p.session.levels.splice(u,1),e.setState({levels:p.session.levels}),t.next=13,e.props.client.mutate({mutation:ue,variables:{courseId:p.session.course._id,levelSort:p.session.levelsIdsArr}});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}:this.can={}}},{key:"render",value:function(){var e=this.props.classes;return v.a.createElement("div",{className:e.root},v.a.createElement(D.a,{className:e.hero,container:!0,justify:"center",direction:"column"},v.a.createElement(V.a,{className:e.header,elevation:1},v.a.createElement(W.a,{className:e.headerBody,variant:"h4",align:"center",gutterBottom:!0},"Course Levels"))),v.a.createElement("main",{className:e.content},v.a.createElement(D.a,{container:!0,spacing:24},v.a.createElement(D.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"column",alignItems:"center"}}),v.a.createElement(D.a,{item:!0,xs:12,align:"center"},v.a.createElement("div",{style:{maxWidth:"100%"}},v.a.createElement(ve,{ref:this.tableRef,icons:{Add:function(){return v.a.createElement(E.a,null)},Check:function(){return v.a.createElement(w.a,null)},Clear:function(){return v.a.createElement(M.a,null)},ResetSearch:function(){return v.a.createElement(M.a,null)},Delete:function(){return v.a.createElement(C.a,null)},Edit:function(){return v.a.createElement(P.a,null)},FirstPage:function(){return v.a.createElement(k.a,null)},LastPage:function(){return v.a.createElement(R.a,null)},NextPage:function(){return v.a.createElement(O.a,null)},PreviousPage:function(){return v.a.createElement(j.a,null)},Search:function(){return v.a.createElement(U.a,null)}},columns:[{title:"level",headerStyle:{width:"50px"},readonly:!0,render:function(e){return e&&e.tableData.id+1}},{title:"title",field:"title"},{title:"modifier",field:"modifier"}],components:{EditRow:pe,EditField:Z.h,OverlayLoading:me},data:this.state.levels,options:{actionsColumnIndex:-1,pageSize:5,showTitle:!1,sorting:!1,rowStyle:function(e){if(e.tableData.id%2)return{backgroundColor:"#f2f2f2"}}},editable:this.can}))))))}}]),n}(f.Component);t.default=Object(h.withApollo)(Object(J.withStyles)((function(e){return{actions:{display:"flex",justifyContent:"center",height:"100%",width:"100%"},addButton:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"},content:{alignItems:"center",display:"flex",flexGrow:1,justifyContent:"center",padding:3*e.spacing.unit},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},editHeader:{alignItems:"center",display:"flex",fontSize:2*e.spacing.unit,fontWeight:400,height:"100%",justifyContent:"center",minHeight:"40px",width:"100%"},errorClass:{boxShadow:"0px 0px 2px 1px ".concat(e.palette.error.main),backgroundColor:"white"},errors:{color:e.palette.error.main},formControl:{fontSize:"30px",textAlign:"center"},level:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},title:{alignItems:"center",display:"flex",height:"100%",paddingLeft:"10px",width:"100%"},header:{fontSize:3*e.spacing.unit,fontWeight:400,height:"100%",minHeight:"40px",width:"100%"},headerBody:{padding:"40px"},hero:{padding:" 0 24px "},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},inputHeader:{background:"white",minHeight:"40px"},list:{margin:"0 auto"},root:{margin:"0 auto",width:"100%"},text:{color:"white"}}}))(ge))},673:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ChevronRight");t.default=l},674:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ChevronLeft");t.default=l},711:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(4),r=n(23),l=n.n(r);function i(){var e=Object(a.a)(["\n  query getLevels($courseId: String!) {\n    getLevels(courseId: $courseId) {\n      levels {\n        _id\n        course\n        title\n        modifier\n      }\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(a.a)(["\n  query getLevel($levelId: String!) {\n    getLevel(levelId: $levelId) {\n      _id\n      course\n      title\n      modifier\n      vocabulary {\n        _id\n        audioUrl\n        level\n        gender\n        keyword\n        partsOfSpeech\n        word\n        translation\n      }\n    }\n  }\n"]);return s=function(){return e},e}var o=l()(s()),u=l()(i())},713:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Delete");t.default=l},718:function(e,t,n){"use strict";e.exports=function(e){var t=function(){},n=new Promise((function(n,a){t=function(){n=null,a=null},e.then((function(e){n&&n(e)}),(function(e){a&&a(e)}))}));return n.trash=t,n}},719:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Add");t.default=l},720:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),"Check");t.default=l},721:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Clear");t.default=l},722:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Edit");t.default=l},723:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),r.default.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),"FirstPage");t.default=l},724:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),"LastPage");t.default=l},725:function(e,t,n){"use strict";var a=n(3);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=(0,a(n(37)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Search");t.default=l}}]);
//# sourceMappingURL=44.a045fca2.chunk.js.map