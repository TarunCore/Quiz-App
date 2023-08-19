"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-client)/./app/quiz/Quiz.tsx":
/*!***************************!*\
  !*** ./app/quiz/Quiz.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* harmony import */ var _components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/QuestionCard/QuestionCard */ \"(app-client)/./components/QuestionCard/QuestionCard.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n// Components\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [score, setScore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [userAnswers, setUserAnswers] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        // If user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        // Check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        // Add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        // Save the answer in the object for user answers\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"p-8 font-bold text-[20px]\",\n                children: [\n                    \"Score: \",\n                    score\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[#9F50AC] font-bold pb-2 text-[14px]\",\n                children: [\n                    \"Question \",\n                    currentQuestionIndex + 1,\n                    \" out of \",\n                    totalQuestions\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentQuestionIndex: currentQuestionIndex,\n                question: questions[currentQuestionIndex].question,\n                answers: questions[currentQuestionIndex].answers,\n                userAnswer: userAnswers[currentQuestionIndex],\n                correctAnswer: questions[currentQuestionIndex].correct_answer,\n                onClick: handleOnAnswerClick\n            }, void 0, false, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mt-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"Prev\",\n                        onClick: ()=>handleChangeQuestion(-1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: currentQuestionIndex === totalQuestions - 1 ? \"End\" : \"Next\",\n                        onClick: currentQuestionIndex === totalQuestions - 1 ? ()=>router.push(\"/\") : ()=>handleChangeQuestion(1)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\app\\\\quiz\\\\Quiz.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpei50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUM1QyxhQUFhO0FBQ21DO0FBQ2tCO0FBU2hFLE1BQU1JLE9BQU8sU0FBMEM7UUFBekMsRUFBRUMsVUFBUyxFQUFFQyxlQUFjLEVBQVM7O0lBQ2hELE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR1IscURBQWMsQ0FBQztJQUN6RSxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IscURBQWMsQ0FBeUIsQ0FBQztJQUU5RSxNQUFNYyxxQkFBcUJGLFdBQVcsQ0FBQ0wscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUs7SUFFM0UsTUFBTVEsU0FBU2QsMERBQVNBO0lBRXhCLE1BQU1lLHNCQUFzQixDQUFDQyxRQUFnQlYsdUJBQWlDO1FBQzVFLDJDQUEyQztRQUMzQyxJQUFJTyxvQkFBb0I7UUFDeEIsc0NBQXNDO1FBQ3RDLE1BQU1JLFlBQVliLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNZLGNBQWMsS0FBS0Y7UUFDckUsaUNBQWlDO1FBQ2pDLElBQUlDLFdBQVdQLFNBQVNTLENBQUFBLE9BQVFBLE9BQU87UUFDdkMsaURBQWlEO1FBQ2pEUCxlQUFlTyxDQUFBQSxPQUFTO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ2IscUJBQXFCLEVBQUVVO1lBQU87SUFDcEU7SUFFQSxNQUFNSSx1QkFBdUIsQ0FBQ0MsT0FBaUI7UUFDN0MsTUFBTUMsbUJBQW1CaEIsdUJBQXVCZTtRQUNoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CakIsZ0JBQWdCO1FBQ2hFRSx3QkFBd0JlO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQTRCO29CQUFRZjs7Ozs7OzswQkFDakQsOERBQUNnQjtnQkFBRUQsV0FBVTs7b0JBQTRDO29CQUM3Q2xCLHVCQUF1QjtvQkFBRTtvQkFBU0Q7Ozs7Ozs7MEJBRTlDLDhEQUFDSCw2RUFBWUE7Z0JBQ1hJLHNCQUFzQkE7Z0JBQ3RCb0IsVUFBVXRCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNvQixRQUFRO2dCQUNsREMsU0FBU3ZCLFNBQVMsQ0FBQ0UscUJBQXFCLENBQUNxQixPQUFPO2dCQUNoREMsWUFBWWpCLFdBQVcsQ0FBQ0wscUJBQXFCO2dCQUM3Q3VCLGVBQWV6QixTQUFTLENBQUNFLHFCQUFxQixDQUFDWSxjQUFjO2dCQUM3RFksU0FBU2Y7Ozs7OzswQkFFWCw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDdkIsaUVBQU1BO3dCQUFDOEIsTUFBSzt3QkFBT0QsU0FBUyxJQUFNVixxQkFBcUIsQ0FBQzs7Ozs7O2tDQUN6RCw4REFBQ25CLGlFQUFNQTt3QkFDTDhCLE1BQU16Qix5QkFBeUJELGlCQUFpQixJQUFJLFFBQVEsTUFBTTt3QkFDbEV5QixTQUFTeEIseUJBQXlCRCxpQkFBaUIsSUFBSSxJQUFNUyxPQUFPa0IsSUFBSSxDQUFDLE9BQU8sSUFBTVoscUJBQXFCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2SDtHQWpEUWpCOztRQU9TSCxzREFBU0E7OztLQVBsQkc7QUFtRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovUXVpei50c3g/N2YyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgUXVlc3Rpb25DYXJkIGZyb20gJ0AvY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkJztcclxuLy8gVHlwZXNcclxuaW1wb3J0IHsgUXVlc3Rpb25zU3RhdGUgfSBmcm9tICdAL3R5cGVzL3F1aXonO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25zU3RhdGU7XHJcbiAgICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFF1aXogPSAoeyBxdWVzdGlvbnMsIHRvdGFsUXVlc3Rpb25zIH06IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudFF1ZXN0aW9uSW5kZXgsIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3VzZXJBbnN3ZXJzLCBzZXRVc2VyQW5zd2Vyc10gPSBSZWFjdC51c2VTdGF0ZTxSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+Pih7fSk7XHJcblxyXG4gIGNvbnN0IGlzUXVlc3Rpb25BbnN3ZXJlZCA9IHVzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XSA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIC8vIElmIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWQsIGRvIG5vdGhpbmdcclxuICAgIGlmIChpc1F1ZXN0aW9uQW5zd2VyZWQpIHJldHVybjtcclxuICAgIC8vIENoZWNrIGFuc3dlciBhZ2FpbnN0IGNvcnJlY3QgYW5zd2VyXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyID09PSBhbnN3ZXI7XHJcbiAgICAvLyBBZGQgc2NvcmUgaWYgYW5zd2VyIGlzIGNvcnJlY3RcclxuICAgIGlmIChpc0NvcnJlY3QpIHNldFNjb3JlKHByZXYgPT4gcHJldiArIDEpO1xyXG4gICAgLy8gU2F2ZSB0aGUgYW5zd2VyIGluIHRoZSBvYmplY3QgZm9yIHVzZXIgYW5zd2Vyc1xyXG4gICAgc2V0VXNlckFuc3dlcnMocHJldiA9PiAoeyAuLi5wcmV2LCBbY3VycmVudFF1ZXN0aW9uSW5kZXhdOiBhbnN3ZXIgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVF1ZXN0aW9uID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ICsgc3RlcDtcclxuICAgIGlmIChuZXdRdWVzdGlvbkluZGV4IDwgMCB8fCBuZXdRdWVzdGlvbkluZGV4ID49IHRvdGFsUXVlc3Rpb25zKSByZXR1cm47XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25JbmRleChuZXdRdWVzdGlvbkluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgdGV4dC1jZW50ZXInPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3AtOCBmb250LWJvbGQgdGV4dC1bMjBweF0nPlNjb3JlOiB7c2NvcmV9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtWyM5RjUwQUNdIGZvbnQtYm9sZCBwYi0yIHRleHQtWzE0cHhdJz5cclxuICAgICAgICBRdWVzdGlvbiB7Y3VycmVudFF1ZXN0aW9uSW5kZXggKyAxfSBvdXQgb2Yge3RvdGFsUXVlc3Rpb25zfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxRdWVzdGlvbkNhcmRcclxuICAgICAgICBjdXJyZW50UXVlc3Rpb25JbmRleD17Y3VycmVudFF1ZXN0aW9uSW5kZXh9XHJcbiAgICAgICAgcXVlc3Rpb249e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25JbmRleF0ucXVlc3Rpb259XHJcbiAgICAgICAgYW5zd2Vycz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXJzfVxyXG4gICAgICAgIHVzZXJBbnN3ZXI9e3VzZXJBbnN3ZXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XX1cclxuICAgICAgICBjb3JyZWN0QW5zd2VyPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQW5zd2VyQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0xNic+XHJcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PSdQcmV2JyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigtMSl9IC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdGV4dD17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICdFbmQnIDogJ05leHQnfVxyXG4gICAgICAgICAgb25DbGljaz17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICgpID0+IHJvdXRlci5wdXNoKCcvJykgOiAoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigxKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJRdWVzdGlvbkNhcmQiLCJRdWl6IiwicXVlc3Rpb25zIiwidG90YWxRdWVzdGlvbnMiLCJjdXJyZW50UXVlc3Rpb25JbmRleCIsInNldEN1cnJlbnRRdWVzdGlvbkluZGV4IiwidXNlU3RhdGUiLCJzY29yZSIsInNldFNjb3JlIiwidXNlckFuc3dlcnMiLCJzZXRVc2VyQW5zd2VycyIsImlzUXVlc3Rpb25BbnN3ZXJlZCIsInJvdXRlciIsImhhbmRsZU9uQW5zd2VyQ2xpY2siLCJhbnN3ZXIiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInByZXYiLCJoYW5kbGVDaGFuZ2VRdWVzdGlvbiIsInN0ZXAiLCJuZXdRdWVzdGlvbkluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwib25DbGljayIsInRleHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/Quiz.tsx\n"));

/***/ }),

/***/ "(app-client)/./components/QuestionCard/QuestionCard.tsx":
/*!**************************************************!*\
  !*** ./components/QuestionCard/QuestionCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst QuestionCard = (param)=>{\n    let { currentQuestionIndex , question , answers , userAnswer , onClick , correctAnswer  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] max-w-[400px]\",\n                dangerouslySetInnerHTML: {\n                    __html: question\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-8\",\n                children: answers.map((answer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>onClick(answer, currentQuestionIndex),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"truncate\",\n                            dangerouslySetInnerHTML: {\n                                __html: answer\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, undefined)\n                    }, answer, false, {\n                        fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CSE\\\\React Projects\\\\Quiz App\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, undefined);\n};\n_c = QuestionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCard);\nvar _c;\n$RefreshReg$(_c, \"QuestionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFTRSxNQUFNQSxlQUFnQyxTQU9oQztRQVBpQyxFQUNyQ0MscUJBQW9CLEVBQ3BCQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsV0FBVSxFQUNWQyxRQUFPLEVBQ1BDLGNBQWEsRUFDZDtJQUNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFFQyxXQUFVO2dCQUE0QkMseUJBQXlCO29CQUFFQyxRQUFRVDtnQkFBUzs7Ozs7OzBCQUNyRiw4REFBQ0s7Z0JBQUlFLFdBQVU7MEJBQ1pOLFFBQVFTLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1gsOERBQUNOO3dCQUVDRixTQUFTLElBQU1BLFFBQVFRLFFBQVFaO2tDQUMvQiw0RUFBQ2E7NEJBQUtMLFdBQVU7NEJBQVdDLHlCQUF5QjtnQ0FBRUMsUUFBUUU7NEJBQU87Ozs7Ozt1QkFGaEVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWpCO0tBdEJNYjtBQXdCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC9RdWVzdGlvbkNhcmQudHN4P2FlMWEiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBQcm9wcyA9IHtcclxuICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXI7XHJcbiAgICBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgYW5zd2Vyczogc3RyaW5nW107XHJcbiAgICB1c2VyQW5zd2VyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBjb3JyZWN0QW5zd2VyOiBzdHJpbmc7XHJcbiAgICBvbkNsaWNrOiAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBRdWVzdGlvbkNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgICBjdXJyZW50UXVlc3Rpb25JbmRleCxcclxuICAgIHF1ZXN0aW9uLFxyXG4gICAgYW5zd2VycyxcclxuICAgIHVzZXJBbnN3ZXIsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgY29ycmVjdEFuc3dlclxyXG4gIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsyMHB4XSBtYXgtdy1bNDAwcHhdJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1ZXN0aW9uIH19IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LTgnPlxyXG4gICAgICAgICAge2Fuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2Fuc3dlcn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGFuc3dlciwgY3VycmVudFF1ZXN0aW9uSW5kZXgpfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RydW5jYXRlJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFuc3dlciB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBRdWVzdGlvbkNhcmQ7Il0sIm5hbWVzIjpbIlF1ZXN0aW9uQ2FyZCIsImN1cnJlbnRRdWVzdGlvbkluZGV4IiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwidXNlckFuc3dlciIsIm9uQ2xpY2siLCJjb3JyZWN0QW5zd2VyIiwiZGl2IiwicCIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibWFwIiwiYW5zd2VyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/QuestionCard.tsx\n"));

/***/ })

});