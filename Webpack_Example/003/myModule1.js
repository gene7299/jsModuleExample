(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function add(x,y){
          $(function(){
              $('#result1').html("result1="+(x+y));
          });
　　　　　 return x+y;
    }
    //    exposed public method
    return {
      add:add
    };
}));
