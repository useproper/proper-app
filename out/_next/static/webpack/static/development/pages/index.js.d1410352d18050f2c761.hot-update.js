webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/queueItem.js":
/*!*********************************!*\
  !*** ./components/queueItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/nathandunn/Development/web/projects/proper-app/components/queueItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "queueItem___StyledDiv",
  componentId: "sc-1gvu4xw-0"
})({});

var QueueItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QueueItem, _Component);

  function QueueItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QueueItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QueueItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QueueItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          index = _this$props.index,
          deleteItem = _this$props.deleteItem;
      return __jsx("li", {
        className: "py-6 px-8 mb-2 flex items-center justify-between rounded border border-gray-400 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "inline-block mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, item.name), __jsx("div", {
        className: "flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "inline-block px-2 py-1 rounded bg-gray-400 text-xs mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, item.origin.name), __jsx(_StyledDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, item.ver ? "v".concat(item.ver) : null), __jsx("button", {
        className: "bg-red-200 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 text-xs rounded flex items-center",
        onClick: function onClick() {
          deleteItem(index);
        },
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\xD7")));
    }
  }]);

  return QueueItem;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);


QueueItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  index: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};

/***/ })

})
//# sourceMappingURL=index.js.d1410352d18050f2c761.hot-update.js.map