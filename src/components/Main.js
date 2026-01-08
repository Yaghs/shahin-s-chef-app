import {useState} from "react"
export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const ingredientsList = ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function handleClick(){
        console.log("button clicked");
    }

    function submitRecipe(formData){
        const newIngredient = formData.get("ingredient")
        console.log("Form data after:", newIngredient)
        if(newIngredient && newIngredient !== ""){
          setIngredients(prevIngredient => [...prevIngredient, newIngredient])
        }
        console.log(ingredients)  ;
    }
    return(
        <main>
            <form action={submitRecipe} className="add-ingredient-form">
                <input
                    name="ingredient"
                    type="text"
                    placeholder = "e.g oregano"
                    aria-label="Add ingredient"
                />
                <button onClick={handleClick}>Add ingredient</button>
                
            </form>
                {ingredientsList.length > 0 &&
                    <>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsList}
                    </ul>
                    {ingredientsList.length > 3 && 
                        <section>
                            <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    </section>
                    }
                    </>
                     }
        </main>
    )
}