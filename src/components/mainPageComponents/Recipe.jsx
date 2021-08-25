function Recipe(props) {
  return (
    <article className="recipe">
      <h4>{ props.recipe.recipeName } </h4>
      <p>{ props.recipe.recipeDescription }</p>
    </article>
  );
}

export default Recipe;
