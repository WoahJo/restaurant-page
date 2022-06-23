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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n\n\nfunction menu(){\n    while (home.card.lastChild){\n        home.card.removeChild(home.card.lastChild);\n    };\n\n    const menuHead = document.createElement('div');\n    const menuInfo = document.createElement('div');\n\n    \n    const menuItem1 = document.createElement('div');\n    const menuItem2 = document.createElement('div');\n    const menuItem3 = document.createElement('div');\n    const menuItem4 = document.createElement('div');\n    \n    const menuDesc1 = document.createElement('div');\n    const menuDesc2 = document.createElement('div');\n    const menuDesc3 = document.createElement('div');\n    const menuDesc4 = document.createElement('div');\n    \n    menuHead.classList.add('heading');\n    menuItem1.classList.add('menu-item');\n    menuItem2.classList.add('menu-item');\n    menuItem3.classList.add('menu-item');\n    menuItem4.classList.add('menu-item');\n    \n    menuInfo.classList.add('descr');\n    menuDesc1.classList.add('descr');\n    menuDesc2.classList.add('descr');\n    menuDesc3.classList.add('descr');\n    menuDesc4.classList.add('descr');\n    \n    home.card.append(menuHead, menuInfo, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3, menuItem4, menuDesc4);\n    \n    menuHead.textContent = 'Menu';\n    menuInfo.textContent = 'Whether you\\'re looking for a late dinner or an early breakfast, we\\'ve got the cure to fix what ails ya.'; \n\n    menuItem1.textContent = 'Grease-cakes w/ Maple - $12';\n    menuDesc1.textContent = 'Pancakes cooked in enough oil to fry a bull and drowned in locally-tapped maple. Comes with a side of sausage and 2 eggs.'\n\n    menuItem2.textContent = 'Soup... Surprise! - $5';\n    menuDesc2.textContent = 'Get a bowl full of whatever didn\\'t sell so well the night before pureed and salted. It\\'s still good, we swear. Comes with toast.';\n\n    menuItem3.textContent = 'The Cow Lick - $13';\n    menuDesc3.textContent = 'Fresh beef straight from the slaughter to your plate... with a few stops in between. Blanket your beautiful beef baby in a bounty of bubbling brie. We\\'re kiddin\\', it\\'s just Kraft Singles. Comes with fries and a drink.';\n\n    menuItem4.textContent = '';\n    menuDesc4.textContent = '';\n\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;