noise.seed(pSeed);

var randRes = 400;

var pseudorandom = function(id, seed) {
  var x = parseInt(id.split("x")[0]);
  var y = parseInt(id.split("x")[1]);
  return (1+noise.simplex2(x,y))/2;
}

var pseudorandomTerrain = function(id, seed) {
  var x = parseInt(id.split("x")[0])/randRes;
  var y = parseInt(id.split("x")[1])/randRes;
  
  return (1+noise.perlin2(x,y))/2;
}