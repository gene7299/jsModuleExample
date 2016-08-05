var $ = require('jquery');
$(function(){
  var PackageJSON = require('../package.json');
  $.ajax({
    url:PackageJSON,
    data: {
     format: 'json'
   },
   error: function() {
      console.log("An error has occurred");
   },
   success: function(data) {
     var Jsonojb = data;
     var currentVersion = Jsonojb.version;
     document.getElementById('result1').innerHTML = "version="+currentVersion;
   },
   type: 'GET'
  });
});
