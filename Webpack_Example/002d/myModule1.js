function myMath1() {
  var $ = require('jquery');
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
