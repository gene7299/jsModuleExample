require('./div.css');
document.getElementById("resultA").innerHTML = "A:"+Math.floor(Math.random(10)*1000);
document.getElementById("resultB").innerHTML = "B:"+Math.floor(Math.random(10)*1000);

require('./divA.css');

require.ensure(['./divB.css'],function(require){
     require('./divB.css');
});
