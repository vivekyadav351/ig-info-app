(this["webpackJsonpinno-apps"]=this["webpackJsonpinno-apps"]||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"data":[{"id":1,"image":"img_1.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":2,"image":"img_2.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":3,"image":"img_3.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":4,"image":"img_4.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":5,"image":"img_5.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":6,"image":"img_6.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":7,"image":"img_7.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":8,"image":"img_8.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":9,"image":"img_9.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":10,"image":"img_10.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":11,"image":"img_11.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":12,"image":"img_12.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":13,"image":"img_13.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":14,"image":"img_14.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":15,"image":"img_15.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":16,"image":"img_16.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":17,"image":"img_17.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":18,"image":"img_18.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":19,"image":"img_19.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":20,"image":"img_20.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":21,"image":"img_21.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":22,"image":"img_22.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":23,"image":"img_23.jpg","caption":"French Chateu","artist":"Byron Bay"},{"id":24,"image":"img_24.jpg","caption":"French Chateu","artist":"Byron Bay"}]}')},28:function(e,a,t){e.exports=t(64)},33:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(21),r=t.n(c),i=t(27),o=(t(33),t(4)),m=t(22),u=t.n(m),s=(t(51),function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"https://aperfectspace.com/images/new-home-logo-black.png",alt:"Logo",width:"130px",height:"auto"}))}),p=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,"About"),l.a.createElement("li",null,"How it works"),l.a.createElement("li",null,"Contact"))},g=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,"List Space"),l.a.createElement("li",null,"Find a Space"))},E=function(){return l.a.createElement("ul",{className:"auth"},l.a.createElement("li",null,"Sign Up"),l.a.createElement("li",null,"Log In"))},h=(t(52),function(e){return l.a.createElement("div",{className:"header"},l.a.createElement(s,null),l.a.createElement("div",{className:"headerContent"},l.a.createElement(p,null),l.a.createElement("div",{className:"line"},"|"),l.a.createElement(g,null),l.a.createElement("div",{className:"line"},"|"),l.a.createElement(E,null)))}),d=t(7),y=(t(53),function(){return l.a.createElement("div",{className:"searchHeader"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search"}),l.a.createElement(d.b,{size:"20px",color:"grey"})))}),B=t(23),f=(t(54),function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),c=t[0],r=t[1],i=c?"select ticked":"select tick";return l.a.createElement("div",{className:"imageBox"},l.a.createElement("img",{src:e.images,alt:"photo"}),l.a.createElement("h3",null,e.caption),l.a.createElement("p",null,e.artist),l.a.createElement("div",{className:i,onClick:function(){r(!c)}},l.a.createElement(B.a,{size:"30px",color:"white"})))}),v=(t(55),function(e){var a=Object(n.useState)(15),t=Object(o.a)(a,2),c=t[0],r=t[1];console.log(e.images.length);var i=e.images.slice(0,c).map((function(e,a){return l.a.createElement(f,{images:e.url,caption:e.explanation,artist:e.title,key:a})})),m=c<e.images.length?l.a.createElement("button",{onClick:function(){r(c+9),console.log(c)}},l.a.createElement(d.a,null),"\xa0Load More..."):null;return l.a.createElement("div",{className:"preview"},l.a.createElement("span",null,e.images.length," Results"),l.a.createElement("div",{className:"imagePreview"},i),m)}),j=t(24),C=(t(56),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(s,null),l.a.createElement("div",{className:"privacy"},l.a.createElement("p",null,"\xa9 2018, A Perfect Space"),l.a.createElement("p",null,"Cookies"),l.a.createElement("p",null,"Terms and Privacy")),l.a.createElement("div",{className:"chatBox"},l.a.createElement(j.a,{color:"white",size:"30px"})))}),F=function(){return l.a.createElement("div",{className:"category"},l.a.createElement("h3",null,"Category"),l.a.createElement("p",null,"Home"),l.a.createElement("p",null,"Contact Us"),l.a.createElement("p",null,"Listings"))},_=function(){return l.a.createElement("div",{className:"company"},l.a.createElement("h3",null,"Company"),l.a.createElement("p",null,"About"),l.a.createElement("p",null,"Meet The Team"),l.a.createElement("p",null,"Contribute"))},b=function(){return l.a.createElement("div",{className:"account"},l.a.createElement("h3",null,"Your Account"),l.a.createElement("p",null,"Sign Up"),l.a.createElement("p",null,"Log In"),l.a.createElement("p",null,"Find a Space"),l.a.createElement("p",null,"List a Space"))},N=t(6),w=function(){return l.a.createElement("div",{className:"social"},l.a.createElement("h3",null,"Social"),l.a.createElement("p",null,l.a.createElement(N.a,{size:"20px",color:"rgb(168, 141, 141)"})),l.a.createElement("p",null,l.a.createElement(N.b,{size:"20px",color:"rgb(168, 141, 141)"})),l.a.createElement("p",null,l.a.createElement(N.c,{size:"20px",color:"rgb(168, 141, 141)"})),l.a.createElement("p",null,l.a.createElement(N.d,{size:"20px",color:"rgb(168, 141, 141)"})))},S=(t(57),function(){return l.a.createElement("div",{className:"footer2"},l.a.createElement(F,null),l.a.createElement(b,null),l.a.createElement(_,null),l.a.createElement(w,null))}),x=t(25),k=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)([]),m=Object(o.a)(i,2),s=m[0],p=m[1];return Object(n.useEffect)((function(){r(x.data),u.a.get("https://api.nasa.gov/planetary/apod?api_key=wD5GizpBycdy6hW8nJM8Hhsp5SW0dwJfeAS9N4vJ&count=100").then((function(e){console.log(e.data),p(e.data)})),console.log(s)}),[]),""===c.image?null:l.a.createElement("div",{className:"home"},l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement("main",null,l.a.createElement(v,{images:s}),l.a.createElement(S,null)),l.a.createElement(C,null))};t(58);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=l.a.createElement(i.a,null,l.a.createElement(O,null));r.a.render(l.a.createElement(l.a.StrictMode,null,z),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f40ba7cf.chunk.js.map