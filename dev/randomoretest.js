var testbiome = "plains"
var amounttotest = 1000000;

console.log("\nBeginning random generation of " + amounttotest + " ores.\nThis may take a while, and will freeze the game whilst it is running.\n");

var testarray = []
var totaltestcount = 0;
for (var c = 0; c < amounttotest; c++) {
  testarray.push(randomOre(testbiome));
  totaltestcount += 1;
}

console.log("\n\nCompleted random generation of " + totaltestcount + " ores for biome '" + testbiome + "'.\n\n")

var testtotals = {};

for (var c = 0; c < testarray.length; c++) {
  if (testtotals[testarray[c]] === undefined) {
    testtotals[testarray[c]] = 1;
  } else {
    testtotals[testarray[c]] = testtotals[testarray[c]] + 1;
  }
}

console.log("\n\nCompleted sorting.\n\n")

var keys = Object.keys(testtotals);

for (var c = 0; c < keys.length; c++) {
  var key = keys[c];
  var value = testtotals[key];
  console.log(i18nGet(key) + " - " + value + "    (" + (value/totaltestcount)*100 + "%)");
}
console.log("Total - " + totaltestcount);