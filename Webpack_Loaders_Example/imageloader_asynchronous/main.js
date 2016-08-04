require.ensure(['./div-bg1.jpg'],function(require){
  var img1 = document.createElement("img");
  img1.src = require("./div-bg1.jpg");
  document.body.appendChild(img1);
});
require.ensure(['./bg.jpg'],function(require){
  var img2 = document.createElement("img");
  img2.src = require("./bg.jpg");
  document.body.appendChild(img2);
});
