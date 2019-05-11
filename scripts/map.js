var canvas = document.getElementById("gridContainer");
var ctx = canvas.getContext('2d');

var presence = "game";

var lastPos = "0x0";

var rocketTile = "";

var toolbarSelected = 1;
var toolbarSelected1 = 0;

var playerDrawX = "";
var playerDrawY = "";

var firstDraw = true;

var canMove = true;

function getTexture(x,y) {
  // Converts spritesheet grid references into pixel coordinates
  var posx = (x*spriteSheetSize);
  var posy = (y*spriteSheetSize);
  return [posx, posy];
}

var debug = false;

var heldItem = inventory[0];

function isAdjacent(here,id) {
  // here is the id of the current tile
  // id is the id of the tile to check.
  // The whole thing is in a try{} because it will throw an error when checking values that don't exist.
  // This can occur when checking a tile at the edge of the screen.
  var tile_x = parseInt(here.split("x")[0]);
  var tile_y = parseInt(here.split("x")[1]);
  try {if (tiles[currentPlanet][(tile_x) + "x" + (tile_y+1)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x) + "x" + (tile_y-1)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x+1) + "x" + (tile_y)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x-1) + "x" + (tile_y)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x+1) + "x" + (tile_y+1)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x-1) + "x" + (tile_y+1)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x+1) + "x" + (tile_y-1)].id === id) { return true; }} catch(e){}
  try {if (tiles[currentPlanet][(tile_x-1) + "x" + (tile_y-1)].id === id) { return true; }} catch(e){}
  return false;
}

var tiles = {}; // Object containing data for every tile on the map
var drawn = []; // Array con
var onScreen = {};
var onScreen2 = {};

var mmtiles = {};
var mmonScreen = {};

var playerpos = "";

windowx = Math.floor($(document).width()/spriteSize)+1;
windowy = Math.floor($(document).height()/spriteSize)+1;

var drawTile = function(x, y) {
  var allLightSources = checkForLightSources();
  ctx.clearRect((x*32), (y*32), (32), (32));
  var onScreenTile = onScreen[x + 'x' + y];
  var x2 = onScreenTile.x;
  var y2 = onScreenTile.y;
  var tile = tiles[currentPlanet][x2 + 'x' + y2];
  ctx.drawImage(img, tile.texposx, tile.texposy, 32, 32, tile.posx, tile.posy, 32, 32); // Draw background
  if (tile.feature !== "") {
    ctx.drawImage(img, tile.featurex, tile.featurey, 32, 32, tile.posx, tile.posy, 32, 32); // Draw foreground
  }
  if (allLightSources.includes(x2 + "x" + y2) === false) {
    ctx.fillStyle = 'rgba(0, 0, 0, ' + timefill + ')';
    ctx.fillRect((x*32), (y*32), spriteSize, spriteSize);
  }
}

var debugDrawTile = function(x, y, text = false) {
  ctx.clearRect((x*32), (y*32), (32), (32));
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect((x*32), (y*32), 32, 32);
  if (text !== false) {
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillText(text, (x*32), ((y+1)*32));
  }
}

var drawMap = function(maxx, maxy, startx, starty, timed = false, label = "", useTime = false) {
  animatedTiles = [];
  var allLightSources = null;
  if (firstDraw === false) {
    var allLightSources = checkForLightSources();
  }
  var startime = 0;
  var endtime = 0;
  if (timed === true) {
    startime = new Date().getTime();
  }
  onscreen = {};
  onScreen2 = {}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var toolbar = document.getElementById("toolbar");
  while (toolbar.hasChildNodes()) {
    toolbar.removeChild(toolbar.lastChild);
  }
  var countx = -1;
  var county = -1;
  for (var i = starty; i < (maxy + starty); i++) {
    if (i === starty) {
      county = -1;
    }
    county += 1;
    for (var k = startx; k < (maxx + startx); k++) {
      if (k === startx) {
        countx = -1;
      }
      countx += 1;
      var tile = {};
      var tileModX = 0;
      var tileModY = 0;
      if (k >= 0) {
        tileModX = 10;
      } else {
        tileModX = -10;
      }
      if (i >= 0) {
        tileModY = 10;
      } else {
        tileModY = -10;
      }
      var biomeid = Math.floor(pseudorandomTerrain(k + 'x' + i, seed) * Object.size(planets[currentPlanet]["biomes"]));
      var texvarcount = planets[currentPlanet]["biomes"][biomeid][0].length;
      var randpair = planets[currentPlanet]["biomes"][biomeid][0][Math.floor(pseudorandom(k + 'x' + i) * texvarcount)];
      var randx = randpair[0];
      var randy = randpair[1];
      var biome = planets[currentPlanet]["biomes"][biomeid][1];
      var positions = getTexture(randx,randy);
      var x = positions[0];
      var y = positions[1];
      var backgroundPosition = x + "px " + y + "px";
      var posx = (spriteSize * k) - (spriteSize * startx);
      var posy = (spriteSize * i) - (spriteSize * starty);
      var onScreenTile = {};
      var onScreenTile2 = {};
      onScreenTile.id = countx + 'x' + county;
      onScreenTile.x = k;
      onScreenTile.y = i;

      onScreenTile2.id = k + 'x' + i;
      onScreenTile2.x = countx;
      onScreenTile2.y = county;

      tile.id = k + 'x' + i;
      tile.texposx = getTexture(randx,randy)[0];
      tile.texposy = getTexture(randx,randy)[1];
      tile.posx = posx;
      tile.posy = posy;
      tile.feature = "";
      //tile.featurex = "";
      //tile.featurey = "";
      tile.biome = biome;
      tile.passable = true;
      tile.resource = "";
      tile.remaining = 0;
      //tile.x = k;
      //tile.y = i;
      tile.animation = false;
      tile.hover = "white";
      tile.hoverx = 0;
      tile.hovery = 128;
      
      tile.hit_sound = "none";
      var feature = false;
      if (biome === "ocean") {
        tile.passable = false;
      }
      if (seedTest === false) {
        if (currentPlanet in tiles) {
          if ((k + "x" + i) in tiles[currentPlanet]) {
            tile.rotation = tiles[currentPlanet][k + "x" + i].rotation;
            if (tiles[currentPlanet][k + "x" + i].feature !== "" && tiles[currentPlanet][k + "x" + i].passable === false) {
              tile.animation = tiles[currentPlanet][k + "x" + i].animation;
              tile.feature = tiles[currentPlanet][k + "x" + i].feature;
              tile.featurex = tiles[currentPlanet][k + "x" + i].featurex;
              tile.featurey = tiles[currentPlanet][k + "x" + i].featurey;
              tile.passable = tiles[currentPlanet][k + "x" + i].passable;
            } else if (tiles[currentPlanet][k + "x" + i].feature !== "" && tiles[currentPlanet][k + "x" + i].passable === true) {
              tile.animation = tiles[currentPlanet][k + "x" + i].animation;
              tile.feature = tiles[currentPlanet][k + "x" + i].feature;
              tile.featurex = tiles[currentPlanet][k + "x" + i].featurex;
              tile.featurey = tiles[currentPlanet][k + "x" + i].featurey;
              tile.passable = tiles[currentPlanet][k + "x" + i].passable;
            }
            if (tiles[currentPlanet][k + "x" + i].hit_sound !== "none") {
              tile.hit_sound = tiles[currentPlanet][k + "x" + i].hit_sound;
            }
            if (tiles[currentPlanet][k + "x" + i].resource !== "") {
              tile.resource = tiles[currentPlanet][k + "x" + i].resource;
              tile.remaining = tiles[currentPlanet][k + "x" + i].remaining;
            }
          } else {
            tile.rotation = (Math.floor(pseudorandom(tile.id, seed) * 4) * 90) * Math.PI / 180;
            var featureRandom = Math.floor(pseudorandom(tile.id, seed) * (Object.size(planets[currentPlanet]["features"]) + 10));
            if (featureRandom < Object.size(planets[currentPlanet]["features"])) {
              if (planets[currentPlanet]["features"][featureRandom][4].includes(biome)) {
                tile.passable = planets[currentPlanet]["features"][featureRandom][0];
                tile.feature = planets[currentPlanet]["features"][featureRandom][1];
                tile.featurex = planets[currentPlanet]["features"][featureRandom][2];
                tile.featurey = planets[currentPlanet]["features"][featureRandom][3];
                if (planets[currentPlanet]["features"][featureRandom][5] !== undefined) {
                  tile.resource = planets[currentPlanet]["features"][featureRandom][5];
                  tile.remaining = planets[currentPlanet]["features"][featureRandom][6];
                }
                if (planets[currentPlanet]["features"][featureRandom][7] !== "none") {
                  tile.hit_sound = planets[currentPlanet]["features"][featureRandom][7];
                }
                if (Object.keys(animations).includes(planets[currentPlanet]["features"][featureRandom][1])) {
                  tile.animation = animations[planets[currentPlanet]["features"][featureRandom][1]];
                }
                feature = true;
              }
            }
          }
          if (tile.animation !== false) {
            if (animatedTiles.includes(tile.id) === false) {
              animatedTiles.push(tile.id);
            }
          }
        }
      }
      onScreenTile2.passable = tile.passable;
      var passDifficulty = 0;
      if (tile.passable === false) {
        passDifficulty = -1;
      } else if (tile.feature === "") {
        passDifficulty = 0;
      } else if (tile.feature === "flowers-1" || tile.feature === "flowers-2") {
        passDifficulty = 1;
      } else {
        passDifficulty = 2;
      }
      onScreenTile2.passDifficulty = passDifficulty;

      tiles[currentPlanet][tile.id] = tile;
      onScreen[onScreenTile.id] = onScreenTile;
      onScreen2[onScreenTile2.id] = onScreenTile2;

      if (!tiles[currentPlanet][tile.id].passable) {
        // Mark all obstructed tiles with a red selector when hovered over.
        tiles[currentPlanet][tile.id].hover = "red";
        tiles[currentPlanet][tile.id].hoverx = 32;
        tiles[currentPlanet][tile.id].hovery = 128;
      } else if (tiles[currentPlanet][tile.id].resource !== "") {
        // Mark all resource-bearing tiles with a yellow selector when hovered over.
        tiles[currentPlanet][tile.id].hover = "yellow";
        tiles[currentPlanet][tile.id].hoverx = 96;
        tiles[currentPlanet][tile.id].hovery = 128;
      } else {
        // Mark all non-obstructed tiles with a white selector when hovered over.
        tiles[currentPlanet][tile.id].hover = "white";
        tiles[currentPlanet][tile.id].hoverx = 0;
        tiles[currentPlanet][tile.id].hovery = 128;
      }

      if (seedTest === false) {
        ctx.drawImage(img, tile.texposx, tile.texposy, 32, 32, tile.posx, tile.posy, 32, 32);
      } else {
        var colour = hexToRgb(planets[currentPlanet]["biomeColours"][biome]);
        ctx.fillStyle = "rgba(" + colour["r"] + "," + colour["g"] + "," + colour["b"] + ",255)";
        ctx.fillRect(tile.posx, tile.posy, spriteSize, spriteSize);
      }
      if (tile.feature !== "") {
        ctx.drawImage(img, tile.featurex, tile.featurey, 32, 32, tile.posx, tile.posy, 32, 32);
      }
      if (useTime === true) {
        if (playerDrawX !== tile.posx || playerDrawY !== tile.posy) {
          if (firstDraw === false) {
            if (allLightSources.includes(tile.id) === false) {
              ctx.fillStyle = 'rgba(0, 0, 0, ' + timefill + ')';
              ctx.fillRect(tile.posx, tile.posy, spriteSize, spriteSize);
            }
          }
        }
      }
    }
  }
  if (seedTest === false) {
    if (playerpos === "") {
      placePlayer();
    } else {
      var x = tiles[currentPlanet][playerpos].posx;
      var y = tiles[currentPlanet][playerpos].posy;
      ctx.drawImage(img, playerskin[0][0], playerskin[0][1], 32, 32, x, y, 32, 32);
      ctx.drawImage(img, playerskin[1][0], playerskin[1][1], 32, 32, x, y, 32, 32);
      ctx.drawImage(img, playerskin[2][0], playerskin[2][1], 32, 32, x, y, 32, 32);
      ctx.drawImage(img, playerskin[3][0], playerskin[3][1], 32, 32, x, y, 32, 32);
      if (useTime === true) {
        if (firstDraw === false) {
          if (allLightSources.includes(playerpos) === false) {
            ctx.fillStyle = 'rgba(0, 0, 0, ' + timefill + ')';
            ctx.fillRect(x, y, spriteSize, spriteSize);
          }
        }
      }
    }
    drawToolbar();
  } else {
    $("#healthbar").hide({"duration":0});
  }
  if (timed === true) {
    endtime = new Date().getTime();
    duration = endtime - startime;
    var timerLabel = "";
    if (label !== "") {
      timerLabel = " Generation label: " + label;
    }
    console.log("Map drawn in " + duration + "ms." + timerLabel);
  }
  
  //ctx.drawImage(img, tiles[currentPlanet][lastPos].hoverx, tiles[currentPlanet][lastPos].hovery, 32, 32, tiles[currentPlanet][lastPos].posx, tiles[currentPlanet][lastPos].posy, 32, 32);

  if (stats["biome_visited." + tiles[currentPlanet][playerpos].biome] === 0) {
    giveAchievement(tiles[currentPlanet][playerpos].biome);
  }
  stats["biome_visited." + tiles[currentPlanet][playerpos].biome] = stats["biome_visited." + tiles[currentPlanet][playerpos].biome] + 1;
  if (firstDraw === true) {
    firstDraw = false;
  }
}

var drawToolbar = function() {
  var toolbar = document.getElementById("toolbar");
  while (toolbar.hasChildNodes()) {
    toolbar.removeChild(toolbar.lastChild);
  }
  for (var i = 0; i < toolbarSize; i++) {
    var elem = document.createElement("div");
    elem.id = "toolbar" + i;
    if (toolbarSelected === (i+1) && toolbarSelected !== 0 && i !== 9) {
      elem.className = "toolbar_slot toolbar_active " + inventory[i][0];
    } else if (toolbarSelected === 0 && i === 9) {
      elem.className = "toolbar_slot toolbar_active " + inventory[i][0];
    } else {
      elem.className = "toolbar_slot " + inventory[i][0];
    }
    elem.innerHTML = inventory[i][1];
    if (inventory[i][0] === "") {
      elem.title = "empty slot";
    } else {
      elem.title = inventory[i][1] + " " + i18nGet(inventory[i][0]) + "\n" + i18nGet("desc." + inventory[i][0]);
    }
    document.getElementById("toolbar").appendChild(elem);
  }
}

var drawInventory = function() {
  var menuInventory = document.getElementById("menu_inventory");
  while (menuInventory.hasChildNodes()) {
    menuInventory.removeChild(menuInventory.lastChild);
  }
  menuInventory.innerHTML = '<h2 class="title">' + i18nGet("menu.inventory") + '</h2><button class="menu_close" onclick="javascript:closeMenu();"><i class="fa fa-fw fa-lg fa-times"></i></button>';

  if (toolbarSelected === 0) {
    toolbarSelected1 = 10;
  } else {
    toolbarSelected1 = toolbarSelected;
  }

  for (var i = 0; i < inventorySize[1]; i++) {
    var row = document.createElement("div");
    row.id = 'inventory_row_' + i;
    row.className = 'inventory_row';
    document.getElementById("menu_inventory").appendChild(row);
    for (var k = 0; k < inventorySize[0]; k++) {
      var x = k;
      var y = i;
      var slot = document.createElement("div");
      slot.id = 'inventory_slot_' + x + 'x' + y;
      slot.className = 'menu_slot inventory_slot ' + inventoryFull[x + "x" + y][0];
      slot.innerHTML = inventoryFull[x + "x" + y][1];
      if (inventoryFull[x + "x" + y][0] === "") {
        slot.title = "empty slot";
      } else {
        slot.title = inventoryFull[x + "x" + y][1] + " " + i18nGet(inventoryFull[x + "x" + y][0]);
      }
      document.getElementById("inventory_row_" + y).appendChild(slot);
      $("#inventory_slot_" + x + "x" + y).click(function() {
        var id = $(this).attr("id").replace("inventory_slot_", "");
        var currentToolbarSlot = inventory[toolbarSelected1-1];
        var currentInventorySlot = inventoryFull[id];
        if (inventory[toolbarSelected1-1][0] === "" && inventory[toolbarSelected1-1][1] === 0 && inventoryFull[id][0] !== "") {
          if (inventoryFull[id][0] !== "" && inventoryFull[id][1] !== 0) {
            inventory[toolbarSelected1-1] = inventoryFull[id];
            inventoryFull[id] = ["", 0];
            drawToolbar();
            drawInventory();
          } else if (inventoryFull[id][0] === inventory[toolbarSelected1-1][0] && inventoryFull[id][0] !== "") {
            var slotCount = inventory[toolbarSelected1-1][1];
            inventory[toolbarSelected1-1] = slotCount + inventoryFull[id][1];
            inventoryFull[id] = ["", 0];
            drawToolbar();
            drawInventory();
          }
        } else {
          if (inventoryFull[id][0] === "" && inventoryFull[id][1] === 0 && inventory[toolbarSelected1-1][0] !== "") {
            inventoryFull[id][0] = inventory[toolbarSelected1-1][0];
            inventoryFull[id][1] = inventory[toolbarSelected1-1][1];
            inventory[toolbarSelected1-1] = ["", 0];
            drawToolbar();
            drawInventory();
          } else if (inventoryFull[id][0] === inventory[toolbarSelected1-1][0] && inventory[toolbarSelected1-1][0] !== "") {
            var slotCount = inventoryFull[id][1];
            inventoryFull[id][1] = slotCount + inventory[toolbarSelected1-1][1];
            inventory[toolbarSelected1-1] = ["", 0];
            drawToolbar();
            drawInventory();
          }
        }
      });
    }
  }
}

var teleport = function(playerx, playery) {
  playerpos = playerx + 'x' + playery;
  drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), true, "Teleported");
  return true;
}

var locate = function() {
  return playerpos;
}

/*
Remove all saved tiles, reset player location, and redraw map.
This forces the game to regenerate every single tile.
*/
var forceRegen = function () {
  tiles = {};
  var planetKeys = Object.keys(planets);
  for (var i = 0; i < planetKeys.length; i++) {
    tiles[planetKeys[i]] = {};
  }
  playerpos = "0x0";
  var playerx = parseInt(playerpos.split("x")[0]);
  var playery = parseInt(playerpos.split("x")[1]);
  drawMap(windowx, windowy, 0, 0);
  placePlayer();
  drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), true, "Forced map regeneration");
  return true;
}

// Change the world generation seed, and force the map to be regenerated
var setSeed = function(newSeed) {
  seed = newSeed;
  forceRegen();
  return true;
}

/*
Place the player in their starting position
The game will loop through every tile from left to right, top to bottom, and check if each one is passable.
If it is passible (not obstructed by anything), the player will be placed on that tile, and the loop will halt.
*/
var placePlayer = function() {
  for (key in tiles[currentPlanet]) {
    var stop = false;
    if (!tiles[currentPlanet].hasOwnProperty(key)) continue;

    var obj = tiles[currentPlanet][key];
    for (var prop in obj) {
      if(!obj.hasOwnProperty(prop)) continue;

      if (prop === "id") {
        var id = obj[prop];
        if (tiles[currentPlanet][id].passable === true) {
          var tile_x = parseInt(id.split("x")[0]);
          var tile_y = parseInt(id.split("x")[1]);
          ctx.drawImage(img, playerskin[0][0], playerskin[0][1], 32, 32, tile_x, tile_y, 32, 32);
          ctx.drawImage(img, playerskin[1][0], playerskin[1][1], 32, 32, tile_x, tile_y, 32, 32);
          ctx.drawImage(img, playerskin[2][0], playerskin[2][1], 32, 32, tile_x, tile_y, 32, 32);
          playerpos = tile_x + "x" + tile_y;
          playerDrawX = tiles[currentPlanet][playerpos].posx;
          playerDrawY = tiles[currentPlanet][playerpos].posy;
          stop = true;
          break;
        }
      }
    }
    if (stop === true) {
      break;
    }
  }
}

// Game loading from file drop
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.

  // files is a FileList of File objects. List some properties.
  var output = [];
  var reader = new FileReader();
  reader.onload = function(e) {
    // get file content
    var text = e.target.result;
    loadGame(text);
  }
  for (var i = 0, f; f = files.item(i); i++) {
    output.push(reader.readAsText(f));
  }
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('gridContainer');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

var saveGame = function() {
  var output = "";
  output += JSON.stringify(tiles);
  output += "|||||";
  output += JSON.stringify(inventory);
  output += "|||||";
  output += JSON.stringify(inventoryFull);
  output += "|||||";
  output += playerpos;
  output += "|||||";
  output += JSON.stringify(unlockedSkins);
  output += "|||||";
  output += JSON.stringify(achievements);
  output = Base64.encode(LZString.compress(output));
  return output;
}

var getBrowserSaves = function() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("tm_saves") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("tm_saves"));
    }
  } else {
    alert("LocalStorage is not supported by your browser!");
  }
}

var saveToBrowser = function(save_slot = 0, overwrite = false) {
  if (typeof(Storage) !== "undefined") {
    var data = saveGame();
    if (localStorage.getItem("tm_save_" + save_slot.toString()) !== null && overwrite === false) {
      console.info("Couldn't save game, as another save file with that name already exists, and the overwrite parameter is not set to true.")
      return false;
    } else if (localStorage.getItem("tm_save_" + save_slot.toString()) !== null && overwrite === true) {
      localStorage.removeItem("tm_save_" + save_slot.toString());
      var saves = JSON.parse(localStorage.getItem("tm_saves"));
      saves.splice(saves.indexOf(save_slot, 1));
      localStorage.setItem("tm_saves", JSON.stringify(saves));
      console.info("Save file '" + save_slot.toString() + "' overwritten.");
    }
    localStorage.setItem("tm_save_" + save_slot.toString(), data);
    if (localStorage.getItem("tm_saves") === null) {
      localStorage.setItem("tm_saves", JSON.stringify([save_slot.toString()]));
    } else {
      var saves = JSON.parse(localStorage.getItem("tm_saves"));
      saves.push(save_slot.toString());
      localStorage.setItem("tm_saves", JSON.stringify(saves));
    }
    return true;
  } else {
    alert("LocalStorage is not supported by your browser!");
    return false;
  }
}

var sendToPastebin = function(save_data) {
  $.post("https://content-delivery.olivercjcox.uk/turtle-mania-pastebin-saves/save.php", {save_string: save_data}, function(data) {
    if (data.status === "error") {
      notice("<b>Save export failed</b>");
      console.warn("Failed to export save to pastebin. Response:");
      console.log(data);
    } else {
      navigator.clipboard.writeText(data.url).then(function() {
        notice("<b>Save exported successfully.<br>Export URL: <a href='" + data.url + "' target='_blank'>" + data.url + "</a><br>This URL has been copied to your clipboard.</b>");
        console.log("Save exported to pastebin. URL: " + data.url);
      }, function() {
        notice("<b>Save exported successfully.<br>Export URL: <a href='" + data.url + "' target='_blank'>" + data.url + "</a></b>");
        console.log("Save exported to pastebin. URL: " + data.url);
      });
    }
  }, "json");
}

var loadFromPastebin = function(pastebin_url) {
  $.get(pastebin_url.replace("https://pastebin.com/","https://content-delivery.olivercjcox.uk/turtle-mania-pastebin-saves/load.php?key="), function(data) {
    if (data.status === "error") {
      notice("<b>Save import failed</b>");
      console.warn("Failed to import save from pastebin. Response:");
      console.log(data);
    } else {
      notice("<b>Save imported successfully</b>")
      loadGame(data);
    }
  });
}

var saveToFile = function() {
  var data = saveGame();
  download("saved_game.sav",data);
  return true;
}

var closeSaveWindow = function() {
  if (presence === "save") {
    saveWindow();
  }
  return true;
}

var saveWindow = function() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  if (presence !== "save") {
    var menu = document.createElement("center");
    menu.id = 'menu_save';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.save") + '</h2><button class="menu_close" onclick="javascript:closeMenu();"><i class="fa fa-fw fa-lg fa-times"></i></button>';
    document.getElementById("menuContainer").appendChild(menu);
    presence = "save";
    
    var savebutton = document.createElement("button");
    savebutton.id = "save_button";
    savebutton.innerHTML = "New Save";
    savebutton.onclick = function() {
      var savename = prompt("Please enter the name you would like to give to the new save file.");
      if (savename !== null) {
        var saved = saveToBrowser(savename);
        if (saved === false) {
          var saveconfirm = confirm("Do you want to overwrite the save that already exists with that name?");
          if (saveconfirm === true) {
            saveToBrowser(savename, true);
            var content = "<span style='color: #009900;'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-save fa-3x fa-fw' aria-hidden='true' style='display: inline;'></i>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style='font-family: Arial; display: inline;'>Game '" + savename + "' Saved Successfully!</h3></span>";
            notice(content);
          }
        } else {
          var content = "<span style='color: #009900;'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-save fa-3x fa-fw' aria-hidden='true' style='display: inline;'></i>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style='font-family: Arial; display: inline;'>Game '" + savename + "' Saved Successfully!</h3></span>";
          notice(content);
        }
        saveWindow();
      } else {
        saveWindow();
      }
    }
    
    document.getElementById("menu_save").appendChild(savebutton);
    var loadheader = document.createElement("h3");
    loadheader.id = "loadheader";
    loadheader.className = "title";
    loadheader.innerHTML = "Load Existing Save";
    document.getElementById("menu_save").appendChild(loadheader);
    
    var saves = getBrowserSaves();
    for (var i = 0; i < saves.length; i++) {
      var loadbutton = document.createElement("button");
      loadbutton.id = "load_" + saves[i];
      loadbutton.classList.add('load_button');
      loadbutton.innerHTML = saves[i].replace("load_","");
      loadbutton.onclick = function(buttonid = this.id) {
        loadFromBrowser(buttonid.target.id.replace("load_",""));
        var content = "<span style='color: #009900;'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-save fa-3x fa-fw' aria-hidden='true' style='display: inline;'></i>&nbsp;&nbsp;&nbsp;&nbsp;<h3 style='font-family: Arial; display: inline;'>Game Loaded Successfully!</h3></span>";
        notice(content);
        saveWindow();
      }
      document.getElementById("menu_save").appendChild(loadbutton);
      
      var pastebinsavebutton = document.createElement("button");
      pastebinsavebutton.id = "pastebin_save_" + saves[i];
      pastebinsavebutton.classList.add('pastebin_save_button');
      pastebinsavebutton.innerHTML = "<i class='fa fa-cloud-upload' aria-hidden='true'></i> Export";
      pastebinsavebutton.setAttribute("title","Export save to Pastebin");
      pastebinsavebutton.onclick = function(buttonid = this.id) {
        var save_data = loadFromBrowser(buttonid.target.id.replace("pastebin_save_",""), false);
        sendToPastebin(save_data);
      }
      document.getElementById("menu_save").appendChild(pastebinsavebutton);
    }
    
    
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    presence = "game";
  }
}

var backupSaves = function() {
  var saves = getBrowserSaves();
  
}

var loadGame = function(data) {
  var data = LZString.decompress(Base64.decode(data));
  var loadTiles = data.split("|||||")[0];
  var loadInventory = data.split("|||||")[1];
  var loadInventoryFull = data.split("|||||")[2];
  var loadPlayerpos = data.split("|||||")[3];
  var loadUnlockedSkins = data.split("|||||")[4];
  var loadAchievements = data.split("|||||")[5];
  tiles = JSON.parse(loadTiles);
  inventory = JSON.parse(loadInventory);
  inventoryFull = JSON.parse(loadInventoryFull);
  playerpos = loadPlayerpos;
  unlockedSkins = JSON.parse(loadUnlockedSkins);
  achievements = JSON.parse(loadAchievements);
  var playerx = parseInt(playerpos.split("x")[0]);
  var playery = parseInt(playerpos.split("x")[1]);
  drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
  return true;
}

var loadFromBrowser = function(save_slot = 0, auto_load = true) {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("tm_save_" + save_slot.toString()) === null) {
      console.warn("Tried to load non-existent save file.");
      return false;
    }
    var data = localStorage.getItem("tm_save_" + save_slot.toString());
    if (auto_load === true) {
      loadGame(data);
      return true;
    } else {
      return data;
    }
  } else {
    alert("LocalStorage is not supported by your browser!");
    return false;
  }
}

var saveToCookie = function() {
  var data = saveGame();
  setCookie("savedgame",data,365);
  return true;
}

var loadFromCookie = function() {
  if (getCookie("savedgame") === "") {
    return false;
  } else {
    var data = getCookie("savedgame");
    loadGame(data);
    return true;
  }
}

// Movement
$(document).keydown(function(e) {
  if (dead === true) {
    return false;
  }
  
  debugWordBuffer.shift();
  debugWordBuffer.push(e.key);
  
  if (debugWordBuffer.join("") === debugWord) {
    debugMode();
  }
  
  var tile_x = 0;
  var tile_y = 0;
  var render = false;
  if (e.key === "w" || e.which === 38) {
    if (canMove === true) {
      tile_x = parseInt(playerpos.split("x")[0]);
      tile_y = parseInt(playerpos.split("x")[1]) - 1;
      render = true;
    }
  } else if (e.key === "s" || e.which === 40) {
    if (canMove === true) {
      tile_x = parseInt(playerpos.split("x")[0]);
      tile_y = parseInt(playerpos.split("x")[1]) + 1;
      render = true;
    }
  } else if (e.key === "a" || e.which === 37) {
    if (canMove === true) {
      tile_x = parseInt(playerpos.split("x")[0]) - 1;
      tile_y = parseInt(playerpos.split("x")[1]);
      render = true;
    }
  } else if (e.key === "d" || e.which === 39) {
    if (canMove === true) {
      tile_x = parseInt(playerpos.split("x")[0]) + 1;
      tile_y = parseInt(playerpos.split("x")[1]);
      render = true;
    }
  } else if (e.key === "c") {
    craftWindow();
    render = false;
  } else if (e.key === "h") {
    helpWindow();
    render = false;
  } else if (e.key === "e" || e.key === "i") {
    inventoryWindow();
    render = false;
  } else if (e.key === "p") {
    skinWindow();
    render = false;
  } else if (e.key === "l") {
    saveWindow();
    render = false;
  } else if (e.key in ["1","2","3","4","5","6","7","8","9","0"]) {
    toolbarSelected = parseInt(e.key);
    if (toolbarSelected === 0) {
      toolbarSelected1 = 10;
    } else {
      toolbarSelected1 = toolbarSelected;
    }
    drawToolbar();
    render = false;
    if (toolbarSelected === 0 || toolbarSelected === 10) {
      heldItem = inventory[9];
    } else {
      heldItem = inventory[toolbarSelected-1];
    }
  } else if (e.key === "q") {
    if (toolbarSelected === 0) {
      inventoryRemove(inventory[9][0]);
    } else {
      inventoryRemove(inventory[toolbarSelected-1][0]);
    }
    render = false;
  }
  if (render === true) {
    if (tiles[currentPlanet][tile_x + 'x' + tile_y].passable === true) {
      var moveModifier = 1;
      if (floors[tiles[currentPlanet][playerpos].feature] !== undefined) {
        moveModifier = floors[tiles[currentPlanet][playerpos].feature];
      }
      if (debug === false) {
        canMove = false;
        setTimeout(function() {canMove = true}, Math.floor(moveDelay / moveModifier));
      }
      stats["tiles_moved"] = stats["tiles_moved"] + 1;
      playerpos = tile_x + "x" + tile_y;
      var playerx = parseInt(playerpos.split("x")[0]);
      var playery = parseInt(playerpos.split("x")[1]);
      drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), false, "", true);
    }
  }
});

// Button Movement
// Movement
var mobileControl = function(action) {
  if (dead === true) {
    return false;
  }
  var tile_x = 0;
  var tile_y = 0;
  var render = false;
  if (action === "up") {
    tile_x = parseInt(playerpos.split("x")[0]);
    tile_y = parseInt(playerpos.split("x")[1]) - 1;
    render = true;
  } else if (action === "down") {
    tile_x = parseInt(playerpos.split("x")[0]);
    tile_y = parseInt(playerpos.split("x")[1]) + 1;
    render = true;
  } else if (action === "left") {
    tile_x = parseInt(playerpos.split("x")[0]) - 1;
    tile_y = parseInt(playerpos.split("x")[1]);
    render = true;
  } else if (action === "right") {
    tile_x = parseInt(playerpos.split("x")[0]) + 1;
    tile_y = parseInt(playerpos.split("x")[1]);
    render = true;
  } else if (action === "craft") {
    craftWindow();
    render = false;
  } else if (action === "help") {
    helpWindow();
    render = false;
  } else if (action === "inventory") {
    inventoryWindow();
    render = false;
  } else if (action === "save") {
    saveWindow();
    render = false;
  } else if (action === "skin") {
    skinWindow();
    render = false;
  } else if (action === "toolbar") {
    if (toolbarSelected === 10 || toolbarSelected === 0) {
      toolbarSelected = 1;
    } else {
      toolbarSelected = toolbarSelected + 1;
    }
    if (toolbarSelected === 10) {
      toolbarSelected = 0;
    }
    drawToolbar();
    render = false;
    heldItem = inventory[toolbarSelected-1];
  } else if (action === "drop") {
    if (toolbarSelected === 0) {
      inventoryRemove(inventory[9][0]);
    } else {
      inventoryRemove(inventory[toolbarSelected-1][0]);
    }
    render = false;
  } else if (action === "mode") {
    mobileMode = (mobileMode === false);
    render = false;
  }
  if (tiles[currentPlanet][tile_x + 'x' + tile_y].passable === true && render === true) {
    stats["tiles_moved"] = stats["tiles_moved"] + 1;
    playerpos = tile_x + "x" + tile_y;
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
  }
}

// Resize detection
$(window).resize(function() {
  if (dead === true) {
    windowx = Math.floor($(document).width()/spriteSize)+1;
    windowy = Math.floor($(document).height()/spriteSize)+1;
    canvas = document.getElementById("gridContainer");
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    canvasW = canvas.width;
    canvasH = canvas.height;
    ctx.clearRect(0, 0, (windowx*32), (windowy*32));
    ctx.fillRect(0, 0, (windowx*32), (windowy*32));
    return false;
  }
  windowx = Math.floor($(document).width()/spriteSize)+1;
  windowy = Math.floor($(document).height()/spriteSize)+1;
  var playerx = parseInt(playerpos.split("x")[0]);
  var playery = parseInt(playerpos.split("x")[1]);
  canvas.width = $(window).width();
  canvas.height = $(window).height();
  drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
  playerDrawX = tiles[currentPlanet][playerpos].posx;
  playerDrawY = tiles[currentPlanet][playerpos].posy;
});

// Initial generation
var img = new Image();
img.onload = function() {
  var loadLoop2 = setInterval(function() {
    if (planetKeys.length > 0) {
      clearInterval(loadLoop2);
      drawMap(windowx, windowy, 0, 0, true, "Initial generation around (0,0)");
      drawMap(windowx, windowy, (0-Math.floor(windowx/2)), (0-Math.floor(windowy/2)), true, "Initial generation around player location");
      placePlayer();

      if (seedTest === false) {
        $("#gridContainer").mousemove(function(e) {
          if (dead === true) {
            return false;
          }
          var x = Math.floor((e.pageX-$("#gridContainer").offset().left) / 32);
          var y = Math.floor((e.pageY-$("#gridContainer").offset().top) / 32);
          var newPos = onScreen[x + 'x' + y].x + 'x' + onScreen[x + 'x' + y].y;
          if (newPos !== lastPos) {
            var tile = tiles[currentPlanet][newPos];
            var tile2 = tiles[currentPlanet][lastPos];
            var x2 = (tile2.posx/32);
            var y2 = (tile2.posy/32);
            mousePos = newPos;
            if (newPos !== playerpos) {
              ctx.drawImage(img, tile.hoverx, tile.hovery, 32, 32, tile.posx, tile.posy, 32, 32);
            }
            if (lastPos !== playerpos) {
              drawTile(x2, y2);
            }
            lastPos = newPos;
          }
        });

        $('#gridContainer').mousedown(function(e){
          if (mobileMode !== null) {
            if (mobileMode === true) {
              e.which = 1;
            } else if (mobileMode === false) {
              e.which = 3;
            }
          }
          switch (e.which) {
            case 1:
              var x = Math.floor((e.pageX-$("#gridContainer").offset().left) / 32);
              var y = Math.floor((e.pageY-$("#gridContainer").offset().top) / 32);
              var id = x + 'x' + y;
              var x = onScreen[id].x;
              var y = onScreen[id].y;
              var id = x + 'x' + y;
              var tile_id = x + "x" + y;
              var tile_x = parseInt(tile_id.split("x")[0]);
              var tile_y = parseInt(tile_id.split("x")[1]);
              var biome = tiles[currentPlanet][tile_id].biome;
              var pass = false;
              if (debug === true) {
                console.log("(" + tile_x + "," + tile_y + ")");
                console.log(tiles[currentPlanet][tile_x + "x" + tile_y]);
              }
              // Check if the tile is adjacent to the player
              if (tiles[currentPlanet][(x) + 'x' + (y+1)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x) + 'x' + (y-1)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x+1) + 'x' + (y)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x-1) + 'x' + (y)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x+1) + 'x' + (y+1)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x+1) + 'x' + (y-1)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x-1) + 'x' + (y+1)].id === playerpos) {
                pass = true;
              } else if (tiles[currentPlanet][(x-1) + 'x' + (y-1)].id === playerpos) {
                pass = true;
              }
              if (pass === true) {
                if (tiles[currentPlanet][id].hit_sound !== "none") {
                  playSound(tiles[currentPlanet][id].hit_sound);
                }
                if (tiles[currentPlanet][id].resource === "none") {
                  return false;
                }
                if (items.includes(tiles[currentPlanet][id].resource) || tiles[currentPlanet][id].resource === "ore") {
                  if (tiles[currentPlanet][id].remaining === 0) {
                    tiles[currentPlanet][id].feature = "";
                    tiles[currentPlanet][id].featurex = "";
                    tiles[currentPlanet][id].featurey = "";
                    tiles[currentPlanet][id].passable = true;
                    tiles[currentPlanet][id].resource = "";
                    tiles[currentPlanet][id].hit_sound = "none";
                    tiles[currentPlanet][id].remaining = 0;
                    var playerx = parseInt(playerpos.split("x")[0]);
                    var playery = parseInt(playerpos.split("x")[1]);
                    drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
                  } else {
                    var remaining = tiles[currentPlanet][id].remaining;
                    tiles[currentPlanet][id].remaining = (remaining - 1);
                    if (tiles[currentPlanet][id].resource === "ore") {
                      var mineCount = 1;
                      if (pickaxes[heldItem[0]] === undefined) {
                        mineCount = 1;
                      } else {
                        mineCount = pickaxes[heldItem[0]];
                      }
                      if (heldItem[0] === "item.tool.pick.debug") {
                        giveAchievement("debug");
                      }
                      var resource = randomOre(biome);
                      inventoryAdd(resource, mineCount);
                      stats["rocks_harvested"] = stats["rocks_harvested"] + 1;
                      stats[resource + "_collected"] = stats[resource + "_collected"] + mineCount;
                      if (stats[resource + "_collected"] === 1 && resource.includes("item.ore.")) {
                        if (stats["rocks_harvested"] === 1) {
                          setTimeout(function() {
                            giveAchievement(resource.replace("item.ore.",""));
                          },5000);
                        } else {
                          giveAchievement(resource.replace("item.ore.",""));
                        }
                      }

                      if (stats[resource + "_collected"] === 1 && resource.includes("item.gem.")) {
                        if (stats["rocks_harvested"] === 1) {
                          setTimeout(function() {
                            giveAchievement(resource.replace("item.gem.",""));
                          },5000);
                        } else {
                          giveAchievement(resource.replace("item.gem.",""));
                        }
                      }

                      if (stats[resource + "_collected"] === 1 && ["item.stone","item.coal"].includes(resource)) {
                        if (stats["rocks_harvested"] === 1) {
                          setTimeout(function() {
                            giveAchievement(resource.replace("item.",""));
                          },5000);
                        } else {
                          giveAchievement(resource.replace("item.",""));
                        }
                      }

                      if (stats["rocks_harvested"] === 1) {
                        giveAchievement("mine");
                      }
                      if (gemstones.includes(resource)) {
                        if (gemstones_collected[resource] === 0) {
                          gemstones_collected[resource] = 1;
                          gemstones_total += 1;
                        }
                        if (gemstones_total === 6) {
                          giveAchievement("shiny");
                        }
                      }
                    } else if (tiles[currentPlanet][id].resource === "item.wood") {
                      var mineCount = 1;
                      if (axes[heldItem[0]] === undefined) {
                        mineCount = 1;
                      } else {
                        mineCount = axes[heldItem[0]];
                      }
                      if (heldItem[0] === "item.tool.axe.debug") {
                        giveAchievement("debug");
                      }
                      inventoryAdd(tiles[currentPlanet][id].resource, mineCount);
                      stats["trees_harvested"] = stats["trees_harvested"] + 1;
                      stats[tiles[currentPlanet][id].resource + "_collected"] = stats[tiles[currentPlanet][id].resource + "_collected"] + mineCount;
                      if (stats["trees_harvested"] === 1) {
                        giveAchievement("timber");
                      }
                    } else {
                      inventoryAdd(tiles[currentPlanet][id].resource);
                    }
                    if (tiles[currentPlanet][id].remaining === 0) {
                      tiles[currentPlanet][id].feature = "";
                      tiles[currentPlanet][id].featurex = "";
                      tiles[currentPlanet][id].featurey = "";
                      tiles[currentPlanet][id].passable = true;
                      tiles[currentPlanet][id].resource = "";
                      tiles[currentPlanet][id].remaining = 0;
                      tiles[currentPlanet][id].hit_sound = "none";
                      var playerx = parseInt(playerpos.split("x")[0]);
                      var playery = parseInt(playerpos.split("x")[1]);
                      drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), false, "", true);
                    }
                  }
                }
              }
              break;
            case 2:
              if (debug === true) {
                var osx = Math.floor((e.pageX-$("#gridContainer").offset().left) / 32);
                var osy = Math.floor((e.pageY-$("#gridContainer").offset().top) / 32);
                var osid = osx + "x" + osy;
                var id = onScreen[osid].id;
                var x2 = onScreen[osid].x;
                var y2 = onScreen[osid].y;
                console.log("Teleported to (" + id + ")");
                teleport(x2, y2);
              }
              break;
            case 3:
              var x2 = Math.floor((e.pageX-$("#gridContainer").offset().left) / 32);
              var y2 = Math.floor((e.pageY-$("#gridContainer").offset().top) / 32);
              var id = x2 + "x" + y2;
              var x = onScreen[id].x;
              var y = onScreen[id].y;
              var theItem = inventory[toolbarSelected-1];
              var canPlace = placeable[theItem[0]];
              if (tiles[currentPlanet][x + "x" + y].feature === "rocket") {
                rocketTile = x + "x" + y;
                planetWindow();
              } else if (craftingStations[tiles[currentPlanet][x + "x" + y].feature] !== undefined) {
                if (craftingStations[tiles[currentPlanet][x + "x" + y].feature].sound !== null) {
                  playSound(craftingStations[tiles[currentPlanet][x + "x" + y].feature].sound);
                }
                craftWindow(craftingStations[tiles[currentPlanet][x + "x" + y].feature].categories);
              } else {
                if (canPlace !== undefined) {
                  var featureid = canPlace;
                  var clickedTile = x + "x" + y;
                  if (tiles[currentPlanet][clickedTile].feature === "" || tiles[currentPlanet][clickedTile].feature === undefined) {
                    tiles[currentPlanet][clickedTile].passable = placeFeatures[featureid][0];
                    tiles[currentPlanet][clickedTile].feature = placeFeatures[featureid][1];
                    tiles[currentPlanet][clickedTile].featurex = placeFeatures[featureid][2];
                    tiles[currentPlanet][clickedTile].featurey = placeFeatures[featureid][3];
                    if (placeFeatures[featureid][5] !== undefined) {
                      tiles[currentPlanet][clickedTile].resource = placeFeatures[featureid][5];
                      tiles[currentPlanet][clickedTile].remaining = placeFeatures[featureid][6];
                    }
                    if (placeFeatures[featureid][7] !== "none") {
                      tiles[currentPlanet][clickedTile].hit_sound = placeFeatures[featureid][7];
                    } else {
                      tiles[currentPlanet][clickedTile].hit_sound = "none";
                    }
                    inventoryRemove(inventory[toolbarSelected-1][0], 1);
                    drawTile(x2,y2);
                  }
                }
              }
              break;
            default:
              break;
          }
        });
      }
    }
  }, 100);
}
img.src = "./images/spritesheet.png";

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $("#mobileButtons").css("display","inline");
  $("#menuContainer").addClass("menuContainer_mobile");
  mobileMode = true;
}

// Autosave every 5 minutes
var autosaveLoop = setInterval(function() {
  if (settings["autosave"] === true) {
    saveToBrowser("Autosave", true);
  }
}, 300000);

var pathDrawTest = function(path) {
  pathArray = Object.keys(path);
  for (var i = 0; i < pathArray.length; i++) {
    moveTo = path[pathArray[i]];
    debugDrawTile(moveTo.x, moveTo.y, i.toString());
  }
}

var pathTest = function(noFeaturePass = false) {
  var grid = [];
  var allTiles = Object.keys(tiles[currentPlanet]).sort;
  for (var i = 0; i < windowy; i++) {
    var gridRow = [];
    for (var j = 0; j < windowx; j++) {
      gridRow.push(onScreen2[onScreen[j + 'x' + i].x + 'x' + onScreen[j + 'x' + i].y].passDifficulty);
    }
    grid.push(gridRow);
  }
  var easystar = new EasyStar.js();
  easystar.setGrid(grid);
  if (noFeaturePass === true) {
    easystar.setAcceptableTiles([0]);
    easystar.setTileCost(0, 1); // nothing
  } else {
    easystar.setAcceptableTiles([0, 1, 2]);
    easystar.setTileCost(0, 1); // nothing
    easystar.setTileCost(1, 1); // non-blocking features e.g. flowers
    easystar.setTileCost(2, 2); // all other features
  }
  if (debug === true) {
    console.log(grid);
  }
  var destination = onScreen2[playerpos.split('x')[0] + 'x' + playerpos.split('x')[1]];
  easystar.findPath(0, 0, destination.x, destination.y, function( path ) {
    if (path === null) {
      console.warn("Path was not found.");
    } else {
      pathDrawTest(path);
    }
  });
  easystar.calculate();
}
