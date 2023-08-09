export default function Images() { 
  const cities = [
    {
      name: "Ciudad de México, Mexico",
      image: '',
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

        return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                key={cities.name}
                className="cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-125 hover:z-10"
              >
                <img
                  className="w-60 h-44 object-cover rounded-md shadow-xl cursor-pointer m-4"
                  src={cities.image}
                  alt={cities.name}
                />
                <p className="text-center me-6 text-sm">{cities.name}</p>
                  <div className="md:hidden block h-0 w-0"></div>
              </div>
        </div>
        </>
        )
  }
