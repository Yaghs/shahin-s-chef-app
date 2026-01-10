export default function IngredientsList(prop){
    console.log(prop.isDisabled)
    return(
        <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {prop.ingredientsList}
                    </ul>
                    {prop.ingredientsList.length >= 3 && <div className="get-recipe-container">
                            <div ref={prop.ref}>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button style={!prop.isDisabled ? {} : { backgroundColor: "#573125"}} onClick={prop.handleRecipe} disabled={prop.isDisabled}>Get a recipe</button>
                        </div>
                    }
                    </section>
    )
}