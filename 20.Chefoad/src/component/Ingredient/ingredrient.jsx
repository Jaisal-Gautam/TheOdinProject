import "./ingredient.css";
import { useState } from "react";
import Recipe from "../recipe/recipe";
import { getRecipeFromMistral } from "../ai.js";

export default function Ingredient({ itemList }) {
  const [recipeShown, setRecipeShown] = useState(false);
  function showRecipe() {
    setRecipeShown((prevState) => !prevState);
  }
  const [recipe, setRecipe] = useState("");
  async function getRecipe() {
    getRecipe();
    const recipeMarkdown = await getRecipeFromMistral(itemList);
    setRecipe(recipeMarkdown);
  }
  return (
    <>
      {itemList.length > 0 && (
        <main>
          <h2>Ingredients on hand :</h2>
          <ul>{itemList}</ul>
          {itemList.length > 2 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRecipe}>Get a recipe</button>
            </div>
          )}
        </main>
      )}
      <Recipe recipeShown={recipeShown} recipe={recipe} />
    </>
  );
}
