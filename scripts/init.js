var planetKeys = null;

// Enable debug mode
function debugMode() {
  for (var i = 0; i < debugModeItems.length; i++) {
    inventoryAdd(debugModeItems[i][0], debugModeItems[i][1]);
  }
  debug = true;
  giveAchievement("debug");
  unlockedSkins[0] = Object.keys(skins[0]);
  unlockedSkins[1] = Object.keys(skins[1]);
  unlockedSkins[2] = Object.keys(skins[2]);
  unlockedSkins[3] = Object.keys(skins[3]);
}

var loadLoop = setInterval(function() {
  if (Object.keys(planets).length > 0) {
    planetKeys = Object.keys(planets);
    for (var i = 0; i < planetKeys.length; i++) {
      tiles[planetKeys[i]] = {};
    }
    
    init();
    clearInterval(loadLoop);
  }
}, 100);