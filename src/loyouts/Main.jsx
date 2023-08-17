import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Search from "../components/Search/Search"

export default function Main () {
    return (
        <>
         <NavBar />
         <Hero />
         <Carousel />
         <Search />
          <Footer />
        </> 
     )
}