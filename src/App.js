import { useEffect, useState} from 'react';
import './App.css';
import video from './recipes.mp4'

function App() {
  // Adding ID and KEY OF THE API
  const MY_ID = "8925bcff";
  const MY_KEY = "3b7864ef596b2c7c5e52ac133fea723f";

  // Adding state for search
  const [mySearch, setMySearch] = useState("");

  // adding useEffect hook with API
  useEffect(() => {
    const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    }
    getRecipe();
  }, [])


  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
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
    <form>
      <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
    </form>

    {/* Adding icon to the button */}
    <div className="container">
    <button>
      <img src="https://img.icons8.com/color/48/000000/fry.png" className="icons" alt="Recipes"/>
    </button>
    </div>


    </div>
    </div>
  );
}

export default App;
