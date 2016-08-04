/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var PackageJSON = __webpack_require__(1);
	var currentVersion = PackageJSON.version;
	document.getElementById('result1').innerHTML = currentVersion;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "webpack_cssloader_example01",
		"version": "1.0.0",
		"description": "",
		"main": "main.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"author": "",
		"license": "ISC",
		"devDependencies": {
			"json-loader": "^0.5.4"
		}
	};

/***/ }
/******/ ]);