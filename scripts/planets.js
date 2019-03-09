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
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.planets") + '</h2><button class="menu_close" onclick="javascript:closeMenu();"><i class="fa fa-fw fa-lg fa-times"></i></button>';
    menu.setAttribute("oncontextmenu","return false;");
    document.getElementById("menuContainer").appendChild(menu);
    presence = "planets";
    
    var exitButton = document.createElement("button");
    exitButton.id = 'menu_planets_exit';
    exitButton.setAttribute("style","position: absolute; top: 8px; right: 8px;");
    exitButton.setAttribute("onclick","planetWindow();");
    exitButton.innerHTML = "X";
    document.getElementById("menu_planets").appendChild(exitButton);
    
    var planetKeys = Object.keys(planets);
    for (var i = 0; i < planetKeys.length; i++) {
      var planetKey = planetKeys[i];
      var newText = document.createElement("button");
      newText.id = 'planet_button_' + planetKey;
      newText.className = 'menu_planets_button';
      newText.setAttribute("style","color: " + planets[planetKey]["navbutton"]["fg"] + "; background-color: " + planets[planetKey]["navbutton"]["bg"] + ";");
      newText.setAttribute("onclick","changePlanet('" + planetKey + "');");
      newText.innerHTML = i18nGet("planet." + planetKey) + " - Temperature: (" + planets[planetKey]["temperature"] + "K / " + (planets[planetKey]["temperature"] - 273) + "°C / " + Math.round((planets[planetKey]["temperature"] - 273) * 9 / 5 + 32) + "°F)";
      document.getElementById("menu_planets").appendChild(newText);
    }
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    //drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
    presence = "game";
  }
}