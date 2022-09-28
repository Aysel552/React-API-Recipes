import { useEffect, useState} from 'react';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
import video from './recipes.mp4'

function App() {
  // Adding ID and KEY OF THE API
  const MY_ID = "8925bcff";
  const MY_KEY = "3b7864ef596b2c7c5e52ac133fea723f";

  // Adding state for search
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted,setWordSubmitted] = useState('avocado');

  // adding useEffect hook with API
  useEffect(() => {
    const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])


  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    // Adding video as a background
    <div className="App">
      <div className="container">
      <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
      </video>
      <h1>Find a Recipe</h1>
    </div>

  {/* Adding search input */}
    <div className="container">
    <form onSubmit={finalSearch}>
      <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
    </form>
    </div>

    {/* Adding icon to the button */}
    <div className="container">
    <button className='btn'>
      <img src="https://img.icons8.com/color/48/000000/fry.png" alt='' className="icons"/>
    </button>
    </div>

    <div>
    {myRecipes.map(element => (
      <MyRecipesComponent label = {element.recipe.label} image= {element.recipe.image} calories = {element.recipe.calories} ingredients = {element.recipe.ingredientLines}/>
    ))}
    </div>

    </div> 
  );
}

export default App;
