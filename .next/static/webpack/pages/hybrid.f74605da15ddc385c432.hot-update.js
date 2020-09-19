webpackHotUpdate_N_E("pages/hybrid",{

/***/ "./components/Hybrid/HybridCardHook.js":
/*!*********************************************!*\
  !*** ./components/Hybrid/HybridCardHook.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/nicholasadams916/Desktop/deliveryJoint-main/delivery-joint/components/Hybrid/HybridCardHook.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n // Component name\n\nvar HybridCardHook = function HybridCardHook() {\n  _s();\n\n  // useState hook(initial state(data), and function to setState(setData), our initial state is set to an empty array)\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1]; // useEffect for our api call(axios)\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a // Get http route(currently from jsonplaceholder api, future development it will be another api)\n    .get(\"https://jsonplaceholder.typicode.com/posts/1/comments\") // promise converting our data to json format for mapping purposes    \n    .then(function (res) {\n      // Setting our state to the response from the api        \n      setData(res.data); // Console logging the response from the api        \n\n      console.log(res.data);\n    }) // Error catching    \n    [\"catch\"](function (err) {\n      // Console logging any errors        \n      console.log(err);\n    });\n  }, []); // Function for future development(api post route)\n\n  function clickMe() {\n    var newData = {\n      // dummy data for testing purposes\n      \"postId\": 200,\n      \"id\": 1,\n      \"name\": 'test',\n      \"body\": 'another test'\n    }; // our axios api call\n\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a // our dummy post http route for testing purposes\n    .post('https://jsonplaceholder.typicode.com/posts', newData).then(function (data) {\n      // logging our data \n      console.log(data);\n    }).then(alert(\"data posted!\")) // error catching\n    [\"catch\"](function (err) {\n      console.log(err);\n    });\n  } // Our return which will be displayed in the browser\n\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-758936239\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, data.map(function (data) {\n    return __jsx(\"div\", {\n      id: \"card-body\",\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 21\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 25\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardBody\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      id: \"card\",\n      key: data.id,\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 33\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardTitle\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      id: \"name\",\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 41\n      }\n    }, data.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardSubtitle\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      id: \"body\",\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 41\n      }\n    }, data.body)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"CardText\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 37\n      }\n    }, __jsx(\"div\", {\n      id: \"email\",\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 41\n      }\n    }, data.email)), __jsx(\"div\", {\n      id: \"btn\",\n      className: \"jsx-758936239\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 37\n      }\n    }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      variant: \"success\",\n      onClick: clickMe,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 41\n      }\n    }, \"Click me!\"))))));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"758936239\",\n    __self: _this\n  }, \"#card-body.jsx-758936239{display:inline-block;margin:5px;box-shadow:0 2px 3px #999999,0 2px 3px #999999;}#card.jsx-758936239{width:30%;display:inline-block;margin:5px;box-shadow:0 2px 3px #999999,0 2px 3px #999999;}#name.jsx-758936239{border-bottom:1px solid black;height:25%;width:100%;background-color:slategrey;color:blue;padding:5px;}#body.jsx-758936239{padding:3px;}#email.jsx-758936239{color:red;margin:5px;padding:3px;text-align:center;}#btn.jsx-758936239{padding:9px;margin-left:31%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNob2xhc2FkYW1zOTE2L0Rlc2t0b3AvZGVsaXZlcnlKb2ludC1tYWluL2RlbGl2ZXJ5LWpvaW50L2NvbXBvbmVudHMvSHlicmlkL0h5YnJpZENhcmRIb29rLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGaUIsQUFJMEMsQUFLWCxBQU1vQixBQVFsQixBQUdGLEFBTUUsVUF0QlMsQUFpQlYsRUFIZixBQVNvQixTQTVCTCxBQXVCQyxPQU1oQixFQWxCZSxDQUxBLENBTHFDLENBdUI5QixRQVpQLENBTHFDLFNBa0JwRCxDQVorQiwyQkFYL0IsQUFZZSxVQU5mLENBT2dCLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9uaWNob2xhc2FkYW1zOTE2L0Rlc2t0b3AvZGVsaXZlcnlKb2ludC1tYWluL2RlbGl2ZXJ5LWpvaW50L2NvbXBvbmVudHMvSHlicmlkL0h5YnJpZENhcmRIb29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJ1xuaW1wb3J0IHtcbiAgICBDYXJkLCBDYXJkSW1nLCBDYXJkVGV4dCwgQ2FyZEJvZHksXG4gICAgQ2FyZFRpdGxlLCBDYXJkU3VidGl0bGVcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyBDb21wb25lbnQgbmFtZVxuY29uc3QgSHlicmlkQ2FyZEhvb2sgPSAoKSA9PiB7XG4gICAgLy8gdXNlU3RhdGUgaG9vayhpbml0aWFsIHN0YXRlKGRhdGEpLCBhbmQgZnVuY3Rpb24gdG8gc2V0U3RhdGUoc2V0RGF0YSksIG91ciBpbml0aWFsIHN0YXRlIGlzIHNldCB0byBhbiBlbXB0eSBhcnJheSlcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICAvLyB1c2VFZmZlY3QgZm9yIG91ciBhcGkgY2FsbChheGlvcylcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLy8gR2V0IGh0dHAgcm91dGUoY3VycmVudGx5IGZyb20ganNvbnBsYWNlaG9sZGVyIGFwaSwgZnV0dXJlIGRldmVsb3BtZW50IGl0IHdpbGwgYmUgYW5vdGhlciBhcGkpXG4gICAgICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzEvY29tbWVudHNcIilcbiAgICAgICAgICAgIC8vIHByb21pc2UgY29udmVydGluZyBvdXIgZGF0YSB0byBqc29uIGZvcm1hdCBmb3IgbWFwcGluZyBwdXJwb3NlcyAgICBcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU2V0dGluZyBvdXIgc3RhdGUgdG8gdGhlIHJlc3BvbnNlIGZyb20gdGhlIGFwaSAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAvLyBDb25zb2xlIGxvZ2dpbmcgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGFwaSAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gRXJyb3IgY2F0Y2hpbmcgICAgXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDb25zb2xlIGxvZ2dpbmcgYW55IGVycm9ycyAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICAvLyBGdW5jdGlvbiBmb3IgZnV0dXJlIGRldmVsb3BtZW50KGFwaSBwb3N0IHJvdXRlKVxuICAgIGZ1bmN0aW9uIGNsaWNrTWUoKSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgICAgICAvLyBkdW1teSBkYXRhIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgICAgICAgICBcInBvc3RJZFwiOiAyMDAsXG4gICAgICAgICAgICBcImlkXCI6IDEsXG4gICAgICAgICAgICBcIm5hbWVcIjogJ3Rlc3QnLFxuICAgICAgICAgICAgXCJib2R5XCI6ICdhbm90aGVyIHRlc3QnXG4gICAgICAgIH1cbiAgICAgICAgLy8gb3VyIGF4aW9zIGFwaSBjYWxsXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAvLyBvdXIgZHVtbXkgcG9zdCBodHRwIHJvdXRlIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4gICAgICAgICAgICAucG9zdCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywgbmV3RGF0YSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxvZ2dpbmcgb3VyIGRhdGEgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICBhbGVydChcImRhdGEgcG9zdGVkIVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gZXJyb3IgY2F0Y2hpbmdcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBPdXIgcmV0dXJuIHdoaWNoIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBicm93c2VyXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIEZ1bmN0aW9uIHRoYXQgbWFwcyBvdmVyIG91ciBkYXRhKHN0YXRlKSBhcnJheSBzbyB3ZSBjYW4gcHVsbCBvdXQgc2luZ2xlIFxuICAgICAgICAgICAgICAgICAgICBwaWVjZXMgb2YgZGF0YSBhbmQgZGlzcGxheXMgdGhlIGRhdGEgaW4gdGhlIGZvcm0gb2YgYSBjYXJkIGluIHRoZSBicm93c2VyICovfVxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChkYXRhID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkU3VidGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdidG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBvbkNsaWNrPXtjbGlja01lfT5DbGljayBtZSE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIG91ciBzdHlsZXNoZWV0KGluIGpzeCBmb3JtYXQpICovfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICNjYXJkLWJvZHkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICM5OTk5OTksIDAgMnB4IDNweCAjOTk5OTk5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjY2FyZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAjOTk5OTk5LCAwIDJweCAzcHggIzk5OTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI25hbWUge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmV5O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2VtYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzElO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxuXG5cbn1cbi8vIEV4cG9ydGluZyB0aGUgZW50aXJlIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgSHlicmlkQ2FyZEhvb2siXX0= */\\n/*@ sourceURL=/Users/nicholasadams916/Desktop/deliveryJoint-main/delivery-joint/components/Hybrid/HybridCardHook.js */\"));\n}; // Exporting the entire component\n\n\n_s(HybridCardHook, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = HybridCardHook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HybridCardHook);\n\nvar _c;\n\n$RefreshReg$(_c, \"HybridCardHook\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IeWJyaWQvSHlicmlkQ2FyZEhvb2suanM/Y2Y2ZSJdLCJuYW1lcyI6WyJIeWJyaWRDYXJkSG9vayIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiY2xpY2tNZSIsIm5ld0RhdGEiLCJwb3N0IiwiYWxlcnQiLCJtYXAiLCJpZCIsIm5hbWUiLCJib2R5IiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FLQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDekI7QUFEeUIsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFbEJDLElBRmtCO0FBQUEsTUFFWkMsT0FGWSxpQkFHekI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FDRDtBQURDLEtBRUFDLEdBRkwsQ0FFUyx1REFGVCxFQUdJO0FBSEosS0FJS0MsSUFKTCxDQUlVLFVBQUFDLEdBQUcsRUFBSTtBQUNUO0FBQ0FMLGFBQU8sQ0FBQ0ssR0FBRyxDQUFDTixJQUFMLENBQVAsQ0FGUyxDQUdUOztBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDTixJQUFoQjtBQUNILEtBVEwsRUFVSTtBQVZKLGNBV1csVUFBQVMsR0FBRyxFQUFJO0FBQ1Y7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxLQWRMO0FBZUgsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVCxDQUp5QixDQXFCekI7O0FBQ0EsV0FBU0MsT0FBVCxHQUFtQjtBQUNmLFFBQU1DLE9BQU8sR0FBRztBQUNaO0FBQ0EsZ0JBQVUsR0FGRTtBQUdaLFlBQU0sQ0FITTtBQUlaLGNBQVEsTUFKSTtBQUtaLGNBQVE7QUFMSSxLQUFoQixDQURlLENBUWY7O0FBQ0FSLGdEQUFLLENBQ0Q7QUFEQyxLQUVBUyxJQUZMLENBRVUsNENBRlYsRUFFd0RELE9BRnhELEVBR0tOLElBSEwsQ0FHVSxVQUFBTCxJQUFJLEVBQUk7QUFDVjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNILEtBTkwsRUFPS0ssSUFQTCxDQVFRUSxLQUFLLENBQUMsY0FBRCxDQVJiLEVBVUk7QUFWSixjQVdXLFVBQUNKLEdBQUQsRUFBUztBQUNaRixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNILEtBYkw7QUFjSCxHQTdDd0IsQ0ErQ3pCOzs7QUFDQSxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdLVCxJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFBZCxJQUFJO0FBQUEsV0FDVjtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxTQUFHLEVBQUVBLElBQUksQ0FBQ2UsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxRQUFFLEVBQUMsTUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2YsSUFBSSxDQUFDZ0IsSUFEVixDQURKLENBREosRUFNSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLaEIsSUFBSSxDQUFDaUIsSUFEVixDQURKLENBTkosRUFXSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLakIsSUFBSSxDQUFDa0IsS0FEVixDQURKLENBWEosRUFnQkk7QUFBSyxRQUFFLEVBQUMsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDhEQUFEO0FBQVEsYUFBTyxFQUFDLFNBQWhCO0FBQTBCLGFBQU8sRUFBRVIsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixDQWhCSixDQURKLENBREosQ0FESixDQURVO0FBQUEsR0FBYixDQUhMLENBREo7QUFBQTtBQUFBO0FBQUEsODJQQURKO0FBNkVILENBN0hELEMsQ0E4SEE7OztHQTlITVosYzs7S0FBQUEsYztBQStIU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0h5YnJpZC9IeWJyaWRDYXJkSG9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbidcbmltcG9ydCB7XG4gICAgQ2FyZCwgQ2FyZEltZywgQ2FyZFRleHQsIENhcmRCb2R5LFxuICAgIENhcmRUaXRsZSwgQ2FyZFN1YnRpdGxlXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gQ29tcG9uZW50IG5hbWVcbmNvbnN0IEh5YnJpZENhcmRIb29rID0gKCkgPT4ge1xuICAgIC8vIHVzZVN0YXRlIGhvb2soaW5pdGlhbCBzdGF0ZShkYXRhKSwgYW5kIGZ1bmN0aW9uIHRvIHNldFN0YXRlKHNldERhdGEpLCBvdXIgaW5pdGlhbCBzdGF0ZSBpcyBzZXQgdG8gYW4gZW1wdHkgYXJyYXkpXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgLy8gdXNlRWZmZWN0IGZvciBvdXIgYXBpIGNhbGwoYXhpb3MpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC8vIEdldCBodHRwIHJvdXRlKGN1cnJlbnRseSBmcm9tIGpzb25wbGFjZWhvbGRlciBhcGksIGZ1dHVyZSBkZXZlbG9wbWVudCBpdCB3aWxsIGJlIGFub3RoZXIgYXBpKVxuICAgICAgICAgICAgLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xL2NvbW1lbnRzXCIpXG4gICAgICAgICAgICAvLyBwcm9taXNlIGNvbnZlcnRpbmcgb3VyIGRhdGEgdG8ganNvbiBmb3JtYXQgZm9yIG1hcHBpbmcgcHVycG9zZXMgICAgXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFNldHRpbmcgb3VyIHN0YXRlIHRvIHRoZSByZXNwb25zZSBmcm9tIHRoZSBhcGkgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgLy8gQ29uc29sZSBsb2dnaW5nIHRoZSByZXNwb25zZSBmcm9tIHRoZSBhcGkgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIEVycm9yIGNhdGNoaW5nICAgIFxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ29uc29sZSBsb2dnaW5nIGFueSBlcnJvcnMgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgLy8gRnVuY3Rpb24gZm9yIGZ1dHVyZSBkZXZlbG9wbWVudChhcGkgcG9zdCByb3V0ZSlcbiAgICBmdW5jdGlvbiBjbGlja01lKCkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgICAgICAgLy8gZHVtbXkgZGF0YSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgICAgICAgICAgXCJwb3N0SWRcIjogMjAwLFxuICAgICAgICAgICAgXCJpZFwiOiAxLFxuICAgICAgICAgICAgXCJuYW1lXCI6ICd0ZXN0JyxcbiAgICAgICAgICAgIFwiYm9keVwiOiAnYW5vdGhlciB0ZXN0J1xuICAgICAgICB9XG4gICAgICAgIC8vIG91ciBheGlvcyBhcGkgY2FsbFxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLy8gb3VyIGR1bW15IHBvc3QgaHR0cCByb3V0ZSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICAgICAgICAgICAgLnBvc3QoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIG5ld0RhdGEpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsb2dnaW5nIG91ciBkYXRhIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJkYXRhIHBvc3RlZCFcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIGVycm9yIGNhdGNoaW5nXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gT3VyIHJldHVybiB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlclxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBGdW5jdGlvbiB0aGF0IG1hcHMgb3ZlciBvdXIgZGF0YShzdGF0ZSkgYXJyYXkgc28gd2UgY2FuIHB1bGwgb3V0IHNpbmdsZSBcbiAgICAgICAgICAgICAgICAgICAgcGllY2VzIG9mIGRhdGEgYW5kIGRpc3BsYXlzIHRoZSBkYXRhIGluIHRoZSBmb3JtIG9mIGEgY2FyZCBpbiB0aGUgYnJvd3NlciAqL31cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoZGF0YSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRcIiBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFN1YnRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRTdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nYnRuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17Y2xpY2tNZX0+Q2xpY2sgbWUhPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBvdXIgc3R5bGVzaGVldChpbiBqc3ggZm9ybWF0KSAqL31cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAjY2FyZC1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCAjOTk5OTk5LCAwIDJweCAzcHggIzk5OTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2NhcmQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggIzk5OTk5OSwgMCAycHggM3B4ICM5OTk5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNuYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JleTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JvZHkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNlbWFpbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2J0biB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMxJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcblxuXG59XG4vLyBFeHBvcnRpbmcgdGhlIGVudGlyZSBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IEh5YnJpZENhcmRIb29rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hybrid/HybridCardHook.js\n");

/***/ })

})