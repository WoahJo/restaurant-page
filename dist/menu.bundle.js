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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"card\": () => (/* binding */ card),\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"descr\": () => (/* binding */ descr),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"heading\": () => (/* binding */ heading),\n/* harmony export */   \"homepage\": () => (/* binding */ homepage),\n/* harmony export */   \"mainInfo\": () => (/* binding */ mainInfo),\n/* harmony export */   \"tab1\": () => (/* binding */ tab1),\n/* harmony export */   \"tab2\": () => (/* binding */ tab2),\n/* harmony export */   \"tab3\": () => (/* binding */ tab3),\n/* harmony export */   \"tabs\": () => (/* binding */ tabs),\n/* harmony export */   \"title\": () => (/* binding */ title)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst header = document.createElement('div');//append to content\nconst title = document.createElement('div');\nconst tabs = document.createElement('ul'); \nconst tab1 = document.createElement('li');\nconst tab2 = document.createElement('li');\nconst tab3 = document.createElement('li');\nconst mainInfo = document.createElement('div');//append to content\nconst card = document.createElement('div');\nconst heading = document.createElement('div');\nconst descr = document.createElement('div');\nconst footer = document.createElement('footer');//append to header\nfunction homepage(){\n\n    //assign classes to elements\n    header.classList.add('header');\n    title.classList.add('title');\n    tabs.classList.add('tabs');\n    mainInfo.classList.add('main-info');\n    card.classList.add('card');\n    heading.classList.add('heading');\n    descr.classList.add('descr');\n\n    //add content to elements\n    title.textContent = 'End of the Line Cafe';\n    tab1.textContent = 'Home';\n    tab2.textContent = 'Menu';\n    tab3.textContent = 'Contact';\n\n    heading.textContent = 'Some Generic Greeting!';\n    descr.textContent = 'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.';\n    footer.textContent = 'Made by WoahJo';\n\n    //append children to parent elements starting with those appened to content\n    content.append(header, mainInfo, footer);\n    tabs.append(tab1, tab2, tab3);\n    header.append(title, tabs);\n    mainInfo.appendChild(card);\n    card.append(heading, descr);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItems\": () => (/* binding */ menuItems)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction menuItems(){\n    _home__WEBPACK_IMPORTED_MODULE_0__.heading.textContent = 'Menu';\n    _home__WEBPACK_IMPORTED_MODULE_0__.descr.textContent = 'Whether you\\'re looking for a late dinner or an early breakfast, we\\'ve got teh cure to fix what ails ya.'; \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;