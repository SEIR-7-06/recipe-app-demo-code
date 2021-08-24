import Recipe from './Recipe'

function RecipesList() {
  return (
    <section className="recipes-section">
      <button className="add-recipe-button">
        Add Recipe
      </button>
      <Recipe />
      <Recipe />
      <Recipe />
    </section>
  );
}

export default RecipesList;
