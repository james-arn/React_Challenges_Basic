(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),r=n.n(i),u=(n(12),n(2)),d=n(0),a=function(t){var e=Object(c.useState)(""),n=Object(u.a)(e,2),o=n[0],i=n[1],r=Object(c.useRef)(null);Object(c.useEffect)((function(){r.current.focus()}));return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:o}),i("")},children:[Object(d.jsx)("input",{value:o,type:"text",name:"text",placeholder:"Enter task...",onChange:function(t){i(t.target.value)},ref:r}),Object(d.jsx)("button",{children:"Add Task"})]})},s=n(6),j=function(t){var e=t.todos,n=t.completeTodo,o=t.removeTodo,i=t.updateTodo,r=Object(c.useState)({id:null,value:""}),s=Object(u.a)(r,2),j=s[0],l=s[1];return j.id?Object(d.jsx)(a,{edit:j,onSubmit:function(t){i(j.id,t),l({id:null,value:""})}}):e.map((function(t,e){return Object(d.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(d.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return o(t.id)},children:"Delete"}),Object(d.jsx)("button",{onClick:function(){return l({id:t.id,value:t.text})},children:"Edit"})]})]},e)}))};var l=function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"What's the plan for today?"}),Object(d.jsx)(a,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(s.a)(n));o(e)}}}),Object(d.jsx)(j,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));o(e)},removeTodo:function(t){var e=Object(s.a)(n).filter((function(e){return e.id!==t}));o(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&o((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})},b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(l,{})})};r.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e64ad487.chunk.js.map