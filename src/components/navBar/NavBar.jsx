import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Anchor from '../Anchor/Anchor';
import Login from '../Login/Login';

function NavBar() {
  let data = [
        {href:"",title:"Home"},
        {href:"",title:"Cities"},
      ]
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My tynerary</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      <Login />
    </Navbar>
  );
}

export default NavBar;