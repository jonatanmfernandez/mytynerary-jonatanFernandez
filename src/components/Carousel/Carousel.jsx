import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';

export default function Carousel() {
  const [counter, setCounter] = useState(0);
  const [slides, setSlides] = useState([]);

  const prev = () => {
    if (counter === 0) {
      setCounter(slides.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const next = useCallback(() => {
    if (counter === slides.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  });

  useEffect(() => {
    const cities = [
      {
        name: "Ciudad de México, Mexico",
        image: "../../assets/México.jpg",
      },
      {
        name: "Buenos Aires, Argentina",
        image: "",
      },
      {
        name: "Paris, Francia",
        image: ``,
      },
      {
        name: "Tokio, Japon",
        image: ``,
      },
      {
        name: "El Cairo, Egipto",
        image: ``,
      },
      {
        name: "Canberra, Australia",
        image: ``,
      },
      {
        name: "Whashington, Estados Unidos",
        image: ``,
      },
      {
        name: "Brasilia, Brasil",
        image: ``,
      },
      {
        name: "Wellington, Nueva Zelanda",
        image: ``,
      },
      {
        name: "España, Madrid",
        image: ``,
      },
      {
        name: "Pretoria, Sudafrica",
        image: ``,
      },
      {
        name: "Delhi, India",
        image: ``,
      },
    ];

    const totalSlides = [];
    for (let i = 0; i < cities.length; i += 4) {
      totalSlides.push(cities.slice(i, i + 4));
    }

    setSlides(totalSlides);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [next, slides]);

  return (
    <Container className="carousel-container mx-auto my-36 p-4 text-center">
      <h2 className="mt-5 mb-14 text-3xl font-bold text-gray-900 md-text-4xl lg-text-5xl">
       MyTineraries
      </h2>
      <Row className="justify-content-center align-items-center">
      <Col md={6} lg={3} className="d-flex flex-column justify-content-between align-items-center">
          <Button variant="primary" onClick={prev} className="mb-2">
            {'<'}
          </Button>
      </Col>

        <Col md={6} lg={3} className="justify-content-center align-items-center">
          {slides.length > 0 ? (
            slides[counter].slice(0, 2).map((cities) => (
              <div key={cities.name} className="mb-4">
                <div className="w-100 h-100 overflow-hidden rounded-md shadow cursor-pointer">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={cities.image}
                    alt={cities.name}
                  />
                </div>
                <p className="text-center mt-2 text-sm">{cities.name}</p>
              </div>
            ))
          ) : (
            <h2> Please wait... </h2>
          )}
        </Col>
        <Col md={6} lg={3} className="justify-content-center align-items-center">
          {slides.length > 0 ? (
            slides[counter].slice(2, 4).map((cities) => (
              <div key={cities.name} className="mb-4">
                <div className="w-100 h-100 overflow-hidden rounded-md shadow cursor-pointer">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={cities.image}
                    alt={cities.name}
                  />
                </div>
                <p className="text-center mt-2 text-sm">{cities.name}</p>
              </div>
            ))
          ) : (
            <h2> Please wait... </h2>
          )}
        </Col>
        

        <Col md={6} lg={3} className="d-flex flex-column justify-content-between align-items-center">
          <Button variant="primary" onClick={next}>
            {'>'}
          </Button>
        </Col>

      </Row>
    </Container>
  );
}
