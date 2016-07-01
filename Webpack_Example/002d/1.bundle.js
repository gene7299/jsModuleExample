webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function myMath1() {
	  var $ = __webpack_require__(2);
	  var add = function (x,y){
	            $(function(){
	                $('#result1').html('result1='+(x+y));
	            });
	  　　　　　　return x+y;
	  　　　　};
	    return {
	            add: add
	          };
	}
	module.exports = myMath1();


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
]);