var modItems = {
  // Copper
  "item.ore.copper" : [0,7],
  "item.bar.copper" : [0,6],
  "item.plate.copper" : [0,8],
  "item.rod.copper" : [0,9],

  // Iron
  "item.ore.iron" : [1,7],
  "item.bar.iron" : [1,6],
  "item.plate.iron" : [1,8],
  "item.rod.iron" : [1,9],

  // Gold
  "item.ore.gold" : [2,7],
  "item.bar.gold" : [2,6],
  "item.plate.gold" : [2,8],
  "item.rod.gold" : [2,9],

  // Tin
  "item.ore.tin" : [3,7],
  "item.bar.tin" : [3,6],
  "item.plate.tin" : [3,8],
  "item.rod.tin" : [3,9],

  // Steel
  "item.bar.steel" : [4,6],
  "item.plate.steel" : [4,8],
  "item.rod.steel" : [4,9],

  // SuperAlloy
  "item.bar.superalloy" : [5,6],
  "item.plate.superalloy" : [5,8],
  "item.rod.superalloy" : [5,9],

  // Cobalt
  "item.ore.cobalt" : [6,7],
  "item.bar.cobalt" : [6,6],
  "item.plate.cobalt" : [6,8],
  "item.rod.cobalt" : [6,9],

  // Titanium
  "item.ore.titanium" : [7,7],
  "item.bar.titanium" : [7,6],
  "item.plate.titanium" : [7,8],
  "item.rod.titanium" : [7,9],

  // Osmium
  "item.ore.osmium" : [8,7],
  "item.bar.osmium" : [8,6],
  "item.plate.osmium" : [8,8],
  "item.rod.osmium" : [8,9],

  // Uranium
  "item.ore.uranium" : [9,7],
  "item.bar.uranium" : [9,6],
  "item.plate.uranium" : [9,8],
  "item.rod.uranium" : [9,9],

  // Silver
  "item.ore.silver" : [10,7],
  "item.bar.silver" : [10,6],
  "item.plate.silver" : [10,8],
  "item.rod.silver" : [10,9],

  // Lead
  "item.ore.lead" : [11,7],
  "item.bar.lead" : [11,6],
  "item.plate.lead" : [11,8],
  "item.rod.lead" : [11,9],

  // Invar
  "item.bar.invar" : [12,6],
  "item.plate.invar" : [12,8],
  "item.rod.invar" : [12,9],

  // Nickel
  "item.ore.nickel" : [13,7],
  "item.bar.nickel" : [13,6],
  "item.plate.nickel" : [13,8],
  "item.rod.nickel" : [13,9],
  
  // Bronze
  "item.bar.bronze" : [14,6],
  "item.plate.bronze" : [14,8],
  "item.rod.bronze" : [14,9],

  // Pickaxes
  "item.tool.pick.iron" : [0,10],
  "item.tool.pick.gold" : [1,10],
  "item.tool.pick.cobalt" : [2,10],
  "item.tool.pick.titanium" : [3,10],

  // Gemstones
  "item.gem.diamond" : [0,2],
  "item.gem.sapphire" : [1,2],
  "item.gem.jade" : [2,2],
  "item.gem.emerald" : [3,2],
  "item.gem.topaz" : [4,2],
  "item.gem.ruby" : [5,2],

  // Biome Ingots
  "item.bar.biome.snow" : [6,2],
  "item.bar.biome.tundra" : [7,2],
  "item.bar.biome.plains" : [8,2],
  "item.bar.biome.swamp" : [9,2],
  "item.bar.biome.savannah" : [10,2],
  "item.bar.biome.desert" : [11,2],

  // Axes
  "item.tool.axe.copper" : [0,11],
  "item.tool.axe.tin" : [1,11],
  "item.tool.axe.osmium" : [2,11],
  "item.tool.axe.steel" : [3,11],

  // Rocket
  "item.rocket" : [4,5],
  "item.rocket.leg" : [7,5],
  "item.rocket.body" : [8,5],
  "item.rocket.engine" : [9,5],
  "item.rocket.nose" : [10,5],
  "item.rocket.fin" : [11,5],
  
  // Tanks
  "item.tank.gas" : [0, 20],
  "item.tank.gas.air" : [1, 20],
  "item.tank.gas.oxygen" : [4, 20],
  "item.tank.gas.hydrogen" : [2, 20],
  "item.tank.gas.nitrogen" : [3, 20],
  "item.tank.fluid" : [19, 19],
  "item.tank.fluid.water" : [19, 19],
  "item.tank.fluid.fuel" : [19, 19],
  
  // Crafting Stations
  "item.station.furnace" : [0, 18],
  "item.station.press" : [1, 18],
  "item.station.rollingmachine" : [2, 18],
  "item.station.electrolyser" : [3, 18],
  "item.station.reactionchamber" : [4, 18],
  "item.station.airfilter" : [5, 18],
  "item.station.rocketstation" : [6, 18],
  
  // Miscellaneous
  "item.coal" : [0,5],
  "item.stick" : [1,5],
  "item.wood" : [2,5],
  "item.stone" : [3,5],
  "item.plank" : [5,5],
  "item.brick" : [6,5],
  "item.future" : [19,19],
  "item.electrolyser" : [19,19],
  "item.filter" : [19,19],
  "item.house" : [3,3],
  "item.concrete" : [0,16],
  "item.brick_floor" : [1,16],
  "item.wood_floor" : [2,16],
  "item.ice" : [12,5],
};

var modOres = {
  "item.stone" : [20, ["snow","tundra","plains","swamp","savannah","desert"], 1],
  "item.coal" : [7, ["snow","tundra","plains","swamp","savannah","desert"], 1],

  "item.ore.osmium" : [5, ["snow"], 2],
  "item.ore.cobalt" : [3, ["snow"], 3],
  "item.gem.diamond" : [2, ["snow"], 4],

  "item.ore.tin" : [5, ["tundra"], 2],
  "item.ore.silver" : [3, ["tundra"], 3],
  "item.gem.sapphire" : [2, ["tundra"], 4],

  "item.ore.copper" : [5, ["plains"], 2],
  "item.ore.uranium" : [3, ["plains"], 3],
  "item.gem.jade" : [2, ["plains"], 4],

  "item.ore.lead" : [5, ["swamp"], 2],
  "item.ore.iron" : [3, ["swamp"], 2],
  "item.gem.emerald" : [2, ["swamp"], 4],

  "item.ore.nickel" : [5, ["savannah"], 2],
  "item.ore.gold" : [3, ["savannah"], 3],
  "item.gem.topaz" : [2, ["savannah"], 4],

  "item.ore.titanium" : [3, ["desert"], 3],
  "item.gem.ruby" : [2, ["desert"], 4],
};

var modRecipes = {
  // Bars
  "item.bar.osmium" : [1, [["item.ore.osmium",2],["item.coal",1]], "category.bars"],
  "item.bar.cobalt" : [1, [["item.ore.cobalt",2],["item.coal",1]], "category.bars"],
  "item.bar.tin" : [1, [["item.ore.tin",2],["item.coal",1]], "category.bars"],
  "item.bar.silver" : [1, [["item.ore.silver",2],["item.coal",1]], "category.bars"],
  "item.bar.copper" : [1, [["item.ore.copper",2],["item.coal",1]], "category.bars"],
  "item.bar.uranium" : [1, [["item.ore.uranium",2],["item.coal",1]], "category.bars"],
  "item.bar.lead" : [1, [["item.ore.lead",2],["item.coal",1]], "category.bars"],
  "item.bar.iron" : [1, [["item.ore.iron",2],["item.coal",1]], "category.bars"],
  "item.bar.nickel" : [1, [["item.ore.nickel",2],["item.coal",1]], "category.bars"],
  "item.bar.gold" : [1, [["item.ore.gold",2],["item.coal",1]], "category.bars"],
  "item.bar.titanium" : [1, [["item.ore.titanium",2],["item.coal",1]], "category.bars"],
  
  // Alloys
  "item.bar.invar" : [1, [["item.bar.iron",2],["item.bar.nickel",2],["item.coal",4]], "category.alloys"],
  "item.bar.steel" : [1, [["item.bar.iron",2],["item.coal",4]], "category.alloys"],
  "item.bar.bronze" : [4, [["item.bar.copper",3],["item.bar.tin",1],["item.coal",4]], "category.alloys"],
  "item.bar.biome.snow" : [1, [["item.bar.osmium",1],["item.bar.cobalt",1],["item.gem.diamond",1]], "category.alloys"],
  "item.bar.biome.tundra" : [1, [["item.bar.tin",1],["item.bar.silver",1],["item.gem.sapphire",1]], "category.alloys"],
  "item.bar.biome.plains" : [1, [["item.bar.copper",1],["item.bar.uranium",1],["item.gem.jade",1]], "category.alloys"],
  "item.bar.biome.swamp" : [1, [["item.bar.lead",1],["item.bar.iron",1],["item.gem.emerald",1]], "category.alloys"],
  "item.bar.biome.savannah" : [1, [["item.bar.nickel",1],["item.bar.gold",1],["item.gem.topaz",1]], "category.alloys"],
  "item.bar.biome.desert" : [1, [["item.bar.titanium",1],["item.gem.ruby",1]], "category.alloys"],
  "item.bar.superalloy" : [1, [["item.bar.biome.snow",1],["item.bar.biome.tundra",1],["item.bar.biome.plains",1],["item.bar.biome.swamp",1],["item.bar.biome.savannah",1],["item.bar.biome.desert",1]], "category.alloys"],
  
  
  // Plates
  "item.plate.osmium" : [1, [["item.bar.osmium",2],["item.coal",2]], "category.plates"],
  "item.plate.cobalt" : [1, [["item.bar.cobalt",2],["item.coal",2]], "category.plates"],
  "item.plate.tin" : [1, [["item.bar.tin",2],["item.coal",2]], "category.plates"],
  "item.plate.silver" : [1, [["item.bar.silver",2],["item.coal",2]], "category.plates"],
  "item.plate.copper" : [1, [["item.bar.copper",2],["item.coal",2]], "category.plates"],
  "item.plate.uranium" : [1, [["item.bar.uranium",2],["item.coal",2]], "category.plates"],
  "item.plate.lead" : [1, [["item.bar.lead",2],["item.coal",2]], "category.plates"],
  "item.plate.iron" : [1, [["item.bar.iron",2],["item.coal",2]], "category.plates"],
  "item.plate.nickel" : [1, [["item.bar.nickel",2],["item.coal",2]], "category.plates"],
  "item.plate.gold" : [1, [["item.bar.gold",2],["item.coal",2]], "category.plates"],
  "item.plate.titanium" : [1, [["item.bar.titanium",2],["item.coal",2]], "category.plates"],
  "item.plate.invar" : [1, [["item.bar.invar",2],["item.coal",2]], "category.plates"],
  "item.plate.steel" : [1, [["item.bar.steel",2],["item.coal",2]], "category.plates"],
  "item.plate.bronze" : [1, [["item.bar.bronze",2],["item.coal",2]], "category.plates"],
  "item.plate.superalloy" : [1, [["item.bar.superalloy",2],["item.coal",2]], "category.plates"],
  
  
  // Rods
  "item.rod.osmium" : [1, [["item.plate.osmium",2],["item.coal",4]], "category.rods"],
  "item.rod.cobalt" : [1, [["item.plate.cobalt",2],["item.coal",4]], "category.rods"],
  "item.rod.tin" : [1, [["item.plate.tin",2],["item.coal",4]], "category.rods"],
  "item.rod.silver" : [1, [["item.plate.silver",2],["item.coal",4]], "category.rods"],
  "item.rod.copper" : [1, [["item.plate.copper",2],["item.coal",4]], "category.rods"],
  "item.rod.uranium" : [1, [["item.plate.uranium",2],["item.coal",4]], "category.rods"],
  "item.rod.lead" : [1, [["item.plate.lead",2],["item.coal",4]], "category.rods"],
  "item.rod.iron" : [1, [["item.plate.iron",2],["item.coal",4]], "category.rods"],
  "item.rod.nickel" : [1, [["item.plate.nickel",2],["item.coal",4]], "category.rods"],
  "item.rod.gold" : [1, [["item.plate.gold",2],["item.coal",4]], "category.rods"],
  "item.rod.titanium" : [1, [["item.plate.titanium",2],["item.coal",4]], "category.rods"],
  "item.rod.invar" : [1, [["item.plate.invar",2],["item.coal",4]], "category.rods"],
  "item.rod.steel" : [1, [["item.plate.steel",2],["item.coal",4]], "category.rods"],
  "item.rod.bronze" : [1, [["item.plate.bronze",2],["item.coal",4]], "category.rods"],
  "item.rod.superalloy" : [1, [["item.plate.superalloy",2],["item.coal",4]], "category.rods"],

  
  // Tools
  "item.tool.pick.iron" : [1, [["item.rod.iron",2],["item.plate.iron",6]], "category.tools"],
  "item.tool.pick.gold" : [1, [["item.rod.gold",2],["item.plate.gold",6]], "category.tools"],
  "item.tool.pick.cobalt" : [1, [["item.rod.cobalt",2],["item.plate.cobalt",6]], "category.tools"],
  "item.tool.pick.titanium" : [1, [["item.rod.titanium",2],["item.plate.titanium",6]], "category.tools"],

  "item.tool.axe.copper" : [1, [["item.rod.copper",2],["item.plate.copper",6]], "category.tools"],
  "item.tool.axe.tin" : [1, [["item.rod.tin",2],["item.plate.tin",6]], "category.tools"],
  "item.tool.axe.osmium" : [1, [["item.rod.osmium",2],["item.plate.osmium",6]], "category.tools"],
  "item.tool.axe.steel" : [1, [["item.rod.steel",2],["item.plate.steel",6]], "category.tools"],
  
  
  // Rocket
  "item.rocket.nose" : [1, [["item.rod.superalloy",1],["item.plate.superalloy",4]], "category.rocket"],
  "item.rocket.body" : [1, [["item.rod.superalloy",2],["item.plate.superalloy",2],["item.plate.steel",4],["item.plate.invar",4]], "category.rocket"],
  "item.rocket.engine" : [1, [["item.rod.superalloy",2],["item.plate.superalloy",2],["item.rod.uranium",4]], "category.rocket"],
  "item.rocket.fin" : [2, [["item.rod.superalloy",1],["item.plate.superalloy",2]], "category.rocket"],
  "item.rocket.leg" : [2, [["item.rod.superalloy",2]], "category.rocket"],
  "item.rocket" : [1, [["item.rocket.nose",1],["item.rocket.body",1],["item.rocket.engine",1],["item.rocket.fin",4],["item.rocket.leg",4]], "category.rocket"],
  
  // Tanks
  "item.tank.gas" : [8, [["item.plate.invar",1],["item.plate.steel",1]], "category.tanks"],
  "item.tank.gas.air" : [1, [["item.tank.gas",1]], "category.airfilter"],
  "item.tank.gas.oxygen" : [1, [["item.tank.gas.air",1]], "category.airfilter"],
  "item.tank.gas.hydrogen" : [1, [["item.tank.gas.air",1]], "category.airfilter"],
  "item.tank.gas.nitrogen" : [1, [["item.tank.gas.air",1]], "category.airfilter"],
  "item.tank.fluid.fuel": [2, [["item.tank.gas.nitrogen",1],["item.tank.gas.hydrogen",4],["item.tank.gas.oxygen",2]], "category.reactionchamber"],
  
  // Crafting Stations
  "item.station.furnace" : [1, [["item.stone",24],["item.plank",8],["item.stick",8]], "category.stations"],
  "item.station.press" : [1, [["item.bar.steel",8],["item.bar.copper",4],["item.bar.tin",4]], "category.stations"],
  "item.station.rollingmachine" : [1, [["item.plate.steel",8],["item.plate.bronze",8],["item.plate.invar",8]], "category.stations"],
  "item.station.electrolyser" : [1, [["item.plate.steel",8],["item.plate.superalloy",2],["item.rod.iron",1],["item.rod.copper",1]], "category.stations"],
  "item.station.reactionchamber" : [1, [["item.plate.steel",16],["item.rod.titanium",4],["item.plate.superalloy",2]], "category.stations"],
  "item.station.airfilter" : [1, [["item.plate.steel",8],["item.plate.cobalt",8],["item.plate.superalloy",2]], "category.stations"],
  "item.station.rocketstation" : [1, [["item.rod.steel",8],["item.rod.titanium",8],["item.plate.superalloy",8],["item.rod.superalloy",4]], "category.stations"],
  
  // Other
  "item.plank" : [4, [["item.wood",1]], "category.other"],
  "item.stick" : [4, [["item.plank",2]], "category.other"],
  "item.coal" : [1, [["item.wood",8]], "category.other"],
  "item.brick" : [1, [["item.stone",4]], "category.other"],
  "item.concrete": [4, [["item.stone",4]], "category.other"],
  "item.brick_floor": [4, [["item.brick",4]], "category.other"],
  "item.wood_floor": [1, [["item.plank",4]], "category.other"],
};

var modCraftingStations = {
  "station_furnace" : ["category.bars","category.alloys"],
  "station_press" : ["category.plates"],
  "station_rollingmachine" : ["category.rods"],
  "station_rocketstation" : ["category.rocket"],
  "station_electrolyser" : ["category.electrolyser"],
  "station_reactionchamber" : ["category.reactionchamber"],
  "station_airfilter" : ["category.airfilter"],
};

var modPlaceable = {
  "item.rocket" : "rocket",
  
  // Floors
  "item.concrete" : "concrete",
  "item.brick_floor" : "brick",
  "item.wood_floor" : "planks",
  
  // Crafting Stations
  "item.station.furnace" : "station_furnace",
  "item.station.press" : "station_press",
  "item.station.rollingmachine" : "station_rollingmachine",
  "item.station.electrolyser" : "station_electrolyser",
  "item.station.reactionchamber" : "station_reactionchamber",
  "item.station.airfilter" : "station_airfilter",
  "item.station.rocketstation" : "station_rocketstation",
};

var modPlaceFeatures = {
  "concrete" : [true, "concrete", 0, 512, [null], "item.concrete", 1],
  "brick" : [true, "brick", 32, 512, [null], "item.brick_floor", 1],
  "planks" : [true, "planks", 64, 512, [null], "item.wood_floor", 1],
  "rocket" : [true, "rocket", 128, 160, [null], "item.rocket", 1],
  "station_furnace" : [true, "station_furnace", 0, 576, [null], "item.station.furnace", 1],
  "station_press" : [true, "station_press", 32, 576, [null], "item.station.press", 1],
  "station_rollingmachine" : [true, "station_rollingmachine", 64, 576, [null], "item.station.rollingmachine", 1],
  "station_electrolyser" : [true, "station_electrolyser", 96, 576, [null], "item.station.electrolyser", 1],
  "station_reactionchamber" : [true, "station_reactionchamber", 128, 576, [null], "item.station.reactionchamber", 1],
  "station_airfilter" : [true, "station_airfilter", 160, 576, [null], "item.station.airfilter", 1],
  "station_rocketstation" : [true, "station_rocketstation", 192, 576, [null], "item.station.rocketstation", 1],
}

var modCategories = [
  "category.bars",
  "category.alloys",
  "category.plates",
  "category.rods",
  "category.tools",
  "category.rocket",
  "category.tanks",
  "category.airfilter",
  "category.electrolyser",
  "category.reactionchamber",
  "category.stations",
  "category.other",
];

var modRegularCategories = [
  "category.tools",
  "category.tanks",
  "category.stations",
  "category.other",
];

var modPlanets = {
  "earth" : {
    "navbutton" : {
      "fg" : "#ffffff",
      "bg" : "#009900",
    },
    "biomes" : {
      0 : [0, 0, "ocean"],
      1 : [0, 0, "ocean"],
      2 : [1, 0, "snow"],
      3 : [2, 0, "tundra"],
      4 : [3, 0, "plains"],
      5 : [4, 0, "swamp"],
      6 : [5, 0, "savannah"],
      7 : [6, 0, "desert"],
      8 : [7, 0, "volcano"],
      9 : [0, 0, "ocean"],
      10 : [0, 0, "ocean"],
    },
    "biomeColours" : {
      "ocean" : "#00ccff",
      "snow" : "#ffffff",
      "tundra" : "#77ffab",
      "plains" : "#006400",
      "swamp" : "#438e27",
      "savannah" : "#94ff6d",
      "desert" : "#dfff6d",
      "volcano" : "#20211f",
    },
    "features" : {
      0 : [true, "flowers-1", 0, 96, ["tundra","plains","swamp"], "none", 1],
      1 : [true, "flowers-2", 32, 96, ["tundra","plains","swamp"], "none", 1],
      2 : [true, "rock", 160, 96, ["snow","tundra","plains","swamp","savannah","desert"], "ore", 10],
      3 : [true, "savannah_tree", 224, 96, ["savannah"], "item.wood", 10],
      4 : [true, "swamp_tree", 288, 96, ["swamp"], "item.wood", 10],
      5 : [true, "plains_tree", 128, 96, ["plains"], "item.wood", 10],
      6 : [true, "tundra_tree", 192, 96, ["tundra"], "item.wood", 10],
      7 : [true, "snow_tree", 416, 96, ["snow","tundra"], "item.wood", 10],
      8 : [true, "swamp_tree_2", 384, 96, ["swamp"], "item.wood", 10],
      9 : [true, "cactus", 320, 96, ["desert"], "item.wood", 10],
      10 : [true, "cacti", 352, 96, ["desert"], "item.wood", 3],
      11 : [true, "glacier", 448, 96, ["snow"], "item.ice", 5],
      12 : [true, "volcano", 480, 96, ["volcano"], "ore", 10],
    },
    "atmosphere" : true,
  },
  "moon" : {
    "navbutton" : {
      "fg" : "#000000",
      "bg" : "#dddddd",
    },
    "biomes" : {
      0 : [8, 0, "bright"],
      1 : [9, 0, "dark"],
    },
    "biomeColours" : {
      "bright" : "#cccccc",
      "dark" : "#999999",
    },
    "features" : {
      0 : [true, "rock", 160, 96, ["dark"], "ore", 10],
    },
    "atmosphere" : false,
  },
}

var modI18n = {
  "en-GB": {
    /* Items */
    // Ores
    "item.ore.copper" : "Copper Ore",
    "item.ore.iron" : "Iron Ore",
    "item.ore.gold" : "Gold Ore",
    "item.ore.tin" : "Tin Ore",
    "item.ore.cobalt" : "Cobalt Ore",
    "item.ore.titanium" : "Titanium Ore",
    "item.ore.osmium" : "Osmium Ore",
    "item.ore.uranium" : "Uranium Ore",
    "item.ore.silver" : "Silver Ore",
    "item.ore.lead" : "Lead Ore",
    "item.ore.nickel" : "Nickel Ore",

    // Bars
    "item.bar.copper" : "Copper Ingot",
    "item.bar.iron" : "Iron Ingot",
    "item.bar.gold" : "Gold Ingot",
    "item.bar.tin" : "Tin Ingot",
    "item.bar.steel" : "Steel Ingot",
    "item.bar.superalloy" : "SuperAlloy Ingot",
    "item.bar.cobalt" : "Cobalt Ingot",
    "item.bar.titanium" : "Titanium Ingot",
    "item.bar.osmium" : "Osmium Ingot",
    "item.bar.uranium" : "Uranium Ingot",
    "item.bar.silver" : "Silver Ingot",
    "item.bar.lead" : "Lead Ingot",
    "item.bar.invar" : "Invar Ingot",
    "item.bar.nickel" : "Nickel Ingot",
    "item.bar.bronze" : "Bronze Ingot",

    // Plates
    "item.plate.copper" : "Copper Plate",
    "item.plate.iron" : "Iron Plate",
    "item.plate.gold" : "Gold Plate",
    "item.plate.tin" : "Tin Plate",
    "item.plate.steel" : "Steel Plate",
    "item.plate.superalloy" : "SuperAlloy Plate",
    "item.plate.cobalt" : "Cobalt Plate",
    "item.plate.titanium" : "Titanium Plate",
    "item.plate.osmium" : "Osmium Plate",
    "item.plate.uranium" : "Uranium Plate",
    "item.plate.silver" : "Silver Plate",
    "item.plate.lead" : "Lead Plate",
    "item.plate.invar" : "Invar Plate",
    "item.plate.nickel" : "Nickel Plate",
    "item.plate.bronze" : "Bronze Plate",

    // Rods
    "item.rod.copper" : "Copper Rod",
    "item.rod.iron" : "Iron Rod",
    "item.rod.gold" : "Gold Rod",
    "item.rod.tin" : "Tin Rod",
    "item.rod.steel" : "Steel Rod",
    "item.rod.superalloy" : "SuperAlloy Rod",
    "item.rod.cobalt" : "Cobalt Rod",
    "item.rod.titanium" : "Titanium Rod",
    "item.rod.osmium" : "Osmium Rod",
    "item.rod.uranium" : "Uranium Rod",
    "item.rod.silver" : "Silver Rod",
    "item.rod.lead" : "Lead Rod",
    "item.rod.invar" : "Invar Rod",
    "item.rod.nickel" : "Nickel Rod",
    "item.rod.bronze" : "Bronze Rod",

    // Gemstones
    "item.gem.diamond" : "Diamond",
    "item.gem.sapphire" : "Sapphire",
    "item.gem.jade" : "Jade",
    "item.gem.emerald" : "Emerald",
    "item.gem.topaz" : "Topaz",
    "item.gem.ruby" : "Ruby",

    // Biome Ingots
    "item.bar.biome.snow" : "Snow Biome Ingot",
    "item.bar.biome.tundra" : "Tundra Biome Ingot",
    "item.bar.biome.plains" : "Plains Biome Ingot",
    "item.bar.biome.swamp" : "Swamp Biome Ingot",
    "item.bar.biome.savannah" : "Savannah Biome Ingot",
    "item.bar.biome.desert" : "Desert Biome Ingot",

    // Pickaxes
    "item.tool.pick.iron" : "Iron Pickaxe",
    "item.tool.pick.gold" : "Gold Pickaxe",
    "item.tool.pick.cobalt" : "Cobalt Pickaxe",
    "item.tool.pick.titanium" : "Titanium Pickaxe",

    // Axes
    "item.tool.axe.copper" : "Copper Axe",
    "item.tool.axe.tin" : "Tin Axe",
    "item.tool.axe.osmium" : "Osmium Axe",
    "item.tool.axe.steel" : "Steel Axe",
    
    // Rocket
    "item.rocket" : "Rocket",
    "item.rocket.leg" : "Rocket Leg",
    "item.rocket.body" : "Rocket Body",
    "item.rocket.engine" : "Rocket Engine",
    "item.rocket.nose" : "Rocket Nose Cone",
    "item.rocket.fin" : "Rocket Fin",
    
    // Tanks
    "item.tank.gas" : "Gas Tank",
    "item.tank.gas.air" : "Air Tank",
    "item.tank.gas.oxygen" : "Oxygen Tank",
    "item.tank.gas.hydrogen" : "Hydrogen Tank",
    "item.tank.gas.nitrogen" : "Nitrogen Tank",
    "item.tank.fluid" : "Fluid Tank",
    "item.tank.fluid.water" : "Water Tank",
    "item.tank.fluid.fuel" : "Fuel Tank",
    
    // Crafting Stations
    "item.station.furnace" : "Furnace",
    "item.station.press" : "Press",
    "item.station.rollingmachine" : "Rolling Machine",
    "item.station.electrolyser" : "Electrolyser",
    "item.station.reactionchamber" : "Reaction Chamber",
    "item.station.airfilter" : "Air Filter",
    "item.station.rocketstation" : "Rocket Station",

    // Miscellaneous
    "item.coal" : "Coal",
    "item.stick" : "Stick",
    "item.wood" : "Wood",
    "item.stone" : "Stone",
    "item.plank" : "Plank",
    "item.brick" : "Brick",
    "item.invalid" : "Invalid Item",
    "item.future" : "Future Item",
    "item.concrete" : "Concrete",
    "item.wood_floor" : "Wooden Floor",
    "item.brick_floor" : "Brick Floor",
    "item.ice" : "Ice",
    
    /* Item Descriptions */
    // Ores
    "desc.item.ore.copper" : "A lump of rock containing Copper",
    "desc.item.ore.iron" : "A lump of rock containing Iron",
    "desc.item.ore.gold" : "A lump of rock containing Gold",
    "desc.item.ore.tin" : "A lump of rock containing Tin",
    "desc.item.ore.cobalt" : "A lump of rock containing Cobalt",
    "desc.item.ore.titanium" : "A lump of rock containing Titanium",
    "desc.item.ore.osmium" : "A lump of rock containing Osmium",
    "desc.item.ore.uranium" : "A lump of rock containing Uranium",
    "desc.item.ore.silver" : "A lump of rock containing Silver",
    "desc.item.ore.lead" : "A lump of rock containing Lead",
    "desc.item.ore.nickel" : "A lump of rock containing Nickel",

    // Bars
    "desc.item.bar.copper" : "An ingot made of solid Copper",
    "desc.item.bar.iron" : "An ingot made of solid Iron",
    "desc.item.bar.gold" : "An ingot made of solid Gold",
    "desc.item.bar.tin" : "An ingot made of solid Tin",
    "desc.item.bar.steel" : "An ingot made of solid Steel",
    "desc.item.bar.superalloy" : "An ingot made of solid SuperAlloy",
    "desc.item.bar.cobalt" : "An ingot made of solid Cobalt",
    "desc.item.bar.titanium" : "An ingot made of solid Titanium",
    "desc.item.bar.osmium" : "An ingot made of solid Osmium",
    "desc.item.bar.uranium" : "An ingot made of solid Uranium",
    "desc.item.bar.silver" : "An ingot made of solid Silver",
    "desc.item.bar.lead" : "An ingot made of solid Lead",
    "desc.item.bar.invar" : "An ingot made of solid Invar",
    "desc.item.bar.nickel" : "An ingot made of solid Nickel",
    "desc.item.bar.bronze" : "An ingot made of solid Bronze",

    // Plates
    "desc.item.plate.copper" : "A plate formed from Copper",
    "desc.item.plate.iron" : "A plate formed from Iron",
    "desc.item.plate.gold" : "A plate formed from Gold",
    "desc.item.plate.tin" : "A plate formed from Tin",
    "desc.item.plate.steel" : "A plate formed from Steel",
    "desc.item.plate.superalloy" : "A plate formed from SuperAlloy",
    "desc.item.plate.cobalt" : "A plate formed from Cobalt",
    "desc.item.plate.titanium" : "A plate formed from Titanium",
    "desc.item.plate.osmium" : "A plate formed from Osmium",
    "desc.item.plate.uranium" : "A plate formed from Uranium",
    "desc.item.plate.silver" : "A plate formed from Silver",
    "desc.item.plate.lead" : "A plate formed from Lead",
    "desc.item.plate.invar" : "A plate formed from Invar",
    "desc.item.plate.nickel" : "A plate formed from Nickel",
    "desc.item.plate.bronze" : "A plate formed from Bronze",

    // Rods
    "desc.item.rod.copper" : "A rod of Copper",
    "desc.item.rod.iron" : "A rod of Iron",
    "desc.item.rod.gold" : "A rod of Gold",
    "desc.item.rod.tin" : "A rod of Tin",
    "desc.item.rod.steel" : "A rod of Steel",
    "desc.item.rod.superalloy" : "A rod of SuperAlloy",
    "desc.item.rod.cobalt" : "A rod of Cobalt",
    "desc.item.rod.titanium" : "A rod of Titanium",
    "desc.item.rod.osmium" : "A rod of Osmium",
    "desc.item.rod.uranium" : "A rod of Uranium",
    "desc.item.rod.silver" : "A rod of Silver",
    "desc.item.rod.lead" : "A rod of Lead",
    "desc.item.rod.invar" : "A rod of Invar",
    "desc.item.rod.nickel" : "A rod of Nickel",
    "desc.item.rod.bronze" : "A rod of Bronze",

    // Gemstones
    "desc.item.gem.diamond" : "A carefully cut Diamond",
    "desc.item.gem.sapphire" : "A carefully cut Sapphire",
    "desc.item.gem.jade" : "A carefully cut Jade",
    "desc.item.gem.emerald" : "A carefully cut Emerald",
    "desc.item.gem.topaz" : "A carefully cut Topaz",
    "desc.item.gem.ruby" : "A carefully cut Ruby",

    // Biome Ingots
    "desc.item.bar.biome.snow" : "An ingot containing the essence of the Snow Biome",
    "desc.item.bar.biome.tundra" : "An ingot containing the essence of the Tundra Biome",
    "desc.item.bar.biome.plains" : "An ingot containing the essence of the Plains Biome",
    "desc.item.bar.biome.swamp" : "An ingot containing the essence of the Swamp Biome",
    "desc.item.bar.biome.savannah" : "An ingot containing the essence of the Savannah Biome",
    "desc.item.bar.biome.desert" : "An ingot containing the essence of the Desert Biome",

    // Pickaxes
    "desc.item.tool.pick.iron" : "A pickaxe forged from Iron",
    "desc.item.tool.pick.gold" : "A pickaxe forged from Gold",
    "desc.item.tool.pick.cobalt" : "A pickaxe forged from Cobalt",
    "desc.item.tool.pick.titanium" : "A pickaxe forged from Titanium",

    // Axes
    "desc.item.tool.axe.copper" : "An axe forged from Copper",
    "desc.item.tool.axe.tin" : "An axe forged from Tin",
    "desc.item.tool.axe.osmium" : "An axe forged from Osmium",
    "desc.item.tool.axe.steel" : "An axe forged from Steel",
    
    // Rocket
    "desc.item.rocket" : "A craft capable of reaching space. This is your ticket home!",
    "desc.item.rocket.leg" : "A landing leg for a rocket",
    "desc.item.rocket.body" : "The main hull of a rocket",
    "desc.item.rocket.engine" : "A powerful engine capable of boosting a rocket into space",
    "desc.item.rocket.nose" : "A streamlined nose cone for a rocket",
    "desc.item.rocket.fin" : "A fin for keeping the correct end of a rocket pointing at space",
    
    // Tanks
    "desc.item.tank.gas" : "An empty gas tank.",
    "desc.item.tank.gas.air" : "A tank of compressed air.",
    "desc.item.tank.gas.oxygen" : "A tank of compressed oxygen.",
    "desc.item.tank.gas.hydrogen" : "A tank of compressed hydrogen.",
    "desc.item.tank.gas.nitrogen" : "A tank of compressed nitrogen.",
    "desc.item.tank.fluid" : "An empty fluid tank",
    "desc.item.tank.fluid.water" : "A tank of water",
    "desc.item.tank.fluid.fuel" : "A tank of highly flammable rocket fuel",
    
    // Crafting Stations
    "desc.item.station.furnace" : "A furnace to smelt ores into ingots. Hot stuff!",
    "desc.item.station.press" : "A mechanical press to press ingots into plates. Keep your hands out!",
    "desc.item.station.rollingmachine" : "A rolling machine to roll plates into rods.",
    "desc.item.station.electrolyser" : "An electrolyser to separate water into hydrogen and oxygen. Shocking!",
    "desc.item.station.reactionchamber" : "A reaction chamber to facilitate chemical reactions.",
    "desc.item.station.airfilter" : "A filter to extract gasses out of the atmosphere.",
    "desc.item.station.rocketstation" : "A highly advanced station for crafting rockets.",

    // Miscellaneous
    "desc.item.coal" : "A lump of Coal. Someone must have been bad this year!",
    "desc.item.stick" : "It's like a tiny tree! Well, not really...",
    "desc.item.wood" : "TIMBER!!!",
    "desc.item.stone" : "It's a rock. What else did you expect this to be?",
    "desc.item.plank" : "Who came up with this amazing idea of making flatter logs?",
    "desc.item.brick" : "Throw it through your friends' windows.",
    "desc.item.invalid" : "Oops! The game tried to give you an item that doesn't exist.\n\nIf you are reading this, you have experienced a bug!\nPlease report it to the following email address:\nme@olivercjcox.uk\n\nThank you!",
    "desc.item.future" : "This is a placeholder for something that will be added in the future.",
    "desc.item.concrete" : "A slab of concrete.",
    "desc.item.wood_floor" : "A polished wooden floor",
    "desc.item.brick_floor" : "A carefully laid brick floor",
    "desc.item.ice" : "A lump of cold, slippery ice.",

    /* Crafting Categories */
    "category.bars" : "Ingots",
    "category.alloys" : "Alloys",
    "category.plates" : "Plates",
    "category.rods" : "Rods",
    "category.tools" : "Tools",
    "category.rocket" : "Rocket",
    "category.tanks" : "Tanks",
    "category.electrolyser" : "Electrolyser",
    "category.airfilter" : "Air Filter",
    "category.reactionchamber" : "Reaction Chamber",
    "category.stations" : "Crafting Stations",
    "category.other" : "Other",
    
    /* Skin Parts */
    "skin.classic" : "Classic",
    "skin.gold" : "Gold",
    "skin.grey" : "Grey",
    "skin.blue" : "Blue",
    "skin.green" : "Green",
    "skin.purple" : "Purple",
    "skin.clean" : "Clean",
    "skin.orange" : "Orange",
    "skin.yellow" : "Yellow",
    "skin.none" : "None",
    "skin.frankenstein" : "Frankenstein Bolts",
    "skin.christmas" : "Christmas Hat",
    
    /* Planet Names */
    "planet.earth" : "Earth",
    "planet.moon" : "The Moon",

    /* Titles, Strings, etc. */
    "title" : "Turtle Mania",
    "language.name" : "English (Traditional)",
    "menu.crafting" : "Crafting",
    "menu.help" : "Help",
    "menu.inventory" : "Inventory",
    "menu.skin" : "Skin Customisation",
    "menu.planets" : "Spacecraft Navigation",
    "menu.save" : "Save/Load",
  },
  "en-US": {
    /* Items */
    // Ores
    "item.ore.copper" : "Copper Ore",
    "item.ore.iron" : "Iron Ore",
    "item.ore.gold" : "Gold Ore",
    "item.ore.tin" : "Tin Ore",
    "item.ore.cobalt" : "Cobalt Ore",
    "item.ore.titanium" : "Titanium Ore",
    "item.ore.osmium" : "Osmium Ore",
    "item.ore.uranium" : "Uranium Ore",
    "item.ore.silver" : "Silver Ore",
    "item.ore.lead" : "Lead Ore",
    "item.ore.nickel" : "Nickel Ore",

    // Bars
    "item.bar.copper" : "Copper Bar",
    "item.bar.iron" : "Iron Bar",
    "item.bar.gold" : "Gold Bar",
    "item.bar.tin" : "Tin Bar",
    "item.bar.steel" : "Steel Bar",
    "item.bar.superalloy" : "SuperAlloy Bar",
    "item.bar.cobalt" : "Cobalt Bar",
    "item.bar.titanium" : "Titanium Bar",
    "item.bar.osmium" : "Osmium Bar",
    "item.bar.uranium" : "Uranium Bar",
    "item.bar.silver" : "Silver Bar",
    "item.bar.lead" : "Lead Bar",
    "item.bar.invar" : "Invar Bar",
    "item.bar.nickel" : "Nickel Bar",
    "item.bar.bronze" : "Bronze Bar",

    // Plates
    "item.plate.copper" : "Copper Plate",
    "item.plate.iron" : "Iron Plate",
    "item.plate.gold" : "Gold Plate",
    "item.plate.tin" : "Tin Plate",
    "item.plate.steel" : "Steel Plate",
    "item.plate.superalloy" : "SuperAlloy Plate",
    "item.plate.cobalt" : "Cobalt Plate",
    "item.plate.titanium" : "Titanium Plate",
    "item.plate.osmium" : "Osmium Plate",
    "item.plate.uranium" : "Uranium Plate",
    "item.plate.silver" : "Silver Plate",
    "item.plate.lead" : "Lead Plate",
    "item.plate.invar" : "Invar Plate",
    "item.plate.nickel" : "Nickel Plate",
    "item.plate.bronze" : "Bronze Plate",

    // Rods
    "item.rod.copper" : "Copper Rod",
    "item.rod.iron" : "Iron Rod",
    "item.rod.gold" : "Gold Rod",
    "item.rod.tin" : "Tin Rod",
    "item.rod.steel" : "Steel Rod",
    "item.rod.superalloy" : "SuperAlloy Rod",
    "item.rod.cobalt" : "Cobalt Rod",
    "item.rod.titanium" : "Titanium Rod",
    "item.rod.osmium" : "Osmium Rod",
    "item.rod.uranium" : "Uranium Rod",
    "item.rod.silver" : "Silver Rod",
    "item.rod.lead" : "Lead Rod",
    "item.rod.invar" : "Invar Rod",
    "item.rod.nickel" : "Nickel Rod",
    "item.rod.bronze" : "Bronze Rod",

    // Gemstones
    "item.gem.diamond" : "Diamond",
    "item.gem.sapphire" : "Sapphire",
    "item.gem.jade" : "Jade",
    "item.gem.emerald" : "Emerald",
    "item.gem.topaz" : "Topaz",
    "item.gem.ruby" : "Ruby",

    // Biome Ingots
    "item.bar.biome.snow" : "Snow Biome Bar",
    "item.bar.biome.tundra" : "Tundra Biome Bar",
    "item.bar.biome.plains" : "Plains Biome Bar",
    "item.bar.biome.swamp" : "Swamp Biome Bar",
    "item.bar.biome.savannah" : "Savannah Biome Bar",
    "item.bar.biome.desert" : "Desert Biome Bar",

    // Pickaxes
    "item.tool.pick.iron" : "Iron Pickaxe",
    "item.tool.pick.gold" : "Gold Pickaxe",
    "item.tool.pick.cobalt" : "Cobalt Pickaxe",
    "item.tool.pick.titanium" : "Titanium Pickaxe",

    // Axes
    "item.tool.axe.copper" : "Copper Axe",
    "item.tool.axe.tin" : "Tin Axe",
    "item.tool.axe.osmium" : "Osmium Axe",
    "item.tool.axe.steel" : "Steel Axe",

    // Rocket
    "item.rocket" : "Rocket",
    "item.rocket.leg" : "Rocket Leg",
    "item.rocket.body" : "Rocket Body",
    "item.rocket.engine" : "Rocket Engine",
    "item.rocket.nose" : "Rocket Nose Cone",
    "item.rocket.fin" : "Rocket Fin",
    
    // Tanks
    "item.tank.gas" : "Gas Tank",
    "item.tank.gas.air" : "Air Tank",
    "item.tank.gas.oxygen" : "Oxygen Tank",
    "item.tank.gas.hydrogen" : "Hydrogen Tank",
    "item.tank.gas.nitrogen" : "Nitrogen Tank",
    "item.tank.fluid" : "Fluid Tank",
    "item.tank.fluid.water" : "Water Tank",
    "item.tank.fluid.fuel" : "Fuel Tank",
    
    // Crafting Stations
    "item.station.furnace" : "Furnace",
    "item.station.press" : "Press",
    "item.station.rollingmachine" : "Rolling Machine",
    "item.station.electrolyser" : "Electrolyzer",
    "item.station.reactionchamber" : "Reaction Chamber",
    "item.station.airfilter" : "Air Filter",
    "item.station.rocketstation" : "Rocket Station",
    
    // Miscellaneous
    "item.coal" : "Coal",
    "item.stick" : "Stick",
    "item.wood" : "Wood",
    "item.stone" : "Stone",
    "item.plank" : "Plank",
    "item.brick" : "Brick",
    "item.invalid" : "Invalid Item",
    "item.future" : "Future Item",
    "item.concrete" : "Concrete",
    "item.wood_floor" : "Wooden Floor",
    "item.brick_floor" : "Brick Floor",
    "item.ice" : "Ice",
    
    /* Item Descriptions */
    // Ores
    "desc.item.ore.copper" : "A lump of rock containing Copper",
    "desc.item.ore.iron" : "A lump of rock containing Iron",
    "desc.item.ore.gold" : "A lump of rock containing Gold",
    "desc.item.ore.tin" : "A lump of rock containing Tin",
    "desc.item.ore.cobalt" : "A lump of rock containing Cobalt",
    "desc.item.ore.titanium" : "A lump of rock containing Titanium",
    "desc.item.ore.osmium" : "A lump of rock containing Osmium",
    "desc.item.ore.uranium" : "A lump of rock containing Uranium",
    "desc.item.ore.silver" : "A lump of rock containing Silver",
    "desc.item.ore.lead" : "A lump of rock containing Lead",
    "desc.item.ore.nickel" : "A lump of rock containing Nickel",

    // Bars
    "desc.item.bar.copper" : "A bar made of solid Copper",
    "desc.item.bar.iron" : "A bar made of solid Iron",
    "desc.item.bar.gold" : "A bar made of solid Gold",
    "desc.item.bar.tin" : "A bar made of solid Tin",
    "desc.item.bar.steel" : "A bar made of solid Steel",
    "desc.item.bar.superalloy" : "A bar made of solid SuperAlloy",
    "desc.item.bar.cobalt" : "A bar made of solid Cobalt",
    "desc.item.bar.titanium" : "A bar made of solid Titanium",
    "desc.item.bar.osmium" : "A bar made of solid Osmium",
    "desc.item.bar.uranium" : "A bar made of solid Uranium",
    "desc.item.bar.silver" : "A bar made of solid Silver",
    "desc.item.bar.lead" : "A bar made of solid Lead",
    "desc.item.bar.invar" : "A bar made of solid Invar",
    "desc.item.bar.nickel" : "A bar made of solid Nickel",
    "desc.item.bar.bronze" : "A bar made of solid Bronze",

    // Plates
    "desc.item.plate.copper" : "A plate formed from Copper",
    "desc.item.plate.iron" : "A plate formed from Iron",
    "desc.item.plate.gold" : "A plate formed from Gold",
    "desc.item.plate.tin" : "A plate formed from Tin",
    "desc.item.plate.steel" : "A plate formed from Steel",
    "desc.item.plate.superalloy" : "A plate formed from SuperAlloy",
    "desc.item.plate.cobalt" : "A plate formed from Cobalt",
    "desc.item.plate.titanium" : "A plate formed from Titanium",
    "desc.item.plate.osmium" : "A plate formed from Osmium",
    "desc.item.plate.uranium" : "A plate formed from Uranium",
    "desc.item.plate.silver" : "A plate formed from Silver",
    "desc.item.plate.lead" : "A plate formed from Lead",
    "desc.item.plate.invar" : "A plate formed from Invar",
    "desc.item.plate.nickel" : "A plate formed from Nickel",
    "desc.item.plate.bronze" : "A plate formed from Bronze",

    // Rods
    "desc.item.rod.copper" : "A rod of Copper",
    "desc.item.rod.iron" : "A rod of Iron",
    "desc.item.rod.gold" : "A rod of Gold",
    "desc.item.rod.tin" : "A rod of Tin",
    "desc.item.rod.steel" : "A rod of Steel",
    "desc.item.rod.superalloy" : "A rod of SuperAlloy",
    "desc.item.rod.cobalt" : "A rod of Cobalt",
    "desc.item.rod.titanium" : "A rod of Titanium",
    "desc.item.rod.osmium" : "A rod of Osmium",
    "desc.item.rod.uranium" : "A rod of Uranium",
    "desc.item.rod.silver" : "A rod of Silver",
    "desc.item.rod.lead" : "A rod of Lead",
    "desc.item.rod.invar" : "A rod of Invar",
    "desc.item.rod.nickel" : "A rod of Nickel",
    "desc.item.rod.bronze" : "A rod of Bronze",

    // Gemstones
    "desc.item.gem.diamond" : "A carefully cut Diamond",
    "desc.item.gem.sapphire" : "A carefully cut Sapphire",
    "desc.item.gem.jade" : "A carefully cut Jade",
    "desc.item.gem.emerald" : "A carefully cut Emerald",
    "desc.item.gem.topaz" : "A carefully cut Topaz",
    "desc.item.gem.ruby" : "A carefully cut Ruby",

    // Biome Ingots
    "desc.item.bar.biome.snow" : "A bar containing the essence of the Snow Biome",
    "desc.item.bar.biome.tundra" : "A bar containing the essence of the Tundra Biome",
    "desc.item.bar.biome.plains" : "A bar containing the essence of the Plains Biome",
    "desc.item.bar.biome.swamp" : "A bar containing the essence of the Swamp Biome",
    "desc.item.bar.biome.savannah" : "A bar containing the essence of the Savannah Biome",
    "desc.item.bar.biome.desert" : "A bar containing the essence of the Desert Biome",

    // Pickaxes
    "desc.item.tool.pick.iron" : "A pickaxe forged from Iron",
    "desc.item.tool.pick.gold" : "A pickaxe forged from Gold",
    "desc.item.tool.pick.cobalt" : "A pickaxe forged from Cobalt",
    "desc.item.tool.pick.titanium" : "A pickaxe forged from Titanium",

    // Axes
    "desc.item.tool.axe.copper" : "An axe forged from Copper",
    "desc.item.tool.axe.tin" : "An axe forged from Tin",
    "desc.item.tool.axe.osmium" : "An axe forged from Osmium",
    "desc.item.tool.axe.steel" : "An axe forged from Steel",
    
    // Rocket
    "desc.item.rocket" : "A craft capable of reaching space. This is your ticket home!",
    "desc.item.rocket.leg" : "A landing leg for a rocket",
    "desc.item.rocket.body" : "The main hull of a rocket",
    "desc.item.rocket.engine" : "A powerful engine capable of boosting a rocket into space",
    "desc.item.rocket.nose" : "A streamlined nose cone for a rocket",
    "desc.item.rocket.fin" : "A fin for keeping the correct end of a rocket pointing at space",
    
    // Tanks
    "desc.item.tank.gas" : "An empty gas tank.",
    "desc.item.tank.gas.air" : "A tank of compressed air.",
    "desc.item.tank.gas.oxygen" : "A tank of compressed oxygen.",
    "desc.item.tank.gas.hydrogen" : "A tank of compressed hydrogen.",
    "desc.item.tank.gas.nitrogen" : "A tank of compressed nitrogen.",
    "desc.item.tank.fluid" : "An empty fluid tank",
    "desc.item.tank.fluid.water" : "A tank of water",
    "desc.item.tank.fluid.fuel" : "A tank of highly flammable rocket fuel",

    // Crafting Stations
    "desc.item.station.furnace" : "A furnace to smelt ores into bars. Hot stuff!",
    "desc.item.station.press" : "A mechanical press to press bars into plates. Keep your hands out!",
    "desc.item.station.rollingmachine" : "A rolling machine to roll plates into rods.",
    "desc.item.station.electrolyser" : "An electrolyzer to separate water into hydrogen and oxygen. Shocking!",
    "desc.item.station.reactionchamber" : "A reaction chamber to facilitate chemical reactions.",
    "desc.item.station.airfilter" : "A filter to extract gasses out of the atmosphere.",
    "desc.item.station.rocketstation" : "A highly advanced station for crafting rockets.",
    
    // Miscellaneous
    "desc.item.coal" : "A lump of Coal. Someone must have been bad this year!",
    "desc.item.stick" : "It's like a tiny tree! Well, not really...",
    "desc.item.wood" : "TIMBER!!!",
    "desc.item.stone" : "It's a rock. What else did you expect this to be?",
    "desc.item.plank" : "Who came up with this amazing idea of making flatter logs?",
    "desc.item.brick" : "Throw it through your friends' windows.",
    "desc.item.invalid" : "Oops! The game tried to give you an item that doesn't exist.\n\nIf you are reading this, you have experienced a bug!\nPlease report it to the following email address:\nme@olivercjcox.uk\n\nThank you!",
    "desc.item.future" : "This is a placeholder for something that will be added in the future.",
    "desc.item.concrete" : "A slab of concrete.",
    "desc.item.wood_floor" : "A polished wooden floor",
    "desc.item.brick_floor" : "A carefully laid brick floor",
    "desc.item.ice" : "A lump of cold, slippery ice.",

    /* Crafting Categories */
    "category.bars" : "Bars",
    "category.alloys" : "Alloys",
    "category.plates" : "Plates",
    "category.rods" : "Rods",
    "category.tools" : "Tools",
    "category.rocket" : "Rocket",
    "category.tanks" : "Tanks",
    "category.electrolyser" : "Electrolyzer",
    "category.airfilter" : "Air Filter",
    "category.reactionchamber" : "Reaction Chamber",
    "category.stations" : "Crafting Stations",
    "category.other" : "Other",
    
    /* Skin Parts */
    "skin.classic" : "Classic",
    "skin.gold" : "Gold",
    "skin.grey" : "Gray",
    "skin.blue" : "Blue",
    "skin.green" : "Green",
    "skin.purple" : "Purple",
    "skin.clean" : "Clean",
    "skin.orange" : "Orange",
    "skin.yellow" : "Yellow",
    "skin.none" : "None",
    "skin.frankenstein" : "Frankenstein Bolts",
    "skin.christmas" : "Christmas Hat",

    /* Planet Names */
    "planet.earth" : "Earth",
    "planet.moon" : "The Moon",

    /* Titles, Strings, etc. */
    "title" : "Turtle Mania",
    "language.name" : "English (Simplified)",
    "menu.crafting" : "Crafting",
    "menu.help" : "Help",
    "menu.inventory" : "Inventory",
    "menu.skin" : "Skin Customization",
    "menu.planets" : "Spacecraft Navigation",
    "menu.save" : "Save/Load",
  },
};

var coreMod = new Mod("core", "Core game content. The game will not function correctly if this mod is not loaded.", modItems, modOres, modRecipes, modCraftingStations, modPlaceable, modPlaceFeatures, modCategories, modRegularCategories, modPlanets, modI18n);
coreMod.register();