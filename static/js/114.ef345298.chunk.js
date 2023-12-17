"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{6114:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,o,i,a,c,s,d,l=r(5705),u=r(168),p=r(5867),x=(0,p.ZP)(l.l0)(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n  border: 2px solid #4f4d4d;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);\n\n  label {\n    font-size: 18px;\n    color: white;\n  }\n\n  input {\n    height: 26px;\n    width: 100%;\n\n    background: transparent;\n    color: white;\n    border: none;\n    border-bottom: 1px solid white;\n    outline: none;\n    font-size: 14px;\n  }\n\n  button {\n    display: inline-block;\n    padding: 5px 10px;\n    background: linear-gradient(to bottom, #4caf50, #45a049);\n    border: none;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 5px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n  }\n\n  button:hover {\n    transform: scale(1.01);\n    color: black;\n  }\n"]))),m=(0,p.ZP)(l.Bc)(o||(o=(0,u.Z)(["\n  color: red;\n  font-size: 12px;\n"]))),b=r(6727),h=r(3855),f=r(6916),g=function(n){return n.contacts.contact},j=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},w=function(n){return n.filters.filter},k=(0,f.P1)([g,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=r(208),Z=r(184),P=function(){var n=(0,h.v9)(g),e=(0,h.I0)(),r=b.Ry().shape({name:b.Z_().min(2,"Name must have at least 2 characters").max(25,"Name must be 25 characters or less").required("Name is required"),number:b.Z_().matches(/^[0-9-+]*$/,"Invalid phone number").min(5,"Phone number must be at least 5 characters").max(20,"Phone number must be 20 characters or less").required("Phone number is required")});return(0,Z.jsx)(l.J9,{initialValues:{name:"",number:""},validationSchema:r,onSubmit:function(r,t){!function(r){var t=r.name,o=r.number;n.some((function(n){return n.name===t}))?alert("".concat(t," is already in contacts")):n.some((function(n){return n.number===o}))?alert("".concat(o," is already in contacts")):e((0,y.uK)({name:t,number:o}))}(r),t.resetForm()},children:(0,Z.jsxs)(x,{children:[(0,Z.jsx)("label",{children:"Name"}),(0,Z.jsx)(l.gN,{type:"text",name:"name",placeholder:"Jack Daniel`s"}),(0,Z.jsx)(m,{name:"name",component:"span"}),(0,Z.jsx)("label",{children:"Phone"}),(0,Z.jsx)(l.gN,{type:"tel",name:"number",placeholder:"+380"}),(0,Z.jsx)(m,{name:"number",component:"span"}),(0,Z.jsx)("button",{type:"submit",children:"Add contact"})]})})},z=p.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 60px;\n  padding: 20px;\n  border: 2px solid #4f4d4d;\n  border-radius: 5px;\n  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);\n\n  p {\n    font-size: 18px;\n    color: white;\n  }\n\n  input {\n    font-size: 14px;\n\n    height: 26px;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid white;\n    outline: none;\n\n    background: transparent;\n    color: white;\n  }\n"]))),C=r(1429),I=function(){var n=(0,h.v9)(w),e=(0,h.I0)();return(0,Z.jsxs)(z,{children:[(0,Z.jsx)("p",{children:"Find contacts by name"}),(0,Z.jsx)("input",{value:n,onChange:function(n){e((0,C.Tv)(n.currentTarget.value))},type:"text",name:"filter",placeholder:"name search"})]})},N=p.ZP.div(a||(a=(0,u.Z)(["\n  li {\n    margin-top: 20px;\n\n    background-color: #fff;\n    border: 2px solid #ddd;\n    border-radius: 5px;\n    padding: 10px;\n    background: transparent;\n    color: white;\n  }\n\n  p {\n    margin-bottom: 8px;\n    font-size: 18px;\n    color: white;\n  }\n\n  button {\n    display: inline-block;\n    background: linear-gradient(to bottom, #c90000, #880e0e);\n    border: none;\n    color: white;\n    text-align: center;\n    text-decoration: none;\n    font-size: 14px;\n    border-radius: 5px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    padding: 2px 5px;\n    cursor: pointer;\n  }\n\n  button:hover {\n    transform: scale(1.05);\n    color: black;\n  }\n"]))),_=function(){var n=(0,h.v9)(k),e=(0,h.I0)();return(0,Z.jsx)(N,{children:(0,Z.jsx)("ul",{children:n.map((function(n){var r=n.name,t=n.number,o=n.id;return(0,Z.jsxs)("li",{children:[(0,Z.jsxs)("p",{children:[r," : ",t]}),(0,Z.jsx)("button",{type:"submit",onClick:function(){return function(n){e((0,y.GK)(n))}(o)},children:"Delete"})]},o)}))})})},q=r(630),F=r(2791),L=p.ZP.div(c||(c=(0,u.Z)(["\n  min-height: 100vh;\n  background-image: url(",");\n  background-size: 100% 100%;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; \n"])),r(7865)),S=p.ZP.div(s||(s=(0,u.Z)(["\n  margin: 200px auto 0;\n  width: 600px; \n"]))),T=p.ZP.p(d||(d=(0,u.Z)(["\ncolor : red;\nfont-size: 24px;\nmargin-top: 30px ;\n"]))),D=function(){var n=(0,h.I0)(),e=(0,h.v9)(j),r=(0,h.v9)(v);return(0,F.useEffect)((function(){n((0,y.yF)())}),[n]),(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(S,{children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)(P,{}),(0,Z.jsx)(I,{})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(_,{})})]}),e&&!r&&(0,Z.jsx)(q.a,{}),null!==r&&(0,Z.jsx)(T,{children:"Sorry, something went wrong... Try reloading the page!"})]})},E=function(){var n=(0,h.I0)();return(0,F.useEffect)((function(){n((0,y.yF)())}),[n]),(0,Z.jsx)(D,{})}},7865:function(n,e,r){n.exports=r.p+"static/media/tekstura-fon.9409e99d0d21e7add174.jpg"}}]);
//# sourceMappingURL=114.ef345298.chunk.js.map