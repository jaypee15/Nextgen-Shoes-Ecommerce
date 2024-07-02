import HeroSection from "../components/HeroSection.tsx";
import Products from "../components/products/Products.tsx";
import AboutComponent from "../components/AboutComponent.tsx";
import ProductDetailsComponent from "../components/ProductDetailsComponent.tsx";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Products/>
            <AboutComponent/>
            <ProductDetailsComponent/>
        </div>
    );
};

export default Home;
