function myMath1() {

  var add = function (x,y){
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
module.exports = myMath1;
