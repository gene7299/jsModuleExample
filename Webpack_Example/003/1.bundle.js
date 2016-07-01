webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node, CommonJS-like
	        module.exports = factory(require('jquery'));
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory(root.jQuery);
	    }
	}(this, function ($) {
	    //    methods
	    function add(x,y){
	          $(function(){
	              $('#result1').html("result1="+(x+y));
	          });
	　　　　　 return x+y;
	    }
	    //    exposed public method
	    return {
	      add:add
	    };
	}));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
]);