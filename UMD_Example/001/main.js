console.log("It's Main Module");

require.config({
      paths: {
           "jquery1" : "jquery",
　　　　　　"myModule1": "myModule1",
　　　　}
　　});

require(['myModule1'], function (math1){
　　　 console.log(math1.add(1,5));

　　});
