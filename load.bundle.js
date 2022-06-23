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

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction createHeader(id, text){\n    const header = document.createElement('div');\n    header.setAttribute('class', id);\n    const title = document.createElement('div');\n    title.setAttribute('class', 'title');\n    title.textContent = text; \n    header.appendChild(title);\n    return header;\n  };\n  \n  function createTabs(id, name) {\n    const tab = document.createElement('li');\n    tab.setAttribute('class', id);\n    tab.textContent = name;\n    return tab;\n  };\n  \n  function createNav(id) {\n    const nav = document.createElement('ul');\n    nav.setAttribute('class', id);\n    const homeTab = createTabs('tab1', 'Home');\n    const menuTab = createTabs('tab2', 'Menu');\n    const contactTab = createTabs('tab3', 'Contact');\n    \n    nav.append(homeTab, menuTab, contactTab);\n    return nav;\n  };\n  function createCard(id){\n    const card = document.createElement('div');\n    card.setAttribute('class', 'card');  \n    return card;\n  };\n  \n  function createFooter(text) {\n    const footer = document.createElement('footer');\n    footer.textContent = text;\n    return footer;\n  };\n  \n  function createMain(id){\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');  \n    return mainInfo;\n  }\n  \n  function loadPage(){\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'End of the Line Cafe');\n    const tabs = createNav('tabs');\n    const footer = createFooter('Made by WoahJo');\n    const mainInfo = createMain('main-info');\n    const card = createCard('card');\n    \n    \n    content.append(header, mainInfo, footer);\n    mainInfo.appendChild(card);\n    header.appendChild(tabs);\n  };\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

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
/******/ 	__webpack_modules__["./src/load.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;