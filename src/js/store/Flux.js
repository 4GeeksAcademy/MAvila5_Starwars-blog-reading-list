const BASE_URL = 'https://www.swapi.tech/api/';

// Function to fetch characters
export const fetchCharacters = async () => {
	try {
		const response = await fetch(`${BASE_URL}people`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching characters:", error);
		return [];
	}
};

// Function to fetch planets
export const fetchPlanets = async () => {
	try {
		const response = await fetch(`${BASE_URL}planets`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching planets:", error);
		return [];
	}
};

// Function to add an item to favorites
export const addFavorite = (favorites, setFavorites, item) => {
	const newFavorites = [...favorites, item];
	setFavorites(newFavorites);
};

// Function to remove an item from favorites
export const removeFavorite = (favorites, setFavorites, itemId) => {
	const newFavorites = favorites.filter(item => item.id !== itemId);
	setFavorites(newFavorites);
};
