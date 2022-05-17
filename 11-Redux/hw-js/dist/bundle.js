(()=>{var r={857:(r,e,t)=>{"use strict";function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}t.r(e),t.d(e,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>O,bindActionCreators:()=>v,combineReducers:()=>s,compose:()=>b,createStore:()=>l,legacy_createStore:()=>y});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!=typeof r||null===r)return!1;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function l(r,e,t){var n;if("function"==typeof e&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof e&&void 0===t&&(t=e,e=void 0),void 0!==t){if("function"!=typeof t)throw new Error(i(1));return t(l)(r,e)}if("function"!=typeof r)throw new Error(i(2));var o=r,c=e,f=[],y=f,s=!1;function d(){y===f&&(y=f.slice())}function v(){if(s)throw new Error(i(3));return c}function b(r){if("function"!=typeof r)throw new Error(i(4));if(s)throw new Error(i(5));var e=!0;return d(),y.push(r),function(){if(e){if(s)throw new Error(i(6));e=!1,d();var t=y.indexOf(r);y.splice(t,1),f=null}}}function O(r){if(!p(r))throw new Error(i(7));if(void 0===r.type)throw new Error(i(8));if(s)throw new Error(i(9));try{s=!0,c=o(c,r)}finally{s=!1}for(var e=f=y,t=0;t<e.length;t++)(0,e[t])();return r}function E(r){if("function"!=typeof r)throw new Error(i(10));o=r,O({type:a.REPLACE})}function h(){var r,e=b;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(i(11));function t(){r.next&&r.next(v())}return t(),{unsubscribe:e(t)}}})[u]=function(){return this},r}return O({type:a.INIT}),(n={dispatch:O,subscribe:b,getState:v,replaceReducer:E})[u]=h,n}var y=l;function s(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var o=e[n];"function"==typeof r[o]&&(t[o]=r[o])}var c,u=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(e){var t=r[e];if(void 0===t(void 0,{type:a.INIT}))throw new Error(i(12));if(void 0===t(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(i(13))}))}(t)}catch(r){c=r}return function(r,e){if(void 0===r&&(r={}),c)throw c;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=t[a],l=r[a],y=p(l,e);if(void 0===y)throw e&&e.type,new Error(i(14));o[a]=y,n=n||y!==l}return(n=n||u.length!==Object.keys(r).length)?o:r}}function d(r,e){return function(){return e(r.apply(this,arguments))}}function v(r,e){if("function"==typeof r)return d(r,e);if("object"!=typeof r||null===r)throw new Error(i(16));var t={};for(var n in r){var o=r[n];"function"==typeof o&&(t[n]=d(o,e))}return t}function b(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return 0===e.length?function(r){return r}:1===e.length?e[0]:e.reduce((function(r,e){return function(){return r(e.apply(void 0,arguments))}}))}function O(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return function(){var t=r.apply(void 0,arguments),n=function(){throw new Error(i(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(r){return r(o)}));return n=b.apply(void 0,u)(t.dispatch),c(c({},t),{},{dispatch:n})}}}},883:r=>{r.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO",INCIMPAR:"INCIMPAR",INCASYNC:"INCASYNC"}},518:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o,INCIMPAR:c,INCASYNC:i}=t(883);r.exports={incremento:()=>({type:n}),decremento:()=>({type:o}),incimpar:()=>({type:c}),incasync:()=>({type:i})}},616:(r,e,t)=>{const{INCREMENTO:n,DECREMENTO:o,INCIMPAR:c,INCASYNC:i}=t(883),u={contador:0};r.exports=function(r=u,e){switch(e.type){case n:return{contador:r.contador+1};case o:return{contador:r.contador-1};case c:return r.contador%2!=0?{contador:r.contador+1}:{contador:r.contador};case i:return{contador:r.contador+1};default:return r}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return r[n](c,c.exports,t),c.exports}t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{const{createStore:r}=t(857),e=t(616),{incremento:n,decremento:o,incimpar:c,incasync:i}=t(518);var u=r(e),f=document.querySelector("#valor");function a(){let r=u.getState().contador;f.innerHTML=r,console.log(c())}a(),u.subscribe(a);let p=document.querySelector("#incremento"),l=document.querySelector("#decremento"),y=document.querySelector("#incrementoImpar"),s=document.querySelector("#incrementoAsync");p.onclick=()=>u.dispatch(n()),l.onclick=()=>u.dispatch(o()),y.onclick=()=>u.dispatch(c()),s.onclick=()=>{setTimeout((()=>{u.dispatch(i())}),1e3)}})()})();