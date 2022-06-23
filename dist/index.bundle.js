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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n// import { menu } from './menu'\n// import { contact } from './contact'\n\n\n(0,_load__WEBPACK_IMPORTED_MODULE_1__.loadPage)()\n;(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)()\n\n// const menuToggle = () => {\n//     home.tab1.style.color = \"white\";\n//     home.tab2.style.color = \"white\";\n//     home.tab3.style.color = \"white\";\n// }\n\n// const clearPage = () => {\n//     while (home.card.lastChild){\n//         home.card.removeChild(home.card.lastChild);\n//     }\n// }\n// const title = document.getElementsByClassName('title'); \n// const homeTab = document.getElementsByClassName('tab1');\n// const menuTab = document.getElementsByClassName('tab2');\n// const aboutTab = document.getElementsByClassName('tab3');\n\n// title[0].addEventListener('click', () => {\n//     clearPage();\n//     home.homepage();\n// })\n\n// home.tab1.addEventListener('click', () => {\n//     clearPage();\n//     home.homepage();\n//     menuToggle();\n//     home.tab1.style.color = \"orange\";    \n// });\n\n// home.tab2.addEventListener('click', function(){\n//     clearPage();\n//     menu();\n//     menuToggle();\n//     home.tab2.style.color = \"orange\";\n// });\n\n// home.tab3.addEventListener('click', () => {\n//     clearPage();\n//     contact();\n//     menuToggle();\n//     home.tab3.style.color = \"orange\";\n// });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction createHeader(id, text){\n    const header = document.createElement('div');\n    header.setAttribute('class', id);\n    const title = document.createElement('div');\n    title.setAttribute('class', 'title');\n    title.textContent = text; \n    header.appendChild(title);\n    return header;\n  };\n  \n  function createTabs(id, name) {\n    const tab = document.createElement('li');\n    tab.setAttribute('class', id);\n    tab.textContent = name;\n    return tab;\n  };\n  \n  function createNav(id) {\n    const nav = document.createElement('ul');\n    nav.setAttribute('class', id);\n    const homeTab = createTabs('tab1', 'Home');\n    const menuTab = createTabs('tab2', 'Menu');\n    const contactTab = createTabs('tab3', 'Contact');\n    \n    nav.append(homeTab, menuTab, contactTab);\n    return nav;\n  };\n  function createCard(id){\n    const card = document.createElement('div');\n    card.setAttribute('class', 'card');  \n    return card;\n  };\n  \n  function createFooter(text) {\n    const footer = document.createElement('footer');\n    footer.textContent = text;\n    return footer;\n  };\n  \n  function createMain(id){\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');  \n    return mainInfo;\n  }\n  \n  function loadPage(){\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'End of the Line Cafe');\n    const tabs = createNav('tabs');\n    const footer = createFooter('Made by WoahJo');\n    const mainInfo = createMain('main-info');\n    const card = createCard('card');\n    \n    \n    content.append(header, mainInfo, footer);\n    mainInfo.appendChild(card);\n    header.appendChild(tabs);\n  };\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

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