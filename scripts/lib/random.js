noise.seed(pSeed);

var pseudorandom = function(id, seed) {
  var x = parseInt(id.split("x")[0]);
  var y = parseInt(id.split("x")[1]);
  return (1+noise.simplex2(x,y))/2;
}



var pseudorandomTerrain = function(id, seed) {
  var x = parseInt(id.split("x")[0])/100;
  var y = parseInt(id.split("x")[1])/100;
  
  return (1+noise.perlin2(x,y))/2;
}
