(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[8],{1164:function(n,t,e){"use strict";e.r(t);var a=e(0),i=e.n(a),r=e(44),o=e(36),c=e.n(o),s=e(59),u=e.n(s),l=e(15),g=e(33),d=e.n(g),p=e(30),m=e(716),h=e(4),f=e(23),b=e.n(f),v=e(187);function y(){var n=Object(h.a)(["\n  mutation changeCreditCard($source: String!, $ccLast4: String) {\n    changeCreditCard(source: $source, ccLast4: $ccLast4) {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return y=function(){return n},n}function x(){var n=Object(h.a)(["\n  mutation createPayMonthly($source: String!, $ccLast4: String) {\n    createPayMonthly(source: $source, ccLast4: $ccLast4) {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return x=function(){return n},n}function w(){var n=Object(h.a)(["\n  mutation cancelPayMonthly {\n    cancelPayMonthly {\n      ...UserInfo\n    }\n  }\n\n  ","\n"]);return w=function(){return n},n}var C=b()(w(),v.a);b()(x(),v.a),b()(y(),v.a);t.default=Object(p.withStyles)(m.a)((function(n){var t=n.classes;console.log("props: ",n);var e=function(t){return function(){t();var e=l.session.user,a=l.session.user.roles.filter((function(n){return"payMonthly"!==n}));e.isCanceled=!0,e.roles=a,l.session.user=e,delete l.cookies._uid,delete l.session.user,n.history.push("/login",{notification:"Your account has been deactivated",type:"success"})}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",{className:t.settingsContent},i.a.createElement("div",{className:t.heroUnit},i.a.createElement("div",{className:t.heroContent},i.a.createElement(d.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Account Settings"),i.a.createElement("div",{className:t.heroButtons}))),!1===l.session.user.isCanceled&&i.a.createElement("div",null,i.a.createElement(d.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Your account will be deactivated. You will not be able to login with your current credentials."),i.a.createElement(u.a,{container:!0,spacing:16,justify:"center"},i.a.createElement(u.a,{item:!0},i.a.createElement(r.Mutation,{mutation:C},(function(n){return i.a.createElement(c.a,{variant:"contained",color:"secondary",onClick:e(n)},"Cancel My Account")})))))))}))},716:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e(41),i=function(n){return{appBar:{position:"relative"},billingHeroUnit:{backgroundColor:"#2bae3a"},billingHeroContent:{maxWidth:960,margin:"0 auto",padding:"".concat(8*n.spacing.unit,"px ").concat(6*n.spacing.unit,"px ").concat(6*n.spacing.unit,"px")},masthead:Object(a.a)({padding:1*n.spacing.unit,margin:"auto",maxWidth:900},"@media (max-width:770px)",{flexDirection:"column"}),billingRoot:{maxWidth:960,margin:"0 auto"},heading:{color:"black"},content:{flexGrow:1,padding:3*n.spacing.unit},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},heroUnit:{backgroundColor:n.palette.background.paper,marginBottom:"30px"},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*n.spacing.unit,"px 0 ").concat(6*n.spacing.unit,"px")},heroButtons:{marginTop:4*n.spacing.unit},icon:{marginRight:2*n.spacing.unit},layout:Object(a.a)({width:"auto",marginLeft:3*n.spacing.unit,marginRight:3*n.spacing.unit},n.breakpoints.up(1100+3*n.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),list:{margin:"0 auto"},settingsContent:{flexGrow:1,padding:3*n.spacing.unit,height:"100vh",overflow:"auto",width:"100%"},subHeading:{color:"black",marginTop:"40px",position:"relative"},root:{display:"flex"}}}}}]);
//# sourceMappingURL=account-settings.052c2a68.chunk.js.map