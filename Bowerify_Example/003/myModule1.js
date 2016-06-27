function myMath1() {

  var add = function (x,y){
            $('#result1').html('result1='+(x+y));
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
module.exports = myMath1;
