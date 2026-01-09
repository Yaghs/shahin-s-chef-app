export default function IngredientsList(prop){
    return(
        <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {prop.ingredientsList}
                    </ul>
                    {prop.ingredientsList.length >= 3 && <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button onClick={prop.handleRecipe}>Get a recipe</button>
                        </div>
                    }
                    </section>
    )
}