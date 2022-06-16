/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\nfunction homepage(){\n    const content = document.getElementById('content');\n    const header = document.createElement('div');//append to content\n    const title = document.createElement('div');\n    const tabs = document.createElement('ul'); \n    const tab1 = document.createElement('li');\n    const tab2 = document.createElement('li');\n    const tab3 = document.createElement('li');\n    const mainInfo = document.createElement('div');//append to content\n    const card = document.createElement('div');\n    const heading = document.createElement('div');\n    const descr = document.createElement('div');\n    const footer = document.createElement('footer');//append to header\n\n    //assign classes to elements\n    header.classList.add('header');\n    title.classList.add('title');\n    tabs.classList.add('tabs');\n    mainInfo.classList.add('main-info');\n    card.classList.add('card');\n    heading.classList.add('heading');\n    descr.classList.add('descr');\n\n    //add content to elements\n    title.textContent = 'End of the Line Cafe';\n    tab1.textContent = 'Home';\n    tab2.textContent = 'Menu';\n    tab3.textContent = 'Contact';\n\n    heading.textContent = 'Some Generic Greeting!';\n    descr.textContent = 'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.';\n    footer.textContent = 'Made by WoahJo';\n\n    //append children to parent elements starting with those appened to content\n    content.append(header, mainInfo, footer);\n    tabs.append(tab1, tab2, tab3);\n    header.append(title, tabs);\n    mainInfo.appendChild(card);\n    card.append(heading, descr);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.homepage;\n\n\n\n// const appendIt = () => {\n//     const card = document.getElementsByClassName('card');\n//     const newHeading = document.createElement('div');\n//     const newDescr = document.createElement('div');\n\n//     newHeading.textContent = 'Pineapple pizza - $12';\n//     newDescr.textContent = 'Why this pizza is so controversial is beyond us. The sweet-savory combination has been around for centuries. God help us should someone put honey on a ham.';\n\n//     newHeading.classList.add('heading');\n//     newDescr.classList.add('descr');\n//     card[0].appendChild(newHeading);\n//     card[0].appendChild(newDescr);\n// }\n\n// appendIt();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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