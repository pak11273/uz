(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[36],{1141:function(e,t,n){"use strict";n.r(t);var r=n(34),o=n.n(r),a=n(49),c=n(10),u=n(11),i=n(12),s=n(13),l=n(4),f=n(0),p=n.n(f),b=n(650),m=n(310),v=n(15),j=n(144),y=n.n(j),d=n(661),x=n.n(d),h=n(205),w=n.n(h),g=n(72),E=n.n(g),O=n(61),A=n.n(O),k=n(33),I=n.n(k),S=n(30),U=n(5),P=n(684),F=n.n(P),M=n(202),C=n(18);function D(){var e=Object(l.a)(["\n  grid-area: ",";\n  color: #003478;\n  &:hover {\n    color: red;\n    text-decoration: underline;\n  }\n"]);return D=function(){return e},e}var N=Object(U.b)(b.a)(D(),(function(e){return e.gridarea})),_={resources:""},z=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).locationName=r.props.path,r.componentDidMount=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.session.layoutError=null;case 1:case"end":return e.stop()}}),e)}))),r.componentWillUnmount=function(){v.session.course=null},r.handleImageClick=function(e){e.preventDefault()},r.state=F()(_),r}return Object(u.a)(n,[{key:"render",value:function(){var e=v.session.course,t=v.session.user,n=this.props.classes,r=function(e){return p.a.createElement(m.a,{path:e.path,render:function(t){return p.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},o=this.props.routes;return p.a.createElement("div",{className:n.root},p.a.createElement(x.a,{className:n.drawer,variant:"permanent",classes:{paper:n.drawerPaper}},p.a.createElement(C.v,{margin:"200px 0 0 0"}),p.a.createElement(E.a,{className:n.list},["introduction","settings","levels","vocabulary"].map((function(n,r){return"settings"===n?p.a.createElement(C.c,{key:n,roles:t&&t.roles,perform:"course:read-settings",id:t&&t.username,matchingID:e&&e.owner.username,yes:function(){return p.a.createElement(A.a,{button:!0,component:N,exact:!0,activeStyle:{color:"yellow"},to:"/course/course-settings",key:r},p.a.createElement(I.a,null,n))},no:function(){return null}}):p.a.createElement(A.a,{button:!0,component:N,exact:!0,activeStyle:{color:"primary"},to:"/course/course-".concat(n),key:r},p.a.createElement(I.a,null,n))}))),p.a.createElement(C.v,{margin:"40px 0 0 0"}),p.a.createElement(y.a,null),p.a.createElement(C.v,{margin:"40px 0 0 0"}),p.a.createElement("div",{align:"center"},p.a.createElement(w.a,{component:b.a,to:"/courses/created"},p.a.createElement(I.a,null,"My Created Courses")))),p.a.createElement("main",{className:n.content},p.a.createElement(M.a,null,p.a.createElement("meta",{charset:"utf-8"}),p.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),p.a.createElement("meta",{name:"description",content:"Make direct contact with our team throught our contact information form.  We will do our best to respond in a timely manner.  If you are a business or educational institution this would be an ideal place to shoot a short inquiry."}),p.a.createElement("meta",{name:"author",content:"Isaac Pak"}),p.a.createElement("title",null,"Utterzone | Courses"),p.a.createElement("link",{rel:"canonical",href:"https://utterzone.com/courses"})),o.map((function(e,t){return p.a.createElement(p.a.Fragment,{key:t},v.session.layoutError?p.a.createElement("div",{style:{color:"red",fontFamily:"sans-serif",fontSize:"1.2em",lineHeight:"3em",maxWidth:"650px",position:"absolute",textAlign:"center",top:300}},v.session.layoutError):p.a.createElement(r,Object.assign({key:e.path},e)))}))))}}]),n}(f.PureComponent);t.default=Object(S.withStyles)((function(e){return{content:{alignItems:"center",display:"flex",flexGrow:1,justifyContent:"center",padding:3*e.spacing.unit},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},list:{margin:"0 auto"},root:{display:"flex",flexGrow:1,width:"100%"}}}))(z)},658:function(e,t,n){var r=n(668),o=n(664);e.exports=function(e,t,n,a){var c=!n;n||(n={});for(var u=-1,i=t.length;++u<i;){var s=t[u],l=a?a(n[s],e[s],s,n,e):void 0;void 0===l&&(l=e[s]),c?o(n,s,l):r(n,s,l)}return n}},660:function(e,t,n){var r=n(338);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},661:function(e,t,n){"use strict";var r=n(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(206))},664:function(e,t,n){var r=n(337);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},665:function(e,t,n){var r=n(336)(Object.getPrototypeOf,Object);e.exports=r},668:function(e,t,n){var r=n(664),o=n(105),a=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var c=e[t];a.call(e,t)&&o(c,n)&&(void 0!==n||t in e)||r(e,t,n)}},669:function(e,t,n){var r=n(210),o=n(665),a=n(333),c=n(341),u=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=o(e);return t}:c;e.exports=u},678:function(e,t,n){var r=n(211),o=n(685),a=n(668),c=n(686),u=n(687),i=n(688),s=n(679),l=n(689),f=n(690),p=n(339),b=n(691),m=n(201),v=n(692),j=n(693),y=n(698),d=n(52),x=n(148),h=n(700),w=n(54),g=n(702),E=n(142),O={};O["[object Arguments]"]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O["[object Object]"]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O["[object Function]"]=O["[object WeakMap]"]=!1,e.exports=function e(t,n,A,k,I,S){var U,P=1&n,F=2&n,M=4&n;if(A&&(U=I?A(t,k,I,S):A(t)),void 0!==U)return U;if(!w(t))return t;var C=d(t);if(C){if(U=v(t),!P)return s(t,U)}else{var D=m(t),N="[object Function]"==D||"[object GeneratorFunction]"==D;if(x(t))return i(t,P);if("[object Object]"==D||"[object Arguments]"==D||N&&!I){if(U=F||N?{}:y(t),!P)return F?f(t,u(U,t)):l(t,c(U,t))}else{if(!O[D])return I?t:{};U=j(t,D,P)}}S||(S=new r);var _=S.get(t);if(_)return _;S.set(t,U),g(t)?t.forEach((function(r){U.add(e(r,n,A,r,t,S))})):h(t)&&t.forEach((function(r,o){U.set(o,e(r,n,A,o,t,S))}));var z=M?F?b:p:F?keysIn:E,B=C?void 0:z(t);return o(B||t,(function(r,o){B&&(r=t[o=r]),a(U,o,e(r,n,A,o,t,S))})),U}},679:function(e,t){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},684:function(e,t,n){var r=n(678);e.exports=function(e){return r(e,5)}},685:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},686:function(e,t,n){var r=n(658),o=n(142);e.exports=function(e,t){return e&&r(t,o(t),e)}},687:function(e,t,n){var r=n(658),o=n(330);e.exports=function(e,t){return e&&r(t,o(t),e)}},688:function(e,t,n){(function(e){var r=n(53),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,c=a&&a.exports===o?r.Buffer:void 0,u=c?c.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=u?u(n):new e.constructor(n);return e.copy(r),r}}).call(this,n(141)(e))},689:function(e,t,n){var r=n(658),o=n(333);e.exports=function(e,t){return r(e,o(e),t)}},690:function(e,t,n){var r=n(658),o=n(669);e.exports=function(e,t){return r(e,o(e),t)}},691:function(e,t,n){var r=n(340),o=n(669),a=n(330);e.exports=function(e){return r(e,a,o)}},692:function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},693:function(e,t,n){var r=n(660),o=n(694),a=n(695),c=n(696),u=n(697);e.exports=function(e,t,n){var i=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new i(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(e,n);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(e);case"[object RegExp]":return a(e);case"[object Set]":return new i;case"[object Symbol]":return c(e)}}},694:function(e,t,n){var r=n(660);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},695:function(e,t){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},696:function(e,t,n){var r=n(90),o=r?r.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},697:function(e,t,n){var r=n(660);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},698:function(e,t,n){var r=n(699),o=n(665),a=n(149);e.exports=function(e){return"function"!=typeof e.constructor||a(e)?{}:r(o(e))}},699:function(e,t,n){var r=n(54),o=Object.create,a=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=a},700:function(e,t,n){var r=n(701),o=n(331),a=n(332),c=a&&a.isMap,u=c?o(c):r;e.exports=u},701:function(e,t,n){var r=n(201),o=n(68);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},702:function(e,t,n){var r=n(703),o=n(331),a=n(332),c=a&&a.isSet,u=c?o(c):r;e.exports=u},703:function(e,t,n){var r=n(201),o=n(68);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}}}]);
//# sourceMappingURL=36.49d3c209.chunk.js.map