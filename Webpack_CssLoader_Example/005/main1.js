require('./index.css');
require('./div1.css');
require.ensure(['./div1'],function(require){
   var div1 = require('./div1');
});
