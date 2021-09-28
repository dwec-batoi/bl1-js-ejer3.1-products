/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nconst Store = __webpack_require__(/*! ./store.class */ \"./src/store.class.js\");\n\n// Creamos un nuevo almacén con id 1\n\n// Añadimos los 4 objetos que nos piden\n\n// Hacemos las 5 modificaciones\n\n\n// Mostramos por consola todo lo que nos piden\n\n// Eliminamos los 2 productos\n\n// Mostramos por consola todo lo que nos piden\n\n\n\n//# sourceURL=webpack://products/./src/index.js?");

/***/ }),

/***/ "./src/product.class.js":
/*!******************************!*\
  !*** ./src/product.class.js ***!
  \******************************/
/***/ ((module) => {

eval("// Aquí la clase Product\n\nmodule.exports = Product;\n\n\n//# sourceURL=webpack://products/./src/product.class.js?");

/***/ }),

/***/ "./src/store.class.js":
/*!****************************!*\
  !*** ./src/store.class.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Product = __webpack_require__(/*! ./product.class */ \"./src/product.class.js\");\n\n// Aquí la clase Store\n\nmodule.exports = Store;\n\n\n//# sourceURL=webpack://products/./src/store.class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;