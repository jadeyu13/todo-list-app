(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),r=(n(15),n(7)),d=n(3),s=n(9),u=n(10),l=n(1);var j=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var r=function(t){i(t.target.value)},s=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e3*Math.random()),text:c}),i("")};return Object(l.jsx)("form",{onSubmit:s,className:"todo-form",children:t.edit?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{placeholder:"Update your item",value:c,onChange:r,name:"text",ref:a,className:"todo-input edit"}),Object(l.jsx)("button",{onClick:s,className:"todo-button edit",children:"Update"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{placeholder:"Add a todo",value:c,onChange:r,name:"text",className:"todo-input",ref:a}),Object(l.jsx)("button",{onClick:s,className:"todo-button",children:"Add todo"})]})})},b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),r=Object(d.a)(a,2),b=r[0],f=r[1];return b.id?Object(l.jsx)(j,{edit:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(l.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(l.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)(s.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(l.jsx)(u.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(t){var e=Object(o.useState)([]),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"What's the Plan for Today"}),Object(l.jsx)(j,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(c));i(e)}}}),Object(l.jsx)(b,{todos:c,completeTodo:function(t){var e=c.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));i(e)},removeTodo:function(t){var e=Object(r.a)(c).filter((function(e){return e.id!==t}));i(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"To Do App"}),Object(l.jsx)(f,{})]})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d4be6785.chunk.js.map