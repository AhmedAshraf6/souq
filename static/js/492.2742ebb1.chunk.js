"use strict";(self.webpackChunksouq_eg=self.webpackChunksouq_eg||[]).push([[492],{7742:function(r,e,s){s(2791);var t=s(7689);e.Z=function(r){var e=r.url,s=void 0===e?"/":e,o=r.seconds,n=void 0===o?"3000":o,a=(0,t.s0)(),c=setTimeout((function(){a("".concat(s))}),n);return function(){clearTimeout(c)}}},6492:function(r,e,s){s.r(e);var t=s(4165),o=s(1413),n=s(5861),a=s(9439),c=s(1243),i=s(2791),d=s(7689),l=s(1245),u=s(1593),p=s(7742),m=s(7837),w=s(3585),f=s(184);e.default=function(){var r=(0,d.UO)().idreset,e=(0,m.S)(),s=e.handleLoading,x=e.isLoading,h=(0,i.useState)({password:"",conPassword:""}),v=(0,a.Z)(h,2),g=v[0],Z=v[1],j=(0,i.useState)({}),E=(0,a.Z)(j,2),b=E[0],N=E[1],C=(0,i.useState)(!1),y=(0,a.Z)(C,2),k=y[0],P=y[1],S=(0,i.useState)(!1),_=(0,a.Z)(S,2),I=_[0],O=_[1],T=g.password,q=g.conPassword,L=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,c.Z.post(w.ep,JSON.stringify({new_password_one:g.password,new_password_two:g.conPassword,id:r}),{headers:{"Content-Type":"application/json"}});case 4:e.sent,s(!1),O(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),s(!1),422===(null===(n=e.t0.response)||void 0===n?void 0:n.status)?N((0,o.Z)((0,o.Z)({},b),{},{emailError:"\u0627\u0644\u0625\u064a\u0645\u064a\u0644 \u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f \u0628\u0627\u0644\u062e\u062f\u0645\u0629"})):N((0,o.Z)((0,o.Z)({},b),{},{anotherError:"\u062e\u0637\u0623 \u0645\u0627 \u062d\u062f\u062b \u062d\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u064a"}));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){0===Object.keys(b).length&&k&&L()}),[b]);var D=function(r){var e={};return g.password||(e.passwordError="\u0645\u0646 \u0641\u0636\u0644\u0643 \u0623\u062f\u062e\u0644 \u0627\u0644\u0628\u0627\u0633\u0648\u0631\u062f"),g.conPassword?g.password!==g.conPassword&&(e.notIdenticalError="\u0627\u0644\u0628\u0627\u0633\u0648\u0631\u062f \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u0627\u0646"):e.passwordConError="\u0623\u0639\u062f \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0628\u0627\u0633\u0648\u0631\u062f",e};return x?(0,f.jsx)(l.Z,{}):I?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{textMsg:"\u062a\u0645 \u0625\u0639\u0627\u062f\u0629  \u062a\u0639\u064a\u064a\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u0628\u0646\u062c\u0627\u062d \u0633\u062c\u0644 \u062f\u062e\u0648\u0644\u0643 \u0645\u0646 \u062c\u062f\u064a\u062f"}),(0,f.jsx)(p.Z,{}),";"]}):(0,f.jsx)("main",{className:"login mx-3",children:(0,f.jsxs)("form",{className:"box icon-box w-50 position-relative mx-auto mt-4",onSubmit:function(r){r.preventDefault(),N(D(g)),P(!0)},children:[(0,f.jsx)("input",{className:"form-control form-control-lg mt-4 ",type:"password",name:"password",value:T,placeholder:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",autoComplete:"new-password",onChange:function(r){return Z((0,o.Z)((0,o.Z)({},g),{},{password:r.target.value}))}}),b.passwordError&&(0,f.jsx)("p",{className:"text-danger mt-2",children:b.passwordError}),(0,f.jsx)("input",{className:"form-control form-control-lg mt-4 ",type:"password",name:"conPassword",value:q,placeholder:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",autoComplete:"new-password",onChange:function(r){return Z((0,o.Z)((0,o.Z)({},g),{},{conPassword:r.target.value}))}}),b.passwordConError&&(0,f.jsx)("p",{className:"text-danger mt-2",children:b.passwordConError}),b.notIdenticalError&&(0,f.jsx)("p",{className:"text-danger mt-2",children:b.notIdenticalError}),b.emailError&&(0,f.jsx)("p",{className:"text-danger mt-2",children:b.emailError}),b.anotherError&&(0,f.jsx)("p",{className:"text-danger mt-2",children:b.anotherError}),(0,f.jsx)("div",{className:"text-center my-3",children:(0,f.jsx)("button",{className:"btn btn-light text-primary w-50 fs-6 fw-bold",type:"submit",children:"\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646"})})]})})}}}]);
//# sourceMappingURL=492.2742ebb1.chunk.js.map