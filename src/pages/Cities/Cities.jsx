import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Cities = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = (query) => {
    // Aquí puedes implementar la lógica de búsqueda según tus necesidades.
    // Puedes realizar llamadas a una API, filtrar datos, etc.
    // Por ahora, simplemente simularemos resultados de búsqueda aleatorios.
    const randomResults = Array.from({ length: 5 }, (_, index) => `Resultado ${index + 1}`);
    setSearchResults(randomResults);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>Resultados de búsqueda:</h3>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Cities;
