!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=arguments,n=function(n){var o=null!=t[n]?t[n]:{};n%2?r(Object(o),!0).forEach((function(t){f(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))},o=1;o<arguments.length;o++)n(o);return e}function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),u=new j(o||[]);return r(a,"_invoke",{value:E(e,n,u)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function h(){}function v(){}function p(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==t&&n.call(g,a)&&(y=g);var w=p.prototype=h.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function o(r,i,a,u){var c=f(e[r],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){o("next",e,a,u)}),(function(e){o("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return o("throw",e,a,u)}))}u(c.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function E(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=p,r(w,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:v,configurable:!0}),v.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(k.prototype),l(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function a(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,t,n){return(p=v()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&h(o,n.prototype),o}).apply(null,arguments)}function y(e){var t="function"==typeof Map?new Map:void 0;return y=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return p(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,e)},y(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function w(e){var r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(void 0===r?"undefined":t(n)(r))?r:String(r)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var b=void 0!==e&&"[object global]"==={}.toString.call(e);function k(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function E(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function x(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function P(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function T(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(x(r))return"https://vimeo.com/".concat(r);if(P(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var O=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"addEventListener",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"removeEventListener",i="string"==typeof t?[t]:t;return i.forEach((function(t){e[r](t,n)})),{cancel:function(){return i.forEach((function(t){return e[o](t,n)}))}}},_=void 0!==Array.prototype.indexOf,S="undefined"!=typeof window&&void 0!==window.postMessage;if(!(b||_&&S))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var r=Object.prototype.hasOwnProperty,o=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),i=function(e,t,n){o?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(i(this,"_id",u("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,o){if(!a(e)||!r.call(e,"_id"))throw new TypeError(o+" method called on incompatible receiver "+(void 0===e?"undefined":t(n)(e)))}function u(e){return e+"_"+c()+"."+c()}function c(){return Math.random().toString().substring(2)}return i(e.prototype,"delete",(function(e){if(o(this,"delete"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),i(e.prototype,"get",(function(e){if(o(this,"get"),a(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),i(e.prototype,"has",(function(e){if(o(this,"has"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),i(e.prototype,"set",(function(e,t){if(o(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(i(e,this._id,[e,t]),this)})),i(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:M);var C,N,F=(C=function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var r,o,i;i=function(){var e,r,o,i=Object.prototype.toString,a="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function u(e,t){o.add(e,t),r||(r=a(o.drain))}function c(e){var r,o=void 0===e?"undefined":t(n)(e);return null==e||"object"!=o&&"function"!=o||(r=e.then),"function"==typeof r&&r}function l(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=c(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function f(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=c(e))?u((function(){var r=new v(n);try{t.call(e,(function(){f.apply(r,arguments)}),(function(){d.apply(r,arguments)}))}catch(e){d.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&u(l,n))}catch(e){d.call(new v(n),e)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&u(l,t))}function h(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function v(e){this.def=e,this.triggered=!1}function p(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function y(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new p(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&u(l,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){f.call(t,e)}),(function(e){d.call(t,e)}))}catch(e){d.call(t,e)}}o=function(){var e,t,n;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(r,i){n=new o(r,i),t?t.next=n:e=n,t=n,n=void 0},drain:function(){var n=e;for(e=t=r=void 0;n;)n.fn.call(n.self),n=n.next}}}();var m=e({},"constructor",y,!1);return y.prototype=m,e(m,"__NPO__",0,!1),e(y,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(y,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(y,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;h(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(y,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");h(t,e,(function(e,t){n(t)}),r)}))})),y},(o=M)[r="Promise"]=o[r]||i(),e.exports&&(e.exports=o[r])},C(N={exports:{}},N.exports),N.exports),L=new WeakMap;function A(e,t,n){var r=L.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),L.set(e.element,r)}function R(e,t){return(L.get(e.element)||{})[t]||[]}function I(e,t,n){var r=L.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],L.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),L.set(e.element,r),r[t]&&0===r[t].length}function q(e,t){var n=L.get(e);L.set(t,n),L.delete(e)}function V(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function D(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function W(e,t){var n,r=[];if((t=V(t)).event){if("error"===t.event)R(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),I(e,t.data.method,n)}));r=R(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=R(e,t);if(n.length<1)return!1;var r=n.shift();return I(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var z=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return z.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function G(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function B(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!P(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return G(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var H={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(y,e);var t,n,r,a,l,p=(t=y,n=v(),function(){var e,r=d(t);if(n){var o=d(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return g(this,e)});function y(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;return c(this,y),f(m(n=p.call(this)),"logger",void 0),f(m(n),"speedAdjustment",0),f(m(n),"adjustSpeed",function(){var e=u(i().mark((function e(t,r){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.speedAdjustment!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getPlaybackRate();case 4:return e.t0=e.sent,e.t1=n.speedAdjustment,e.t2=e.t0-e.t1,e.t3=r,o=e.t2+e.t3,n.log("New playbackRate:  ".concat(o)),e.next=12,t.setPlaybackRate(o);case 12:n.speedAdjustment=r;case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),n.logger=a,n.init(t,e,o(o({},H),r)),n}return s(y,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:(l=u(i().mark((function e(t,n,r){var o,a,u,c=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitForTOReadyState(t,"open");case 2:if("viewer"!==r.role){e.next=10;break}return e.next=5,this.updatePlayer(t,n,r);case 5:o=O(t,"change",(function(){return c.updatePlayer(t,n,r)})),a=this.maintainPlaybackPosition(t,n,r),this.addEventListener("disconnect",(function(){a.cancel(),o.cancel()})),e.next=14;break;case 10:return e.next=12,this.updateTimingObject(t,n);case 12:u=O(n,["seeked","play","pause","ratechange"],(function(){return c.updateTimingObject(t,n)}),"on","off"),this.addEventListener("disconnect",(function(){return u.cancel()}));case 14:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return l.apply(this,arguments)})},{key:"updateTimingObject",value:(a=u(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,n.getCurrentTime();case 3:return e.t1=e.sent,e.next=6,n.getPaused();case 6:if(!e.sent){e.next=10;break}e.t2=0,e.next=13;break;case 10:return e.next=12,n.getPlaybackRate();case 12:e.t2=e.sent;case 13:e.t3=e.t2,e.t4={position:e.t1,velocity:e.t3},e.t0.update.call(e.t0,e.t4);case 16:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)})},{key:"updatePlayer",value:(r=u(i().mark((function e(t,n,r){var o,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.query(),a=o.position,c=o.velocity,"number"==typeof a&&n.setCurrentTime(a),"number"!=typeof c){e.next=25;break}if(0!==c){e.next=11;break}return e.next=6,n.getPaused();case 6:if(e.t0=e.sent,!1!==e.t0){e.next=9;break}n.pause();case 9:e.next=25;break;case 11:if(!(c>0)){e.next=25;break}return e.next=14,n.getPaused();case 14:if(e.t1=e.sent,!0!==e.t1){e.next=19;break}return e.next=18,n.play().catch(function(){var e=u(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NotAllowedError"!==t.name||!r.autoPlayMuted){e.next=5;break}return e.next=3,n.setMuted(!0);case 3:return e.next=5,n.play().catch((function(e){return console.error("Couldn't play the video from TimingSrcConnector. Error:",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 18:this.updatePlayer(t,n,r);case 19:return e.next=21,n.getPlaybackRate();case 21:if(e.t2=e.sent,e.t3=c,e.t2===e.t3){e.next=25;break}n.setPlaybackRate(c);case 25:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return r.apply(this,arguments)})},{key:"maintainPlaybackPosition",value:function(e,t,n){var r=this,o=n.allowedDrift,a=n.maxAllowedDrift,c=n.minCheckInterval,l=n.maxRateAdjustment,s=n.maxTimeToCatchUp,f=1e3*Math.min(s,Math.max(c,a)),d=function(){var n=u(i().mark((function n(){var u,c,f,d,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=0===e.query().velocity,n.t0){n.next=6;break}return n.next=4,t.getPaused();case 4:n.t1=n.sent,n.t0=!0===n.t1;case 6:if(!n.t0){n.next=8;break}return n.abrupt("return");case 8:return n.t2=e.query().position,n.next=11,t.getCurrentTime();case 11:if(n.t3=n.sent,u=n.t2-n.t3,c=Math.abs(u),r.log("Drift: ".concat(u)),!(c>a)){n.next=22;break}return n.next=18,r.adjustSpeed(t,0);case 18:t.setCurrentTime(e.query().position),r.log("Resync by currentTime"),n.next=29;break;case 22:if(!(c>o)){n.next=29;break}return h=(f=c/s)<(d=l)?(d-f)/2:d,n.next=28,r.adjustSpeed(t,h*Math.sign(u));case 28:r.log("Resync by playbackRate");case 29:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=setInterval((function(){return d()}),f);return{cancel:function(){return clearInterval(h)}}}},{key:"log",value:function(e){var t;null===(t=this.logger)||void 0===t||t.call(this,"TimingSrcConnector: ".concat(e))}},{key:"waitForTOReadyState",value:function(e,t){return new Promise((function(n){!function r(){e.readyState===t?n():e.addEventListener("readystatechange",r,{once:!0})}()}))}}]),y}(y(EventTarget)),Q=new WeakMap,J=new WeakMap,X={},$=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!E(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!P(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(Q.has(t))return Q.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new F((function(e,o){if(n._onMessage=function(t){if(P(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=V(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();W(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=U(t,r);B(j(i),i,t).then((function(e){var r=G(e,t);return n.element=r,n._originalElement=t,q(t,r),Q.set(n.element,n),e})).catch(o)}}));if(J.set(this,i),Q.set(this.element,this),"IFRAME"===this.element.nodeName&&D(this,"ping"),X.isEnabled){var a=function(){return X.exit()};this.fullscreenchangeHandler=function(){X.isFullscreen?A(n,"event:exitFullscreen",a):I(n,"event:exitFullscreen",a),n.ready().then((function(){D(n,"fullscreenchange",X.isFullscreen)}))},X.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t;return s(e,[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new F((function(r,o){return t.ready().then((function(){A(t,e,{resolve:r,reject:o}),D(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new F((function(n,r){return e=k(e,"get"),t.ready().then((function(){A(t,e,{resolve:n,reject:r}),D(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new F((function(r,o){if(e=k(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){A(n,e,{resolve:r,reject:o}),D(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===R(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),A(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");I(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=J.get(this)||new F((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return F.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return X.isEnabled?X.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return X.isEnabled?X.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return X.isEnabled?F.resolve(X.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new F((function(t){if(J.delete(e),Q.delete(e.element),e._originalElement&&(Q.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),X.isEnabled&&X.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return F.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"setColors",value:function(e){if(!Array.isArray(e))return new F((function(e,t){return t(new TypeError("Argument must be an array."))}));var t=new F((function(e){return e(null)})),n=[e[0]?this.set("colorOne",e[0]):t,e[1]?this.set("colorTwo",e[1]):t,e[2]?this.set("colorThree",e[2]):t,e[3]?this.set("colorFour",e[3]):t];return F.all(n)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}},{key:"setTimingSrc",value:(t=u(i().mark((function e(t,n){var r,o=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new TypeError("A Timing Object must be provided.");case 2:return e.next=4,this.ready();case 4:return r=new Y(this,t,n),D(this,"notifyTimingObjectConnect"),r.addEventListener("disconnect",(function(){return D(o,"notifyTimingObjectDisconnect")})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),e}();b||(X=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=U(e);B(j(t),t,e).then((function(t){return G(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(P(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(P(t.origin)){var n=V(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;T(i.src)&&a&&new $(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){if(P(n.origin)){var r=V(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=function(){var e=o[a],r=e.contentWindow===n.source;if(T(e.src)&&r){var i=new $(e);i.getVideoId().then((function(e){var t=new RegExp("[?&]vimeo_t_".concat(e,"=([^&#]*)")).exec(window.location.href);if(t&&t[1]){var n=decodeURI(t[1]);i.setCurrentTime(n)}})).catch(t)}},a=0;a<o.length;a++)i()}};window.addEventListener("message",n)}}());var K=new $(document.querySelector("iframe"));K.on("timeupdate",Z);var Z=function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",JSON.stringify(t))},ee=localStorage.getItem("videoplayer-current-time");K.setCurrentTime(ee).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.103b7e1a.js.map
