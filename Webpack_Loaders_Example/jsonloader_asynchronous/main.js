require.ensure(['./package.json'],function(require){
  var PackageJSON = require('./package.json');
  var currentVersion = PackageJSON.version;
  document.getElementById('result1').innerHTML = currentVersion;
});
