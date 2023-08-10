export default function Hero() {
  const heroStyle = {
    backgroundImage: `url("../../../public/bokeh-luz-urbana-abstracta-noche-fondo-defocused.jpg")`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Agrega posición relativa para superposición
  };
  
  const textStyle = {
    color: 'white',  // Cambia el color del texto a blanco
    position: 'relative', // Agrega posición relativa para mantener sobre la superposición
    zIndex: 1, // Asegura que el texto esté por encima de la superposición
  };

  return (  
    <div className="p-5 mb-4 bg-body-tertiary rounded-0" style={heroStyle}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold" style={textStyle}>My Tinerary</h1>
        <p className="col-md-8 fs-4" style={textStyle}>Explore fascinating destinations, discover vibrant cultures, and create unforgettable memories.</p>
        <button className="btn btn-primary btn-lg" type="button">Start Your Adventure</button>
      </div>
    </div>
  );
}

