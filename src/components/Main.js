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

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log("Form data before: " , formData)
        const newIngredient = formData.get("ingredient")
        console.log("Form data after:", newIngredient)
        if(newIngredient && newIngredient !== ""){
          setIngredients(prevIngredient => [...prevIngredient, newIngredient])
        }
        console.log(ingredients)  ;
    }
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    name="ingredient"
                    type="text"
                    placeholder = "e.g oregano"
                    aria-label="Add ingredient"
                />
                <button onClick={handleClick}>Add ingredient</button>
                
            </form>
                <ul>
                    {ingredientsList}
                </ul>
        </main>
    )
}