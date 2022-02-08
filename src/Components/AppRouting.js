import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";

let AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting;