import {useState, useRef, useEffect} from "react"
import ClaudeRecipe from "./ClaudeRecipe.js"
import IngredientsList from "./IngredientsList.js"
import {getRecipeFromChefClaude} from "./../ai"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState("")
    const [disableForm, setDisableForm] = useState(false);
    const recipeSection = useRef(null)
    console.log(recipeSection)

    useEffect(()=> {
        if(recipeShown !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipeShown])

    const ingredientsList = ingredients.map((ingredient, index)=>{
        return (
            <li key={index}>{ingredient}</li>
        )
    })

    function handleClick(){
        console.log("button clicked");
    }

    //
    async function handleRecipe(){
        //TODO:disable the input form and the buttons
        setDisableForm(true)
        const generatedRecipe = await getRecipeFromChefClaude(ingredients)
        setRecipeShown(generatedRecipe)  
        //TODO: enable the input form and the buttons 
        setDisableForm(false)

        
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
                    disabled={disableForm}
                />
                <button onClick={handleClick} disabled={disableForm}>Add ingredient</button>
                
            </form>
                {ingredientsList.length > 0 && <IngredientsList ingredientsList = {ingredientsList} handleRecipe={handleRecipe} isDisabled={disableForm} ref={recipeSection } />}
                {recipeShown && <ClaudeRecipe recipe={recipeShown} />}
        </main>
    )
}