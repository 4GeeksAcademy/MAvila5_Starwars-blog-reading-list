import React, { useEffect, useContext, useState } from 'react';
import { FavoritesContext } from '../store/FavoritesContext';
import CharCard from '../component/CharCard';
import PlanetCard from '../component/PlanetCard';

function HomePage() {
  // Funcation to store data for people, vehicles, and planets.
  const { addFavorite } = useContext(FavoritesContext);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Function to fetch data from SWAPI
  useEffect(() => {
    // Fetch people from SWAPI
    fetch('https://www.swapi.tech/api/people/')
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error("There was an error fetching the people data: ", error));

    // Fetch planets from SWAPI
    fetch('https://www.swapi.tech/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => console.error("There was an error fetching the planets data: ", error));
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className="row">
        {people.map(person => (
          <CharCard key={person.uid} character={person} addFavorite={addFavorite} />
        ))}
      </div>
      <h1>Star Wars Planets</h1>
      <div className="row">
        {planets.map(planet => (
          <PlanetCard key={planet.uid} planet={planet} addFavorite={addFavorite} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;