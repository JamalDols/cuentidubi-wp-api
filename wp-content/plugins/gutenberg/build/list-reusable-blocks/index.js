window.wp=window.wp||{},window.wp.listReusableBlocks=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=533)}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.wp.i18n},14:function(t,e){t.exports=window.wp.compose},16:function(t,e){t.exports=window.regeneratorRuntime},19:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},2:function(t,e){t.exports=window.lodash},22:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},27:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},28:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},3:function(t,e){t.exports=window.wp.components},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(57);function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},32:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(43),o=n(19);function i(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(o.a)(t):e}},43:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},46:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}n.d(e,"a",(function(){return o}))},47:function(t,e){t.exports=window.wp.apiFetch},533:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),i=n(16),c=n.n(i),a=n(46),u=n(2),s=n(47),l=n.n(s);function f(t,e,n){var r=new window.Blob([e],{type:n});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(r,t);else{var o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}function p(t){var e=new window.FileReader;return new Promise((function(n){e.onload=function(){n(e.result)},e.readAsText(t)}))}function b(){return(b=Object(a.a)(c.a.mark((function t(e){var n,r,o,i,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()({path:"/wp/v2/types/wp_block"});case 2:return n=t.sent,t.next=5,l()({path:"/wp/v2/".concat(n.rest_base,"/").concat(e,"?context=edit")});case 5:r=t.sent,o=r.title.raw,i=r.content.raw,a=JSON.stringify({__file:"wp_block",title:o,content:i},null,2),f(Object(u.kebabCase)(o)+".json",a,"application/json");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=n(3),m=n(27),w=n(28),v=n(19),y=n(30),O=n(32),h=n(22),j=n(14);function _(){return(_=Object(a.a)(c.a.mark((function t(e){var n,r,o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:n=t.sent,t.prev=3,r=JSON.parse(n),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(3),new Error("Invalid JSON file");case 10:if("wp_block"===r.__file&&r.title&&r.content&&Object(u.isString)(r.title)&&Object(u.isString)(r.content)){t.next=12;break}throw new Error("Invalid Reusable Block JSON file");case 12:return t.next=14,l()({path:"/wp/v2/types/wp_block"});case 14:return o=t.sent,t.next=17,l()({path:"/wp/v2/".concat(o.rest_base),data:{title:r.title,content:r.content,status:"publish"},method:"POST"});case 17:return i=t.sent,t.abrupt("return",i);case 19:case"end":return t.stop()}}),t,null,[[3,7]])})))).apply(this,arguments)}var S=function(t){Object(y.a)(c,t);var e,n,i=(e=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=Object(h.a)(e);if(n){var o=Object(h.a)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return Object(O.a)(this,t)});function c(){var t;return Object(m.a)(this,c),(t=i.apply(this,arguments)).state={isLoading:!1,error:null,file:null},t.isStillMounted=!0,t.onChangeFile=t.onChangeFile.bind(Object(v.a)(t)),t.onSubmit=t.onSubmit.bind(Object(v.a)(t)),t}return Object(w.a)(c,[{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"onChangeFile",value:function(t){this.setState({file:t.target.files[0],error:null})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state.file,r=this.props.onUpload;n&&(this.setState({isLoading:!0}),function(_x){return _.apply(this,arguments)}(n).then((function(t){e.isStillMounted&&(e.setState({isLoading:!1}),r(t))})).catch((function(t){if(e.isStillMounted){var n;switch(t.message){case"Invalid JSON file":n=Object(o.__)("Invalid JSON file");break;case"Invalid Reusable Block JSON file":n=Object(o.__)("Invalid Reusable Block JSON file");break;default:n=Object(o.__)("Unknown error")}e.setState({isLoading:!1,error:n})}})))}},{key:"onDismissError",value:function(){this.setState({error:null})}},{key:"render",value:function(){var t=this,e=this.props.instanceId,n=this.state,i=n.file,c=n.isLoading,a=n.error,u="list-reusable-blocks-import-form-"+e;return Object(r.createElement)("form",{className:"list-reusable-blocks-import-form",onSubmit:this.onSubmit},a&&Object(r.createElement)(d.Notice,{status:"error",onRemove:function(){return t.onDismissError()}},a),Object(r.createElement)("label",{htmlFor:u,className:"list-reusable-blocks-import-form__label"},Object(o.__)("File")),Object(r.createElement)("input",{id:u,type:"file",onChange:this.onChangeFile}),Object(r.createElement)(d.Button,{type:"submit",isBusy:c,disabled:!i||c,isSecondary:!0,className:"list-reusable-blocks-import-form__button"},Object(o._x)("Import","button label")))}}]),c}(r.Component),g=Object(j.withInstanceId)(S),k=function(t){var e=t.onUpload;return Object(r.createElement)(d.Dropdown,{position:"bottom right",contentClassName:"list-reusable-blocks-import-dropdown__content",renderToggle:function(t){var e=t.isOpen,n=t.onToggle;return Object(r.createElement)(d.Button,{"aria-expanded":e,onClick:n,isPrimary:!0},Object(o.__)("Import from JSON"))},renderContent:function(t){var n=t.onClose;return Object(r.createElement)(g,{onUpload:Object(u.flow)(n,e)})}})};document.body.addEventListener("click",(function(t){t.target.classList.contains("wp-list-reusable-blocks__export")&&(t.preventDefault(),function(_x){b.apply(this,arguments)}(t.target.dataset.id))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".page-title-action");if(t){var e=document.createElement("div");e.className="list-reusable-blocks__container",t.parentNode.insertBefore(e,t),Object(r.render)(Object(r.createElement)(k,{onUpload:function(){var t=document.createElement("div");t.className="notice notice-success is-dismissible",t.innerHTML="<p>".concat(Object(o.__)("Reusable block imported successfully!"),"</p>");var e=document.querySelector(".wp-header-end");e&&e.parentNode.insertBefore(t,e)}}),e)}}))},57:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))}});