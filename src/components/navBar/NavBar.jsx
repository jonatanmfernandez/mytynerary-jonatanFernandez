// import Anchor from '../Anchor/Anchor'
// // import Logo from '../Logo/Logo'

// const NavBar = () => {
//   let data = [
//     {href:"",title:"Home"},
//     {href:"",title:"Cities"},
//   ]

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* <div className="navbar-nav me-auto mb-2 mb-lg-0">
//        <Logo />
//        </div>
//       </div>      */}
//       <div className="navbar-nav ms-auto mb-2 mb-lg-0">
//         {data.map((each, key)=><Anchor key={key} href={each.href} title={each.title} />)}
//       </div>
//     </div>
//     </nav>
//   );
// }

// export default NavBar;

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Anchor from '../Anchor/Anchor';
import Login from '../Login/Login';

function TextLinkExample() {
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

export default TextLinkExample;