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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction contact() {\n    const contactHead = document.createElement('div');\n    const contactInfo = document.createElement('div');\n    \n    contactHead.textContent = 'Reach out!';\n    contactInfo.textContent = 'Wanna get in touch? Give us a call at 555-555-5555';\n\n    contactHead.classList.add('heading');\n    contactInfo.classList.add('descr');\n\n    _home__WEBPACK_IMPORTED_MODULE_0__.card.append(contactHead, contactInfo);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"card\": () => (/* binding */ card),\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"descr\": () => (/* binding */ descr),\n/* harmony export */   \"footer\": () => (/* binding */ footer),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"heading\": () => (/* binding */ heading),\n/* harmony export */   \"homepage\": () => (/* binding */ homepage),\n/* harmony export */   \"mainInfo\": () => (/* binding */ mainInfo),\n/* harmony export */   \"tab1\": () => (/* binding */ tab1),\n/* harmony export */   \"tab2\": () => (/* binding */ tab2),\n/* harmony export */   \"tab3\": () => (/* binding */ tab3),\n/* harmony export */   \"tabs\": () => (/* binding */ tabs),\n/* harmony export */   \"title\": () => (/* binding */ title)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst header = document.createElement('div');//append to content\nconst title = document.createElement('div');\nconst tabs = document.createElement('ul'); \nconst tab1 = document.createElement('li');\nconst tab2 = document.createElement('li');\nconst tab3 = document.createElement('li');\nconst mainInfo = document.createElement('div');//append to content\nconst card = document.createElement('div');\nconst heading = document.createElement('div');\nconst descr = document.createElement('div');\nconst footer = document.createElement('footer');//append to header\nfunction homepage(){\n\n    //assign classes to elements\n    header.classList.add('header');\n    title.classList.add('title');\n    tabs.classList.add('tabs');\n    mainInfo.classList.add('main-info');\n    card.classList.add('card');\n    heading.classList.add('heading');\n    descr.classList.add('descr');\n\n    //add content to elements\n    title.textContent = 'End of the Line Cafe';\n    tab1.textContent = 'Home';\n    tab2.textContent = 'Menu';\n    tab3.textContent = 'Contact';\n\n    heading.textContent = 'Some Generic Greeting!';\n    descr.textContent = 'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.';\n    footer.textContent = 'Made by WoahJo';\n\n    //append children to parent elements starting with those appened to content\n    content.append(header, mainInfo, footer);\n    tabs.append(tab1, tab2, tab3);\n    header.append(title, tabs);\n    mainInfo.appendChild(card);\n    card.append(heading, descr);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.homepage()\n\nconst menuToggle = () => {\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab1.style.color = \"white\";\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab2.style.color = \"white\";\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab3.style.color = \"white\";\n}\n\nconst clearPage = () => {\n    while (_home__WEBPACK_IMPORTED_MODULE_0__.card.lastChild){\n        _home__WEBPACK_IMPORTED_MODULE_0__.card.removeChild(_home__WEBPACK_IMPORTED_MODULE_0__.card.lastChild);\n    }\n}\n\n_home__WEBPACK_IMPORTED_MODULE_0__.title.addEventListener('click', () => {\n    clearPage();\n    _home__WEBPACK_IMPORTED_MODULE_0__.homepage();\n})\n\n_home__WEBPACK_IMPORTED_MODULE_0__.tab1.addEventListener('click', () => {\n    clearPage();\n    _home__WEBPACK_IMPORTED_MODULE_0__.homepage();\n    menuToggle();\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab1.style.color = \"orange\";    \n});\n\n_home__WEBPACK_IMPORTED_MODULE_0__.tab2.addEventListener('click', function(){\n    clearPage();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n    menuToggle();\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab2.style.color = \"orange\";\n});\n\n_home__WEBPACK_IMPORTED_MODULE_0__.tab3.addEventListener('click', () => {\n    clearPage();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n    menuToggle();\n    _home__WEBPACK_IMPORTED_MODULE_0__.tab3.style.color = \"orange\";\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction menu(){\n    while (_home__WEBPACK_IMPORTED_MODULE_0__.card.lastChild){\n        _home__WEBPACK_IMPORTED_MODULE_0__.card.removeChild(_home__WEBPACK_IMPORTED_MODULE_0__.card.lastChild);\n    };\n\n    const menuHead = document.createElement('div');\n    const menuInfo = document.createElement('div');\n\n    menuHead.textContent = 'Menu';\n    menuInfo.textContent = 'Whether you\\'re looking for a late dinner or an early breakfast, we\\'ve got the cure to fix what ails ya.'; \n\n    const menuItem1 = document.createElement('div');\n    const menuItem2 = document.createElement('div');\n    const menuItem3 = document.createElement('div');\n    const menuItem4 = document.createElement('div');\n\n    const menuDesc1 = document.createElement('div');\n    const menuDesc2 = document.createElement('div');\n    const menuDesc3 = document.createElement('div');\n    const menuDesc4 = document.createElement('div');\n\n    menuHead.classList.add('heading');\n    menuItem1.classList.add('menu-item');\n    menuItem2.classList.add('menu-item');\n    menuItem3.classList.add('menu-item');\n    menuItem4.classList.add('menu-item');\n    \n    menuInfo.classList.add('descr');\n    menuDesc1.classList.add('descr');\n    menuDesc2.classList.add('descr');\n    menuDesc3.classList.add('descr');\n    menuDesc4.classList.add('descr');\n\n    _home__WEBPACK_IMPORTED_MODULE_0__.card.append(menuHead, menuInfo, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3, menuItem4, menuDesc4);\n\n    menuItem1.textContent = 'Grease-cakes w/ Maple - $12';\n    menuDesc1.textContent = 'Pancakes cooked in enough oil to fry cow and drownsed in locally-tapped maple. Comes with a side of sausage and 2 eggs.'\n\n    menuItem2.textContent = 'Soup... Surprise! - $5';\n    menuDesc2.textContent = 'Get a bowl full of whatever didn\\'t sell so well the night before pureed and salted. It\\'s still good, we swear. Comes with toast.';\n\n    menuItem3.textContent = '';\n    menuDesc3.textContent = '';\n\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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