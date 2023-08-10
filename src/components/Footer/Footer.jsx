import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer () {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">My Tinerary</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;