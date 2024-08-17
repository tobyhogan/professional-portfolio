"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Project Name 2024"))}},6942:function(e,t,r){var n=r(758),a=r(9789),l=r(1336);t.A=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:o}=(0,n.useState)(!1),c=(0,n.useRef)(null),i=(0,n.useRef)(null);var s,m;s=c,m=i,(0,n.useEffect)((()=>{function e(e){!s.current||s.current.contains(e.target)||m.current.contains(e.target)||t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[s,m]);const u=n.createElement(n.Fragment,null,n.createElement(a.Link,{to:"/page1",className:"Link2 hover:underline"},"Page 1"),n.createElement(a.Link,{to:"/page2",className:"Link2 hover:underline"},"Page 2"));function d(){"light"==localStorage.getItem("theme")?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),document.body.classList.remove("light"),o(!0)):"dark"==localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.body.classList.add("light"),document.body.classList.remove("dark"),o(!1))}return(0,n.useEffect)((()=>{localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),o(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),o(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),o(!0))}),[]),n.createElement("header",{className:"NavBar flex justify-between fixed w-full"},n.createElement(a.Link,{to:"/",className:"Link1 ml-[5vw] pt-4 pb-4"},"Toby Hogan - Portfolio"),n.createElement("div",{className:"flex flex-row"},n.createElement("div",{className:"FullNav"},n.createElement("ul",{className:"flex mt-7 mr-3"},u)),n.createElement("div",{className:"ToggleNav"},n.createElement("button",{ref:i,onClick:()=>{t((e=>!e))}},n.createElement(l.vIB,{className:"ml-4 mr-8 mt-4 text-black dark:text-white",size:30})),e?n.createElement("div",{ref:c,className:"border-1 border-slate-300 border-2 pt-4 ml-[-53px] pb-7 pl-2 pr-8  absolute rounded-md bg-white dark:bg-slate-700"},n.createElement("ul",{className:"flex flex-col text-start ml-3"},u)):null),n.createElement("div",{className:"ThemeToggler"},r?n.createElement("button",{onClick:d},n.createElement(l.NmZ,{size:28,className:"text-black dark:text-white"})):n.createElement("button",{onClick:d},n.createElement(l.N3N,{size:28,className:"text-black dark:text-white"})))))}},7020:function(e,t,r){r.r(t),r.d(t,{Head:function(){return s},default:function(){return i}});var n=r(758),a=r(9789),l=r(6942),o=r(3020),c=r.p+"static/project-image-ab6d02a39fd4921a85a059660549524f.png";var i=()=>("undefined"!=typeof window?console.log("we are running on the client"):console.log("we are running on the server"),n.createElement("div",{className:"flex flex-col"},n.createElement(l.A,null),n.createElement("main",{className:"pt-20"},n.createElement("img",{src:c,className:"border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"}),n.createElement("h1",{className:"text-center mt-8 text-2xl"},"Welcome to My Portfolio"),n.createElement("h1",{className:"text-center text-xl mt-8"},"Projects:"),n.createElement("ul",{className:"mx-auto w-fit mt-3 mb-[111px] flex flex-col text-center [&>a]:underline"},n.createElement(a.Link,null,"Habitazen Habit Tracker Web App"),n.createElement(a.Link,null,"Pomodoro Timer Web App"),n.createElement(a.Link,null,"Music Track Stem Mixer Web App"))),n.createElement(o.A,null)));const s=()=>n.createElement("title",null,"Toby Hogan - Portfolio")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var n=r(758),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>n.createElement(b,i({attr:m({},e.attr)},t),d(e.child))}function b(e){var t=t=>{var r,{attr:a,size:l,title:s}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4b069ccc5085a2779b2c.js.map