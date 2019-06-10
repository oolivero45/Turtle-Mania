var modItems = {
  // Ores
  "item.ore.copper" : [0,7],
  "item.ore.iron" : [1,7],
  "item.ore.gold" : [2,7],
  "item.ore.tin" : [3,7],
  "item.ore.cobalt" : [6,7],
  "item.ore.titanium" : [7,7],
  "item.ore.osmium" : [8,7],
  "item.ore.uranium" : [9,7],
  "item.ore.silver" : [10,7],
  "item.ore.lead" : [11,7],
  "item.ore.nickel" : [13,7],
  
  // Bars
  "item.bar.copper" : [0,6],
  "item.bar.iron" : [1,6],
  "item.bar.gold" : [2,6],
  "item.bar.tin" : [3,6],
  "item.bar.steel" : [4,6],
  "item.bar.superalloy" : [5,6],
  "item.bar.cobalt" : [6,6],
  "item.bar.titanium" : [7,6],
  "item.bar.osmium" : [8,6],
  "item.bar.uranium" : [9,6],
  "item.bar.silver" : [10,6],
  "item.bar.lead" : [11,6],
  "item.bar.invar" : [12,6],
  "item.bar.nickel" : [13,6],
  "item.bar.bronze" : [14,6],
  "item.bar.frozen_steel" : [15, 6],
  "item.bar.biome.snow" : [6,2],
  "item.bar.biome.tundra" : [7,2],
  "item.bar.biome.plains" : [8,2],
  "item.bar.biome.swamp" : [9,2],
  "item.bar.biome.savannah" : [10,2],
  "item.bar.biome.desert" : [11,2],
  
  // Plates
  "item.plate.copper" : [0,8],
  "item.plate.iron" : [1,8],
  "item.plate.gold" : [2,8],
  "item.plate.tin" : [3,8],
  "item.plate.steel" : [4,8],
  "item.plate.superalloy" : [5,8],
  "item.plate.cobalt" : [6,8],
  "item.plate.titanium" : [7,8],
  "item.plate.osmium" : [8,8],
  "item.plate.uranium" : [9,8],
  "item.plate.silver" : [10,8],
  "item.plate.lead" : [11,8],
  "item.plate.invar" : [12,8],
  "item.plate.nickel" : [13,8],
  "item.plate.bronze" : [14,8],
  "item.plate.frozen_steel" : [15, 8],
  
  // Rods
  "item.rod.copper" : [0,9],
  "item.rod.iron" : [1,9],
  "item.rod.gold" : [2,9],
  "item.rod.tin" : [3,9],
  "item.rod.steel" : [4,9],
  "item.rod.superalloy" : [5,9],
  "item.rod.cobalt" : [6,9],
  "item.rod.titanium" : [7,9],
  "item.rod.osmium" : [8,9],
  "item.rod.uranium" : [9,9],
  "item.rod.silver" : [10,9],
  "item.rod.lead" : [11,9],
  "item.rod.invar" : [12,9],
  "item.rod.nickel" : [13,9],
  "item.rod.bronze" : [14,9],
  "item.rod.frozen_steel" : [15, 9],
  
  // Gemstones
  "item.gem.diamond" : [0,2],
  "item.gem.sapphire" : [1,2],
  "item.gem.jade" : [2,2],
  "item.gem.emerald" : [3,2],
  "item.gem.topaz" : [4,2],
  "item.gem.ruby" : [5,2],
  
  // Miscellaneous
  "item.coal" : [0,5],
  "item.stick" : [1,5],
  "item.wood" : [2,5],
  "item.stone" : [3,5],
};

var modOres = {
  "item.stone" : [20, ["snow","tundra","plains","swamp","savannah","desert","volcano"], 1],
  "item.coal" : [7, ["snow","tundra","plains","swamp","savannah","desert","volcano"], 1],

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
  "item.bar.frozen_steel" : [1, [["item.bar.steel",1],["item.compressed_ice",4],["item.coal",4]], "category.alloys"],
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
  "item.plate.frozen_steel" : [1, [["item.bar.frozen_steel",2],["item.coal",2]], "category.plates"],
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
  "item.rod.frozen_steel" : [1, [["item.plate.frozen_steel",2],["item.coal",4]], "category.rods"],
  "item.rod.superalloy" : [1, [["item.plate.superalloy",2],["item.coal",4]], "category.rods"],
};

var oresMod = new Mod("ores", "Base game ores and materials. The game will not function correctly if this mod is not loaded.", modItems, modOres, modRecipes, {}, {}, {}, {}, {}, {}, {}, {}, {});
oresMod.register();