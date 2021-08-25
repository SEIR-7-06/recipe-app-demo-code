import Recipe from './Recipe'

function RecipesList(props) {
  console.log('Recipe Lists props:', props)
  let recipesJsx = props.recipes.map((recipe, idx) => {
    return <Recipe recipe={recipe} key={idx} />
  })
  return (
    <section className="recipes-section">
      <button className="add-recipe-button">
        Add Recipe
      </button>
      { recipesJsx }
    </section>
  );
}

export default RecipesList;
