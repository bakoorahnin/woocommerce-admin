(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[20],{602:function(e,t,r){},603:function(e,t,r){},604:function(e,t,r){},671:function(e,t,r){"use strict";r.r(t);var a=r(23),o=r.n(a),n=r(20),c=r.n(n),i=r(5),s=r.n(i),l=r(0),m=r(2),u=r(4),d=r(25),p=r(11),b=r(40),h=r(21),f=r(29),O=(r(602),r(321)),v=r(13),g=r.n(v),_=r(14),j=r.n(_),w=r(10),y=r.n(w),S=r(15),I=r.n(S),E=r(16),k=r.n(E),C=r(9),N=r.n(C),T=r(1),P=r.n(T),R=r(3);r(603);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=N()(e);if(t){var o=N()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return k()(this,r)}}var A=function(e){I()(r,e);var t=D(r);function r(e){var a;return g()(this,r),a=t.call(this,e),s()(y()(a),"renderInput",(function(){var e=a.props,t=e.handleChange,r=e.name,n=e.inputText,c=e.inputType,i=e.options,s=e.value,m=e.component,d=a.state.disabled;switch(c){case"checkboxGroup":return i.map((function(e){return e.options.length>0&&Object(l.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":r+"-label"},e.label&&Object(l.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),a.renderCheckboxOptions(e.options))}));case"checkbox":return a.renderCheckboxOptions(i);case"button":return Object(l.createElement)(u.Button,{isSecondary:!0,onClick:a.handleInputCallback,disabled:d},n);case"component":var p=m;return Object(l.createElement)(p,o()({value:s,onChange:t},a.props));case"text":default:var b=Object(R.uniqueId)(r);return Object(l.createElement)("input",{id:b,type:"text",name:r,onChange:t,value:s,placeholder:n,disabled:d})}})),s()(y()(a),"handleInputCallback",(function(){var e=a.props,t=e.createNotice,r=e.callback;if("function"==typeof r)return new Promise((function(e,o){a.setState({disabled:!0}),r(e,o,t)})).then((function(){a.setState({disabled:!1})})).catch((function(){a.setState({disabled:!1})}))})),a.state={disabled:!1},a}return j()(r,[{key:"renderCheckboxOptions",value:function(e){var t=this.props,r=t.handleChange,a=t.name,o=t.value,n=this.state.disabled;return e.map((function(e){return Object(l.createElement)(u.CheckboxControl,{key:a+"-"+e.value,label:e.label,name:a,checked:o&&o.includes(e.value),onChange:function(t){return r({target:{checked:t,name:a,type:"checkbox",value:e.value}})},disabled:n})}))}},{key:"render",value:function(){var e=this.props,t=e.helpText,r=e.label,a=e.name;return Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__label",id:a+"-label"},r),Object(l.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),t&&Object(l.createElement)("span",{className:"woocommerce-setting__help"},t)))}}]),r}(l.Component);A.propTypes={callback:P.a.func,handleChange:P.a.func.isRequired,helpText:P.a.oneOfType([P.a.string,P.a.array]),inputText:P.a.string,inputType:P.a.oneOf(["button","checkbox","checkboxGroup","text","component"]),label:P.a.string.isRequired,name:P.a.string.isRequired,options:P.a.arrayOf(P.a.shape({value:P.a.string,label:P.a.string,description:P.a.string,key:P.a.string,options:P.a.array})),value:P.a.oneOfType([P.a.string,P.a.array])};var F=Object(d.compose)(Object(p.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))(A),x=r(17),M=r.n(x),B=function(e,t,r){var a={};if(r&&(a.skip_existing=!0),"all"!==t.label)if("custom"===t.label){var o=M()().diff(M()(t.date,e),"days",!0);a.days=Math.floor(o)}else a.days=parseInt(t.label,10);return a},Y=r(27);var z=Object(d.compose)([Object(p.withSelect)((function(e){var t=(0,e(h.IMPORT_STORE_NAME).getFormSettings)();return{selectedPeriod:t.period,skipChecked:t.skipPrevious}})),Object(p.withDispatch)((function(e){var t=e(h.IMPORT_STORE_NAME),r=t.updateImportation,a=t.setImportStarted;return{createNotice:e("core/notices").createNotice,setImportStarted:a,updateImportation:r}}))])((function(e){var t,r=e.clearStatusAndTotalsCache,a=e.createNotice,o=e.dateFormat,n=e.importDate,c=e.onImportStarted,i=e.selectedPeriod,s=e.stopImport,d=e.skipChecked,p=e.status,b=e.setImportStarted,h=e.updateImportation,O=function(){var e=Object(Y.addQueryArgs)("/wc-analytics/reports/import",B(o,i,d)),t=Object(m.__)("There was a problem rebuilding your report data.","woocommerce-admin");g(e,t,!0),c()},v=function(){s();var e=Object(m.__)("There was a problem stopping your current import.","woocommerce-admin");g("/wc-analytics/reports/import/cancel",e)},g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];h(e,r).then((function(e){"success"===e.status?a("success",e.message):(a("error",t),b(!1),s())})).catch((function(e){e&&e.message&&(a("error",e.message),b(!1),s())}))},_=function(){var e=Object(m.__)("There was a problem deleting your previous data.","woocommerce-admin");g("/wc-analytics/reports/import/delete",e),Object(f.recordEvent)("analytics_import_delete_previous"),b(!1)},j=function(){b(!1),r()};return Object(l.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(t="ready"!==p,["initializing","customers","orders","finalizing"].includes(p)?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.Button,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:v},Object(m.__)("Stop Import","woocommerce-admin")),Object(l.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},Object(m.__)("Imported data will not be lost if the import is stopped.","woocommerce-admin"),Object(l.createElement)("br",null),Object(m.__)("Navigating away from this page will not affect the import.","woocommerce-admin"))):["ready","nothing"].includes(p)?n?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.Button,{isPrimary:!0,onClick:O,disabled:t},Object(m.__)("Start","woocommerce-admin")),Object(l.createElement)(u.Button,{isSecondary:!0,onClick:_},Object(m.__)("Delete Previously Imported Data","woocommerce-admin"))):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.Button,{isPrimary:!0,onClick:O,disabled:t},Object(m.__)("Start","woocommerce-admin"))):("error"===p&&a("error",Object(m.__)("Something went wrong with the importation process.","woocommerce-admin")),Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u.Button,{isSecondary:!0,onClick:j},Object(m.__)("Re-import Data","woocommerce-admin")),Object(l.createElement)(u.Button,{isSecondary:!0,onClick:_},Object(m.__)("Delete Previously Imported Data","woocommerce-admin"))))))})),L=r(32);var V=Object(p.withDispatch)((function(e){return{setImportPeriod:e(h.IMPORT_STORE_NAME).setImportPeriod}}))((function(e){var t,r=e.dateFormat,a=e.disabled,o=e.setImportPeriod,n=e.value,c=function(e){e.date&&e.date.isValid?o(e.date.format(r),!0):o(e.text,!0)},i=function(e){return e.isValid()&&n.date.length===r.length?e.isAfter(new Date,"day")?L.dateValidationMessages.future:null:L.dateValidationMessages.invalid};return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)(u.SelectControl,{label:Object(m.__)("Import Historical Data","woocommerce-admin"),value:n.label,disabled:a,onChange:function(e){o(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===n.label&&(t=M()(n.date,r),Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},Object(m.__)("Beginning on","woocommerce-admin")),Object(l.createElement)(b.DatePicker,{date:t.isValid()?t.toDate():null,dateFormat:r,disabled:a,error:i(t),isInvalidDate:function(e){return M()(e).isAfter(new Date,"day")},onUpdate:c,text:n.date}))))}));var q=function(e){var t=e.label,r=e.progress,a=e.total,o=Object(m.sprintf)(Object(m.__)("Imported %(label)s","woocommerce-admin"),{label:t}),n=Object(R.isNil)(a)?null:Object(m.sprintf)(Object(m.__)("%(progress)s of %(total)s","woocommerce-admin"),{progress:r||0,total:a});return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},o),n&&Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},n),Object(l.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:a,value:r||0}))},H=r(49);var U=function(e){var t=e.importDate,r=e.status,a=Object(H.applyFilters)("woocommerce_admin_import_status",{nothing:Object(m.__)("Nothing To Import","woocommerce-admin"),ready:Object(m.__)("Ready To Import","woocommerce-admin"),initializing:[Object(m.__)("Initializing","woocommerce-admin"),Object(l.createElement)(u.Spinner,{key:"spinner"})],customers:[Object(m.__)("Importing Customers","woocommerce-admin"),Object(l.createElement)(u.Spinner,{key:"spinner"})],orders:[Object(m.__)("Importing Orders","woocommerce-admin"),Object(l.createElement)(u.Spinner,{key:"spinner"})],finalizing:[Object(m.__)("Finalizing","woocommerce-admin"),Object(l.createElement)(u.Spinner,{key:"spinner"})],finished:-1===t?Object(m.__)("All historical data imported","woocommerce-admin"):Object(m.sprintf)(Object(m.__)("Historical data from %s onward imported","woocommerce-admin"),M()(t).format("YYYY-MM-DD"))});return Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__status"},Object(m.__)("Status:","woocommerce-admin")+" ",a[r])};var G=Object(p.withDispatch)((function(e){return{setSkipPrevious:e(h.IMPORT_STORE_NAME).setSkipPrevious}}))((function(e){var t=e.checked,r=e.disabled,a=e.setSkipPrevious;return Object(l.createElement)(u.CheckboxControl,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:t,disabled:r,label:Object(m.__)("Skip previously imported customers and orders","woocommerce-admin"),onChange:function(e){a(e)}})}));r(604);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=N()(e);if(t){var o=N()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return k()(this,r)}}var K=function(e){I()(r,e);var t=W(r);function r(){return g()(this,r),t.apply(this,arguments)}return j()(r,[{key:"render",value:function(){var e=this.props,t=e.customersProgress,r=e.customersTotal,a=e.dateFormat,o=e.importDate,n=e.inProgress,c=e.lastImportStartTimestamp,i=e.clearStatusAndTotalsCache,s=e.ordersProgress,u=e.ordersTotal,d=e.onImportStarted,p=e.period,h=e.stopImport,f=e.skipChecked,O=e.status;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(m.__)("Import Historical Data","woocommerce-admin")}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__input"},Object(l.createElement)("span",{className:"woocommerce-setting__help"},Object(m.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.","woocommerce-admin")),"finished"!==O&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(V,{dateFormat:a,disabled:n,value:p}),Object(l.createElement)(G,{disabled:n,checked:f}),Object(l.createElement)(q,{label:Object(m.__)("Registered Customers","woocommerce-admin"),progress:t,total:r}),Object(l.createElement)(q,{label:Object(m.__)("Orders and Refunds","woocommerce-admin"),progress:s,total:u})),Object(l.createElement)(U,{importDate:o,status:O})))),Object(l.createElement)(z,{clearStatusAndTotalsCache:i,dateFormat:a,importDate:o,lastImportStartTimestamp:c,onImportStarted:d,stopImport:h,status:O}))}}]),r}(l.Component),X=Object(p.withSelect)((function(e,t){var r=e(h.IMPORT_STORE_NAME),a=r.getImportError,o=r.getImportStatus,n=r.getImportTotals,c=t.activeImport,i=t.cacheNeedsClearing,s=t.dateFormat,l=t.inProgress,m=t.onImportStarted,u=t.onImportFinished,d=t.period,p=t.startStatusCheckInterval,b=t.skipChecked,f=B(s,d,b),O=n(f),v=O.customers,g=O.orders,_=O.lastImportStartTimestamp,j=o(_),w=j.customers,y=j.imported_from,S=j.is_importing,I=j.orders,E=w||{},k=E.imported,C=E.total,N=I||{},T=N.imported,P=N.total,D=Boolean(a(_)||a(f));Boolean(!_&&!l&&!0===S)&&m();var A=Boolean(l&&!i&&!1===S&&(C>0||P>0)&&k===C&&T===P),F={customersTotal:v,isError:D,ordersTotal:g};c&&(F={cacheNeedsClearing:i,customersProgress:k,customersTotal:Object(R.isNil)(C)?v:C,inProgress:l,isError:D,ordersProgress:T,ordersTotal:Object(R.isNil)(P)?g:P});var x=function(e){var t=e.cacheNeedsClearing,r=e.customersProgress,a=e.customersTotal,o=e.isError,n=e.inProgress,c=e.ordersProgress,i=e.ordersTotal;return o?"error":n?Object(R.isNil)(r)||Object(R.isNil)(c)||Object(R.isNil)(a)||Object(R.isNil)(i)||t?"initializing":r<a?"customers":c<i?"orders":"finalizing":a>0||i>0?r===a&&c===i?"finished":"ready":"nothing"}(F);return"initializing"===x&&p(),A&&u(),Q(Q({},F),{},{importDate:y,status:x})}))(K);function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=N()(e);if(t){var o=N()(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return k()(this,r)}}var $=function(e){I()(r,e);var t=Z(r);function r(){var e;return g()(this,r),(e=t.apply(this,arguments)).dateFormat=Object(m.__)("MM/DD/YYYY","woocommerce-admin"),e.intervalId=-1,e.lastImportStopTimestamp=0,e.cacheNeedsClearing=!0,e.onImportFinished=e.onImportFinished.bind(y()(e)),e.onImportStarted=e.onImportStarted.bind(y()(e)),e.clearStatusAndTotalsCache=e.clearStatusAndTotalsCache.bind(y()(e)),e.stopImport=e.stopImport.bind(y()(e)),e.startStatusCheckInterval=e.startStatusCheckInterval.bind(y()(e)),e.cancelStatusCheckInterval=e.cancelStatusCheckInterval.bind(y()(e)),e}return j()(r,[{key:"startStatusCheckInterval",value:function(){var e=this;this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval((function(){e.clearCache("getImportStatus")}),3*h.SECOND))}},{key:"cancelStatusCheckInterval",value:function(){clearInterval(this.intervalId),this.intervalId=-1}},{key:"clearCache",value:function(e,t){var r=this,a=this.props,o=a.invalidateResolution,n=a.lastImportStartTimestamp;o(e,["getImportStatus"===e?n:t]).then((function(){r.cacheNeedsClearing=!1}))}},{key:"stopImport",value:function(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}},{key:"onImportFinished",value:function(){var e=this.props.debouncedSpeak;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}},{key:"onImportStarted",value:function(){var e=this.props,t=e.notes,r=e.setImportStarted,a=e.updateNote,o=t.find((function(e){return"wc-admin-historical-data"===e.name}));o&&a(o.id,{status:"actioned"}),r(!0)}},{key:"clearStatusAndTotalsCache",value:function(){var e=this.props,t=e.selectedPeriod,r=e.skipChecked,a=B(this.dateFormat,t,r);this.clearCache("getImportTotals",a),this.clearCache("getImportStatus")}},{key:"isImportationInProgress",value:function(){var e=this.props.lastImportStartTimestamp;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}},{key:"render",value:function(){var e=this.props,t=e.activeImport,r=e.createNotice,a=e.lastImportStartTimestamp,o=e.selectedPeriod,n=e.skipChecked;return Object(l.createElement)(X,{activeImport:t,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:r,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:a,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:o,skipChecked:n,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}]),r}(l.Component),ee=Object(d.compose)([Object(p.withSelect)((function(e){var t=e(h.NOTES_STORE_NAME).getNotes,r=e(h.IMPORT_STORE_NAME),a=r.getImportStarted,o=r.getFormSettings,n=t({page:1,per_page:h.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),c=a(),i=c.activeImport,s=c.lastImportStartTimestamp,l=o();return{activeImport:i,lastImportStartTimestamp:s,notes:n,selectedPeriod:l.period,skipChecked:l.skipPrevious}})),Object(p.withDispatch)((function(e){var t=e(h.NOTES_STORE_NAME).updateNote,r=e(h.IMPORT_STORE_NAME);return{invalidateResolution:r.invalidateResolution,setImportStarted:r.setImportStarted,updateNote:t}})),u.withSpokenMessages])($);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}t.default=Object(d.compose)(Object(p.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))((function(e){var t=e.createNotice,r=e.query,a=Object(h.useSettings)("wc_admin",["wcAdminSettings"]),n=a.settingsError,i=a.isRequesting,d=a.isDirty,p=a.persistSettings,v=a.updateAndPersistSettings,g=a.updateSettings,_=a.wcAdminSettings,j=Object(l.useRef)(!1);Object(l.useEffect)((function(){function e(e){if(d)return e.returnValue=Object(m.__)("You have unsaved changes. If you proceed, they will be lost.","woocommerce-admin"),e.returnValue}return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[d]),Object(l.useEffect)((function(){i?j.current=!0:!i&&j.current&&(n?t("error",Object(m.__)("There was an error saving your settings. Please try again.","woocommerce-admin")):t("success",Object(m.__)("Your settings have been successfully saved.","woocommerce-admin")),j.current=!1)}),[i,n,t]);var w=function(e){var t=e.target,r=t.checked,a=t.name,o=t.type,n=t.value,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},_);i[a]="checkbox"===o?r?[].concat(c()(i[a]),[n]):i[a].filter((function(e){return e!==n})):n,g("wcAdminSettings",i)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(m.__)("Analytics Settings","woocommerce-admin")}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(O.b).map((function(e){return Object(l.createElement)(F,o()({handleChange:w,value:_[e],key:e,name:e},O.b[e]))})),Object(l.createElement)("div",{className:"woocommerce-settings__actions"},Object(l.createElement)(u.Button,{isSecondary:!0,onClick:function(){if(window.confirm(Object(m.__)("Are you sure you want to reset all settings to default values?","woocommerce-admin"))){var e=Object.keys(O.b).reduce((function(e,t){return e[t]=O.b[t].defaultValue,e}),{});v("wcAdminSettings",e),Object(f.recordEvent)("analytics_settings_reset_defaults")}}},Object(m.__)("Reset Defaults","woocommerce-admin")),Object(l.createElement)(u.Button,{isPrimary:!0,isBusy:i,onClick:function(){p(),Object(f.recordEvent)("analytics_settings_save",_),r.period=void 0,r.compare=void 0,r.before=void 0,r.after=void 0,r.interval=void 0,r.type=void 0,window.wpNavMenuUrlUpdate(r)}},Object(m.__)("Save Settings","woocommerce-admin")))),"true"===r.import?Object(l.createElement)(b.ScrollTo,{offset:"-56"},Object(l.createElement)(ee,{createNotice:t})):Object(l.createElement)(ee,{createNotice:t}))}))}}]);