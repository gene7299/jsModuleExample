require('./index.css');
require('./div2.css');
require.ensure(['./div2'],function(require){
   var div2 = require('./div2');
});
