function myMath2() {

  var add = function (x,y){
            $(function(){
                $('#result2').html('result2='+(x+y));
            });             
  　　　　　　return x+y;
  　　　　};
    return {
            add: add
          };
}
module.exports = myMath2;
