(window.webpackJsonpEntryPoint=window.webpackJsonpEntryPoint||[]).push([[0],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",function(){return o}),r.d(t,"__assign",function(){return i}),r.d(t,"__rest",function(){return a}),r.d(t,"__decorate",function(){return c}),r.d(t,"__param",function(){return s}),r.d(t,"__metadata",function(){return u}),r.d(t,"__awaiter",function(){return f}),r.d(t,"__generator",function(){return h}),r.d(t,"__exportStar",function(){return l}),r.d(t,"__values",function(){return p}),r.d(t,"__read",function(){return d}),r.d(t,"__spread",function(){return v}),r.d(t,"__await",function(){return b}),r.d(t,"__asyncGenerator",function(){return y}),r.d(t,"__asyncDelegator",function(){return _}),r.d(t,"__asyncValues",function(){return m}),r.d(t,"__makeTemplateObject",function(){return g}),r.d(t,"__importStar",function(){return E}),r.d(t,"__importDefault",function(){return S});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}function c(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function s(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{s(n.next(e))}catch(e){i(e)}}function c(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,c)}s((n=n.apply(e,t||[])).next())})}function h(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function l(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){i.push([e,t,r,n])>1||c(e,t)})})}function c(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(s,u):f(i[0][2],r)}catch(e){f(i[0][3],e)}var r}function s(e){c("next",e)}function u(e){c("throw",e)}function f(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function m(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,o,(t=e[r](t)).done,t.value)})}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}},146:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(120),i=r(147),a=((n={})["no-app"]="No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",n["bad-app-name"]="Illegal App name: '{$name}",n["duplicate-app"]="Firebase App named '{$name}' already exists",n["app-deleted"]="Firebase App named '{$name}' already deleted",n["duplicate-service"]="Firebase service named '{$name}' already registered",n["invalid-app-argument"]="firebase.{$name}() takes either no argument or a Firebase App instance.",n),c=new i.ErrorFactory("app","Firebase",a);function s(e,t){throw c.create(e,t)}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u="[DEFAULT]",f=[],h=function(){function e(e,t,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){f.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){f=f.filter(function(t){return t!==e})}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise(function(t){e.checkDestroyed_(),t()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var t=[],r=0,n=Object.keys(e.services_);r<n.length;r++)for(var o=n[r],i=0,a=Object.keys(e.services_[o]);i<a.length;i++){var c=a[i];t.push(e.services_[o][c])}return Promise.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})},e.prototype._getService=function(e,t){if(void 0===t&&(t=u),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var r=t!==u?t:void 0,n=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),r);this.services_[e][t]=n}return this.services_[e][t]},e.prototype.extendApp=function(e){var t=this;i.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(f.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),f=[])},e.prototype.checkDestroyed_=function(){this.isDeleted_&&s("app-deleted",{name:this.name_})},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}h.prototype.name&&h.prototype.options||h.prototype.delete||console.log("dc");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p=!1;try{p="[object process]"===Object.prototype.toString.call(e.process)}catch(e){}if(p&&console.warn('\nWarning: This is a browser-targeted Firebase bundle but it appears it is being\nrun in a Node environment.  If running in a Node environment, make sure you\nare using the bundle specified by the "main" field in package.json.\n\nIf you are using Webpack, you can specify "main" as the first item in\n"resolve.mainFields":\nhttps://webpack.js.org/configuration/resolve/#resolvemainfields\n\nIf using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\nto false and "main" to true:\nhttps://github.com/rollup/rollup-plugin-node-resolve\n'),self&&"firebase"in self){console.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var d=self.firebase.SDK_VERSION;d&&d.indexOf("LITE")>=0&&console.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var v=
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){var t=function(e){var t={},r={},n={},o={__esModule:!0,initializeApp:function(r,n){if(void 0===n&&(n={}),"object"!=typeof n||null===n){var i=n;n={name:i}}var a=n;void 0===a.name&&(a.name=u);var c=a.name;"string"==typeof c&&c||s("bad-app-name",{name:String(c)}),l(t,c)&&s("duplicate-app",{name:c});var h=new e(r,a,o);return t[c]=h,f(h,"create"),h},app:a,apps:null,Promise:Promise,SDK_VERSION:"5.11.0",INTERNAL:{registerService:function(t,u,f,h,l){function p(e){return void 0===e&&(e=a()),"function"!=typeof e[t]&&s("invalid-app-argument",{name:t}),e[t]()}return void 0===l&&(l=!1),r[t]&&s("duplicate-service",{name:t}),r[t]=u,h&&(n[t]=h,c().forEach(function(e){h("create",e)})),void 0!==f&&i.deepExtend(p,f),o[t]=p,e.prototype[t]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return this._getService.bind(this,t).apply(this,l?e:[])},p},removeApp:function(e){f(t[e],"delete"),delete t[e]},factories:r,useAsService:h}};function a(e){return l(t,e=e||u)||s("no-app",{name:e}),t[e]}function c(){return Object.keys(t).map(function(e){return t[e]})}function f(e,t){for(var o=0,i=Object.keys(r);o<i.length;o++){var a=h(e,i[o]);if(null===a)return;n[a]&&n[a](t,e)}}function h(e,t){if("serverAuth"===t)return null;var r=t;return e.options,r}return i.patchProperty(o,"default",o),Object.defineProperty(o,"apps",{get:c}),i.patchProperty(a,"App",e),o}(h);return t.INTERNAL=o.__assign({},t.INTERNAL,{createFirebaseNamespace:e,extendNamespace:function(e){i.deepExtend(t,e)},createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),t}();t.default=v,t.firebase=v}).call(this,r(15))},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(120),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw a(t)},a=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,c=a?e[o+1]:0,s=o+2<e.length,u=s?e[o+2]:0,f=i>>2,h=(3&i)<<4|c>>4,l=(15&c)<<2|u>>6,p=63&u;s||(p=64,a||(l=64)),n.push(r[f],r[h],r[l],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=e[r++]))<<12|(63&(c=e[r++]))<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{i=e[r++];var c=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&c)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length?r[e.charAt(o)]:0,c=++o<e.length?r[e.charAt(o)]:64,s=++o<e.length?r[e.charAt(o)]:64;if(++o,null==i||null==a||null==c||null==s)throw Error();var u=i<<2|a>>4;if(n.push(u),64!=c){var f=a<<4&240|c>>2;if(n.push(f),64!=s){var h=c<<6&192|s;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&(e[r]=f(e[r],t[r]));return e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h=function(){function e(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch(function(){}),1===e.length?e(r):e(r,n))}},e}(),l=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""},p="FirebaseError",d=function(e){function t(r,n){var o=e.call(this,n)||this;return o.code=r,o.name=p,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,v.prototype.create),o}return n.__extends(t,e),t}(Error),v=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e,t){void 0===t&&(t={});for(var r=this.service+"/"+e,n=this.errors[e],o=n?function(e,t){return e.replace(b,function(e,r){var n=t[r];return null!=n?n.toString():"<"+r+"?>"})}(n,t):"Error",i=this.serviceName+": "+o+" ("+r+").",a=new d(r,i),c=0,s=Object.keys(t);c<s.length;c++){var u=s[c];"_"!==u.slice(-1)&&(u in a&&console.warn('Overwriting FirebaseError base field "'+u+'" can cause unexpected behavior.'),a[u]=t[u])}return a},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return JSON.parse(e)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _=function(e){var t={},r={},n={},o="";try{var i=e.split(".");t=y(u(i[0])||""),r=y(u(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:o}},m=function(e,t){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])},g=function(e,t){return m(t,function(t,r){e[t]=r}),e},E=function(e,t,r){for(var n in e)if(t.call(r,e[n],n,e))return n},S=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,c=this.chain_[0],s=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^s&(u^f),a=1518500249):(i=s^u^f,a=1859775393):n<60?(i=s&u|f&(s|u),a=2400959708):(i=s^u^f,a=3395469782);o=(c<<5|c>>>27)+i+h+a+r[n]&4294967295;h=f,f=u,u=4294967295&(s<<30|s>>>2),s=c,c=o}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<t;){if(0==i)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++n,++i==this.blockSize){this.compress_(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++n,++i==this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e},e}();var w=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=O),void 0===n.error&&(n.error=O),void 0===n.complete&&(n.complete=O);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}();function O(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t.CONSTANTS=o,t.Deferred=h,t.ErrorFactory=v,t.FirebaseError=d,t.Sha1=S,t.assert=i,t.assertionError=a,t.async=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then(function(){e.apply(void 0,r)}).catch(function(e){t&&t(e)})}},t.base64=s,t.base64Decode=u,t.base64Encode=function(e){var t=c(e);return s.encodeByteArray(t,!0)},t.clone=function(e){return g({},e)},t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.createSubscribe=function(e,t){var r=new w(e,t);return r.subscribe.bind(r)},t.decode=_,t.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return f(void 0,e)},t.deepExtend=f,t.errorPrefix=A,t.every=function(e,t){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&!t(r,e[r]))return!1;return!0},t.extend=g,t.findKey=E,t.findValue=function(e,t,r){var n=E(e,t,r);return n&&e[n]},t.forEach=m,t.getAnyKey=function(e){for(var t in e)return t},t.getCount=function(e){var t=0;for(var r in e)t++;return t},t.getUA=l,t.getValues=function(e){var t=[],r=0;for(var n in e)t[r++]=e[n];return t},t.isAdmin=function(e){var t=_(e).claims;return"object"==typeof t&&!0===t.admin},t.isEmpty=function(e){for(var t in e)return!1;return!0},t.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())},t.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},t.isNonNullObject=function(e){return"object"==typeof e&&null!==e},t.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},t.isValidFormat=function(e){var t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},t.isValidTimestamp=function(e){var t,r,n=_(e).claims,o=Math.floor((new Date).getTime()/1e3);return"object"==typeof n&&(n.hasOwnProperty("nbf")?t=n.nbf:n.hasOwnProperty("iat")&&(t=n.iat),r=n.hasOwnProperty("exp")?n.exp:t+86400),o&&t&&r&&o>=t&&o<=r},t.issuedAtTime=function(e){var t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},t.jsonEval=y,t.map=function(e,t,r){var n={};for(var o in e)n[o]=t.call(r,e[o],o,e);return n},t.patchProperty=function(e,t,r){e[t]=r},t.querystring=function(e){var t=[];return m(e,function(e,r){Array.isArray(r)?r.forEach(function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}),t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach(function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}}),t},t.safeGet=function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},t.stringToByteArray=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;i(++n<e.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(e.charCodeAt(n)-56320)}o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):o<65536?(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},t.stringify=function(e){return JSON.stringify(e)},t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},t.validateCallback=function(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(A(e,t,n)+"must be a valid function.")},t.validateContextObject=function(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(A(e,t,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,t.validateNamespace=function(e,t,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(A(e,t,n)+"must be a valid firebase namespace.")}}}]);