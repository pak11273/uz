(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[41],{1079:function(e,a,l){var n=l(93),t=l(665),r=l(68),i=Function.prototype,s=Object.prototype,u=i.toString,o=s.hasOwnProperty,c=u.call(Object);e.exports=function(e){if(!r(e)||"[object Object]"!=n(e))return!1;var a=t(e);if(null===a)return!0;var l=o.call(a,"constructor")&&a.constructor;return"function"==typeof l&&l instanceof l&&u.call(l)==c}},1154:function(e,a,l){"use strict";l.r(a);var n=l(34),t=l.n(n),r=l(49),i=l(0),s=l.n(i),u=l(191),o=l(652),c=l(88),d=l(30),v=l(144),b=l.n(v),m=l(661),g=l.n(m),p=l(151),h=l.n(p),f=l(59),y=l.n(f),k=l(205),w=l.n(k),O=l(40),j=l.n(O),E=l(342),x=l.n(E),C=l(334),M=l.n(C),N=l(33),S=l.n(N),P=l(140),A=l.n(P),B=l(15),L=l(212),z=l(39),I=l(14),_=l.n(I),T=l(740),G=l(666),K=l.n(G),q=l(671),F=l.n(q),H=l(667),R=l.n(H),U=l(712),W=l.n(U),J=l(36),Q=l.n(J),D=l(729),V=l.n(D),X=l(18),Y=l(44),Z=l(214),$=l(85),ee=l(645);var ae=Object(i.createContext)(null);var le=l(129),ne=l(1079),te=l.n(ne);function re(e){if(!te()(e))return e;var a=Object.keys(e).sort().reduce((function(a,l){return a[l]=re(e[l]),a}),{});return JSON.stringify(a)}var ie=new WeakMap;function se(e){var a=ie.get(e);return null==a&&(a=new Map,ie.set(e,a)),a}function ue(e){var a=e.query,l=function(e,a){if(null==e)return{};var l,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],a.indexOf(l)>=0||(t[l]=e[l]);return t}(e,["query"]);return Object(le.a)(a)+"@@"+re(l)}function oe(){return(oe=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function ce(e,a){var l=void 0===a?{}:a,n=l.ssr,t=void 0===n||n,r=l.skip,s=void 0!==r&&r,u=l.suspend,o=void 0!==u&&u,c=l.pollInterval,d=l.notifyOnNetworkStatusChange,v=void 0!==d&&d,b=l.client,m=l.context,g=l.metadata,p=l.variables,h=l.fetchPolicy,f=l.errorPolicy,y=l.fetchResults,k=Object(ee.b)(b),w=Object(i.useContext)(ae),O=t&&w,j=s||null!=w&&!t,E=!O||"network-only"!==h&&"cache-and-network"!==h?h:"cache-first",x=Object(i.useMemo)((function(){return a={context:m,errorPolicy:f,fetchPolicy:E,fetchResults:y,metadata:g,notifyOnNetworkStatusChange:v,pollInterval:c,query:e,variables:p},Object.keys(a).reduce((function(e,l){return void 0!==a[l]&&(e[l]=a[l]),e}),{});var a}),[e,c,v,m&&re(m),g&&re(g),p&&re(p),E,f,y]),C=Object(i.useMemo)((function(){return function(e,a){var l=se(e),n=ue(a),t=l.get(n);return null==t&&(t=e.watchQuery(a),l.set(n,t)),t}(k,x)}),[k,x]),M=Object(i.useState)(0),N=M[0],S=M[1],P=Object(i.useMemo)((function(){var e={fetchMore:C.fetchMore.bind(C),refetch:C.refetch.bind(C),startPolling:C.startPolling.bind(C),stopPolling:C.stopPolling.bind(C),updateQuery:C.updateQuery.bind(C)},a=C.currentResult(),l=a.data;return(a.error||a.errors)&&(l=oe({},a.data,(C.getLastResult()||{}).data)),oe({},e,j?{data:void 0,error:void 0,loading:!1,networkStatus:void 0}:{data:l,error:a.errors&&a.errors.length>0?new $.b({graphQLErrors:a.errors}):a.error,errors:a.errors,loading:a.loading,networkStatus:o?void 0:a.networkStatus,partial:a.partial})}),[j,N,C]);if(Object(i.useEffect)((function(){if(!j){var e=function(){(function(){S((function(e){return e+1}))})()},a=C.subscribe(e,e);return function(e,a){var l=se(e),n=ue(a);l.delete(n)}(k,x),function(){a.unsubscribe()}}}),[j,C]),function(e,a){if(e&&a&&"cache-first"!==a)throw new Error("Fetch policy "+a+" is not supported without 'suspend: false'")}(o,E),P.partial){if(o)throw C.result();O&&w.register(C.result())}return P}var de=l(810),ve=Object(Y.compose)(o.a,Object(d.withStyles)(T.a))((function(e){Object(i.useEffect)((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(var a in B.session)-1===e.indexOf(a)&&delete B.session[a]}(["user","levels"])}),[]);var a=function(a){return function(){B.session.level="",B.session.course=a,B.session.levels=a.levels,B.session.levelsIdsArr=a.levels.map((function(e){return e._id})),e.history.push({pathname:"/course/course-introduction",state:{courseId:a._id}})}},l=ce(Z.b,{notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",variables:{page:1,searchInput:e.search&&e.search.searchInput?e.search.searchInput:"",selectionBox:e.search&&e.search.selectionBox?e.search.selectionBox:"",usingLang:e.search&&e.search.usingLang?e.search.usingLang:"",teachingLang:e.search&&e.search.teachingLang?e.search.teachingLang:""}}),n=l.data,t=l.error,r=l.loading,u=l.fetchMore;if(t)return s.a.createElement(y.a,null,s.a.createElement("p",null,t.graphQLErrors.map((function(e,a){var l=e.message;return s.a.createElement("p",{style:{fontSize:"1.3em",color:"red",margin:"30px",padding:"30px",textAlign:"center"},key:a},l)}))));var o=e.classes;return s.a.createElement("div",null,s.a.createElement("div",{className:_()(o.layout,o.cardGrid)},s.a.createElement(y.a,{container:!0,spacing:40,style:{position:"relative"}},n.getCourses&&n.getCourses.courses.map((function(e,l){return s.a.createElement(y.a,{item:!0,key:e._id,xs:12,sm:6,md:3,lg:3},s.a.createElement(K.a,{className:o.card},s.a.createElement(W.a,{onClick:a(e),className:o.cardMedia,image:"".concat(e.courseImage),title:"".concat(e.title)}),s.a.createElement(R.a,{className:o.cardContent},s.a.createElement(S.a,{className:o.gridTitle,gutterBottom:!0,variant:"h6",component:"h6"},e.title),s.a.createElement(S.a,{className:o.cardUsername,gutterBottom:!0,variant:"caption"},"by: ",e.owner&&e.owner.username),s.a.createElement(S.a,{className:o.cardUsername,gutterBottom:!0,variant:"caption"},"resource: ",e.resource)),s.a.createElement(F.a,{className:o.gridActions},s.a.createElement(V.a,null),s.a.createElement(S.a,{className:o.cardUsername,gutterBottom:!0},Object(de.b)(e.subscriberCount)),s.a.createElement(Q.a,{onClick:a(e),size:"large",className:o.editButton}," ","VIEW"))),l===n.getCourses.courses.length-1&&n.getCourses.more&&s.a.createElement(X.s,{loading:r,disabled:r,className:o.showMore,color:"secondary",variant:"contained",onClick:function(){u({variables:{page:n.getCourses.page+1},updateQuery:function(e,a){var l=a.fetchMoreResult;return l?{getCourses:Object(z.a)({},l.getCourses,{courses:[].concat(Object(L.a)(e.getCourses.courses),Object(L.a)(l.getCourses.courses))})}:e}})}},"Show More"))})))))})),be=l(747);a.default=Object(Y.compose)(o.a)(Object(c.d)({validateOnChange:!1,validateOnBlur:!1,mapPropsToValues:function(){return{searchInput:"",title:"",resource:"",info:"",items:"",labelWidth:0,mobileOpen:!1,next:"",resetCursor:"",search:"",selectionBox:"title",teachingLang:"",usingLang:""}},handleSubmit:function(){var e=Object(r.a)(t.a.mark((function e(a,l){var n,r,i;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=l.props,r=l.setStatus,console.log("props: ",n),i={title:a.title,resource:a.resource,info:a.info,searchInput:a.searchInput,selectionBox:a.selectionBox,teachingLang:a.teachingLang,usingLang:a.usingLang},r({search:i});case 4:case"end":return e.stop()}}),e)})));return function(a,l){return e.apply(this,arguments)}}()})(Object(d.withStyles)(T.a)((function(e){delete B.session.course;var a=e.classes,l=e.handleSubmit,n=e.handleChange,t=e.setFieldValue,r=e.values;return s.a.createElement("form",{className:a.root,autoComplete:"off",onSubmit:l},s.a.createElement(g.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},s.a.createElement(X.v,{margin:"100px 0 0 0"}),s.a.createElement(S.a,{variant:"h6",align:"center",gutterBottom:!0},"I speak:"),s.a.createElement(c.a,{name:"usingLang",onChange:t,component:X.C,options:be.a}),s.a.createElement(X.v,{margin:"40px 0 0 0"}),s.a.createElement(S.a,{variant:"h6",align:"center",gutterBottom:!0},"I want to learn:"),s.a.createElement(c.a,{name:"teachingLang",onChange:t,component:X.z,options:be.a}),s.a.createElement(X.v,{margin:"40px 0 0 0"}),s.a.createElement(b.a,null),s.a.createElement(X.v,{margin:"40px 0 0 0"}),s.a.createElement(X.v,{margin:"40px 0 0 0"}),s.a.createElement(w.a,{component:u.a,to:"/courses/created"},s.a.createElement(S.a,{align:"center",gutterBottom:!0},"My Created Courses"))),s.a.createElement("main",{className:a.content},s.a.createElement("div",{className:a.heroUnit},s.a.createElement("div",{className:a.heroContent},s.a.createElement(y.a,{container:!0,justify:"center",direction:"column"},s.a.createElement(S.a,{variant:"h4",align:"center",gutterBottom:!0},"Find a Course"),s.a.createElement(y.a,{container:!0,alignItems:"center",justify:"center"},s.a.createElement(A.a,{name:"searchInput",id:"outlined-search",label:"Search",onChange:n,type:"search",className:a.searchField,value:r.searchInput,margin:"normal",variant:"outlined"}),s.a.createElement(h.a,{variant:"outlined",className:a.formControl},s.a.createElement(M.a,{value:r.selectionBox,name:"selectionBox",onChange:n,input:s.a.createElement(x.a,{labelWidth:0,id:"outlined-filter-simple"})},s.a.createElement(j.a,{value:"title"},"Title or Resource"))),s.a.createElement(X.s,{variant:"contained",color:"secondary",type:"submit",size:"large",loading:e.status&&e.status.loading,disabled:e.status&&e.status.loading},"Search"))))),s.a.createElement(y.a,null,s.a.createElement(ve,{search:e.status&&e.status.search}))))}))))},661:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t.default}});var t=n(l(206))},665:function(e,a,l){var n=l(336)(Object.getPrototypeOf,Object);e.exports=n},666:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t.default}});var t=n(l(670))},667:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t.default}});var t=n(l(672))},670:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var t=n(l(8)),r=n(l(9)),i=n(l(0)),s=(n(l(1)),n(l(14))),u=n(l(102)),o=n(l(16)),c={root:{overflow:"hidden"}};function d(e){var a=e.classes,l=e.className,n=e.raised,o=(0,r.default)(e,["classes","className","raised"]);return i.default.createElement(u.default,(0,t.default)({className:(0,s.default)(a.root,l),elevation:n?8:1},o))}a.styles=c,d.defaultProps={raised:!1};var v=(0,o.default)(c,{name:"MuiCard"})(d);a.default=v},671:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t.default}});var t=n(l(676))},672:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var t=n(l(8)),r=n(l(9)),i=n(l(0)),s=(n(l(1)),n(l(14))),u=(l(21),n(l(16))),o={root:{padding:16,"&:last-child":{paddingBottom:24}}};function c(e){var a=e.classes,l=e.className,n=e.component,u=(0,r.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,t.default)({className:(0,s.default)(a.root,l)},u))}a.styles=o,c.defaultProps={component:"div"};var d=(0,u.default)(o,{name:"MuiCardContent"})(c);a.default=d},676:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var t=n(l(8)),r=n(l(20)),i=n(l(9)),s=n(l(0)),u=(n(l(1)),n(l(14))),o=n(l(16)),c=l(60);l(36);var d={root:{display:"flex",alignItems:"center",boxSizing:"border-box",padding:"8px 4px"},disableActionSpacing:{padding:8},action:{margin:"0 4px"}};function v(e){var a=e.disableActionSpacing,l=e.children,n=e.classes,o=e.className,d=(0,i.default)(e,["disableActionSpacing","children","classes","className"]);return s.default.createElement("div",(0,t.default)({className:(0,u.default)(n.root,(0,r.default)({},n.disableActionSpacing,a),o)},d),a?l:(0,c.cloneChildrenWithClassName)(l,n.action))}a.styles=d,v.defaultProps={disableActionSpacing:!1};var b=(0,o.default)(d,{name:"MuiCardActions"})(v);a.default=b},712:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t.default}});var t=n(l(715))},715:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var t=n(l(20)),r=n(l(8)),i=n(l(9)),s=n(l(0)),u=(n(l(1)),n(l(14))),o=(n(l(22)),l(21),n(l(16))),c={root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"}};a.styles=c;var d=["video","audio","picture","iframe","img"];function v(e){var a=e.classes,l=e.className,n=e.component,o=e.image,c=e.src,v=e.style,b=(0,i.default)(e,["classes","className","component","image","src","style"]),m=-1!==d.indexOf(n),g=!m&&o?(0,r.default)({backgroundImage:'url("'.concat(o,'")')},v):v;return s.default.createElement(n,(0,r.default)({className:(0,u.default)(a.root,(0,t.default)({},a.media,m),l),style:g,src:m?o||c:void 0},b))}v.defaultProps={component:"div"};var b=(0,o.default)(c,{name:"MuiCardMedia"})(v);a.default=b},729:function(e,a,l){"use strict";var n=l(3);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(l(0)),r=(0,n(l(37)).default)(t.default.createElement(t.default.Fragment,null,t.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),t.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Person");a.default=r},740:function(e,a,l){"use strict";l.d(a,"a",(function(){return t}));var n=l(41),t=function(e){return{card:{minHeight:"240px",display:"flex",flexDirection:"column"},cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},cardMedia:{paddingTop:"56.25%","&:hover":{cursor:"pointer"}},cardUsername:{whiteSpace:"nowrap",width:"200px",overflow:"hidden",textOverflow:"ellipsis"},content:{flexGrow:1,padding:3*e.spacing.unit,width:"100%"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},editButton:{color:"white",backgroundColor:"#ff7f7e","&:hover":{backgroundColor:"#c56564"}},errorClass:{boxShadow:"0px 0px 2px 1px ".concat(e.palette.error.main),backgroundColor:"white"},errors:{color:e.palette.error.main},formControl:{margin:e.spacing.unit,minWidth:120},gridActions:{display:"flex",justifyContent:"space-between"},gridTitle:{height:"40px",lineHeight:"1em",overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word"},header:{fontSize:3*e.spacing.unit,fontWeight:400,height:"100%",minHeight:"40px",width:"100%"},headerBody:{padding:"40px"},hero:{padding:"0 24px "},heroUnit:{},heroContent:{margin:"0 auto",padding:"".concat(16*e.spacing.unit,"px 0 0 0")},heroButtons:{marginTop:4*e.spacing.unit},icon:{marginRight:2*e.spacing.unit},inputHeader:{background:"white",minHeight:"40px"},layout:Object(n.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1240+3*e.spacing.unit*2),{width:1240,marginLeft:"auto",marginRight:"auto"}),root:{alignItems:"flex-start",flexDirection:"row",display:"flex",flexGrow:1,width:"100%"},selectEmpty:{marginTop:2*e.spacing.unit},searchField:{marginTop:"7px"},showMore:{position:"absolute",bottom:-50,left:"50%",webkitTransform:"translateX(-50%)",transform:"translateX(-50%)"}}}},747:function(e,a,l){"use strict";l.d(a,"a",(function(){return n}));var n=[{value:"north-america ",label:"North America",options:[{value:"english US",label:"English US"}]},{value:"south-america ",label:"South America",options:[{value:"spanish-mexican",label:"Spanish (Mexican)"},{value:"spanish-peruvian",label:"Spanish (Peruvian)"},{value:"portuguese-brazil",label:"Portuguese (Brazil)"}]},{value:"australian",label:"Australia",options:[{value:"australian",label:"Australian English"}]},{value:"europe",label:"Europe",options:[{value:"english-uk",label:"English (UK)"},{value:"spanish-castilian",label:"Spanish (Castilian)"},{value:"french",label:"French"},{value:"italian",label:"Italian"},{value:"portuguese-Portugal",label:"Portuguese (Portugal)"},{value:"dutch",label:"Dutch"},{value:"finnish",label:"Finnish"},{value:"danish",label:"Danish"},{value:"greek",label:"Greek"},{value:"norwegian",label:"Norwegian"},{value:"swedish",label:"Swedish"},{value:"albanian",label:"Albanian"},{value:"armenian",label:"Armenian"},{value:"eastern-armenian",label:"Eastern Armenian"},{value:"western-armenian",label:"Western Armenian"},{value:"basque",label:"Basque"},{value:"breton",label:"Breton"},{value:"catalan",label:"Catalan"},{value:"cornish",label:"Cornish"},{value:"estonian",label:"Estonian"},{value:"faroese",label:"Faroese"},{value:"flemish",label:"Flemish"},{value:"georgian",label:"Georgian"},{value:"gothic",label:"Gothic"},{value:"hungarian",label:"Hungarian"},{value:"icelandic",label:"Icelandic"},{value:"irish",label:"Irish"},{value:"ladin",label:"Ladin"},{value:"ladino",label:"Ladino"},{value:"latvian",label:"Latvian"},{value:"lithuanian",label:"Lithuanian"},{value:"luxembourgish",label:"Luxembourgish"},{value:"maltese",label:"Maltese"},{value:"manx",label:"Manx"},{value:"occitan ",label:"Occitan "},{value:"romanian",label:"Romanian"},{value:"sami ",label:"Sami "},{value:"lule-sami ",label:"Lule Sami "},{value:"northern-sami ",label:"Northern Sami "},{value:"southern-sami ",label:"Southern Sami "},{value:"ume",label:"Ume"},{value:"scots",label:"Scots"},{value:"scottish ",label:"Scottish "},{value:"welsh",label:"Welsh"}]},{value:"german",label:"German",options:[{value:"German",label:"German"},{value:"small-german-dialects",label:"Small German Dialects"},{value:"swiss-German",label:"Swiss German"}]},{value:"asia",label:"Asia",options:[{value:"indonesian",label:"Indonesian"},{value:"korean",label:"Korean"},{value:"thai",label:"Thai"},{value:"vietnamese",label:"Vietnamese"},{value:"mongolian",label:"Mongolian"},{value:"azerbaijani",label:"Azerbaijani"},{value:"hawaiian",label:"Hawaiian"},{value:"kazakh",label:"Kazakh"},{value:"ainu",label:"Ainu"},{value:"burmese",label:"Burmese"},{value:"cebuano",label:"Cebuano"},{value:"dzongkha",label:"Dzongkha"},{value:"javanese",label:"Javanese"},{value:"karen ",label:"Karen "},{value:"khmer",label:"Khmer"},{value:"kyrgyz",label:"Kyrgyz"},{value:"laz",label:"Laz"},{value:"lu",label:"Lu"},{value:"malay",label:"Malay"},{value:"maori",label:"Maori"},{value:"marshallese",label:"Marshallese"},{value:"nepali",label:"Nepali"},{value:"tagalog",label:"Tagalog"},{value:"tibetan",label:"Tibetan"}]},{value:"chinese",label:"Chinese",options:[{value:"chinese-simplified",label:"Chinese Simplified"},{value:"chinese-traditional",label:"Chinese Traditional"},{value:"mandarin-spoken-only",label:"Mandarin (Spoken Only)"},{value:"cantonese",label:"Cantonese"},{value:"cantonese-jyutping",label:"Cantonese Jyutping"},{value:"ningbo-dialect",label:"Ningbo Dialect"},{value:"taishanese",label:"Taishanese"},{value:"hakka",label:"Hakka"}]},{value:"japaneseLanguages",label:"Japanese",options:[{value:"japanese",label:"Japanese"},{value:"kanji",label:"Kanji"},{value:"japanese-no-script",label:"Japanese (no script)"}]},{value:"indian",label:"Indian",options:[{value:"bengali",label:"Bengali"},{value:"gujarati",label:"Gujarati"},{value:"hindi",label:"Hindi"},{value:"telugu",label:"Telugu"},{value:"urdu",label:"Urdu"},{value:"marathi",label:"Marathi"},{value:"kannada",label:"Kannada"},{value:"malayalam",label:"Malayalam"},{value:"pali",label:"Pali"},{value:"punjabi",label:"Punjabi"},{value:"sanskrit",label:"Sanskrit"},{value:"tamang",label:"Tamang"},{value:"tamil",label:"Tamil"}]},{value:"middle-east",label:"Middle East",options:[{value:"hebrew",label:"Hebrew"},{value:"turkish",label:"Turkish"},{value:"aramaic",label:"Aramaic"},{value:"kurdish",label:"Kurdish"},{value:"persian",label:"Persian"},{value:"yiddish",label:"Yiddish"}]},{value:"arabicLanguages",label:"Arabic",options:[{value:"arabic",label:"Arabic"},{value:"arabic Alphabet",label:"Arabic Alphabet"},{value:"classical-quranic-arabic",label:"Classical Quranic Arabic"},{value:"egyptian-arabic",label:"Egyptian Arabic"},{value:"gulf-khaliji-arabic",label:"Gulf Khaliji Arabic"},{value:"iraqi-arabic",label:"Iraqi Arabic"},{value:"levantine-arabic",label:"Levantine Arabic"},{value:"modern-standard-arabic-roman-alphabet",label:"Modern Standard Arabic (roman alphabet)"},{value:"north-african-maghrebi-arabic",label:"North African Maghrebi Arabic"}]},{value:"Slavic",label:"Slavic",options:[{value:"russian",label:"Russian"},{value:"bosnian",label:"Bosnian"},{value:"croatian",label:"Croatian"},{value:"czech",label:"Czech"},{value:"polish",label:"Polish"},{value:"serbian",label:"Serbian"},{value:"bulgarian",label:"Bulgarian"},{value:"slovak",label:"Slovak"},{value:"slovenian",label:"Slovenian"},{value:"ukrainian",label:"Ukrainian"},{value:"belarusian",label:"Belarusian"},{value:"circassian ",label:"Circassian "},{value:"macedonian",label:"Macedonian"},{value:"ossetic",label:"Ossetic"},{value:"other-slavic",label:"Other Slavic"}]},{value:"africa",label:"Africa",options:[{value:"coptic",label:"Coptic"},{value:"swahili",label:"Swahili"},{value:"afrikaans",label:"Afrikaans"},{value:"akan",label:"Akan"},{value:"amharic",label:"Amharic"},{value:"hausa",label:"Hausa"},{value:"kaonde",label:"Kaonde"},{value:"kinyarwanda",label:"Kinyarwanda"},{value:"luganda",label:"Luganda"},{value:"malagasy",label:"Malagasy"},{value:"mandinka",label:"Mandinka"},{value:"nyanja",label:"Nyanja"},{value:"somali",label:"Somali"},{value:"soninke",label:"Soninke"},{value:"wolof",label:"Wolof"},{value:"zulu",label:"Zulu"}]},{value:"classics",label:"Classics",options:[{value:"latin",label:"Latin"},{value:"ancient-greek",label:"Ancient Greek"}]},{value:"native American",label:"Native American",options:[{value:"cherokee",label:"Cherokee",className:"languageOption"},{value:"algonquian",label:"Algonquian",className:"languageOption"},{value:"alutiiq",label:"Alutiiq",className:"languageOption"},{value:"choctaw",label:"Choctaw",className:"languageOption"},{value:"citizen-potawatomi",label:"Citizen Potawatomi",className:"languageOption"},{value:"greenlandic",label:"Greenlandic",className:"languageOption"},{value:"guarani",label:"Guarani",className:"languageOption"},{value:"inuktitut",label:"Inuktitut",className:"languageOption"},{value:"lakota",label:"Lakota",className:"languageOption"},{value:"nahuatl ",label:"Nahuatl ",className:"languageOption"},{value:"quechua",label:"Quechua",className:"languageOption"}]},{value:"constructed-languages",label:"Constructed Languages",options:[{value:"esperanto",label:"Esperanto",className:"languageOption"},{value:"interlingua ",label:"Interlingua ",className:"languageOption"},{value:"klingon",label:"Klingon",className:"languageOption"},{value:"lojban",label:"Lojban",className:"languageOption"}]}]},810:function(e,a,l){"use strict";l.d(a,"a",(function(){return n})),l.d(a,"b",(function(){return t}));var n=function(e){if(0===e)return"0 Bytes";var a=parseInt(Math.floor(Math.log(e)/Math.log(1e3)),10);return(e/Math.pow(1e3,a)).toPrecision(3)+" "+["Bytes","KB","MB","GB","TB"][a]},t=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e||0===e)return"";e>=1e3&&(a=1);var l=["","K","M","B","T"],n=Math.floor(Math.log10(Math.abs(e))/3),t=Math.max(0,Math.min(n,l.length-1)),r=l[t];return(e/Math.pow(10,3*t)).toFixed(a)+r}}}]);
//# sourceMappingURL=41.4643d44c.chunk.js.map