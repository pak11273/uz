(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[26],{1108:function(e,r,t){},1109:function(e,r,t){e.exports=t.p+"static/media/login_graphic.bf14f6c9.png"},1157:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return W}));var a=t(10),n=t(11),i=t(12),o=t(13),s=t(0),c=t.n(s),u=t(145),l=t(896),m=t(73),p=(t(1108),t(15)),d=(t(885),t(34)),h=t.n(d),f=t(39),b=t(49),g=t(88),v=t(18),y=t(44),x=t(151),j=t.n(x),q=t(59),w=t.n(q),E=t(91),O=t(33),S=t.n(O),P=t(150),_=t.n(P),C=t(1109),k=t.n(C),L=t(704),A=t(824),N=t(652),T=t(30),M=function(e){Object(o.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,r=e.classes,t=e.handleSubmit,a=e.isSubmitting;return c.a.createElement(v.u,{className:r.section},c.a.createElement(w.a,{container:!0},c.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6,align:"center",className:r.leftSide},c.a.createElement(v.m,{centered:!0,alt:"Explore a New World",margin:"0 0 40px 0",width:"470px",src:"".concat(k.a)}),c.a.createElement(S.a,{align:"center",variant:"h4",color:"inherit",gutterBottom:!0,noWrap:!0},"Explore a new world"),c.a.createElement(S.a,{align:"center",variant:"h6",color:"inherit"},'"To have another language is to possess a second soul."'),c.a.createElement(S.a,{align:"center",variant:"h6",color:"inherit",gutterBottom:!0,style:{margin:"0 0 50px 0"}},"\u2014Charlemagne")),c.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},c.a.createElement("div",{className:r.formContainer},c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{className:r.form},c.a.createElement(S.a,{variant:"h4",color:"inherit",gutterBottom:!0,noWrap:!0},"Login"),c.a.createElement(S.a,{component:"p",color:"inherit",noWrap:!0},"credentials"),c.a.createElement(g.a,{name:"username or email",placeholder:"username or email",component:v.g}),c.a.createElement(j.a,null,c.a.createElement(g.a,{id:"password","aria-labelledby":"password",name:"password",placeholder:"password",autoComplete:"new-password",type:"password",component:v.g})),c.a.createElement(S.a,{className:r.forgot,color:"inherit",noWrap:!0},c.a.createElement("a",{href:"/forgot-password"}," Forgot Password? "))),c.a.createElement(v.s,{id:"submit",className:r.button,type:"submit",variant:"contained",color:"primary",size:"large",loading:a,disabled:a},"submit"))))))}}]),t}(s.PureComponent),z=Object(y.compose)(y.withApollo,N.a,Object(y.graphql)(E.f),Object(T.withStyles)((function(){return{button:{right:"0px",bottom:"-60px",position:"absolute"},forgot:{position:"absolute",right:"0px",top:"13px"},form:{display:"flex",flexDirection:"column",position:"relative",height:"100%",margin:"0 auto",width:"100%"},formContainer:{margin:"0 auto",position:"relative",width:"260px"},leftSide:{display:"flex",flexDirection:"column",justifyContent:"center"},section:{justifyContent:"center",margin:"100px auto",maxWidth:1240}}})),Object(g.d)({validationSchema:L.loginSchema,validateOnChange:!1,validateOnBlur:!1,mapPropsToValues:function(){return{"username or email":"",password:""}},handleSubmit:function(){var e=Object(b.a)(h.a.mark((function e(r,t){var a,n,i,o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props,n=t.setErrors,i=t.setSubmitting,o=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.mutate({variables:{identifier:r["username or email"],password:r.password}});case 2:if(t=e.sent,n=t.data.login.error,i=t.data.login.token,_()(n)){e.next=7;break}return e.abrupt("return",Object(A.a)(n));case 7:return e.abrupt("return",Object(f.a)({},t.data.login,{token:i,error:n}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=4,o(r);case 4:if(!(s=e.sent).user||s.user.confirmed){e.next=8;break}return a.history.push({pathname:"/renew-confirmation",state:"renewConfirmation"}),e.abrupt("return");case 8:if(s.token){e.next=13;break}return s.identifier&&(s["username or email"]=s.identifier),n(s),i(!1),e.abrupt("return");case 13:s.token&&(p.cookies._uid=s.token,p.session.user=s.user,p.local.notifications=s.user.requests,p.local.notified=!0,a.history.push({pathname:"/",state:"loadUserSession"}));case 14:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}))(M),D=function(e){Object(o.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){if(this.props&&this.props.location){var e=this.props.location.state;if(e){var r=e.notification;r&&m.toast[e.type||"info"](r,{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0})}this.props.history.replace("/login",{notification:null})}}},{key:"render",value:function(){if(p.cookies._uid)var e=c.a.createElement(l.a,{to:"/"});else e=c.a.createElement(z,null);return c.a.createElement(c.a.Fragment,null,e)}}]),t}(s.PureComponent),W=function(e){Object(o.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,this.props),c.a.createElement(u.c,{style:{width:"100%"}}))}}]),t}(s.PureComponent)},704:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(705);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return a[e]}})}));var n=t(706);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})}));var i=t(707);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return i[e]}})}));var o=t(708);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return o[e]}})}));var s=t(709);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return s[e]}})}));var c=t(710);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(r,e,{enumerable:!0,get:function(){return c[e]}})}))},705:function(e,r,t){"use strict";var a=t(199);Object.defineProperty(r,"__esModule",{value:!0}),r.renewConfirmationSchema=r.betaSignupSchema=r.signupSchema=r.loginSchema=r.changePasswordSchema=r.PasswordValidation=r.betaAccessSchema=r.maxChars=r.minChars=r.passwordNotLongEnough=r.emailNotLongEnough=r.invalidEmail=void 0;var n=a(t(656)),i="email must be a valid email";r.invalidEmail=i;var o="email must be at least 3 characters";r.emailNotLongEnough=o;r.passwordNotLongEnough="password must be at least 8 characters";r.minChars="Must be a minimum of 3 characters";var s="Cannot exceed 255 characters";r.maxChars=s;var c=n.object().shape({key:n.string().required("A beta key is required")});r.betaAccessSchema=c;var u=n.string().min(8,"password must be at least 8 characters").max(255).matches(/[a-z]/,"One lowercase character is required.").matches(/[A-Z]/,"One uppercase character is required.").matches(/[a-zA-Z]+[^a-zA-Z\s]+/,"A number or special char (@,!,#, etc) is required.").required("Password is required");r.PasswordValidation=u;var l=n.object().shape({password:u,"password confirmation":n.string().oneOf([n.ref("password"),null],"Passwords do not match").required("Password confirmation is required")});r.changePasswordSchema=l;var m=n.object().shape({"username or email":n.string().min(3,"invalid login").max(255,"invalid login").required("Username or Email is required"),password:u});r.loginSchema=m;var p=n.object().shape({username:n.string().min(3).max(255).required("Username is required"),email:n.string().min(3,o).max(255).email(i).required("Email is required"),password:u,"password confirmation":n.string().oneOf([n.ref("password"),null],"Passwords do not match").required("Password confirmation is required")});r.signupSchema=p;var d=n.object().shape({email:n.string().min(3,o).max(255).email(i).required("Email is required"),firstName:n.string().min(1,"minimum of one character").max(255,s).required("A first name is required"),lastName:n.string().min(1,"minimum of one character").max(255,s).required("A last name is required"),linkedIn:n.string().max(255,s),whyLearning:n.string().max(1400,"maximum of 1400 characters"),nativeLang:n.string().max(255,s),currentlyLearning:n.string().max(255,s),howLongLearning:n.string().max(255,s),dayLearningHrs:n.string().max(255,s)});r.betaSignupSchema=d;var h=n.object().shape({email:n.string().min(3,o).max(255).email(i).required("Email is required")});r.renewConfirmationSchema=h},706:function(e,r,t){"use strict";var a=t(199);Object.defineProperty(r,"__esModule",{value:!0}),r.contactSchema=void 0;var n=a(t(656)),i=n.object().shape({name:n.string().max(255),subject:n.string().max(255),email:n.string().max(255).email("email must be a valid email"),message:n.string().max(3e3)});r.contactSchema=i},707:function(e,r,t){"use strict";var a=t(199),n=t(3);Object.defineProperty(r,"__esModule",{value:!0}),r.courseSchema=r.courseCreateSchema=r.nameTooLong=r.descriptionTooLong=r.descriptionNotLongEnough=r.titleNotLongEnough=void 0;var i=n(t(20)),o=a(t(656)),s="Course titles must be at least 10 characters";r.titleNotLongEnough=s;var c="Course description must be at least 100 characters";r.descriptionNotLongEnough=c;var u="Course description cannot exceed 350 characters";r.descriptionTooLong=u;var l="Course name cannot exceed 100 characters";r.nameTooLong=l;var m=o.object().shape((0,i.default)({title:o.string().min(10,s).max(100,l).required("A course title is required"),courseDescription:o.string().min(100,c).max(350,u).required("A course description is required"),topics:o.array().min(3,"Pick at least 3 tags").of(o.object().shape({label:o.string().required(),value:o.string().required()})),usingLang:o.array().min(1,"Pick at least 1 language").of(o.object().shape({label:o.string().required(),value:o.string().required()})).required("This field is required.")},"courseDescription",o));r.courseCreateSchema=m;var p=o.object().shape({title:o.string().required("A course title is required").min(10,s).max(100,l),courseDescription:o.string().min(100,c).max(350,u).required("A course description is required")});r.courseSchema=p},708:function(e,r,t){"use strict";var a=t(199);Object.defineProperty(r,"__esModule",{value:!0}),r.levelSchema=void 0;var n=a(t(656)),i=n.object().shape({level:n.number().typeError("Levels must be whole numbers.").max(1e3,"Courses are limited to 1000 levels.").moreThan(0,"Levels need to be more than 0").required("A level is required."),title:n.string().typeError("Titles must be letters.").max(100,"Titles are limited to 100 characters.").required()});r.levelSchema=i},709:function(e,r,t){"use strict";var a=t(199);Object.defineProperty(r,"__esModule",{value:!0}),r.vocabularySchema=void 0;var n=a(t(656)),i=n.object().shape({level:n.number().typeError("You must pick a level or create one.").moreThan(0,"Levels need to be more than 0").required("A level is required."),word:n.string().typeError("Words must be letters.").max(100,"Words are limited to 100 characters.").required(),translation:n.string().typeError("Translations must be letters.").max(100,"Translations are limited to 100 characters.").required()});r.vocabularySchema=i},710:function(e,r,t){"use strict";var a=t(199);Object.defineProperty(r,"__esModule",{value:!0}),r.zoneCreateSchema=r.rezoneSchema=void 0;var n=a(t(656)),i=n.object().shape({username:n.string().required("A username is required")});r.rezoneSchema=i;var o=n.object().shape({ageGroup:n.string().required("Age restrictions are required"),app:n.string().required("An app is required"),course:n.string().required("A course you subscribe to is required"),courseLevel:n.string().required("A course level is required"),zoneName:n.string().min(3,"Zone names must be at least 6 characters").max(40,"Zone names cannot exceed 20 characters").required("A zone name is required"),zoneDescription:n.string().min(30,"Zone descriptions must be at least 30 characters").max(110,"Zone descriptions cannot exceed 110 characters").required("A zone description is required")});r.zoneCreateSchema=o},824:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var a=function(e){var r={};return e.forEach((function(e){r[e.path]=e.message})),r}},885:function(e,r,t){},896:function(e,r,t){"use strict";var a=t(0),n=t.n(a),i=t(1),o=t.n(i),s=t(22),c=t.n(s),u=t(48),l=t.n(u),m=t(107),p=t(221),d=t.n(p),h={},f=0,b=function(e){var r=e,t=h[r]||(h[r]={});if(t[e])return t[e];var a=d.a.compile(e);return f<1e4&&(t[e]=a,f++),a},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===e)return e;var t=b(e);return t(r,{pretty:!0})},v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};function y(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function x(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}var j=function(e){function r(){return y(this,r),x(this,e.apply(this,arguments))}return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),r.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},r.prototype.componentWillMount=function(){l()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},r.prototype.componentDidMount=function(){this.isStatic()||this.perform()},r.prototype.componentDidUpdate=function(e){var r=Object(m.b)(e.to),t=Object(m.b)(this.props.to);Object(m.c)(r,t)?c()(!1,"You tried to redirect to the same route you're currently on: \""+t.pathname+t.search+'"'):this.perform()},r.prototype.computeTo=function(e){var r=e.computedMatch,t=e.to;return r?"string"===typeof t?g(t,r.params):v({},t,{pathname:g(t.pathname,r.params)}):t},r.prototype.perform=function(){var e=this.context.router.history,r=this.props.push,t=this.computeTo(this.props);r?e.push(t):e.replace(t)},r.prototype.render=function(){return null},r}(n.a.Component);j.propTypes={computedMatch:o.a.object,push:o.a.bool,from:o.a.string,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired},j.defaultProps={push:!1},j.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired}).isRequired,staticContext:o.a.object}).isRequired};var q=j;r.a=q}}]);
//# sourceMappingURL=login-ctrl.f3adfa38.chunk.js.map