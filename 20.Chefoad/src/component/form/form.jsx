import { useState } from "react";
import "./form.css";
import Ingredient from "../Ingredient/ingredrient";
export default function Form() {
  const [ingredients, setIngredient] = useState([]);
  const itemsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredient((prevState) => [...prevState, newIngredient]);
  }
  
  return (
    <>
      <h2>Add your Ingredients to get a Recipe</h2>
      <form className="form" action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          id="ingredient"
          placeholder="e.g. oregano"
        />
        <button>+ Add Ingredient</button>
      </form>
      <Ingredient itemList={itemsList}/>

    </>
  );
}
