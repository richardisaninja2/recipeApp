import logo from './logo.svg';
import './App.css';
import Items from './components/items/Items';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipe from './components/recipe/Recipe';
import { useState } from 'react';

function App() {

  const [recipe, setRecipe] = useState();
  const[recipeLong, setRecipeLong] = useState();
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route index element={<Items setRecipe={setRecipe}/>}/>
        <Route path="/:title" element={<Recipe setRecipeLong={setRecipeLong} recipe={recipe && recipe}/>}/>
      </Routes>
    </BrowserRouter>
    
    
      
    </div>
  );
}

export default App;
