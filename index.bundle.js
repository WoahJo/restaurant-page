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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contactHead (id, text) {\n    const contactHead = document.createElement('div');\n    contactHead.setAttribute('class', id);\n    contactHead.textContent = text;\n    return contactHead;\n}\n\nfunction contactInfo (id, text) {\n    const contactInfo = document.createElement('div');\n    contactInfo.setAttribute('class', id);\n    contactInfo.textContent = text; \n    return contactInfo;\n}\n\nfunction addAddress(add) {\n    const address = document.createElement('p');\n    address.textContent = add;\n    \n    return address;\n}\n\nfunction contact() {\n    const card = document.getElementsByClassName('card')[0];\n    card.textContent = '';\n    const heading = contactHead('heading', 'Reach out!');\n    const descr = contactInfo('descr', \"Wanna get in touch? Give us a call at 555-555-5555!\");\n    const address1 = addAddress('Wanna come over? Find us at: ');\n    const address2 = addAddress('2000 Standing Water Rd.');\n    const address3 = addAddress('Nirgendwo, Ga');\n    card.append(heading, descr, address1, address2, address3);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _diner_maria_orlova_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diner-maria-orlova.jpg */ \"./src/diner-maria-orlova.jpg\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n \n\n\nfunction heading (id, text) {\n    const greeting = document.createElement('div');\n    greeting.setAttribute('class', id);\n    greeting.textContent = text; \n    return greeting;\n}\n\nfunction info (id, text) {\n    const info = document.createElement('div');\n    info.setAttribute('class', id); \n    info.textContent = text;\n    return info;\n}\n\nfunction image(){\n    const image = document.createElement('img');\n    image.setAttribute('class', 'img-head');\n    image.src = _diner_maria_orlova_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    return image;\n}\n\nfunction home() {\n    const card = document.getElementsByClassName('card')[0];\n    card.textContent = '';\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');\n    const imageHead = image();\n    const greeting = heading('heading', 'Welcome.');\n    const descr = info('descr', \n    'Welcome to End of the Line Cafe! We\\'re open 25/8, so stop by anytime. We\\'ve got just the thing to fill that gaping void.' \n    ); \n    card.append(imageHead, greeting, descr); \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\n\n\n\n(0,_load__WEBPACK_IMPORTED_MODULE_3__.loadPage)();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n\nfunction tabSwitch(){\n    const homeTab = document.getElementsByClassName('tab1')[0];\n    const menuTab = document.getElementsByClassName('tab2')[0];\n    const contactTab = document.getElementsByClassName('tab3')[0];\n\n    homeTab.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.home);\n    menuTab.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.menu);\n    contactTab.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.contact);\n};\n\ntabSwitch();\n\n// const menuToggle = () => {\n//     home.tab1.style.color = \"white\";\n//     home.tab2.style.color = \"white\";\n//     home.tab3.style.color = \"white\";\n// }\n\n// const title = document.getElementsByClassName('title'); \n// const homeTab = document.getElementsByClassName('tab1');\n// const menuTab = document.getElementsByClassName('tab2');\n// const aboutTab = document.getElementsByClassName('tab3');\n\n// title[0].addEventListener('click', () => {\n//     clearPage();\n//     home.homepage();\n// })\n\n// home.tab1.addEventListener('click', () => {\n//     clearPage();\n//     home.homepage();\n//     menuToggle();\n//     home.tab1.style.color = \"orange\";    \n// });\n\n// home.tab2.addEventListener('click', function(){\n//     clearPage();\n//     menu();\n//     menuToggle();\n//     home.tab2.style.color = \"orange\";\n// });\n\n// home.tab3.addEventListener('click', () => {\n//     clearPage();\n//     contact();\n//     menuToggle();\n//     home.tab3.style.color = \"orange\";\n// });\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n// function clearCard() {\n//   const card = document.getElementsByClassName('card')[0];\n//       while (card.lastChild){\n//           card.removeChild(card.lastChild);\n//       }\n// };\n\nfunction createHeader(id, text){\n    const header = document.createElement('div');\n    header.setAttribute('class', id);\n    const title = document.createElement('div');\n    title.setAttribute('class', 'title');\n    title.textContent = text; \n    header.appendChild(title);\n    return header;\n  };\n  \n  function createTabs(id, name) {\n    const tab = document.createElement('li');\n    tab.setAttribute('class', id);\n    tab.textContent = name;\n    return tab;\n  };\n  \n  function createNav(id) {\n    const nav = document.createElement('ul');\n    nav.setAttribute('class', id);\n    const homeTab = createTabs('tab1', 'Home');\n    const menuTab = createTabs('tab2', 'Menu');\n    const contactTab = createTabs('tab3', 'Contact');\n    \n    nav.append(homeTab, menuTab, contactTab);\n    return nav;\n  };\n  function createCard(id){\n    const card = document.createElement('div');\n    card.setAttribute('class', 'card');  \n    return card;\n  };\n  \n  function createFooter(text) {\n    const footer = document.createElement('footer');\n    footer.textContent = text;\n    return footer;\n  };\n  \n  function createMain(id){\n    const mainInfo = document.createElement('div');\n    mainInfo.setAttribute('class', 'main-info');  \n    return mainInfo;\n  }\n  \n  function loadPage(){\n    const content = document.getElementById('content');\n    const header = createHeader('header', 'End of the Line Cafe');\n    const tabs = createNav('tabs');\n    const footer = createFooter('Made by WoahJo');\n    const mainInfo = createMain('main-info');\n    const card = createCard('card');\n    \n    \n    content.append(header, mainInfo, footer);\n    mainInfo.appendChild(card);\n    header.appendChild(tabs);\n  };\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\nfunction menuHead (id, text){\n    const heading = document.createElement('div');\n    heading.setAttribute('class', id);\n    heading.textContent = text;\n    return heading;\n}\n\nfunction menuDesc(id, text) {\n    const descr = document.createElement('div');\n    descr.setAttribute('class', id);\n    descr.textContent = text; \n    return descr; \n}\n\nfunction itemTitle (id, text) {\n    const menuItem = document.createElement('div');\n    menuItem.setAttribute('class', id);\n    menuItem.textContent = text;\n    return menuItem;\n}\n\nfunction itemDescr (id, text) {\n    const itemInfo = document.createElement('div');\n    itemInfo.setAttribute('class', id);\n    itemInfo.textContent = text;\n    return itemInfo;\n}\n\nfunction menu () {\n    const card = document.getElementsByClassName('card')[0]; \n    card.textContent = '';\n    const heading = menuHead('heading', 'Menu');\n    const descr = menuDesc('descr', \n    'Whether you\\'re looking for a late dinner or an early breakfast, we\\'ve got the cure to fix what ails ya.'\n    );\n\n    const menuItem1 = itemTitle('menu-item', 'Grease-cakes w/ Maple - $12');\n    const menuItem2 = itemTitle('menu-item', 'Soup... Surprise! - $5');\n    const menuItem3 = itemTitle('menu-item', 'The Cow Lick - $13');\n\n    const menuDesc1 = itemDescr('descr', 'Pancakes cooked in enough oil to fry a bull and drowned in locally-tapped maple. Comes with a side of sausage and 2 eggs.');\n    const menuDesc2 = itemDescr('descr', 'Get a bowl full of whatever didn\\'t sell so well the night before pureed and salted. It\\'s still good, we swear. Comes with toast.');\n    const menuDesc3 = itemDescr('descr', 'Fresh beef straight from the slaughter to your plate... with a few stops in between. Blanket your beautiful beef baby in a bounty of bubbling brie. We\\'re kiddin\\', it\\'s just Kraft Singles. Comes with fries and a drink.');\n    card.append(heading, descr, menuItem1, menuDesc1, menuItem2, menuDesc2, menuItem3, menuDesc3);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;