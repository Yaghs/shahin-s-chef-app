import {useState} from "react"
import ClaudeRecipe from "./ClaudeRecipe.js"
import IngredientsList from "./IngredientsList.js"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const ingredientsList = ingredients.map((ingredient)=>{
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    function handleClick(){
        console.log("button clicked");
    }

    function handleRecipe(){
        setRecipeShown(prevShown => !prevShown)
        console.log(recipeShown)
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
                {ingredientsList.length > 0 && <IngredientsList ingredientsList = {ingredientsList} handleRecipe={handleRecipe} />}
                {!recipeShown && <ClaudeRecipe/>}
        </main>
    )
}