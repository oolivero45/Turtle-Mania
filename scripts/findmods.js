// Add the name of each mod you wish to load to this array.
var MODS = [
  "core",
];





// DO NOT EDIT ANYTHING BELOW THIS LINE.
// DOING SO MAY PREVENT THE GAME FROM LOADING ANY CONTENT AT ALL.
// YOU HAVE BEEN WARNED.
for (var i = 0; i < MODS.length; i++) {
  var modLoadLine = document.createElement("script");
  modLoadLine.src = "mods/" + MODS[i] + ".js";
  document.getElementById("MODDIV").appendChild(modLoadLine);
}