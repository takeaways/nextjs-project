webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/AppLayout/Nav/index.js":
/*!*******************************************!*\
  !*** ./components/AppLayout/Nav/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/AppLayout/Nav/styles.js");
var _this = undefined,
    _jsxFileName = "C:\\myproject\\geonilJang-project\\components\\AppLayout\\Nav\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var navItem = [{
  mainMenu: '아이템1',
  subMenu: [{
    name: 'product',
    path: 'product'
  }, {
    name: '상품1',
    path: '/'
  }]
}, {
  mainMenu: '아이템2',
  subMenu: [{
    name: '상품2-1',
    path: '#'
  }, {
    name: '상품2-2',
    path: '#'
  }]
}, {
  mainMenu: '아이템3',
  subMenu: [{
    name: '상품3',
    path: '#'
  }, {
    name: '상품3-1',
    path: '#'
  }]
}, {
  mainMenu: '아이템4',
  subMenu: [{
    name: '상품4',
    path: '#'
  }, {
    name: '상품4-1',
    path: '#'
  }, {
    name: '상품5-1',
    path: '#'
  }]
}];

var Nav = function Nav() {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["NavBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, navItem.map(function (item) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["NavListItem"], {
      key: item.mainMenu,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["NavListItemMenu"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, item.mainMenu, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["NavListItemMenuItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, item.subMenu.map(function (sub) {
      return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["NavListItemMenuItemMenu"], {
        key: sub.name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: sub.path,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }, sub.name)));
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.df60c61e2d67b7cc7431.hot-update.js.map