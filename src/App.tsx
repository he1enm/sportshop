import MainNavbar from "./components/MainNavbar";
import TopNavbar from "./components/TopNavbar";
import BestSellers from "./components/BestSellers";
import FeaturedProduct from "./components/FeaturedProduct";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";

function App() {
    return (
        <div>
            <TopNavbar />
            <MainNavbar />
            <HeroCarousel />
            <BestSellers />
            <FeaturedProduct />
            <Footer />

            {/* altele */}
        </div>
    );
}

export default App;
