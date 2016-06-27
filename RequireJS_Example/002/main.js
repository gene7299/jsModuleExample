console.log("It's Main Module");

require.config({
      paths: {
           "jquery" : "jquery-1.11.2.min",
　　　　　　"myModule1": "myModule1",
　　　　　　"myModule2": "myModule2",
　　　　},
　　　　shim: {
　　　　　　'myModule2':{
              deps: [''],
              init: function(x){
                  return {
                    math2: myMath2
                  };
              }
　　　　　　}
　　　　}
　　});

require(['myModule1', 'myModule2'], function (math1, math2){
　　　 console.log(math1.add(1,5));

      //if shim config is not available
      //console.log(math2().add(5,6));

      //if exports is specified in shim config
      console.log(math2.math2().add(5,6));

　　});
