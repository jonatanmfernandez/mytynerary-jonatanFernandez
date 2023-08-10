import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full h-24 bg-secondary p-4">
      <div className="flex items-center">
        <img
          src="../"
          alt="MyTinerary Logo"
          className="h-24 w-24 mx-6"
        />
      </div>

      <button
        className="md:hidden text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div className={`md:flex space-x-4 ${isMenuOpen ? "flex" : "hidden"}`}>
        <a
          href="#"
          className="text-white hover:text-gray-800 bg-tertiary hover:bg-primary text-sm font-bold py-2 px-4 rounded-full inline-block"
        >
          Home
        </a>

        <a
          href="#"
          className="text-white hover:text-gray-800 bg-tertiary hover:bg-primary text-sm font-bold py-2 px-4 rounded-full inline-block"
        >
          Contact
        </a>
        <a
          href="/cities"
          className="text-white hover:text-gray-800 bg-tertiary hover:bg-primary text-sm font-bold py-2 px-4 rounded-full inline-block"
        >
          Cities
        </a>
      </div>
    </nav>
  );
};

export default Navbar;