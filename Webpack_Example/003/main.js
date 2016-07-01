
var math1 = require('./myModule1');
console.log(math1.add(1,5));


require(['./myModule1'], function (math1){
    console.log(math1.add(1,5));
  });


require.ensure('./myModule1',function(require){
  var math1 = require('./myModule1');
  console.log(math1.add(1,5));
});
