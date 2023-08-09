import { Button } from 'react-bootstrap';
import { useState, useEffect, useCallback }  from "react"

export default function Carousel () {

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
      image: ``,
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
  <div className="carousel-container md:max-w-full mx-auto my-36 p-4">
    <h2 className="my-14 text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
      Popular{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        MyTineraries
      </span>
    </h2>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Button variant="primary" onClick={prev} className="mr-2">
        {'<'}
      </Button>
    <div className="row justify-content-center align-items-center">
      <div className="col-md-6 col-lg-3">
        {slides.length > 0 ? (
          slides[counter].slice(0, 2).map((cities, index) => (
            <div
              key={cities.name}
              className="cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-125 hover:z-10"
            >
              <div className="w-100 h-100 overflow-hidden rounded-md shadow cursor-pointer m-4">
                <img
                  className="w-100 h-100 object-fit-cover"
                  src={cities.image}
                  alt={cities.name}
                />
              </div>
              <p className="text-center mt-2 text-sm">{cities.name}</p>
              {index === 1 && <div className="md:hidden block h-0 w-0"></div>}
            </div>
          ))
        ) : (
          <h2> Please wait... </h2>
        )}
      </div>
      <div className="col-md-6 col-lg-3">
        {slides.length > 0 ? (
          slides[counter].slice(2, 4).map((cities, index) => (
            <div
              key={cities.name}
              className="cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-125 hover:z-10"
            >
              <div className="w-100 h-100 overflow-hidden rounded-md shadow cursor-pointer m-4">
                <img
                  className=""
                  src={cities.image}
                  alt={cities.name}
                />
              </div>
              <p className="text-center mt-2 text-sm">{cities.name}</p>
              {index === 1 && <div className="md:hidden block h-0 w-0"></div>}
            </div>
          ))
        ) : (
          <h2> Please wait... </h2>
        )}      
      </div>
    </div>
    <Button variant="primary" onClick={next} className="ml-2">
        {'>'}
      </Button>
  </div>
  </div>
);
}