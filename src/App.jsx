import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import WelcomeMessage from './WelcomeMessage';

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php`, {
        params: {
          s: query
        }
      });
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Fehler beim Abrufen der Rezepte:', error);
    }
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php`, {
        params: {
          i: recipeId
        }
      });
      setSelectedRecipe(response.data.meals[0]);
    } catch (error) {
      console.error('Fehler beim Abrufen der Rezeptdetails:', error);
    }
  };

  return (
    <div className="app">
      <WelcomeMessage />
      <header>
        <h1>Willkommen zur Rezept-Suche!</h1>
      </header>
      <main>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Gib ein Rezept in English ein"
        />
        <button onClick={fetchRecipes}>Suchen</button>
        <ul className="ul-list">
          {recipes && recipes.map(recipe => (
            <li className="li-list" key={recipe.idMeal} onClick={() => handleRecipeClick(recipe.idMeal)}>
              {recipe.strMeal}
            </li>
          ))}
        </ul>
        {selectedRecipe && (
          <div>
            <h2>{selectedRecipe.strMeal}</h2>
            <p>{selectedRecipe.strInstructions}</p>
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} style={{ maxWidth: '100%' }} />
          </div>
        )}
      </main>
      <footer>
        <p>created by Yousef ®</p>
        <a href="https://www.instagram.com/youssef0d/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </footer>
    </div>
  );
};

export default RecipeApp;
