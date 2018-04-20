var item_positions = {};
var items = [];

var seedTest = false;

var spriteSize = 32;

var inventorySize = [12,6];

var toolbarSize = 9;

if (seedTest === true) {
  spriteSize = 1;
} else {
  spriteSize = 32;
}

const spriteSheetSize = 32;

const spritemaxx = 7;
const spritemaxy = 1;

var seed = "GAF69";
var pSeed = 4635;
//var pSeed = Math.floor(Math.random() * 9999) + 1;
//console.log("SEED: " + pSeed);

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
  },
];
