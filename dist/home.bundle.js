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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _diner_maria_orlova_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diner-maria-orlova.jpg */ \"./src/diner-maria-orlova.jpg\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n \n\n\nfunction heading (id, text) {\n    const greeting = document.createElement('div');\n    greeting.setAttribute('class', id);\n    greeting.textContent = text; \n    return greeting;\n}\n\nfunction info (id, text) {\n    const info = document.createElement('div');\n    info.setAttribute('class', id); \n    info.textContent = text;\n    return info;\n}\n\nfunction image(){\n    const image = document.createElement('img');\n    image.setAttribute('class', 'img-head');\n    image.src = _diner_maria_orlova_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    return image;\n}\n\nfunction home() {\n    const card = document.getElementsByClassName('card')[0];\n    card.textContent = '';\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');\n    const imageHead = image();\n    const greeting = heading('heading', 'Welcome.');\n    const descr = info('descr', \n    'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.' \n    ); \n    card.append(imageHead, greeting, descr); \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n// function clearCard() {\n//   const card = document.getElementsByClassName('card')[0];\n//       while (card.lastChild){\n//           card.removeChild(card.lastChild);\n//       }\n// };\n\nfunction createHeader(id, text){\n    const header = document.createElement('div');\n    header.setAttribute('class', id);\n    const title = document.createElement('div');\n    title.setAttribute('class', 'title');\n    title.textContent = text; \n    header.appendChild(title);\n    return header;\n  };\n  \n  function createTabs(id, name) {\n    const tab = document.createElement('li');\n    tab.setAttribute('class', id);\n    tab.textContent = name;\n    return tab;\n  };\n  \n  function createNav(id) {\n    const nav = document.createElement('ul');\n    nav.setAttribute('class', id);\n    const homeTab = createTabs('tab1', 'Home');\n    const menuTab = createTabs('tab2', 'Menu');\n    const contactTab = createTabs('tab3', 'Contact');\n    \n    nav.append(homeTab, menuTab, contactTab);\n    return nav;\n  };\n  function createCard(id){\n    const card = document.createElement('div');\n    card.setAttribute('class', 'card');  \n    return card;\n  };\n  \n  function createFooter(text) {\n    const footer = document.createElement('footer');\n    footer.textContent = text;\n    return footer;\n  };\n  \n  function createMain(id){\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');  \n    return mainInfo;\n  }\n  \n  function loadPage(){\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'End of the Line Cafe');\n    const tabs = createNav('tabs');\n    const footer = createFooter('Made by WoahJo');\n    const mainInfo = createMain('main-info');\n    const card = createCard('card');\n    \n    \n    content.append(header, mainInfo, footer);\n    mainInfo.appendChild(card);\n    header.appendChild(tabs);\n  };\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/diner-maria-orlova.jpg":
/*!************************************!*\
  !*** ./src/diner-maria-orlova.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7637c0d6a9557e457db6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/diner-maria-orlova.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;