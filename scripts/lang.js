var language = navigator.language;

/*
if (!languages.includes(language)) {
  language = "en-GB";
}
*/

/*
var imported = document.createElement('script');
imported.src = 'i18n/' + language + '.js';
document.head.appendChild(imported);
*/

var lang = {};

var i18nGet = function(key) {
  var value = lang[key];
  if (value === undefined) {
    value = "i18n error " + key;
    console.warn("Unknown i18n value for key '" + key + "' using language '" + language + "'");
  }
  return value;
}

var i18nInit = function() {
  document.title = i18nGet("title");
}