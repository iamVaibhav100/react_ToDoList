(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(6),r=n.n(i),j=n(7),s=n(4),o=n(0);var a=function(e){return Object(o.jsx)("div",{onClick:function(){e.onChecked(e.id)},children:Object(o.jsx)("li",{children:e.text})})};var u=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("input",{onChange:function(e){var t=e.target.value;r(t)},type:"text",value:i}),Object(o.jsx)("button",{onClick:function(){e.onAdd(i),r("")},children:Object(o.jsx)("span",{children:"Add"})})]})};var d=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1];function r(e){i((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsx)("h1",{children:"To-Do List"})}),Object(o.jsx)(u,{onAdd:function(e){i((function(t){return[].concat(Object(j.a)(t),[e])}))}}),Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:n.map((function(e,t){return Object(o.jsx)(a,{id:t,text:e,onChecked:r},t)}))})})]})};r.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f4e25147.chunk.js.map