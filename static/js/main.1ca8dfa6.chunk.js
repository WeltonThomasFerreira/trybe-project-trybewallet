(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{14:function(e,t){e.exports={inputEmail:function(e){return{type:"user/email",payload:e}},setCurrencies:function(e){return{type:"wallet/currencies",payload:e}},addExpenses:function(e){return{type:"wallet/expenses",payload:e}}}},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(21),i=(a(37),a(9)),u=a(2),s=a(11),p=a(3),d=a(19),m=a(14);function h(e,t){var a=t.length>=6;return/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)&&a}function b(e){var t=Object(n.useState)({email:"",password:""}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=c.email,u=c.password,b=Object(i.b)();function f(e){var t=e.target,a=t.name,n=t.value;l(Object(p.a)(Object(p.a)({},c),{},Object(s.a)({},a,n)))}return r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("input",{type:"email",name:"email","data-testid":"email-input",placeholder:"email@email.com",value:o,onChange:f}),r.a.createElement("input",{type:"password",name:"password","data-testid":"password-input",placeholder:"senha",value:u,onChange:f}),r.a.createElement("button",{disabled:!h(o,u),type:"button",onClick:function(){b(Object(m.inputEmail)(o)),function(e){e.history.push("/carteira")}(e)}},"Entrar")))}var f=a(15),v=a.n(f),j=a(23);function y(e){var t=e.children,a=e.email,n=e.expenses;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("span",{"data-testid":"email-field"},"Email: ".concat(a)),r.a.createElement("span",{"data-testid":"total-field"},"Despesa Total: ".concat(function(e){var t=e.map((function(e){return parseInt(e.value,10)*e.exchangeRates[e.currency].ask})).reduce((function(e,t){return e+t}),0);return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t).replace(",",".")}(n)),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))),t)}function E(e){var t=e.label,a=e.type,n=e.id,c=e.value,l=e.handleChange;return r.a.createElement("label",{htmlFor:n},t,":",r.a.createElement("input",{type:a,name:n,id:n,placeholder:t,value:c,onChange:l}))}function O(e){var t=e.label,a=e.id,n=e.options,c=e.value,l=e.handleChange;return r.a.createElement("label",{htmlFor:a},t,":",r.a.createElement("select",{name:a,id:a,value:c,onChange:l},n.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}function w(e){var t=e.formState,a=t.value,n=t.description,c=t.currency,l=t.method,o=t.tag,i=t.currencies,u=e.handleChange,s=e.children;return r.a.createElement("form",null,r.a.createElement(E,{label:"Valor",type:"number",id:"value",value:a,handleChange:u}),r.a.createElement(E,{label:"Descri\xe7\xe3o",id:"description",value:n,handleChange:u}),r.a.createElement(O,{label:"Moeda",id:"currency",options:i,value:c,handleChange:u}),r.a.createElement(O,{label:"M\xe9todo de pagamento",id:"method",options:["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"],value:l,handleChange:u}),r.a.createElement(O,{label:"Tag",id:"tag",options:["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"],value:o,handleChange:u}),s)}function g(e){return Object.keys(e).filter((function(e){return"USDT"!==e&&"DOGE"!==e}))}function x(){var e=Object(n.useState)({id:0,value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"}),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(i.c)((function(e){return e.user})).email,o=Object(i.c)((function(e){return e.wallet})),u=o.currencies,h=o.expenses,b=Object(i.b)();function f(){return(f=Object(j.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(Object(m.addExpenses)(Object(p.a)(Object(p.a)({},a),{},{exchangeRates:n}))),c((function(e){return Object(p.a)(Object(p.a)({},e),{},{id:e.id+1})}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return t=e.sent,e.t0=g,e.next=6,t.json();case 6:e.t1=e.sent,a=(0,e.t0)(e.t1),b(Object(m.setCurrencies)(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement(y,{email:l,expenses:h},r.a.createElement(w,{formState:Object(p.a)(Object(p.a)({},a),{},{currencies:u}),handleChange:function(e){var t=e.target,n=t.name,r=t.value;c(Object(p.a)(Object(p.a)({},a),{},Object(s.a)({},n,r)))}},r.a.createElement("button",{type:"button",onClick:function(){return f.apply(this,arguments)}},"Adicionar despesas")))}E.defaultProps={type:"text"};var C=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/carteira",component:x}),r.a.createElement(u.a,{exact:!0,path:"/",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(8),D=a(29),S=a(30),R={email:""};var T=a(31),B={currencies:[],expenses:[]};var F=Object(k.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/email":return Object(p.a)(Object(p.a)({},e),{},{email:t.payload});default:return e}},wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"wallet/currencies":return Object(p.a)(Object(p.a)({},e),{},{currencies:t.payload});case"wallet/expenses":return Object(p.a)(Object(p.a)({},e),{},{expenses:[].concat(Object(T.a)(e.expenses),[t.payload])});default:return e}}}),A=Object(k.createStore)(F,Object(D.composeWithDevTools)(Object(k.applyMiddleware)(S.a)));l.a.render(r.a.createElement(o.a,{basename:"/trybe-project-trybewallet"},r.a.createElement(i.a,{store:A},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.1ca8dfa6.chunk.js.map