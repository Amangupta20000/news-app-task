(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{83:function(e,s,t){},84:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),l=t(30),n=t.n(l),m=t(8),r=t(2),i=(t(36),t(37),t(0));var o=function(){var e=Object(r.f)();return Object(i.jsx)("div",{className:"pageNo",children:Object(i.jsx)("nav",{"aria-label":"Page navigation example",children:Object(i.jsxs)("ul",{className:"pagination",children:[Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)(m.b,{activeClassName:"menu_active",exact:!0,className:"page-link",to:"/",children:"1"})}),Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)(m.b,{activeClassName:"menu_active",exact:!0,className:"page-link",to:"/page2",children:"2"})}),Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)(m.b,{activeClassName:"menu_active",exact:!0,className:"page-link",to:"/page3",children:"3"})}),Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)("button",{className:"page-link",onClick:function(){"/"===e.location.pathname?e.push("/page2"):"/page2"===e.location.pathname&&e.push("/page3")},children:" >> "})})]})})})},d=t.p+"static/media/reader.8d7da478.jpg",b=t(18),u=t(9),g=t(11),j=t.n(g);var y=function(e){return Object(i.jsxs)("div",{className:"card m-1",children:[Object(i.jsx)("button",{onClick:function(){return e.onSelect(e.id)},className:"btn cross_btn",children:"X"}),Object(i.jsxs)("div",{className:"card-body mt-1 ",onClick:function(){return e.click(e.id)},children:[Object(i.jsxs)("h5",{className:"card-title",children:[Object(i.jsxs)("strong",{children:[e.title," "]})," "]}),Object(i.jsxs)("p",{className:"card-text",children:[e.summary,"..."]}),Object(i.jsx)("p",{className:"card-text",children:Object(i.jsx)("strong",{children:e.published})})]}),Object(i.jsx)("img",{src:e.img,onClick:function(){return e.click(e.id)},className:"card-img-top img-fluid",alt:"..."})]})};var N,h=function(e){return Object(i.jsxs)("div",{className:"myIframe",children:[Object(i.jsx)("button",{className:"btn frameButton btn-danger",onClick:function(){return e.click()},children:"X"}),Object(i.jsx)("iframe",{title:"modal",className:"iframe",src:e.link,frameBorder:"1"})]})};var p,x=function(e){var s=Object(a.useState)(""),t=Object(u.a)(s,2),c=t[0],l=t[1],n=Object(a.useState)([]),m=Object(u.a)(n,2),r=m[0],o=m[1];Object(a.useEffect)((function(){j.a.get("https://api.first.org/data/v1/news",{mode:"no-cors",redirect:"follow"}).then((function(e){var s=e.data.data.slice(3,9);o(s)})).catch((function(e){console.log(e)}))}),[]);var b=function(e){o((function(s){return s.filter((function(s,t){return t!==e}))}))},g=function(e){console.log(r[e].link),l(r[e].link),document.getElementsByClassName("myIframe")[0].style.display="block",document.getElementsByClassName("myIframe")[0].classList.remove("myIframe2")};return N=r,Object(i.jsxs)("div",{className:"myPages ",children:[Object(i.jsx)(h,{link:c,click:function(){document.getElementsByClassName("myIframe")[0].classList.add("myIframe2"),console.log("ok"),l("")}}),Object(i.jsx)("div",{className:"row ",children:r.map((function(e,s){return Object(i.jsx)(y,{click:g,id:s,summary:e.summary.substring(0,85),title:e.title,published:e.published,onSelect:b,img:d,link:e.link},e.id)}))})]})},f=t.p+"static/media/page2img.86c548b8.jpg";var O,v=function(){var e=Object(a.useState)(""),s=Object(u.a)(e,2),t=s[0],c=s[1],l=Object(a.useState)([]),n=Object(u.a)(l,2),m=n[0],r=n[1];Object(a.useEffect)((function(){j.a.get("https://api.first.org/data/v1/news",{mode:"no-cors",redirect:"follow"}).then((function(e){var s=e.data.data.slice(20,26);r(s)})).catch((function(e){console.log(e)}))}),[]);var o=function(e){r((function(s){return s.filter((function(s,t){return t!==e}))}))},d=function(e){console.log(m[e].link),c(m[e].link),document.getElementsByClassName("myIframe")[0].style.display="block",document.getElementsByClassName("myIframe")[0].classList.remove("myIframe2")};return p=m,Object(i.jsxs)("div",{className:"myPages ",children:[Object(i.jsx)(h,{link:t,click:function(){document.getElementsByClassName("myIframe")[0].classList.add("myIframe2"),console.log("ok"),c("")}}),Object(i.jsx)("div",{className:"row ",children:m.map((function(e,s){return Object(i.jsx)(y,{click:d,img:f,id:s,summary:e.summary.substring(0,85),title:e.title,published:e.published,onSelect:o,link:e.link},e.id)}))})]})},C=t.p+"static/media/page3img.29b52d44.jpg";var E=function(){var e=Object(a.useState)(""),s=Object(u.a)(e,2),t=s[0],c=s[1],l=Object(a.useState)([]),n=Object(u.a)(l,2),m=n[0],r=n[1];Object(a.useEffect)((function(){j.a.get("https://api.first.org/data/v1/news",{mode:"no-cors",redirect:"follow"}).then((function(e){var s=e.data.data.slice(20,26);r(s)})).catch((function(e){console.log(e)}))}),[]);var o=function(e){r((function(s){return s.filter((function(s,t){return t!==e}))}))},d=function(e){console.log(m[e].link),c(m[e].link),document.getElementsByClassName("myIframe")[0].style.display="block",document.getElementsByClassName("myIframe")[0].classList.remove("myIframe2")};return O=m,Object(i.jsxs)("div",{className:"myPages ",children:[Object(i.jsx)(h,{link:t,click:function(){document.getElementsByClassName("myIframe")[0].classList.add("myIframe2"),console.log("ok"),c("")}}),Object(i.jsx)("div",{className:"row ",children:m.map((function(e,s){return Object(i.jsx)(y,{click:d,id:s,img:C,summary:e.summary.substring(0,85),title:e.title,published:e.published,onSelect:o,link:e.link},e.id)}))})]})},B=function(){var e=Object(r.f)();console.log(e.location.pathname);return Object(i.jsxs)("div",{className:"sidebar container ",children:[Object(i.jsxs)("div",{className:"container reader_div bg-light ",children:[Object(i.jsx)("img",{className:"logo",src:d,alt:"img"}),Object(i.jsxs)("label",{className:"logo_text",children:[" ",Object(i.jsx)("strong",{children:" Hi Reader,"})," ",Object(i.jsx)("br",{})," Here's your News! "]})]}),Object(i.jsxs)("div",{className:"container reader_div bg-light",children:[Object(i.jsx)("h3",{className:"logo_text2 text-center",children:"View Toggle "}),Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("button",{activeclassname:"toggle_btn",type:"button",className:"button_sidebar btn",onClick:function(){if("/"===e.location.pathname){for(var s=0;s<N.length;s++)document.getElementsByClassName("card")[s].classList.remove("cards"),document.getElementsByClassName("card-body")[s].style.order="1",document.getElementsByClassName("card-img-top")[s].style.order="2",document.getElementsByClassName("card-img-top")[s].classList.remove("logo2"),document.getElementsByClassName("card-body")[s].classList.remove("logo_text"),document.getElementsByClassName("card")[s].style.display="block",document.getElementsByClassName("card-img-top")[s].classList.add("img-fluid"),document.getElementsByClassName("cross_btn")[s].classList.remove("cross_btn2");document.getElementsByClassName("card")[0].style.display="block"}else if("/page2"===e.location.pathname){for(var t=0;t<p.length;t++)document.getElementsByClassName("card")[t].classList.remove("cards"),document.getElementsByClassName("card-body")[t].style.order="1",document.getElementsByClassName("card-img-top")[t].style.order="2",document.getElementsByClassName("card-img-top")[t].classList.remove("logo2"),document.getElementsByClassName("card-body")[t].classList.remove("logo_text"),document.getElementsByClassName("card")[t].style.display="block",document.getElementsByClassName("card-img-top")[t].classList.add("img-fluid"),document.getElementsByClassName("cross_btn")[t].classList.remove("cross_btn2");document.getElementsByClassName("card")[0].style.display="block"}else{for(var a=0;a<O.length;a++)document.getElementsByClassName("card")[a].classList.remove("cards"),document.getElementsByClassName("card-body")[a].style.order="1",document.getElementsByClassName("card-img-top")[a].style.order="2",document.getElementsByClassName("card-img-top")[a].classList.remove("logo2"),document.getElementsByClassName("card-body")[a].classList.remove("logo_text"),document.getElementsByClassName("card")[a].style.display="block",document.getElementsByClassName("card-img-top")[a].classList.add("img-fluid"),document.getElementsByClassName("cross_btn")[a].classList.remove("cross_btn2");document.getElementsByClassName("card")[0].style.display="block"}},children:Object(i.jsx)(b.a,{})}),Object(i.jsx)("button",{activeclassname:"toggle_btn",type:"button",className:"button_sidebar btn",onClick:function(){if("/"===e.location.pathname){for(var s=0;s<N.length;s++)document.getElementsByClassName("card")[s].classList.add("cards"),document.getElementsByClassName("card-body")[s].style.order="2",document.getElementsByClassName("card-img-top")[s].style.order="1",document.getElementsByClassName("card-img-top")[s].classList.add("logo2"),document.getElementsByClassName("card-img-top")[s].classList.remove("img-fluid"),document.getElementsByClassName("card-body")[s].classList.add("logo_text"),document.getElementsByClassName("card")[s].style.display="grid",document.getElementsByClassName("card")[s].style.gridTemplateColumns="8rem auto",document.getElementsByClassName("cross_btn")[s].classList.add("cross_btn2");document.getElementsByClassName("card")[0].style.display="grid",document.getElementsByClassName("card")[0].style.gridTemplateColumns="8rem auto"}else if("/page2"===e.location.pathname){for(var t=0;t<p.length;t++)document.getElementsByClassName("card")[t].classList.add("cards"),document.getElementsByClassName("card-body")[t].style.order="2",document.getElementsByClassName("card-img-top")[t].style.order="1",document.getElementsByClassName("card-img-top")[t].classList.add("logo2"),document.getElementsByClassName("card-img-top")[t].classList.remove("img-fluid"),document.getElementsByClassName("card-body")[t].classList.add("logo_text"),document.getElementsByClassName("card")[t].style.display="grid",document.getElementsByClassName("card")[t].style.gridTemplateColumns="8rem auto",document.getElementsByClassName("cross_btn")[t].classList.add("cross_btn2");document.getElementsByClassName("card")[0].style.display="grid",document.getElementsByClassName("card")[0].style.gridTemplateColumns="8rem auto"}else{for(var a=0;a<O.length;a++)document.getElementsByClassName("card")[a].classList.add("cards"),document.getElementsByClassName("card-body")[a].style.order="2",document.getElementsByClassName("card-img-top")[a].style.order="1",document.getElementsByClassName("card-img-top")[a].classList.add("logo2"),document.getElementsByClassName("card-img-top")[a].classList.remove("img-fluid"),document.getElementsByClassName("card-body")[a].classList.add("logo_text"),document.getElementsByClassName("card")[a].style.display="grid",document.getElementsByClassName("card")[a].style.gridTemplateColumns="8rem auto",document.getElementsByClassName("cross_btn")[a].classList.add("cross_btn2");document.getElementsByClassName("card")[0].style.display="grid",document.getElementsByClassName("card")[0].style.gridTemplateColumns="8rem auto"}},children:Object(i.jsx)(b.b,{})})]})]}),Object(i.jsxs)("div",{className:"container reader_div bg-light",children:[Object(i.jsx)("h3",{className:"logo_text2 text-center",children:"Have a Feedback ? "}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(m.b,{type:"button",className:"feedback_btn btn",to:"/",onClick:function(){document.getElementsByClassName("sidebar2")[0].style.zIndex="3",document.getElementsByClassName("sidebar2")[0].classList.add("animationFadeIn"),document.getElementsByClassName("sidebar")[0].classList.remove("animationFadeIn")},children:Object(i.jsx)("strong",{children:" We are Listening!"})})})]})]})},k=function(){return Object(i.jsx)("div",{className:"sidebar2 container ",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-lg-4",children:[Object(i.jsxs)("div",{className:"container reader_div bg-light ",children:[Object(i.jsx)("img",{className:"logo",src:d,alt:"img"}),Object(i.jsxs)("label",{className:"logo_text",children:[" ",Object(i.jsx)("strong",{children:" Hi Reader,"})," ",Object(i.jsx)("br",{})," Here's your News! "]})]}),Object(i.jsxs)("div",{className:"container reader_div bg-light",children:[Object(i.jsx)("h3",{className:"logo_text2 text-center",children:"Have a Feedback ? "}),Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)(m.b,{type:"button",onClick:function(){document.getElementsByClassName("sidebar2")[0].style.zIndex="-1",document.getElementsByClassName("sidebar2")[0].classList.remove("animationFadeIn"),document.getElementsByClassName("sidebar")[0].classList.add("animationFadeIn")},className:"feedback_btn btn btn-danger",to:"/",children:Object(i.jsx)("strong",{children:" We are Listening!"})})})]})]}),Object(i.jsxs)("div",{className:"col-lg-6",children:[Object(i.jsx)("h3",{className:"mt-5 ",children:"Thank you so much for taking the time!"}),Object(i.jsx)("h5",{children:"Please provide the below details!"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"my-4 pt-4 ",children:[Object(i.jsx)("label",{htmlFor:"FName",className:"form-label",children:"First Name :"}),Object(i.jsx)("input",{type:"text",placeholder:"John",className:"form-control",id:"FName","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{htmlFor:"LName",className:"form-label",children:"Last Name :"}),Object(i.jsx)("input",{type:"text",placeholder:"Doe",className:"form-control",id:"LName","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{htmlFor:"Address",className:"form-label",children:"Address : "}),Object(i.jsx)("textarea",{placeholder:"Enter Your Full Postal Address",className:"form-control",id:"Address",rows:"4",cols:"50",name:"comment",form:"usrform"})]}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{htmlFor:"Country",className:"form-label",children:"Country :"}),Object(i.jsx)("input",{placeholder:"India",type:"search",className:"form-control",id:"Country","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email ID :"}),Object(i.jsx)("input",{type:"email",required:!0,className:"form-control",placeholder:"example@sample.com",id:"Email","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-2",children:[Object(i.jsx)("p",{className:"form-label",children:"Phone Number :"}),Object(i.jsx)("input",{type:"number","aria-label":"First name",className:"form-control ",placeholder:"+91 123456789"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-lg btn-success mt-3",children:"Submit Feedback"})]})]})]})})};var L=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(k,{}),Object(i.jsx)(B,{}),Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{exact:!0,path:"/",component:x}),Object(i.jsx)(r.a,{exact:!0,path:"/page2",component:v}),Object(i.jsx)(r.a,{exact:!0,path:"/page3",component:E})]}),Object(i.jsx)(o,{})]})};t(83);n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m.a,{children:Object(i.jsx)(L,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.131e36f9.chunk.js.map