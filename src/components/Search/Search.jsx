import { useState } from 'react';
import { Form, FormControl, Button, Container, Col, Row } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Container>
    <Row className="justify-content-center">
    <Col md={6}> 
    <Form className="d-flex" style={{ margin: '0 30px' }}>
      <FormControl
        type="text"
        placeholder="Search"
        maxLength={60}
        className="mb-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button variant="primary" onClick={handleSearch} style={{ marginLeft: '10px', padding: '4px 8px', height: '40px' }}>Buscar</Button>
    </Form>
    </Col>
    </Row>
    {/* <div className="mt-3 text-center">
      <h3>Resultados de búsqueda:</h3>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div> */}
  </Container>
  );
};

export default SearchBar;
