/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["more_js_lazy-compilation-proxy"],{

/***/ "../../node_modules/webpack/hot/lazy-compilation-web.js?http%3A%2F%2Flocalhost%3A39601%2Flazy-compilation-using-":
/*!***********************************************************************************************************************!*\
  !*** ../../node_modules/webpack/hot/lazy-compilation-web.js?http%3A%2F%2Flocalhost%3A39601%2Flazy-compilation-using- ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("var __resourceQuery = \"?http%3A%2F%2Flocalhost%3A39601%2Flazy-compilation-using-\";\n/* global __resourceQuery */\n\n\n\nif (typeof EventSource !== \"function\") {\n\tthrow new Error(\n\t\t\"Environment doesn't support lazy compilation (requires EventSource)\"\n\t);\n}\n\nvar urlBase = decodeURIComponent(__resourceQuery.slice(1));\nvar activeEventSource;\nvar activeKeys = new Map();\nvar errorHandlers = new Set();\n\nvar updateEventSource = function updateEventSource() {\n\tif (activeEventSource) activeEventSource.close();\n\tif (activeKeys.size) {\n\t\tactiveEventSource = new EventSource(\n\t\t\turlBase + Array.from(activeKeys.keys()).join(\"@\")\n\t\t);\n\t\tactiveEventSource.onerror = function (event) {\n\t\t\terrorHandlers.forEach(function (onError) {\n\t\t\t\tonError(\n\t\t\t\t\tnew Error(\n\t\t\t\t\t\t\"Problem communicating active modules to the server: \" +\n\t\t\t\t\t\t\tevent.message +\n\t\t\t\t\t\t\t\" \" +\n\t\t\t\t\t\t\tevent.filename +\n\t\t\t\t\t\t\t\":\" +\n\t\t\t\t\t\t\tevent.lineno +\n\t\t\t\t\t\t\t\":\" +\n\t\t\t\t\t\t\tevent.colno +\n\t\t\t\t\t\t\t\" \" +\n\t\t\t\t\t\t\tevent.error\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t};\n\t} else {\n\t\tactiveEventSource = undefined;\n\t}\n};\n\nexports.keepAlive = function (options) {\n\tvar data = options.data;\n\tvar onError = options.onError;\n\tvar active = options.active;\n\tvar module = options.module;\n\terrorHandlers.add(onError);\n\tvar value = activeKeys.get(data) || 0;\n\tactiveKeys.set(data, value + 1);\n\tif (value === 0) {\n\t\tupdateEventSource();\n\t}\n\tif (!active && !module.hot) {\n\t\tconsole.log(\n\t\t\t\"Hot Module Replacement is not enabled. Waiting for process restart...\"\n\t\t);\n\t}\n\n\treturn function () {\n\t\terrorHandlers.delete(onError);\n\t\tsetTimeout(function () {\n\t\t\tvar value = activeKeys.get(data);\n\t\t\tif (value === 1) {\n\t\t\t\tactiveKeys.delete(data);\n\t\t\t\tupdateEventSource();\n\t\t\t} else {\n\t\t\t\tactiveKeys.set(data, value - 1);\n\t\t\t}\n\t\t}, 1000);\n\t};\n};\n\n\n//# sourceURL=webpack:///../../node_modules/webpack/hot/lazy-compilation-web.js?");

/***/ }),

/***/ "./more.js!lazy-compilation-proxy":
/*!****************************************!*\
  !*** lazy-compilation-proxy ./more.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var client = __webpack_require__(/*! ../../node_modules/webpack/hot/lazy-compilation-web.js?http%3A%2F%2Flocalhost%3A39601%2Flazy-compilation-using- */ \"../../node_modules/webpack/hot/lazy-compilation-web.js?http%3A%2F%2Flocalhost%3A39601%2Flazy-compilation-using-\")\nvar data = \"/root/code/webpack5-test/src/lazy-compilation/more.js\";\nvar resolveSelf, onError;\nmodule.exports = new Promise(function(resolve, reject) { resolveSelf = resolve; onError = reject; });\nif (module.hot) {\n\tmodule.hot.accept();\n\tif (module.hot.data && module.hot.data.resolveSelf) module.hot.data.resolveSelf(module.exports);\n\tmodule.hot.dispose(function(data) { data.resolveSelf = resolveSelf; dispose(data); });\n}\nvar dispose = client.keepAlive({ data: data, active: false, module: module, onError: onError });\n\n//# sourceURL=webpack:///lazy-compilation-proxy_./more.js?");

/***/ })

}]);