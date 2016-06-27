function myMath2() {

  var add = function (x,y){
            $('#result2').html("result2="+(x+y));
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
