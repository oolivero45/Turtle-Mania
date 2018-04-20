var changePlanet = function(planet) {
  if (tiles[currentPlanet][rocketTile].feature === "rocket") {
    tiles[currentPlanet][rocketTile].feature = "";
    inventoryAdd("item.rocket",1);
  }
  if (achievements["liftoff"]["completed"] === false) {
    giveAchievement("liftoff");
  }
  currentPlanet = planet;
  var playerx = parseInt(playerpos.split("x")[0]);
  var playery = parseInt(playerpos.split("x")[1]);
  drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), true, "Planet change");
}

var planetWindow = function() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  if (presence !== "planets") {
    var menu = document.createElement("center");
    menu.id = 'menu_planets';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.planets") + '</h2>';
    menu.setAttribute("oncontextmenu","return false;");
    document.getElementById("menuContainer").appendChild(menu);
    presence = "planets";
    
    var exitButton = document.createElement("button");
    exitButton.id = 'menu_planets_exit';
    exitButton.setAttribute("style","position: absolute; top: 8px; right: 8px;");
    exitButton.setAttribute("onclick","planetWindow();");
    exitButton.innerHTML = "X";
    document.getElementById("menu_planets").appendChild(exitButton);
    
    var keys = Object.keys(planets);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var newText = document.createElement("button");
      newText.id = 'planet_button_' + key;
      newText.className = 'menu_planets_button';
      newText.setAttribute("style","color: " + planets[key]["navbutton"]["fg"] + "; background-color: " + planets[key]["navbutton"]["bg"] + ";");
      newText.setAttribute("onclick","changePlanet('" + key + "');");
      newText.innerHTML = i18nGet("planet." + key);
      document.getElementById("menu_planets").appendChild(newText);
    }
    
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    //drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
    presence = "game";
  }
}