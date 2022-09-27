import './App.css'

function MyRecipesComponent({label, image,calories, ingredients}){
    return(
        <div>
            <div className='container'>
            <h2>{label}</h2>
            </div>
            <div className='container'>
            <img src={image} alt="Recipe"/>
            </div>
            <div className='container'>
            <p>{calories.toFixed()} calories</p>
            </div>
            <div className='container'>
            <ul className="list">
                {ingredients.map(ingredient =>(
                    <li> <img src="https://img.icons8.com/material-outlined/24/000000/checked-2--v1.png" className="icon"/>{ingredient}</li>
                ))}
                </ul>
                </div>

        </div>
    )
}

export default MyRecipesComponent;