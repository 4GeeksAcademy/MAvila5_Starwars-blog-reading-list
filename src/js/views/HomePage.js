import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CharCard from '../component/CharCard';
import PlanetCard from '../component/PlanetCard';
import VehicleCard from '../component/VehicleCard';
import { useAppContext } from '../store/appContext';

function HomePage() {
  const { store, actions } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      actions.fetchCharacters(),
      actions.fetchPlanets(),
      actions.fetchVehicles()
    ]).catch(error => {
      console.error("Error fetching data:", error);
      setError(error);
    }).finally(() => setLoading(false));
  }, [actions]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <p>Error: {error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="my-4">Characters</h2>
      <Row>
        {store.characters.map(character => (
          <Col key={character.id} sm={12} md={6} lg={4} xl={3}>
            <CharCard character={character} />
          </Col>
        ))}
      </Row>

      <h2 className="my-4">Planets</h2>
      <Row>
        {store.planets.map(planet => (
          <Col key={planet.id} sm={12} md={6} lg={4} xl={3}>
            <PlanetCard planet={planet} />
          </Col>
        ))}
      </Row>

      <h2 className="my-4">Vehicles</h2>
      <Row>
        {store.vehicles.map(vehicle => (
          <Col key={vehicle.id} sm={12} md={6} lg={4} xl={3}>
            <VehicleCard vehicle={vehicle} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;