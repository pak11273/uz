(this.webpackJsonpuz=this.webpackJsonpuz||[]).push([[29],{1144:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),i=a(49),o=a(10),s=a(11),c=a(12),m=a(13),l=a(41),u=a(18),d=a(88),h=a(0),b=a.n(h),p=a(44),f=a(91),g=a(33),y=a.n(g),x=a(73),v=a(30),w=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={confirmation:"We need to confirm your email address.  Did you lose your confirmation email?  We can send you another one."},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.confirmation;return b.a.createElement(b.a.Fragment,null,b.a.createElement(u.e,{className:t.root},b.a.createElement(u.u,{className:t.section},b.a.createElement(d.b,{validationSchema:renewConfirmationSchema,initialValues:{email:""},onSubmit:function(){var t=Object(i.a)(r.a.mark((function t(a,n){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.client.mutate({mutation:f.i,variables:{email:a.email}});case 2:if(!(i=t.sent).data.errors){t.next=7;break}return x.toast.error(i.data.errors[0].message,{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0}),n.setSubmitting(!1),t.abrupt("return");case 7:if(!i.data.renewConfirmation){t.next=10;break}return setTimeout((function(){n.setSubmitting(!1),x.toast.success("A confirmation email has been sent.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0}),n.resetForm()}),3e3),t.abrupt("return");case 10:x.toast.error("No email on file with that address.",{className:"toasty",bodyClassName:"toasty-body",hideProgressBar:!0}),setTimeout((function(){n.setSubmitting(!1)}),3e3);case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),render:function(e){var n=e.errors,r=e.handleChange,i=e.handleSubmit,o=e.isSubmitting;return b.a.createElement("form",{onSubmit:i},b.a.createElement(y.a,{variant:"h6",align:"center",className:t.text,gutterBottom:!0},a),b.a.createElement(u.f,{flexdirection:"row",justifycontent:"center"},b.a.createElement(d.a,{className:t.textField,name:"email",onChange:r,placeholder:"email address",component:u.g}),n.name&&b.a.createElement("div",{id:"feedback"},n.name),b.a.createElement(u.s,{loading:o,disabled:o,className:t.button,color:"primary",variant:"contained",type:"submit"},"Send")))}}))))}}]),a}(h.Component);t.default=Object(p.compose)(p.withApollo,Object(v.withStyles)((function(e){return{button:{margin:"30px"},root:{backgroundColor:"black",height:"100%"},text:{color:"white"},textField:{margin:"18px",background:"white",marginLeft:e.spacing.unit,marginRight:e.spacing.unit},masthead:Object(l.a)({padding:1*e.spacing.unit,margin:"auto",maxWidth:900},"@media (max-width:770px)",{flexDirection:"column"}),section:Object(l.a)({padding:1*e.spacing.unit,height:"100vh",maxWidth:900},"@media (max-width:770px)",{flexDirection:"column"})}})))(w)}}]);
//# sourceMappingURL=renew.0a64fc5f.chunk.js.map