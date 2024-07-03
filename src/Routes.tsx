import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Shop from "./pages/Shop.tsx";
import Cart from "./pages/Cart.tsx";
import Favorites from "./pages/Favorites.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import SearchResults from "./components/navbar/SearchResults.tsx";

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "", element: <Home/>},
                {path: "login", element: <Login/>},
                {path: "register", element: <Register/>},
                {path: "about", element: <About/>},
                {path: "contact", element: <Contact/>},
                {path: "shop", element: <Shop/>},
                {path: "cart", element: <Cart/>},
                {path: "product/:id", element: <ProductDetails/>},
                {path: "favorites", element: <Favorites/>},
                {path: "search", element: <SearchResults/>},
            ],
            errorElement: <ErrorPage/>,
        }
    ]);
};

export default Routes;
