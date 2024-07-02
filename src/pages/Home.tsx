import HeroSection from "../components/HeroSection.tsx";
import Products from "../components/products/Products.tsx";
import AboutComponent from "../components/AboutComponent.tsx";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Products/>
            <AboutComponent/>
        </div>
    );
};

export default Home;
