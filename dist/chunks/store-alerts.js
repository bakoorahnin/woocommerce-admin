(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[50],{573:function(e,t,r){"use strict";var n=r(101),a=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(n.sanitize)(e,{ALLOWED_TAGS:a,ALLOWED_ATTR:o})}}},599:function(e,t,r){},600:function(e,t,r){"use strict";var n=r(0),a=r(12),o=Object(n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)(a.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));t.a=o},675:function(e,t,r){"use strict";r.r(t),r.d(t,"StoreAlerts",(function(){return D}));var n=r(13),a=r.n(n),o=r(14),c=r.n(o),l=r(10),i=r.n(l),s=r(15),u=r.n(s),m=r(16),d=r.n(m),p=r(9),f=r.n(p),b=r(0),h=r(2),v=r(4),O=r(8),_=r.n(O),j=r(30),g=r.n(j),E=r(25),w=r(11),y=r(17),A=r.n(y),N=r(168),x=r(560),S=r(600),C=r(28),R=r(21),k=r(29),B=r(37),T=r(573),z=r(1),L=r.n(z);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var I=function(e){u()(r,e);var t=M(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e=this.props.hasMultipleAlerts;return Object(b.createElement)(v.Card,{className:"woocommerce-store-alerts is-loading","aria-hidden":!0,size:null},Object(b.createElement)(v.CardHeader,{isBorderless:!0},Object(b.createElement)("span",{className:"is-placeholder"}),e&&Object(b.createElement)("span",{className:"is-placeholder"})),Object(b.createElement)(v.CardBody,null,Object(b.createElement)("div",{className:"woocommerce-store-alerts__message"},Object(b.createElement)("span",{className:"is-placeholder"}),Object(b.createElement)("span",{className:"is-placeholder"}))),Object(b.createElement)(v.CardFooter,{isBorderless:!0},Object(b.createElement)("span",{className:"is-placeholder"})))}}]),r}(b.Component),P=I;I.propTypes={hasMultipleAlerts:L.a.bool},I.defaultProps={hasMultipleAlerts:!1};r(599);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return d()(this,r)}}var D=function(e){u()(r,e);var t=F(r);function r(e){var n;return a()(this,r),(n=t.call(this,e)).state={currentIndex:0},n.previousAlert=n.previousAlert.bind(i()(n)),n.nextAlert=n.nextAlert.bind(i()(n)),n}return c()(r,[{key:"previousAlert",value:function(e){e.stopPropagation();var t=this.state.currentIndex;t>0&&this.setState({currentIndex:t-1})}},{key:"nextAlert",value:function(e){e.stopPropagation();var t=this.getAlerts(),r=this.state.currentIndex;r<t.length-1&&this.setState({currentIndex:r+1})}},{key:"renderActions",value:function(e){var t=this.props,r=t.triggerNoteAction,n=t.updateNote,a=e.actions.map((function(t){return Object(b.createElement)(v.Button,{key:t.name,isPrimary:t.primary,isSecondary:!t.primary,href:t.url||void 0,onClick:function(){return r(e.id,t.id)}},t.label)})),o=[{value:A()().add(4,"hours").unix().toString(),label:Object(h.__)("Later Today","woocommerce-admin")},{value:A()().add(1,"day").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(h.__)("Tomorrow","woocommerce-admin")},{value:A()().add(1,"week").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(h.__)("Next Week","woocommerce-admin")},{value:A()().add(1,"month").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(h.__)("Next Month","woocommerce-admin")}],c=e.is_snoozable&&Object(b.createElement)(v.SelectControl,{className:"woocommerce-store-alerts__snooze",options:[{label:Object(h.__)("Remind Me Later","woocommerce-admin"),value:"0"}].concat(o),onChange:function(t){if("0"!==t){var r=o.find((function(e){return e.value===t}));!function(t){n(e.id,{status:"snoozed",date_reminder:t.value});var r={alert_name:e.name,alert_title:e.title,snooze_duration:t.value,snooze_label:t.label};Object(k.recordEvent)("store_alert_snooze",r)}({value:t,label:r&&r.label})}}});if(a||c)return Object(b.createElement)("div",{className:"woocommerce-store-alerts__actions"},a,c)}},{key:"getAlerts",value:function(){return(this.props.alerts||[]).filter((function(e){return"unactioned"===e.status}))}},{key:"render",value:function(){var e=this.getAlerts(),t=Object(C.h)("alertCount",0,(function(e){return parseInt(e,10)}));if(t>0&&this.props.isLoading)return Object(b.createElement)(P,{hasMultipleAlerts:t>1});if(0===e.length)return null;var r=this.state.currentIndex,n=e.length,a=e[r],o=a.type,c=_()("woocommerce-store-alerts",{"is-alert-error":"error"===o,"is-alert-update":"update"===o});return Object(b.createElement)(v.Card,{className:c,size:null},Object(b.createElement)(v.CardHeader,{isBorderless:!0},Object(b.createElement)(B.Text,{variant:"title.medium",as:"h2"},a.title),n>1&&Object(b.createElement)("div",{className:"woocommerce-store-alerts__pagination"},Object(b.createElement)(v.Button,{onClick:this.previousAlert,disabled:0===r,label:Object(h.__)("Previous Alert","woocommerce-admin")},Object(b.createElement)(N.a,{icon:x.a,className:"arrow-left-icon"})),Object(b.createElement)("span",{className:"woocommerce-store-alerts__pagination-label",role:"status","aria-live":"polite"},g()({mixedString:Object(h.__)("{{current /}} of {{total /}}","woocommerce-admin"),components:{current:Object(b.createElement)(b.Fragment,null,r+1),total:Object(b.createElement)(b.Fragment,null,n)}})),Object(b.createElement)(v.Button,{onClick:this.nextAlert,disabled:n-1===r,label:Object(h.__)("Next Alert","woocommerce-admin")},Object(b.createElement)(N.a,{icon:S.a,className:"arrow-right-icon"})))),Object(b.createElement)(v.CardBody,null,Object(b.createElement)("div",{className:"woocommerce-store-alerts__message",dangerouslySetInnerHTML:Object(T.a)(a.content)})),Object(b.createElement)(v.CardFooter,{isBorderless:!0},this.renderActions(a)))}}]),r}(b.Component),H={page:1,per_page:R.QUERY_DEFAULTS.pageSize,type:"error,update",status:"unactioned"};t.default=Object(E.compose)(Object(w.withSelect)((function(e){var t=e(R.NOTES_STORE_NAME),r=t.getNotes,n=t.isResolving;return{alerts:r(H),isLoading:n("getNotes",[H])}})),Object(w.withDispatch)((function(e){var t=e(R.NOTES_STORE_NAME);return{triggerNoteAction:t.triggerNoteAction,updateNote:t.updateNote}})))(D)}}]);