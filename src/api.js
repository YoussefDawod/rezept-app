// FILE: api.js
import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php`, {
      params: { s: query }
    });
    return response.data.meals;
  } catch (error) {
    console.error('Fehler beim Abrufen der Rezepte:', error);
    throw error;
  }
};

export const fetchRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php`, {
      params: { i: recipeId }
    });
    return response.data.meals[0];
  } catch (error) {
    console.error('Fehler beim Abrufen der Rezeptdetails:', error);
    throw error;
  }
};