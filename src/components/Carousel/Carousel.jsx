import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import "./carousel.css";

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
        name: "Mexico City, Mexico",
        image: "../../../public/cities/México.jpg",
      },
      {
        name: "Buenos Aires, Argentina",
        image: "../../../public/cities/buenos-aires-508790_1280.jpeg",
      },
      {
        name: "Paris, France",
        image: "../../../public/cities/eiffel-tower-3349075_1280.jpg",
      },
      {
        name: "Tokyo, Japan",
        image: "../../../public/cities/city-6220689_1280.jpg",
      },
      {
        name: "Cairo, Egypt",
        image: "../../../public/cities/nile-river-4600719_1280.jpg",
      },
      {
        name: "Canberra, Australia",
        image: "../../../public/cities/war-memorial-288327_1280.jpg",
      },
      {
        name: "Washington, United States",
        image: "../../../public/cities/us-capitol-477987_1280.jpg",
      },
      {
        name: "Brasilia, Brazil",
        image: "../../../public/cities/third-bridge-1127635_1280.jpg",
      },
      {
        name: "Wellington, New Zealand",
        image: "../../../public/cities/wellington-1584264_1280.jpg",
      },
      {
        name: "Madrid, Spain",
        image: "../../../public/cities/madrid-5010803_1280.jpg",
      },
      {
        name: "Pretoria, South Africa",
        image: "../../../public/cities/voortrekker-monument-392629_1280.jpeg",
      },
      {
        name: "Delhi, India",
        image: "../../../public/cities/taj-mahal-1379273_1280.jpg",
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
    <Container className="mx-auto my-36 p-4 text-center">
      <h2 className="mt-10 mb-5 text-3xl font-bold text-gray-900 md-text-4xl lg-text-5xl">
       MyTineraries
      </h2>
     <Row className="justify-content-center align-items-center">
  <Col md={6} lg={3} className="d-flex flex-column justify-content-between align-items-center">
    <Button variant="primary" onClick={prev} className="mb-2">
      {'<'}
    </Button>
  </Col>
  <Col md={6} lg={3} className="d-flex flex-column justify-content-center align-items-center">
    {slides.length > 0 ? (
      slides[counter].slice(0, 2).map((cities) => (
        <div key={cities.name} className="mb-4 d-flex flex-column align-items-center">
          <div className="w-100 overflow-hidden rounded-md shadow cursor-pointer">
            <img
              className="w-100 carousel-image"
              src={cities.image}
              alt={cities.name}
            />
          </div>
          <p className="text-center mt-2">{cities.name}</p>
        </div>
      ))
    ) : (
      <h2> Please wait... </h2>
    )}
  </Col>
  <Col md={6} lg={3} className="d-flex flex-column justify-content-center align-items-center">
    {slides.length > 0 ? (
      slides[counter].slice(2, 4).map((cities) => (
        <div key={cities.name} className="mb-4 d-flex flex-column align-items-center">
          <div className="w-100 overflow-hidden rounded-md shadow cursor-pointer">
            <img
              className="w-100 carousel-image"
              src={cities.image}
              alt={cities.name}
            />
          </div>
          <p className="text-center mt-2">{cities.name}</p>
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
