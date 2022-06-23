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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCard\": () => (/* binding */ clearCard),\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction clearCard() {\n  const card = document.getElementsByClassName('card')[0];\n      while (card.lastChild){\n          card.removeChild(card.lastChild);\n      }\n};\n\nfunction createHeader(id, text){\n    const header = document.createElement('div');\n    header.setAttribute('class', id);\n    const title = document.createElement('div');\n    title.setAttribute('class', 'title');\n    title.textContent = text; \n    header.appendChild(title);\n    return header;\n  };\n  \n  function createTabs(id, name) {\n    const tab = document.createElement('li');\n    tab.setAttribute('class', id);\n    tab.textContent = name;\n    return tab;\n  };\n  \n  function createNav(id) {\n    const nav = document.createElement('ul');\n    nav.setAttribute('class', id);\n    const homeTab = createTabs('tab1', 'Home');\n    const menuTab = createTabs('tab2', 'Menu');\n    const contactTab = createTabs('tab3', 'Contact');\n    \n    nav.append(homeTab, menuTab, contactTab);\n    return nav;\n  };\n  function createCard(id){\n    const card = document.createElement('div');\n    card.setAttribute('class', 'card');  \n    return card;\n  };\n  \n  function createFooter(text) {\n    const footer = document.createElement('footer');\n    footer.textContent = text;\n    return footer;\n  };\n  \n  function createMain(id){\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');  \n    return mainInfo;\n  }\n  \n  function loadPage(){\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'End of the Line Cafe');\n    const tabs = createNav('tabs');\n    const footer = createFooter('Made by WoahJo');\n    const mainInfo = createMain('main-info');\n    const card = createCard('card');\n    \n    \n    content.append(header, mainInfo, footer);\n    mainInfo.appendChild(card);\n    header.appendChild(tabs);\n  };\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\nfunction menuHead (id, text){\n    const heading = document.createElement('div');\n    heading.setAttribute('class', id);\n    heading.textContent = text;\n    return heading;\n}\n\nfunction menuDesc(id, text) {\n    const descr = document.createElement('div');\n    descr.setAttribute('class', id);\n    descr.textContent = text; \n    return descr; \n}\n\nfunction itemTitle (id, text) {\n    const menuItem = document.createElement('div');\n    menuItem.setAttribute('class', id);\n    menuItem.textContent = text;\n    return menuItem;\n}\n\nfunction itemDescr (id, text) {\n    const itemInfo = document.createElement('div');\n    itemInfo.setAttribute('class', id);\n    itemInfo.textContent = text;\n    return itemInfo;\n}\n\nfunction menu () {\n    const card = document.getElementsByClassName('card')[0]; \n    (0,_load__WEBPACK_IMPORTED_MODULE_0__.clearCard)();\n    const heading = menuHead('heading', 'Menu');\n    const descr = menuDesc('descr', \n    'Whether you\\'re looking for a late dinner or an early breakfast, we\\'ve got the cure to fix what ails ya.'\n    );\n\n    const menuItem1 = itemTitle('menu-item', 'Grease-cakes w/ Maple - $12');\n    const menuItem2 = itemTitle('menu-item', 'Soup... Surprise! - $5');\n    const menuItem3 = itemTitle('menu-item', 'The Cow Lick - $13');\n\n    const menuDesc1 = itemDescr('descr', 'Pancakes cooked in enough oil to fry a bull and drowned in locally-tapped maple. Comes with a side of sausage and 2 eggs.');\n    const menuDesc2 = itemDescr('descr', 'Get a bowl full of whatever didn\\'t sell so well the night before pureed and salted. It\\'s still good, we swear. Comes with toast.');\n    const menuDesc3 = itemDescr('descr', 'Fresh beef straight from the slaughter to your plate... with a few stops in between. Blanket your beautiful beef baby in a bounty of bubbling brie. We\\'re kiddin\\', it\\'s just Kraft Singles. Comes with fries and a drink.');\n    card.append(heading, descr, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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