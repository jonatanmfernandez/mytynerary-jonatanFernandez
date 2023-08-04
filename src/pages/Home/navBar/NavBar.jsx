const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Botones del lado izquierdo */}
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="nav-link" href="#">My Tynerary</a>
          {/* Agrega más botones aquí */}
        </div>
        
        {/* Botones del lado derecho */}
        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Cities</a>
          {/* Agrega más botones aquí */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
