"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CreateEventForm.tsx":
/*!********************************************!*\
  !*** ./src/components/CreateEventForm.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CreateEventForm = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Assume a logged-in user for now\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].form(\"/src/pages/api/events/create\", {\n            name,\n            description,\n            date,\n            userId\n        });\n        // Reset form\n        setName(\"\");\n        setDescription(\"\");\n        setDate(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Event Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrena\\\\Portofolio\\\\eventbrite\\\\src\\\\components\\\\CreateEventForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                value: description,\n                onChange: (e)=>setDescription(e.target.value),\n                placeholder: \"Event Description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrena\\\\Portofolio\\\\eventbrite\\\\src\\\\components\\\\CreateEventForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: date,\n                onChange: (e)=>setDate(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrena\\\\Portofolio\\\\eventbrite\\\\src\\\\components\\\\CreateEventForm.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Create Event\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mrena\\\\Portofolio\\\\eventbrite\\\\src\\\\components\\\\CreateEventForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mrena\\\\Portofolio\\\\eventbrite\\\\src\\\\components\\\\CreateEventForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateEventForm, \"msJPA1S6zBuhP9+MijjMZ+M6S3U=\");\n_c = CreateEventForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateEventForm);\nvar _c;\n$RefreshReg$(_c, \"CreateEventForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmVhdGVFdmVudEZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFFMUIsTUFBTUcsa0JBQTRCOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLE9BQU8sR0FBR1QsK0NBQVFBLENBQUMsSUFBSSxrQ0FBa0M7SUFFaEUsTUFBTVUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNWCxrREFBVSxDQUFDLGdDQUFnQztZQUFFRTtZQUFNRTtZQUFhRTtZQUFNRTtRQUFPO1FBQ25GLGFBQWE7UUFDYkwsUUFBUTtRQUNSRSxlQUFlO1FBQ2ZFLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDSztRQUFLQyxVQUFVSjs7MEJBQ2QsOERBQUNLO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPZDtnQkFDUGUsVUFBVSxDQUFDUCxJQUFNUCxRQUFRTyxFQUFFUSxNQUFNLENBQUNGLEtBQUs7Z0JBQ3ZDRyxhQUFZOzs7Ozs7MEJBRWQsOERBQUNDO2dCQUNDSixPQUFPWjtnQkFDUGEsVUFBVSxDQUFDUCxJQUFNTCxlQUFlSyxFQUFFUSxNQUFNLENBQUNGLEtBQUs7Z0JBQzlDRyxhQUFZOzs7Ozs7MEJBRWQsOERBQUNMO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPVjtnQkFDUFcsVUFBVSxDQUFDUCxJQUFNSCxRQUFRRyxFQUFFUSxNQUFNLENBQUNGLEtBQUs7Ozs7OzswQkFFekMsOERBQUNLO2dCQUFPTixNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7R0FwQ01kO0tBQUFBO0FBc0NOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUV2ZW50Rm9ybS50c3g/MDMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDcmVhdGVFdmVudEZvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJJZF0gPSB1c2VTdGF0ZSgxKTsgLy8gQXNzdW1lIGEgbG9nZ2VkLWluIHVzZXIgZm9yIG5vd1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBheGlvcy5mb3JtKCcvc3JjL3BhZ2VzL2FwaS9ldmVudHMvY3JlYXRlJywgeyBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgdXNlcklkIH0pO1xyXG4gICAgLy8gUmVzZXQgZm9ybVxyXG4gICAgc2V0TmFtZSgnJyk7XHJcbiAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICBzZXREYXRlKCcnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRXZlbnQgTmFtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkV2ZW50IERlc2NyaXB0aW9uXCJcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBFdmVudDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVFdmVudEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDcmVhdGVFdmVudEZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkYXRlIiwic2V0RGF0ZSIsInVzZXJJZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CreateEventForm.tsx\n"));

/***/ })

});