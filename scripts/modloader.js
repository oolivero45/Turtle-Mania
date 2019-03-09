class Mod {
  constructor(modName, modDesc, modItems, modOres, modRecipes, modStations, modPlaceable, modPlaceFeatures, modCategories, modRegularCategories, modPlanets, modI18n, modFloors, modSounds) {
    this.name = modName;
    this.desc = modDesc;
    this.items = modItems;
    this.ores = modOres;
    this.recipes = modRecipes;
    this.stations = modStations;
    this.placeable = modPlaceable;
    this.placeFeatures = modPlaceFeatures;
    this.categories = modCategories;
    this.regularCategories = modRegularCategories;
    this.planets = modPlanets;
    this.i18n = modI18n;
    this.floors = modFloors;
    this.sounds = modSounds;
  }
  
  // Register the Mod
  register() {
    // ITEMS
    var itemArray = [];
    var itemObject = {};
    $.each(this.items, function(index, value) {
      if (item_positions[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register item '" + index + "' that already existed.");
      } else {
        item_positions[index] = value;
        itemObject[index] = value;
        items.push(index);
        itemArray.push(index);
      }
    });

    // Automatically generate CSS for items
    var ITEMS_CSS = "/*\nTHIS CSS WAS GENERATED AUTOMATICALLY.\nCSS FOR MOD '" + this.name + "'.\n*/\n";
    for (var i = 0; i < Object.keys(itemObject).length; i++) {
      var item_name = Object.keys(itemObject)[i];
      var item = itemObject[Object.keys(itemObject)[i]];
      ITEMS_CSS += "." + item_name.replaceAll(".","\\.") + " {\n  background-image: url('images/spritesheet.png');\n  background-position: -" + (item[0]*32) + "px -" + (item[1]*32) + "px;\n}\n";
    }
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ITEMS_CSS;
    document.getElementsByTagName('head')[0].appendChild(style);
    
    
    // ORES
    var modOreWeighting = {};
    $.each(this.ores, function(index, value) {
      if (oreWeighting[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register ore '" + index + "' that already existed.");
      } else {
        oreWeighting[index] = value;
        modOreWeighting[index] = value;
      }
    });
    
    Object.keys(modOreWeighting).forEach(function(key) {
      ores[key] = [key, modOreWeighting[key][0], modOreWeighting[key][1], modOreWeighting[key][2]];
    });
    
    
    // RECIPES
    $.each(this.recipes, function(index, value) {
      if (recipes[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register recipe '" + index + "' that already existed.");
      } else {
        recipes[index] = value;
      }
    });
    
    
    // STATIONS
    $.each(this.stations, function(index, value) {
      if (craftingStations[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register crafting station '" + index + "' that already existed.");
      } else {
        craftingStations[index] = value;
      }
    });
    
    
    // PLACEABLE
    $.each(this.placeable, function(index, value) {
      if (placeable[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register placeable item '" + index + "' that already existed.");
      } else {
        placeable[index] = value;
      }
    });
    
    
    // PLACEABLE ITEM FEATURES
    $.each(this.placeFeatures, function(index, value) {
      if (placeFeatures[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register placeable item feature '" + index + "' that already existed.");
      } else {
        placeFeatures[index] = value;
      }
    });
    
    
    // CATEGORIES
    $.each(this.categories, function(index, value) {
      if (categories[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register category '" + index + "' that already existed.");
      } else {
        categories[index] = value;
      }
    });
    
    
    // REGULAR CATEGORIES
    $.each(this.regularCategories, function(index, value) {
      if (regularCategories[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register regular category '" + index + "' that already existed.");
      } else {
        regularCategories[index] = value;
      }
    });
    
    
    // PLANETS
    $.each(this.planets, function(index, value) {
      if (planets[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register planet '" + index + "' that already existed.");
      } else {
        planets[index] = value;
      }
    });
    
    
    // I18N
    var foundLanguage = false;
    var modLanguages = [];
    var loadLanguage = "";
    $.each(this.i18n, function(index, value) {
      modLanguages.push(index);
      if (index === language) {
        foundLanguage = true;
        loadLanguage = index;
      }
    });
    
    if (foundLanguage === false) {
      console.warn("Couldn't find current language in mod '" + this.name + "'. Falling back to en-GB.")
      if (modLanguages["en-GB"] !== undefined) {
        loadLanguage = "en-GB";
      } else {
        loadLanguage = modLanguages[0];
        console.error("Couldn't find language en-GB in mod '" + this.name + "'. Falling back to first language defined in mod.");
      }
    }
    
    $.each(this.i18n[loadLanguage], function(index, value) {
      if (lang[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register i18n key '" + index + "' that already existed.");
      } else {
        lang[index] = value;
      }
    });
    
    
    // FLOORS
    $.each(this.floors, function(index, value) {
      if (floors[index] !== undefined) {
        console.warn("Mod '" + this.name + "' tried to register floor '" + index + "' that already existed.");
      } else {
        floors[index] = value;
      }
    });
    
    // SOUNDS
    $.each(this.sounds, function(index, value) {
      sounds.push(value);
    });
  }
}