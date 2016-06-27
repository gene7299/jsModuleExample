(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var math1 = require('./myModule1');
var math2 = require('./myModule2');

console.log(math1().add(1,5));
console.log(math2().add(5,6));

},{"./myModule1":2,"./myModule2":3}],2:[function(require,module,exports){
function myMath1() {

  var add = function (x,y){
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
module.exports = myMath1;

},{}],3:[function(require,module,exports){
function myMath2() {
  
  var add = function (x,y){
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
module.exports = myMath2;

},{}]},{},[1]);
