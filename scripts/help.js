var helpWindow = function() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  if (presence !== "help") {
    var menu = document.createElement("div");
    menu.id = 'menu_help';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">Help</h2><br>' + helpContent.replace("!!!LANGUAGE_REPLACE!!!",i18nGet("language.name") + " <img src='images/flags/" + language + ".png' title='" + i18nGet("language.name") + "'></img>");
    document.getElementById("menuContainer").appendChild(menu);
    presence = "help";
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    //drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
    presence = "game";
  }
}