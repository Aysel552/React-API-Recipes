import './App.css'

function MyRecipesComponent({label, image,calories, ingredients}){
    return(
        <div>
            <div className="container">
            <h2 className='recipeName'>{label}</h2>
            </div>
            <div className="container">
            <img src={image} className="recipeImage" alt="Recipe"/>
            </div>
            <div className='container'>
            <p className='calories'>{calories.toFixed()} calories</p>
            </div>
            <div className="container">
            <ul className="list">
                {ingredients.map(ingredient =>(
                    <li> <img src="https://img.icons8.com/material-outlined/24/000000/checked-2--v1.png" alt='' className="icon"/>{ingredient}</li>
                ))}
                </ul>
                </div>

        </div>
    )
}

export default MyRecipesComponent;