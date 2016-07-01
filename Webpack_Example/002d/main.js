require.ensure('./myModule1',function(require){
  var math1 = require('./myModule1');
  console.log(math1.add(1,5));
});

require(['./myModule2'], function (math2){
　　　 console.log(math2.add(5,6));
　　});
