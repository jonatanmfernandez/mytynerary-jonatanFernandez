import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";

const Main = ({ children })  => {
    return (
        <>
         <NavBar />
         <Hero />
         <Carousel />
          <Footer />
        </> 
     )
}

export default Main