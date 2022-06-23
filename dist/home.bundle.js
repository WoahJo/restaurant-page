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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n// export const content = document.getElementById('content');\n// export const header = document.createElement('div');//append to content\n// export const title = document.createElement('div');\n// export const tabs = document.createElement('ul'); \n// export const tab1 = document.createElement('li');\n// export const tab2 = document.createElement('li');\n// export const tab3 = document.createElement('li');\n// export const mainInfo = document.createElement('div');//append to content\n// export const card = document.createElement('div');\n// export const heading = document.createElement('div');\n// export const descr = document.createElement('div');\n// export const footer = document.createElement('footer');//append to header\n\n// function homepage(){\n//     //assign classes to elements\n//     header.classList.add('header');\n//     title.classList.add('title');\n//     tabs.classList.add('tabs');\n//     mainInfo.classList.add('main-info');\n//     card.classList.add('card');\n//     heading.classList.add('heading');\n//     descr.classList.add('descr');\n\n//     //add content to elements\n//     title.textContent = 'End of the Line Cafe';\n//     tab1.textContent = 'Home';\n//     tab2.textContent = 'Menu';\n//     tab3.textContent = 'Contact';\n\n//     heading.textContent = 'Some Generic Greeting!';\n//     descr.textContent = 'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.';\n//     footer.textContent = 'Made by WoahJo';\n\n//     //append children to parent elements starting with those appened to content\n//     content.append(header, mainInfo, footer);\n//     tabs.append(tab1, tab2, tab3);\n//     header.append(title, tabs);\n//     mainInfo.appendChild(card);\n//     card.append(heading, descr);\n\n    \n\n// };\n\nfunction heading (id, text) {\n    const greeting = document.createElement('div');\n    greeting.setAttribute('class', id);\n    greeting.textContent = text; \n    return greeting;\n}\n\nfunction info (id, text) {\n    const info = document.createElement('div');\n    info.setAttribute('class', id); \n    info.textContent = text;\n    return info;\n}\n\nfunction home() {\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');\n    const card = document.getElementsByClassName('card')[0];\n    const content = document.getElementById('content');\n    const greeting = heading('heading', 'Welcome.');\n    const descr = info('descr', \n    'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.' \n    ); \n    card.append(greeting, descr); \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;