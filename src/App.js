import { useEffect} from 'react';
import './App.css';

function App() {
  const MY_ID = "8925bcff";
  const MY_KEY = "3b7864ef596b2c7c5e52ac133fea723f";

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
      <p>RECIPES</p>
    </div>
  );
}

export default App;
