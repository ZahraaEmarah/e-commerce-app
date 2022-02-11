import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import ProductDetails from "../Containers/ProductDetails"
import About from "./About";
import NavBar from "./NavBar";
import Login from "./Login";

let AppRouting = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Products" element={<Home />} />
                <Route path="/Products/:id" element={<ProductDetails />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting;