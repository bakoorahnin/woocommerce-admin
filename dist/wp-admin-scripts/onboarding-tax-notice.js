this.wc=this.wc||{},this.wc.onboardingTaxNotice=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=522)}({11:function(t,e){t.exports=window.wp.data},2:function(t,e){t.exports=window.wp.i18n},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"g",(function(){return w})),n.d(e,"f",(function(){return y}));var o=n(33),r=n.n(o),c=n(2),i=["wcAdminSettings","preloadSettings"],u="object"===("undefined"==typeof wcSettings?"undefined":r()(wcSettings))?wcSettings:{},s=Object.keys(u).reduce((function(t,e){return i.includes(e)||(t[e]=u[e]),t}),{}),a=s.adminUrl,d=(s.countries,s.currency),l=s.locale,f=s.orderStatuses,p=(s.siteTitle,s.wcAssetUrl);function m(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(c.__)("Mutable settings should be accessed via data store."));var o=s.hasOwnProperty(t)?s[t]:e;return n(o,e)}function b(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(i.includes(t))throw new Error(Object(c.__)("Mutable settings should be mutated via data store."));s[t]=n(e)}function w(t){return(a||"")+t}function y(t){return new Promise((function(e,n){document.querySelector("#".concat(t.handle,"-js"))&&e();var o=document.createElement("script");o.src=t.src,o.id="".concat(t.handle,"-js"),o.async=!0,o.onload=e,o.onerror=n,document.body.appendChild(o)}))}},33:function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},522:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(11),c=n(78),i=n.n(c),u=n(28),s=function(){var t=document.querySelector(".woocommerce-save-button");t.classList.contains("has-tax")||function t(e){return e&&!e.disabled?new Promise((function(t){window.requestAnimationFrame(t)})).then((function(){return t(e)})):Promise.resolve(!0)}(t).then((function(){document.querySelector(".wc_tax_rates .tips")&&(t.classList.add("has-tax"),Object(r.dispatch)("core/notices").createSuccessNotice(Object(o.__)("You've added your first tax rate!","woocommerce-admin"),{id:"WOOCOMMERCE_ONBOARDING_TAX_NOTICE",actions:[{url:Object(u.g)("admin.php?page=wc-admin"),label:Object(o.__)("Continue setup.","woocommerce-admin")}]}))}))};i()((function(){var t=document.querySelector(".woocommerce-save-button");window.htmlSettingsTaxLocalizeScript&&window.htmlSettingsTaxLocalizeScript.rates&&!window.htmlSettingsTaxLocalizeScript.rates.length&&t&&t.addEventListener("click",s)}))},78:function(t,e){t.exports=window.wp.domReady}});