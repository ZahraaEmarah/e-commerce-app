import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import ProductDetails from "../Containers/ProductDetails"

let AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<Home/>}/>
                <Route path="/Products/:id" element={<ProductDetails/>}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting;