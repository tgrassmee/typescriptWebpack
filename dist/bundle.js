/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ (() => {

eval("console.log('Hi');\nimgUrl=['https://bilder.t-online.de/b/84/93/82/46/id_84938246/920/tid_da/eichhoernchen-geert-weggen-zeigt-die-welt-der-kleinen-nager-.jpg',\n    'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_1280.jpg',\n    'https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg',\n    'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg'\n    ]\n\nsetInterval(function (){\n    const random = Math.floor(Math.random() * imgUrl.length);\n    let bild=imgUrl[random]\n    document.getElementById('img').style.backgroundImage=\"url(\"+bild+\")\";\n\n\n},3000)\n\n\n\n//# sourceURL=webpack://typescriptwebpack/./src/javascript/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/index.js"]();
/******/ 	
/******/ })()
;