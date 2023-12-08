export const state = {
    recipe: {},
}

export const loadRecipe = async function(id) {
    try{
    const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40`
      );
      // console.log(response);
      // console.log(response.json());
      const data = await response.json();
      // console.log(data);
      // console.log(data.data.recipe.servings);
      if (!response.ok) {
        throw new Error(`${data.message} Status: ${response.status}`);
      }
  
      const { recipe } = data.data;
      console.log(recipe);
      state.recipe = {
        cookingTime: recipe.cooking_time,
        id: recipe.id,
        publisher: recipe.publisher,
        url: recipe.image_url,
        servings: recipe.servings,
        title: recipe.title,
        sourceUrl: recipe.source_url,
        ingredients: recipe.ingredients,
      };
      console.log(state.recipe);
    } catch(err) {
    alert(err)
    }
}