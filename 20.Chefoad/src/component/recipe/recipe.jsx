import "./recipe.css";
export default function Recipe({recipeShown,recipe}) {
  return (
    <>
      {recipeShown && (
        <section>
          {recipe}
        </section>
      )}
    </>
  );
}
