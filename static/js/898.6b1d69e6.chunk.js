"use strict";(self.webpackChunksouq=self.webpackChunksouq||[]).push([[898],{7742:function(e,s,r){r(2791);var a=r(7689);s.Z=function(e){var s=e.url,r=void 0===s?"/":s,n=e.seconds,t=void 0===n?"3000":n,c=(0,a.s0)(),o=setTimeout((function(){c("".concat(r))}),t);return function(){clearTimeout(o)}}},8898:function(e,s,r){r.r(s),r.d(s,{default:function(){return w}});var a=r(2791),n=r(4942),t=r(1413),c=r(4165),o=r(5861),l=r(9439),i=r(7837),u=r(1243),d=r(3585),m=r(1245),x=r(1593),f=r(7742),h=r(184),p=function(){var e=(0,i.S)().token,s=(0,a.useState)(!1),r=(0,l.Z)(s,2),p=r[0],v=r[1],w=(0,a.useState)(!1),N=(0,l.Z)(w,2),j=N[0],P=N[1],g=(0,a.useState)(!1),y=(0,l.Z)(g,2),Z=y[0],b=y[1],S=function(){var s=(0,o.Z)((0,c.Z)().mark((function s(r){return(0,c.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return v(!0),s.prev=1,s.next=4,u.Z.post(r,JSON.stringify({old_password:C.currentPass,new_password_one:C.newPass,new_password_two:C.verifyNewPass}),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 4:s.sent,v(!1),P(!0),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(1),v(!1),b(!0);case 13:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}(),k=(0,a.useState)({privateAd:"",currentPass:"",newPass:"",verifyNewPass:""}),E=(0,l.Z)(k,2),C=E[0],T=E[1],_=(0,a.useState)({}),F=(0,l.Z)(_,2),q=F[0],A=F[1],O=(0,a.useState)(!1),z=(0,l.Z)(O,2),B=z[0],D=z[1],H=(0,a.useState)(),J=(0,l.Z)(H,2),M=(J[0],J[1],function(e){var s=e.target,r=s.name,a=s.value;T((0,t.Z)((0,t.Z)({},C),{},(0,n.Z)({},r,a)))}),G=function(e){var s={};return e.currentPass||(s.currentPassError="\u0645\u0646 \u0641\u0636\u0644\u0643 \u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"),e.newPass?e.verifyNewPass?e.newPass!==e.verifyNewPass&&(s.samePass="\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646"):s.verifyNewPassError="\u0645\u0646 \u0641\u0636\u0644\u0643 \u0623\u0639\u062f \u0643\u062a\u0627\u0628\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629":s.newPassError="\u0645\u0646 \u0641\u0636\u0644\u0643 \u0623\u062f\u062e\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",s};return(0,a.useEffect)((function(){0===Object.keys(q).length&&B&&S(d.Tm)}),[q]),(0,h.jsx)("div",{className:"my-settings  my-5",children:(0,h.jsx)("div",{className:"container-fluid",children:p?(0,h.jsx)(m.Z,{}):j?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{textMsg:"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0628\u0646\u062c\u0627\u062d"}),(0,h.jsx)(f.Z,{})]}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("form",{onSubmit:function(e){e.preventDefault(),A(G(C)),D(!0)},children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-2",children:(0,h.jsx)("h3",{className:"text-primary",children:"\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a"})}),(0,h.jsx)("div",{className:"col-md-10",children:(0,h.jsxs)("div",{className:"box1 bg-primary py-4 rounded mt-2",children:[(0,h.jsx)("div",{className:"box border-bottom pb-4",children:(0,h.jsx)("h4",{className:"px-2 text-white",children:"\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"})}),(0,h.jsxs)("div",{className:"form mx-2 row",children:[(0,h.jsxs)("div",{className:"col-sm-9 col-12",children:[(0,h.jsx)("input",{className:"form-control form-control-lg mt-4 ",type:"password",placeholder:"\u0643\u0644\u0645\u0629\u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",name:"currentPass",value:C.currentPass,onChange:M}),(0,h.jsx)("p",{className:"text-danger mt-2",children:q.currentPassError}),Z&&(0,h.jsx)("p",{className:"text-danger mt-2",children:"\u062e\u0637\u0623 \u0641\u064a \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"})]}),(0,h.jsxs)("div",{className:"col-sm-9 col-12",children:[(0,h.jsx)("input",{className:"form-control form-control-lg mt-4 ",type:"password",placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",name:"newPass",value:C.newPass,onChange:M}),(0,h.jsx)("p",{className:"text-danger",children:q.newPassError})]}),(0,h.jsxs)("div",{className:"col-sm-9 col-12",children:[(0,h.jsx)("input",{className:"form-control form-control-lg mt-4 ",type:"password",placeholder:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629\u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629",name:"verifyNewPass",value:C.verifyNewPass,onChange:M}),(0,h.jsxs)("p",{className:"text-danger",children:[q.verifyNewPassError,q.samePass]})]}),(0,h.jsx)("div",{className:"col-12 text-center mt-5",children:(0,h.jsx)("button",{className:"btn btn-secondary btn-lg text-white",children:"\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"})})]})]})})]})})})})})},v=r(4404),w=function(){var e=(0,v.H)(),s=e.toggleNavbarFunc,r=e.closeSubmenu,n=e.closeSearch;return(0,a.useEffect)((function(){s(!1),r(!1),n(),window.scrollTo(0,0)}),[]),(0,h.jsx)("main",{className:"settings",children:(0,h.jsx)(p,{})})}}}]);
//# sourceMappingURL=898.6b1d69e6.chunk.js.map