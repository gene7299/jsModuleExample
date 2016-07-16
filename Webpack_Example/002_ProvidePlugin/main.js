//global.$ = require('jquery');
var math1 = require('./myModule1');

require(['./myModule2'], function (math2){
　　　 console.log(math2.add(5,6));
　　});

console.log(math1.add(1,5));
