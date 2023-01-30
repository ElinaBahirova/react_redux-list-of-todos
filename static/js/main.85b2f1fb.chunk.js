(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),l=c(15),r=c(6),i=c(13),o=c(14),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type,e},j=c(5),u={query:"",status:"all"},b=function(e){return{type:"filter/SETQUERY",payload:e}},h=function(e){return{type:"filter/SETSTATUS",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SETQUERY":return Object(j.a)(Object(j.a)({},e),{},{query:t.payload});case"filter/SETSTATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.payload});default:return e}},O=function(e){return{type:"todo/SET",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todo/SET"===t.type?t.payload:e},x=Object(r.combineReducers)({currentTodo:d,filter:m,todos:f}),p=Object(r.createStore)(x,Object(i.composeWithDevTools)(Object(r.applyMiddleware)(o.a))),v=c(3),y=c(0),N=(c(23),c(24),c(9)),g=c.n(N),T=c(1),S=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodo;return Object(T.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"#"}),Object(T.jsx)("th",{children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:"fas fa-check"})})}),Object(T.jsx)("th",{children:"Title"}),Object(T.jsx)("th",{children:" "})]})}),Object(T.jsx)("tbody",{children:t.map((function(e){return Object(T.jsxs)("tr",{"data-cy":"todo",className:g()({"has-background-info-light":s===e}),children:[Object(T.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(T.jsx)("td",{className:"is-vcentered",children:Object(T.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(T.jsx)("i",{className:"fas fa-check"})})}):Object(T.jsx)("td",{className:"is-vcentered"}),Object(T.jsx)("td",{className:"is-vcentered is-expanded",children:Object(T.jsx)("p",{className:g()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(T.jsx)("td",{className:"has-text-right is-vcentered",children:Object(T.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:g()("far",{"fa-eye":s!==e,"fa-eye-slash":s===e})})})})})]},e.id)}))})]})},k=(n.b,n.c),w=function(){var e=k((function(e){return e.filter.query})),t=Object(n.b)();return Object(T.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(T.jsx)("p",{className:"control",children:Object(T.jsx)("span",{className:"select",children:Object(T.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){t(h(e.target.value))},children:[Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"active",children:"Active"}),Object(T.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(T.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(T.jsx)("input",{"data-cy":"searchInput",type:"text",value:e,className:"input",placeholder:"Search...",onChange:function(e){t(b(e.target.value))}}),Object(T.jsx)("span",{className:"icon is-left",children:Object(T.jsx)("i",{className:"fas fa-magnifying-glass"})}),e&&Object(T.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(T.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t(b(""))}})})]})]})};function E(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(26);var C=function(){return Object(T.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(T.jsx)("div",{className:"Loader__content"})})},_=function(e){var t=e.todo,c=e.unsetSelectedTodo,s=Object(y.useState)(null),a=Object(v.a)(s,2),n=a[0],l=a[1];return Object(y.useEffect)((function(){var e;(e=t.userId,E("/users/".concat(e))).then((function(e){return l(e)}))}),[]),Object(T.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(T.jsx)("div",{className:"modal-background"}),n?Object(T.jsxs)("div",{className:"modal-card",children:[Object(T.jsxs)("header",{className:"modal-card-head",children:[Object(T.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(T.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(T.jsxs)("div",{className:"modal-card-body",children:[Object(T.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(T.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(T.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(T.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(T.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(T.jsx)(C,{})]})},q=function(){var e=Object(y.useState)(null),t=Object(v.a)(e,2),c=t[0],s=t[1],a=Object(y.useState)(!0),l=Object(v.a)(a,2),r=l[0],i=l[1],o=k((function(e){return e.todos})),d=k((function(e){return e.filter.query})),j=k((function(e){return e.filter.status})),u=Object(n.b)(),b=o.filter((function(e){if(e.title.toLowerCase().includes(d.toLowerCase()))switch(j){case"all":return!0;case"completed":return e.completed;case"active":return!e.completed;default:return!1}return!1}));return Object(y.useEffect)((function(){E("/todos").then((function(e){return function(){return u(O(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]))}(e)})).finally((function(){return i(!1)}))}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"section",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("h1",{className:"title",children:"Todos:"}),Object(T.jsx)("div",{className:"block",children:Object(T.jsx)(w,{})}),r&&Object(T.jsx)(C,{}),Object(T.jsx)("div",{className:"block",children:(!r&&b.length)>0&&Object(T.jsx)(S,{todos:b,selectTodo:function(e){s(e)},selectedTodo:c})}),0===b.length&&o.length>0&&Object(T.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})]})})}),c&&Object(T.jsx)(_,{todo:c,unsetSelectedTodo:function(){s(null)}})]})},A=function(){return Object(T.jsx)(n.a,{store:p,children:Object(T.jsx)(l.a,{children:Object(T.jsx)(q,{})})})};a.a.render(Object(T.jsx)(A,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.85b2f1fb.chunk.js.map