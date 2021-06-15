(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([[8],{

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPanel", function() { return InboxPanel; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(649);
/* harmony import */ var _inbox_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inbox_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inbox_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(594);
/* harmony import */ var _abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);


/**
 * Internal dependencies
 */



var InboxPanel = function InboxPanel(_ref) {
  var hasAbbreviatedNotifications = _ref.hasAbbreviatedNotifications,
      thingsToDoNextCount = _ref.thingsToDoNextCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woocommerce-notification-panels"
  }, hasAbbreviatedNotifications && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_abbreviated_notifications_panel__WEBPACK_IMPORTED_MODULE_3__[/* AbbreviatedNotificationsPanel */ "b"], {
    thingsToDoNextCount: thingsToDoNextCount
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inbox_panel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (InboxPanel);

/***/ })

}]);