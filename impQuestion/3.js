// Create a recipe object with title, servings, and ingredients
const favoriteRecipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
  };
  
  // Log the recipe information
  console.log(favoriteRecipe.title);
  console.log(`Serves: ${favoriteRecipe.servings}`);
  console.log("Ingredients:");
  favoriteRecipe.ingredients.forEach(i => {
    console.log(i);
  });
  