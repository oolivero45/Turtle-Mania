var craftWindow = function(visibleCategories) {
  if (visibleCategories === undefined || visibleCategories === []) {
    visibleCategories = regularCategories;
  }
  if (visibleCategories.includes(showCategory) === false) {
    showCategory = visibleCategories[0];
  }
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  var canAffordRecipes = [];
  if (presence !== "craft") {
    var menu = document.createElement("div");
    menu.id = 'menu_crafting';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.crafting") + '</h2><button class="menu_close" onclick="javascript:closeMenu();"><i class="fa fa-fw fa-lg fa-times"></i></button>';
    document.getElementById("menuContainer").appendChild(menu);
    presence = "craft";
    
    var centered = document.createElement("center");
    centered.id = "categories_holder";
    centered.className = "categories_holder";
    document.getElementById("menu_crafting").appendChild(centered);
    
    for (var i = 0; i < visibleCategories.length; i++) {
      var category = visibleCategories[i];
      var categoryElement = document.createElement("button");
      categoryElement.id = category;
      categoryElement.className = 'category_button';
      categoryElement.innerHTML = i18nGet(category);
      categoryElement.setAttribute("visibleCategories",JSON.stringify(visibleCategories));
      categoryElement.onclick = function(event) { changeCategory($(this).attr("id"),JSON.parse($(this).attr("visibleCategories"))); };
      document.getElementById("categories_holder").appendChild(categoryElement);
    }
    
    for (var i = 0; i < Object.keys(recipes).length; i++) {
      var result = Object.keys(recipes)[i];
      var count = recipes[Object.keys(recipes)[i]][0];
      var category = recipes[Object.keys(recipes)[i]][2];
      var missingIngredients = [];
      var canMake = true;
      if (category === showCategory) {
        var recipe = document.createElement("div");
        recipe.id = "recipe_" + result + count;
        recipe.className = "recipe";
        document.getElementById("menu_crafting").appendChild(recipe);

        var resultBlock = document.createElement("div");
        resultBlock.id = 'result_' + result + count;
        resultBlock.className = 'menu_slot result ' + result;
        resultBlock.innerHTML = count;
        resultBlock.setAttribute("title",i18nGet(result) + "\n" + i18nGet("desc." + result));
        if (i18nGet(result) === "i18n error") {
          resultBlock.className = 'menu_slot result item.invalid';
        }
        document.getElementById("recipe_" + result + count).appendChild(resultBlock);

        var blank = document.createElement("div");
        blank.id = "recipeblank_" + result + count;
        blank.className = "recipe_blank";
        document.getElementById("recipe_" + result + count).appendChild(blank);

        for (var k = 0; k < recipes[Object.keys(recipes)[i]][1].length; k++) {
          var ingredientBlock = document.createElement("div");
          ingredientBlock.id = 'ingredient_' + result + count + '_' + k;
          ingredientBlock.className = 'menu_slot ingredient ' + recipes[Object.keys(recipes)[i]][1][k][0];
          ingredientBlock.innerHTML = recipes[Object.keys(recipes)[i]][1][k][1];
          ingredientBlock.setAttribute("title",i18nGet(recipes[Object.keys(recipes)[i]][1][k][0]) + "\n" + i18nGet("desc." + recipes[Object.keys(recipes)[i]][1][k][0]));
          if (i18nGet(recipes[Object.keys(recipes)[i]][1][k][0]) === "i18n error") {
            ingredientBlock.className = 'menu_slot ingredient item.invalid';
          }
          var found = false;
          for (var j = 0; j < toolbarSize; j++) {
            if (inventory[j][0] === recipes[Object.keys(recipes)[i]][1][k][0]) {
              if (inventory[k][1] >= recipes[Object.keys(recipes)[i]][1][k][1]) {
                found = true;
              }
            }
          }
          if (found === false) {
            missingIngredients.push(recipes[Object.keys(recipes)[i]][1][k][0]);
            canMake = false
          }
          document.getElementById("recipe_" + result + count).appendChild(ingredientBlock);
        }

        var blank = document.createElement("div");
        blank.id = "recipeblank_" + result + count;
        blank.className = "recipe_blank";
        document.getElementById("recipe_" + result + count).appendChild(blank);

        var craftButton = document.createElement("button");
        craftButton.id = 'craft_button_' + result + count;
        
        if (canMake === true) {
          craftButton.className = 'craft_button_yes';
        } else {
          craftButton.className = 'craft_button_no';
        }
        
        craftButton.innerHTML = '<i class="fa fa-check fa-lg" aria-hidden="true"></i>';
        craftButton.setAttribute("visibleCategories",JSON.stringify(visibleCategories));
        document.getElementById("recipe_" + result + count).appendChild(craftButton);

        $("#craft_button_" + result.replaceAll(".","\\.") + count).click(function() {
          var product = $(this).attr("id").replace("craft_button_","").replace(/\d/g,'');
          var crafted = craft(product, JSON.parse($(this).attr("visibleCategories")));
          if (crafted === true && debug === true) {
            console.log("Crafted " + count + " " + product + "!");
          } else if (crafted !== true && debug === true) {
            var missing = crafted.join(", ");
            console.log("Failed to craft " + count + " " + product + ": missing " + missing)
          }
        });
      }
    }
  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    //drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
    presence = "game";
  }
}

var craft = function(recipe, visibleCategories) {
  if (visibleCategories === undefined) {
    visibleCategories = regularCategories;
  }
  var recipeName = recipe;
  var recipe = recipes[recipe];
  var craftResult = recipeName;
  var resultCount = recipe[0];
  var ingredients = recipe[1];
  var missing = [];
  var toremove = [];
  for (var f = 0; f < ingredients.length; f++) {
    var looppos = f;
    var canAfford = ingredients[looppos][1] <= inventoryGet(ingredients[looppos][0]);
    if (canAfford === false) {
      missing.push(ingredients[looppos][0]);
    } else {
      for (var g = 0; g < ingredients[looppos][1]; g++) {
        toremove.push(ingredients[looppos][0]);
      }
    }
  }
  if (missing.length > 0) {
    return missing;
  } else {
    for (var l = 0; l < resultCount; l++) {
      inventoryAdd(craftResult);
      if (craftResult === "item.rocket") {
        //craftWindow();
        //win();
        console.log("Rocket crafted");
      }
    }
    for (var l = 0; l < toremove.length; l++) {
      inventoryRemove(toremove[l]);
    }
    presence = "crafted";
    if (visibleCategories !== undefined) {
      craftWindow(visibleCategories);
    } else {
      craftWindow();
    }
    return true;
  }
}

var inventoryGet = function(item) {
  var count = 0;
  for (var i = 0; i < toolbarSize; i++) {
    if (inventory[i][0] === item) {
      count += inventory[i][1];
    }
  }
  return count;
}

var inventoryAdd = function(item, count=1) {
  if (!items.includes(item)) {
    console.warn("Tried to add invalid item '" + item + "' to inventory.");
    item = "item.invalid";
  }
  // Try adding to toolbar
  // Add to existing stack
  for (var i = 0; i < toolbarSize; i++) {
    if (inventory[i][0] === item) {
      inventory[i][1] += count;
      drawToolbar();
      return true;
      break;
    }
  }
  // Add to empty stack
  for (var i = 0; i < toolbarSize; i++) {
    if (inventory[i][0] === "") {
      inventory[i][0] = item;
      inventory[i][1] = count;
      document.getElementById("toolbar" + i).className = "toolbar_slot " + item;
      drawToolbar();
      heldItem = inventory[toolbarSelected-1];
      return true;
      break;
    }
  }
  
  // Toolbar was full, add to main inventory
  // Add to existing stack
  for (var y = 0; y < inventorySize[1]; y++) {
    for (var x = 0; x < inventorySize[0]; x++) {
      if (inventoryFull[x + "x" + y][0] === item) {
        inventoryFull[x + "x" + y][1] += count;
        return true;
      }
    }
  }
  // Add to empty stack
  for (var y = 0; y < inventorySize[1]; y++) {
    for (var x = 0; x < inventorySize[0]; x++) {
      if (inventoryFull[x + "x" + y][0] === "") {
        inventoryFull[x + "x" + y][0] = item;
        inventoryFull[x + "x" + y][1] = count;
        return true;
      }
    }
  }
  // Inventory and toolbar are both completely full.
  return false;
}

var inventoryRemove = function(item) {
  if (!items.includes(item)) {
    console.warn("Tried to remove invalid item '" + item + "' from inventory.");
    return false;
  }
  // Remove from toolbar
  for (var i = 0; i < toolbarSize; i++) {
    if (inventory[i][0] === item) {
      inventory[i][1] -= 1;
      if (inventory[i][1] === 0) {
        document.getElementById("toolbar" + i).className = "toolbar_slot";
        inventory[i][0] = "";
      }
      drawToolbar();
      return true;
    }
  }
  
  // Remove from inventory
  for (var y = 0; y < inventorySize[1]; y++) {
    for (var x = 0; x < inventorySize[0]; x++) {
      if (inventoryFull[x + "x" + y][0] === item) {
        inventoryFull[x + "x" + y][1] -= 1;
        if (inventoryFull[x + "x" + y][1] === 0) {
          inventoryFull[x + "x" + y][i][0] = "";
        }
      }
    }
  }
  return false;
}

var getHeldItem = function() {
  return inventory[toolbarSelected-1];
}

var inventoryWindow = function() {
  var grid = document.getElementById("menuContainer");
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  if (presence !== "inventory") {
    var menu = document.createElement("center");
    menu.id = 'menu_inventory';
    menu.className = 'menu';
    menu.innerHTML = '<h2 class="title">' + i18nGet("menu.inventory") + '</h2><button class="menu_close" onclick="javascript:closeMenu();"><i class="fa fa-fw fa-lg fa-times"></i></button>';
    document.getElementById("menuContainer").appendChild(menu);
    presence = "inventory";

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
          slot.title = inventoryFull[x + "x" + y][1] + " " + i18nGet(inventoryFull[x + "x" + y][0]) + "\n" + i18nGet("desc." + inventoryFull[x + "x" + y][0]);
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

  } else {
    var playerx = parseInt(playerpos.split("x")[0]);
    var playery = parseInt(playerpos.split("x")[1]);
    //drawMap(windowx, windowy, (playerx - Math.floor(windowx/2)), (playery - Math.floor(windowy/2)));
    presence = "game";
  }
}