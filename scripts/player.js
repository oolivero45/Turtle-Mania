var health = 200;
var oxygen = 800;

var playerspritex = 0;
var playerspritey = 32;

var playerskin = [[0,384],[0,416],[0,448],[0,512]];
var playerskinparts = ["classic","classic","classic","none"];

var changeSkin = function(params) {
  var head = params["head"];
  var body = params["body"];
  var legs = params["legs"];
  var accessory = params["accessory"];
  
  if (head === undefined || head === "none") {
    head = playerskinparts[0];
  }
  if (body === undefined || body === "none") {
    body = playerskinparts[1];
  }
  if (legs === undefined || legs === "none") {
    legs = playerskinparts[2];
  }
  if (accessory === undefined) {
    accessory = playerskinparts[3];
  }
  
  playerskin = [skins[0][head], skins[1][body], skins[2][legs], skins[3][accessory]];
  playerskinparts = [head, body, legs, accessory];
  if (achievements["alive"]["completed"] === false) {
    if (head !== body && head !== legs && body !== legs) {
      giveAchievement("alive");
    };
  };
  return true;
}

var skinWindow = function() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  if (presence !== "skin") {
    var menu = document.createElement("center");
    menu.id = 'menu_skin';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.skin") + '</h2>';
    document.getElementById("menuContainer").appendChild(menu);
    presence = "skin";
    
    var skinLayers = ["Head","Body","Legs","Accessory"];
    
    for (var k = 0; k < skinLayers.length; k++) {
      var title = document.createElement("h3");
      title.id = 'menu_skin_' + skinLayers[k].toLowerCase();
      title.innerHTML = skinLayers[k];
      title.className = "title";
      document.getElementById("menu_skin").appendChild(title);
      
      for (var i = 0; i < unlockedSkins[k].length; i++) {
        var icon = document.createElement("span");
        icon.id = 'skin_' + skinLayers[k].toLowerCase() + '_' + unlockedSkins[k][i];
        icon.className = 'skin_tile';
        icon.setAttribute("title", i18nGet("skin." + unlockedSkins[k][i]));
        icon.style.backgroundPosition = "-" + skins[k][unlockedSkins[k][i]][0] + "px -" + skins[k][unlockedSkins[k][i]][1] + "px";
        document.getElementById("menu_skin").appendChild(icon);
        $("#skin_" + skinLayers[k].toLowerCase() + "_" + unlockedSkins[k][i]).on("click", function () {
          var id = $(this).attr("id");
          var part = id.split("_")[1];
          var partName = id.split("_")[2];
          var changeObject = {};
          changeObject[part] = partName;
          changeSkin(changeObject);
        });
      }
    }
    
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    presence = "game";
  }
}

var unlockedSkins = [["classic"],["classic"],["classic"],["none","christmas"]];

var updateHealth = function(amount = 0) {
  health += amount;
  if (health <= 0) {
    clearInterval(healthLoop);
    die();
    return false;

    health = 0;
  } else if (health >= 200) {
    health = 200;
  }
  $("#health").width(health);
  $("#health").prop('title', health + " HP");
  return health;
}

var addHealth = function(amount) {
  var result = updateHealth(amount);
  return result;
}

var removeHealth = function(amount) {
  amount = 0 - amount;
  var result = updateHealth(amount);
  return result;
}

var updateOxygen = function(amount = 0) {
  oxygen += amount;
  if (oxygen <= 0) {
    if (inventoryGet("item.tank.gas.oxygen") > 0) {
      inventoryRemove("item.tank.gas.oxygen",1);
      oxygen = 800;
    } else {
      removeHealth(20);
      oxygen = 0;
    }
  } else if (oxygen >= 800) {
    oxygen = 800;
  }
  $("#oxygen").width(Math.ceil(oxygen/4));
  return health;
}

var addOxygen = function(amount) {
  var result = updateOxygen(amount);
  return result;
}

var removeOxygen = function(amount) {
  amount = 0 - amount;
  var result = updateOxygen(amount);
  return result;
}

if (seedTest === false) {
  var healthLoop = setInterval(function(){
    var breathable = planets[currentPlanet].atmosphere;
    if (breathable === true) {
      if (oxygen >= 800) {
        $("#oxygenbar").hide();
      }
      addOxygen(40);
    } else {
      $("#oxygenbar").show();
      removeOxygen(10);
    }
    addHealth(1);
  },1000);
}

var die = function() {
  dead = true;
  ctx.fillStyle = 'rgb(0, 0, 0)';
  clearInterval(timeLoop);
  var windowx = Math.floor($(document).width()/spriteSize)+1;
  var windowy = Math.floor($(document).height()/spriteSize)+1;
  ctx.clearRect(0, 0, (windowx*32), (windowy*32));
  ctx.fillRect(0, 0, (windowx*32), (windowy*32));
  ctx.font = "48px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!",canvas.width/2, canvas.height/8);
  var toolbar = document.getElementById("toolbar");
  while (toolbar.hasChildNodes()) {
    toolbar.removeChild(toolbar.lastChild);
  }
  toolbar.remove();
  var healthbar = document.getElementById("healthbar");
  while (healthbar.hasChildNodes()) {
    healthbar.removeChild(healthbar.lastChild);
  }
  healthbar.remove();
  var oxygenbar = document.getElementById("oxygenbar");
  while (oxygenbar.hasChildNodes()) {
    oxygenbar.removeChild(oxygenbar.lastChild);
  }
  oxygenbar.remove();
  setTimeout(function(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Press any key to restart. Doing so will automatically download a save file for your game.",canvas.width/2, canvas.height/2);
    $(document).keypress(function(e) {
      saveToFile();
      location.reload();
    });
  },3000);
}

var win = function() {
  giveAchievement("rocket");
  dead = true;
  clearInterval(timeLoop);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  var windowx = Math.floor($(document).width()/spriteSize)+1;
  var windowy = Math.floor($(document).height()/spriteSize)+1;
  ctx.clearRect(0, 0, (windowx*32), (windowy*32));
  ctx.fillRect(0, 0, (windowx*32), (windowy*32));
  ctx.font = "48px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Victory!",canvas.width/2, canvas.height/8);
  var toolbar = document.getElementById("toolbar");
  while (toolbar.hasChildNodes()) {
    toolbar.removeChild(toolbar.lastChild);
  }
  toolbar.remove();
  var healthbar = document.getElementById("healthbar");
  while (healthbar.hasChildNodes()) {
    healthbar.removeChild(healthbar.lastChild);
  }
  healthbar.remove();
  var oxygenbar = document.getElementById("oxygenbar");
  while (oxygenbar.hasChildNodes()) {
    oxygenbar.removeChild(oxygenbar.lastChild);
  }
  oxygenbar.remove();
  setTimeout(function(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("You successfully launched a rocket!",canvas.width/2, canvas.height/4);
    ctx.fillText("Press any key to restart the game. Doing so will automatically download a save file for your game.",canvas.width/2, (canvas.height/4)+64);
    $(document).keypress(function(e) {
      saveToFile();
      location.reload();
    });
  },3000);
  setTimeout(function(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Thank you for playing Turtle Mania!",canvas.width/2, (canvas.height/2));
    ctx.fillText("Code by Oliver Cox",canvas.width/2, (canvas.height/2)+64);
    ctx.fillText("Artwork by SOOP",canvas.width/2, (canvas.height/2)+96);
  },6000);
  setTimeout(function(){
    logo_image = new Image();
    logo_image.src = 'images/logo.png';
    logo_image.onload = function(){
      ctx.drawImage(logo_image, (canvas.width/2)-64, (canvas.height/2)+128);
    }
  },9000);
}
