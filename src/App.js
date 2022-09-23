import { useEffect} from 'react';
import './App.css';
import video from './recipes.mp4'

function App() {
  // Adding ID and KEY OF THE API
  const MY_ID = "8925bcff";
  const MY_KEY = "3b7864ef596b2c7c5e52ac133fea723f";

  // adding useEffect hook with API
  useEffect(() => {
    const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    }
    getRecipe();
  }, [])
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
        </video>

        <h1>Find a Recipe</h1>
    </div>
    </div>
  );
}

export default App;
