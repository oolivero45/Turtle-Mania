// Download a text file
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Close any open menus
function closeMenu() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  var playerx = parseInt(playerpos.split("x")[0]);
  var playery = parseInt(playerpos.split("x")[1]);
  presence = "game";
}

// Get the size of an object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Extend the element class to be able to remove an element
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

// Extend the NodeList class to be able to remove elements
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

// Create a new cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Read a cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Retrieve a random ore
function randomOre(biome) {
  tempOres = [];
  Object.keys(ores).forEach(function(key) {
    if (ores[key][2].includes(biome)) {
      for (var i = 0; i < ores[key][1]; i++) {
        tempOres.push(ores[key]);
      }
    }
  });
    
  return tempOres[Math.floor(Math.random() * tempOres.length)][0];
}

function getItemTexture(name) {
  pos = item_positions[name];
  if (pos === undefined) {
    pos = [19,19];
  }
  return pos;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function changeCategory(category, visibleCategories) {
  if (presence !== "craft") {
    showCategory = category;
  } else {
    showCategory = category;
    presence = "changing_category";
    if (visibleCategories !== undefined) {
      craftWindow(visibleCategories);
    } else {
      craftWindow();
    }
  }
  return true;
}

function notice(message) {
  $("#notice").html(message);
  $("#notice").show("slide",{direction: "right",duration:1000});
  setTimeout(function() {
    $("#notice").hide("slide",{direction: "right",duration:1000});
  },4000);
}

function giveAchievement(name) {
  var achievement = achievements[name];
  if (achievement === undefined) {
    console.warn("The game attempted to give the invalid achievement '" + name + "'.");
    return false;
  }
  var title = achievement["title"];
  var description = achievement["description"];
  var icon = achievement["image"];
  var reward = achievement["reward"];
  var completed = achievement["completed"];
  
  if (completed === true) {
    console.info("The game attempted to give you an achievement that you already have. (" + title + ")");
    return false;
  }
  
  for (var i = 0; i < reward.length; i++) {
    if (reward[i] === undefined) {
      reward[i] = "none";
    }
  }
  
  var content = "<span id='achievementImage' style='background-position: -" + icon[0] + "px -" + icon[1] + "px;'></span><b>Achievement Get: " + title + "</b><br><p style='display: inline;'>" + description + "</p>";
  notice(content);

  if (reward[0] !== "none" || reward[1] !== "none" || reward[2] !== "none" || reward[3] !== "none") {
    setTimeout(function(skinReward) {
      var content = "<b style='display: inline;'>Skin items unlocked: </b><p style='display: inline;'>Head: " + i18nGet("skin." + skinReward[0]) + ", Body: " + i18nGet("skin." + skinReward[1]) + ", Legs: " + i18nGet("skin." + skinReward[2]) + ", Accessory: " + i18nGet("skin." + skinReward[3]) + "</p>";
      notice(content);
    }, 5000, reward);
  }
  
  achievements[name]["completed"] = true;
  
  var newSkin = {};
  
  if (reward[0] !== "none") {
    newSkin['head'] = reward[0];
    unlockedSkins[0].push(reward[0]);
  }
  if (reward[1] !== "none") {
    newSkin['body'] = reward[1];
    unlockedSkins[1].push(reward[1]);
  }
  if (reward[2] !== "none") {
    newSkin['legs'] = reward[2];
    unlockedSkins[2].push(reward[2]);
  }
  if (reward[3] !== "none") {
    newSkin['accessory'] = reward[3];
    unlockedSkins[3].push(reward[3]);
  }
  
  changeSkin(newSkin);
  return true;
}

function playSound(filename){
  ion.sound.play(filename);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function withinRange(here, there, range) {
  var hx = parseInt(here.split("x")[0]);
  var hy = parseInt(here.split("x")[1]);
  var tx = parseInt(there.split("x")[0]);
  var ty = parseInt(there.split("x")[1]);
  var dist = [];
  if (hx >= tx && hy >= ty) {
    var xvalue = hx - tx;
    var yvalue = hy - ty;
    dist = [xvalue, yvalue];
  } else if (hx < tx && hy >= ty) {
    var xvalue = tx - hx;
    var yvalue = hy - ty;
    dist = [xvalue, yvalue];
  } else if (hx >= tx && hy < ty) {
    var xvalue = hx - tx;
    var yvalue = ty - hy;
    dist = [xvalue, yvalue];
  } else if (hx < tx && hy < ty) {
    var xvalue = tx - hx;
    var yvalue = ty - hy;
    dist = [xvalue, yvalue];
  }
  if (dist[0] <= range && dist[1] <= range) {
    return true;
  }
}

function allWithinRange(here, range) {
  var x = parseInt(here.split("x")[0]);
  var y = parseInt(here.split("x")[1]);
  var inRange = [];
  for (var i = (y - range); i <= (y + range); i++) {
    for (var k = (x - range); k <= (x + range); k++) {
      inRange.push(k + "x" + i);
    }
  }
  return inRange;
}

function checkForLightSources() {
  var litTiles = [];
  var keys = Object.keys(tiles[currentPlanet]);
  for (var i = 0; i < keys.length; i++) {
    if (Object.keys(lightSources).includes(tiles[currentPlanet][keys[i]].feature)) {
      var strength = lightSources[tiles[currentPlanet][keys[i]].feature];
      var id = tiles[currentPlanet][keys[i]].id;
      var checkTiles = allWithinRange(id, strength);
      for (var j = 0; j < checkTiles.length; j++) {
        litTiles.push(checkTiles[j]);
      }
    }
  }
  var playerLight = allWithinRange(playerpos, lightStrength);
  if (lightStrength !== 0) {
    for (var i = 0; i < playerLight.length; i++) {
      litTiles.push(playerLight[i]);
    }
  }
  return litTiles;
}