var devBuild = true;
const canDebug = true;

var mobileMode = null;

var buildNumber = "V1.9.0B-PRE1";

var item_positions = {};
var items = [];

var floors = {};

var mousePos = "0x0";

var sounds = [];

var settings = {
  "autosave": true,
}

var seedTest = false;

var spriteSize = 32;

var moveDelay = 100;

var inventorySize = [12, 6];

var toolbarSize = 9;

var safeTemperatureRange = [273, 313];

if (seedTest === true) {
  spriteSize = 1;
} else {
  spriteSize = 32;
}

const spriteSheetSize = 32;

var seed = "HAHAYES";
var pSeed = 233;

var dead = false;

var showCategory = "category.other";

var inventory = {};
for (var i = 0; i < toolbarSize; i++) {
  inventory[i] = ["", 0];
}

var inventoryFull = {};
for (var i = 0; i < inventorySize[1]; i++) {
  for (var k = 0; k < inventorySize[0]; k++) {
    inventoryFull[k + "x" + i] = ["", 0];
  }
}

var craftingStations = {};

var placeFeatures = {};

const languages = [
  "en-GB",
  "en-US",
];

var gemstones = [
  "item.gem.diamond",
  "item.gem.sapphire",
  "item.gem.jade",
  "item.gem.emerald",
  "item.gem.topaz",
  "item.gem.ruby",
];

var gemstones_collected = {
  "item.gem.diamond" : 0,
  "item.gem.sapphire" : 0,
  "item.gem.jade" : 0,
  "item.gem.emerald" : 0,
  "item.gem.topaz" : 0,
  "item.gem.ruby" : 0,
};

var gemstones_total = 0;

var skins = [
  { // Heads
    "none" : [0,480],
    "classic" : [0,384],
    "gold" : [32,384],
    "grey" : [64,384],
    "blue" : [96,384],
    "green" : [128,384],
    "purple" : [160,384],
    "clean" : [192,384],
    "orange" : [224,384],
    "yellow" : [256,384],
  },
  { // Bodies
    "none" : [0,480],
    "classic" : [0,416],
    "gold" : [32,416],
    "grey" : [64,416],
    "blue" : [96,416],
    "green" : [128,416],
    "purple" : [160,416],
    "clean" : [192,416],
    "orange" : [224,416],
    "yellow" : [256,416],
  },
  { // Legs
    "none" : [0,480],
    "classic" : [0,448],
    "gold" : [32,448],
    "grey" : [64,448],
    "blue" : [96,448],
    "green" : [128,448],
    "purple" : [160,448],
    "clean" : [192,448],
    "orange" : [224,448],
    "yellow" : [256,448],
  },
  { // Accessories
    "none" : [0,480],
    "frankenstein" : [32,480],
    "christmas" : [64,480],
    "debug-white" : [0,128],
    "debug-red" : [32,128],
    "debug-orange" : [64,128],
    "debug-yellow" : [96,128],
    "debug-green" : [128,128],
    "debug-aqua" : [160,128],
    "debug-blue" : [192,128],
    "debug-pink" : [224,128],
  },
];

var debugModeItems = [
  ["item.tool.debug", 1],
  ["item.rocket", 1],
  ["item.tank.gas.oxygen", 999],
  ["item.tank.fluid.thermogel", 999],
  ["item.tank.fluid.coolant", 999],
];

var debugWord = "turtledebug";
var debugWordBuffer = Array(debugWord.length);