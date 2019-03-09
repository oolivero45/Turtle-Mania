var time = 170;
const timemax = 480;
var timeDisplay = "";
var debugTimeCount = 0;

var lightStrength = 0;

var timefill = 1;

const times = [
  ["night",0,130],
  ["dawn",130,170],
  ["day",170,380],
  ["dusk",380,420],
  ["night",420,480],
];
function secondsToHms(d) {
  d = Number(d);

  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2);
}

if (seedTest === false) {
  var timeLoop = setInterval(function() {
    var timename = "";
    time += 1;
    if (time > timemax) {
      time = 0;
    }
    for (var i = 0; i < times.length; i++) {
      if (times[i][1] < time && times[i][2] >= time) {
        timename = times[i][0];
      }
    }
    if (timename === "dawn") {
      timefill = (1-((time-130)/40))/1.5;
    } else if (timename === "day") {
      timefill = 0;
    } else if (timename === "dusk") {
      timefill = 1+(((time-420)/40)/1.5);
    } else if (timename === "night") {
      timefill = (1/3)*2;
    }
    
    if (timefill > (2/3)) {
      timefill = 2/3;
    }
    var devBuildMsg = "";
    if (devBuild === true) {
      devBuildMsg = "Development Build " + buildNumber + "<br>";
    }
    var mobileModeMsg = "";
    if (mobileMode === true) {
      mobileModeMsg = "<br>Click Mode: <b>Left</b>";
    } else if (mobileMode === false) {
      mobileModeMsg = "<br>Click Mode: <b>Right</b>";
    }
    
    timeDisplay = devBuildMsg + secondsToHms((time/480)*86400) + mobileModeMsg;
    
    if (debug === true) {
      timeDisplay = devBuildMsg + secondsToHms((time/480)*86400) + mobileModeMsg + "<hr style='color: #ffffff; width: 200px;'><b>DEBUG MODE ENABLED</b><br>playerpos: " + playerpos + " | currentPlanet: " + currentPlanet + " | heldItem[0]: " + heldItem[0] + " | canMove: " + canMove + "<br>mousePos: " + mousePos + " | mouseFeature: " + tiles[currentPlanet][mousePos]["feature"] + " | mousePassable: " + tiles[currentPlanet][mousePos]["passable"] + " | mouseResource: " + tiles[currentPlanet][mousePos]["resource"] + " | mouseRemaining: " + tiles[currentPlanet][mousePos]["remaining"];
      
      var debugTimeLoopFaster = setInterval(function() {
        debugTimeCount += 1;
        var devBuildMsg = "";
        if (devBuild === true) {
          devBuildMsg = "Development Build " + buildNumber + "<br>";
        }
        if (mobileMode === true) {
          mobileModeMsg = "<br>Click Mode: <b>Left</b>";
        } else if (mobileMode === false) {
          mobileModeMsg = "<br>Click Mode: <b>Right</b>";
        }
        timeDisplay = devBuildMsg + secondsToHms((time/480)*86400) + mobileModeMsg + "<hr style='color: #ffffff; width: 200px;'><b>DEBUG MODE ENABLED</b><br>playerpos: " + playerpos + " | currentPlanet: " + currentPlanet + " | heldItem[0]: " + heldItem[0] + " | canMove: " + canMove + "<br>mousePos: " + mousePos + " | mouseFeature: " + tiles[currentPlanet][mousePos]["feature"] + " | mousePassable: " + tiles[currentPlanet][mousePos]["passable"] + " | mouseResource: " + tiles[currentPlanet][mousePos]["resource"] + " | mouseRemaining: " + tiles[currentPlanet][mousePos]["remaining"];
        $("#time").html(timeDisplay);
        if (debugTimeCount === 19) {
          debugTimeCount = 0;
          clearInterval(debugTimeLoopFaster);
        }
      }, 50);
    }
    
    $("#time").html(timeDisplay);
    
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)), false, "", true);
  },1000);
}