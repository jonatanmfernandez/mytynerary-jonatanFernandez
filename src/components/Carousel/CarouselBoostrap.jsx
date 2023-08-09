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
      // ... Resto de las ciudades ...
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
    <Container className="carousel-container mx-auto my-36 p-4">
      <h2 className="my-14 text-center text-3xl font-bold text-gray-900 md-text-4xl lg-text-5xl">
        Popular{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          MyTineraries
        </span>
      </h2>
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <Button variant="primary" onClick={prev} className="mr-2">
          {'<'}
        </Button>
        <Button variant="primary" onClick={next} className="ml-2">
          {'>'}
        </Button>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={3}>
          {slides.length > 0 ? (
            slides[counter].slice(0, 2).map((cities, index) => (
              <div
                key={cities.name}
                className="cursor-pointer transform transition-all ease-in-out duration-300 hover-scale-125 hover-z-10"
              >
                <div className="w-100 h-100 overflow-hidden rounded-md shadow cursor-pointer m-4">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={cities.image}
                    alt={cities.name}
                  />
                </div>
                <p className="text-center mt-2 text-sm">{cities.name}</p>
                {index === 1 && <div className="d-md-none h-0 w-0"></div>}
              </div>
            ))
          ) : (
            <h2 className="text-center"> Please wait... </h2>
          )}
        </Col>
        {/* ... Resto del código ... */}
      </Row>
    </Container>
  );
}
