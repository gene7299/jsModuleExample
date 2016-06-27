define(['jquery'],function (myjQuery){
　　　　var add = function (x,y){
           myjQuery('#result1').html("result1="+(x+y));
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});
