const BASE_URL = 'https://www.swapi.tech/api/';

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			fetchCharacters: async () => {
				try {
					const response = await fetch(`${BASE_URL}people`);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error("Error fetching characters:", error);
				}
			},
			fetchPlanets: async () => {
				try {
					const response = await fetch(`${BASE_URL}planets`);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},
			fetchVehicles: async () => {
				try {
					const response = await fetch(`${BASE_URL}vehicles`);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},
			addFavorite: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: (itemId) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.id !== itemId) });
			},
		},
	};
};

export default getState;
