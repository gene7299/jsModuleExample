require('./index.css');
require.ensure(['./div1'],function(require){
   var div1 = require('./div1');
});
